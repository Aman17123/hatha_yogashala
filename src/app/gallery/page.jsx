import { Gallery } from "@/components/Interactive";
import { Container, FinalCTA, PageHero, SectionHeading } from "@/components/ui";
import { galleryItems, makeMetadata } from "@/data/siteData";

export const metadata = makeMetadata(
  "Yoga School Gallery in Goa",
  "Browse editorial placeholders for yoga training, retreats, accommodation, meals, excursions, and student life in Goa.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual journal"
        title="Yoga School Gallery"
        text="Generated editorial placeholders show the intended gallery structure until original school photography is supplied."
        image="/images/hero-goa-yoga.png"
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Practice & place"
            title="Explore the Goa experience"
            text="Every image is local and optimized through Next.js. Replace it with approved photography using the same file paths."
          />
          <Gallery items={galleryItems} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
