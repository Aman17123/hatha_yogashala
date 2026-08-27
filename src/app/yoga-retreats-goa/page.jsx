import { makeMetadata, site } from "@/data/siteData";
import RetreatsHubPage from "@/components/RetreatsHubPage";
import { JsonLd } from "@/components/ui";
import { retreats } from "@/data/coursesData";
import { retreatFaqs } from "@/data/retreatData";
import { faqSchema } from "@/lib/schema";

export const metadata = makeMetadata(
  "Yoga Retreats in Goa | 3, 5 & 7 Day Wellness Retreats | The Hatha Yogashala",
  "Book a 3, 5, or 7-day yoga retreat in Goa with The Hatha Yogashala. Daily yoga, meditation, Ayurveda, sound healing, ice baths, and beachside living — all-inclusive.",
  "/yoga-retreats-goa",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
  [
    "yoga retreat Goa",
    "3 day yoga retreat Goa",
    "5 day yoga retreat Goa",
    "7 day wellness retreat Goa",
    "Kundalini Iyengar retreat Goa",
    "Ayurvedic massage Goa",
    "aerial yoga retreat Goa",
    "yoga festival Goa",
  ],
);

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Yoga & Wellness Retreats at The Hatha Yogashala, Goa",
  description:
    "Short-format yoga retreats on the beaches of North Goa including 3-day, 5-day, 7-day, Kundalini & Iyengar, and Aerial yoga retreats.",
  itemListElement: retreats.map((retreat, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: retreat.name,
    url: `${site.url}/retreats/${retreat.slug}`,
    item: {
      "@type": "TouristTrip",
      name: retreat.name,
      description: retreat.description,
      url: `${site.url}/retreats/${retreat.slug}`,
      provider: {
        "@type": "Organization",
        name: site.name,
        sameAs: site.url,
      },
    },
  })),
};

export default function YogaRetreatsGoaPage() {
  const faqSchemaData = faqSchema(retreatFaqs);

  return (
    <>
      <JsonLd data={schemaItemList} />
      {faqSchemaData && <JsonLd data={faqSchemaData} />}
      <RetreatsHubPage />
    </>
  );
}
