import { Gallery } from "@/components/Interactive";
import { Container, FinalCTA, PageHero, SectionHeading } from "@/components/ui";
import { galleryItems, pageMetadata } from "@/data/siteData";

export const metadata = pageMetadata("gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual journal"
        title="Yoga School Gallery"
        text="Explore yoga practice, meditation, residential space, retreats, and Goa’s coastal setting through a balanced visual journal."
        image="/images/tha_hatha/the-hatha-yogashala-goa-yoga-students-group-photo.jpg"
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Practice & place"
            title="Explore the Goa experience"
            text="Every image is optimized with Next.js, uses a deliberate aspect ratio, and opens in a lightweight keyboard-accessible viewer."
          />
          <Gallery items={galleryItems} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
