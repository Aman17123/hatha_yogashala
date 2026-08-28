import { buildMetadata } from "@/lib/seo";
import { pagesMetadata } from "@/data/pages-metadata";
import { webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui";
import HomePage from "@/components/HomePage";

export const metadata = buildMetadata(pagesMetadata.home);

export default function Home() {
  const pageSchema = webPageSchema(
    "/",
    pagesMetadata.home.title,
    pagesMetadata.home.description,
  );

  return (
    <>
      <JsonLd data={pageSchema} />
      <HomePage />
    </>
  );
}
