"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
  Flame,
  Activity,
  Smile,
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
  testimonials as allTestimonials,
} from "@/data/retreatData";
import { teachersData } from "@/data/siteContentData";
import TeacherCard from "@/components/TeacherCard";
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
import StickySubNav from "./retreat/StickySubNav";
import BookingForm from "./retreat/BookingForm";
import CourseFeesTable from "./CourseFeesTable";
import TestimonialCarousel from "./retreat/TestimonialCarousel";
import MonthGuide from "./retreat/MonthGuide";
import { FadeIn, Stagger, StaggerItem } from "./retreat/Motion";

const yttcNavLinks = [
  { id: "overview", label: "1. Overview" },
  { id: "why", label: "2. Why Us" },
  { id: "syllabus", label: "3. Syllabus" },
  { id: "schedule", label: "4. Schedule" },
  { id: "highlights", label: "5. Highlights" },
  { id: "teachers", label: "6. Teachers" },
  { id: "experiences", label: "7. Excursions" },
  { id: "included", label: "8. Included" },
  { id: "excluded", label: "9. Excluded" },
  { id: "accommodation", label: "10. Stay & Food" },
  { id: "learning-outcomes", label: "11. Outcomes" },
  { id: "dates", label: "12. Dates" },
  { id: "fees", label: "13. Fees" },
  { id: "reviews", label: "14. Reviews" },
  { id: "faq", label: "15. FAQ" },
];

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

const HERO_IMAGES_BY_SLUG = {
  "100-hour-yoga-teacher-training-goa":
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-02.webp",
  "200-hour-yoga-teacher-training-goa":
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  "22-day-200-hour-flexible-yoga-teacher-training-goa":
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-04.webp",
  "200-hour-ashtanga-vinyasa-yoga-teacher-training-course-goa":
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-02.webp",
  "300-hour-yoga-teacher-training-goa":
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
  "aerial-yoga-teacher-training-goa":
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-08.webp",
};

const HERO_IMAGES = {
  "100-hour":
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-02.webp",
  "200-hour":
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  "300-hour":
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
};

