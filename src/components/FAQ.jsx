"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { faqData } from "@/data/faqData";
import { ButtonLink, Container, MobileStickyBar, SectionHeading } from "@/components/ui";

export default function FAQ({
  questions = faqData,
  eyebrow = "Got Questions?",
  title = "Frequently Asked Questions",
  text = "Everything you need to know before booking your yoga teacher training — straight answers, no vague promises.",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="section section-cream relative"
      id="faq"
    >
      <Container>
        {/* Mobile Header (Shown on stacked mobile layout) */}
        <div className="lg:hidden mb-8">
          <SectionHeading eyebrow={eyebrow} title={title} text={text} />
        </div>

        {/* Two-Column Sticky Scroll Container */}
        <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Column — Sticky Container (Desktop) */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Header info (Desktop) */}
            <div className="hidden lg:block space-y-3">
              <p className="eyebrow">
                <Sparkles aria-hidden="true" size={15} />
                {eyebrow}
              </p>
              <h2 className="text-3xl xl:text-4xl font-serif font-bold text-[var(--brown)] leading-tight">
                {title}
              </h2>
              <p className="text-body text-[var(--muted)]">
                {text}
              </p>
            </div>

            {/* Active Visual / Image Box with Smooth Transition */}
            <div className="home-faq-media relative rounded-[28px] overflow-hidden bg-[var(--cream)] border border-[var(--border)] shadow-md aspect-[4/3] group">
              {questions.map((q, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={q.id}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={q.image}
                      alt={q.imageAlt || q.question}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Floating Overlay Badge on Active Image */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-[var(--brown)] shadow-lg">
                      <span className="text-[13.5px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                        FAQ {q.number} of{" "}
                        {String(questions.length).padStart(2, "0")}
                      </span>
                      <p className="text-[13.5px] font-semibold mt-0.5 line-clamp-1 text-[var(--brown)]">
                        {q.shortSummary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress & CTA Panel */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[var(--border)]">
              {/* Active Counter Indicator */}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif font-bold text-[var(--coral-dark)]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-[13.5px] text-[var(--muted)] font-medium">
                  / {String(questions.length).padStart(2, "0")} FAQs
                </span>
                <div className="ml-2 flex items-center gap-1">
                  {questions.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-6 bg-[var(--coral-dark)]"
                          : "w-1.5 bg-[var(--border)]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Support CTA */}
              <ButtonLink
                href="/contact"
                variant="primary"
                className="text-[13.5px] py-2.5 px-4"
              >
                <span>Still Have Questions?</span>
              </ButtonLink>
            </div>
          </div>

          {/* Right Column — Scrollable Questions */}
          <div className="space-y-3">
            <MobileStickyBar
              left={
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-xl font-bold leading-none text-[var(--coral-dark)]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13.5px] font-bold uppercase tracking-widest text-[var(--muted)]">
                    / {String(questions.length).padStart(2, "0")} FAQs
                  </span>
                </div>
              }
              right={
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  className="!px-4 !py-2.5 text-[13.5px]"
                >
                  <span>Ask Us</span>
                </ButtonLink>
              }
            />
            {questions.map((q, index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  key={q.id}
                  className={`rounded-[22px] border p-4 transition-all duration-300 lg:p-5 ${
                    isActive
                      ? "border-[var(--coral-dark)] bg-white shadow-lg shadow-[var(--coral-dark)]/10"
                      : "bg-white/70 border-[var(--border)] hover:bg-white hover:border-[var(--coral-dark)]/40 opacity-85 hover:opacity-100"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    className="flex w-full cursor-pointer items-start gap-4 border-0 bg-transparent p-0 text-left"
                  >
                    {/* Number Badge */}
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full font-serif text-[13.5px] font-bold transition-colors duration-300 ${
                        isActive
                          ? "bg-[var(--coral-dark)] text-white shadow-md shadow-[var(--coral-dark)]/20"
                          : "bg-[var(--cream)] text-[var(--coral-dark)]"
                      }`}
                    >
                      {q.number}
                    </span>

                    <h3
                      className={`min-w-0 flex-1 font-serif text-base font-bold leading-snug transition-colors duration-300 lg:text-lg ${
                        isActive
                          ? "text-[var(--coral-dark)]"
                          : "text-[var(--brown)]"
                      }`}
                    >
                      {q.question}
                    </h3>
                  </button>
                  {isActive && (
                    <div className="ml-[52px]">
                      <p className="text-body mt-2">
                        {q.description}
                      </p>
                      {q.bullets?.length > 0 && (
                        <ul className="mt-3 space-y-1.5 border-t border-[var(--border)]/60 pt-3">
                          {q.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="text-body flex items-start gap-2.5 font-medium leading-normal"
                            >
                              <CheckCircle2
                                size={15}
                                className="mt-0.5 shrink-0 text-[var(--coral-dark)]"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
