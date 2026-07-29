import { retreats } from "@/data/coursesData";
import { makeMetadata } from "@/data/siteData";
import { Container, FinalCTA, PageHero, RetreatCard, SectionHeading } from "@/components/ui";

export const metadata = makeMetadata(
  "Yoga Retreats in Goa",
  "Compare restorative 3, 5, 7, and 10-day yoga retreat frameworks in Goa.",
  "/retreats",
);

export default function RetreatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Coastal practice"
        title="Yoga Retreats in Goa"
        text="Choose a pace that leaves space for both guided practice and genuine rest."
        image="/images/hero-goa-yoga.png"
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Retreat pathways"
            title="From a short reset to a longer immersion"
            text="Dates, fees, inclusions, and availability remain pending confirmation."
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
