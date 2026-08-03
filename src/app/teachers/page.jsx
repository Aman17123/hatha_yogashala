import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";
import { teachersData } from "@/data/siteContentData";
import { pageMetadata } from "@/data/siteData";
import {
  ButtonLink,
  Container,
  FinalCTA,
  JsonLd,
  Media,
  PageHero,
  SectionHeading,
} from "@/components/ui";

export const metadata = pageMetadata("teachers");

export default function TeachersPage() {
  const facultySchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Hatha Yogashala",
    employee: teachersData.map((t) => ({
      "@type": "Person",
      name: t.name,
      jobTitle: t.role,
      description: t.bio,
    })),
  };

  return (
    <>
      <JsonLd data={facultySchema} />

      <PageHero
        eyebrow="Expert Faculty"
        title="Our Yoga Teachers in Goa"
        text="Meet the dedicated masters and subject specialists guiding traditional Hatha yoga, functional anatomy, pranayama, and teaching methodology."
        image="/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-portrait.webp"
      />

      {/* Intro Section */}
      <section className="section bg-[var(--cream)]">
        <Container>
          <SectionHeading
            eyebrow="Faculty & Guidance"
            title="Know Who Teaches Your Batch Before You Book"
            text="Every student receives personalized feedback from experienced lead teachers and subject specialists assigned to specific batch dates in writing."
          />

          {/* Detailed Teacher Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {teachersData.map((teacher) => (
              <article
                id={teacher.id}
                key={teacher.id}
                className="rounded-[28px] bg-white border border-[var(--border)] p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-28 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="relative aspect-[4/5] w-full sm:w-44 shrink-0 rounded-2xl overflow-hidden bg-[var(--cream)]">
                    <Image
                      src={teacher.image}
                      alt={teacher.imageAlt || teacher.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 200px"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3 flex-1">
                    <span className="inline-block rounded-full bg-[var(--cream)] border border-[var(--border)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                      {teacher.specialty}
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-[var(--brown)]">
                      {teacher.name}
                    </h2>
                    <p className="text-xs font-semibold text-[var(--coral-dark)]">
                      {teacher.role}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs text-[var(--muted)] pt-1">
                      <span className="flex items-center gap-1.5">
                        <Award size={14} className="text-[var(--coral-dark)]" />
                        <strong>Qual:</strong> {teacher.qualifications}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={14} className="text-[var(--coral-dark)]" />
                        <strong>Exp:</strong> {teacher.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[var(--text)] leading-relaxed border-t border-[var(--border)]/60 pt-4">
                  {teacher.bio}
                </p>

                {/* Courses Taught by Teacher */}
                {teacher.coursesTaught && teacher.coursesTaught.length > 0 && (
                  <div className="bg-[var(--cream)]/50 rounded-2xl p-4 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--brown)]">
                      Courses Taught:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {teacher.coursesTaught.map((courseName) => (
                        <span
                          key={courseName}
                          className="rounded-lg bg-white border border-[var(--border)] px-3 py-1 text-xs text-[var(--brown)] font-medium"
                        >
                          {courseName}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Verification Checklist */}
      <section className="section section-peach">
        <Container>
          <SectionHeading
            eyebrow="Faculty Transparency"
            title="Five Standards Every Faculty Profile Meets"
            text="We publish teacher details with clarity so you can verify who guides your training."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              "Approved name and current portrait",
              "Assigned lead subjects and roles",
              "Verified qualifications & certifications",
              "Relevant teaching experience in years",
              "Confirmed batch availability in writing",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white border border-[var(--border)] p-5 shadow-sm">
                <ShieldCheck size={20} className="text-[var(--coral-dark)] shrink-0 mt-0.5" />
                <h3 className="text-sm font-semibold text-[var(--brown)] leading-snug">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA title="Ask who will teach your batch in Goa" />
    </>
  );
}
