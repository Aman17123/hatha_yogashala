import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Heart,
  Quote,
  ShieldAlert,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { founderData } from "@/data/siteContentData";
import { pageMetadata } from "@/data/siteData";
import {
  ButtonLink,
  Container,
  FinalCTA,
  JsonLd,
  Media,
  PageHero,
  SectionHeading,
} from "@/components/ui";

export const metadata = pageMetadata("founder");

export default function FounderPage() {
  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founderData.name,
    jobTitle: founderData.role,
    worksFor: {
      "@type": "EducationalOrganization",
      name: "The Hatha Yogashala",
    },
    description: founderData.shortBio,
    knowsAbout: founderData.areasOfExpertise,
  };

  return (
    <>
      <JsonLd data={founderSchema} />

      {/* Hero Section */}
      <PageHero
        eyebrow="Leadership & Lineage"
        title="Meet Our Founder"
        text="Discover the vision, traditional background, and teaching philosophy guiding The Hatha Yogashala in Goa, India."
        image="/images/hero-goa-yoga.png"
      />

      {/* Founder Biography & Lineage */}
      <section className="section bg-[#fffcf8]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column — Founder Portrait & Quick Facts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={founderData.image}
                  alt={founderData.imageAlt || founderData.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Quick Facts Card */}
              <div className="rounded-[24px] bg-white border border-[#f0d9cf] p-6 shadow-sm space-y-4">
                <h3 className="text-base font-serif font-bold text-[#2c1a0e] border-b border-[#f0d9cf]/60 pb-3">
                  Founder Credentials
                </h3>
                <dl className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#746d69] font-medium">Role</dt>
                    <dd className="font-semibold text-[#2c1a0e] text-right">{founderData.role}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#746d69] font-medium">Qualifications</dt>
                    <dd className="font-semibold text-[#cf5b50] text-right">{founderData.qualifications}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#746d69] font-medium">Experience</dt>
                    <dd className="font-semibold text-[#2c1a0e] text-right">{founderData.experience}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#746d69] font-medium">Lineage</dt>
                    <dd className="font-semibold text-[#2c1a0e] text-right">{founderData.lineage}</dd>
                  </div>
                </dl>
              </div>

              {/* Editable Placeholder Banner if applicable */}
              {founderData.isPlaceholder && (
                <div className="flex items-start gap-2.5 rounded-2xl bg-[#fff0eb] border border-[#f0d9cf] p-4 text-xs text-[#746d69]">
                  <ShieldAlert size={16} className="text-[#cf5b50] shrink-0 mt-0.5" />
                  <span>{founderData.placeholderNote}</span>
                </div>
              )}
            </div>

            {/* Right Column — Full Story & Philosophy */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="eyebrow">
                  <Sparkles aria-hidden="true" size={15} />
                  Yoga Journey & Background
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#2c1a0e] leading-tight">
                  {founderData.name}
                </h2>
                <p className="text-sm font-semibold text-[#cf5b50] mt-1">
                  {founderData.role}
                </p>
              </div>

              {/* Full Biography */}
              <div className="space-y-4 text-sm sm:text-base text-[#4e4946] leading-relaxed">
                <p>{founderData.fullBio}</p>
                <p>{founderData.shortBio}</p>
              </div>

              {/* Quote */}
              <div className="relative rounded-2xl bg-[#fff0eb]/70 border-l-4 border-[#cf5b50] p-6 shadow-sm space-y-2">
                <Quote className="size-6 text-[#cf5b50]/30 absolute top-4 right-4" />
                <p className="text-base italic font-serif text-[#2c1a0e] leading-relaxed">
                  &ldquo;{founderData.quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-[#cf5b50] uppercase tracking-wider pt-2">
                  — {founderData.name}
                </p>
              </div>

              {/* Areas of Expertise */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-serif font-bold text-[#2c1a0e]">
                  Areas of Expertise & Mastery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {founderData.areasOfExpertise.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 rounded-xl bg-white border border-[#f0d9cf] p-3 text-xs font-semibold text-[#2c1a0e] shadow-sm">
                      <CheckCircle2 size={16} className="text-[#cf5b50]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* Message from Founder Section */}
      <section className="section section-peach">
        <Container className="max-w-4xl">
          <div className="rounded-[32px] bg-white border border-[#f0d9cf] p-8 sm:p-12 shadow-md space-y-6 text-center">
            <span className="grid size-12 place-items-center mx-auto rounded-full bg-[#fff0eb] text-[#cf5b50]">
              <Heart size={24} />
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2c1a0e]">
              A Personal Message to Future Students
            </h2>
            <p className="text-base sm:text-lg text-[#4e4946] italic font-serif leading-relaxed">
              &ldquo;{founderData.message}&rdquo;
            </p>
            <div className="pt-4 border-t border-[#f0d9cf] flex justify-center gap-4">
              <ButtonLink href="/courses" variant="primary">
                Explore Courses
              </ButtonLink>
              <ButtonLink href="/apply" variant="secondary">
                Apply Now
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA title="Begin your yoga journey with us" />
    </>
  );
}
