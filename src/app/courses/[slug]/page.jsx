import { notFound } from "next/navigation";
import CourseTemplate from "@/components/CourseTemplate";
import { courses, getCourse } from "@/data/coursesData";
import { makeMetadata } from "@/data/siteData";

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return makeMetadata(
    course.name,
    `${course.description} Explore the course outline, curriculum, stay, fees, and application details.`,
    `/courses/${course.slug}`,
  );
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  return <CourseTemplate course={course} />;
}
