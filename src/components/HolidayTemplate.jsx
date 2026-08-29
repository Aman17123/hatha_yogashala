"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bed,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock,
  Clock3,
  Compass,
  Heart,
  HelpCircle,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Sunrise,
  Sunset,
  Users,
  Utensils,
  Volume2,
  Waves,
  Wifi,
  Wind,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import {
  absoluteUrl,
  site,
  testimonials,
  reviewProfile,
  whatsappLink,
} from "@/data/siteData";
import { Container, ButtonLink, JsonLd } from "./ui";
import BookingForm from "./retreat/BookingForm";
import ReviewsSection from "./GoogleReviews";
import {
  breadcrumbSchema,
  faqSchema,
  ORG_ID,
  WEBSITE_ID,
  LOCAL_BUSINESS_ID,
} from "@/lib/schema";

const holidayActivities = [
  {
    title: "Daily Beach & Shala Yoga",
    desc: "Energizing morning Hatha flow and restorative evening Yin sessions in our breezy open-air wooden shala.",
    icon: Sun,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  },
  {
    title: "Ayurvedic Herbal Massages",
    desc: "Full-body Abhyanga massage with warm therapeutic oils to dissolve muscular tightness and fatigue.",
    icon: Heart,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp",
  },
  {
    title: "Sound Healing & Yoga Nidra",
    desc: "Evening sound baths with singing bowls and guided psychic sleep to restore your nervous system.",
    icon: Sparkles,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-03.webp",
  },
  {
    title: "Organic Sattvic Cuisine",
    desc: "Three delicious, freshly cooked Ayurvedic vegetarian meals daily prepared with locally sourced Goan produce.",
    icon: Utensils,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-01.webp",
  },
];

const querimHighlights = [
  {
    title: "5-Minute Walk to Querim Beach",
    desc: "Querim (Keri) is North Goa's most peaceful beach — wide white sands, swaying pine groves, and clean ocean waters far from loud commercial crowds.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    tag: "Coastline",
  },
  {
    title: "Open-Air Natural Wooden Shala",
    desc: "Practice with the sound of rustling coconut fronds and ocean breezes. Fully equipped with natural mats, blocks, belts, and bolsters.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
    tag: "Sanctuary",
  },
  {
    title: "Lush Tropical Garden Campus",
    desc: "Stay nestled in lush tropical greenery, flowering frangipani trees, shaded hammock areas, and peaceful garden pathways.",
    image: "/images/accomodation/the-hatha-yogashala-arambol-goa-coconut-palms-sunlight-02.webp",
    tag: "Nature",
  },
];

const inclusionsList = [
  {
    icon: Bed,
    title: "Peaceful Eco-Cottage Stay",
    desc: "Private or shared comfortable cottage with ensuite bathroom, hot shower, and garden patio.",
  },
  {
    icon: Sun,
    title: "2 Daily Guided Yoga Sessions",
    desc: "Morning energizing Hatha flow & evening restorative / Yin practice tailored for all levels.",
  },
  {
    icon: Utensils,
    title: "3 Sattvic Meals Daily",
    desc: "Nutrient-rich, delicious Ayurvedic vegetarian breakfasts, lunches, and dinners prepared fresh.",
  },
  {
    icon: Heart,
    title: "Ayurvedic Body Massage",
    desc: "Rejuvenating full-body herbal oil Abhyanga massage to soothe muscles and relieve stress.",
  },
  {
    icon: Volume2,
    title: "Sound Bath & Meditation",
    desc: "Candlelit Tibetan singing bowl sound healing sessions, pranayama, and guided Yoga Nidra.",
  },
  {
    icon: Waves,
    title: "Beachside Leisure & Nature",
    desc: "Direct 5-minute walking access to peaceful Querim beach for sunrise walks and ocean swims.",
  },
  {
    icon: Leaf,
    title: "Herbal Teas & Pure Water",
    desc: "Unlimited filtered drinking water, detox herbal infusions, fresh fruits, and chai.",
  },
  {
    icon: Sparkles,
    title: "All Yoga Equipment",
    desc: "High-density mats, cork blocks, straps, bolsters, and meditation cushions provided.",
  },
];

