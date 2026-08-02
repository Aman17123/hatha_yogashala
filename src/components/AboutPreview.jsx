import Link from "next/link";
import {
  CheckCircle2,
  Compass,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { aboutSectionData } from "@/data/siteContentData";
import { ButtonLink, Container, Media, SectionHeading } from "@/components/ui";

export default function AboutPreview({ data = aboutSectionData }) {
  const icons = [Users, ShieldCheck, Heart, Leaf];

  return (
    <section className="section bg-[var(--cream)]" id="about-preview">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Primary Main Photo */}
              <div className="home-about-main col-span-2 rounded-[28px] overflow-hidden shadow-xl aspect-[16/10] relative group">
                <Media
                  src="/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg"
                  alt="Students learning traditional Hatha Yoga alignment in Goa shala"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[var(--brown)] shadow-sm">
                  Goa Campus Shala
                </span>
              </div>

              {/* Secondary Sub Photo 1 */}
              <div className="home-about-sub rounded-[24px] overflow-hidden shadow-md aspect-[4/3] relative">
                <Media
                  src="/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp"
                  alt="Pranayama and meditation session at Hatha Yogashala Goa"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 50vw, 22vw"
                />
              </div>

              {/* Secondary Sub Photo 2 */}
              <div className="home-about-sub rounded-[24px] overflow-hidden shadow-md aspect-[4/3] relative">
                <Media
                  src="/images/tha_hatha/the-hatha-yogashala-goa-yoga-students-relaxation.webp"
                  alt="Students relaxing and restoring in the quiet coastal setting of North Goa"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 50vw, 22vw"
                />
              </div>
            </div>

            {/* Decorative Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-2 md:right-4 z-10 hidden sm:flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl border border-[var(--border)] max-w-xs">
              <div className="grid size-11 place-items-center rounded-xl bg-[var(--cream)] text-[var(--terracotta)] shrink-0">
                <Sparkles size={20} aria-hidden="true" />
              </div>
              <div>
                <strong className="block text-xs font-bold text-[var(--brown)]">
                  Goa Yoga Sanctuary
                </strong>
                <span className="text-[11px] text-[var(--muted)]">
                  Small-group learning & coastal calm
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Narrative & Trust Points */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="eyebrow">
                <Sparkles aria-hidden="true" size={15} />
                {data.eyebrow}
              </p>
              <h2 className="mt-2 section-title text-[var(--brown)]">
                {data.heading}
              </h2>
            </div>

            {/* Paragraphs with naturally woven keywords */}
            <div className="space-y-4 text-base text-[var(--text)] leading-relaxed">
              <p>{data.paragraph1}</p>
              <p>{data.paragraph2}</p>
            </div>

            {/* 4 Short Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {data.trustPoints.map((point, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={point.title}
                    className="flex items-start gap-2 rounded-2xl bg-[var(--cream)]/50 border border-[var(--border)]/70 p-2 transition-colors hover:bg-[var(--cream)]"
                  >
                    <span className="grid size-8 place-items-center rounded-lg bg-[var(--terracotta)] text-white shrink-0 mt-0.5 shadow-sm">
                      <IconComponent size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <strong className="block text-sm font-bold text-[var(--brown)]">
                        {point.title}
                      </strong>
                      <span className="text-[14px] text-[var(--muted)] leading-tight">
                        {point.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <ButtonLink href="/about" variant="primary">
                <span>Discover Our Story</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
