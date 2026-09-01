"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  Clock3,
  Home,
  Leaf,
  MapPin,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import {
  whatsappLink,
  testimonials,
  reviewProfile,
  siteStats,
} from "@/data/siteData";
import { Accordion } from "./Interactive";
import ReviewsSection from "./GoogleReviews";
import { Container } from "./ui";

const CATEGORIES = [
  { id: "all", label: "All TTC Courses" },
  { id: "200h", label: "200-Hour TTC" },
  { id: "100h", label: "100-Hour TTC" },
  { id: "300h", label: "300-Hour TTC" },
  { id: "specialty", label: "Specialty & Flexible" },
];

const whyHighlights = [
  {
    icon: Award,
    title: "Yoga Alliance USA",
    text: "Internationally recognized RYS 100, 200 & 300 certification.",
  },
  {
    icon: Users,
    title: "Small Batches (12–15)",
    text: "Individual guidance, daily posture corrections & personalized mentoring.",
  },
  {
    icon: Home,
    title: "Residential Ashram",
    text: "Steps from peaceful Querim Beach with clean AC rooms & Wi-Fi.",
  },
  {
    icon: Leaf,
    title: "3 Sattvic Meals Daily",
    text: "Fresh organic vegetarian buffet prepared per Ayurvedic principles.",
  },
];