const holidayPersonas = [
  {
    title: "Solo Travelers & Seekers",
    subtitle: "A welcoming, peaceful home",
    desc: "Safe, supportive atmosphere where you can enjoy quiet solitude or connect with warm, like-minded yogis over shared meals.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-garden-lounge-candid-portrait-01.webp",
  },
  {
    title: "Professionals & Burnout Recovery",
    subtitle: "Digital detox & deep reset",
    desc: "Step away from screens, deadlines, and city bustle to let your nervous system recharge through slow living, fresh air, and deep sleep.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-savasana-final-relaxation-pose-02.webp",
  },
  {
    title: "Complete Beginners",
    subtitle: "Gentle, non-judgmental guidance",
    desc: "No prior yoga experience needed. Our instructors meet you where you are, teaching you safe alignment and mindful breath awareness.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-04.webp",
  },
  {
    title: "Couples & Friends",
    subtitle: "Reconnecting in tropical serenity",
    desc: "Share restorative beach sunrises, nourishing feasts, and transformative relaxation together in an unhurried tropical setting.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-beach-group-tree-pose-vrksasana-01.webp",
  },
];

const galleryMoments = [
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-03.webp",
    alt: "Beach yoga session at sunrise on Querim beach Goa",
    title: "Sunrise Beach Practice",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
    alt: "Wooden garden cottages at The Hatha Yogashala Goa",
    title: "Garden Eco-Cottages",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-02.webp",
    alt: "Fresh Ayurvedic vegetarian thali meal",
    title: "Ayurvedic Sattvic Meals",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-02.webp",
    alt: "Candlelit meditation and sound healing in yoga shala",
    title: "Evening Sound Baths",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-garden-lounge-candid-portrait-06.webp",
    alt: "Relaxing in the tropical garden lounge",
    title: "Tranquil Garden Lounge",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-flower-petal-om-mandala-ceremony-01.webp",
    alt: "Flower petal sacred mandala ceremony",
    title: "Sacred Ceremonies",
  },
];

const holidayFaqs = [
  {
    question: "What is included in this Yoga Holiday package?",
    answer:
      "All packages include clean private or shared eco-cottage accommodation, daily morning and evening yoga & meditation sessions, full-body Ayurvedic Abhyanga massage, 3 freshly prepared vegetarian sattvic meals daily, unlimited filtered drinking water, and herbal teas.",
  },
  {
    question: "Can beginners join this Yoga Holiday?",
    answer:
      "Yes! Our yoga holidays are suitable for all experience levels, including beginners. Our teachers provide individual modifications and variations so you can practice comfortably at your own pace.",
  },
  {
    question: "Can I arrive on any day of the week?",
    answer:
      "Yes, yoga holidays have flexible check-in dates throughout the season (October to May). You can start your stay on whichever day fits your travel itinerary.",
  },
  {
    question: "How do I reach the Yogashala from Goa airport?",
    answer:
      "We are located in Querim (Pernem), North Goa. Manohar International Airport (MOPA - GOX) is just 40 minutes away, while Dabolim Airport (GOI) is approx 90 minutes. We can arrange private airport pickup upon request.",
  },
  {
    question: "Is it safe for solo female travelers?",
    answer:
      "Yes, absolutely. A significant proportion of our holiday guests are solo female travelers. Our campus is peaceful, secure, and supported by a warm, welcoming community.",
  },
];

