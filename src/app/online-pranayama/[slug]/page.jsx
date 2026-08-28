import { notFound } from "next/navigation";
import PranayamaTemplate from "@/components/PranayamaTemplate";
import { getPranayamaCourse, pranayamaCourses } from "@/data/pranayamaData";
import { pagesMetadata } from "@/data/pages-metadata";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return pranayamaCourses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getPranayamaCourse(slug);
  if (!course) return {};

  const meta = pagesMetadata[slug];
  if (meta) {
    return buildMetadata(meta);
  }

  return buildMetadata({
    title: course.seo.title,
    description: course.seo.description,
    path: `/online-pranayama/${course.slug}`,
    image: course.heroImage,
    keywords: course.seo.keywords,
  });
}

export default async function PranayamaDetailPage({ params }) {
  const { slug } = await params;
  const course = getPranayamaCourse(slug);
  if (!course) notFound();

  return <PranayamaTemplate course={course} />;
}
