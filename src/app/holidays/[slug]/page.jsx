import { notFound } from "next/navigation";
import HolidayTemplate from "@/components/HolidayTemplate";
import { getHoliday, holidays } from "@/data/holidaysData";
import { pagesMetadata } from "@/data/pages-metadata";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return holidays.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const holiday = getHoliday(slug);
  if (!holiday) return {};

  const meta = pagesMetadata[slug];
  if (meta) {
    return buildMetadata(meta);
  }

  return buildMetadata({
    title: `${holiday.name} | The Hatha Yogashala`,
    description: `Book ${holiday.name} at The Hatha Yogashala in North Goa. ${holiday.tagline} Includes authentic Hatha yoga, Ayurvedic massage, sattvic buffet meals, and beachside accommodation.`,
    path: `/holidays/${holiday.slug}`,
    image: holiday.image,
  });
}

export default async function HolidayDetailPage({ params }) {
  const { slug } = await params;
  const holiday = getHoliday(slug);
  if (!holiday) notFound();

  return <HolidayTemplate holiday={holiday} />;
}
