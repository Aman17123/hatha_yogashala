import { notFound } from "next/navigation";
import CourseTemplate from "@/components/CourseTemplate";
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
  return makeMetadata(
    course.name,
    `Review the curriculum, prerequisites, schedule, accommodation, fees, and application process for ${course.name} at The Hatha Yogashala.`,
    `/courses/${course.slug}`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
      <CourseTemplate course={course} />
    </>
  );
}
