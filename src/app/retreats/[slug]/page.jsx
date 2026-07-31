import { notFound } from "next/navigation";
import RetreatTemplate from "@/components/RetreatTemplate";
import { getRetreat, retreats } from "@/data/coursesData";
import { getRetreatPageData } from "@/data/retreatData";
import { makeMetadata } from "@/data/siteData";

export const dynamicParams = false;

export function generateStaticParams() {
  return retreats.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) return {};
  const page = getRetreatPageData(retreat.days);
  return makeMetadata(
    page.name,
    `Plan the ${page.name}: daily yoga, meditation, sattvic meals, beachside accommodation, dates, prices and booking.`,
    `/retreats/${retreat.slug}`,
    retreat.image,
  );
}

export default async function RetreatPage({ params }) {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) notFound();

  const page = getRetreatPageData(retreat.days);

  return <RetreatTemplate retreat={retreat} page={page} />;
}
