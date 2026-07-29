import { posts } from "@/data/blogData";
import { courses, retreats } from "@/data/coursesData";
import { site } from "@/data/siteData";

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
      url: `${site.url}${path}`,
      changeFrequency: path === "/blog" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
      ...(path === "" || path === "/gallery"
        ? { images: [`${site.url}/images/hero-goa-yoga.png`, `${site.url}/images/course-goa-yoga.png`] }
        : {}),
    })),
    ...courses.map((course) => ({
      url: `${site.url}/courses/${course.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${site.url}${course.image}`],
    })),
    ...retreats.map((retreat) => ({
      url: `${site.url}/retreats/${retreat.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${site.url}${retreat.image}`],
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: post.updated,
      changeFrequency: "monthly",
      priority: 0.6,
      images: [`${site.url}${post.image}`],
    })),
  ];
}
