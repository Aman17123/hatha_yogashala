import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogExplorer } from "@/components/Interactive";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { posts } from "@/data/blogData";
import { makeMetadata } from "@/data/siteData";

export const metadata = makeMetadata(
  "Yoga Teacher Training & Goa Blog",
  "Practical guides to yoga teacher training, course comparison, retreat planning, and studying yoga in Goa.",
  "/blog",
);

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Yoga Study & Goa Guides"
        text="Original, practical articles to help students compare training, plan travel, and ask better questions before enrolment."
      />
      <section className="section">
        <Container>
          <SectionHeading eyebrow="Featured guide" title={featured.title} />
          <article className="featured-post">
            <div className="featured-post-image">
              <Image
                src={featured.image}
                alt=""
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              <span className="placeholder-badge">Editorial placeholder</span>
            </div>
            <div>
              <p className="eyebrow plain">{featured.category} · {featured.readingTime}</p>
              <p>{featured.excerpt}</p>
              <Link className="button button-primary mt-6" href={`/blog/${featured.slug}`}>
                Read the guide <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </article>
        </Container>
      </section>
      <section className="section section-peach">
        <Container>
          <SectionHeading
            eyebrow="All articles"
            title="Explore by topic"
            text="Search the full article library or filter by category."
          />
          <BlogExplorer posts={[featured, ...rest]} />
        </Container>
      </section>
    </>
  );
}
