/**
 * lib/seo.js — Canonical SEO metadata builder
 * The Hatha Yogashala
 *
 * Single source of truth for generating Next.js metadata objects.
 * Matches ground truth specification: "The Hatha Yogashala — SEO Slugs, Meta Tags & Heading Hierarchy"
 */

import { site } from "@/data/siteData";

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide constants
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  name: "The Hatha Yogashala",
  url: "https://www.hathayogashala.com",
  locale: "en_IN",
  defaultImage:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  defaultImageAlt:
    "Yoga students practicing teacher training alignment at The Hatha Yogashala in Goa",
  defaultImageWidth: 1200,
  defaultImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterSite: "@hathayogashala", // Placeholder handle noted in spec — confirm real handle before launch
};

// ─────────────────────────────────────────────────────────────────────────────
// buildMetadata()
//
// Accepts either:
//   buildMetadata({ title, description, path, image, imageAlt, type, keywords })
// or positional args for backwards-compat shim usage:
//   buildMetadata(title, description, path, image, keywords, imageAlt, type)
// ─────────────────────────────────────────────────────────────────────────────
export function buildMetadata(
  titleOrConfig,
  description,
  path = "/",
  image,
  keywords,
  imageAlt,
  type = "website",
) {
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
      imageAlt,
      type,
    };
  }

  const {
    title: rawTitle,
    description: desc,
    path: pagePath = "/",
    image: pageImage,
    imageAlt: customAlt,
    type: pageType = "website",
    keywords: kw,
  } = config;

  const title = rawTitle ?? SITE.name;
  const rawImage = pageImage || SITE.defaultImage;
  const ogImageUrl = rawImage.startsWith("http")
    ? rawImage
    : new URL(rawImage, SITE.url).toString();
  const ogImageAlt = customAlt || SITE.defaultImageAlt;
  const canonicalUrl = new URL(pagePath, SITE.url).toString();

  const metadata = {
    title: {
      absolute: title,
    },
    description: desc,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: desc,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: SITE.locale,
      type: pageType,
      images: [
        {
          url: ogImageUrl,
          width: SITE.defaultImageWidth,
          height: SITE.defaultImageHeight,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: SITE.twitterCard,
      site: SITE.twitterSite,
      title,
      description: desc,
      images: [ogImageUrl],
    },
  };

  if (kw && (Array.isArray(kw) ? kw.length > 0 : String(kw).trim().length > 0)) {
    metadata.keywords = kw;
  }

  return metadata;
}
