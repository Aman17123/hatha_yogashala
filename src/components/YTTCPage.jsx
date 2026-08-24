"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  Clock3,
  Coffee,
  Compass,
  GraduationCap,
  Heart,
  Home,
  Layers,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Users,
  Waves,
  XCircle,
  BookOpen,
  PersonStanding,
  Wind,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { teacherTrainings, retreats } from "@/data/coursesData";
import { whatsappLink } from "@/data/siteData";
import {
  accommodationFacilities,
  bestTimeToVisit,
  freeTimeIdeas,
  goaExperiences,
  mealPhilosophy,
  meals,
  retreatTeachers,
  testimonials as allTestimonials,
} from "@/data/retreatData";
import {
  yttcTrustBadges,
  yttcLevels,
  yttcOverviewTags,
  yttcWhyChoose,
  yttcHighlights,
} from "@/data/yttcHubData";
import { Accordion } from "./Interactive";
import {
  Container,
  ButtonLink,
  Media,
  MobileStickyBar,
  RetreatCard,
  SectionHeading,
} from "./ui";
import BookingSidebar from "./retreat/BookingSidebar";
import BookingForm from "./retreat/BookingForm";
import TestimonialCarousel, {
  VideoTestimonials,
} from "./retreat/TestimonialCarousel";
import MonthGuide from "./retreat/MonthGuide";
import { FadeIn, Stagger, StaggerItem } from "./retreat/Motion";

const whyIcons = {
  badge: BadgeCheck,
  users: Users,
  award: Award,
  leaf: Leaf,
  map: MapPin,
  home: Home,
  grad: GraduationCap,
  compass: Compass,
  heart: Heart,
  shield: ShieldCheck,
  layers: Layers,
  receipt: Award,
  network: Compass,
  sprout: Leaf,
  backpack: Compass,
  user: Users,
};

const freeTimeIcons = {
  waves: Waves,
  book: Compass,
  coffee: Coffee,
  camera: Camera,
  sparkles: Sparkles,
  sun: Sun,
  shopping: Compass,
  compass: Compass,
};

const HERO_IMAGES = {
  "100-hour": "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-asana-practice-3.webp",
  "200-hour": "/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg",
  "300-hour": "/images/tha_hatha/the-hatha-yogashala-goa-yoga-philosophy-class.jpg",
};

function RetreatEyebrow({ children }) {
  return (
    <p className="mb-2 flex items-center gap-2 text-[13.5px] font-extrabold uppercase tracking-[0.16em] text-[var(--coral-dark)]">
      <Sparkles size={14} aria-hidden="true" />
      {children}
    </p>
  );
}

function parsePriceNumber(val) {
  if (typeof val === "number") return val;
  if (!val) return 699;
  const num = parseInt(String(val).replace(/[^\d]/g, ""), 10);
  return isNaN(num) ? 699 : num;
}

