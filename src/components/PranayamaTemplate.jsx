"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Globe,
  Heart,
  HelpCircle,
  Info,
  Layers,
  MapPin,
  Send,
  ShieldAlert,
  Sparkles,
  Users,
  Wind,
} from "lucide-react";
import { Breadcrumbs, ButtonLink, Container, FinalCTA, JsonLd } from "@/components/ui";
import { FadeIn } from "@/components/retreat/Motion";
import { medicalDisclaimer } from "@/data/pranayamaData";
import { absoluteUrl, site } from "@/data/siteData";

export default function PranayamaTemplate({ course }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    newsletter: true,
    trialRequested: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: {
      "@type": "Organization",
      name: site.name,
      sameAs: site.url,
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    offers: {
      "@type": "Offer",
      category: "Paid",
      priceCurrency: "USD",
      price: course.price.replace(/[^0-9.]/g, "") || "49",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={faqSchema} />

      {/* ============ 1. HERO SECTION ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--cream)] via-[var(--surface)]/30 to-white pt-8 pb-16 md:pt-12 md:pb-24 border-b border-[var(--border)]/70">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Pranayama & Breathwork", href: "/online-pranayama" },
              { label: course.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-6">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--coral-dark)]/10 text-[var(--coral-dark)] px-4 py-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-4 border border-[var(--coral-dark)]/20">
                <Wind size={15} aria-hidden="true" />
                {course.eyebrow}
              </span>

              <h1>
                {course.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal max-w-2xl">
                {course.summary}
              </p>

              {/* Quick factual highlights bar for GEO / AEO engines */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5 w-full max-w-xl">
                <div className="rounded-xl bg-white p-3.5 border border-[var(--border)] shadow-xs">
                  <div className="flex items-center gap-1.5 text-[var(--coral-dark)] text-xs font-bold uppercase tracking-wider mb-1">
                    <Clock size={14} /> Duration
                  </div>
                  <div className="text-sm font-semibold text-[var(--brown)]">{course.duration}</div>
                </div>

                <div className="rounded-xl bg-white p-3.5 border border-[var(--border)] shadow-xs">
                  <div className="flex items-center gap-1.5 text-[var(--coral-dark)] text-xs font-bold uppercase tracking-wider mb-1">
                    <Award size={14} /> Level
                  </div>
                  <div className="text-sm font-semibold text-[var(--brown)]">{course.level}</div>
                </div>

                <div className="rounded-xl bg-white p-3.5 border border-[var(--border)] shadow-xs col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-[var(--coral-dark)] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles size={14} /> Investment
                  </div>
                  <div className="text-sm font-semibold text-[var(--coral-dark)]">{course.price}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink
                  href={course.hasSignupForm ? "#signup-section" : "/apply"}
                  className="button button-primary !px-7 !py-3.5 text-sm font-bold shadow-md hover:shadow-lg"
                >
                  <span>Enroll in Program</span>
                  <ArrowRight size={16} />
                </ButtonLink>

                {course.trialPrice && (
                  <ButtonLink
                    href={course.hasSignupForm ? "#signup-section" : "/contact#trial"}
                    variant="outline"
                    className="!px-6 !py-3.5 text-sm font-bold border-2 border-[var(--brown)]/20 hover:border-[var(--coral-dark)] hover:text-[var(--coral-dark)]"
                  >
                    <span>{course.trialPrice}</span>
                  </ButtonLink>
                )}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3.2] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={course.heroImage}
                  alt={course.heroImageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    <MapPin size={12} /> The Hatha Yogashala · Goa, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ 2. WHY THIS MATTERS SECTION ============ */}
      <section className="section bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                The Science & Tradition
              </span>
              <h2 className="mt-2 text-[var(--brown)]">
                {course.whyMatters.heading}
              </h2>

              <div className="mt-6 space-y-4 text-[16px] text-[#433c37] leading-relaxed">
                {course.whyMatters.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[var(--surface)]/50 p-6 border border-[var(--border)]">
                <h3 className="font-heading text-lg font-bold text-[var(--brown)] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-[var(--coral-dark)]" size={18} />
                  Core Physiological & Energetic Benefits:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#433c37] font-medium">
                  {course.whyMatters.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--coral-dark)] font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {course.galleryImages.slice(0, 2).map((img, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md border-2 border-white"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ 3. WHO SHOULD JOIN CARDS ============ */}
      <section className="section bg-[var(--surface)]/30 border-y border-[var(--border)]/70">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Tailored Guidance
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Who Should Join This Program
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Designed with adaptable progressions for a diverse range of goals and backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.whoShouldJoin.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 border border-[var(--border)] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="size-10 rounded-xl bg-[var(--coral-dark)]/10 text-[var(--coral-dark)] flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--brown)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ 4. WHAT YOU'LL LEARN GRID ============ */}
      <section className="section bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Curriculum & Competencies
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              What You Will Master
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Comprehensive module breakdown blending classical lineage texts with modern respiratory science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.whatYoullLearn.map((module, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white to-[var(--cream)]/40 p-6 shadow-xs hover:border-[var(--coral-dark)]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-[var(--coral-dark)] text-white text-xs font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--brown)]">
                    {module.title}
                  </h3>
                </div>
                <p className="text-sm text-[#433c37] leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ 5. COURSE DETAILS CHECKLIST ============ */}
      <section className="section bg-[var(--cream)] border-y border-[var(--border)]">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl bg-white p-8 sm:p-10 border border-[var(--border)] shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                Program Specifications
              </span>
              <h2 className="mt-1 text-[var(--brown)]">
                Course Details & Logistics
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#433c37]">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[var(--surface)]/30 border border-[var(--border)]">
                <Clock className="text-[var(--coral-dark)] shrink-0 mt-0.5" size={20} />
                <div>
                  <strong className="block text-[var(--brown)] font-bold mb-0.5">Duration & Frequency</strong>
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[var(--surface)]/30 border border-[var(--border)]">
                <Calendar className="text-[var(--coral-dark)] shrink-0 mt-0.5" size={20} />
                <div>
                  <strong className="block text-[var(--brown)] font-bold mb-0.5">Schedule & Timing</strong>
                  <span>{course.timing}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[var(--surface)]/30 border border-[var(--border)]">
                <Globe className="text-[var(--coral-dark)] shrink-0 mt-0.5" size={20} />
                <div>
                  <strong className="block text-[var(--brown)] font-bold mb-0.5">Format & Timezones</strong>
                  <span>{course.format} · {course.timezone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[var(--surface)]/30 border border-[var(--border)]">
                <Layers className="text-[var(--coral-dark)] shrink-0 mt-0.5" size={20} />
                <div>
                  <strong className="block text-[var(--brown)] font-bold mb-0.5">Prerequisites</strong>
                  <span>{course.prerequisites}</span>
                </div>
              </div>
            </div>

            {/* Special Sign-up Form for Daily Subscription & Courses */}
            {course.hasSignupForm && (
              <div id="signup-section" className="mt-10 pt-8 border-t border-[var(--border)]">
                <h3 className="font-heading text-xl sm:text-2xl font-normal text-center text-[var(--brown)] mb-2">
                  Start Your Daily Pranayama Practice
                </h3>
                <p className="text-xs sm:text-sm text-center text-[var(--muted)] mb-6 max-w-md mx-auto">
                  Sign up for the $10 USD trial session or activate your monthly $99 membership.
                </p>

                {submitted ? (
                  <div className="rounded-2xl bg-[var(--surface)] p-6 text-center border border-[var(--coral-dark)]/30">
                    <CheckCircle2 className="mx-auto text-[var(--coral-dark)] mb-2" size={32} />
                    <h4 className="font-heading text-lg font-bold text-[var(--brown)]">Registration Received</h4>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      Thank you! Our admissions coordinator will email your Zoom access link and payment confirmation shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                    <div>
                      <label className="block text-xs font-bold text-[var(--brown)] mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full rounded-xl border border-[var(--border)] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--coral-dark)]"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[var(--brown)] mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full rounded-xl border border-[var(--border)] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--coral-dark)]"
                        placeholder="Your last name"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[var(--brown)] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[var(--border)] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--coral-dark)]"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="sm:col-span-2 flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={formData.newsletter}
                        onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                        className="mt-1 rounded border-gray-300 text-[var(--coral-dark)] focus:ring-[var(--coral-dark)]"
                      />
                      <label htmlFor="newsletter" className="text-xs text-[var(--muted)]">
                        Subscribe to The Hatha Yogashala monthly breathwork newsletter & insights.
                      </label>
                    </div>
                    <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        className="button button-primary !w-full justify-center !py-3 font-bold text-sm"
                      >
                        <Send size={15} />
                        Join $99/Mo Subscription
                      </button>
                      <button
                        type="submit"
                        onClick={() => setFormData({ ...formData, trialRequested: true })}
                        className="button button-secondary !w-full justify-center !py-3 font-bold text-sm"
                      >
                        Book $10 Trial Session
                      </button>
                    </div>
                  </form>
                )}

                <div className="mt-6 text-center">
                  <p className="text-xs text-[var(--muted)]">
                    Are you a course graduate? Access your complimentary{" "}
                    <Link
                      href="/online-pranayama/prana-circle"
                      className="text-[var(--coral-dark)] font-bold underline underline-offset-2 hover:text-[var(--brown)]"
                    >
                      Prana Circle Alumni Satsang →
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ============ 6. MEDICAL & WELLNESS DISCLAIMER ============ */}
      <section className="py-8 bg-amber-50/50 border-b border-amber-200/40">
        <Container>
          <div className="max-w-4xl mx-auto flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-amber-200 text-amber-900 shadow-xs">
            <ShieldAlert className="text-amber-700 shrink-0 mt-0.5" size={20} />
            <p className="text-xs sm:text-[13px] leading-relaxed text-amber-950 font-medium">
              {medicalDisclaimer}
            </p>
          </div>
        </Container>
      </section>

      {/* ============ 7. FREQUENTLY ASKED QUESTIONS (AEO Optimized) ============ */}
      <section className="section bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Common Questions
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {course.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--border)] bg-[var(--cream)]/40 p-5 sm:p-6 shadow-xs"
              >
                <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--brown)] mb-2 flex items-start gap-2">
                  <HelpCircle size={18} className="text-[var(--coral-dark)] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#433c37] leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ 8. NEXT STEP PROGRESSION BANNER ============ */}
      {course.nextStep && (
        <section className="py-10 bg-[var(--surface)] border-t border-[var(--border)]">
          <Container>
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-white p-6 rounded-2xl border border-[var(--border)] shadow-xs">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                  Next Step in Your Practice
                </span>
                <h4 className="font-heading text-lg font-bold text-[var(--brown)]">
                  {course.nextStep.title}
                </h4>
              </div>
              <Link
                href={`/online-pranayama/${course.nextStep.slug}`}
                className="button button-primary !py-2.5 !px-5 text-xs sm:text-sm font-bold shrink-0"
              >
                <span>{course.nextStep.ctaText}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ============ 9. FINAL CTA ============ */}
      <FinalCTA
        title="Breathe Deeply with The Hatha Yogashala"
        text="Begin your journey into authentic breathwork, nervous system restoration, and meditative tranquility today."
        height="auto"
        className="!min-h-[260px] !py-8 md:!py-10"
      />
    </>
  );
}
