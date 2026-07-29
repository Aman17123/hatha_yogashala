import { Users } from "lucide-react";
import { teachers, makeMetadata } from "@/data/siteData";
import {
  Container,
  FinalCTA,
  Media,
  PageHero,
  PlaceholderBadge,
  SectionHeading,
} from "@/components/ui";

export const metadata = makeMetadata(
  "Yoga Teachers in Goa",
  "Meet the founder and teaching team placeholders for The Hatha Yogashala in Goa.",
  "/teachers",
);

export default function TeachersPage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty"
        title="Our Yoga Teachers"
        text="A transparent faculty page ready for verified names, portraits, qualifications, specialities, and teaching experience."
      />
      <section className="section">
        <Container>
          <div className="founder-card">
            <Media src="/images/hero-goa-yoga.png" alt="Founder portrait placeholder" className="founder-image" />
            <div>
              <SectionHeading eyebrow="Founder spotlight" title={teachers[0].name} text={teachers[0].role} />
              <p>{teachers[0].bio}</p>
              <dl className="teacher-facts">
                <div><dt>Qualifications</dt><dd>{teachers[0].qualifications}</dd></div>
                <div><dt>Experience</dt><dd>{teachers[0].experience}</dd></div>
                <div><dt>Specialities</dt><dd>{teachers[0].specialties.join(", ")}</dd></div>
              </dl>
            </div>
          </div>
        </Container>
      </section>
      <section className="section section-peach">
        <Container>
          <SectionHeading
            eyebrow="Teaching team"
            title="Specialists across practice and study"
            text="Every card remains visibly incomplete until the school approves the source material."
          />
          <div className="teacher-grid">
            {teachers.map((teacher, index) => (
              <article className="card teacher-profile" key={`${teacher.name}-${index}`}>
                <div className="teacher-avatar large"><Users aria-hidden="true" /><PlaceholderBadge /></div>
                <div className="card-body">
                  <h2>{teacher.name}</h2>
                  <p className="teacher-role">{teacher.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((item, specialtyIndex) => (
                      <span className="pill" key={`${item}-${specialtyIndex}`}>{item}</span>
                    ))}
                  </div>
                  <p className="mt-4">{teacher.bio}</p>
                  <dl className="teacher-facts">
                    <div><dt>Qualifications</dt><dd>{teacher.qualifications}</dd></div>
                    <div><dt>Experience</dt><dd>{teacher.experience}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="content-narrow text-center">
          <SectionHeading
            eyebrow="Teaching philosophy"
            title="Clear instruction, careful observation, responsible guidance"
            text="Replace this page-level philosophy with an approved statement that reflects how the actual teaching team plans, teaches, modifies, and assesses learning."
            align="center"
          />
        </Container>
      </section>
      <FinalCTA title="Ask who will teach your batch" />
    </>
  );
}
