import Image from "next/image";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { teachersData } from "@/data/siteContentData";
import { pageMetadata } from "@/data/siteData";
import {
  ButtonLink,
  Container,
  FinalCTA,
  JsonLd,
  PageHero,
  SectionHeading,
} from "@/components/ui";

export const metadata = pageMetadata("teachers");

const teachingPillars = [
  {
    icon: Compass,
    title: "Classical Shastra & Lineage",
    description:
      "Rooted in classical texts including the Hatha Yoga Pradipika, Gheranda Samhita, and Patanjali's Yoga Sutras — teaching authentic yogic science without commercial dilutions.",
  },
  {
    icon: Award,
    title: "Functional Bio-Mechanics",
    description:
      "Modern functional anatomy integrated with traditional alignment. We teach how to adapt postures safely for all body types, injury histories, and mobility levels.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Mentorship",
    description:
      "Ego-free guidance with small student-to-teacher ratios. Every student receives personal feedback, physical adjustment clinics, and voice-coaching.",
  },
  {
    icon: GraduationCap,
    title: "Daily Teaching Practicums",
    description:
      "You begin cueing, adjusting, and leading sequences from the first week, graduating with authentic confidence to teach worldwide.",
  },
];

const facultyAdvantages = [
  {
    title: "15+ Years Full-Time Experience",
    description:
      "Our lead teachers are E-RYT 500 certified masters who live and breathe yoga, having mentored over 1,500 successful graduates globally.",
  },
  {
    title: "Low Student-to-Teacher Ratio",
    description:
      "We deliberately cap our batch sizes so faculty members can observe, adjust, and guide every single student individually on the mat.",
  },
  {
    title: "Lifelong Alumni Mentorship",
    description:
      "Your relationship with faculty extends beyond graduation with ongoing career advice, class sequencing reviews, and direct WhatsApp support.",
  },
];

export default function TeachersPage() {
  const facultySchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "The Hatha Yogashala",
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
        image="/images/hatha-yogashala/hatha-yogashala-pernem-goa-yoga-teacher-training-graduation-photo-01.webp"
        imageAlt="The Hatha Yogashala teaching faculty and students at graduation ceremony in Goa"
      />

      {/* 1. Intro & Teacher Cards Grid */}
      <section className="section bg-[var(--cream)]">
        <Container>
          <SectionHeading
            eyebrow="Faculty & Guidance"
            title="Know Who Teaches Your Batch Before You Book"
            text="Every student receives personalized feedback from experienced lead teachers and subject specialists assigned to specific batch dates in writing."
          />

          {/* Detailed Teacher Grid with Circular Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {teachersData.map((teacher) => (
              <article
                id={teacher.id}
                key={teacher.id}
                className="rounded-[28px] bg-white border border-[var(--border)] p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-28 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  {/* Circular Avatar Photo */}
                  <div className="relative aspect-square w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-full overflow-hidden bg-[var(--cream)] border-4 border-white shadow-md mx-auto sm:mx-0">
                    <Image
                      src={teacher.image}
                      alt={teacher.imageAlt || teacher.name}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3 flex-1">
                    <span className="inline-block rounded-full bg-[var(--cream)] border border-[var(--border)] px-3 py-1 text-[13.5px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                      {teacher.specialty}
                    </span>
                    <h3 className="text-2xl font-bold text-[var(--brown)]">
                      {teacher.name}
                    </h3>
                    <p className="text-[13.5px] font-semibold text-[var(--coral-dark)]">
                      {teacher.role}
                    </p>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-[13.5px] text-[var(--muted)] pt-1">
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
                    <h3 className="text-[13.5px] font-bold uppercase tracking-wider text-[var(--brown)]">
                      Courses Taught:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {teacher.coursesTaught.map((courseName) => (
                        <span
                          key={courseName}
                          className="rounded-lg bg-white border border-[var(--border)] px-3 py-1 text-[13.5px] text-[var(--brown)] font-medium"
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

      {/* 2. New Section: Teaching Philosophy & Lineage */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Pedagogical Approach"
            title="Our Teaching Philosophy & Methodology"
            text="How our faculty bridges ancient Vedic wisdom with modern anatomical science to develop grounded, compassionate, and capable teachers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {teachingPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-sm space-y-3 transition-all hover:shadow-md flex flex-col"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-[var(--cream)] text-[var(--coral-dark)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-[var(--brown)]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--text)] leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. New Section: Why Learn With Our Faculty */}
      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow">
                <Sparkles aria-hidden="true" size={15} />
                Why Our Faculty
              </span>
              <h2 className="section-title text-[var(--brown)]">
                Direct Mentorship From Dedicated Practitioners
              </h2>
              <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
                At The Hatha Yogashala, teaching is a sacred seva (service). Our teachers do not just give lectures; they practice alongside you, guide your adjustments daily, and nurture your personal voice as a yoga teacher.
              </p>
              <div className="pt-2">
                <ButtonLink href="/apply" variant="primary">
                  <span>Apply for Next Batch</span>
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {facultyAdvantages.map((adv) => (
                <div
                  key={adv.title}
                  className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-sm space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-[var(--coral-dark)] shrink-0" />
                    <h3 className="text-lg font-bold text-[var(--brown)]">
                      {adv.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text)] leading-relaxed pl-7">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Faculty Transparency Standards */}
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
