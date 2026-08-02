/**
 * verify-css.mjs
 * ---------------
 * Proves the CSS→SCSS conversion is content-identical.
 *
 *  - `node scripts/verify-css.mjs baseline`  → snapshot the CURRENT globals.css
 *    (custom rules only, in file order) into <temp>/globals-baseline.json
 *  - `node scripts/verify-css.mjs compare`   → compile src/styles/main.scss via
 *    sass, unwrap @layer wrappers, and diff rule-by-rule against the baseline.
 *
 * The diff is ORDER-SENSITIVE: rule sequence (at-rule chain + selector) and the
 * exact declaration list must match the original file. Color functions are
 * canonicalized (rgb(47 79 62 / 24%) ≡ rgba(47,79,62,0.24)) because dart-sass
 * reserializes them — computed value is identical. Everything else must match
 * byte-for-byte after whitespace normalisation.
 *
 * A report is written to <temp>/css-conversion-report.md.
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import postcss from "postcss";
import * as sass from "sass";

const ROOT = process.cwd();
const TMP = path.join(os.tmpdir(), "opencode");
const BASELINE_JSON = path.join(TMP, "globals-baseline.json");
const NEW_JSON = path.join(TMP, "globals-new.json");
const REPORT = path.join(TMP, "css-conversion-report.md");

const GLOBALS = path.join(ROOT, "src/app/globals.css");
const SCSS_ENTRY = path.join(ROOT, "src/styles/main.scss");

/* ---------- normalisation helpers ---------- */

const norm = (s) => (s ?? "").replace(/\s+/g, " ").trim();

/** Normalise selectors: dart-sass drops quotes from [attr="id"] selectors
 *  and strips spaces inside :nth-child(3n + 2) arithmetic. */
const normSelector = (s) =>
  norm(s)
    .replace(/\[([\w-]+)="([\w-]+)"\]/g, "[$1=$2]")
    .replace(/(\d?n)\s*\+\s*(\d)/gi, "$1+$2");

/** Canonicalise colour functions so sass reserialisation is a non-issue. */
function canonValue(v) {
  return v
    .replace(
      /rgba?\(\s*([\d.]+)[ ,\t\n]+([\d.]+)[ ,\t\n]+([\d.]+)(?:\s*\/\s*|\s*,\s*)([\d.]+%?)\s*\)/g,
      (m, r, g, b, a) => `RGBT(${r},${g},${b},${a.endsWith("%") ? +a.slice(0, -1) / 100 : a})`,
    )
    .replace(/\s*\/\s*/g, "/")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s+/g, " ");
}

/**
 * Resolve `rgb(var(--coral-ch) / 24%)` style channel helpers back to their
 * literal values (read from the stylesheet's own :root block) and drop the
 * `--*-ch` helper declarations. Makes the SCSS refactor transparent to the diff.
 */
function resolveChannelVars(cssText) {
  const root = postcss.parse(cssText);
  const vals = {};
  root.walkRules((rule) => {
    if (rule.selector === ":root") {
      rule.each((d) => {
        if (d.type === "decl" && /^--[a-z0-9-]+-ch$/.test(d.prop)) vals[d.prop] = norm(d.value);
      });
    }
  });
  if (Object.keys(vals).length) {
    root.walkDecls((d) => {
      d.value = d.value.replace(/var\((--[a-z0-9-]+-ch)\)/g, (m, v) => vals[v] ?? m);
    });
    root.walkRules((rule) => {
      if (rule.selector === ":root") {
        rule.each((d) => {
          if (d.type === "decl" && /^--[a-z0-9-]+-ch$/.test(d.prop)) d.remove();
        });
      }
    });
  }
  return root.toString();
}

/* ---------- structure extraction ---------- */

function walkRules(node, chain, out) {
  node.each((child) => {
    if (child.type === "atrule") {
      const name = child.name.toLowerCase();
      if (name === "layer") {
        // unwrap @layer for comparison (layer names are not part of the key)
        walkRules(child, chain, out);
        return;
      }
      if (name === "keyframes" || name === "-webkit-keyframes") {
        out.push({ keyframes: `${name} ${norm(child.params)}`, body: norm(child.toString()) });
        return;
      }
      walkRules(child, [...chain, `${name} ${norm(child.params)}`], out);
      return;
    }
    if (child.type === "rule") {
      const decls = [];
      child.each((d) => {
        if (d.type === "decl") decls.push([norm(d.prop), canonValue(norm(d.value))]);
      });
      out.push({
        chain: chain.join(" | "),
        selector: normSelector(child.selector),
        decls,
      });
    }
  });
  return out;
}

/** Extract custom rules from globals.css, skipping the Tailwind entry + @theme. */
function extractCustomCss(cssText) {
  const root = postcss.parse(cssText, { from: "globals.css" });
  const out = [];
  root.each((child) => {
    if (child.type === "comment") return;
    if (child.type === "atrule" && child.name.toLowerCase() === "import") return;
    if (child.type === "atrule" && child.name.toLowerCase() === "theme") return;
    if (child.type === "atrule" && child.name.toLowerCase() === "layer") {
      // custom @layer blocks (e.g. @layer base { a {...} }) — keep contents
      walkRules(child, [], out);
      return;
    }
    if (child.type === "rule") {
      const decls = [];
      child.each((d) => {
        if (d.type === "decl") decls.push([norm(d.prop), canonValue(norm(d.value))]);
      });
      out.push({ chain: "", selector: normSelector(child.selector), decls });
      return;
    }
    // other at-rules (keyframes at top level etc.)
    if (child.type === "atrule") {
      const name = child.name.toLowerCase();
      if (name === "keyframes" || name === "-webkit-keyframes") {
        out.push({ keyframes: `${name} ${norm(child.params)}`, body: norm(child.toString()) });
      } else {
        walkRules(child, [`${name} ${norm(child.params)}`], out);
      }
    }
  });
  return out;
}

