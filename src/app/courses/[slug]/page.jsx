import { notFound } from "next/navigation";
import YTTCPage from "@/components/YTTCPage";
import { JsonLd } from "@/components/ui";
import { courses, getCourse } from "@/data/coursesData";
import { pagesMetadata } from "@/data/pages-metadata";
import { buildMetadata } from "@/lib/seo";
import { courseSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses
    .filter((c) => c.published !== false)
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  const meta = pagesMetadata[slug];
  if (meta) {
    return buildMetadata(meta);
  }
  const description =
    course.description ||
    `Review the curriculum, prerequisites, schedule, accommodation, fees, and application process for ${course.name} at The Hatha Yogashala.`;
  return buildMetadata({
    title: `${course.name} | The Hatha Yogashala`,
    description,
    path: `/courses/${course.slug}`,
    image: course.image,
  });
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course || course.published === false) notFound();

  const meta = pagesMetadata[slug];
  const pageSchema = webPageSchema(
    `/courses/${course.slug}`,
    meta?.title || `${course.name} | The Hatha Yogashala`,
    meta?.description || course.description,
  );
  const schema = courseSchema(course);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Yoga Teacher Training", url: "/yoga-teacher-training-goa" },
    { name: course.name, url: `/courses/${course.slug}` },
  ]);
  const faq = faqSchema(course.faq);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbs} />
      {faq && <JsonLd data={faq} />}
      <YTTCPage course={course} />
    </>
  );
}