function RetreatEyebrow({ children }) {
  return (
    <p className="mb-2 flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.16em] text-[var(--coral-dark)]">
      <Sparkles size={13} aria-hidden="true" />
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
    HERO_IMAGES_BY_SLUG[course.slug] ||
    HERO_IMAGES[course.hours] ||
    course.image ||
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp";
  const sharedPrice = parsePriceNumber(
    course.price || (course.pricing && course.pricing.shared),
  );
  const privatePrice = parsePriceNumber(
    course.privatePrice || (course.pricing && course.pricing.private),
  );

  const currencySymbol = "€";
  const whatsappHref = whatsappLink(
    course.whatsappMessage ||
      `Hi The Hatha Yogashala, I'm interested in the ${course.name}.`,
  );

  const categoryBadge = is100
    ? "Yoga Alliance RYS-100 Foundation"
    : is200
      ? "Yoga Alliance RYS-200 Certified"
      : is300
        ? "Yoga Alliance RYS-300 Advanced"
        : "Yoga Alliance RYS Certified";

  const cleanShortTagline =
    course.cardSummary ||
    course.heroSubtitle ||
    course.tagline ||
    (course.heroIntroduction
      ? course.heroIntroduction.split(". ")[0] + "."
      : "") ||
    course.description ||
    "Yoga Alliance certified immersive teacher training in Querim, North Goa.";

  const pageData = {
    title: course.name,
    tagline: course.heroSubtitle || course.tagline || "Querim Beach, North Goa",
    category: categoryBadge,
    heroTagline: cleanShortTagline,
    duration:
      course.duration || (is100 ? "14 days" : is200 ? "24 days" : "28 days"),
    location: course.location || "Querim, North Goa, India",
    rating: course.rating || 4.9,
    ratingCount: course.ratingCount || 120,
    students: course.groupSize || "12–15",
    pricing: {
      shared: { price: sharedPrice, currency: "EUR" },
      private: { price: privatePrice, currency: "EUR" },
      paymentOptions: [
        "Bank Transfer",
        "Credit Card / PayPal",
        "UPI / Cash on Arrival",
      ],
    },
    trustBadges: yttcTrustBadges,
    testimonials: allTestimonials.slice(0, 4),
    whatsappMessage: `Hi, I'd like to apply for the ${course.name} in Goa.`,
  };

  const programOptions = [
    {
      id: "course-type",
      label: "Course Format",
      options: [
        { value: course.slug, label: course.name },
        ...teacherTrainings
          .filter((c) => c.slug !== course.slug)
          .slice(0, 3)
          .map((c) => ({ value: c.slug, label: c.name })),
      ],
    },
  ];

  const whatIs = {
    heading: `What is the ${course.name}?`,
    paragraphs: [
      course.description || course.heroIntroduction,
      "The course follows the Yoga Alliance-approved syllabus, giving you a genuine foundation in yoga teacher training in Goa whether you continue your certification or simply wish to deepen your own practice.",
    ],
    points: course.focus ||
      course.prerequisites || [
        "Traditional Hatha & Ashtanga Vinyasa yoga",
        "Pranayama, breathwork & meditation",
        "Yoga philosophy & Patanjali's eight limbs",
        "Anatomy, physiology & alignment labs",
      ],
  };

  const whyList =
    course.whyChoose && course.whyChoose.length > 0
      ? course.whyChoose
      : yttcWhyChoose;

  const keyHighlightsList = [
    {
      title: "Yoga Alliance USA Certification",
      desc: "Internationally recognized credential enabling you to teach worldwide as an RYT.",
      icon: Award,
    },
    {
      title: "Small Intimate Batches (12–15 Max)",
      desc: "Individual hands-on adjustment, personal corrections, and close faculty mentoring.",
      icon: Users,
    },
    {
      title: "Traditional Hatha & Ashtanga Lineage",
      desc: "Authentic Indian methodology integrating classical asanas, pranayama, and philosophy.",
      icon: Flame,
    },
    {
      title: "Anatomy & Alignment Labs",
      desc: "Understand biomechanics, injury prevention, modifications, and prop adaptations.",
      icon: Activity,
    },
    {
      title: "Teaching Practicum from Week 1",
      desc: "Gain real confidence teaching your peers with constructive instructor feedback.",
      icon: GraduationCap,
    },
    {
      title: "Serene Ashram & Sattvic Meals",
      desc: "Peaceful Querim beachside living with 3 nourishing Ayurvedic vegetarian meals daily.",
      icon: Leaf,
    },
  ];

  const scheduleList = course.dailySchedule || [
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

  const inclusionsList = course.inclusions || [
    "Yoga Alliance-approved certificate upon graduation",
    "Three healthy vegetarian sattvic meals daily (Mon–Sat)",
    "Clean accommodation near peaceful Querim Beach",
    "Hot water showers, AC options, and high-speed Wi-Fi",
    "Comprehensive course manual plus spiritual book library",
    "Complete Yoga kit (mat, block, belt, neti pot)",
    "Weekend cultural activities and temple/beach excursions",
    "24/7 student support & airport transfer coordination",
  ];

  const exclusionsList = course.exclusions || [
    "International & domestic airfare",
    "Indian entry visa and travel/medical insurance",
    "Airport taxi transfers (available upon booking request)",
    "Personal laundry & extra café/leisure expenses",
    "Sunday lunches and dinners (free exploration day)",
  ];

  const learningOutcomesList = course.learningOutcomes || [
    "Mastery of primary Hatha & Ashtanga asana series with precise alignment cues",
    "Ability to design, structure, and teach safe, flowing 60-90 minute yoga classes",
    "In-depth comprehension of Patanjali's Yoga Sutras, Chakras, and Yogic philosophy",
    "Applied functional anatomy, biomechanics, and injury prevention techniques",
    "Hands-on adjustments, verbal correction skills, and props utilization",
    "Pranayama breathing techniques, Shatkarmas, and deep meditation leadership",
  ];

  const faqList =
    course.faq && course.faq.length > 0
      ? course.faq
      : [
          {
            question: `Who can join the ${course.hours || "TTC"} yoga teacher training?`,
            answer:
              course.bestFor ||
              "Open to all sincere students looking to deepen their personal practice or become globally certified yoga teachers. Beginners and intermediate practitioners are welcome.",
          },
          {
            question: "Is the certificate recognized globally?",
            answer:
              "Yes. The Hatha Yogashala is a registered Yoga Alliance school (RYS). Graduates are eligible to register as Registered Yoga Teachers (RYT) with Yoga Alliance USA.",
          },
          {
            question: "What is included in the course fee?",
            answer:
              "The fee includes course tuition, accommodation, three sattvic meals daily, study materials, yoga kit, and certification. No hidden costs.",
          },
          {
            question: "Can beginners join this teacher training?",
            answer:
              "Yes. Our curriculum is progressive and faculty provides personalized modifications so both beginners and experienced practitioners learn safely.",
          },
        ];

  const datesList = course.dates || [
    { label: "1st of next month", availability: "6 spots available" },
    { label: "15th of next month", availability: "4 spots available" },
    { label: "1st of upcoming month", availability: "8 spots available" },
    { label: "15th of upcoming month", availability: "Limited spots" },
  ];

  const streamSplit = [
    {
      name: "Asana Techniques & Training",
      hours: is100 ? "40 hrs" : is200 ? "75 hrs" : "110 hrs",
      desc: "Daily morning and evening asana practice focusing on alignment, sequencing, and anatomical cues in Hatha and Ashtanga Vinyasa.",
    },
    {
      name: "Anatomy & Physiology",
      hours: is100 ? "15 hrs" : is200 ? "30 hrs" : "45 hrs",
      desc: "Applied anatomy for yoga, biomechanics, joint health, injury prevention, and modifications for diverse body types.",
    },
    {
      name: "Yoga Philosophy & Ethics",
      hours: is100 ? "15 hrs" : is200 ? "30 hrs" : "45 hrs",
      desc: "Patanjali Yoga Sutras, Bhagavad Gita, Hatha Yoga Pradipika, subtle body anatomy (chakras, nadis), and teaching ethics.",
    },
    {
      name: "Teaching Methodology & Practicum",
      hours: is100 ? "30 hrs" : is200 ? "65 hrs" : "100 hrs",
      desc: "Hands-on teaching practice, voice modulation, adjustments, class planning, and constructive mentor feedback.",
    },
  ];

  const otherCourses = teacherTrainings.filter((c) => c.slug !== course.slug);

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="retreat-hero">
        <div className="retreat-hero-bg">
          <Image
            src={heroImage}
            alt={course.name}
            fill
            priority
            sizes="100vw"
            className="retreat-hero-bg-img"
          />
          <div className="retreat-hero-overlay" />
        </div>

        <div className="container retreat-hero-inner">
          <nav aria-label="Breadcrumb" className="retreat-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/yoga-teacher-training-goa">Yoga Teacher Training</Link>
            <span>/</span>
            <span>{course.name}</span>
          </nav>

          <div className="retreat-hero-badges">
            <span className="retreat-hero-badge">
              <Sparkles size={13} className="text-[var(--gold)] shrink-0" aria-hidden="true" />
              {pageData.category}
            </span>
            <span className="retreat-hero-badge-sub">
              <Clock3 size={13} className="shrink-0" aria-hidden="true" />
              {pageData.duration} Intensive
            </span>
          </div>

          <h1 className="retreat-hero-title font-philosopher">{course.name}</h1>
          <p className="retreat-hero-lead">{pageData.heroTagline}</p>

          <div className="retreat-hero-meta">
            <div>
              <Clock3 size={17} aria-hidden="true" />
              <div>
                <span>Duration</span>
                <strong>{pageData.duration}</strong>
              </div>
            </div>
            <div>
              <MapPin size={17} aria-hidden="true" />
              <div>
                <span>Location</span>
                <strong>{pageData.location}</strong>
              </div>
            </div>
            <div>
              <Star
                size={17}
                className="fill-[var(--gold)] text-[var(--gold)]"
                aria-hidden="true"
              />
              <div>
                <span>Rating</span>
                <strong>{pageData.rating}/5 ({pageData.ratingCount} reviews)</strong>
              </div>
            </div>
            <div>
              <Users size={17} aria-hidden="true" />
              <div>
                <span>Batch Size</span>
                <strong>Small ({pageData.students} max)</strong>
              </div>
            </div>
          </div>

          <div className="retreat-hero-actions">
            <a href="#registration" className="retreat-hero-cta">
              <span>Reserve Your Spot</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="retreat-hero-wa"
              aria-label="Ask a question on WhatsApp"
            >
              <SiWhatsapp size={19} aria-hidden="true" className="shrink-0 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ STICKY NAV BAR WITH ACTIVE SCROLL SPY ============ */}
      <StickySubNav links={yttcNavLinks} ariaLabel="Course section navigation" />

      {/* ============ MAIN LAYOUT: SIDEBAR + 14 CONTENT SECTIONS ============ */}
      <MobileStickyBar
        left={
          <p className="truncate text-[13px] font-black leading-tight text-[var(--brown)]">
            From{" "}
            <span className="text-[var(--coral-dark)]">
              {currencySymbol}
              {sharedPrice}
            </span>
            <span className="text-[13px] font-semibold text-[var(--muted)]">
              {" "}
              / person
            </span>
          </p>
        }
        right={
          <>
            <a
              href="#registration"
              className="button button-primary !px-3 !py-2 !text-[12px] whitespace-nowrap"
            >
              Reserve Spot
            </a>
            <a
              href={whatsappHref}
              className="button booking-whatsapp !size-9 !p-0 !text-[13px] flex items-center justify-center"
              aria-label="WhatsApp inquiry"
            >
              <SiWhatsapp size={15} aria-hidden="true" />
            </a>
          </>
        }
      />

      <div className="container retreat-layout">
        {/* Sticky Sidebar */}
        <BookingSidebar
          page={pageData}
          retreat={{
            name: course.name,
            date: "Monthly start dates",
            whatsappMessage: pageData.whatsappMessage,
          }}
          ctaLabel="Reserve Your Spot"
          entityLabel="TTC Course"
        />

        <div className="retreat-content">
          {/* ============ 1. OVERVIEW (White) ============ */}
          <section
            className="retreat-section bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="overview"
          >
            <RetreatEyebrow>1. Course Overview</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              {whatIs.heading}
            </h2>
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

            {/* In-body Visual Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp"
                  alt="Asana practice and alignment in the shala"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp"
                  alt="Sunrise beach practice in North Goa"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Designed For */}
            {course.designedFor && course.designedFor.length > 0 && (
              <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-6">
                <h3 className="font-heading text-lg font-semibold text-[var(--brown)] mb-3">
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

            {/* Prerequisites */}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-heading text-lg font-semibold text-[var(--brown)] mb-2 flex items-center gap-2">
                  <BadgeCheck size={18} className="text-[var(--coral-dark)]" />
                  Prerequisites &amp; Admission:
                </h3>
                <ul className="space-y-1.5">
                  {course.prerequisites.map((req) => (
                    <li
                      key={req}
                      className="text-[13.5px] text-[var(--muted)] flex items-center gap-2"
                    >
                      <span className="size-1.5 rounded-full bg-[var(--coral-dark)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* ============ 2. WHY CHOOSE THIS COURSE (Surface) ============ */}
          <section
            className="retreat-section bg-[var(--surface)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="why"
          >
            <RetreatEyebrow>2. Why Choose This Course</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Why students choose us for their {course.hours || "TTC"} in Goa
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
                      <h3 className="font-heading">{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </section>

          {/* ============ 3. SYLLABUS (White) ============ */}
          <section
            className="retreat-section bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="syllabus"
          >
            <RetreatEyebrow>3. Syllabus &amp; Curriculum</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Comprehensive {course.hours || "Yoga Alliance"} Syllabus
            </h2>
            <p className="retreat-section-lead">
              Our curriculum is structured into four core study streams,
              combining theory, practice, and hands-on teaching experience.
            </p>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {streamSplit.map((stream) => (
                <StaggerItem key={stream.name}>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-5 shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading text-[16px] font-semibold text-[var(--brown)]">
                        {stream.name}
                      </h3>
                      <span className="rounded-full bg-white px-3 py-1 text-[12.5px] font-black text-[var(--coral-dark)] border border-[var(--border)]">
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

            {course.curriculum && course.curriculum.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-[var(--brown)]">
                  Detailed Learning Modules:
                </h3>
                {course.curriculum.map((mod, idx) => (
                  <FadeIn
                    key={typeof mod === "string" ? mod : mod.title || idx}
                  >
                    <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-xs">
                      {typeof mod === "string" ? (
                        <p className="font-semibold text-[var(--brown)]">
                          {mod}
                        </p>
                      ) : (
                        <>
                          <h4 className="font-heading text-lg font-semibold text-[var(--brown)] flex items-center gap-2 mb-2">
                            <BookOpen
                              size={18}
                              className="text-[var(--coral-dark)]"
                            />
                            {mod.title}
                          </h4>
                          <p className="text-[14px] text-[var(--muted)] leading-relaxed">
                            {mod.description}
                          </p>
                          {mod.topics && (
                            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text)]">
                              {mod.topics.map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                  <Check
                                    size={14}
                                    className="text-[var(--coral-dark)]"
                                  />
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </section>

          {/* ============ 4. DAILY SCHEDULE (Surface) ============ */}
          <section
            className="retreat-section bg-[var(--surface)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="schedule"
          >
            <RetreatEyebrow>4. Daily Schedule</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              A structured daily rhythm designed for deep immersion
            </h2>
            <p className="retreat-section-lead">
              Predictable days make deep learning possible. Here is how a
              typical day unfolds during the training.
            </p>
            <div className="retreat-schedule">
              <FadeIn>
                <article className="retreat-schedule-day overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-xs">
                  <header className="p-5 sm:p-6 bg-gradient-to-r from-[var(--surface)] to-[var(--cream)] border-b border-[var(--border)]">
                    <span className="retreat-schedule-daynum inline-block rounded-full bg-[var(--coral-dark)] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      Daily Timetable
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-normal text-[var(--brown)] mt-2.5">
                      Sunrise to silence — every day
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[var(--muted)] mt-1">
                      Sessions rotate through asana, study, teaching practicum,
                      and self-practice, with protected rest in the afternoon.
                    </p>
                  </header>
                  <div className="p-3 sm:p-5 divide-y divide-[var(--border)]/50 bg-white">
                    {scheduleList.map(([time, activity]) => (
                      <div
                        className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-3 sm:px-4 rounded-xl gap-1.5 sm:gap-4 transition-colors hover:bg-[var(--surface)]/70"
                        key={`${time}-${activity}`}
                      >
                        <div className="flex items-center gap-2.5 shrink-0 sm:w-44">
                          <span
                            className="size-2 rounded-full bg-[var(--coral-dark)] shrink-0"
                            aria-hidden="true"
                          />
                          <time className="text-xs sm:text-[13.5px] font-bold text-[var(--coral-dark)] tracking-wide whitespace-nowrap">
                            {time}
                          </time>
                        </div>
                        <strong className="text-[13.5px] sm:text-[14.5px] font-semibold text-[var(--brown)] flex-1 font-sans sm:pl-2">
                          {activity}
                        </strong>
                      </div>
                    ))}
                  </div>

                  {/* Schedule in action photos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[var(--surface)]/40 border-t border-[var(--border)]">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xs border border-[var(--border)]">
                      <Image
                        src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-03.webp"
                        alt="Morning pranayama and breathwork at sunrise"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <span className="absolute bottom-2 left-2 text-[11px] font-bold bg-black/60 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                        07:00 AM — Morning Breathwork & Asana
                      </span>
                    </div>
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xs border border-[var(--border)]">
                      <Image
                        src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp"
                        alt="Evening candlelit meditation and philosophy talk"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <span className="absolute bottom-2 left-2 text-[11px] font-bold bg-black/60 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                        05:30 PM — Sunset Meditation & Philosophy
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            </div>
          </section>

          {/* ============ 5. COURSE KEY HIGHLIGHTS (White) ============ */}
          <section
            className="retreat-section bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="highlights"
          >
            <RetreatEyebrow>5. Course Key Highlights</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Core Pillars of Your Teacher Training
            </h2>
            <p className="retreat-section-lead">
              Every aspect of this training is designed to build confident,
              knowledgeable, and compassionate teachers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyHighlightsList.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--coral-dark)]/40 hover:-translate-y-0.5"
                  >
                    <div className="size-9 rounded-lg bg-white text-[var(--coral-dark)] flex items-center justify-center mb-3 shadow-xs border border-[var(--border)]">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-[var(--brown)] mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {highlight.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ============ 6. TEACHERS SECTION (Surface - Same as Home Page) ============ */}
          <section
            className="retreat-section bg-[var(--surface)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="teachers"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <RetreatEyebrow>6. Expert Faculty</RetreatEyebrow>
                <h2 className="retreat-section-title font-philosopher !mb-0">
                  Meet Your Yoga Teacher Training Faculty in Goa
                </h2>
              </div>
              <Link
                href="/teachers"
                className="text-xs font-bold text-[var(--coral-dark)] hover:underline inline-flex items-center gap-1 shrink-0"
              >
                <span>Meet the Whole Team</span>
                <ArrowRight size={13} />
              </Link>
            </div>
            <p className="retreat-section-lead text-xs sm:text-sm mb-6">
              Experienced lead teachers, anatomy specialists, and meditation
              masters assigned to guide your practice in Goa.
            </p>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
              {teachersData.slice(0, 3).map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          </section>

          {/* ============ 7. ACTIVITIES & EXCURSIONS (White) ============ */}
          <section
            className="retreat-section bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="experiences"
          >
            <RetreatEyebrow>7. Activities &amp; Excursions</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Goa Beyond the Shala
            </h2>
            <p className="retreat-section-lead">
              Sundays and free afternoons are yours — explore the quiet beauty
              of North Goa, easily arranged with our retreat team.
            </p>
            <Stagger className="retreat-experience-grid">
              {goaExperiences.slice(0, 4).map((experience) => (
                <StaggerItem key={experience.title}>
                  <article className="retreat-experience-card">
                    <span className="retreat-experience-tag">
                      {experience.tag}
                    </span>
                    <h3 className="font-heading">{experience.title}</h3>
                    <p>{experience.text}</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ 8. WHAT'S INCLUDED (Surface) ============ */}
          <section
            className="retreat-section bg-[var(--surface)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="included"
          >
            <RetreatEyebrow>8. What&apos;s Included</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Everything Included in Your Tuition
            </h2>
            <p className="retreat-section-lead">
              Our residential courses are fully all-inclusive with no hidden
              fees.
            </p>
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-xs">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {inclusionsList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[var(--brown)]"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--coral-dark)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ============ 9. WHAT'S EXCLUDED (White) ============ */}
          <section
            className="retreat-section bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="excluded"
          >
            <RetreatEyebrow>9. What&apos;s Excluded</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Items Not Covered in the Course Fee
            </h2>
            <p className="retreat-section-lead">
              Transparent details on personal travel expenses and extras.
            </p>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-6 shadow-xs">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {exclusionsList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[var(--muted)]"
                  >
                    <XCircle
                      size={17}
                      className="mt-0.5 shrink-0 text-[var(--coral-dark)]/70"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ============ 10. ACCOMMODATION & FOOD (Cream) ============ */}
          <section
            className="retreat-section bg-[var(--cream)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="accommodation"
          >
            <RetreatEyebrow>10. Accommodation &amp; Food</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Rest &amp; Nourishment on Campus
            </h2>
            <p className="retreat-section-lead">
              Choose a shared room for community, or a private room for extra
              space and quiet. All stays include three fresh sattvic vegetarian
              meals daily.
            </p>

            {/* Room & Food Visuals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xs border border-[var(--border)]">
                <Image
                  src="/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp"
                  alt="Eco-friendly cottages surrounded by tropical gardens"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xs border border-[var(--border)]">
                <Image
                  src="/images/accomodation/the-hatha-yogashala-arambol-goa-private-room-interior-01.webp"
                  alt="Spacious private room with ensuite bathroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xs border border-[var(--border)]">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-01.webp"
                  alt="Fresh organic Ayurvedic sattvic thali meal"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="retreat-rooms">
              <FadeIn>
                <article className="retreat-room-block">
                  <h3 className="font-heading">Shared Room</h3>
                  <p>
                    Twin-sharing AC rooms or mixed dormitory — enjoy community
                    and friendships during your training.
                  </p>
                  <div className="retreat-room-gallery">
                    {[
                      {
                        src: "/images/accomodation/the-hatha-yogashala-arambol-goa-twin-bed-room-interior-01.webp",
                        alt: "Twin sharing AC room at The Hatha Yogashala Goa",
                      },
                      {
                        src: "/images/accomodation/the-hatha-yogashala-arambol-goa-coconut-palms-sunlight-02.webp",
                        alt: "Twin sharing bedroom with tropical palm balcony view",
                      },
                    ].map((img) => (
                      <div key={img.src} className="retreat-room-thumb">
                        <Media
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <ul className="retreat-room-features">
                    <li>
                      <Check size={14} aria-hidden="true" /> Twin beds / Single
                      bed options
                    </li>
                    <li>
                      <Check size={14} aria-hidden="true" /> Air-conditioning
                      &amp; ceiling fan
                    </li>
                    <li>
                      <Check size={14} aria-hidden="true" /> Attached bathroom
                      with hot water
                    </li>
                    <li>
                      <Check size={14} aria-hidden="true" /> High-speed Wi-Fi
                    </li>
                  </ul>
                </article>
              </FadeIn>

              <FadeIn delay={0.08}>
                <article className="retreat-room-block">
                  <h3 className="font-heading">Private Room</h3>
                  <p>
                    Your own peaceful room with an attached bathroom and quiet
                    space for rest and self-study.
                  </p>
                  <div className="retreat-room-gallery">
                    {[
                      {
                        src: "/images/accomodation/the-hatha-yogashala-arambol-goa-cottage-bedroom-interior-01.webp",
                        alt: "Private room at The Hatha Yogashala Goa",
                      },
                      {
                        src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
                        alt: "Peaceful ashram campus gardens in North Goa",
                      },
                    ].map((img) => (
                      <div key={img.src} className="retreat-room-thumb">
                        <Media
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <ul className="retreat-room-features">
                    <li>
                      <Check size={14} aria-hidden="true" /> Queen / Double bed
                    </li>
                    <li>
                      <Check size={14} aria-hidden="true" /> Air-conditioning
                      &amp; workspace desk
                    </li>
                    <li>
                      <Check size={14} aria-hidden="true" /> Private attached
                      bathroom with hot shower
                    </li>
                    <li>
                      <Check size={14} aria-hidden="true" /> Balcony or garden
                      view
                    </li>
                  </ul>
                </article>
              </FadeIn>
            </div>

            {/* Food Sub-block */}
            <div
              className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-xs"
              id="meals"
            >
              <div className="flex items-center gap-2 mb-3 text-[var(--coral-dark)]">
                <Leaf size={22} />
                <h3 className="font-heading text-xl font-bold text-[var(--brown)]">
                  Sattvic Yogic Nutrition
                </h3>
              </div>
              <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-4">
                Three freshly prepared vegetarian, sattvic meals daily (Monday
                to Saturday morning). Prepared with locally sourced ingredients,
                our menu supports intense daily practice with easy digestion and
                balanced nutrition.
              </p>
              <Stagger className="retreat-meal-grid">
                {meals.map((meal) => (
                  <StaggerItem key={meal.meal}>
                    <article className="retreat-meal-card">
                      <span className="retreat-meal-type">{meal.meal}</span>
                      <p className="retreat-meal-time">{meal.time}</p>
                      <h4 className="font-heading">{meal.meal}</h4>
                      <p className="retreat-meal-desc">{meal.text}</p>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>

          {/* ============ 11. WHAT YOU'LL LEARN (White) ============ */}
          <section
            className="retreat-section bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="learning-outcomes"
          >
            <RetreatEyebrow>11. What You&apos;ll Learn</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Graduate Learning Outcomes &amp; Skills
            </h2>
            <p className="retreat-section-lead">
              By completing this course, you will acquire core teaching
              competencies, anatomical alignment skills, and traditional yoga
              wisdom.
            </p>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learningOutcomesList.map((outcome) => (
                <StaggerItem key={outcome}>
                  <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xs">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[var(--coral-dark)]"
                      aria-hidden="true"
                    />
                    <span className="text-[14px] font-semibold text-[var(--brown)] leading-relaxed">
                      {outcome}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ 12. COURSE DATES (Surface) ============ */}
          <section
            className="retreat-section bg-[var(--surface)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="dates"
          >
            <RetreatEyebrow>12. Upcoming Intakes</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Course Dates
            </h2>
            <p className="retreat-section-lead">
              New batches start monthly throughout the year. Select your
              preferred intake month below.
            </p>
            <div className="retreat-dates-strip" aria-label="Batch information">
              <CalendarDays
                size={18}
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
          </section>

          {/* ============ 13. COURSE FEES & REGISTRATION (White / Cream) ============ */}
          <section
            className="retreat-section bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="fees"
          >
            <CourseFeesTable
              programName={course.name}
              subHeading={`${course.name} in Goa`}
              feeRows={course.feeRows}
              hideOuterContainer
            />

            <div className="retreat-booking-form mt-8" id="registration">
              <RetreatEyebrow>Reserve Your Place</RetreatEyebrow>
              <h2 className="retreat-section-title font-philosopher">
                Secure Enrollment Form
              </h2>
              <p className="retreat-section-lead">
                Submit the form below and our admissions team will confirm your
                place and provide verified payment instructions within 24 hours.
              </p>
              <BookingForm
                retreatName={course.name}
                paymentOptions={pageData.pricing.paymentOptions}
                pricing={pageData.pricing}
                programOptions={programOptions}
                submitLabel="Reserve Your Spot"
              />
              <div className="retreat-booking-trust">
                <span>
                  <ShieldCheck size={15} aria-hidden="true" /> Secure encrypted
                  submission
                </span>
                <span>
                  <BadgeCheck size={15} aria-hidden="true" /> Yoga Alliance
                  Registered School
                </span>
                <span>
                  <Check size={15} aria-hidden="true" /> Reply within 24 hours
                </span>
              </div>
            </div>
          </section>

          {/* ============ TESTIMONIALS (Surface) ============ */}
          <section
            className="retreat-section bg-[var(--surface)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="reviews"
          >
            <RetreatEyebrow>Student Experiences</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Trusted by 3,500+ yoga teacher graduates
            </h2>
            <TestimonialCarousel testimonials={pageData.testimonials} />
          </section>

          {/* ============ FAQ (White) ============ */}
          <section
            className="retreat-section bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-xs"
            id="faq"
          >
            <RetreatEyebrow>Frequently Asked Questions</RetreatEyebrow>
            <h2 className="retreat-section-title font-philosopher">
              Answers Before You Arrive
            </h2>
            <Accordion items={faqList} />
          </section>
        </div>
      </div>

      {/* ============ FINAL CTA BANNER ============ */}
      <section className="relative overflow-hidden bg-[#134e4a] text-white py-16 md:py-20 my-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,97,0.2),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,99,74,0.15),transparent_60%)] pointer-events-none" />
        <div className="container relative z-10 text-center max-w-2xl mx-auto px-4">
          <FadeIn>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--gold)] mb-4 backdrop-blur-sm border border-white/15">
              <Sparkles size={13} aria-hidden="true" />
              Yoga Alliance Certified
            </span>
            <h2 className="font-philosopher leading-tight text-white mb-4">
              Start Your Yoga Journey
            </h2>
            <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed mb-8">
              Ready to train, transform, and teach? Book your seat at The Hatha
              Yogashala today and join a global community of certified yoga
              teachers trained on the beaches of Goa.
            </p>
            <div className="flex justify-center">
              <ButtonLink
                href="#registration"
                className="!px-8 !py-3.5 !text-sm font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Book Now</span>
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ 14. OTHER TRAINING COURSES (Above Footer) ============ */}
      {otherCourses.length > 0 && (
        <section
          className="py-14 md:py-20 bg-[var(--surface)] border-t border-[var(--border)]"
          id="other-courses"
        >
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
                Yoga Teacher Training Lineages
              </span>
              <h2 className="mt-1 font-philosopher text-[var(--brown)]">
                Other Trainings Offered at The Hatha Yogashala
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[var(--muted)]">
                Explore our 200-Hour Hatha, 300-Hour YTT, 100-Hour YTT, and
                50-Hour Aerial Yoga Teacher Training in Goa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCourses.slice(0, 3).map((other) => {
                const otherPrice = parsePriceNumber(other.price);
                return (
                  <article
                    key={other.slug}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--coral-dark)]/50"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)]">
                      <Image
                        src={
                          HERO_IMAGES[other.hours] ||
                          other.image ||
                          "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp"
                        }
                        alt={other.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="rounded-full bg-white/95 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[var(--coral-dark)] shadow-xs">
                          {other.hours || other.level || "TTC"}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs">
                        <span className="text-[11px] font-medium opacity-90">
                          {other.duration || "Residential Course"}
                        </span>
                        <span className="rounded-full bg-white/20 backdrop-blur-md px-2 py-0.5 text-[11px] font-bold text-white">
                          From {currencySymbol}
                          {otherPrice}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <h3 className="font-heading text-lg font-normal text-[var(--brown)] group-hover:text-[var(--coral-dark)] transition-colors leading-snug">
                        <Link href={`/courses/${other.slug}`}>
                          {other.name}
                        </Link>
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-[13px] text-[var(--muted)] leading-relaxed line-clamp-2">
                        {other.cardSummary ||
                          other.heroIntroduction ||
                          other.description}
                      </p>
                      <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between">
                        <Link
                          href={`/courses/${other.slug}`}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--coral-dark)] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[var(--coral)]"
                        >
                          <span>View Course</span>
                          <ArrowRight size={13} />
                        </Link>
                        <span className="text-[11px] text-[var(--muted)] font-medium">
                          Yoga Alliance RYS
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
