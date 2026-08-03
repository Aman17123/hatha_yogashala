import { posts } from "@/data/blogData";
import { courses, retreats } from "@/data/coursesData";
import { absoluteUrl } from "@/data/siteData";

const SITE_LASTMOD = "2026-07-20";

const homepageImages = [
  "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg",
  "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-portrait.webp",
  "/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp",
  "/images/tha_hatha/the-hatha-yogashala-goa-beach-yoga-wheel-pose-students.webp",
  "/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp",
  "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
  "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
  "/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg",
  "/images/tha_hatha/the-hatha-yogashala-goa-yoga-students-group-photo.jpg",
  "/images/tha_hatha/the-hatha-yogashala-goa-group-yoga-class-warrior-pose.jpg",
  "/images/tha_hatha/the-hatha-yogashala-goa-yoga-alliance-certification.jpg",
  "/images/tha_hatha/the-hatha-yogashala-goa-group-yoga-class-sequence-3.webp",
  "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
  "/images/tha_hatha/the-hatha-yogashala-goa-yoga-philosophy-class.jpg",
  "/images/tha_hatha/the-hatha-yogashala-goa-yoga-retreat-2025-session.avif",
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
    { path: "/pricing", lastmod: SITE_LASTMOD },
    { path: "/contact", lastmod: SITE_LASTMOD },
    { path: "/apply", lastmod: SITE_LASTMOD },
    { path: "/courses", lastmod: SITE_LASTMOD },
    { path: "/retreats", lastmod: SITE_LASTMOD },
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
