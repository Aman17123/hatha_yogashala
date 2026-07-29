import { notFound } from "next/navigation";
import RetreatTemplate from "@/components/RetreatTemplate";
import { getRetreat, retreats } from "@/data/coursesData";
import { makeMetadata } from "@/data/siteData";

export function generateStaticParams() {
  return retreats.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) return {};
  return makeMetadata(
    retreat.name,
    `${retreat.description} Explore the proposed itinerary, stay, pricing placeholders, and enquiry details.`,
    `/retreats/${retreat.slug}`,
  );
}

export default async function RetreatPage({ params }) {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) notFound();
  return <RetreatTemplate retreat={retreat} />;
}
