import RetreatsHubPage from "@/components/RetreatsHubPage";
import { JsonLd } from "@/components/ui";
import { retreats } from "@/data/coursesData";
import { retreatFaqs } from "@/data/retreatData";
import { pagesMetadata } from "@/data/pages-metadata";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata(pagesMetadata.yogaRetreats);

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
    url: `https://www.hathayogashala.com/retreats/${retreat.slug}`,
    item: {
      "@type": "TouristTrip",
      name: retreat.name,
      description: retreat.description,
      url: `https://www.hathayogashala.com/retreats/${retreat.slug}`,
      provider: {
        "@type": "Organization",
        "@id": "https://www.hathayogashala.com/#organization",
        name: "The Hatha Yogashala",
      },
    },
  })),
};

export default function YogaRetreatsGoaPage() {
  const faqSchemaData = faqSchema(retreatFaqs);
  const pageSchema = webPageSchema(
    "/yoga-retreats-goa",
    pagesMetadata.yogaRetreats.title,
    pagesMetadata.yogaRetreats.description,
  );

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={schemaItemList} />
      {faqSchemaData && <JsonLd data={faqSchemaData} />}
      <RetreatsHubPage />
    </>
  );
}
