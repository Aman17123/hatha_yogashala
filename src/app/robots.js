import { site } from "@/data/siteData";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
