import { Gallery } from "@/components/Interactive";
import {
  Container,
  FinalCTA,
  JsonLd,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { absoluteUrl, galleryItems, pageMetadata, site } from "@/data/siteData";

export const metadata = pageMetadata("gallery");

export default function GalleryPage() {
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Hatha Yogashala Yoga School Gallery – Goa",
    description:
      "Photos of yoga teacher training, meditation, retreats, accommodation and coastal practice at Hatha Yogashala in Querim, North Goa.",
    url: absoluteUrl("/gallery"),
    creator: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    image: galleryItems.map((item) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(item.src),
      name: item.alt,
      caption: item.caption,
    })),
  };

  return (
    <>
      <JsonLd data={imageSchema} />
      <PageHero
        eyebrow="Visual journal"
        title="Yoga School Gallery in Goa"
        text="Explore yoga practice, meditation, residential space, retreats, and Goa’s coastal setting near Arambol through a balanced visual journal."
        image="/images/tha_hatha/the-hatha-yogashala-goa-yoga-students-group-photo.jpg"
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Practice & place"
            title="Explore life at the Goa yoga school"
            text="From Hatha teacher training classes and morning meditation to beach sessions, retreat accommodation and graduation — every image opens in a lightweight, keyboard-accessible viewer."
          />
          <Gallery items={galleryItems} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
