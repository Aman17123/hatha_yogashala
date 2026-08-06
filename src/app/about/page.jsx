import Image from "next/image";
import { BookOpen, Heart, Leaf, ShieldCheck } from "lucide-react";
import { Accordion } from "@/components/Interactive";
import {
  absoluteUrl,
  faqs,
  pageMetadata,
  placeholders,
  site,
} from "@/data/siteData";
import FounderPreview from "@/components/FounderPreview";
import {
  ButtonLink,
  Container,
  FinalCTA,
  JsonLd,
  Media,
  PageHero,
  SectionHeading,
} from "@/components/ui";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    image: absoluteUrl(site.defaultImage),
    description: site.description,
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Querim–Arambol–Agarwada Rd, Dhaktebag, Pernem",
      addressLocality: "Pernem",
      addressRegion: "North Goa",
      postalCode: "403524",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.729,
      longitude: 73.701,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Goa" },
  };

  const aboutFaq = faqs.slice(0, 4);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aboutFaq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="Our story"
        title="About the Yoga School in North Goa"
        text="Hatha Yogashala is a Yoga Alliance-registered yoga school and ashram in Querim, North Goa — a beachside setting for clear teaching, traditional Hatha practice, and honest information near Arambol."
        image="/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp"
      />
      <section className="section">
        <Container className="split-layout">
          <Media
            src="/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg"
            alt="Students learning Hatha yoga in a small group in the Goa shala"
            className="course-overview-image"
          />
          <div>
            <SectionHeading
              eyebrow="Meaning & philosophy"
              title="Hatha as a steady meeting of effort and ease"
              text="The school is founded on patient, traditional Hatha practice rather than spectacle — a place where discipline, inquiry, breath, and rest support one another at a residential ashram in Querim, Goa."
            />
            <div className="prose-compact">
              <p>
                Located in Querim village, North Goa — minutes from Arambol and
                Querim beaches — the school creates a clear residential setting
                for Hatha yoga practice, study, reflection, and responsible
                student support.
              </p>
              <p>
                Whether you join our Yoga Alliance-approved 200-hour teacher
                training or a restorative yoga retreat near Arambol, students
                learn in an environment focused on personal growth, correct
                posture alignment, and practical teaching methodology.
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
          <Media src="/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp" alt="Residential study environment for yoga training in Goa" className="course-overview-image" />
        </Container>
      </section>

      <section className="section">
        <Container className="split-layout">
          <div>
            <div className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-sm">
              <Image
                src="/images/tha_hatha/The-hatha-yogashala--Certificate.webp"
                alt="Sample yoga teacher training certificate issued to a graduate of Hatha Yogashala in Goa"
                width={1200}
                height={900}
                loading="lazy"
                sizes="(max-width: 820px) 100vw, 44vw"
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
            <p className="mt-3 text-center text-[13.5px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
              Specimen certificate · Hatha Yoga TTC in Goa
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Verification"
              title="Credentials and reviews are published responsibly"
              text="Certification, teachers, graduate outcomes, and student voices each require supporting information and an appropriate public source."
            />
            <div className="policy-grid">
              <article><h3>Certification</h3><p>{placeholders.certification}. {placeholders.verificationUrl}</p><ButtonLink href="/certification" variant="text">View certification</ButtonLink></article>
              <article><h3>Teaching team</h3><p>Faculty names, qualifications, experience, subject roles, and batch assignments are verified before publication.</p><ButtonLink href="/teachers" variant="text">Meet the teachers</ButtonLink></article>
              <article><h3>Student reviews</h3><p>No student review is shown without its original platform source, reviewer attribution, rating, and date.</p><ButtonLink href="/contact" variant="text">Ask a question</ButtonLink></article>
            </div>
          </div>
        </Container>
      </section>
      <section className="section section-peach">
        <Container>
          <SectionHeading
            eyebrow="Good to know"
            title="Common questions about the Goa yoga school"
            text="Direct answers to what students most often ask about teacher training, retreats, location and practice in North Goa."
          />
          <Accordion items={aboutFaq} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
