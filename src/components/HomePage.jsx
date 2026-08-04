import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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

const certificationBadges = [
  {
    icon: "/images/tha_hatha/The-hatha-yogashala-certifiacte-rs-200.webp",
    caption: "200-Hour Yoga Teacher Training\n(YTTC) – Rishikesh",
  },
  {
    icon: "/images/tha_hatha/The-hatha-yogashala-yoga-alliance.png",
    caption: "Registered Yoga School",
  },
  {
    icon: "/images/tha_hatha/The-hatha-yogashala-certifiacte-rs-300.webp",
    caption: "300-Hour Yoga Teacher Training\n(YTTC) – Rishikesh",
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
              Hatha Yogashala is a Yoga Alliance-registered yoga school and
              ashram in Querim, North Goa, offering residential Hatha yoga
              teacher training (100, 200, and 300-hour) and restorative yoga
              retreats (3 to 10 days) with clear course scope, thoughtful
              student support, and no unsupported claims.
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
            title="Choose the yoga teacher training depth that fits your path"
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
            title="Yoga retreats to make room for practice and rest"
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
              title="What should earn your trust in a yoga school"
              text="Good yoga education begins with information you can inspect and questions you are welcome to ask."
            />
          </WhyChooser>
        </Container>
      </section>

      {/* ===== 10. COURSE COMPARISON — 100 vs 200 vs 300-hour table ===== */}
      <section className="section section-cream" id="comparison">
        class
        <Container>
          <SectionHeading
            eyebrow="Course comparison"
            title="100, 200, or 300-Hour Yoga Teacher Training?"
            text="The 200-hour course is the recommended starting point for aspiring yoga teachers. Compare all yoga teacher training pathways and find your perfect match."
            align="center"
          />

          {/* Desktop: Three standalone pop-out cards side by side */}
          <div className="mt-10 hidden md:grid md:grid-cols-3 gap-6 items-start">
            {teacherTrainings.map((course, ci) => {
              const isRec = course.featured;
              const badgeLabel = isRec
                ? "Most Popular"
                : ci === 0
                  ? "Beginner"
                  : "Advanced";

              return (
                <div
                  key={course.slug}
                  className={`relative flex flex-col rounded-[28px] overflow-hidden border-[2.5px] transition-all duration-300 ${
                    isRec
                      ? "z-10 border-[var(--coral-dark)] bg-white shadow-[0_18px_60px_rgba(36,64,47,0.26)] lg:scale-[1.05] lg:-translate-y-2"
                      : "border-[var(--border)] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:border-[var(--coral-dark)]/40"
                  }`}
                >
                  {/* Featured top accent bar */}
                  {isRec && (
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r from-[var(--coral)] via-[var(--gold)] to-[var(--coral)]" />
                  )}
                  {/* Card Header */}
                  <div
                    className={`cmp-head px-5 pt-5 pb-4 ${
                      isRec
                        ? "bg-gradient-to-b from-[var(--cream)] to-[#f6f1e7]"
                        : "bg-[var(--cream)]"
                    }`}
                  >
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--coral-dark)] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.15em] text-white shadow-sm">
                      {isRec && <Star className="size-2.5 fill-white" />}
                      {badgeLabel}
                    </span>
                    <h3
                      className={`text-base font-serif font-bold leading-tight ${
                        isRec ? "text-[var(--coral-dark)]" : "text-black/80"
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
                        className={`cmp-row flex flex-col gap-1 px-5 py-3 ${
                          ri > 0 ? "border-t border-[var(--border)]" : ""
                        } ${ri % 2 === 0 ? "" : "bg-[var(--cream)]/50"}`}
                      >
                        <span className="cmp-row-label text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                          {row[0]}
                        </span>
                        <span
                          className={`cmp-row-value text-xs leading-snug ${
                            isRec ? "font-medium text-black" : "text-black/70"
                          }`}
                        >
                          {row[ci + 1]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="cmp-foot px-5 py-4 bg-[var(--cream)]">
                    <Link
                      href={`/courses/${course.slug}`}
                      className={`cmp-cta group inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 px-4 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                        isRec
                          ? "bg-[var(--coral-dark)] text-white shadow-md shadow-[var(--coral-dark)]/20 hover:bg-[var(--coral-dark)] hover:shadow-lg hover:scale-[1.02]"
                          : "border-[1.5px] border-[var(--border)] text-[var(--coral-dark)] bg-white hover:border-[var(--coral-dark)] hover:text-[var(--coral-dark)] hover:bg-[var(--cream)]"
                      }`}
                    >
                      <span>View {course.hours}</span>
                      <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Comparison Cards */}
          <div className="grid gap-5 md:hidden mt-8">
            {teacherTrainings.map((course, ci) => {
              const isRec = course.featured;
              const badgeLabel = isRec
                ? "Most Popular"
                : ci === 0
                  ? "Beginner"
                  : "Advanced";

              return (
                <article
                  key={course.slug}
                  className={`relative rounded-[24px] overflow-hidden border-[2px] transition-all duration-300 ${
                    isRec
                      ? "border-[var(--coral-dark)] shadow-xl shadow-[var(--coral-dark)]/15"
                      : "border-[var(--border)] shadow-sm"
                  }`}
                >
                  {/* Featured top accent bar */}
                  {isRec && (
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r from-[var(--coral)] via-[var(--gold)] to-[var(--coral)]" />
                  )}
                  <div
                    className={`px-6 pt-6 pb-4 ${
                      isRec
                        ? "bg-gradient-to-br from-[var(--cream)] to-[#f6f1e7]"
                        : "bg-[var(--cream)]"
                    }`}
                  >
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--coral-dark)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-sm">
                      {isRec && <Star className="size-3 fill-white" />}
                      {badgeLabel}
                    </span>
                    <h3
                      className={`text-lg font-serif font-bold ${isRec ? "text-[var(--coral-dark)]" : "text-black/80"}`}
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
                          className={`flex flex-col gap-1 py-3 ${ri > 0 ? "border-t border-[var(--border)]" : ""}`}
                        >
                          <dt className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                            {row[0]}
                          </dt>
                          <dd
                            className={`text-sm leading-snug ${isRec ? "font-medium text-black" : "text-black/70"}`}
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
                            ? "bg-[var(--coral-dark)] text-white shadow-md hover:bg-[var(--coral-dark)]"
                            : "border-[1.5px] border-[var(--border)] text-black bg-white hover:border-[var(--coral-dark)] hover:bg-[var(--coral-dark)] hover:text-white"
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

      {/* ===== 11 CERTIFICATION — Yoga Alliance accreditation ===== */}
      <section className="section" id="certification">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Global recognition"
                title={
                  <>
                    Internationally recognized{" "}
                    <span className="text-[var(--coral-dark)]">
                      Yoga Alliance
                    </span>{" "}
                    <span className="text-[var(--coral-dark)]">
                      certification
                    </span>
                  </>
                }
                text={
                  <>
                    <strong>The Hatha Yogashala in Goa</strong> offers{" "}
                    <strong>Yoga Alliance USA certified courses</strong>. These
                    programs help you become a{" "}
                    <strong>professional yoga teacher in Goa</strong>. Your
                    certificate is <strong>accepted worldwide</strong>.
                  </>
                }
              />

              <div className="grid grid-cols-3 gap-4">
                {certificationBadges.map((badge) => (
                  <div
                    className="card flex flex-col items-center gap-3 p-4 text-center"
                    key={badge.icon}
                  >
                    <span className="relative grid size-16 shrink-0 place-items-center rounded-full border-2 border-[var(--teal-dark)] p-2">
                      <Image
                        src={badge.icon}
                        alt={badge.caption}
                        fill
                        className="object-contain p-2"
                        sizes="64px"
                      />
                    </span>
                    <p className="text-xs font-semibold leading-snug text-[var(--teal-dark)]">
                      {badge.caption}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[var(--cream)] p-5 sm:flex-row sm:items-center sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--coral-dark)]">
                    <Globe className="size-5 text-white" />
                  </span>
                  <div>
                    <strong className="block">
                      Looking for full accreditation details?
                    </strong>
                    <p className="text-sm text-muted">
                      Learn about our certification.
                    </p>
                  </div>
                </div>
                <ButtonLink href="/certification">View credentials</ButtonLink>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative h-[420px] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp"
                  alt="Yoga teacher training certification ceremony at Sukha Yogashala"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-56 overflow-hidden rounded-xl border-4 border-white shadow-xl sm:w-64">
                <Image
                  src="/images/tha_hatha/The-hatha-yogashala--Certificate.webp"
                  alt="Yoga Alliance 200-hour certificate of registration"
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
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
                title="A coastal setting for residential yoga study in Goa"
                text="Goa can support early yoga practice, unhurried recovery, and time outdoors when weather, travel, hydration, and rest are planned responsibly."
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
                    <span className="grid size-8 place-items-center rounded-full bg-[var(--cream)] text-[var(--coral-dark)] shrink-0">
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
                      className="text-[var(--coral-dark)] shrink-0"
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">
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
                title="Yoga accommodation and spaces around the practice"
                text="Confirm the exact room, yoga hall, meals, facilities, and support attached to your batch before payment."
              />
              <div className="mt-5 max-w-md space-y-4 text-[15px] leading-7 text-black/80">
                <p>
                  Living on campus means your practice continues beyond the mat.
                  Mornings begin in the open-air shala, days unfold between
                  study, asana, and meals, and evenings close with reflection
                  and rest — a daily rhythm designed around the training itself.
                </p>
                <p>
                  Guests stay in clean, beach-near rooms — from mixed AC dorms
                  to twin-sharing and private rooms — with three fresh
                  vegetarian meals a day, quiet study spaces, and 24/7 student
                  support. What makes the experience unique is that everything
                  you need is in one place, so your energy stays with your
                  practice.
                </p>
                <p>
                  What to expect: your exact room, yoga hall, meal plan, and
                  student support are confirmed in writing before any
                  reservation is treated as complete.
                </p>
              </div>
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
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                    Querim, North Goa
                  </p>
                  <p className="text-sm font-semibold text-black/80">
                    A short walk from the beach
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {facilities.map((facility) => (
                  <li
                    key={facility.title}
                    className="facility-card rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <h3 className="font-serif text-xl font-bold leading-snug text-black">
                      {facility.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-black">
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
            title="Yoga practice, rest, and coastal surroundings"
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
                <div className="flex items-center gap-2 text-[var(--coral-dark)]">
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
                      <Sparkles className="size-3.5 text-[var(--coral-dark)] shrink-0" />
                      <span>
                        <strong>Courses:</strong> 100-Hr, 200-Hr & 300-Hr Yoga
                        Alliance Teacher Training
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Leaf className="size-3.5 text-[var(--coral-dark)] shrink-0" />
                      <span>
                        <strong>Retreats:</strong> 3, 5, 7 & 10-Day Restorative
                        Coastal Yoga Immersion
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Compass className="size-3.5 text-[var(--coral-dark)] shrink-0" />
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
              title="Yoga guides to practise, plan and prepare"
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

      <FinalCTA height="45vh" className="h-[40vh]" />
    </div>
  );
}
