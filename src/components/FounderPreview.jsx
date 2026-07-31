import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Quote, ShieldAlert, Sparkles, UserCheck } from "lucide-react";
import { founderData } from "@/data/siteContentData";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";

export default function FounderPreview({ founder = founderData }) {
  return (
    <section className="section section-peach relative overflow-hidden" id="founder-preview">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column — Founder Image Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src={founder.image}
                alt={founder.imageAlt || founder.name}
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a0e]/80 via-transparent to-transparent" />
              
              {/* Bottom Badge inside Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="inline-block rounded-full bg-[#cf5b50] px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                  {founder.qualifications}
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  {founder.name}
                </h3>
                <p className="text-xs text-white/80 font-medium">
                  {founder.role} · {founder.experience}
                </p>
              </div>
            </div>

            {/* Decorative Indian Mandala Accent / Backdrop Ring */}
            <div className="absolute -bottom-6 -left-6 size-32 rounded-full bg-[#cf5b50]/10 blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 size-32 rounded-full bg-[#e97467]/15 blur-2xl -z-10" />
          </div>

          {/* Right Column — Founder Info & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="eyebrow">
                <Sparkles aria-hidden="true" size={15} />
                Our Lineage & Vision
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#2c1a0e] leading-tight">
                Meet the Founder & Lead Master
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-base text-[#4e4946] leading-relaxed">
              {founder.shortBio}
            </p>

            {/* Qualifications & Lineage Badges */}
            <div className="flex flex-wrap gap-3 py-2">
              <div className="flex items-center gap-2 rounded-full bg-white border border-[#f0d9cf] px-4 py-2 text-xs font-semibold text-[#2c1a0e] shadow-sm">
                <Award size={15} className="text-[#cf5b50]" />
                <span>{founder.qualifications}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white border border-[#f0d9cf] px-4 py-2 text-xs font-semibold text-[#2c1a0e] shadow-sm">
                <UserCheck size={15} className="text-[#cf5b50]" />
                <span>{founder.experience}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white border border-[#f0d9cf] px-4 py-2 text-xs font-semibold text-[#2c1a0e] shadow-sm">
                <BookOpen size={15} className="text-[#cf5b50]" />
                <span>{founder.lineage}</span>
              </div>
            </div>

            {/* Quote Block with Signature Detail */}
            <div className="relative rounded-2xl bg-white/90 border-l-4 border-[#cf5b50] p-6 shadow-sm space-y-3">
              <Quote className="size-6 text-[#cf5b50]/40 absolute top-4 right-4" />
              <p className="text-sm italic font-serif text-[#2c1a0e] leading-relaxed">
                &ldquo;{founder.quote}&rdquo;
              </p>
              
              <div className="flex items-center justify-between pt-2 border-t border-[#f0d9cf]/60">
                <span className="text-xs font-bold text-[#cf5b50]">
                  — {founder.name}
                </span>
                {/* Decorative Signature Stylization */}
                <span className="font-serif italic text-base text-[#746d69] tracking-wider">
                  {founder.name}
                </span>
              </div>
            </div>

            {/* Editable Placeholder Note if active */}
            {founder.isPlaceholder && (
              <div className="flex items-center gap-2 text-[11px] text-[#746d69] bg-white/60 rounded-xl p-3 border border-[#f0d9cf]">
                <ShieldAlert size={14} className="text-[#cf5b50] shrink-0" />
                <span>{founder.placeholderNote}</span>
              </div>
            )}

            {/* CTA Link */}
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
