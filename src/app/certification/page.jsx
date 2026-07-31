import { ShieldCheck } from "lucide-react";
import { Accordion } from "@/components/Interactive";
import { Container, FinalCTA, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { pageMetadata, placeholders } from "@/data/siteData";

export const metadata = pageMetadata("certification");

const certificationFaqs = [
  { question: "Is the school currently certified?", answer: "No certification claim is published because approved registration details have not been provided." },
  { question: "What should be verified?", answer: "Verify the legal school name, registering body, course designation, registration number, validity period, graduate eligibility, and public source link." },
  { question: "Will students receive a certificate?", answer: "The exact document, eligibility conditions, assessment, fees, and issuing organisation must be confirmed by the school." },
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
        text="A dedicated place for genuine registration details—without badges, recognition claims, or certificate previews that have not been approved."
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
              [placeholders.certificationName, "Exact name of the issuing or registering body"],
              [placeholders.yogaAllianceNumber, "Public school or provider registration identifier"],
              [placeholders.courseDesignation, "Exact credential attached to each program"],
            ].map(([title, text]) => (
              <div className="card" key={title}><ShieldCheck aria-hidden="true" /><strong>{title}</strong><span>{text}</span></div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section section-peach">
        <Container className="certification-grid">
          <div className="card card-body grid place-items-center text-center">
            <ShieldCheck aria-hidden="true" size={52} />
            <strong className="mt-4">{placeholders.certificateImage}</strong>
            <p className="mt-2">A specimen will appear only after the issuing details are verified and publication is approved.</p>
          </div>
          <div>
            <SectionHeading eyebrow="What students receive" title="Publish the complete credential pathway" />
            <ul className="check-list">
              {[
                placeholders.certification,
                placeholders.certificationConditions,
                placeholders.graduateRegistration,
                placeholders.courseDesignation,
                placeholders.verificationUrl,
              ].map((item) => <li key={item}><ShieldCheck aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="content-narrow">
          <SectionHeading eyebrow="Verification FAQ" title="Check before you enrol" />
          <Accordion items={certificationFaqs} />
        </Container>
      </section>
      <FinalCTA title="Ask for verified certification details" />
    </>
  );
}
