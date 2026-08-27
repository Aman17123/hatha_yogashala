import { posts } from "@/data/blogData";
import { courses, retreats } from "@/data/coursesData";
import { holidays } from "@/data/holidaysData";
import { pranayamaCourses } from "@/data/pranayamaData";
import { absoluteUrl } from "@/data/siteData";

const SITE_LASTMOD = "2026-07-20";

const homepageImages = [
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  "/images/tha_hatha/Pradeep-Singh.png",
  "/images/tha_hatha/The_Hatha_Yogashala-founder-Goa.webp",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
  "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-04.webp",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-04.webp",
  "/images/tha_hatha/The-hatha-yogashala--Certificate.webp",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
  "/images/accomodation/the-hatha-yogashala-arambol-goa-cottage-bedroom-interior-01.webp",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-01.webp",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-02.webp",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-certificate-presentation-teacher-training-01.webp",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-02.webp",
];

function toImageEntries(images) {
  return images.map((url) => ({
    url,
    title: "The Hatha Yogashala — Yoga School in Goa",
  }));
}

export default function sitemap() {
  const staticRoutes = [
    { path: "", lastmod: SITE_LASTMOD, images: homepageImages },
    { path: "/about", lastmod: SITE_LASTMOD },
    { path: "/teachers", lastmod: SITE_LASTMOD },
    { path: "/certification", lastmod: SITE_LASTMOD },
    { path: "/accommodation", lastmod: SITE_LASTMOD },
    {
      path: "/gallery",
      lastmod: SITE_LASTMOD,
      images: homepageImages,
    },
    { path: "/contact", lastmod: SITE_LASTMOD },
    { path: "/apply", lastmod: SITE_LASTMOD },
    { path: "/courses", lastmod: SITE_LASTMOD },
    { path: "/retreats", lastmod: SITE_LASTMOD },
    { path: "/yoga-teacher-training", lastmod: SITE_LASTMOD },
    { path: "/holidays", lastmod: SITE_LASTMOD },
    { path: "/pranayama", lastmod: SITE_LASTMOD },
    { path: "/about/goa", lastmod: SITE_LASTMOD },
    { path: "/blog", lastmod: SITE_LASTMOD },
    { path: "/privacy-policy", lastmod: SITE_LASTMOD },
    { path: "/terms", lastmod: SITE_LASTMOD },
    { path: "/payment-policy", lastmod: SITE_LASTMOD },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path || "/"),
      lastModified: route.lastmod,
      ...(route.images
        ? {
            images: toImageEntries(route.images),
          }
        : {}),
    })),
    ...courses.map((course) => ({
      url: absoluteUrl(`/courses/${course.slug}`),
      lastModified: SITE_LASTMOD,
      ...(course.image
        ? {
            images: toImageEntries([course.image]),
          }
        : {}),
    })),
    ...retreats.map((retreat) => ({
      url: absoluteUrl(`/retreats/${retreat.slug}`),
      lastModified: SITE_LASTMOD,
      ...(retreat.image
        ? {
            images: toImageEntries([retreat.image]),
          }
        : {}),
    })),
    ...holidays.map((holiday) => ({
      url: absoluteUrl(`/holidays/${holiday.slug}`),
      lastModified: SITE_LASTMOD,
      ...(holiday.image
        ? {
            images: toImageEntries([holiday.image]),
          }
        : {}),
    })),
    ...pranayamaCourses.map((pranayama) => ({
      url: absoluteUrl(`/pranayama/${pranayama.slug}`),
      lastModified: SITE_LASTMOD,
      ...(pranayama.heroImage
        ? {
            images: toImageEntries([pranayama.heroImage]),
          }
        : {}),
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.updated || SITE_LASTMOD,
      ...(post.image
        ? {
            images: toImageEntries([post.image]),
          }
        : {}),
    })),
  ];
}
