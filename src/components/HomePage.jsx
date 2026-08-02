import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Compass,
  Globe,
  GraduationCap,
  Heart,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { PiGraduationCapFill } from "react-icons/pi";
import { retreats, teacherTrainings } from "@/data/coursesData";
import { posts } from "@/data/blogData";
import {
  facilities,
  faqs,
  galleryItems,
  heroStats,
  reviewProfile,
  site,
  testimonials,
  tripadvisorProfile,
  tripadvisorTestimonials,
} from "@/data/siteData";
import {
  ButtonLink,
  Container,
  FinalCTA,
  JsonLd,
  Media,
  ProgramCard,
  RetreatCard,
  SectionHeading,
} from "./ui";
import ReviewsSection from "./GoogleReviews";
import {
  Accordion,
  CountUp,
  Gallery,
  WhyChooser,
  BlogCard,
} from "./Interactive";
import AboutPreview from "./AboutPreview";
import FounderPreview from "./FounderPreview";
import TeachersPreview from "./TeachersPreview";
import EnrolmentQuestions from "./EnrolmentQuestions";

const whyItems = [
  {
    title: "A curriculum you can inspect",
    content:
      "Course pages explain the learning goal, suitability, subjects, teaching method, daily rhythm, stay, price checks, and the limits of each completion document.",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-yoga-philosophy-class.jpg",
    alt: "Students studying yoga philosophy in class at Hatha Yogashala in Goa",
  },
  {
    title: "Information before payment",
    content:
      "Dates, total price, room category, meals, teachers, inclusions, assessment, certification, and cancellation terms are confirmed in writing before a reservation is treated as complete.",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
    alt: "Residential campus view of Hatha Yogashala in North Goa",
  },
  {
    title: "Practice suited to the student",
    content:
      "The enquiry process asks about experience, injuries, health, accessibility, dietary needs, room preference, and travel questions so suitability can be discussed early.",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
    alt: "Teacher observing students during a Hatha yoga teacher training session",
  },
  {
    title: "A grounded Goa setting",
    content:
      "Residential planning accounts for coastal weather, rest, wet-season access, transport, hydration, laundry, and quiet time instead of treating Goa as scenery alone.",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-yoga-retreat-2025-session.avif",
    alt: "Coastal yoga retreat session at Hatha Yogashala in Goa",
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

function GoogleLogo({ size = 21 }) {
  return (
    <svg
      viewBox="0 0 18 18"
      width={size}
      height={size}
      role="img"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M17.64 9.205c0-.64-.057-1.255-.164-1.846H9v3.492h4.844a4.14 4.14 0 0 1-1.796 2.716v2.266h2.909c1.703-1.568 2.683-3.88 2.683-6.628Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.468-.806 5.957-2.18l-2.909-2.265c-.806.54-1.836.86-3.048.86-2.344 0-4.328-1.585-5.036-3.714H.957v2.336A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.7A5.41 5.41 0 0 1 3.682 9c0-.59.101-1.164.282-1.7V4.964H.957A9 9 0 0 0 0 9c0 1.45.347 2.822.957 4.036L3.964 10.7Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.322 0 2.51.454 3.445 1.345l2.581-2.582C13.464.891 11.426 0 9 0A9 9 0 0 0 .957 4.964L3.964 7.3C4.672 5.17 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
}

const trustItems = [
  {
    key: "yoga-alliance",
    type: "logo",
    src: "/images/yoga-alliance-logo.webp",
    alt: "Yoga Alliance",
    width: 879,
    height: 284,
  },
  {
    key: "ayush",
    type: "logo",
    src: "/images/ayush-logo.jpg",
    alt: "Ministry of AYUSH",
    width: 750,
    height: 400,
  },
  { key: "google", type: "google", rating: "5.0" },
  {
    key: "teaching",
    type: "stat",
    icon: GiTeacher,
    value: "50,000+ Hrs",
    label: "Teaching Legacy",
  },
  {
    key: "graduates",
    type: "stat",
    icon: PiGraduationCapFill,
    value: "947 Graduates",
    label: "From 77 Countries",
  },
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
          value: teacherTrainings.length + retreats.length,
        }
      : stat,
  );

  return (
    <div className="home-page">
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
                src="/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp"
                alt="A yoga practitioner meditating at sunset in a peaceful coastal setting in Goa"
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
                      "—"
                    )}
                  </strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2. TRUST STRIP — recognition marquee ===== */}
      <section className="trust-strip" aria-label="Recognition and trust">
        <div className="trust-bar">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.key}>
              {item.type === "logo" && (
                <Image
                  className="trust-logo"
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  unoptimized
                />
              )}

              {item.type === "google" && (
                <div className="trust-google">
                  <GoogleLogo aria-hidden="true" />
                  <span className="trust-rating">{item.rating}</span>
                  <span className="trust-stars" aria-hidden="true">
                    ★★★★★
                  </span>
                </div>
              )}

              {item.type === "stat" && (
                <div className="trust-stat">
                  <span className="trust-stat-icon">
                    <item.icon aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{item.value}</strong>
                    <span className="trust-stat-sub">{item.label}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
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
            align="center"
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
            align="center"
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {retreats.map((retreat) => (
              <RetreatCard key={retreat.slug} retreat={retreat} />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 6. FOUNDER PREVIEW — introduction to the founder ===== */}
      <FounderPreview />

      {/* ===== 7. TEACHERS PREVIEW — faculty cards ===== */}
      <TeachersPreview />

      {/* ===== 8. WHY CHOOSE US — trust-building reasons ===== */}
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
            align="center"
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
                      ? "border-[2.5px] border-[var(--terracotta)] shadow-[0_12px_48px_rgba(207,91,80,0.18)] -translate-y-3"
                      : "border border-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
                  }`}
                >
                  {/* Card Header */}
                  <div
                    className={`cmp-head px-5 pt-5 pb-4 ${
                      isRec
                        ? "bg-gradient-to-b from-[var(--cream)] to-[#fff8f5]"
                        : "bg-[var(--cream)]"
                    }`}
                  >
                    {isRec && (
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--terracotta)] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.15em] text-white shadow-sm">
                        <Star className="size-2.5 fill-white" />
                        Most Popular
                      </span>
                    )}
                    <h3
                      className={`text-base font-serif font-bold leading-tight ${
                        isRec ? "text-[var(--terracotta)]" : "text-black/80"
                      }`}
                    >
                      <Link
                        href={`/courses/${course.slug}`}
                        className="hover:opacity-75 transition-opacity"
                      >
                        {course.name}
                      </Link>
                    </h3>
                    <p className="mt-0.5 text-xs text-[var(--muted)] font-medium">
                      {course.hours} · {course.duration}
                    </p>
                  </div>

                  {/* Rows */}
                  <div className="flex-1 bg-white">
                    {comparisonRows.map((row, ri) => (
                      <div
                        key={row[0]}
                        className={`cmp-row flex items-start justify-between gap-3 px-5 py-3 ${
                          ri > 0 ? "border-t border-[var(--border)]" : ""
                        } ${ri % 2 === 0 ? "" : "bg-[var(--cream)]/50"}`}
                      >
                        <span className="cmp-row-label text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] shrink-0 w-24 mt-0.5">
                          {row[0]}
                        </span>
                        <span
                          className={`cmp-row-value text-xs text-right leading-snug ${
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
                    className={`cmp-foot px-5 py-4 ${
                      isRec ? "bg-[var(--cream)]" : "bg-[var(--cream)]"
                    }`}
                  >
                    <Link
                      href={`/courses/${course.slug}`}
                      className={`cmp-cta group inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 px-4 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                        isRec
                          ? "bg-[var(--terracotta)] text-white shadow-md shadow-[var(--terracotta)]/20 hover:bg-[var(--terracotta)] hover:shadow-lg hover:scale-[1.02]"
                          : "border-[1.5px] border-[var(--border)] text-[var(--terracotta)] bg-white hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] hover:bg-[var(--cream)]"
                      }`}
                    >
                      <span>View {course.hours}</span>
                      <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    {isRec && (
                      <p className="mt-1.5 text-center text-[10px] text-[var(--terracotta)]/70 font-medium">
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
                      ? "border-[2px] border-[var(--terracotta)] shadow-xl shadow-[var(--terracotta)]/12"
                      : "border border-[var(--border)] shadow-sm"
                  }`}
                >
                  <div
                    className={`px-6 pt-6 pb-4 ${
                      isRec
                        ? "bg-gradient-to-br from-[var(--cream)] to-[#fff8f5]"
                        : "bg-[var(--cream)]"
                    }`}
                  >
                    {isRec && (
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--terracotta)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-sm">
                        <Star className="size-3 fill-white" />
                        Most Popular
                      </span>
                    )}
                    <h3
                      className={`text-lg font-serif font-bold ${isRec ? "text-[var(--terracotta)]" : "text-black/80"}`}
                    >
                      <Link
                        href={`/courses/${course.slug}`}
                        className="hover:opacity-75 transition-opacity"
                      >
                        {course.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-0.5 font-medium">
                      {course.hours} · {course.duration}
                    </p>
                  </div>
                  <div className="bg-white px-6 pb-6">
                    <dl>
                      {comparisonRows.map((row, ri) => (
                        <div
                          key={row[0]}
                          className={`flex justify-between gap-4 py-3 ${ri > 0 ? "border-t border-[var(--border)]" : ""}`}
                        >
                          <dt className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] shrink-0 mt-0.5 w-24">
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
                    <div className="mt-4 pt-4 border-t border-[var(--border)]">
                      <Link
                        href={`/courses/${course.slug}`}
                        className={`group inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                          isRec
                            ? "bg-[var(--terracotta)] text-white shadow-md hover:bg-[var(--terracotta)]"
                            : "border-[1.5px] border-[var(--border)] text-black bg-white hover:border-[var(--terracotta)] hover:bg-[var(--terracotta)] hover:text-white"
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
            align="center"
          />
          <div className="grid gap-4">
            {teacherTrainings.map((course, index) => (
              <article
                className="card grid gap-5 p-5 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-center md:p-6"
                key={course.slug}
              >
                <div className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--cream)] font-bold text-[var(--terracotta)]">
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
              <div className="mt-5 grid gap-4 text-[15.5px] leading-7 text-black/70">
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
                    className="flex items-center gap-3 rounded-2xl bg-white/80 border border-[var(--border)] px-4 py-3 shadow-sm"
                  >
                    <span className="grid size-8 place-items-center rounded-full bg-[var(--cream)] text-[var(--terracotta)] shrink-0">
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
                className="home-whygoa-tall rounded-[28px] overflow-hidden shadow-xl"
                style={{ aspectRatio: "3/4" }}
              >
                <Media
                  src="/images/tha_hatha/the-hatha-yogashala-goa-beach-yoga-wheel-pose-students.webp"
                  alt="Yoga students practising on a Goa beach beside the coastal path"
                  className="h-full w-full"
                />
              </div>
              {/* Right column: square photo + location info card */}
              <div className="flex flex-col gap-4">
                <div
                  className="home-whygoa-square rounded-[28px] overflow-hidden shadow-xl"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Media
                    src="/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp"
                    alt="Yoga students in a quiet meditation and pranayama session in Goa"
                    className="h-full w-full"
                  />
                </div>
                <div className="rounded-[24px] bg-white border border-[var(--border)] p-5 shadow-sm flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={14}
                      className="text-[var(--terracotta)] shrink-0"
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta)]">
                      Goa, India
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--muted)] leading-relaxed font-medium">
                    Querim, North Goa · near Arambol · ~30 min from MOPA Airport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 13. RESIDENTIAL EXPERIENCE — facilities and accommodation ===== */}
      <section
        className="section section-cream"
        id="residential-experience"
        aria-labelledby="residential-experience-title"
      >
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Left — sticky editorial intro */}
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Residential experience"
                title="The spaces around the practice matter"
                text="Confirm the exact room, yoga hall, meals, facilities, and support attached to your batch before payment."
              />
              <p className="mt-5 max-w-md text-sm leading-7 text-black/60">
                Your stay is part of the practice. Rooms, shalas, meals, and
                student support are confirmed in writing before any reservation
                is treated as complete.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/accommodation" variant="secondary">
                  Explore accommodation
                </ButtonLink>
              </div>
            </div>

            {/* Right — featured image + minimal facility list */}
            <div>
              <div className="home-res-media relative aspect-[16/10] overflow-hidden rounded-[28px] shadow-xl">
                <Image
                  src="/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp"
                  alt="Residential campus and yoga school at Hatha Yogashala in Querim, North Goa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--terracotta)]">
                    Querim, North Goa
                  </p>
                  <p className="text-sm font-semibold text-black/80">
                    A short walk from the beach
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {facilities.map((facility, index) => (
                  <li
                    key={facility.title}
                    className="facility-card rounded-2xl border border-[var(--border)] bg-white/80 p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[var(--terracotta)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-black/80">
                      {facility.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-black/60">
                      {facility.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 14. REVIEWS — Google student reviews ===== */}
      <ReviewsSection
        testimonials={testimonials}
        reviewProfile={reviewProfile}
        tripadvisorTestimonials={tripadvisorTestimonials}
        tripadvisorProfile={tripadvisorProfile}
      />

      {/* ===== 15. GALLERY — photo preview of life in Goa ===== */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="A glimpse of Goa"
            title="Practice, rest, and coastal surroundings"
            text="A deliberate mix of portrait, landscape, and detail images keeps the gallery balanced without stretching or empty tiles."
            align="center"
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
                <div className="flex items-center gap-2 text-[var(--terracotta)]">
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
                    <strong>Querim, Pernem, North Goa</strong>, Hatha Yogashala
                    is a premier residential yoga teacher training school and
                    restorative retreat sanctuary in India.
                  </p>
                  <ul className="grid gap-2 text-xs font-medium text-black/80">
                    <li className="flex items-center gap-2">
                      <Sparkles className="size-3.5 text-[var(--terracotta)] shrink-0" />
                      <span>
                        <strong>Courses:</strong> 100-Hr, 200-Hr & 300-Hr Yoga
                        Alliance Teacher Training
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Leaf className="size-3.5 text-[var(--terracotta)] shrink-0" />
                      <span>
                        <strong>Retreats:</strong> 3, 5, 7 & 10-Day Restorative
                        Coastal Yoga Immersion
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Compass className="size-3.5 text-[var(--terracotta)] shrink-0" />
                      <span>
                        <strong>Airport Access:</strong> ~30 min from MOPA (GOX)
                        & 60 min from Dabolim (GOI)
                      </span>
                    </li>
                  </ul>
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
    </div>
  );
}
