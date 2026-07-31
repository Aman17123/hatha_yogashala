"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { enrolmentQuestionsData } from "@/data/siteContentData";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";

export default function EnrolmentQuestions({
  questions = enrolmentQuestionsData,
  eyebrow = "Planning Support",
  title = "Questions Worth Asking Before You Enrol",
  text = "Evaluating a yoga teacher training school requires checking verified facts, class sizes, faculty experience, and clear fee breakdowns before making a deposit.",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section section-cream relative overflow-hidden" id="enrolment-questions">
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
              <h2 className="text-3xl xl:text-4xl font-serif font-bold text-[#2c1a0e] leading-tight">
                {title}
              </h2>
              <p className="text-sm text-[#746d69] leading-relaxed">
                {text}
              </p>
            </div>

            {/* Active Visual / Image Box with Smooth Transition */}
            <div className="relative rounded-[28px] overflow-hidden bg-[#fdf0e7] border border-[#f0d9cf] shadow-md aspect-[4/3] group">
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
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-[#2c1a0e] shadow-lg">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#cf5b50]">
                        Topic {q.number} of {String(questions.length).padStart(2, "0")}
                      </span>
                      <p className="text-xs font-semibold mt-0.5 line-clamp-1 text-[#2c1a0e]">
                        {q.shortSummary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress & CTA Panel */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#f0d9cf]">
              {/* Active Counter Indicator */}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif font-bold text-[#cf5b50]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-[#746d69] font-medium">
                  / {String(questions.length).padStart(2, "0")} Questions
                </span>
                <div className="ml-2 flex items-center gap-1">
                  {questions.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex ? "w-6 bg-[#cf5b50]" : "w-1.5 bg-[#f0d9cf]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Advisor CTA */}
              <ButtonLink href="/contact" variant="primary" className="text-xs py-2.5 px-4">
                <span>Talk to Advisor</span>
              </ButtonLink>
            </div>

          </div>

          {/* Right Column — Scrollable Questions */}
          <div className="space-y-3">
            {questions.map((q, index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  key={q.id}
                  className={`rounded-[22px] border p-4 transition-all duration-300 lg:p-5 ${
                    isActive
                      ? "border-[#cf5b50] bg-white shadow-lg shadow-[#cf5b50]/10"
                      : "bg-white/70 border-[#f0d9cf] hover:bg-white hover:border-[#cf5b50]/40 opacity-85 hover:opacity-100"
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
                      className={`grid size-9 shrink-0 place-items-center rounded-full font-serif text-xs font-bold transition-colors duration-300 ${
                        isActive
                          ? "bg-[#cf5b50] text-white shadow-md shadow-[#cf5b50]/20"
                          : "bg-[#fff0eb] text-[#cf5b50]"
                      }`}
                    >
                      {q.number}
                    </span>

                    <h3
                      className={`min-w-0 flex-1 font-serif text-base font-bold leading-snug transition-colors duration-300 lg:text-lg ${
                        isActive ? "text-[#cf5b50]" : "text-[#2c1a0e]"
                      }`}
                    >
                      {q.question}
                    </h3>
                  </button>
                  {isActive && (
                    <div className="ml-[52px]">
                      <p className="mt-2 text-sm leading-relaxed text-[#746d69]">
                        {q.description}
                      </p>
                      {q.bullets?.length > 0 && (
                        <ul className="mt-3 space-y-1.5 border-t border-[#f0d9cf]/60 pt-3">
                          {q.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs font-medium leading-normal text-[#4e4946]">
                              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#cf5b50]" />
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
