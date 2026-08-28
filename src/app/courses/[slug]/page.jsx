import { notFound } from "next/navigation";
import YTTCPage from "@/components/YTTCPage";
import { JsonLd } from "@/components/ui";
import { courses, getCourse } from "@/data/coursesData";
import { makeMetadata } from "@/data/siteData";
import { courseSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

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
  const description =
    course.description ||
    `Review the curriculum, prerequisites, schedule, accommodation, fees, and application process for ${course.name} at The Hatha Yogashala.`;
  return makeMetadata(
    course.name,
    description,
    `/courses/${course.slug}`,
    course.image,
  );
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course || course.published === false) notFound();

  const schema = courseSchema(course);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Yoga Teacher Training", url: "/courses" },
    { name: course.name, url: `/courses/${course.slug}` },
  ]);
  const faq = faqSchema(course.faq);

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbs} />
      {faq && <JsonLd data={faq} />}
      <YTTCPage course={course} />
    </>
  );
}