export default function YTTCPage({ course }) {
  if (!course) return null;

  const is100 = course.hours?.includes("100");
  const is200 = course.hours?.includes("200");
  const is300 = course.hours?.includes("300");

  const heroImage =
    HERO_IMAGES[course.hours] ||
    course.image ||
    "/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg";
  const sharedPrice = parsePriceNumber(
    course.price || (course.pricing && course.pricing.shared)
  );
  const privatePrice = parsePriceNumber(
    course.privatePrice || (course.pricing && course.pricing.private)
  );

  const currencySymbol = "€";
  const whatsappHref = whatsappLink(
    course.whatsappMessage ||
      `Hi Hatha Yogashala, I'm interested in the ${course.name}.`
  );

  const categoryBadge = is100
    ? "Yoga Alliance RYS-100 Foundation"
    : is200
      ? "Yoga Alliance RYS-200 Certified"
      : "Yoga Alliance RYS-300 Advanced";

  const trustBadges = [
    `Yoga Alliance Registered (${is100 ? "RYS 100" : is200 ? "RYS 200" : "RYS 300"})`,
    "Ministry of AYUSH Approved",
    "Small Batches (12–15 Students)",
    `${(course.graduates || 3500).toLocaleString("en-IN")}+ Graduates Worldwide`,
    "Residential · All Meals Included",
  ];

  const pageData = {
    name: course.name,
    category: categoryBadge,
    heroTagline:
      course.heroIntroduction || course.cardSummary || course.description,
    duration: course.duration || (is100 ? "14 days" : is200 ? "24 days" : "28 days"),
    location: course.location || "Querim, North Goa, India",
    rating: course.rating || 4.9,
    ratingCount: course.ratingCount || 120,
    students: course.graduates || 3500,
    whatsappMessage:
      course.whatsappMessage ||
      `Hi Hatha Yogashala, I'm interested in the ${course.name}.`,
    pricing: {
      shared: { price: sharedPrice, currency: "EUR" },
      private: { price: privatePrice, currency: "EUR" },
      paymentOptions: ["Bank Transfer", "PayPal", "Wise", "UPI"],
    },
    trustBadges,
  };

  const programOptions = yttcLevels.map((level) => ({
    value: level.slug,
    label: `${level.hours}-Hour Yoga TTC (${level.duration})`,
  }));

  const whatIs = course.whatIs || {
    heading: `What is a ${course.hours} yoga teacher training?`,
    paragraphs: [
      course.description || course.heroIntroduction,
      "The course follows the Yoga Alliance-approved syllabus, giving you a genuine foundation in yoga teacher training in Goa whether you continue your certification or simply wish to deepen your own practice.",
    ],
    points: course.focus || course.prerequisites || [
      "Traditional Hatha & Ashtanga Vinyasa yoga",
      "Pranayama, breathwork & meditation",
      "Yoga philosophy & Patanjali's eight limbs",
      "Anatomy, physiology & alignment labs",
    ],
  };

  const overviewParagraphs = course.overview || [
    `Our ${course.name} is an intensive residential program located at our peaceful beachside ashram in Querim, North Goa.`,
    "Live on campus, eat sattvic vegetarian meals, and study with teachers who have guided students from over 30 countries through Yoga Alliance certification.",
  ];

  const whyList =
    course.whyChoose && course.whyChoose.length > 0
      ? course.whyChoose
      : yttcWhyChoose;

  const teacherList = retreatTeachers;

  const highlightList =
    course.learningOutcomes || course.inclusions || yttcHighlights;

  const scheduleList =
    course.dailySchedule || [
      ["06:30 – 07:00", "Morning bells & self-practice"],
      ["07:00 – 08:00", "Pranayama, Shatkarma & Chanting"],
      ["08:15 – 09:30", "Asana class (Hatha or Ashtanga Vinyasa)"],
      ["09:30 – 10:45", "Nourishing vegetarian breakfast"],
      ["11:00 – 12:30", "Yoga Philosophy, Anatomy & Ayurveda"],
      ["12:30 – 01:30", "Alignment & Adjustment lab"],
      ["01:30 – 02:30", "Sattvic Lunch"],
      ["02:30 – 04:00", "Protected rest & self-study"],
      ["04:00 – 05:30", "Teaching Methodology & Practicum"],
      ["05:30 – 06:30", "Sunset Meditation & Yoga Nidra"],
      ["07:00 – 08:00", "Dinner"],
      ["08:00 – 09:00", "Satsang, Kirtan & Q&A (select evenings)"],
    ];

  const faqList =
    course.faq && course.faq.length > 0
      ? course.faq
      : [
          {
            question: `Who can join the ${course.hours} yoga teacher training?`,
            answer:
              course.bestFor ||
              "Open to all students looking to deepen their practice or become certified yoga teachers.",
          },
          {
            question: "Is the certificate recognized globally?",
            answer:
              "Yes, Hatha Yogashala is a registered Yoga Alliance school (RYS). Graduates are eligible to register as Registered Yoga Teachers (RYT) with Yoga Alliance USA.",
          },
          {
            question: "What is included in the course fee?",
            answer:
              "The fee is all-inclusive: accommodation, three vegetarian meals daily, course manual, yoga kit (mat & props), tuition, and Yoga Alliance certification.",
          },
          {
            question: "What should I bring for the training?",
            answer:
              "Comfortable yoga clothing, personal toiletries, a notebook and pen, light clothing for tropical weather, and a reusable water bottle. Filtered drinking water is provided on campus.",
          },
        ];

  const datesList =
    course.courseDates && course.courseDates.length > 0
      ? course.courseDates.map((d) => ({
          id: d.id || d.label || d.dates,
          label: d.label || d.dates,
          availability: d.availability || "Seats Available",
        }))
      : [
          { id: "mar", label: "01 Mar – 14 Mar 2026", availability: "Seats Available" },
          { id: "apr", label: "01 Apr – 14 Apr 2026", availability: "Seats Available" },
          { id: "may", label: "01 May – 14 May 2026", availability: "Filling Fast" },
          { id: "jun", label: "01 Jun – 14 Jun 2026", availability: "Seats Available" },
        ];

  const streamSplit = is100
    ? [
        { name: "Asana Practice & Alignment", hours: "45 hrs", desc: "Hatha & Ashtanga Vinyasa Primary Series A & B" },
        { name: "Pranayama & Meditation", hours: "15 hrs", desc: "Breathwork, Shatkarma & guided meditation" },
        { name: "Anatomy & Physiology", hours: "15 hrs", desc: "Body mechanics, joints, and safe alignment" },
        { name: "Philosophy & Methodology", hours: "25 hrs", desc: "8 Limbs of Patanjali, ethics & teaching basics" },
      ]
    : is200
      ? [
          { name: "Asana Practice & Alignment", hours: "80 hrs", desc: "Hatha, Ashtanga Vinyasa, Yin & Restorative" },
          { name: "Pranayama & Meditation", hours: "30 hrs", desc: "Classical pranayama, bandhas & drishti" },
          { name: "Anatomy & Physiology", hours: "30 hrs", desc: "Functional anatomy, biomechanics & injury prevention" },
          { name: "Philosophy & Methodology", hours: "60 hrs", desc: "Yoga Sutras, Bhagavad Gita, class sequencing & practicum" },
        ]
      : [
          { name: "Advanced Asana & Adjustments", hours: "100 hrs", desc: "Advanced Hatha, Vinyasa, therapeutic adjustments" },
          { name: "Pranayama & Subtle Energy", hours: "50 hrs", desc: "Advanced pranayama, chakras, nadis & mudras" },
          { name: "Applied Anatomy & Biomechanics", hours: "60 hrs", desc: "Anatomical variations, injury management & therapeutics" },
          { name: "Philosophy, Sanskrit & Pedagogy", hours: "90 hrs", desc: "Sacred texts, Sanskrit chanting, master class design" },
        ];

  const certificationSteps = [
    {
      hours: "100",
      title: "100-Hour Yoga TTC",
      badge: "Foundation",
      duration: "14 Days",
      subtitle: "Beginner level · Bridge to 200H",
      text: "A 2-week immersive foundation in traditional Hatha & Ashtanga. Completes as Part 1 of the 200-hour program (complete Part 2 within 21 months).",
      active: is100,
      slug: "100-hour-yoga-teacher-training-goa",
    },
    {
      hours: "200",
      title: "200-Hour Yoga TTC",
      badge: "Full Certification",
      duration: "24 Days",
      subtitle: "All levels · Yoga Alliance RYT-200",
      text: "The gold standard for yoga teacher certification. Comprehensive training in Hatha, Vinyasa, Anatomy, Philosophy, and teaching practicum.",
      active: is200,
      slug: "200-hour-yoga-teacher-training-goa",
    },
    {
      hours: "300",
      title: "300-Hour Yoga TTC",
      badge: "Advanced",
      duration: "28 Days",
      subtitle: "For 200H Graduates · RYT-500 Eligible",
      text: "Advanced post-graduate master training. Deepen your philosophy, refine advanced sequencing, and earn your RYT-500 credential.",
      active: is300,
      slug: "300-hour-yoga-teacher-training-goa",
    },
  ];

  const otherCourses = teacherTrainings.filter((t) => t.slug !== course.slug);

  return (
    <>
      {/* ============ SECTION 1 — HERO ============ */}
      <section className="retreat-hero" id="top">
        <Image
          src={heroImage}
          alt={`Students practising during ${course.name} at Hatha Yogashala in Goa`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="retreat-hero-overlay" />
        <span className="retreat-hero-orb" aria-hidden="true" />
        <Container className="retreat-hero-inner">
          <Stagger gap={0.11}>
            <StaggerItem>
              <nav aria-label="Breadcrumb" className="retreat-hero-breadcrumbs">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/yoga-teacher-training">Yoga Teacher Training</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">{course.name}</li>
                </ol>
              </nav>
            </StaggerItem>

            <StaggerItem>
              <div className="retreat-hero-pills">
                <span>{categoryBadge}</span>
                <span>Residential · North Goa</span>
                <span>{course.level || "All Levels Welcome"}</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1>{course.name}</h1>
            </StaggerItem>

            <StaggerItem>
              <p className="retreat-hero-tagline">{pageData.heroTagline}</p>
            </StaggerItem>

            <StaggerItem>
              <div className="retreat-hero-meta">
                <div>
                  <Clock3 size={17} aria-hidden="true" />
                  <span>
                    <strong>Duration</strong>
                    {pageData.duration}
                  </span>
                </div>
                <div>
                  <MapPin size={17} aria-hidden="true" />
                  <span>
                    <strong>Location</strong>
                    {pageData.location}
                  </span>
                </div>
                <div>
                  <span className="hero-stars" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`size-3.5 ${
                          i < Math.round(pageData.rating)
                            ? "fill-[var(--gold)] text-[var(--gold)]"
                            : "fill-white/30 text-white/40"
                        }`}
                      />
                    ))}
                  </span>
                  <span>
                    <strong>{pageData.rating}/5</strong>
                    {pageData.ratingCount} verified reviews
                  </span>
                </div>
                <div>
                  <Users size={17} aria-hidden="true" />
                  <span>
                    <strong>{pageData.students}</strong>graduates worldwide
                  </span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="retreat-hero-actions">
                <ButtonLink href="#registration" className="retreat-hero-cta">
                  Reserve Your Spot
                </ButtonLink>
                <ButtonLink href="#syllabus" variant="light">
                  View Syllabus
                </ButtonLink>
                <a href={whatsappHref} className="button retreat-whatsapp">
                  <SiWhatsapp size={17} aria-hidden="true" />
                  WhatsApp Inquiry
                </a>
              </div>
            </StaggerItem>
          </Stagger>
        </Container>

        <div className="retreat-trust-badges" aria-label="Course credentials">
          <Container>
            {trustBadges.map((badge) => (
              <span key={badge}>
                <Check size={14} aria-hidden="true" />
                {badge}
              </span>
            ))}
          </Container>
        </div>
      </section>

      {/* ============ STICKY BOOKING SIDEBAR / MAIN CONTENT ============ */}
      <div className="container retreat-layout">
        <BookingSidebar
          page={pageData}
          retreat={{
            name: course.name,
            date: course.date || "Monthly start dates",
            whatsappMessage: course.whatsappMessage,
          }}
          ctaLabel="Reserve Your Spot"
          entityLabel="Training course"
          studentsLabel="graduates"
          programOptions={programOptions}
        />
        <MobileStickyBar
          left={
            <p className="text-[13.5px] font-black leading-tight text-[var(--brown)]">
              From{" "}
              <span className="text-[var(--coral-dark)]">
                {currencySymbol}
                {sharedPrice}
              </span>
              <span className="text-[13.5px] font-semibold text-[var(--muted)]">
                {" "}
                /person
              </span>
            </p>
          }
          right={
            <>
              <a
                href="#book"
                className="button button-primary !px-4 !py-2.5 !text-[13.5px]"
              >
                Reserve Your Spot
              </a>
              <a
                href={whatsappHref}
                className="button booking-whatsapp !px-3 !py-2.5 !text-[13.5px]"
                aria-label="WhatsApp inquiry"
              >
                <SiWhatsapp size={15} aria-hidden="true" />
              </a>
            </>
          }
        />

        <div className="retreat-content" id="overview">
          {/* ============ SECTION 1 — WHAT THIS IS (SEO) ============ */}
          <section className="retreat-section" id="what-is">
            <RetreatEyebrow>
              What is a {course.hours} yoga teacher training?
            </RetreatEyebrow>
            <h2 className="retreat-section-title">{whatIs.heading}</h2>
            <div className="retreat-overview">
              {whatIs.paragraphs.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.04}>
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>
            {whatIs.points?.length > 0 && (
              <Stagger className="retreat-highlight-grid">
                {whatIs.points.map((point) => (
                  <StaggerItem key={point}>
                    <div className="retreat-highlight-card">
                      <CheckCircle2
                        size={19}
                        className="text-[var(--coral-dark)]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            )}
          </section>

          {/* ============ SECTION 2 — OVERVIEW & PREREQUISITES ============ */}
          <section className="retreat-section">
            <RetreatEyebrow>Overview &amp; Purpose</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Deepen your practice &amp; master authentic teaching
            </h2>
            <div className="retreat-overview">
              {overviewParagraphs.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.04}>
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>

            {/* Target audience & prerequisites */}
            {course.designedFor && course.designedFor.length > 0 && (
              <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-6">
                <h3 className="font-serif text-lg font-semibold text-[var(--brown)] mb-3">
                  Designed specifically for:
                </h3>
                <ul className="space-y-2">
                  {course.designedFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] text-[var(--muted)]"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[var(--coral-dark)]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.prerequisites && course.prerequisites.length > 0 && (
              <div className="mt-4 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-[var(--brown)] mb-2 flex items-center gap-2">
                  <BadgeCheck size={18} className="text-[var(--coral-dark)]" />
                  Prerequisites &amp; Admission:
                </h3>
                <ul className="space-y-1.5">
                  {course.prerequisites.map((req) => (
                    <li
                      key={req}
                      className="text-[13.5px] text-[var(--muted)] flex items-center gap-2"
                    >
                      <span className="size-1.5 rounded-full bg-[var(--coral)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* ============ SECTION 3 — WHY CHOOSE ============ */}
          <section className="retreat-section" id="why">
            <RetreatEyebrow>Why choose Hatha Yogashala</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Why students choose us for their {course.hours} TTC
            </h2>
            <Stagger className="retreat-why-grid">
              {whyList.map((item) => {
                const Icon = whyIcons[item.icon] || Sparkles;
                return (
                  <StaggerItem key={item.title}>
                    <article className="retreat-why-card">
                      <span className="retreat-why-icon">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </section>

          {/* ============ SECTION 4 — SYLLABUS & CURRICULUM ============ */}
          <section className="retreat-section" id="syllabus">
            <RetreatEyebrow>Syllabus &amp; Curriculum</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Comprehensive {course.hours} Yoga Alliance Syllabus
            </h2>
            <p className="retreat-section-lead">
              Our curriculum is carefully structured into four main study streams, combining theory, practice, and hands-on teaching experience.
            </p>

            {/* Stream hour cards */}
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {streamSplit.map((stream) => (
                <StaggerItem key={stream.name}>
                  <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-serif text-[16px] font-semibold text-[var(--brown)]">
                        {stream.name}
                      </h3>
                      <span className="rounded-full bg-[var(--cream)] px-3 py-1 text-[12.5px] font-black text-[var(--coral-dark)]">
                        {stream.hours}
                      </span>
                    </div>
                    <p className="text-[13.5px] text-[var(--muted)] leading-relaxed">
                      {stream.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Detailed module breakdown */}
            {course.curriculum && course.curriculum.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-[var(--brown)]">
                  Detailed Learning Modules:
                </h3>
                {course.curriculum.map((mod, idx) => (
                  <FadeIn key={typeof mod === "string" ? mod : mod.title || idx}>
                    <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                      {typeof mod === "string" ? (
                        <p className="font-semibold text-[var(--brown)]">{mod}</p>
                      ) : (
                        <>
                          <h4 className="font-serif text-lg font-semibold text-[var(--brown)] flex items-center gap-2 mb-2">
                            <BookOpen size={18} className="text-[var(--coral-dark)]" />
                            {mod.title}
                          </h4>
                          <p className="text-[14px] text-[var(--muted)] leading-relaxed">
                            {mod.content}
                          </p>
                        </>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </section>

          {/* ============ SECTION 5 — CERTIFICATION LADDER ============ */}
          <section className="retreat-section" id="pathway">
            <RetreatEyebrow>Certification Pathway</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Your pathway to Yoga Alliance RYT status
            </h2>
            <p className="retreat-section-lead">
              Each course at Hatha Yogashala carries forward on our structured continuation pathway.
            </p>

            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {certificationSteps.map((step) => (
                <StaggerItem key={step.hours}>
                  <div
                    className={`rounded-2xl border bg-white p-6 shadow-sm flex flex-col justify-between h-full transition ${
                      step.active
                        ? "border-[var(--coral-dark)] ring-2 ring-[var(--coral-dark)]/30"
                        : "border-[var(--border)]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="rounded-full bg-[var(--coral-dark)] px-3 py-1 text-[12px] font-black text-white uppercase tracking-wider">
                          {step.badge}
                        </span>
                        {step.active && (
                          <span className="text-[12px] font-black uppercase text-[var(--coral-dark)]">
                            Current Course
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-[var(--brown)]">
                        {step.title}
                      </h3>
                      <p className="text-[13px] font-bold text-[var(--coral)] mb-3">
                        {step.duration} · {step.subtitle}
                      </p>
                      <p className="text-[13.5px] text-[var(--muted)] leading-relaxed mb-4">
                        {step.text}
                      </p>
                    </div>
                    {!step.active && (
                      <Link
                        href={`/courses/${step.slug}`}
                        className="button button-secondary !py-2 !text-[13px] text-center"
                      >
                        View {step.hours}-Hour Course →
                      </Link>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ SECTION 6 — MEET YOUR TEACHERS ============ */}
          <section className="retreat-section" id="teachers">
            <RetreatEyebrow>Meet your teachers</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Guided by experienced, compassionate teachers
            </h2>
            <Stagger className="retreat-teacher-grid">
              {teacherList.map((teacher) => (
                <StaggerItem key={teacher.role}>
                  <article className="retreat-teacher-card">
                    <div className="retreat-teacher-image">
                      <Media
                        src={teacher.image}
                        alt={`Portrait of ${teacher.role}`}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="retreat-teacher-body">
                      <p className="retreat-teacher-role">{teacher.role}</p>
                      <h3>{teacher.name}</h3>
                      <p className="retreat-teacher-exp">{teacher.experience}</p>
                      <p className="retreat-teacher-spec">{teacher.specialization}</p>
                      <p className="retreat-teacher-bio">{teacher.bio}</p>
                      <p className="retreat-teacher-cred">
                        <Award size={14} aria-hidden="true" />
                        {teacher.credentials}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ SECTION 7 — TRAINING HIGHLIGHTS ============ */}
          <section className="retreat-section" id="highlights">
            <RetreatEyebrow>Training highlights</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Every day builds your certification
            </h2>
            <Stagger className="retreat-highlight-grid">
              {highlightList.map((highlight) => (
                <StaggerItem key={highlight}>
                  <div className="retreat-highlight-card">
                    <CheckCircle2
                      size={19}
                      className="text-[var(--coral-dark)]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ SECTION 8 — DAILY SCHEDULE ============ */}
          <section className="retreat-section" id="schedule">
            <RetreatEyebrow>A day in the TTC life</RetreatEyebrow>
            <h2 className="retreat-section-title">
              A structured daily rhythm designed for deep immersion
            </h2>
            <p className="retreat-section-lead">
              Predictable days make deep learning possible. Here is how a typical day unfolds during the training.
            </p>
            <div className="retreat-schedule">
              <FadeIn>
                <article className="retreat-schedule-day">
                  <header>
                    <span className="retreat-schedule-daynum">Daily Timetable</span>
                    <h3>Sunrise to silence — every day</h3>
                    <p>
                      Sessions rotate through asana, study, teaching practicum, and self-practice, with protected rest in the afternoon.
                    </p>
                  </header>
                  <div className="retreat-schedule-timeline">
                    {scheduleList.map(([time, activity]) => (
                      <div
                        className="retreat-schedule-entry"
                        key={`${time}-${activity}`}
                      >
                        <time>{time}</time>
                        <span className="retreat-schedule-dot" aria-hidden="true" />
                        <strong>{activity}</strong>
                      </div>
                    ))}
                  </div>
                </article>
              </FadeIn>
            </div>
          </section>

          {/* ============ SECTION 9 — LIFE BEYOND THE SHALA ============ */}
          <section className="retreat-section" id="experiences">
            <RetreatEyebrow>Rest days &amp; excursions</RetreatEyebrow>
            <h2 className="retreat-section-title">Goa beyond the shala</h2>
            <p className="retreat-section-lead">
              Sundays and free afternoons are yours — explore the best of North Goa with your fellow students.
            </p>
            <Stagger className="retreat-experience-grid">
              {goaExperiences.map((experience) => (
                <StaggerItem key={experience.title}>
                  <article className="retreat-experience-card">
                    <span className="retreat-experience-tag">
                      {experience.tag}
                    </span>
                    <h3>{experience.title}</h3>
                    <p>{experience.text}</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ SECTION 10 — FREE TIME IDEAS ============ */}
          <section className="retreat-section" id="free-time">
            <RetreatEyebrow>Free time ideas</RetreatEyebrow>
            <h2 className="retreat-section-title">Unhurried hours, entirely yours</h2>
            <Stagger className="retreat-freetime-grid">
              {freeTimeIdeas.map((idea) => {
                const Icon = freeTimeIcons[idea.icon] || Sparkles;
                return (
                  <StaggerItem key={idea.title}>
                    <div className="retreat-freetime-card">
                      <Icon
                        size={18}
                        className="text-[var(--coral-dark)]"
                        aria-hidden="true"
                      />
                      <div>
                        <h3>{idea.title}</h3>
                        <p>{idea.text}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </section>

          {/* ============ SECTION 11 — ACCOMMODATION ============ */}
          <section className="retreat-section" id="accommodation">
            <RetreatEyebrow>Accommodation</RetreatEyebrow>
            <h2 className="retreat-section-title">Rest well between practices</h2>
            <p className="retreat-section-lead">
              Choose a shared room or dormitory for community, or a private room for extra space and quiet. Every option is clean, calm, and close to the practice hall.
            </p>
            <div className="retreat-rooms">
              <FadeIn>
                <article className="retreat-room-block">
                  <h3>Shared room</h3>
                  <p>
                    Twin-sharing AC rooms or a mixed dormitory — the easy friendships of residential training life.
                  </p>
                  <div className="retreat-room-gallery">
                    {[
                      {
                        src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
                        caption: "Campus view",
                        alt: "Campus",
                      },
                      {
                        src: "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
                        caption: "Practice shala",
                        alt: "Shala",
                      },
                    ].map((image) => (
                      <Media
                        key={image.caption}
                        src={image.src}
                        alt={image.alt}
                        className="h-40 w-full rounded-2xl"
                      />
                    ))}
                  </div>
                </article>
              </FadeIn>
              <FadeIn delay={0.08}>
                <article className="retreat-room-block">
                  <h3>Private room</h3>
                  <p>
                    Your own space with an attached bathroom and extra quiet for self-study and rest.
                  </p>
                  <div className="retreat-room-gallery">
                    {[
                      {
                        src: "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
                        caption: "Sunset balcony",
                        alt: "Balcony",
                      },
                      {
                        src: "/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp",
                        caption: "Quiet room",
                        alt: "Quiet space",
                      },
                    ].map((image) => (
                      <Media
                        key={image.caption}
                        src={image.src}
                        alt={image.alt}
                        className="h-40 w-full rounded-2xl"
                      />
                    ))}
                  </div>
                </article>
              </FadeIn>
            </div>
            <div className="retreat-facilities">
              <h3>Facilities</h3>
              <ul>
                {accommodationFacilities.map((facility) => (
                  <li key={facility.label}>
                    <Check
                      size={15}
                      className="text-[var(--coral-dark)]"
                      aria-hidden="true"
                    />
                    {facility.label}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ============ SECTION 12 — MEALS ============ */}
          <section className="retreat-section" id="meals">
            <RetreatEyebrow>Meals</RetreatEyebrow>
            <h2 className="retreat-section-title">Sattvic food, cooked with love</h2>
            <p className="retreat-section-lead">
              Three freshly prepared vegetarian meals a day, plus snacks — nourishing fuel for your practice and study.
            </p>
            <Stagger className="retreat-meal-grid">
              {meals.map((meal) => (
                <StaggerItem key={meal.meal}>
                  <article className="retreat-meal-card">
                    <Media
                      src={meal.image}
                      alt={`${meal.meal} at Hatha Yogashala`}
                      className="h-44 w-full"
                    />
                    <div className="retreat-meal-body">
                      <span className="retreat-meal-time">
                        <Clock3 size={13} aria-hidden="true" /> {meal.time}
                      </span>
                      <h3>{meal.meal}</h3>
                      <p>{meal.text}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="retreat-meal-philosophy">
              <Leaf size={22} className="text-[var(--coral)]" aria-hidden="true" />
              <div>
                <h3>{mealPhilosophy.title}</h3>
                <ul>
                  {mealPhilosophy.points.map((point) => (
                    <li key={point}>
                      <Check
                        size={14}
                        className="text-[var(--coral)]"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ============ SECTION 13 — BEST TIME TO VISIT ============ */}
          <section className="retreat-section" id="best-time">
            <RetreatEyebrow>Best time to visit</RetreatEyebrow>
            <h2 className="retreat-section-title">Every season has its gift</h2>
            <p className="retreat-section-lead">
              Tap any month to see weather, batch sizes, and the training experience each season offers.
            </p>
            <MonthGuide months={bestTimeToVisit} />
          </section>

          {/* ============ SECTION 14 — WHAT'S INCLUDED ============ */}
          <section className="retreat-section" id="included">
            <RetreatEyebrow>What&apos;s included</RetreatEyebrow>
            <h2 className="retreat-section-title">Everything you need, nothing you don&apos;t</h2>
            <div className="retreat-inclusion-grid">
              <article className="retreat-include-card">
                <h3>
                  <CheckCircle2 size={18} aria-hidden="true" /> Included
                </h3>
                <ul>
                  {(course.inclusions || [
                    "Yoga Alliance-approved certificate",
                    "Three healthy vegetarian meals per day (Monday to Saturday morning)",
                    "Choice of clean, spacious accommodation near the beach",
                    "Hot water showers and Wi-Fi in every room",
                    "Course manual plus PDF library of spiritual books",
                    "Yoga kit (mat, accessories) for your training",
                    "24/7 student support",
                  ]).map((item) => (
                    <li key={item}>
                      <Check
                        size={15}
                        className="text-[var(--coral)]"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="retreat-exclude-card">
                <h3>
                  <XCircle size={18} aria-hidden="true" /> Not included
                </h3>
                <ul>
                  {(course.exclusions || [
                    "Flights, visas, insurance",
                    "Airport transfers (available upon request)",
                    "Personal laundry & extra leisure activities",
                  ]).map((item) => (
                    <li key={item}>
                      <XCircle
                        size={15}
                        className="text-[var(--coral-dark)]/60"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          {/* ============ SECTION 15 — TESTIMONIALS ============ */}
          <section className="retreat-section" id="reviews">
            <RetreatEyebrow>Graduate stories</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Trusted by graduates from 30+ countries
            </h2>
            <TestimonialCarousel testimonials={allTestimonials} />
            <div className="retreat-video-testimonials">
              <h3>Watch their stories</h3>
              <VideoTestimonials items={allTestimonials.slice(0, 3)} />
            </div>
          </section>

          {/* ============ SECTION 16 — FAQ ============ */}
          <section className="retreat-section" id="faq">
            <RetreatEyebrow>Course FAQ</RetreatEyebrow>
            <h2 className="retreat-section-title">Answers before you ask</h2>
            <Accordion items={faqList} />
          </section>

          {/* ============ SECTION 17 — OFFICIAL REGISTRATION ============ */}
          <section className="retreat-section" id="registration">
            <RetreatEyebrow>Fees &amp; registration</RetreatEyebrow>
            <h2 className="retreat-section-title">Reserve your place</h2>
            <p className="retreat-section-lead">
              All fees are all-inclusive — accommodation, meals, yoga kit, course manual, and Yoga Alliance certification are covered. Submit the booking form and our team replies within 24 hours with verified payment instructions.
            </p>

            <div className="retreat-pricing-cards">
              <FadeIn>
                <article className="retreat-price-card">
                  <span className="retreat-price-badge">Shared Room</span>
                  <div className="retreat-price-value">
                    <span className="retreat-price-currency">
                      {currencySymbol}
                    </span>
                    <strong>{sharedPrice}</strong>
                    <span className="retreat-price-per">/ person</span>
                  </div>
                  <ul>
                    <li>
                      <Check
                        size={15}
                        className="text-[var(--coral)]"
                        aria-hidden="true"
                      />
                      Twin sharing AC room / dormitory
                    </li>
                    <li>
                      <Check
                        size={15}
                        className="text-[var(--coral)]"
                        aria-hidden="true"
                      />
                      All meals &amp; tuition included
                    </li>
                    <li>
                      <Check
                        size={15}
                        className="text-[var(--coral)]"
                        aria-hidden="true"
                      />
                      Yoga Alliance certificate
                    </li>
                  </ul>
                  <a
                    href="#book"
                    className="mt-4 button button-secondary !w-full !py-2 !text-[13.5px]"
                  >
                    Select Option
                  </a>
                </article>
              </FadeIn>

              <FadeIn delay={0.06}>
                <article className="retreat-price-card retreat-price-card-featured">
                  <span className="retreat-price-badge retreat-price-badge-featured">
                    <Heart size={11} aria-hidden="true" />
                    Private Room
                  </span>
                  <div className="retreat-price-value">
                    <span className="retreat-price-currency">
                      {currencySymbol}
                    </span>
                    <strong>{privatePrice}</strong>
                    <span className="retreat-price-per">/ person</span>
                  </div>
                  <ul>
                    <li>
                      <Check
                        size={15}
                        className="text-[var(--coral-dark)]"
                        aria-hidden="true"
                      />
                      Private AC room with ensuite bath
                    </li>
                    <li>
                      <Check
                        size={15}
                        className="text-[var(--coral-dark)]"
                        aria-hidden="true"
                      />
                      All meals &amp; tuition included
                    </li>
                    <li>
                      <Check
                        size={15}
                        className="text-[var(--coral-dark)]"
                        aria-hidden="true"
                      />
                      Yoga Alliance certificate
                    </li>
                  </ul>
                  <a
                    href="#book"
                    className="mt-4 button button-primary !w-full !py-2 !text-[13.5px]"
                  >
                    Select Option
                  </a>
                </article>
              </FadeIn>
            </div>

            <div className="retreat-dates-strip mt-8" aria-label="Batch information">
              <CalendarDays
                size={16}
                className="shrink-0 text-[var(--coral-dark)]"
                aria-hidden="true"
              />
              <div>
                <strong>Monthly start dates throughout the year</strong>
                <ul>
                  {datesList.map((date) => (
                    <li key={date.id || date.label}>
                      <span>{date.label}</span>
                      <small>{date.availability}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <FadeIn>
              <div className="retreat-booking-form mt-8">
                <h3>Secure booking form</h3>
                <BookingForm
                  retreatName={course.name}
                  paymentOptions={pageData.pricing.paymentOptions}
                  pricing={pageData.pricing}
                  programOptions={programOptions}
                  submitLabel="Reserve Your Spot"
                />
                <div className="retreat-booking-trust">
                  <span>
                    <ShieldCheck size={15} aria-hidden="true" /> Secure encrypted submission
                  </span>
                  <span>
                    <BadgeCheck size={15} aria-hidden="true" /> Yoga Alliance Registered School
                  </span>
                  <span>
                    <Check size={15} aria-hidden="true" /> Reply within 24 hours
                  </span>
                </div>
              </div>
            </FadeIn>
          </section>
        </div>
      </div>

      {/* ============ SECTION 18 — FINAL CTA ============ */}
      <section className="retreat-final-cta">
        <Container>
          <FadeIn className="retreat-final-cta-inner">
            <h2>Your Teaching Journey Starts in Goa</h2>
            <p>
              Join 3,500+ graduates from 45+ countries who chose Hatha Yogashala for their yoga teacher training. Reserve your spot today.
            </p>
            <div className="retreat-final-cta-actions">
              <ButtonLink href="#registration" className="retreat-hero-cta">
                Reserve Your Spot
              </ButtonLink>
              <a href={whatsappHref} className="button retreat-whatsapp">
                <SiWhatsapp size={17} aria-hidden="true" />
                WhatsApp Inquiry
              </a>
              <ButtonLink href="/yoga-teacher-training" variant="light">
                Compare All Courses
              </ButtonLink>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ============ SECTION 19 — OTHER COURSES ============ */}
      {otherCourses.length > 0 && (
        <section className="section">
          <Container>
            <SectionHeading
              eyebrow="More pathways"
              title="Explore other training levels"
            />
            <div className="retreat-grid two">
              {otherCourses.map((other) => (
                <article key={other.slug} className="retreat-teacher-card">
                  <div className="retreat-teacher-image relative h-48">
                    <Image
                      src={
                        HERO_IMAGES[other.hours] ||
                        other.image ||
                        "/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg"
                      }
                      alt={other.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-[var(--coral-dark)] px-2.5 py-1 text-[13.5px] font-black uppercase text-white">
                      {other.level || "TTC"}
                    </span>
                  </div>
                  <div className="retreat-teacher-body">
                    <h3>{other.name}</h3>
                    <p className="retreat-teacher-exp font-semibold text-[var(--coral-dark)]">
                      From {currencySymbol}
                      {parsePriceNumber(other.price)} / person (shared room)
                    </p>
                    <p className="retreat-teacher-bio text-[13.5px] text-[var(--muted)]">
                      {other.cardSummary || other.heroIntroduction || other.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        href={`/courses/${other.slug}`}
                        className="button button-primary !px-4 !py-2 !text-[13.5px]"
                      >
                        View full details →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
