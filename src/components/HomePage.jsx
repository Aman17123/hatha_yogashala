import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
import HomeGalleryMarquee from "./HomeGalleryMarquee";
import HomePranayamaPreview from "./HomePranayamaPreview";
import { FadeIn, Stagger, StaggerItem } from "./retreat/Motion";

const whyItems = [
  {
    title: "A curriculum you can inspect",
    content:
      "Course pages explain the learning goal, suitability, subjects, teaching method, daily rhythm, stay, price checks, and the limits of each completion document.",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
    alt: "Students studying yoga alignment with props at The Hatha Yogashala in Goa",
  },
  {
    title: "Information before payment",
    content:
      "Dates, total price, room category, meals, teachers, inclusions, assessment, certification, and cancellation terms are confirmed in writing before a reservation is treated as complete.",
    image: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
    alt: "Residential campus and gardens of The Hatha Yogashala in North Goa",
  },
  {
    title: "Practice suited to the student",
    content:
      "The enquiry process asks about experience, injuries, health, accessibility, dietary needs, room preference, and travel questions so suitability can be discussed early.",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
    alt: "Teacher observing students during a Hatha yoga teacher training session",
  },
  {
    title: "A grounded Goa setting",
    content:
      "Residential planning accounts for coastal weather, rest, wet-season access, transport, hydration, laundry, and quiet time instead of treating Goa as scenery alone.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    alt: "Coastal yoga practice at The Hatha Yogashala in Goa",
  },
];

