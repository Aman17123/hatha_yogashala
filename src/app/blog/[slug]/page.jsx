import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, UserRound } from "lucide-react";
import { BlogCard } from "@/components/Interactive";
import { Breadcrumbs, Container, FinalCTA, JsonLd } from "@/components/ui";
import { getPost, posts } from "@/data/blogData";
import { makeMetadata } from "@/data/siteData";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatRichText(text) {
  if (typeof text !== "string") return text;

  const tokens = [];
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const label = match[2];
      let href = match[3];

      if (href.includes("claude.ai") || href.startsWith("#")) {
        const lower = label.toLowerCase();
        if (lower.includes("retreat")) href = "/retreats";
        else if (lower.includes("holiday")) href = "/holidays";
        else if (lower.includes("200-hour") || lower.includes("teacher training"))
          href = "/courses/200-hour-yoga-teacher-training-goa";
        else if (lower.includes("about") || lower.includes("us")) href = "/about";
        else href = "/courses";
      }

      const isInternal = href.startsWith("/");
      tokens.push(
        isInternal ? (
          <Link
            key={key++}
            href={href}
            className="text-[var(--coral-dark)] font-semibold underline underline-offset-3 hover:text-[var(--brown)]"
          >
            {label}
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--coral-dark)] font-semibold underline underline-offset-3 hover:text-[var(--brown)]"
          >
            {label}
          </a>
        ),
      );
    } else if (match[4]) {
      tokens.push(<strong key={key++}>{match[4]}</strong>);
    } else if (match[5]) {
      tokens.push(<em key={key++}>{match[5]}</em>);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push(text.slice(lastIndex));
  }

  return tokens;
}

function RenderBody({ content }) {
  if (!content) return null;

  const blocks = content.split(/\n\s*\n/);

  return (
    <div className="space-y-4">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (
          trimmed.startsWith("- ") ||
          trimmed.startsWith("* ") ||
          trimmed.startsWith("• ")
        ) {
          const items = trimmed
            .split("\n")
            .map((line) => line.replace(/^[-*•]\s+/, "").trim())
            .filter(Boolean);
          return (
            <ul key={idx} className="list-disc pl-6 space-y-2 text-[#433c37] my-3">
              {items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {formatRichText(item)}
                </li>
              ))}
            </ul>
          );
        }

        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed
            .split("\n")
            .map((line) => line.replace(/^\d+\.\s+/, "").trim())
            .filter(Boolean);
          return (
            <ol key={idx} className="list-decimal pl-6 space-y-2 text-[#433c37] my-3">
              {items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {formatRichText(item)}
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={idx} className="text-[#433c37] leading-relaxed text-[16px]">
            {formatRichText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function SectionTable({ table }) {
  if (!table || !table.headers || !table.rows) return null;
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-[var(--border)] bg-white shadow-xs">
      <table className="w-full text-left border-collapse text-sm sm:text-base">
        <thead>
          <tr className="bg-[var(--cream)] border-b border-[var(--border)]">
            {table.headers.map((h, i) => (
              <th key={i} className="px-4 py-3.5 font-bold text-[var(--brown)]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-black/[0.015] transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-4 py-3 text-[#433c37] font-medium">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const metadata = makeMetadata(
    post.seoTitle || post.title,
    post.excerpt,
    `/blog/${post.slug}`,
    post.image,
  );
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const formatDate = (value) =>
    new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(
      new Date(value),
    );

  const schema = articleSchema(post);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbs} />
      <article>
        <header className="article-header">
          <Container className="article-header-inner">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <p className="eyebrow plain">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="article-deck">{post.excerpt}</p>
            <div className="article-meta">
              <span>
                <UserRound aria-hidden="true" />
                {post.author}
              </span>
              <span>
                <CalendarDays aria-hidden="true" />
                Published {formatDate(post.date)}
              </span>
              <span>
                <Clock3 aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>
          </Container>
        </header>
        <Container className="article-image-wrap">
          <div className="article-image">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 1200px"
            />
          </div>
        </Container>
        <Container className="article-layout">
          <aside className="article-toc">
            <strong>On this page</strong>
            <nav aria-label="Article table of contents">
              {post.sections.map((section) => (
                <a href={`#${slugify(section.heading)}`} key={section.heading}>
                  {section.heading}
                </a>
              ))}
              {post.faqs && post.faqs.length > 0 && (
                <a href="#frequently-asked-questions">Frequently Asked Questions</a>
              )}
            </nav>
          </aside>
          <div className="article-content">
            <p className="article-updated">Updated {formatDate(post.updated)}</p>
            {post.sections.map((section) => (
              <section id={slugify(section.heading)} key={section.heading} className="scroll-mt-24">
                <h2>{section.heading}</h2>
                <RenderBody content={section.body} />
                {section.table && <SectionTable table={section.table} />}
                {section.bodyAfter && <RenderBody content={section.bodyAfter} />}
              </section>
            ))}

            {post.faqs && post.faqs.length > 0 && (
              <section id="frequently-asked-questions" className="mt-12 pt-8 border-t border-[var(--border)] scroll-mt-24">
                <h2 className="text-[var(--brown)] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6 shadow-xs"
                    >
                      <h3 className="font-heading text-lg font-bold text-[var(--brown)] mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-[#433c37] leading-relaxed text-[15.5px]">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="author-card">
              <div aria-hidden="true">HY</div>
              <div>
                <strong>{post.author}</strong>
                <p>
                  Original planning guidance from The Hatha Yogashala. Practical,
                  authentic yogic education and residential study in Goa, India.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <section className="section section-peach">
        <Container>
          <div className="section-heading">
            <p className="eyebrow plain">Keep reading</p>
            <h2>Related articles</h2>
          </div>
          <div className="related-posts">
            {related.map((item) => (
              <BlogCard post={item} key={item.slug} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA
        title="Begin Your Practice in Goa"
        text="Explore our accredited teacher training courses and restorative retreats near Querim Beach, North Goa."
        height="auto"
        className="!min-h-[260px] !py-8 md:!py-10"
      />
    </>
  );
}
