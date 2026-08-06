import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, UserRound } from "lucide-react";
import { BlogExplorer } from "@/components/Interactive";
import { Container, JsonLd, PageHero } from "@/components/ui";
import { posts } from "@/data/blogData";
import { absoluteUrl, pageMetadata } from "@/data/siteData";

export const metadata = pageMetadata("blog");

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Hatha Yogashala Yoga Blog",
  description:
    "Practical yoga guides from Hatha Yogashala in Goa — choosing yoga teacher training, planning a retreat near Arambol, and building a sustainable practice.",
  url: absoluteUrl("/blog"),
  publisher: {
    "@type": "Organization",
    name: "Hatha Yogashala",
    url: absoluteUrl("/"),
  },
  blogPost: posts.slice(0, 6).map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
  })),
};

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <JsonLd data={blogSchema} />
      <PageHero
        eyebrow="Journal"
        title="Yoga Study & Goa Travel Guides"
        text="Practical, original articles to help students compare yoga teacher training in Goa, plan a retreat near Arambol, and build a sustainable home practice."
      />

      <section className="section">
        <Container>
          <div className="section-heading section-heading--blog">
            <p className="eyebrow plain">Featured guide</p>
            <h2>From the journal</h2>
          </div>
          <article className="featured-post group">
            <Link href={`/blog/${featured.slug}`} className="featured-post-image block">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="featured-post-category">{featured.category}</span>
            </Link>
            <div className="flex flex-col">
              <span className="blog-card-meta inline-flex flex-wrap gap-x-4 gap-y-1.5 text-[13.5px] font-medium text-[var(--muted)]">
                <span className="flex items-center gap-1.5">
                  <UserRound size={13} aria-hidden="true" />
                  {featured.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={13} aria-hidden="true" />
                  {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock3 size={13} aria-hidden="true" />
                  {featured.readingTime}
                </span>
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-black transition-colors group-hover:text-[var(--coral-dark)] sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                {featured.excerpt}
              </p>
              <Link
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--coral-dark)] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[var(--coral-dark)]/20 transition-all duration-200 hover:bg-[var(--coral-dark)] hover:shadow-lg"
                href={`/blog/${featured.slug}`}
              >
                Read the guide
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </Container>
      </section>

      <section className="section section-peach">
        <Container>
          <div className="section-heading section-heading--blog">
            <p className="eyebrow plain">All articles</p>
            <h2>Explore by topic</h2>
            <p>Search the full article library or filter by category.</p>
          </div>
          <BlogExplorer posts={[featured, ...rest]} />
        </Container>
      </section>
    </>
  );
}
