import YogaTTCHubPage from "@/components/YogaTTCHubPage";
import { JsonLd } from "@/components/ui";
import { teacherTrainings } from "@/data/coursesData";
import { getYttcPageData, yttcFaqs } from "@/data/yttcHubData";
import { pagesMetadata } from "@/data/pages-metadata";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata(pagesMetadata.yogaTeacherTraining);

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
    url: `https://www.hathayogashala.com/courses/${course.slug}`,
    item: {
      "@type": "Course",
      name: course.name,
      description: course.description,
      url: `https://www.hathayogashala.com/courses/${course.slug}`,
      provider: {
        "@type": "Organization",
        "@id": "https://www.hathayogashala.com/#organization",
        name: "The Hatha Yogashala",
      },
    },
  })),
};

export default function YogaTeacherTrainingGoaPage() {
  const pageData = getYttcPageData();
  const faqSchemaData = faqSchema(yttcFaqs);
  const pageSchema = webPageSchema(
    "/yoga-teacher-training-goa",
    pagesMetadata.yogaTeacherTraining.title,
    pagesMetadata.yogaTeacherTraining.description,
  );

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={schemaItemList} />
      {faqSchemaData && <JsonLd data={faqSchemaData} />}
      <YogaTTCHubPage page={pageData} />
    </>
  );
}
