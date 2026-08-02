import { teacherTrainings } from "@/data/coursesData";
import { pageMetadata } from "@/data/siteData";
import { Container, FinalCTA, PageHero, ProgramCard, SectionHeading } from "@/components/ui";

export const metadata = pageMetadata("courses");

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Study in Goa"
        title="Yoga Courses in Goa"
        text="Compare 100-hour, 200-hour, and 300-hour teacher training pathways, with unverified details clearly marked."
      />
      <section className="section">
        <Container>
          <SectionHeading eyebrow="Teacher training" title="Structured pathways for deeper study" />
          <div className="stacked-programs">
            {teacherTrainings.map((course) => <ProgramCard course={course} horizontal key={course.slug} />)}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
