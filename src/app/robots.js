import { site } from "@/data/siteData";

export default function robots() {
  if (!site.hasProductionUrl) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      sitemap: `${site.url}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/preview/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