const comparisonCards = [
  {
    title: "100 Hour TTC",
    subtitle: "FOUNDATIONAL PATH",
    slug: "100-hour-yoga-teacher-training-goa",
    hours: "100 HOUR",
    badge: "BEGINNER",
    isPopular: false,
    items: [
      {
        icon: Sparkles,
        label: "BEST FOR",
        value: "Beginners & professionals wanting to deepen their knowledge",
      },
      {
        icon: Target,
        label: "PERFECT FOR",
        value: "Complete beginners, limited time",
      },
      {
        icon: Clock,
        label: "DURATION",
        value: "11 Days",
      },
      {
        icon: TrendingUp,
        label: "OUTCOME",
        value: "Strong foundation, bridge to 200H",
      },
      {
        icon: Award,
        label: "CERTIFICATION",
        value: "100 Hour Completion (AYUSH)",
      },
      {
        icon: DollarSign,
        label: "INVESTMENT",
        value: "$499 - $599",
      },
    ],
  },
  {
    title: "200 Hour TTC",
    subtitle: "PROFESSIONAL PATH",
    slug: "200-hour-yoga-teacher-training-goa",
    hours: "200 HOUR",
    badge: "MOST POPULAR",
    isPopular: true,
    items: [
      {
        icon: Sparkles,
        label: "BEST FOR",
        value:
          "Intermediates & beginners who want to become Yoga Alliance certified teachers",
      },
      {
        icon: Target,
        label: "PERFECT FOR",
        value: "Aspiring teachers, serious practitioners",
      },
      {
        icon: Clock,
        label: "DURATION",
        value: "24 Days",
      },
      {
        icon: TrendingUp,
        label: "OUTCOME",
        value: "Full teaching certification, RYT 200",
      },
      {
        icon: Award,
        label: "CERTIFICATION",
        value: "Yoga Alliance USA Recognized",
      },
      {
        icon: DollarSign,
        label: "INVESTMENT",
        value: "$879 - $999",
      },
    ],
  },
  {
    title: "300 Hour TTC",
    subtitle: "MASTERY PATH",
    slug: "300-hour-yoga-teacher-training-goa",
    hours: "300 HOUR",
    badge: "ADVANCED",
    isPopular: false,
    items: [
      {
        icon: Sparkles,
        label: "BEST FOR",
        value:
          "Advanced students wanting to achieve Master-level accreditation",
      },
      {
        icon: Target,
        label: "PERFECT FOR",
        value: "Certified teachers advancing skills",
      },
      {
        icon: Clock,
        label: "DURATION",
        value: "28 Days",
      },
      {
        icon: TrendingUp,
        label: "OUTCOME",
        value: "Advanced mastery, RYT 500 eligible",
      },
      {
        icon: Award,
        label: "CERTIFICATION",
        value: "Yoga Alliance USA RYT 300",
      },
      {
        icon: DollarSign,
        label: "INVESTMENT",
        value: "$1149 - $1249",
      },
    ],
  },
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
    sizes: "124px",
  },
  {
    key: "ayush",
    type: "logo",
    src: "/images/ayush-logo.jpg",
    alt: "Ministry of AYUSH",
    width: 750,
    height: 400,
    sizes: "64px",
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
    icon: "/images/tha_hatha/The-hatha-yogashala-yoga-alliance-logo.webp",
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
          <Stagger className="hero-copy" gap={0.1} startVisible>
            <StaggerItem startVisible>
              <p className="eyebrow">
                <Sparkles aria-hidden="true" size={15} />
                Yoga study in Goa, India
              </p>
            </StaggerItem>
            <StaggerItem startVisible>
              <h1>
                Hatha Yogashala
                <em>Yoga School in Goa</em>
              </h1>
            </StaggerItem>
            <StaggerItem startVisible>
              <p className="hero-tagline">
                Join our Yoga Teacher Training in Goa —{" "}
                <em>shaped by practice, place &amp; presence.</em>
              </p>
            </StaggerItem>
            <StaggerItem startVisible>
              <p className="text-[15px]">
                Hatha Yogashala is a Yoga Alliance-registered yoga school and
                ashram in Querim, North Goa, offering residential Hatha yoga
                teacher training (100, 200, and 300-hour) and restorative yoga
                retreats (3 to 7 days) with clear course scope, thoughtful
                student support, and no unsupported claims.
              </p>
            </StaggerItem>
            <StaggerItem startVisible>
              <div className="hero-actions">
                <ButtonLink href="/apply">Reserve your spot</ButtonLink>
                <ButtonLink href="/courses" variant="secondary">
                  Explore courses
                </ButtonLink>
              </div>
            </StaggerItem>
            <StaggerItem startVisible>
              <p className="hero-note">
                Batch dates, fees, faculty, and room availability are confirmed
                in writing before payment.
              </p>
            </StaggerItem>
          </Stagger>
          <FadeIn className="hero-visual" startVisible>
            <div className="hero-sun" aria-hidden="true" />
            <div className="hero-image">
              <Image
                src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp"
                alt="Yoga students practicing teacher training alignment at The Hatha Yogashala in Goa"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </FadeIn>
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
                  sizes={item.sizes}
                  loading="lazy"
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
      <FadeIn>
        <AboutPreview />
      </FadeIn>

      {/* ===== 4. TEACHER TRAINING — 100/200/300-hour program cards ===== */}
      <section className="section section-peach" id="courses">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Teacher training"
              title="Choose Your Yoga Teacher Training Course in Goa"
              text="Compare level, curriculum, accommodation, completion details, and fees before choosing by hour count."
              align="center"
            />
          </FadeIn>
          <Stagger className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {teacherTrainings.slice(0, 3).map((course) => (
              <StaggerItem key={course.slug}>
                <ProgramCard course={course} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ===== 5. RETREATS — coastal retreat cards ===== */}
      <section className="section" id="retreats">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Coastal retreats"
              title="Yoga Retreats in Goa — Practice, Rest & Restore"
              text="Each retreat is a personal-practice experience, not a teacher-training course or professional certification."
              align="center"
            />
          </FadeIn>
          <Stagger className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {retreats.slice(0, 3).map((retreat) => (
              <StaggerItem key={retreat.slug}>
                <RetreatCard retreat={retreat} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ===== 5b. PRANAYAMA & BREATHWORK PREVIEW ===== */}
      <HomePranayamaPreview />

      {/* ===== 6. FOUNDER PREVIEW — introduction to the founder ===== */}
      <FadeIn>
        <FounderPreview />
      </FadeIn>

      {/* ===== 7. TEACHERS PREVIEW — faculty cards ===== */}
      <FadeIn>
        <TeachersPreview />
      </FadeIn>

      {/* ===== 8. WHY CHOOSE US — trust-building reasons ===== */}
      <section className="section" id="why-us">
        <Container>
          <FadeIn>
            <WhyChooser items={whyItems}>
              <SectionHeading
                eyebrow="Why choose us"
                title="Why Choose Our Yoga School in Goa"
                text="Good yoga education begins with information you can inspect and questions you are welcome to ask."
              />
            </WhyChooser>
          </FadeIn>
        </Container>
      </section>

      {/* ===== 10. COURSE COMPARISON — 100 vs 200 vs 300-hour compact cards ===== */}
      <section className="section !py-12 bg-white" id="comparison">
        <Container>
          <FadeIn className="text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-[var(--brown)]">
              Which Course is{" "}
              <span className="text-[var(--coral-dark)] font-medium">
                Right for You?
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
              COMPARISON OF OUR TTC PROGRAMS
            </p>
          </FadeIn>

          <Stagger
            className="mt-8 md:mt-10 grid gap-6 md:gap-7 md:grid-cols-3 max-w-6xl mx-auto"
            gap={0.1}
          >
            {comparisonCards.map((card) => {
              const isPopular = card.isPopular;
              return (
                <StaggerItem
                  key={card.slug}
                  className={`pt-3 flex ${isPopular ? "relative z-30" : "relative z-10"}`}
                >
                  {card.badge && (
                    <span
                      className={`absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider ${
                        isPopular
                          ? "z-40 bg-[var(--coral-dark)] text-white shadow-md ring-2 ring-white"
                          : "z-20 border border-[var(--border)] bg-[#faf7f2] text-[var(--brown)] shadow-xs"
                      }`}
                    >
                      {card.badge}
                    </span>
                  )}
                  <article
                    className={`flex flex-col justify-between w-full rounded-[28px] bg-white p-6 sm:p-7 transition-all ${
                      isPopular
                        ? "relative z-30 border-2 border-[var(--coral-dark)] shadow-xl ring-4 ring-[var(--coral-dark)]/10 md:-translate-y-1.5"
                        : "relative z-10 border border-[var(--border)] shadow-xs hover:border-[var(--coral-dark)]/40"
                    }`}
                  >
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1b1b2e]">
                        {card.title}
                      </h3>
                      <p className="mt-1 mb-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--coral-dark)]">
                        {card.subtitle}
                      </p>

                      <div className="space-y-4">
                        {card.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.label}
                              className="flex items-start gap-3 text-left"
                            >
                              <div className="mt-0.5 shrink-0 text-[var(--coral-dark)]">
                                <Icon size={16} strokeWidth={2.2} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-wider text-[var(--muted)]">
                                  {item.label}
                                </p>
                                <p className="mt-0.5 text-[12.5px] sm:text-[13px] font-semibold text-[#1b1b2e] leading-snug">
                                  {item.value}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <Link
                      href={`/courses/${card.slug}`}
                      className={`mt-7 flex w-full items-center justify-center gap-1.5 rounded-full py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                        isPopular
                          ? "bg-[var(--coral-dark)] text-white shadow-sm hover:opacity-95"
                          : "bg-[#f5f1eb] text-[var(--brown)] hover:bg-[#eae3d5]"
                      }`}
                    >
                      <span>EXPLORE {card.hours} TTC</span>
                      <ArrowRight size={14} />
                    </Link>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* ===== 11 CERTIFICATION — Yoga Alliance accreditation ===== */}
      <section className="section" id="certification">
        <Container>
          <FadeIn className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Global recognition"
                title={
                  <>
                    Yoga Alliance-Certified Teacher{" "}
                    <span className="text-[var(--coral-dark)]">
                      Training in Goa
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
                        sizes="60px"
                      />
                    </span>
                    <p className="text-[13.5px] font-semibold leading-snug text-[var(--teal-dark)] sm:text-[13.5px]">
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

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border-4 border-white bg-white p-3 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--surface)]">
                  <Image
                    src="/images/tha_hatha/The-hatha-yogashala--Certificate.webp"
                    alt="Yoga Alliance Official Certificate — The Hatha Yogashala Goa"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 45vw, 90vw"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-2 text-xs font-semibold text-[var(--muted)]">
                  <span className="flex items-center gap-1.5 text-[var(--teal-dark)]">
                    <BadgeCheck size={16} /> Verified RYS 200 &amp; 300
                  </span>
                  <span>Yoga Alliance USA</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ===== 12. WHY GOA — coastal setting with photo tiles ===== */}
      <section className="section section-peach">
        <Container>
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

            {/* Right — two rounded photo tiles without overlap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              {/* Tall left photo */}
              <div className="relative w-full aspect-[3/4] rounded-[28px] overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp"
                  alt="Yoga students practicing on a Goa beach in North Goa"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Right column: square photo + location info card */}
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-square rounded-[28px] overflow-hidden shadow-xl border-2 border-white">
                  <Image
                    src="/images/accomodation/the-hatha-yogashala-arambol-goa-coconut-palms-sunlight-02.webp"
                    alt="Lush tropical coconut palms and peaceful coastal surroundings in North Goa"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="rounded-[24px] bg-white border border-[var(--border)] p-4 sm:p-5 shadow-sm flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={14}
                      className="text-[var(--coral-dark)] shrink-0"
                    />
                    <span className="text-[13.5px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                      Goa, India
                    </span>
                  </div>
                  <p className="text-[13.5px] text-[var(--muted)] leading-relaxed font-medium">
                    Querim, North Goa · near Arambol · ~30 min from MOPA Airport
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ===== 13. RESIDENTIAL EXPERIENCE — facilities and accommodation ===== */}
      <section
        className="section section-cream"
        id="residential-experience"
        aria-labelledby="residential-experience-title"
      >
        <Container>
          <FadeIn className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <MobileStickyBar
              left={
                <p className="text-[13.5px] font-black uppercase tracking-widest text-[var(--coral-dark)]">
                  Residential Experience
                </p>
              }
              right={
                <ButtonLink
                  href="/accommodation"
                  variant="secondary"
                  className="!px-4 !py-2.5 !text-[13.5px]"
                >
                  <span>Explore</span>
                </ButtonLink>
              }
            />
            {/* Left — sticky editorial intro */}
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Residential experience"
                title="Accommodation & Food"
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
                  Explore accommodation & food
                </ButtonLink>
              </div>
            </div>

            {/* Right — featured image + minimal facility list */}
            <div>
              <div className="home-res-media relative aspect-[16/11] min-h-[360px] sm:min-h-[420px] overflow-hidden rounded-[28px] shadow-xl">
                <Image
                  src="/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp"
                  alt="Residential campus and accommodation at The Hatha Yogashala in Querim, North Goa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md">
                  <p className="text-[13.5px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
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

              <div className="mt-6 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[var(--coral-dark)]">
                  <Leaf className="h-5 w-5 shrink-0" />
                  <h3 className="font-serif text-xl font-bold text-black">
                    Nourishing Sattvic Meals
                  </h3>
                </div>
                <p className="text-[14px] leading-relaxed text-black/80">
                  Every course includes three freshly prepared vegetarian,
                  sattvic meals daily (Monday to Saturday morning). Prepared
                  with locally sourced ingredients, our menu supports intense
                  daily practice with easy digestion and balanced nutrition.
                  Special dietary accommodations (vegan, gluten-free,
                  dairy-free) are available upon request.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ===== 14. REVIEWS — Google student reviews ===== */}
      <FadeIn>
        <ReviewsSection
          testimonials={testimonials}
          reviewProfile={reviewProfile}
        />
      </FadeIn>

      {/* ===== 15. GALLERY — 2-row continuous scrolling photo preview ===== */}
      <FadeIn>
        <HomeGalleryMarquee />
      </FadeIn>

      <FadeIn>
        <FAQ />
      </FadeIn>

      <section className="section" id="location">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Find your way"
              title="Find Us — Yoga School Location in Goa, India"
              text="The exact street address is not published because it has not been confirmed. The map shows Goa at regional level."
            />
          </FadeIn>
          <FadeIn className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="card card-body flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[var(--coral-dark)]">
                  <MapPin aria-hidden="true" className="size-5" />
                  <span className="text-[13.5px] font-bold uppercase tracking-[0.14em]">
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
                  <ul className="grid gap-2 text-[13.5px] font-medium text-black/80">
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
          </FadeIn>
        </Container>
      </section>

      {/* ===== 16. BLOG — latest journal articles ===== */}
      <section className="section section-peach" id="journal">
        <Container>
          <FadeIn className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="From the journal"
              title="Yoga & Goa Travel Guides"
              text="Original, practical articles on yoga study, Goa travel, and building a sustainable home practice."
            />
            <ButtonLink href="/blog" variant="text" className="shrink-0">
              View all articles
            </ButtonLink>
          </FadeIn>
          <Stagger className="blog-grid">
            {posts.slice(0, 3).map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <FinalCTA height="auto" className="!min-h-[260px] !py-8 md:!py-10" />
    </div>
  );
}