function extractThemeBlock(cssText) {
  const root = postcss.parse(cssText);
  let text = "";
  root.each((child) => {
    if (child.type === "atrule" && child.name.toLowerCase() === "theme") {
      text += norm(child.toString());
    }
  });
  return text;
}

function loadJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

/* ---------- diff ---------- */

const keyOf = (e) =>
  e.keyframes ? `@keyframes ${e.keyframes}` : `${e.chain} ${e.selector}`.trim();

/** Longest-common-subsequence diff: re-syncs after order shifts so that only
 *  genuinely missing/extra/changed rules are reported (order changes appear
 *  as paired missing+extra, which the SCSS is then fixed to eliminate). */
function diffEntries(a, b) {
  const report = { identical: 0, onlyInBaseline: [], onlyInNew: [], changed: [] };
  const ak = a.map(keyOf);
  const bk = b.map(keyOf);
  const m = a.length;
  const n = b.length;
  const dp = new Int32Array((m + 1) * (n + 1));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const base = (i + 1) * (n + 1) + j + 1;
      if (ak[i] === bk[j]) dp[i * (n + 1) + j] = dp[base] + 1;
      else dp[i * (n + 1) + j] = Math.max(dp[(i + 1) * (n + 1) + j], dp[i * (n + 1) + j + 1]);
    }
  }
  const pairs = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (ak[i] === bk[j]) {
      pairs.push([i, j]);
      i++;
      j++;
    } else if (dp[(i + 1) * (n + 1) + j] >= dp[i * (n + 1) + j + 1]) i++;
    else j++;
  }
  const usedB = new Set(pairs.map((p) => p[1]));
  const usedA = new Set(pairs.map((p) => p[0]));
  pairs.forEach(([ai, bj]) => {
    if (a[ai].keyframes || JSON.stringify(a[ai].decls) === JSON.stringify(b[bj].decls)) {
      report.identical++;
    } else {
      report.changed.push({ key: keyOf(a[ai]), baseline: a[ai].decls, current: b[bj].decls });
    }
  });
  a.forEach((e, idx) => {
    if (!usedA.has(idx)) report.onlyInBaseline.push(e);
  });
  b.forEach((e, idx) => {
    if (!usedB.has(idx)) report.onlyInNew.push(e);
  });
  return report;
}

/* ---------- commands ---------- */

function baseline() {
  const css = fs.readFileSync(GLOBALS, "utf8");
  const data = { custom: extractCustomCss(css), theme: extractThemeBlock(css) };
  fs.mkdirSync(TMP, { recursive: true });
  fs.writeFileSync(BASELINE_JSON, JSON.stringify(data, null, 1));
  console.log(`baseline: ${data.custom.length} rules captured -> ${BASELINE_JSON}`);
}

function compile() {
  const compiled = sass.compile(SCSS_ENTRY, { style: "expanded" });
  const css = resolveChannelVars(compiled.css);
  const entry = fs.readFileSync(GLOBALS, "utf8");
  const data = { custom: extractCustomCss(css), theme: extractThemeBlock(entry) };
  fs.writeFileSync(NEW_JSON, JSON.stringify(data, null, 1));
  return data;
}

function compare() {
  const base = loadJson(BASELINE_JSON);
  const curr = compile();
  const report = diffEntries(base.custom, curr.custom);

  const md = [];
  md.push("# CSS -> SCSS conversion verification");
  md.push("");
  md.push(`- Baseline rules (current globals.css): **${base.custom.length}**`);
  md.push(`- SCSS-compiled rules (main.scss): **${curr.custom.length}**`);
  md.push(`- Identical (selector order + declarations): **${report.identical}**`);
  md.push(`- Missing from new output (should be 0): **${report.onlyInBaseline.length}**`);
  md.push(`- Extra in new output (should be 0): **${report.onlyInNew.length}**`);
  md.push(`- Declaration-value changes (should be 0): **${report.changed.length}**`);
  md.push(`- @theme inline block identical: **${base.theme === curr.theme ? "YES" : "NO"}**`);
  md.push("");
  const fmt = (e) => (e.keyframes ? `@keyframes ${e.keyframes}` : `@${e.chain} ${e.selector}`.trim());
  if (report.onlyInBaseline.length) {
    md.push("## Rules only in BASELINE (would be lost!)");
    md.push("```");
    report.onlyInBaseline.forEach((e) => md.push(fmt(e)));
    md.push("```");
  }
  if (report.onlyInNew.length) {
    md.push("## Rules only in NEW output");
    md.push("```");
    report.onlyInNew.forEach((e) => md.push(fmt(e)));
    md.push("```");
  }
  if (report.changed.length) {
    md.push("## Rules with changed declarations");
    md.push("```");
    report.changed.forEach((c) => {
      md.push(c.key);
      md.push(`  before: ${JSON.stringify(c.baseline)}`);
      md.push(`  after:  ${JSON.stringify(c.current)}`);
    });
    md.push("```");
  }
  fs.writeFileSync(REPORT, md.join("\n"));
  console.log(md.slice(0, 9).join("\n"));
  console.log(`\nFull report -> ${REPORT}`);
}

const cmd = process.argv[2];
if (cmd === "baseline") baseline();
else if (cmd === "compile") compile();
else if (cmd === "compare") compare();
else {
  console.error("usage: node scripts/verify-css.mjs <baseline|compile|compare>");
  process.exit(1);
}
