"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  Leaf,
  MapPin,
  Sparkles,
  Star,
  Users,
  Waves,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { retreats } from "@/data/coursesData";
import {
  getRetreatPageData,
  retreatPricingByDays,
  retreatFaqs,
} from "@/data/retreatData";
import { whatsappLink } from "@/data/siteData";
import { Accordion } from "./Interactive";
import { Container } from "./ui";

const RETREAT_CATEGORIES = [
  { id: "all", label: "All Retreats" },
  { id: "3day", label: "3-Day Escapes" },
  { id: "5day", label: "5-Day Holistic Healing" },
  { id: "7day", label: "7-Day Deep Reset" },
  { id: "specialty", label: "Specialty (Aerial & Ayurveda)" },
];

const whyRetreatHighlights = [
  {
    icon: Users,
    title: "Small Intimate Groups",
    text: "Limited guests for peaceful, personalized attention and calm energy.",
  },
  {
    icon: Waves,
    title: "Oceanfront Setting",
    text: "Located in tranquil North Goa — moments from peaceful beaches.",
  },
  {
    icon: Leaf,
    title: "Sattvic Nutrition",
    text: "3 freshly cooked vegetarian & vegan buffet meals daily to nourish the body.",
  },
  {
    icon: Sparkles,
    title: "Holistic Healing",
    text: "Daily Hatha yoga, breathwork, sunset sound baths & ice bath rituals.",
  },
];

