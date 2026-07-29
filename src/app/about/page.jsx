import { BookOpen, Heart, Leaf, ShieldCheck } from "lucide-react";
import { teachers } from "@/data/siteData";
import { makeMetadata } from "@/data/siteData";
import {
  ButtonLink,
  Container,
  FinalCTA,
  Media,
  PageHero,
  SectionHeading,
} from "@/components/ui";

export const metadata = makeMetadata(
  "About Our Yoga School in Goa",
  "Learn the developing philosophy, teaching approach, values, and Goa setting of The Hatha Yogashala.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About The Hatha Yogashala"
        text="A yoga school identity built around clear teaching, honest information, and a grounded relationship with Goa."
        image="/images/hero-goa-yoga.png"
      />
      <section className="section">
        <Container className="split-layout">
          <Media
            src="/images/course-goa-yoga.png"
            alt="Editorial placeholder of yoga teacher training in Goa"
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
                The final school story should be written from the founder’s approved account:
                why the school began, whose teaching shaped it, and what responsibility it takes
                toward students and tradition.
              </p>
              <p>
                Until that material is supplied, this page offers a transparent editorial
                framework instead of inventing lineage, achievements, or qualifications.
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
      <section className="section" id="founder">
        <Container>
          <div className="founder-card">
            <Media src="/images/hero-goa-yoga.png" alt="Founder portrait placeholder" className="founder-image" />
            <div>
              <SectionHeading eyebrow="Founder" title={teachers[0].name} text={teachers[0].role} />
              <p>{teachers[0].bio}</p>
              <p className="placeholder-note mt-4">{teachers[0].qualifications} · {teachers[0].experience}</p>
              <blockquote>“[Add an approved founder philosophy quote.]”</blockquote>
            </div>
          </div>
        </Container>
      </section>
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
          <Media src="/images/accommodation-goa.png" alt="Goa residential learning placeholder" className="course-overview-image" />
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Verification"
            title="Credentials and reviews will be published responsibly"
            text="Certification, teachers, graduate outcomes, and student voices remain placeholders until supporting information is supplied."
          />
          <div className="policy-grid">
            <article><h2>Certification</h2><p>[Add exact registration name, course designation, registration number, and verification link.]</p><ButtonLink href="/certification" variant="text">View certification</ButtonLink></article>
            <article><h2>Teaching team</h2><p>[Add approved biographies, qualifications, subjects, experience, and batch assignment.]</p><ButtonLink href="/teachers" variant="text">Meet the teachers</ButtonLink></article>
            <article><h2>Student reviews</h2><p>[Add verified excerpts with permission and link to the original review profile.]</p><ButtonLink href="/contact" variant="text">Ask a question</ButtonLink></article>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
