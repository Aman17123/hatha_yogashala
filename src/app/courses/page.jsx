import { teacherTrainings, shortPrograms } from "@/data/coursesData";
import { makeMetadata } from "@/data/siteData";
import { Container, FinalCTA, PageHero, ProgramCard, SectionHeading } from "@/components/ui";

export const metadata = makeMetadata(
  "Yoga Courses in Goa",
  "Compare yoga teacher training and short courses at The Hatha Yogashala in Goa.",
  "/courses",
);

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Study in Goa"
        title="Yoga Courses in Goa"
        text="Compare teacher training and focused short-course frameworks, with unverified details clearly marked."
      />
      <section className="section">
        <Container>
          <SectionHeading eyebrow="Teacher training" title="Structured pathways for deeper study" />
          <div className="stacked-programs">
            {teacherTrainings.map((course) => <ProgramCard course={course} horizontal key={course.slug} />)}
          </div>
        </Container>
      </section>
      <section className="section section-peach">
        <Container>
          <SectionHeading eyebrow="Short courses" title="Focused learning in Goa" />
          <div className="short-course-grid">
            {shortPrograms.map((course) => <ProgramCard course={course} key={course.slug} />)}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
