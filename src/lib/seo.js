/**
 * lib/seo.js — Canonical SEO metadata builder
 * The Hatha Yogashala
 *
 * Single source of truth for generating Next.js metadata objects.
 *
 * Usage (static page):
 *   import { buildMetadata } from "@/lib/seo";
 *   import { pagesMetadata } from "@/data/pages-metadata";
 *   export const metadata = buildMetadata(pagesMetadata.home);
 *
 * Usage (dynamic page — generateMetadata):
 *   import { buildMetadata } from "@/lib/seo";
 *   export async function generateMetadata({ params }) {
 *     const { slug } = await params;
 *     const item = getData(slug);
 *     return buildMetadata({
 *       title: item.name,
 *       description: item.excerpt,
 *       path: `/section/${item.slug}`,
 *       image: item.image,
 *     });
 *   }
 */

import { site } from "@/data/siteData";

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide constants — single place to change domain, name, defaults
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  name: site.name,
  url: site.url,
  locale: "en_IN",
  defaultImage:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  defaultImageAlt:
    "The Hatha Yogashala — yoga teacher training and retreat school in North Goa, Goa",
  defaultImageWidth: 1792,
  defaultImageHeight: 896,
  twitterCard: "summary_large_image",
};

// ─────────────────────────────────────────────────────────────────────────────
// buildMetadata()
//
// Accepts either:
//   buildMetadata({ title, description, path, image, imageAlt, type, keywords })
// or positional args for backwards-compat shim usage:
//   buildMetadata(title, description, path, image, keywords)
//
// Returns a Next.js metadata object (title, description, alternates,
// openGraph, twitter, keywords).
// ─────────────────────────────────────────────────────────────────────────────
export function buildMetadata(
  titleOrConfig,
  description,
  path = "/",
  image,
  keywords,
) {
  // Allow both object-style and positional-arg-style calls
  let config;
  if (titleOrConfig && typeof titleOrConfig === "object") {
    config = titleOrConfig;
  } else {
    config = {
      title: titleOrConfig,
      description,
      path,
      image,
      keywords,
    };
  }

  const {
    title: rawTitle,
    description: desc,
    path: pagePath = "/",
    image: pageImage,
    imageAlt,
    type = "website",
    keywords: kw,
  } = config;

  const title = rawTitle ?? SITE.name;
  const ogImage = pageImage || SITE.defaultImage;
  const ogImageAlt = imageAlt || SITE.defaultImageAlt;
  const canonicalUrl = new URL(pagePath, SITE.url).toString();

  const metadata = {
    title,
    description: desc,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description: desc,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      images: [
        {
          url: ogImage,
          width: SITE.defaultImageWidth,
          height: SITE.defaultImageHeight,
          alt: ogImageAlt,
        },
      ],
    },

    twitter: {
      card: SITE.twitterCard,
      title,
      description: desc,
      images: [ogImage],
    },
  };

  // Only include keywords when provided (avoid empty array in output)
  if (kw && (Array.isArray(kw) ? kw.length > 0 : kw.trim().length > 0)) {
    metadata.keywords = kw;
  }

  return metadata;
}
