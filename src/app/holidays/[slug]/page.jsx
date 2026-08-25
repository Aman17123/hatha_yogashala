import { notFound } from "next/navigation";
import HolidayTemplate from "@/components/HolidayTemplate";
import { getHoliday, holidays } from "@/data/holidaysData";
import { makeMetadata } from "@/data/siteData";

export const dynamicParams = false;

export function generateStaticParams() {
  return holidays.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const holiday = getHoliday(slug);
  if (!holiday) return {};

  return makeMetadata(
    `${holiday.name} in Goa | The Hatha Yogashala`,
    `Book ${holiday.name} at The Hatha Yogashala in North Goa. ${holiday.tagline} Includes authentic Hatha yoga, Ayurvedic massage, sattvic buffet meals, and beachside accommodation.`,
    `/holidays/${holiday.slug}`,
    holiday.image
  );
}

export default async function HolidayDetailPage({ params }) {
  const { slug } = await params;
  const holiday = getHoliday(slug);
  if (!holiday) notFound();

  return <HolidayTemplate holiday={holiday} />;
}
