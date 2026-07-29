import { ShieldCheck } from "lucide-react";
import { Accordion } from "@/components/Interactive";
import { Container, FinalCTA, PageHero, SectionHeading } from "@/components/ui";
import { makeMetadata } from "@/data/siteData";

export const metadata = makeMetadata(
  "Yoga Certification & Verification",
  "Review certification placeholders and the verification process for The Hatha Yogashala.",
  "/certification",
);

const certificationFaqs = [
  { question: "Is the school currently certified?", answer: "No certification claim is published because approved registration details have not been provided." },
  { question: "What should be verified?", answer: "Verify the legal school name, registering body, course designation, registration number, validity period, graduate eligibility, and public source link." },
  { question: "Will students receive a certificate?", answer: "The exact document, eligibility conditions, assessment, fees, and issuing organisation must be confirmed by the school." },
];

export default function CertificationPage() {
  return (
    <>
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
            text="Before launch, replace each bracketed item with exact information and a public verification path."
          />
          <div className="credential-cards">
            {[
              ["[Certification Name]", "Exact name of the issuing or registering body"],
              ["[Registration Number]", "Public school or provider registration identifier"],
              ["[Approved Course Designation]", "Exact credential attached to each program"],
            ].map(([title, text]) => (
              <div className="card" key={title}><ShieldCheck aria-hidden="true" /><strong>{title}</strong><span>{text}</span></div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section section-peach">
        <Container className="certification-grid">
          <div className="certificate-placeholder">
            <span>Certificate preview</span>
            <strong>[Add approved certificate image]</strong>
            <p>Show a watermarked specimen only after the issuing details are confirmed.</p>
          </div>
          <div>
            <SectionHeading eyebrow="What students receive" title="Publish the complete credential pathway" />
            <ul className="check-list">
              {[
                "[Document issued on successful completion]",
                "[Assessment and attendance conditions]",
                "[Registration steps after graduation]",
                "[Any additional registration fees]",
                "[Verification contact or public profile]",
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
