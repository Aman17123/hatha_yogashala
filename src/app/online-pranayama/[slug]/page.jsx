import { notFound } from "next/navigation";
import PranayamaTemplate from "@/components/PranayamaTemplate";
import { getPranayamaCourse, pranayamaCourses } from "@/data/pranayamaData";
import { makeMetadata } from "@/data/siteData";

export const dynamicParams = false;

export function generateStaticParams() {
  return pranayamaCourses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getPranayamaCourse(slug);
  if (!course) return {};

  return makeMetadata(
    course.seo.title,
    course.seo.description,
    `/online-pranayama/${course.slug}`,
    course.heroImage,
    course.seo.keywords.join(", "),
  );
}

export default async function PranayamaDetailPage({ params }) {
  const { slug } = await params;
  const course = getPranayamaCourse(slug);
  if (!course) notFound();

  return <PranayamaTemplate course={course} />;
}
