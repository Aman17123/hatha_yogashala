import { Gallery } from "@/components/Interactive";
import {
  Container,
  FinalCTA,
  JsonLd,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { absoluteUrl, galleryItems, site } from "@/data/siteData";
import { pagesMetadata } from "@/data/pages-metadata";
import { buildMetadata } from "@/lib/seo";
import { ORG_ID, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata(pagesMetadata.gallery);

export default function GalleryPage() {
  const pageSchema = webPageSchema(
    "/gallery",
    pagesMetadata.gallery.title,
    pagesMetadata.gallery.description,
  );

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "The Hatha Yogashala Yoga School Gallery – Goa",
    description:
      "Photos of yoga teacher training, meditation, retreats, accommodation and coastal practice at The Hatha Yogashala in Querim, North Goa.",
    url: absoluteUrl("/gallery"),
    creator: {
      "@type": "Organization",
      "@id": ORG_ID,
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
      <JsonLd data={pageSchema} />
      <JsonLd data={imageSchema} />
      <PageHero
        eyebrow="Visual journal"
        title="Life at The Hatha Yogashala — Photo Gallery"
        text="Explore yoga practice, meditation, residential space, retreats, and Goa’s coastal setting near Arambol through a balanced visual journal."
        image="/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp"
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
