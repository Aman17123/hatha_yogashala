import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Clock, Sparkles, Wind } from "lucide-react";
import { Container, FinalCTA, JsonLd, PageHero } from "@/components/ui";
import { pranayamaCourses } from "@/data/pranayamaData";
import { absoluteUrl, site } from "@/data/siteData";
import { pagesMetadata } from "@/data/pages-metadata";
import { buildMetadata } from "@/lib/seo";
import { ORG_ID, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata(pagesMetadata.onlinePranayama);

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pranayama & Breathwork Programs",
  description:
    "Systematic breathwork courses from foundational diaphragmatic breathing to advanced Kumbhaka and Bandha mastery.",
  url: absoluteUrl("/online-pranayama"),
  publisher: {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "The Hatha Yogashala",
    url: site.url,
  },
};

export default function OnlinePranayamaHubPage() {
  const mainCourses = pranayamaCourses.filter((c) => c.slug !== "prana-circle");
  const pageSchema = webPageSchema(
    "/online-pranayama",
    pagesMetadata.onlinePranayama.title,
    pagesMetadata.onlinePranayama.description,
  );

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={hubSchema} />
      <PageHero
        eyebrow="Classical Breathwork & Mastery"
        title="The Hatha Yogashala — Pranayama & Breathwork"
        text="Experience authentic yogic breathing from foundational respiratory anatomy to advanced Kumbhaka ratios, energy locks (Bandhas), and daily guided sadhana with Master teachers."
      />

      <section className="section bg-white">
        <Container>
          <div className="section-heading">
            <p className="eyebrow plain">Structured Curriculum</p>
            <h2>Explore Our Breathwork Programs</h2>
            <p className="max-w-2xl mx-auto">
              Follow our sequential path from foundational diaphragmatic training to master-level Kundalini breathwork, or join our ongoing daily community practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {mainCourses.map((course) => (
              <div
                key={course.slug}
                className="group flex flex-col rounded-3xl border border-[var(--border)] bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={course.heroImage}
                    alt={course.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)] shadow-xs">
                      <Wind size={12} />
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="inline-flex rounded-full bg-[var(--brown)]/90 backdrop-blur-md px-3 py-1 text-[12px] font-bold text-white shadow-xs">
                      {course.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
                      {course.eyebrow}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[var(--brown)] mt-1 group-hover:text-[var(--coral-dark)] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 leading-relaxed line-clamp-3">
                      {course.summary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[var(--border)]/70 flex items-center justify-between text-xs text-[#433c37] font-medium">
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-[var(--coral-dark)]" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award size={13} className="text-[var(--coral-dark)]" />
                        Certification
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      href={`/online-pranayama/${course.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--surface)] px-4 py-3 text-xs sm:text-sm font-bold text-[var(--coral-dark)] transition-all hover:bg-[var(--coral-dark)] hover:text-white"
                    >
                      <span>Explore Course Syllabus</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prana Circle Community Banner */}
          <div className="mt-14 rounded-3xl bg-gradient-to-r from-[var(--surface)] via-[var(--cream)] to-[var(--surface)] p-8 sm:p-10 border border-[var(--border)] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)] mb-2">
                  <Sparkles size={14} /> Global Sangha & Satsang
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[var(--brown)]">
                  The Prana Circle — Alumni Monthly Community
                </h3>
                <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed max-w-2xl">
                  A sacred monthly gathering where course graduates and subscribers practice synchronized global breathwork and explore classical texts with our senior faculty.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/online-pranayama/prana-circle"
                  className="button button-primary !py-3.5 !px-6 text-sm font-bold shadow-md"
                >
                  <span>Learn About Prana Circle</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Transform Your Breath, Transform Your Life"
        text="Begin with the Pre-Pranayama Foundation or join our Daily Pranayama Classes for ongoing guidance."
        height="auto"
        className="!min-h-[260px] !py-8 md:!py-10"
      />
    </>
  );
}
