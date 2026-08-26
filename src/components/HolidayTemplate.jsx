"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wifi,
  Utensils,
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
import { Container, ButtonLink, JsonLd, Media } from "./ui";
import BookingForm from "./retreat/BookingForm";
import ReviewsSection from "./GoogleReviews";

export default function HolidayTemplate({ holiday }) {
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  const whatsappHref = whatsappLink(
    `Hi, I would like to book or ask about the ${holiday.name} (${holiday.price}) at The Hatha Yogashala Goa.`,
  );

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Yoga Holidays", href: "/holidays" },
    { label: holiday.name },
  ];

  const holidaySchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${holiday.name} in Goa | The Hatha Yogashala`,
    description: `${holiday.tagline} An authentic yoga holiday experience in Goa by The Hatha Yogashala with daily asana, Ayurvedic massage, sattvic meals, and beachside stay.`,
    url: absoluteUrl(`/holidays/${holiday.slug}`),
    touristType: "Yoga and wellness holiday travellers",
    provider: {
      "@type": "Organization",
      name: "The Hatha Yogashala",
      url: site.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.contact.address,
        addressLocality: "Pernem",
        addressRegion: "Goa",
        postalCode: "403524",
        addressCountry: "IN",
      },
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

  return (
    <>
      <JsonLd data={holidaySchema} />

      {/* =========================================================================
          SECTION 1 — HERO & AUTHENTIC INTRODUCTION (Compact & Tight Top Margin)
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

              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[var(--brown)]">
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
                    <h2 className="text-base text-white font-normal font-heading">
                      {holiday.name}
                    </h2>
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
          SECTION 2 — RENEWAL YOGA RETREAT (Surface Theme matching website)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[var(--surface)] py-10 md:py-14 border-b border-[var(--border)]">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--coral-dark)]/10 border border-[var(--coral-dark)]/20 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)] mb-2.5">
              <Sparkles size={13} />
              {holiday.renewalSection.eyebrow}
            </span>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-normal leading-tight text-[var(--brown)]">
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
          SECTION 3 — RETREAT SCHEDULE, FEES & INCLUSIONS (Clean, Tabbed & Aligned)
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
            <h2 className="mt-1 font-heading text-xl sm:text-2xl md:text-3xl font-normal text-[var(--brown)]">
              Retreat Schedule & Details
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
                    Retreat Fees & Dates
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
                    <strong>Retreat Dates:</strong> {holiday.datesNote}
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
          SECTION 4 — GOOGLE REVIEWS & BOOKING (The Hatha Yogashala Google Reviews)
          ========================================================================= */}
      <ReviewsSection
        testimonials={testimonials}
        reviewProfile={reviewProfile}
        title="Student Reviews"
        subtitle="Verified 5.0 Rating for The Hatha Yogashala Goa"
      />

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
