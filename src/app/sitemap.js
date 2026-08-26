import { posts } from "@/data/blogData";
import { courses, retreats } from "@/data/coursesData";
import { holidays } from "@/data/holidaysData";
import { absoluteUrl } from "@/data/siteData";

const SITE_LASTMOD = "2026-07-20";

const homepageImages = [
  "/images/tha_hatha/the-hatha-yogashala-yoga-teacher-training-in-goa.webp",
  "/images/tha_hatha/Pradeep-Singh.png",
  "/images/tha_hatha/The_Hatha_Yogashala-founder-Goa.webp",
  "/images/tha_hatha/pranayama-meditation-goa.png",
  "/images/tha_hatha/the-hatha-yogashala-yoga-in-goa-india.webp",
  "/images/tha_hatha/the-hatha-yogashala-yoga-school-campus-goa.webp",
  "/images/tha_hatha/the-hatha-yogashala-200-hour-yoga-teacher-training-goa.webp",
  "/images/tha_hatha/the-hatha-yogashala-group-yoga-class-downward-dog-goa.webp",
  "/images/tha_hatha/The-hatha-yogashala--Certificate.webp",
  "/images/tha_hatha/the-hatha-yogashala-yoga-hall-with-mats-goa.webp",
  "/images/tha_hatha/the-hatha-yogashala-private-room-accommodation-goa.webp",
  "/images/tha_hatha/the-hatha-yogashala-sattvic-yogic-meal-goa.webp",
  "/images/tha_hatha/the-hatha-yogashala-chair-assisted-restorative-yoga-goa.webp",
  "/images/tha_hatha/the-hatha-yogashala-yoga-instructor-certification-goa.webp",
  "/images/tha_hatha/the-hatha-yogashala-5-day-awaken-align-yoga-retreat-goa.webp",
];

function toImageEntries(images) {
  return images.map((url) => ({
    url,
    title: "Hatha Yogashala — Yoga School in Goa",
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
        ? { images: toImageEntries(route.images) }
        : {}),
    })),
    ...courses.map((course) => ({
      url: absoluteUrl(`/courses/${course.slug}`),
      lastModified: SITE_LASTMOD,
      images: [
        {
          url: absoluteUrl(course.image),
          title: course.name,
        },
      ],
    })),
    ...retreats.map((retreat) => ({
      url: absoluteUrl(`/retreats/${retreat.slug}`),
      lastModified: SITE_LASTMOD,
      images: [
        {
          url: absoluteUrl(retreat.image),
          title: retreat.name,
        },
      ],
    })),
    ...holidays.map((holiday) => ({
      url: absoluteUrl(`/holidays/${holiday.slug}`),
      lastModified: SITE_LASTMOD,
      images: [
        {
          url: absoluteUrl(holiday.image),
          title: holiday.name,
        },
      ],
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.updated,
      images: [
        {
          url: absoluteUrl(post.image),
          title: post.title,
        },
      ],
    })),
  ];
}
