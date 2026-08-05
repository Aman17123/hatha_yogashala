import Image from "next/image";
import {
  BadgeCheck,
  Compass,
  Globe,
  Heart,
  Leaf,
  MapPin,
  Sparkles,
  Target,
  Clock,
  TrendingUp,
  Award,
  DollarSign,
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
  MobileStickyBar,
  ProgramCard,
  RetreatCard,
  SectionHeading,
} from "./ui";
import ReviewsSection from "./GoogleReviews";
import { Gallery, WhyChooser, BlogCard } from "./Interactive";
import AboutPreview from "./AboutPreview";
import FounderPreview from "./FounderPreview";
import TeachersPreview from "./TeachersPreview";
import FAQ from "./FAQ";
import QuickNav from "./QuickNav";

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
const rowIcons = [
  Clock,
  Target,
  TrendingUp,
  Sparkles,
  Award,
  BadgeCheck,
  DollarSign,
];
const comparisonRows = [
  ["Duration", ...teacherTrainings.map((course) => course.duration)],
  ["Level", ...teacherTrainings.map((course) => course.level)],
  ["Outcome", ...teacherTrainings.map((course) => course.outcome)],
  ["Perfect For", ...teacherTrainings.map((course) => course.perfectfor)],
  ["Certification", ...teacherTrainings.map((course) => course.certification)],
  //certifiaction , outcome
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
    caption: "200-Hour Yoga\n(YTTC) – Rishikesh",
  },
  {
    icon: "/images/tha_hatha/The-hatha-yogashala-yoga-alliance.png",
    caption: "Registered Yoga School",
  },
  {
    icon: "/images/tha_hatha/The-hatha-yogashala-certifiacte-rs-300.webp",
    caption: "300-Hour Yoga \n(YTTC) – Rishikesh",
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

  return (
    <div className="home-page">
      <JsonLd data={faqSchema} />
      <QuickNav />

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
              retreats (3 to 7 days) with clear course scope, thoughtful student
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
          <div className="flex flex-wrap justify-center gap-5">
            {retreats.map((retreat) => (
              <div
                key={retreat.slug}
                className="w-full sm:w-[calc(50%_-_0.625rem)] lg:w-[calc(33.333%_-_0.833rem)]"
              >
                <RetreatCard retreat={retreat} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 6. FOUNDER PREVIEW — introduction to the founder ===== */}
      <FounderPreview />

      {/* ===== 7. TEACHERS PREVIEW — faculty cards ===== */}
      <TeachersPreview />

      {/* ===== 8. WHY CHOOSE US — trust-building reasons ===== */}
      <section className="section" id="why-us">
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
      <section className="section !py-10" id="comparison">
        <Container>
          <SectionHeading
            eyebrow="Comparison of our TTC programs"
            title={
              <>
                Which Course is{" "}
                <span className="text-[var(--coral-dark)]">Right for You?</span>
              </>
            }
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {teacherTrainings.map((course, ci) => {
              const isPopular = ci === 1; // middle card only

              return (
                <div key={course.slug} className="relative">
                  {isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--coral-dark)] px-4 py-1.5 text-[10px] font-bold tracking-[0.08em] text-white">
                      MOST POPULAR
                    </span>
                  )}

                  <article
                    className={`flex h-full flex-col rounded-2xl border bg-white p-5 ${
                      isPopular
                        ? "border-2 border-[var(--coral-dark)]"
                        : "border-[var(--border)]"
                    }`}
                  >
                    <h3 className="text-base font-extrabold text-[#1b1b2e]">
                      {course.name}
                    </h3>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--coral-dark)]">
                      {course.subtitle}
                    </p>

                    <dl className="flex-1 space-y-2.5">
                      {comparisonRows.map((row, ri) => {
                        const Icon = rowIcons[ri];
                        return (
                          <div key={row[0]}>
                            <dt className="flex items-center gap-2 text-[12px] font-bold uppercase  text-muted">
                              <Icon
                                className="size-3.5 shrink-0 text-[var(--coral-dark)]"
                                aria-hidden="true"
                              />
                              {row[0]}
                            </dt>
                            <dd className="mt-1 text-xs font-semibold leading-snug text-[#1b1b2e]">
                              {row[ci + 1]}
                            </dd>
                          </div>
                        );
                      })}
                    </dl>

                    <ButtonLink
                      href={`/courses/${course.slug}`}
                      className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] ${
                        isPopular
                          ? "bg-[var(--coral-dark)] text-white"
                          : "bg-[var(--cream)] text-[#1b1b2e]"
                      }`}
                    >
                      Explore {course.hours}
                    </ButtonLink>
                  </article>
                </div>
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

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {certificationBadges.map((badge) => (
                  <div
                    className="card flex flex-col items-center gap-3 p-3 text-center sm:p-4"
                    key={badge.icon}
                  >
                    <span className="relative grid size-14 shrink-0 place-items-center rounded-full border-2 border-[var(--teal-dark)] p-1.5 sm:size-16 sm:p-2">
                      <Image
                        src={badge.icon}
                        alt={badge.caption}
                        fill
                        className="object-contain p-2"
                        sizes="64px"
                      />
                    </span>
                    <p className="text-[11px] font-semibold leading-snug text-[var(--teal-dark)] sm:text-xs">
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
              <div className="relative h-[340px] w-full overflow-hidden rounded-3xl sm:h-[420px]">
                <Image
                  src="/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp"
                  alt="Yoga teacher training certification ceremony at Sukha Yogashala"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
              <div className="absolute -bottom-6 left-3 w-56 overflow-hidden rounded-xl border-4 border-white shadow-xl sm:-left-6 sm:w-64">
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
            <MobileStickyBar
              left={
                <p className="text-[11px] font-black uppercase tracking-widest text-[var(--coral-dark)]">
                  Residential Experience
                </p>
              }
              right={
                <ButtonLink
                  href="/accommodation"
                  variant="secondary"
                  className="!px-4 !py-2.5 !text-xs"
                >
                  <span>Explore</span>
                </ButtonLink>
              }
            />
            {/* Left — sticky editorial intro */}
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Residential experience"
                title="Yoga accommodation and spaces around the practice"
                text="Confirm the exact room, yoga hall, meals, facilities, and support attached to your batch before payment."
              />
              <div className="mt-5 max-w-md space-y-4 text-[14px] leading-7 text-black/80">
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

      <FAQ />

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
                        <strong>Retreats:</strong> 3, 5, 7-Day Restorative
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
