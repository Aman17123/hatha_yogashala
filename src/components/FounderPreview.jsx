import Image from "next/image";
import {
  BookOpen,
  Quote,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { founderData } from "@/data/siteContentData";
import { ButtonLink, Container } from "@/components/ui";

export default function FounderPreview({ founder = founderData }) {
  return (
    <section
      className="section section-peach relative overflow-hidden"
      id="founder-preview"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column — Founder Image Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="home-founder-media relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src={founder.image}
                alt={founder.imageAlt || founder.name}
                width={500}
                height={500}
                sizes="3/4"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Solid dark scrim bar — guaranteed contrast, no gradient/opacity guessing */}
              <div className="absolute bottom-0 left-0 right-0 bg-[var(--brown)] px-6 py-5 space-y-1">
                <h3
                  style={{ color: "#ffffff" }}
                  className="text-xl font-serif font-bold"
                >
                  {founder.name}
                </h3>
                <p
                  style={{ color: "rgba(255,255,255,0.85)" }}
                  className="text-sm font-medium"
                >
                  {founder.role} · {founder.experience}
                </p>
              </div>
            </div>

            {/* Decorative Indian Mandala Accent / Backdrop Ring */}
            <div className="absolute -bottom-6 -left-6 size-32 rounded-full bg-[var(--coral-dark)]/10 blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 size-32 rounded-full bg-[var(--coral-dark)]/15 blur-2xl -z-10" />
          </div>

          {/* Right Column — Founder Info & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="eyebrow">
                <Sparkles aria-hidden="true" size={15} />
                Our Lineage & Vision
              </p>
              <h2 className="mt-2 section-title text-[var(--brown)]">
                Meet the Founder & Lead Master
              </h2>
            </div>

            <p className="text-base text-[var(--text)] leading-relaxed">
              {founder.shortBio}
            </p>

            <div className="flex flex-wrap gap-3 py-2">
              <div className="flex items-center gap-2 rounded-full bg-white border border-[var(--border)] px-4 py-2 text-[13.5px] font-semibold text-[var(--brown)] shadow-sm">
                <UserCheck size={15} className="text-[var(--coral-dark)]" />
                <span>{founder.experience}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white border border-[var(--border)] px-4 py-2 text-[13.5px] font-semibold text-[var(--brown)] shadow-sm">
                <BookOpen size={15} className="text-[var(--coral-dark)]" />
                <span>{founder.lineage}</span>
              </div>
            </div>

            <div className="quote-box relative rounded-2xl bg-white/90 border-l-4 border-[var(--coral-dark)] p-6 shadow-sm space-y-3">
              <Quote className="size-6 text-[var(--coral-dark)]/40 absolute top-4 right-4" />
              <p className="text-sm italic font-serif text-[var(--brown)] leading-relaxed">
                &ldquo;{founder.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]/60">
                <span className="text-[13.5px] font-bold text-[var(--coral-dark)]">
                  — {founder.name}
                </span>
                <span className="font-serif italic text-base text-[var(--muted)] tracking-wider">
                  {founder.name}
                </span>
              </div>
            </div>
            <div className="pt-2">
              <ButtonLink href="/founder" variant="primary">
                <span>Meet Our Founder</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
