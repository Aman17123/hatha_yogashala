import Image from "next/image";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/data/siteData";

export const metadata = pageMetadata("apply");

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Application"
        title="Reserve Your Spot"
        text="Share your preferred program, batch, room, experience, and support needs. Submission is an enquiry—not a confirmed booking."
        image="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp"
        loading="eager"
      />
      <section className="section">
        <Container className="apply-grid">
          <div>
            <SectionHeading
              eyebrow="Application form"
              title="Tell us how you want to study"
              text="Required fields are validated in the browser and again on the server. Your form is only marked delivered after the configured endpoint accepts it."
            />
            <EnquiryForm />
          </div>
          <aside className="apply-aside">
            {/* Official School Logo & Accreditation Box */}
            <div className="card card-body text-center flex flex-col items-center p-6 border border-[var(--border)] bg-gradient-to-b from-white to-[var(--cream)]/60 rounded-3xl shadow-sm mb-4">
              <div className="relative w-48 h-14 mb-2">
                <Image
                  src="/images/The-Hatha-Yogashala-logo.png"
                  alt="The Hatha Yogashala Official Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-[var(--brown)]">
                The Hatha Yogashala Goa
              </h3>
              <p className="text-[11px] text-[var(--coral-dark)] font-extrabold uppercase tracking-wider mt-0.5">
                Yoga Alliance USA Registered School
              </p>
              <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
                Direct Ashram Admissions · Querim Beach, North Goa, India
              </p>
            </div>

            <div className="card card-body">
              <ShieldCheck aria-hidden="true" />
              <h2>Before you submit</h2>
              <ul className="check-list">
                {[
                  "Check that your email and WhatsApp number are correct",
                  "Share relevant accessibility or health considerations",
                  "Do not send payment details in this form",
                  "Wait for verified dates, fees, and payment instructions",
                  "Read the cancellation and payment policies",
                ].map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
