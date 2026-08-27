import { makeMetadata, site } from "@/data/siteData";
import YogaTTCHubPage from "@/components/YogaTTCHubPage";
import { JsonLd } from "@/components/ui";
import { teacherTrainings } from "@/data/coursesData";
import { getYttcPageData, yttcFaqs } from "@/data/yttcHubData";
import { faqSchema } from "@/lib/schema";

export const metadata = makeMetadata(
  "Yoga Teacher Training Goa | Yoga Alliance Certified TTC | The Hatha Yogashala",
  "Join The Hatha Yogashala in Goa for Yoga Alliance certified 100/200/300-Hour Yoga Teacher Training and Aerial Yoga TTC. Hatha, Ashtanga, Vinyasa & Ayurveda — beachside, all-inclusive, 24/7 support.",
  "/yoga-teacher-training-goa",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  [
    "yoga teacher training goa",
    "200 hour YTT Goa",
    "Yoga Alliance certified yoga school Goa",
    "Ashtanga Vinyasa teacher training",
    "aerial yoga teacher training Goa",
    "300 hour yoga TTC",
    "100 hour yoga teacher training goa",
    "yoga school goa",
    "yttc goa",
  ],
);

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Yoga Teacher Training Courses at The Hatha Yogashala, Goa",
  description:
    "Yoga Alliance-approved 100-hour, 200-hour, 300-hour, and Aerial yoga teacher training courses in Goa, India.",
  itemListElement: teacherTrainings.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: course.name,
    url: `${site.url}/courses/${course.slug}`,
    item: {
      "@type": "Course",
      name: course.name,
      description: course.description,
      url: `${site.url}/courses/${course.slug}`,
      provider: {
        "@type": "Organization",
        name: site.name,
        sameAs: site.url,
      },
    },
  })),
};

export default function YogaTeacherTrainingGoaPage() {
  const pageData = getYttcPageData();
  const faqSchemaData = faqSchema(yttcFaqs);

  return (
    <>
      <JsonLd data={schemaItemList} />
      {faqSchemaData && <JsonLd data={faqSchemaData} />}
      <YogaTTCHubPage page={pageData} />
    </>
  );
}
