import { pageMetadata } from "@/data/siteData";
import YogaTTCHubPage from "@/components/YogaTTCHubPage";
import { getYttcPageData } from "@/data/yttcHubData";

export const metadata = pageMetadata("courses");

export default function CoursesPage() {
  const pageData = getYttcPageData();
  return <YogaTTCHubPage page={pageData} />;
}
