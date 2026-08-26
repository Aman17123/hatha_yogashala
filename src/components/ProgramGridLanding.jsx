import Link from "next/link";
import { Container } from "./ui";

function LotusIcon({ className = "size-16 text-[var(--secondary)]" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Stylized Lotus Icon matching yoga mandala heritage */}
      <path d="M50 15 C45 30, 42 45, 50 65 C58 45, 55 30, 50 15 Z" />
      <path d="M50 65 C40 50, 25 35, 18 28 C22 45, 32 58, 50 65 Z" />
      <path d="M50 65 C60 50, 75 35, 82 28 C78 45, 68 58, 50 65 Z" />
      <path d="M50 65 C35 58, 15 48, 8 45 C15 62, 30 70, 50 72 Z" />
      <path d="M50 65 C65 58, 85 48, 92 45 C85 62, 70 70, 50 72 Z" />
      <circle cx="50" cy="80" r="4" />
      <circle cx="40" cy="82" r="3" />
      <circle cx="60" cy="82" r="3" />
      <circle cx="30" cy="85" r="2.5" />
      <circle cx="70" cy="85" r="2.5" />
    </svg>
  );
}

export default function ProgramGridLanding({
  bannerTitle,
  programs = [],
  bannerSubtitle,
}) {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* 1. Header Banner — Solid background with centered white text */}
      <section className="bg-[var(--secondary)] py-12 md:py-16 text-center text-white shadow-inner">
        <Container>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-white drop-shadow-sm">
            {bannerTitle}
          </h1>
          {bannerSubtitle && (
            <p className="mt-3 text-white/90 text-base md:text-lg max-w-2xl mx-auto font-sans">
              {bannerSubtitle}
            </p>
          )}
        </Container>
      </section>

      {/* 2. Grid of Program Cards (3 per row) */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {programs.map((prog) => (
              <article
                key={prog.href}
                className="group relative flex flex-col items-center justify-between rounded-2xl border border-[#e5e2d8] bg-[#fbfaf8] p-8 md:p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[var(--secondary)]/40 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Lotus Icon at Top */}
                <div className="mb-6 flex items-center justify-center">
                  <LotusIcon className="size-16 md:size-20 text-[var(--secondary)] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Program Title */}
                <h2 className="font-serif text-lg md:text-xl font-bold text-[#24241d] leading-snug mb-8 group-hover:text-[var(--secondary)] transition-colors">
                  {prog.title}
                </h2>

                {/* Learn More » Link */}
                <div className="mt-auto pt-2">
                  <Link
                    href={prog.href}
                    className="inline-flex items-center justify-center gap-1 font-sans text-base font-bold text-[var(--secondary)] hover:text-[var(--secondary-dark)] hover:underline transition-colors"
                  >
                    Learn More »
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
