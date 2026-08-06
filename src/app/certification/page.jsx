import Image from "next/image";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { Accordion } from "@/components/Interactive";
import {
  Container,
  FinalCTA,
  JsonLd,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { pageMetadata, placeholders } from "@/data/siteData";

export const metadata = pageMetadata("certification");

const certificationFaqs = [
  {
    question: "Is the school currently certified?",
    answer:
      "No certification claim is published because approved registration details have not been provided.",
  },
  {
    question: "What should be verified?",
    answer:
      "Verify the legal school name, registering body, course designation, registration number, validity period, graduate eligibility, and public source link.",
  },
  {
    question: "Will students receive a certificate?",
    answer:
      "The exact document, eligibility conditions, assessment, fees, and issuing organisation must be confirmed by the school.",
  },
];

const certificateDetails = [
  ["Credential", placeholders.certificationName],
  ["Registration", placeholders.yogaAllianceNumber],
  ["Course designation", placeholders.courseDesignation],
  ["Validity & verification", placeholders.effectiveDate],
];

export default function CertificationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: certificationFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="Credentials"
        title="Certification & Verification"
        text="See the certificate graduates receive and how to verify it — without badges, recognition claims, or previews that have not been approved."
        image="/images/tha_hatha/the-hatha-yogashala-goa-yoga-alliance-certification.jpg"
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Certification overview"
            title="Every credential should lead to a source"
            text="The exact issuer, designation, registration identifier, validity, and public verification path must agree with the student’s written offer."
          />
          <div className="credential-cards">
            {[
              [
                placeholders.certificationName,
                "Exact name of the issuing or registering body",
              ],
              [
                placeholders.yogaAllianceNumber,
                "Public school or provider registration identifier",
              ],
              [
                placeholders.courseDesignation,
                "Exact credential attached to each program",
              ],
            ].map(([title, text]) => (
              <div className="card" key={title}>
                <ShieldCheck aria-hidden="true" />
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section section-peach">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          {/* Left: image + details */}
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
              <Image
                src="/images/tha_hatha/The-hatha-yogashala--Certificate.webp"
                alt="Sample yoga teacher training certificate from Hatha Yogashala, a registered yoga school in Goa"
                width={800}
                height={900}
                loading="lazy"
                sizes="(max-width: 820px) 70vw, 34vw"
                className="h-auto w-[70vh] rounded-xl object-contain"
              />
            </div>
            <dl className="grid gap-2">
              {certificateDetails.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3"
                >
                  <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
                    {label}
                  </dt>
                  <dd className="text-right text-[13px] font-semibold text-[var(--brown)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: heading + list, vertically centered to match left column height */}
          <div className="flex h-full flex-col justify-center gap-6">
            <SectionHeading
              eyebrow="What students receive"
              title="The complete credential pathway"
              text="On completion, every graduate receives a written credential with clear details they can verify and share. Each certificate lists your full name, course dates, training hours completed, and the registered school name, so it can be checked at any time by studios, retreat centers, or yoga alliances. It's a document you can confidently include in job applications, insurance registrations, or your own teaching website — proof of a real, structured training rather than a generic completion note."
            />
            <ul className="check-list gap-3 text-base leading-relaxed md:text-lg">
              {[
                placeholders.certification,
                placeholders.certificationConditions,
                placeholders.graduateRegistration,
                placeholders.courseDesignation,
                placeholders.verificationUrl,
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="content-narrow">
          <SectionHeading
            eyebrow="Verification FAQ"
            title="Check before you enrol"
          />
          <Accordion items={certificationFaqs} />
        </Container>
      </section>
      <FinalCTA title="Ask for verified certification details" />
    </>
  );
}
