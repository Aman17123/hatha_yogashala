import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Compass,
  Heart,
  Leaf,
  MapPin,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { retreats, shortPrograms, teacherTrainings } from "@/data/coursesData";
import { posts } from "@/data/blogData";
import {
  facilities,
  faqs,
  galleryItems,
  heroStats,
  reviewProfile,
  site,
  testimonials,
} from "@/data/siteData";
import {
  ButtonLink,
  Container,
  FinalCTA,
  GoogleMark,
  JsonLd,
  Media,
  ProgramCard,
  RetreatCard,
  SectionHeading,
  ShortProgramCard,
} from "./ui";
import { Accordion, CountUp, Gallery, WhyChooser, BlogCard } from "./Interactive";
import AboutPreview from "./AboutPreview";
import FounderPreview from "./FounderPreview";
import TeachersPreview from "./TeachersPreview";
import EnrolmentQuestions from "./EnrolmentQuestions";

const whyItems = [
  {
    title: "A curriculum you can inspect",
    content:
      "Course pages explain the learning goal, suitability, subjects, teaching method, daily rhythm, stay, price checks, and the limits of each completion document.",
    image: "/images/course-goa-yoga.png",
    alt: "Small group studying yoga alignment in Goa",
  },
  {
    title: "Information before payment",
    content:
      "Dates, total price, room category, meals, teachers, inclusions, assessment, certification, and cancellation terms are confirmed in writing before a reservation is treated as complete.",
    image: "/images/accommodation-goa.png",
    alt: "Calm residential room representing accommodation choices in Goa",
  },
  {
    title: "Practice suited to the student",
    content:
      "The enquiry process asks about experience, injuries, health, accessibility, dietary needs, room preference, and travel questions so suitability can be discussed early.",
    image: "/images/hatha-yoga-class-goa.png",
    alt: "Teacher observing a student during a Hatha yoga practice",
  },
  {
    title: "A grounded Goa setting",
    content:
      "Residential planning accounts for coastal weather, rest, wet-season access, transport, hydration, laundry, and quiet time instead of treating Goa as scenery alone.",
    image: "/images/goa-coast-yoga-retreat.png",
    alt: "Palm-fringed Goa coastline beside a quiet nature path",
  },
];

