import { buildMetadata } from "@/lib/seo";
import { pagesMetadata } from "@/data/pages-metadata";
import HomePage from "@/components/HomePage";

export const metadata = buildMetadata(pagesMetadata.home);

export default function Home() {
  return <HomePage />;
}