export default function YogaTTCHubPage({ page }) {
  const p = page;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const currencySymbol = p.pricing?.shared?.currency === "EUR" ? "€" : "$";
  const whatsappHref = whatsappLink(
    "Hi The Hatha Yogashala, I'm interested in the Yoga Teacher Training in Goa. Could you share upcoming dates and availability?",
  );

  const filteredLevels = (p.levels || []).filter((level) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "200h")
      return (
        level.slug.includes("200-hour") ||
        (level.hours && level.hours.includes("200"))
      );
    if (selectedCategory === "100h")
      return (
        level.slug.includes("100-hour") ||
        (level.hours && level.hours.includes("100"))
      );
    if (selectedCategory === "300h")
      return (
        level.slug.includes("300-hour") ||
        (level.hours && level.hours.includes("300"))
      );
    if (selectedCategory === "specialty")
      return (
        level.slug.includes("aerial") ||
        level.slug.includes("flexible") ||
        level.slug.includes("ashtanga-vinyasa")
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
                Yoga Teacher Training in Goa
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--coral-dark)]/10 px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-wider text-[var(--coral-dark)] mb-3">
              <Sparkles size={13} aria-hidden="true" />
              Yoga Alliance Registered RYS · Querim Beach, North Goa
            </span>

            <h1 className="font-philosopher text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--brown)]">
              Yoga Teacher Training Courses in Goa
            </h1>

            <p className="mt-3.5 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
              Join The Hatha Yogashala in Goa for Yoga Alliance certified
              100, 200 and 300-Hour Yoga Teacher Training. Hatha,
              Ashtanga, Vinyasa &amp; Ayurveda — beachside, all-inclusive, 24/7
              support.
            </p>

            {/* Hero Actions: CTA + WhatsApp */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#courses"
                className="button button-primary !rounded-full !px-6 !py-3 !text-sm !font-bold"
              >
                <span>Explore TTC Courses</span>
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
                <Award size={13} className="text-[var(--coral-dark)]" />
                Yoga Alliance (RYS) Certified
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                <MapPin size={13} className="text-[var(--coral-dark)]" />
                Beachside Campus in North Goa
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                <Users size={13} className="text-[var(--coral-dark)]" />
                Small Class Sizes
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--border)] shadow-xs">
                <Star
                  size={13}
                  className="fill-[var(--gold)] text-[var(--gold)]"
                />
                {reviewProfile.rating.toFixed(1)}/5 Rating ({siteStats.reviews}+ Reviews)
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
                  Authentic Lineages
                </span>
                <h2 className="mt-1 text-[var(--brown)]">
                  Who We Are
                </h2>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--brown)] font-semibold">
                  The Hatha Yogashala
                </strong>{" "}
                is a Yoga Alliance certified yoga teacher training school on the
                beaches of North Goa, India. We train aspiring teachers and
                dedicated practitioners in the authentic lineages of Hatha,
                Ashtanga, Vinyasa, Yin, and Restorative yoga — blending classical
                philosophy with modern, practical teaching skills.
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Our residential courses run for 7 to 27 days and range from 50
                to 300 certification hours, so whether you have one week or one
                month, there is a training path built for you. Every program is
                delivered by experienced, Yoga Alliance registered
                teacher-trainers in a small-group, beachside setting designed for
                deep practice and genuine transformation.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-xs">
              <h3 className="font-heading text-lg font-normal text-[var(--brown)] mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-[var(--coral-dark)]" />
                At a Glance
              </h3>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[var(--text)]">
                {[
                  "Yoga Alliance (RYS) certified curriculum across all programs",
                  "Beachside campus in North Goa with AC and non-AC room options",
                  "Three vegetarian/vegan meals a day, Monday–Saturday",
                  "Small class sizes with personalized attention",
                  "24/7 student support, Wi-Fi, hot water, and unlimited filtered drinking water",
                  "Course manual + digital library of yoga texts included",
                  "Graduates are eligible to register with Yoga Alliance and teach worldwide",
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

      {/* ============ 2. SLEEK COURSES OVERVIEW GRID ============ */}
      <section className="py-10 md:py-14" id="courses">
        <Container>
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border)] pb-6 mb-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
                Certified Curriculums
              </span>
              <h2 className="mt-1 text-[var(--brown)]">
                Choose Your TTC Level
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {CATEGORIES.map((cat) => (
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
            {filteredLevels.map((level) => (
              <article
                key={level.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--coral-dark)]/50"
              >
                {/* Course Media */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)]">
                  <Image
                    src={level.image}
                    alt={level.imageAlt || level.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="rounded-full bg-white/95 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-[var(--coral-dark)] shadow-xs">
                      {level.badge || "Certified TTC"}
                    </span>
                    {level.featured && (
                      <span className="flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[11px] font-semibold text-white">
                        <Star
                          size={10}
                          className="fill-[var(--gold)] text-[var(--gold)]"
                        />
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs">
                    <span className="text-[11px] font-medium opacity-90">
                      {level.duration} · {level.level}
                    </span>
                    <span className="rounded-full bg-white/20 backdrop-blur-md px-2 py-0.5 text-[11px] font-bold text-white">
                      From {currencySymbol}{level.price}
                    </span>
                  </div>
                </div>

                {/* Course Body */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-heading text-lg sm:text-xl font-normal text-[var(--brown)] group-hover:text-[var(--coral-dark)] transition-colors leading-snug">
                    <Link href={`/courses/${level.slug}`}>{level.name}</Link>
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-[13px] text-[var(--muted)] leading-relaxed line-clamp-2">
                    {level.text}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-3.5 space-y-1.5 border-t border-[var(--border)]/60 pt-3 text-xs text-[var(--text)]">
                    {level.highlights.slice(0, 3).map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <Check
                          size={13}
                          className="shrink-0 text-[var(--coral-dark)]"
                        />
                        <span className="line-clamp-1">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-[var(--border)]">
                    <Link
                      href={`/courses/${level.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--coral-dark)] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[var(--coral)]"
                    >
                      View Details
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
            ))}
          </div>
        </Container>
      </section>

      {/* ============ 3. WHY TRAIN WITH US ============ */}
      <section className="py-12 md:py-16 bg-[var(--surface)] border-y border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
              The Hatha Yogashala Standard
            </span>
            <h2 className="mt-1 text-[var(--brown)]">
              Why Train With Us in Goa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whyHighlights.map((item) => {
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

      {/* ============ 4. STUDENT REVIEWS ============ */}
      <ReviewsSection
        testimonials={testimonials.filter((t) => t.platform?.includes("YTT"))}
        reviewProfile={reviewProfile}
        title="Student Reviews — Yoga Teacher Training in Goa"
        subtitle="Verified 4.9 Rating in Goa"
      />

      {/* ============ 5. FAQS ============ */}
      {p.faqs && p.faqs.length > 0 && (
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
              <Accordion items={p.faqs} />
            </div>
          </Container>
        </section>
      )}

      {/* ============ 6. START YOUR YOGA JOURNEY CTA ============ */}
      <section className="relative overflow-hidden bg-[#134e4a] text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,97,0.2),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,99,74,0.15),transparent_60%)] pointer-events-none" />
        <Container className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--gold)] mb-4 backdrop-blur-sm border border-white/15">
            <Sparkles size={13} aria-hidden="true" />
            Transform Your Life
          </span>
          <h2 className="leading-tight text-white mb-4">
            Start Your Yoga Journey
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed mb-8">
            Ready to train, transform, and teach?{" "}
            <strong className="text-white font-semibold">
              Book your seat at The Hatha Yogashala today
            </strong>{" "}
            and join a global community of certified yoga teachers trained on the
            beaches of Goa.
          </p>
          <div className="flex justify-center">
            <Link
              href="/apply"
              className="button button-primary !px-8 !py-3.5 text-sm font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Book Now
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