export default function RetreatsHubPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const whatsappHref = whatsappLink(
    "Hi The Hatha Yogashala, I am interested in booking a yoga retreat in Goa. Could you share upcoming dates and availability?",
  );

  const filteredRetreats = retreats.filter((r) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "3day") return r.days === 3;
    if (selectedCategory === "5day") return r.days === 5;
    if (selectedCategory === "7day") return r.days === 7;
    if (selectedCategory === "specialty")
      return (
        r.slug.includes("aerial") ||
        r.slug.includes("ayurvedic") ||
        r.slug.includes("festival")
      );
    return true;
  });

  return (
    <div className="bg-[var(--background)] text-[var(--text)]">
      {/* ============ 1. SLEEK, REFINED HERO SECTION ============ */}
      <section className="relative overflow-hidden bg-[var(--surface)] border-b border-[var(--border)] pt-6 pb-10 md:pt-10 md:pb-14">
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-[var(--muted)]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--coral-dark)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="opacity-40">/</li>
              <li className="text-[var(--brown)] font-semibold">
                Yoga Retreats in Goa
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--coral-dark)]/10 px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-wider text-[var(--coral-dark)] mb-3">
              <Sparkles size={13} aria-hidden="true" />
              Mindful Residential Retreats · North Goa Coast
            </span>

            <h1 className="font-philosopher text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--brown)]">
              Yoga Retreats in Goa — Practice, Rest & Restore
            </h1>

            <p className="mt-3.5 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
              Book a 3, 5, or 7-day yoga retreat in Goa with The Hatha
              Yogashala. Daily yoga, meditation, Ayurveda, sound healing, ice
              baths, and beachside living — all-inclusive.
            </p>

            {/* Hero Actions: CTA + WhatsApp */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#programs"
                className="button button-primary !rounded-full !px-6 !py-3 !text-sm !font-bold"
              >
                <span>Explore Retreats</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#20bd5a] hover:shadow-lg transition-all duration-200"
                aria-label="Chat on WhatsApp"
              >
                <SiWhatsapp size={18} aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Compact Feature Chips */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-[var(--brown)]">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                <Clock3 size={13} className="text-[var(--coral-dark)]" />
                3, 5 &amp; 7-Day Formats
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                <MapPin size={13} className="text-[var(--coral-dark)]" />
                Arambol / Keri Beach Area
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                <Star
                  size={13}
                  className="fill-[var(--gold)] text-[var(--gold)]"
                />
                5.0 Rating (180+ Reviews)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                <Leaf size={13} className="text-[var(--coral-dark)]" />
                All-Inclusive Vegetarian Meals
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ WHO WE ARE & AT A GLANCE ============ */}
      <section className="py-10 md:py-14 bg-white border-b border-[var(--border)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
                  Rest · Practice · Immersion
                </span>
                <h2 className="mt-1 text-[var(--brown)]">
                  Who We Are
                </h2>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--brown)] font-semibold">
                  The Hatha Yogashala
                </strong>{" "}
                offers short-format yoga retreats on the beaches of North Goa for
                travelers who want deep rest, real practice, and genuine cultural
                immersion — without committing to a full teacher training. Each
                retreat combines daily yoga and meditation with Ayurveda basics,
                sound healing, breathwork, and wellness excursions like ice baths,
                sauna therapy, and ecstatic dance, set against the backdrop of
                Goa&apos;s coastline and heritage sites.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Whether you have a long weekend or a full week, we&apos;ve built a
                retreat length and accommodation option to match — from shared
                dorms to private rooms — all fully catered with fresh,
                vegetarian meals.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-xs">
              <h3 className="font-heading text-lg font-normal text-[var(--brown)] mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-[var(--coral-dark)]" />
                At a Glance
              </h3>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[var(--text)]">
                {[
                  "3, 5, and 7-day retreat formats, plus a specialized 5-Day Kundalini & Iyengar retreat",
                  "Daily yoga, meditation, and Ayurveda/philosophy sessions",
                  "Sound healing, breathwork, and massage included",
                  "Wellness excursions: ice bath, sauna, mud bath, ecstatic dance, temple tours",
                  "Vegetarian meals with vegan/gluten-free/allergy accommodations on request",
                  "Accommodation from mixed dorms to private rooms, including a female-only AC dorm",
                  "Located near the beaches of North Goa (Arambol/Keri Beach area)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className="shrink-0 text-[var(--coral-dark)] mt-0.5"
                    />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ 2. SLEEK PROGRAM OVERVIEW GRID ============ */}
      <section className="py-10 md:py-14" id="programs">
        <Container>
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border)] pb-6 mb-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
                Curated Immersions
              </span>
              <h2 className="mt-1 text-[var(--brown)]">
                Choose Your Retreat
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {RETREAT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[var(--coral-dark)] text-white shadow-xs"
                      : "bg-white text-[var(--muted)] border border-[var(--border)] hover:border-[var(--coral-dark)] hover:text-[var(--brown)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRetreats.map((retreat) => {
              const page = getRetreatPageData(retreat);
              const days = retreat.days || 3;
              const formattedPrice =
                retreat.price ||
                (typeof page.pricing?.shared?.price === "number"
                  ? `${page.pricing.shared.currency === "INR" ? "₹" : page.pricing.shared.currency === "EUR" ? "€" : "$"}${page.pricing.shared.price.toLocaleString()}`
                  : "On enquiry");

              return (
                <article
                  key={retreat.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--coral-dark)]/50"
                >
                  {/* Card Media */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)]">
                    <Image
                      src={retreat.image}
                      alt={retreat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Floating Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="rounded-full bg-white/95 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[var(--coral-dark)] shadow-xs">
                        {days} Days / {days - 1} Nights
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[11px] font-semibold text-white">
                        <Star
                          size={10}
                          className="fill-[var(--gold)] text-[var(--gold)]"
                        />
                        {page?.rating || "5.0"}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs">
                      <span className="text-[11px] font-medium opacity-90">
                        {retreat.location || "Querim, North Goa"}
                      </span>
                      <span className="rounded-full bg-white/20 backdrop-blur-md px-2 py-0.5 text-[11px] font-bold text-white">
                        {formattedPrice === "On enquiry" ? "On Enquiry" : `From ${formattedPrice}`}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="font-heading text-lg sm:text-xl font-normal text-[var(--brown)] group-hover:text-[var(--coral-dark)] transition-colors leading-snug">
                      <Link href={`/retreats/${retreat.slug}`}>
                        {retreat.name}
                      </Link>
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-[13px] text-[var(--muted)] leading-relaxed line-clamp-2">
                      {retreat.description}
                    </p>

                    {/* Compact Features */}
                    <ul className="mt-3.5 space-y-1.5 border-t border-[var(--border)]/60 pt-3 text-xs text-[var(--text)]">
                      {(
                        retreat.benefits ||
                        retreat.whatIs?.points || [
                          "Daily Yoga & Breathwork Sessions",
                          "3 Sattvic Vegetarian Meals Daily",
                          "Beachside Ashram Stay Included",
                        ]
                      )
                        .slice(0, 3)
                        .map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <Check
                              size={13}
                              className="shrink-0 text-[var(--coral-dark)]"
                            />
                            <span className="line-clamp-1">{b}</span>
                          </li>
                        ))}
                    </ul>

                    {/* Footer Actions */}
                    <div className="mt-4 flex items-center gap-2 pt-3 border-t border-[var(--border)]">
                      <Link
                        href={`/retreats/${retreat.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--coral-dark)] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[var(--coral)]"
                      >
                        View Program
                        <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[#25D366] transition hover:bg-[var(--surface)] hover:border-[#25D366]"
                        title="Enquire on WhatsApp"
                        aria-label="Enquire on WhatsApp"
                      >
                        <SiWhatsapp size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============ 3. WHY RETREAT WITH US ============ */}
      <section className="py-12 md:py-16 bg-[var(--surface)] border-y border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
              The Hatha Yogashala Experience
            </span>
            <h2 className="mt-1 text-[var(--brown)]">
              Why Retreat With Us in Goa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whyRetreatHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--border)] bg-white p-5 shadow-xs transition hover:border-[var(--coral-dark)]/40 hover:-translate-y-0.5"
                >
                  <div className="size-9 rounded-lg bg-[var(--coral-dark)]/10 text-[var(--coral-dark)] flex items-center justify-center mb-3">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-normal text-[var(--brown)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============ 4. FAQS ============ */}
      <section className="py-12 md:py-16 bg-white" id="faq">
        <Container>
          <div className="max-w-3xl mx-auto mb-6 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
              Got Questions?
            </span>
            <h2 className="mt-1 text-[var(--brown)]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion items={retreatFaqs} />
          </div>
        </Container>
      </section>

      {/* ============ 5. START YOUR RETREAT JOURNEY CTA ============ */}
      <section className="py-12 md:py-16 bg-[var(--surface)] border-t border-[var(--border)] text-center">
        <Container className="max-w-2xl mx-auto">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
            Disconnect &amp; Reconnect
          </span>
          <h2 className="text-[var(--brown)] mt-1 mb-3">
            Start Your Retreat Journey
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted)] mb-6 max-w-xl mx-auto leading-relaxed">
            Ready to disconnect, recharge, and reconnect with yourself?{" "}
            <strong className="text-[var(--brown)] font-semibold">
              Book your retreat at The Hatha Yogashala
            </strong>{" "}
            and experience Goa&apos;s beaches, culture, and wellness traditions in one
            immersive escape.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/apply"
              className="button button-primary !px-7 !py-3 text-xs sm:text-sm font-bold shadow-sm"
            >
              Book Now
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary !px-6 !py-3 text-xs sm:text-sm font-bold flex items-center gap-2"
            >
              <SiWhatsapp size={16} className="text-[#25D366]" />
              <span>WhatsApp Inquire</span>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
