import { retreats } from "@/data/coursesData";
import { pageMetadata } from "@/data/siteData";
import { Container, FinalCTA, PageHero, RetreatCard, SectionHeading } from "@/components/ui";

export const metadata = pageMetadata("retreats");

export default function RetreatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Coastal practice"
        title="Yoga Retreats in Goa"
        text="Choose a pace that leaves space for both guided practice and genuine rest."
        image="/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp"
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Retreat pathways"
            title="From a short reset to a longer immersion"
            text="Each retreat pairs twice-daily guided practice with curated meals, accommodation, and space to simply be."
          />
          <div className="retreat-grid">
            {retreats.map((retreat) => <RetreatCard retreat={retreat} key={retreat.slug} />)}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
