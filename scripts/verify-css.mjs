/**
 * verify-css.mjs
 * ---------------
 * Sanity check after the SCSS consolidation (src/styles/* removed,
 * all stylesheet content now lives in src/app/globals.css).
 *
 *  - `node scripts/verify-css.mjs` → verifies that:
 *      1. no SCSS-specific syntax remains in globals.css
 *         ($vars, #{...} interpolation, nesting `&:`, `//` comments)
 *      2. every rule that used to come from src/styles/* (and had no
 *         globals.css counterpart) is still defined:
 *         element type-scale (h1..h6, p, li, small),
 *         .hero-stats base block, .brand-logo lockup,
 *         .fa-wa / .fa-tooltip, .quick-nav*, .home-page*
 *      3. the two layer wrappers exist (base + components)
 *
 * A report is written to <temp>/css-consolidation-report.md.
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const ROOT = process.cwd();
const TMP = path.join(os.tmpdir(), "opencode");
const REPORT = path.join(TMP, "css-consolidation-report.md");
const GLOBALS = path.join(ROOT, "src/app/globals.css");

const css = fs.readFileSync(GLOBALS, "utf8");
const lines = css.split("\n");
const failures = [];
const notes = [];

/* ---------- 1. no sass-only syntax ---------- */

const sassSyntaxChecks = [
  ["SCSS $variable", /\$[a-z][a-z0-9-]*\s*:/],
  ["SCSS // comment", /^\s*\/\//m],
  ["SCSS interpolation #{}", /#\{/],
  ["SCSS @use/@import of local files", /@(use|forward)\s+["']/],
  ["SCSS darken/lighten", /\b(darken|lighten)\s*\(/],
  ["SCSS @mixin/@include/@extend", /@(mixin|include|extend)\b/],
  ["Sass nesting (&)", /&:\w+|&\.\w+|&\s*\{/],
];
for (const [label, re] of sassSyntaxChecks) {
  const m = css.match(re);
  if (m) failures.push(`${label} — found ${JSON.stringify(m[0])} at offset ${m.index}`);
}

/* ---------- 2. former _scss-only rules still present ---------- */

const mustContain = [
  ["h1 element type after style", /^  h1 \{[\s\S]*?font-size: 48px/m],
  ["h6 element type", /^  h6 \{/m],
  ["p element type (15.5px)", /^  p \{[\s\S]*?font-size: 15\.5px/m],
  ["li element type", /^  li \{/m],
  ["small element type (13px)", /^  small \{[\s\S]*?font-size: 13px/m],
  [".hero-stats base block", /\.hero-stats \{[\s\S]*?backdrop-filter: blur\(6px\)/],
  [".hero-stats strong.stat-number", /\.hero-stats strong\.stat-number/],
  [".brand-logo lockup", /\.brand-logo \{[\s\S]*?\.brand-logo-mark/],
  [".fa-wa circle FAB", /\.floating-actions a\.fa-wa \{/],
  [".fa-tooltip tooltip", /\.fa-tooltip \{[\s\S]*?border-left-color: var\(--ink\)/],
  [".quick-nav container", /\.quick-nav \{[^-a-z]/],
  [".quick-nav-tab", /\.quick-nav-tab \{/],
  [".quick-nav-panel", /\.quick-nav-panel \{/],
  [".home-page section framing", /\.home-page > section,[\s\S]*?\.home-page > div > section \{/],
  [".home-page !important density (hero-copy h1 56px)", /\.home-page \.hero-copy h1 \{[^}]*56px/],
  ["tier1 1536px media", /@media \(min-width: 1024px\) and \(max-width: 1536px\)/],
  ["tier2 1440px media", /@media \(min-width: 1024px\) and \(max-width: 1440px\)/],
];
for (const [label, re] of mustContain) {
  if (re.test(css)) notes.push(`ok: ${label}`);
  else failures.push(`missing: ${label}`);
}

/* ---------- 3. layer scaffolding ---------- */
if (!/@layer base\s*\{/.test(css)) failures.push("missing @layer base block");
else notes.push("ok: @layer base");
if (!/@layer components\s*\{/.test(css)) failures.push("missing @layer components block");
else notes.push("ok: @layer components");
if (!/`\.scss`|\bscss\b/.test(css.toLowerCase())) notes.push("ok: no .scss references");

/* ---------- report ---------- */
const md = [];
md.push("# SCSS consolidation verification");
md.push("");
md.push(`- globals.css: ${lines.length} lines (${css.length.toLocaleString()} chars)`);
md.push(`- SASS-only syntax leaks: **${failures.filter((f) => f.includes("—")).length}**`);
md.push(`- Missing former SCSS-only rules: **${failures.filter((f) => f.startsWith("missing")).length}**`);
md.push("");
if (failures.length) {
  md.push("## FAILURES");
  failures.forEach((f) => md.push(`- ${f}`));
} else {
  md.push("All checks passed.");
}
md.push("## OK");
notes.forEach((n) => md.push(`- ${n}`));
fs.writeFileSync(REPORT, md.join("\n"));
console.log(md.slice(0, 7).join("\n"));
console.log(`\nFull report -> ${REPORT}`);
if (failures.length) process.exit(1);