import { BookOpen, Heart, Leaf, ShieldCheck, Users } from "lucide-react";
import { placeholders, teachers } from "@/data/siteData";
import { pageMetadata } from "@/data/siteData";
import FounderPreview from "@/components/FounderPreview";
import {
  ButtonLink,
  Container,
  FinalCTA,
  Media,
  PageHero,
  SectionHeading,
} from "@/components/ui";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About The Hatha Yogashala"
        text="A yoga school identity built around clear teaching, traditional Hatha practice, honest information, and a grounded relationship with Goa."
        image="/images/hero-goa-yoga.png"
      />
      <section className="section">
        <Container className="split-layout">
          <Media
            src="/images/course-goa-yoga.png"
            alt="Students learning Hatha yoga in a small group in Goa"
            className="course-overview-image"
          />
          <div>
            <SectionHeading
              eyebrow="Meaning & philosophy"
              title="Hatha as a steady meeting of effort and ease"
              text="The name centres the school on patient practice rather than spectacle. It suggests a place where discipline, inquiry, breath, and rest can support one another."
            />
            <div className="prose-compact">
              <p>
                The school story stays grounded in its public purpose: create
                a clear residential setting for Hatha yoga practice, study,
                reflection, and responsible student support in Goa.
              </p>
              <p>
                Whether joining our certified 200-hour teacher training or a restorative yoga retreat, students at The Hatha Yogashala learn in an environment focused on personal growth, correct posture alignment, and practical teaching methodology.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section-peach">
        <Container>
          <SectionHeading eyebrow="Our direction" title="Mission, vision, and values" />
          <div className="values-grid">
            {[
              ["Mission", "Publish a clear, supportive pathway into yoga study in Goa, with every factual claim approved before it reaches a student.", Heart],
              ["Vision", "Create a school experience where practice is rigorous, residential life is considered, and booking information is transparent.", Leaf],
              ["Teaching", "Explain what students will learn, how it will be taught, and who will teach it before enrolment.", BookOpen],
              ["Trust", "Keep certification, fees, reviews, dates, and outcomes verifiable and easy to update.", ShieldCheck],
            ].map(([title, text, Icon]) => (
              <article className="card card-body" key={title}>
                <Icon aria-hidden="true" /><h2>{title}</h2><p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder Preview Section */}
      <FounderPreview />

      <section className="section section-cream">
        <Container className="split-layout split-reverse">
          <div>
            <SectionHeading
              eyebrow="Teaching philosophy"
              title="Practice first, explanation close behind"
              text="The proposed teaching philosophy connects embodied practice with context, safe progression, reflection, and the practical craft of guiding others."
            />
            <ul className="check-list">
              {["Clear learning outcomes", "Consent-aware instruction", "Time for questions and integration", "Transparent assessment", "Respect for different bodies and backgrounds"].map((item) => (
                <li key={item}><ShieldCheck aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
          <Media src="/images/accommodation-goa.png" alt="Residential study environment for yoga training in Goa" className="course-overview-image" />
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Verification"
            title="Credentials and reviews are published responsibly"
            text="Certification, teachers, graduate outcomes, and student voices require supporting information and an appropriate public source."
          />
          <div className="policy-grid">
            <article><h2>Certification</h2><p>{placeholders.certification}. {placeholders.verificationUrl}</p><ButtonLink href="/certification" variant="text">View certification</ButtonLink></article>
            <article><h2>Teaching team</h2><p>Faculty names, qualifications, experience, subject roles, and batch assignments are verified before publication.</p><ButtonLink href="/teachers" variant="text">Meet the teachers</ButtonLink></article>
            <article><h2>Student reviews</h2><p>No student review is displayed without the original platform source, reviewer attribution, rating, and date.</p><ButtonLink href="/contact" variant="text">Ask a question</ButtonLink></article>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
