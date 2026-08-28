import { notFound } from "next/navigation";
import RetreatTemplate from "@/components/RetreatTemplate";
import { getRetreat, retreats } from "@/data/coursesData";
import { getRetreatPageData } from "@/data/retreatData";
import { pagesMetadata } from "@/data/pages-metadata";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return retreats.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) return {};
  const meta = pagesMetadata[slug];
  if (meta) {
    return buildMetadata(meta);
  }
  const page = getRetreatPageData(retreat);
  return buildMetadata({
    title: `${page.name} | The Hatha Yogashala`,
    description: `Plan the ${page.name}: daily yoga, meditation, sattvic meals, beachside accommodation, dates, prices and booking.`,
    path: `/retreats/${retreat.slug}`,
    image: retreat.image,
  });
}

export default async function RetreatPage({ params }) {
  const { slug } = await params;
  const retreat = getRetreat(slug);
  if (!retreat) notFound();

  const page = getRetreatPageData(retreat);

  return <RetreatTemplate retreat={retreat} page={page} />;
}
