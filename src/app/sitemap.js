import { posts } from "@/data/blogData";
import { courses, retreats } from "@/data/coursesData";
import { absoluteUrl } from "@/data/siteData";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/teachers",
    "/certification",
    "/accommodation",
    "/gallery",
    "/pricing",
    "/contact",
    "/apply",
    "/courses",
    "/retreats",
    "/blog",
    "/privacy-policy",
    "/terms",
    "/payment-policy",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path || "/"),
      ...(path === "" || path === "/gallery"
        ? {
            images: [
              absoluteUrl("/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg"),
              absoluteUrl("/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-portrait.webp"),
              absoluteUrl("/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp"),
              absoluteUrl("/images/tha_hatha/the-hatha-yogashala-goa-beach-yoga-wheel-pose-students.webp"),
            ],
          }
        : {}),
    })),
    ...courses.map((course) => ({
      url: absoluteUrl(`/courses/${course.slug}`),
      images: [absoluteUrl(course.image)],
    })),
    ...retreats.map((retreat) => ({
      url: absoluteUrl(`/retreats/${retreat.slug}`),
      images: [absoluteUrl(retreat.image)],
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.updated,
      images: [absoluteUrl(post.image)],
    })),
  ];
}