export default function HolidayTemplate({ holiday }) {
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  const whatsappHref = whatsappLink(
    `Hi, I would like to book or ask about the ${holiday.name} (${holiday.price}) at The Hatha Yogashala Goa.`,
  );

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Yoga Holidays", href: "/yoga-holidays-goa" },
    { label: holiday.name },
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(`/holidays/${holiday.slug}`)}#webpage`,
    url: absoluteUrl(`/holidays/${holiday.slug}`),
    name: `${holiday.name} | The Hatha Yogashala`,
    description: holiday.tagline,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": LOCAL_BUSINESS_ID },
    inLanguage: "en-IN",
  };

  const holidaySchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${absoluteUrl(`/holidays/${holiday.slug}`)}#trip`,
    name: `${holiday.name} | The Hatha Yogashala`,
    description: `${holiday.tagline} An authentic yoga holiday experience in Goa by The Hatha Yogashala with daily asana, Ayurvedic massage, sattvic meals, and beachside stay.`,
    url: absoluteUrl(`/holidays/${holiday.slug}`),
    touristType: "Yoga and wellness holiday travellers",
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "The Hatha Yogashala",
    },
    offers: {
      "@type": "Offer",
      price: holiday.numericPrice,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/holidays/${holiday.slug}`),
    },
  };

  const activeDay = holiday.schedule[activeDayIdx] || holiday.schedule[0];

  const faq = faqSchema(holidayFaqs);
  const crumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Yoga Holidays in Goa", url: "/yoga-holidays-goa" },
    { name: holiday.name, url: `/holidays/${holiday.slug}` },
  ]);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={holidaySchema} />
      {faq && <JsonLd data={faq} />}
      <JsonLd data={crumb} />

      {/* =========================================================================
          SECTION 1 — HERO & AUTHENTIC INTRODUCTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[var(--cream)] pt-4 pb-8 md:pt-6 md:pb-12 border-b border-[var(--border)]">
        <Container>
          {/* Compact Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-[var(--muted)]">
              {breadcrumbs.map((item, idx) => (
                <li key={item.label} className="flex items-center gap-1.5">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-[var(--coral-dark)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[var(--brown)] font-semibold">
                      {item.label}
                    </span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <span className="opacity-40">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left: Text & Intro */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--coral-dark)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)] mb-2.5">
                <Sparkles size={13} aria-hidden="true" />
                The Hatha Yogashala Goa
              </span>

              <h1>
                {holiday.name}
              </h1>

              <p className="mt-2 text-sm sm:text-base font-medium text-[var(--brown)]/80 leading-relaxed">
                {holiday.tagline}
              </p>

              {/* Compact Meta Badges */}
              <div className="mt-4 flex flex-wrap gap-2.5 text-xs font-semibold text-[var(--brown)]">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                  <Clock3 size={14} className="text-[var(--coral-dark)]" />
                  <span>{holiday.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                  <MapPin size={14} className="text-[var(--coral-dark)]" />
                  <span>{holiday.location}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                  <Star
                    size={14}
                    className="text-[var(--gold)] fill-[var(--gold)]"
                  />
                  <span>5.0 Google Rating</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                  <span className="font-bold text-[var(--coral-dark)]">
                    {holiday.price}
                  </span>
                  <span>/ person</span>
                </div>
              </div>

              {/* Short Intro Lead */}
              <div className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--text)]">
                <p>{holiday.introText[0]}</p>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="button button-primary !px-5 !py-2.5 !text-xs sm:!text-sm font-bold shadow-sm hover:shadow-md transition-all"
                >
                  Book Your Holiday
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary !px-5 !py-2.5 !text-xs sm:!text-sm font-bold flex items-center gap-2"
                >
                  <SiWhatsapp size={15} className="text-[#25D366]" />
                  WhatsApp Inquire
                </a>
              </div>
            </div>

            {/* Right: Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-2.5 shadow-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={holiday.image}
                    alt={`${holiday.name} at The Hatha Yogashala Goa`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-white/90">
                      The Hatha Yogashala Goa
                    </span>
                    <p className="text-base text-white font-normal font-heading">
                      {holiday.name}
                    </p>
                  </div>
                </div>

                <div className="p-3 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[var(--muted)]">
                    <span>ALL-INCLUSIVE EXPERIENCE</span>
                    <span className="text-[var(--coral-dark)] font-black text-sm">
                      {holiday.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[var(--brown)]">
                    <span className="flex items-center gap-1.5">
                      <Check size={13} className="text-[var(--coral-dark)]" />{" "}
                      Daily Yoga
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check size={13} className="text-[var(--coral-dark)]" />{" "}
                      Sattvic Meals
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check size={13} className="text-[var(--coral-dark)]" />{" "}
                      Ayurvedic Massages
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check size={13} className="text-[var(--coral-dark)]" />{" "}
                      Wi-Fi & Stay
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2 — RENEWAL YOGA RETREAT POINTS
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[var(--surface)] py-10 md:py-14 border-b border-[var(--border)]">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--coral-dark)]/10 border border-[var(--coral-dark)]/20 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)] mb-2.5">
              <Sparkles size={13} />
              {holiday.renewalSection.eyebrow}
            </span>
            <h2 className="text-[var(--brown)]">
              {holiday.renewalSection.title}
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[var(--coral-dark)] font-semibold">
              {holiday.renewalSection.lead}
            </p>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[var(--muted)]">
              {holiday.renewalSection.body}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {holiday.renewalSection.points.map((point, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[var(--border)] bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-[var(--coral)] hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-[var(--coral-dark)]/10 text-[var(--coral-dark)] mb-3 font-bold text-xs">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[var(--brown)] leading-snug">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3 — RETREAT SCHEDULE, FEES & INCLUSIONS (Interactive Tabs)
          ========================================================================= */}
      <section
        className="relative bg-[var(--cream)] py-10 md:py-14 border-b border-[var(--border)]"
        id="schedule"
      >
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
              Structured Daily Rhythm
            </span>
            <h2 className="mt-1 text-[var(--brown)]">
              {holiday.name} Schedule & Details
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[var(--muted)]">
              Designed with care to leave ample space for deep practice,
              nourishing meals, and unhurried rest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Daily Schedule Column with Interactive Day Tabs */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Day Selector Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {holiday.schedule.map((dayPlan, idx) => (
                  <button
                    key={dayPlan.day}
                    type="button"
                    onClick={() => setActiveDayIdx(idx)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                      activeDayIdx === idx
                        ? "bg-[var(--coral-dark)] text-white shadow-sm"
                        : "bg-white text-[var(--brown)]/80 hover:bg-[var(--surface)] border border-[var(--border)]"
                    }`}
                  >
                    {dayPlan.day.replace(" Schedule", "")}
                  </button>
                ))}
              </div>

              {/* Active Day Schedule Card */}
              <div className="flex-1 rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-md bg-[var(--coral-dark)] px-2.5 py-1 text-xs font-extrabold text-white">
                        {activeDay.day}
                      </span>
                      <h3 className="font-heading text-base sm:text-lg font-normal text-[var(--brown)]">
                        {activeDay.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm">
                    {activeDay.items.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        className="flex items-start gap-3 p-2 rounded-lg transition-colors hover:bg-[var(--surface)]"
                      >
                        <span className="shrink-0 w-32 sm:w-36 text-xs font-bold text-[var(--coral-dark)] mt-0.5 flex items-center gap-1.5">
                          <Clock3 size={13} />
                          {item.time}
                        </span>
                        <span className="text-[var(--brown)] font-medium">
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Day Navigation Buttons */}
                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-semibold text-[var(--muted)]">
                  <button
                    type="button"
                    disabled={activeDayIdx === 0}
                    onClick={() =>
                      setActiveDayIdx((prev) => Math.max(0, prev - 1))
                    }
                    className="hover:text-[var(--coral-dark)] disabled:opacity-30 disabled:hover:text-[var(--muted)]"
                  >
                    ← Previous Day
                  </button>
                  <span>
                    Day {activeDayIdx + 1} of {holiday.schedule.length}
                  </span>
                  <button
                    type="button"
                    disabled={activeDayIdx === holiday.schedule.length - 1}
                    onClick={() =>
                      setActiveDayIdx((prev) =>
                        Math.min(holiday.schedule.length - 1, prev + 1),
                      )
                    }
                    className="hover:text-[var(--coral-dark)] disabled:opacity-30 disabled:hover:text-[var(--muted)]"
                  >
                    Next Day →
                  </button>
                </div>
              </div>
            </div>

            {/* Fees, Inclusions & Dates Column */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex-1 rounded-2xl border-2 border-[var(--coral-dark)]/30 bg-white p-5 sm:p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 rounded-bl-xl bg-[var(--coral-dark)] px-3 py-1 text-[11px] font-bold uppercase text-white tracking-wider">
                  All-Inclusive
                </div>

                <div>
                  <h3 className="font-heading text-lg font-normal text-[var(--brown)] mb-1">
                    Holiday Fees & Dates
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-[var(--coral-dark)]">
                      {holiday.price}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                      / Person
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-semibold text-[var(--brown)]">
                    Duration: {holiday.duration}
                  </p>
                  <div className="mt-3 pt-3 border-t border-[var(--border)] text-xs leading-relaxed text-[var(--text)] bg-[var(--surface)] p-3 rounded-lg">
                    <strong>Holiday Dates:</strong> {holiday.datesNote}
                  </div>

                  <div className="mt-4">
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--brown)] mb-2.5">
                      What is Included:
                    </h4>
                    <ul className="space-y-2 text-xs text-[var(--text)]">
                      {holiday.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2
                            size={15}
                            className="text-[var(--coral-dark)] shrink-0 mt-0.5"
                          />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#book"
                  className="mt-5 block text-center button button-primary !w-full !py-3 text-xs sm:text-sm font-bold shadow-sm"
                >
                  Reserve Your Spot Now
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4 — CORE EXPERIENCE PILLARS (Visual Cards)
          ========================================================================= */}
      <section className="section bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Holistic Rejuvenation
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              The 4 Pillars of Your Stay
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Every day is crafted to align physical health, mental clarity, and deep sensory rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {holidayActivities.map((act, i) => {
              const Icon = act.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl bg-white border border-[var(--border)] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[var(--coral-dark)] mb-2">
                        <Icon size={18} />
                        <h3 className="font-heading text-base font-bold text-[var(--brown)]">
                          {act.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5 — THE QUERIM BEACH SANCTUARY (Location Showcase)
          ========================================================================= */}
      <section className="section bg-[var(--surface)]/30 border-y border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              The Haven
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Why Querim, North Goa is the Ideal Sanctuary
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
              Far removed from commercial party strips, Querim offers undisturbed nature, sweet-water river estuaries, and empty coastal horizons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {querimHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[var(--border)] overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative w-full aspect-[16/11] overflow-hidden">
                  <Image
                    src={hl.image}
                    alt={hl.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)] shadow-xs">
                      {hl.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--brown)]">
                      {hl.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6 — SANCTUARY ACCOMMODATION & FOOD SHOWCASE
          ========================================================================= */}
      <section className="section bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                Sanctuary &amp; Nourishment
              </span>
              <h2 className="mt-2 text-[var(--brown)]">
                Tranquil Cottage Living &amp; Sattvic Organic Dining
              </h2>
              <div className="mt-6 space-y-4 text-[15px] text-[#433c37] leading-relaxed">
                <p>
                  Our eco-cottages and private rooms are designed for deep, undisturbed sleep. Surrounded by lush coconut palms and flowering garden pathways, every room includes hot water, ceiling fans, private bathrooms, and high-speed Wi-Fi.
                </p>
                <p>
                  Nutrition is an essential pillar of your holiday. Our kitchen prepares three wholesome vegetarian meals daily following Ayurvedic principles — balancing fresh vegetables, grains, lentils, and herbal teas to leave you feeling light and energized.
                </p>
              </div>

              {/* Amenity tags */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-[var(--brown)]">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Bed size={15} className="text-[var(--coral-dark)]" />
                  <span>Ensuite Bathroom</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Wind size={15} className="text-[var(--coral-dark)]" />
                  <span>Garden Balcony</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Wifi size={15} className="text-[var(--coral-dark)]" />
                  <span>High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Utensils size={15} className="text-[var(--coral-dark)]" />
                  <span>3 Buffet Meals Daily</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Sun size={15} className="text-[var(--coral-dark)]" />
                  <span>Solar Hot Water</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Leaf size={15} className="text-[var(--coral-dark)]" />
                  <span>Pure Herbal Teas</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/accommodation-goa" variant="outline" className="!py-3 !px-6 text-sm font-bold">
                  <span>Explore Rooms &amp; Facilities</span>
                  <ArrowRight size={14} />
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp"
                  alt="Garden cottage exterior at The Hatha Yogashala Goa"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-02.webp"
                  alt="Ayurvedic vegetarian meal served during yoga holiday"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 7 — EVERYTHING INCLUDED IN YOUR STAY
          ========================================================================= */}
      <section className="section bg-[var(--cream)] border-y border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Transparent &amp; Complete
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Everything Included in Your Stay
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
              No hidden costs. Everything you need for a restorative and enriching holiday is prepared for you upon arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusionsList.map((inc, idx) => {
              const Icon = inc.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[var(--border)] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface)] flex items-center justify-center text-[var(--coral-dark)] mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[var(--brown)]">
                      {inc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 leading-relaxed">
                      {inc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8 — WHO IS THIS YOGA HOLIDAY FOR?
          ========================================================================= */}
      <section className="section bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Tailored For You
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Who is a Goa Yoga Holiday Perfect For?
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Whether you are traveling on your own, resetting from career burnout, or taking your first steps in yoga.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {holidayPersonas.map((persona, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[var(--border)] bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative w-full aspect-[16/11] overflow-hidden">
                  <Image
                    src={persona.image}
                    alt={persona.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                      {persona.subtitle}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[var(--brown)] mt-1">
                      {persona.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-2.5 leading-relaxed">
                      {persona.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9 — HOLIDAY MOMENTS & ATMOSPHERE (PHOTO MOSAIC)
          ========================================================================= */}
      <section className="section bg-[var(--surface)]/30 border-y border-[var(--border)]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                Life on Holiday
              </span>
              <h2 className="mt-2 text-[var(--brown)]">
                Moments &amp; Memories at The Hatha Yogashala
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--coral-dark)] hover:underline group"
            >
              <span>View Full School Gallery</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryMoments.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xs hover:shadow-lg transition-all"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs sm:text-sm font-bold">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 10 — GOOGLE REVIEWS & TESTIMONIALS
          ========================================================================= */}
      <ReviewsSection
        testimonials={testimonials}
        reviewProfile={reviewProfile}
        title="Student Reviews"
        subtitle="Verified 5.0 Rating for The Hatha Yogashala Goa"
      />

      {/* =========================================================================
          SECTION 11 — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="section bg-[var(--cream)] border-t border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Holiday Planning
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {holidayFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6 shadow-xs"
              >
                <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--brown)] mb-2 flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-[var(--coral-dark)] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#433c37] leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 12 — DIRECT BOOKING & SUBMISSION FORM
          ========================================================================= */}
      <section className="relative bg-[var(--background)] py-10 md:py-14" id="book">
        <Container>
          {/* Booking Box */}
          <div className="max-w-2xl mx-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-8 shadow-md">
            <div className="text-center mb-6">
              <span className="rounded-full bg-[var(--coral-dark)]/10 px-3 py-0.5 text-[11px] font-bold uppercase text-[var(--coral-dark)] tracking-wider">
                Direct Booking
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-normal text-[var(--brown)] mt-2">
                Book Your {holiday.name}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-1.5">
                Submit the short form below. The Hatha Yogashala team will reply
                within 24 hours with availability.
              </p>
            </div>

            <BookingForm
              retreatName={holiday.name}
              pricing={{
                shared: { price: holiday.numericPrice, currency: "USD" },
                private: { price: holiday.numericPrice + 150, currency: "USD" },
              }}
              submitLabel={`Book ${holiday.name}`}
            />

            <div className="mt-5 pt-5 border-t border-[var(--border)] flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[var(--coral-dark)]" />
                Secure submission
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-[var(--coral-dark)]" />
                No spam guarantee
              </span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--coral-dark)] font-bold hover:underline flex items-center gap-1"
              >
                <SiWhatsapp size={14} /> WhatsApp The Hatha Yogashala
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
