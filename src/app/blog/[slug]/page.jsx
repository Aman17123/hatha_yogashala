import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, UserRound } from "lucide-react";
import { BlogCard, } from "@/components/Interactive";
import { Breadcrumbs, ButtonLink, Container, FinalCTA, JsonLd } from "@/components/ui";
import { getPost, posts } from "@/data/blogData";
import { absoluteUrl, makeMetadata, site } from "@/data/siteData";

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const metadata = makeMetadata(post.seoTitle || post.title, post.excerpt, `/blog/${post.slug}`, post.image);
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
    new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(new Date(value));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.updated,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />
      <article>
        <header className="article-header">
          <Container className="article-header-inner">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]} />
            <p className="eyebrow plain">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="article-deck">{post.excerpt}</p>
            <div className="article-meta">
              <span><UserRound aria-hidden="true" />{post.author}</span>
              <span><CalendarDays aria-hidden="true" />Published {formatDate(post.date)}</span>
              <span><Clock3 aria-hidden="true" />{post.readingTime}</span>
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
                <a href={`#${slugify(section.heading)}`} key={section.heading}>{section.heading}</a>
              ))}
            </nav>
          </aside>
          <div className="article-content">
            <p className="article-updated">Updated {formatDate(post.updated)}</p>
            {post.sections.map((section) => (
              <section id={slugify(section.heading)} key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <div className="author-card">
              <div aria-hidden="true">HY</div>
              <div>
                <strong>{post.author}</strong>
                <p>Original planning guidance from Hatha Yogashala. School-specific claims remain unpublished until verified.</p>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <section className="section section-peach">
        <Container>
          <div className="section-heading"><p className="eyebrow plain">Keep reading</p><h2>Related articles</h2></div>
          <div className="related-posts">
            {related.map((item) => (
              <BlogCard post={item} key={item.slug} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA title="Compare yoga study in Goa" text="Explore the course frameworks, then ask for confirmed dates, fees, teachers, and credentials." />
    </>
  );
}