const comparisonRows = [
  ["Duration", ...teacherTrainings.map((course) => course.duration)],
  ["Level", ...teacherTrainings.map((course) => course.level)],
  ["Curriculum", ...teacherTrainings.map((course) => course.focus.join(", "))],
  ["Accommodation", ...teacherTrainings.map((course) => course.room)],
  [
    "Completion document",
    ...teacherTrainings.map((course) => course.certification),
  ],
  ["Ideal student", ...teacherTrainings.map((course) => course.bestFor)],
  ["Shared-room price", ...teacherTrainings.map((course) => course.price)],
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const stats = heroStats.map((stat) =>
    stat.key === "programs"
      ? {
          ...stat,
          value:
            teacherTrainings.length + shortPrograms.length + retreats.length,
        }
      : stat,
  );

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ===== 1. HERO — headline, intro copy, and school stats ===== */}
      <section className="home-hero">
        <Container className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles aria-hidden="true" size={15} />
              Yoga study in Goa, India
            </p>
            <h1>
              Hatha Yogashala
              <em>Yoga School in Goa</em>
            </h1>
            <p className="hero-tagline">
              Yoga teacher training shaped by{" "}
              <em>practice, place &amp; presence.</em>
            </p>
            <p>
              Explore residential Hatha yoga teacher training and restorative
              yoga retreats in Goa, with clear course scope, thoughtful student
              support, and no unsupported claims.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/apply">Reserve your spot</ButtonLink>
              <ButtonLink href="/courses" variant="secondary">
                Explore courses
              </ButtonLink>
            </div>
            <p className="hero-note">
              Batch dates, fees, faculty, and room availability are confirmed in
              writing before payment.
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-sun" aria-hidden="true" />
            <div className="hero-image">
              <Image
                src="/images/hero-goa-yoga.png"
                alt="Yoga practitioner meditating in a peaceful coastal setting in Goa"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
            <div className="hero-stats" aria-label="School statistics">
              {stats.map(({ key, label, value, suffix }) => (
                <div key={key}>
                  <strong>
                    {Number.isFinite(value) ? (
                      <CountUp value={value} suffix={suffix} />
                    ) : (
                      "Not published"
                    )}
                  </strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2. TRUST STRIP — key booking principles at a glance ===== */}
      <section className="trust-strip" aria-label="Booking principles">
        <Container>
          {[
            ["Goa, India", "Confirmed public location"],
            ["Clear course scope", "Training and retreats stay distinct"],
            ["Written fee breakdown", "No unverified discounts or urgency"],
            [
              "Source-backed claims",
              "Credentials and reviews require evidence",
            ],
          ].map(([title, text]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </Container>
      </section>

      {/* ===== 3. ABOUT PREVIEW — short intro to the school ===== */}
      <AboutPreview />

      {/* ===== 4. TEACHER TRAINING — 100/200/300-hour program cards ===== */}
      <section className="section section-peach" id="courses">
        <Container>
          <SectionHeading
            eyebrow="Teacher training"
            title="Choose the depth that fits your path"
            text="Compare level, curriculum, accommodation, completion details, and fees before choosing by hour count."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {teacherTrainings.map((course) => (
              <ProgramCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 5. RETREATS — coastal retreat cards ===== */}
      <section className="section" id="retreats">
        <Container>
          <SectionHeading
            eyebrow="Coastal retreats"
            title="Make room for practice—and for rest"
            text="Each retreat is a personal-practice experience, not a teacher-training course or professional certification."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {retreats.map((retreat) => (
              <RetreatCard key={retreat.slug} retreat={retreat} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 6. SHORT PROGRAMS — meditation, sound, Ayurveda, alignment ===== */}
      <section className="section section-peach" id="short-courses">
        <Container>
          <SectionHeading
            eyebrow="Short programs"
            title="Focused study for a smaller window"
            text="Explore meditation, sound, Ayurveda, or alignment only after checking the approved syllabus, facilitator, duration, and scope."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shortPrograms.map((course) => (
              <ShortProgramCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 7. FOUNDER PREVIEW — introduction to the founder ===== */}
      <FounderPreview />

      {/* ===== 8. TEACHERS PREVIEW — faculty cards ===== */}
      <TeachersPreview />

      {/* ===== 9. WHY CHOOSE US — trust-building reasons ===== */}
      <section className="section">
        <Container>
          <WhyChooser items={whyItems}>
            <SectionHeading
              eyebrow="Why choose us"
              title="What should earn your trust"
              text="Good yoga education begins with information you can inspect and questions you are welcome to ask."
            />
          </WhyChooser>
        </Container>
      </section>

      {/* ===== 10. COURSE COMPARISON — 100 vs 200 vs 300-hour table ===== */}
      <section className="section section-cream" id="comparison">
        <Container>
          <SectionHeading
            eyebrow="Course comparison"
            title="100, 200, or 300 Hours Yoga Teacher Training?"
            text="The 200-hour course is the recommended starting point for aspiring yoga teachers. Compare all pathways and find your perfect match."
          />

          {/* Desktop: Three standalone pop-out cards side by side */}
          <div className="mt-10 hidden md:grid md:grid-cols-3 gap-6 items-start">
            {teacherTrainings.map((course, ci) => {
              const isRec = course.featured;
              return (
                <div
                  key={course.slug}
                  className={`relative flex flex-col rounded-[28px] overflow-hidden transition-all duration-300 ${
                    isRec
                      ? "border-[2.5px] border-[#cf5b50] shadow-[0_12px_48px_rgba(207,91,80,0.18)] -translate-y-3"
                      : "border border-[#e8ddd6] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
                  }`}
                >
                  {/* Card Header */}
                  <div
                    className={`px-5 pt-5 pb-4 ${
                      isRec
                        ? "bg-gradient-to-b from-[#fff0eb] to-[#fff8f5]"
                        : "bg-[#faf7f4]"
                    }`}
                  >
                    {isRec && (
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#cf5b50] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.15em] text-white shadow-sm">
                        <Star className="size-2.5 fill-white" />
                        Most Popular
                      </span>
                    )}
                    <h3
                      className={`text-base font-serif font-bold leading-tight ${
                        isRec ? "text-[#cf5b50]" : "text-black/80"
                      }`}
                    >
                      <Link
                        href={`/courses/${course.slug}`}
                        className="hover:opacity-75 transition-opacity"
                      >
                        {course.name}
                      </Link>
                    </h3>
                    <p className="mt-0.5 text-xs text-[#9b8a7e] font-medium">
                      {course.hours} · {course.duration}
                    </p>
                  </div>

                  {/* Rows */}
                  <div className="flex-1 bg-white">
                    {comparisonRows.map((row, ri) => (
                      <div
                        key={row[0]}
                        className={`flex items-start justify-between gap-3 px-5 py-3 ${
                          ri > 0 ? "border-t border-[#f0ebe6]" : ""
                        } ${ri % 2 === 0 ? "" : "bg-[#faf7f4]/50"}`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#9b8a7e] shrink-0 w-24 mt-0.5">
                          {row[0]}
                        </span>
                        <span
                          className={`text-xs text-right leading-snug ${
                            isRec ? "font-medium text-black" : "text-black/70"
                          }`}
                        >
                          {row[ci + 1]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className={`px-5 py-4 ${
                      isRec ? "bg-[#fff5f1]" : "bg-[#faf7f4]"
                    }`}
                  >
                    <Link
                      href={`/courses/${course.slug}`}
                      className={`group inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 px-4 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                        isRec
                          ? "bg-[#cf5b50] text-white shadow-md shadow-[#cf5b50]/20 hover:bg-[#b9473e] hover:shadow-lg hover:scale-[1.02]"
                          : "border-[1.5px] border-[#c9a99a] text-[#8c5048] bg-white hover:border-[#cf5b50] hover:text-[#cf5b50] hover:bg-[#fff5f1]"
                      }`}
                    >
                      <span>View {course.hours}</span>
                      <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    {isRec && (
                      <p className="mt-1.5 text-center text-[10px] text-[#b9473e]/70 font-medium">
                        Ideal first step for new teachers
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Comparison Cards */}
          <div className="grid gap-5 md:hidden mt-8">
            {teacherTrainings.map((course, ci) => {
              const isRec = course.featured;
              return (
                <article
                  key={course.slug}
                  className={`rounded-[24px] overflow-hidden transition-all duration-300 ${
                    isRec
                      ? "border-[2px] border-[#cf5b50] shadow-xl shadow-[#cf5b50]/12"
                      : "border border-[#e8ddd6] shadow-sm"
                  }`}
                >
                  <div
                    className={`px-6 pt-6 pb-4 ${
                      isRec
                        ? "bg-gradient-to-br from-[#fff0eb] to-[#fff8f5]"
                        : "bg-[#faf7f4]"
                    }`}
                  >
                    {isRec && (
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#cf5b50] px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-sm">
                        <Star className="size-3 fill-white" />
                        Most Popular
                      </span>
                    )}
                    <h3
                      className={`text-lg font-serif font-bold ${isRec ? "text-[#cf5b50]" : "text-black/80"}`}
                    >
                      <Link
                        href={`/courses/${course.slug}`}
                        className="hover:opacity-75 transition-opacity"
                      >
                        {course.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#9b8a7e] mt-0.5 font-medium">
                      {course.hours} · {course.duration}
                    </p>
                  </div>
                  <div className="bg-white px-6 pb-6">
                    <dl>
                      {comparisonRows.map((row, ri) => (
                        <div
                          key={row[0]}
                          className={`flex justify-between gap-4 py-3 ${ri > 0 ? "border-t border-[#f0ebe6]" : ""}`}
                        >
                          <dt className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#9b8a7e] shrink-0 mt-0.5 w-24">
                            {row[0]}
                          </dt>
                          <dd
                            className={`text-sm text-right leading-snug ${isRec ? "font-medium text-black" : "text-black/70"}`}
                          >
                            {row[ci + 1]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-4 pt-4 border-t border-[#f0ebe6]">
                      <Link
                        href={`/courses/${course.slug}`}
                        className={`group inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                          isRec
                            ? "bg-[#cf5b50] text-white shadow-md hover:bg-[#b9473e]"
                            : "border-[1.5px] border-[#c9a99a] text-black bg-white hover:border-[#cf5b50] hover:bg-[#cf5b50] hover:text-white"
                        }`}
                      >
                        <span>View {course.hours} Course</span>
                        <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ===== 11. DATES & SCHEDULE — course batches and booking ===== */}
      <section className="section" id="dates">
        <Container>
          <SectionHeading
            eyebrow="Dates and schedule"
            title="Plan from confirmed batch information"
            text="No availability, urgency, or price is invented. Use the course links or enquiry form to request the current written schedule."
          />
          <div className="grid gap-4">
            {teacherTrainings.map((course, index) => (
              <article
                className="card grid gap-5 p-5 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-center md:p-6"
                key={course.slug}
              >
                <div className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fff1ef] font-bold text-[#b9473e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{course.name}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {course.duration} · {course.location}
                    </p>
                  </div>
                </div>
                <div>
                  <small className="block uppercase tracking-[0.12em] text-muted">
                    Dates
                  </small>
                  <strong>{course.date}</strong>
                </div>
                <div>
                  <small className="block uppercase tracking-[0.12em] text-muted">
                    Rooms & fees
                  </small>
                  <strong>
                    {course.price} · {course.privatePrice}
                  </strong>
                </div>
                <ButtonLink href={`/courses/${course.slug}#dates`}>
                  Check course
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 12. WHY GOA — coastal setting with photo tiles ===== */}
      <section className="section section-peach">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — text + benefits */}
            <div>
              <SectionHeading
                eyebrow="Why Goa"
                title="A coastal setting for residential yoga study"
                text="Goa can support early practice, unhurried recovery, and time outdoors when weather, travel, hydration, and rest are planned responsibly."
              />
              <div className="mt-5 grid gap-4 text-[0.97rem] leading-7 text-black/70">
                <p>
                  Warm mornings and a slower coastal rhythm can make it easier
                  to keep practice, study, meals, and rest together. The right
                  season depends on your comfort with heat, humidity, and
                  monsoon rain.
                </p>
                <p>
                  The location also gives students options for beach time,
                  nature, and local culture during confirmed free periods.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["Nature and coast", Leaf],
                  ["Time to reflect", Sparkles],
                  ["Residential rhythm", Heart],
                  ["Travel planning", Compass],
                ].map(([label, Icon]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl bg-white/80 border border-[#e8ddd6] px-4 py-3 shadow-sm"
                  >
                    <span className="grid size-8 place-items-center rounded-full bg-[#fff0eb] text-[#cf5b50] shrink-0">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <strong className="text-sm font-semibold text-black/80">
                      {label}
                    </strong>
                  </div>
                ))}
              </div>
              <ButtonLink
                href="/contact#travel"
                variant="text"
                className="mt-7"
              >
                Plan your arrival
              </ButtonLink>
            </div>

            {/* Right — two rounded photo tiles */}
            <div className="grid grid-cols-2 gap-4 items-end">
              {/* Tall left photo */}
              <div
                className="rounded-[28px] overflow-hidden shadow-xl"
                style={{ aspectRatio: "3/4" }}
              >
                <Media
                  src="/images/goa-coast-yoga-retreat.png"
                  alt="Palm-fringed Goa coastline near a quiet nature path"
                  className="h-full w-full"
                />
              </div>
              {/* Right column: square photo + location info card */}
              <div className="flex flex-col gap-4">
                <div
                  className="rounded-[28px] overflow-hidden shadow-xl"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Media
                    src="/images/hero-goa-yoga.png"
                    alt="Yoga practitioner meditating in a peaceful coastal Goa setting"
                    className="h-full w-full"
                  />
                </div>
                <div className="rounded-[24px] bg-white border border-[#e8ddd6] p-5 shadow-sm flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#cf5b50] shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#cf5b50]">
                      Goa, India
                    </span>
                  </div>
                  <p className="text-[11px] text-[#9b8a7e] leading-relaxed font-medium">
                    Querim, North Goa · near Arambol · ~30 min from MOPA Airport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 13. RESIDENTIAL EXPERIENCE — facilities and accommodation ===== */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Residential experience"
            title="The spaces around the practice matter"
            text="Confirm the exact room, yoga hall, meals, facilities, and support attached to your batch before payment."
          />
          <div className="facility-grid">
            {facilities.map((facility) => (
              <article key={facility.title}>
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div>
                  <h3>{facility.title}</h3>
                  <p>{facility.text}</p>
                </div>
              </article>
            ))}
          </div>
          <ButtonLink href="/accommodation" variant="text" className="mt-7">
            Explore accommodation
          </ButtonLink>
        </Container>
      </section>

      {/* ===== 14. REVIEWS — source-backed student testimonials ===== */}
      <section className="section section-cream">
        <Container>
          <SectionHeading
            eyebrow="Student voices"
            title="Reviews with a source—or no review at all"
            text="Names, ratings, dates, excerpts, counts, and review schema are published only when an original platform source is available."
          />
          {testimonials.length ? (
            <div className="review-grid">
              {testimonials.map((review) => (
                <article className="card card-body" key={review.sourceUrl}>
                  <div className="flex items-center justify-between gap-4">
                    <GoogleMark />
                    <span>{review.rating}/5</span>
                  </div>
                  <h3 className="mt-5">{review.name}</h3>
                  <p className="text-sm text-muted">
                    {review.date} · {review.platform}
                  </p>
                  <p className="mt-4">{review.excerpt}</p>
                  <a
                    className="button button-text mt-4"
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read original review
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="card card-body flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <GoogleMark />
                <h3 className="mt-4">
                  No verified public reviews are linked yet
                </h3>
                <p className="mt-2 text-muted">
                  The review component is ready; it intentionally displays no
                  rating, reviewer, excerpt, or count without a source.
                </p>
              </div>
              {reviewProfile.googleBusinessUrl && (
                <a
                  className="button button-secondary"
                  href={reviewProfile.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Google profile
                </a>
              )}
            </div>
          )}
        </Container>
      </section>

      {/* ===== 15. GALLERY — photo preview of life in Goa ===== */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="A glimpse of Goa"
            title="Practice, rest, and coastal surroundings"
            text="A deliberate mix of portrait, landscape, and detail images keeps the gallery balanced without stretching or empty tiles."
          />
          <Gallery items={galleryItems} filters={false} />
          <ButtonLink href="/gallery" variant="text" className="mt-7">
            View full gallery
          </ButtonLink>
        </Container>
      </section>

      <EnrolmentQuestions />

      <section className="section" id="location">
        <Container>
          <SectionHeading
            eyebrow="Find your way"
            title="Goa, India"
            text="The exact street address is not published because it has not been confirmed. The map shows Goa at regional level."
          />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="card card-body flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#cf5b50]">
                  <MapPin aria-hidden="true" className="size-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.14em]">
                    Sanctuary Location
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-serif">
                  {site.name} — Goa, India
                </h3>
                <p className="mt-2 text-sm font-medium text-black/80">
                  {site.contact.address}
                </p>

                <div className="mt-4 space-y-3 text-sm text-black/70 border-t border-black/10 pt-4">
                  <p>
                    Nestled in peaceful{" "}
                    <strong>Querim, Pernem, North Goa</strong>
                    , Hatha Yogashala is a premier residential yoga teacher
                    training school and restorative retreat sanctuary in India.
                  </p>
                  <ul className="grid gap-2 text-xs font-medium text-black/80">
                    <li className="flex items-center gap-2">
                      <Sparkles className="size-3.5 text-[#cf5b50] shrink-0" />
                      <span>
                        <strong>Courses:</strong> 100-Hr, 200-Hr & 300-Hr Yoga
                        Alliance Teacher Training
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Leaf className="size-3.5 text-[#cf5b50] shrink-0" />
                      <span>
                        <strong>Retreats:</strong> 3, 5, 7 & 10-Day Restorative
                        Coastal Yoga Immersion
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Compass className="size-3.5 text-[#cf5b50] shrink-0" />
                      <span>
                        <strong>Airport Access:</strong> ~30 min from MOPA (GOX)
                        & 60 min from Dabolim (GOI)
                      </span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted leading-relaxed">
                    Our tropical sanctuary provides a calm environment for
                    intensive practice, authentic pranayama study, sattvic
                    vegetarian nutrition, and quiet beachfront reflection.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-black/10">
                <a
                  className="button button-primary"
                  href={site.contact.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </a>
                <ButtonLink href="/contact#whatsapp" variant="secondary">
                  <SiWhatsapp aria-hidden="true" size={17} />
                  Ask on WhatsApp
                </ButtonLink>
              </div>
            </div>
            <iframe
              className="map-frame"
              src={site.contact.mapEmbedUrl}
              title="Map showing Goa, India"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      {/* ===== 16. BLOG — latest journal articles ===== */}
      <section className="section section-peach" id="journal">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="From the journal"
              title="Guides to practise, plan & prepare"
              text="Original, practical articles on yoga study, Goa travel, and building a sustainable home practice."
            />
            <ButtonLink href="/blog" variant="text" className="shrink-0">
              View all articles
            </ButtonLink>
          </div>
          <div className="blog-grid">
            {posts.slice(0, 3).map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
