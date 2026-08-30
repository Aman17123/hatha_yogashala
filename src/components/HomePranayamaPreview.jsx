import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Wind } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { FadeIn, Stagger, StaggerItem } from "@/components/retreat/Motion";
import { pranayamaCourses } from "@/data/pranayamaData";

export default function HomePranayamaPreview() {
  const featuredSlugs = [
    "pre-pranayama-foundation-course",
    "beginner-pranayama-course",
    "stress-relief-course",
  ];
  const featured = pranayamaCourses.filter((c) => featuredSlugs.includes(c.slug));

  return (
    <section className="py-10 md:py-14 bg-[var(--cream)] border-y border-[var(--border)] relative overflow-hidden">
      {/* Subtle brand emblem in background */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.04] select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/The-Hatha-Yogashala-hand-logo.png"
          alt="The Hatha Yogashala brand emblem"
          width={700}
          height={700}
          className="object-contain"
        />
      </div>

      <Container>
        <FadeIn className="text-center max-w-2xl mx-auto mb-6 sm:mb-7">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--coral-dark)]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)] mb-2 border border-[var(--coral-dark)]/15">
            <Wind size={13} aria-hidden="true" />
            Breathe · Regulate · Awaken
          </div>
          <h2 className="text-[var(--brown)]">
            Online Pranayama & Breathwork Courses in India
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed font-normal max-w-xl mx-auto">
            Experience the authentic science of classical Indian breathwork, diaphragmatic restoration, and nervous system regulation with Master teachers.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((course) => (
            <StaggerItem key={course.slug} className="flex">
              <div className="group flex flex-col w-full rounded-2xl border border-[var(--border)] bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={course.heroImage}
                    alt={course.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--coral-dark)] shadow-xs">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="inline-flex rounded-full bg-[var(--brown)]/90 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                      {course.price}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
                      {course.eyebrow}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--brown)] mt-0.5 group-hover:text-[var(--coral-dark)] transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed line-clamp-2">
                      {course.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border)]/70 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] text-[#433c37] font-medium">
                      <Clock size={12} className="text-[var(--coral-dark)]" />
                      {course.duration}
                    </span>
                    <Link
                      href={`/online-pranayama/${course.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[var(--coral-dark)] group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Learn more</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-6 sm:mt-7 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <ButtonLink
            href="/online-pranayama"
            className="button button-primary !py-2.5 !px-6 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg"
          >
            <span>View all Pranayama programs</span>
            <ArrowRight size={15} />
          </ButtonLink>
          <Link
            href="/online-pranayama/daily-pranayama-subscription"
            className="text-xs sm:text-sm font-bold text-[var(--coral-dark)] underline underline-offset-4 hover:text-[var(--brown)]"
          >
            Explore Daily Breathwork Sessions →
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
