import { site } from "@/data/siteData";
/**
 * JSON-LD structured data generators — The Hatha Yogashala
 *
 * Why this matters for GEO specifically: AI answer engines (ChatGPT,
 * Perplexity, Google AI Overviews) lean heavily on structured,
 * extractable facts rather than parsing prose. A `Course` with a real
 * `provider`, `hasCourseInstance`, and `offers.price` is far more
 * likely to get cited/quoted than a paragraph saying "fee to be
 * confirmed." So: wire this up now, but fill in real values
 * (price, dates, address) as they're confirmed — schema full of
 * placeholder values can trigger Google Search Console rich-result
 * warnings, so keep [VERIFY]'d fields OUT of schema.org output until
 * they're real. Below, unverified fields are simply omitted rather
 * than included with placeholder text.
 */

// ---------------------------------------------------------------------
// Course schema — for /courses/[slug]
// ---------------------------------------------------------------------
export function courseSchema(course) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      sameAs: site.url,
    },
    url: `${site.url}/courses/${course.slug}`,
  };

  // Only attach hasCourseInstance once real dates/mode are confirmed —
  // don't ship a placeholder startDate.
  if (course.courseDates && course.courseDates.length > 0) {
    schema.hasCourseInstance = course.courseDates.map((instance) => ({
      "@type": "CourseInstance",
      courseMode: "Onsite",
      startDate: instance.startDate,
      endDate: instance.endDate,
      location: {
        "@type": "Place",
        name: site.name,
        address: site.contact.address,
      },
    }));
  }

  // Only attach offers once a real numeric price exists — "Fee to be
  // confirmed" is not a valid schema.org price and can trigger a GSC error.
  if (course.priceNumeric) {
    schema.offers = {
      "@type": "Offer",
      price: course.priceNumeric,
      priceCurrency: course.priceCurrency || "INR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/courses/${course.slug}`,
    };
  }

  return schema;
}

// ---------------------------------------------------------------------
// Retreat schema — modelled as a TouristTrip (closer fit than Course,
// since retreats are explicitly NOT a certification/teaching product)
// ---------------------------------------------------------------------
export function retreatSchema(retreat) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: retreat.name,
    description: retreat.overview,
    touristType: "Yoga and wellness travellers",
    provider: {
      "@type": "Organization",
      name: site.name,
      sameAs: site.url,
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: retreat.itinerary.map(([day, activity], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: day,
        description: activity,
      })),
    },
  };

  if (retreat.priceNumeric) {
    schema.offers = {
      "@type": "Offer",
      price: retreat.priceNumeric,
      priceCurrency: retreat.priceCurrency || "INR",
      availability: "https://schema.org/InStock",
    };
  }

  return schema;
}

// ---------------------------------------------------------------------
// Breadcrumb schema — attach on every course/retreat page
// ---------------------------------------------------------------------
export function breadcrumbSchema(items) {
  // items: [{ name: "Home", url: "/" }, { name: "Yoga TTC", url: "/courses" }, { name: "200-Hour", url: "/courses/200-hour..." }]
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}

// ---------------------------------------------------------------------
// FAQ schema — only attach if the page actually renders visible FAQ
// content (Google penalizes schema that doesn't match on-page content)
// ---------------------------------------------------------------------
export function faqSchema(faqItems) {
  if (!faqItems || faqItems.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Usage in app/courses/[slug]/page.jsx:
 *
 *   import { courseSchema, breadcrumbSchema } from "@/lib/schema";
 *
 *   export default function CoursePage({ params }) {
 *     const course = getCourse(params.slug);
 *     const schema = courseSchema(course);
 *     const breadcrumbs = breadcrumbSchema([
 *       { name: "Home", url: "/" },
 *       { name: "Yoga Teacher Training", url: "/courses" },
 *       { name: course.name, url: `/courses/${course.slug}` },
 *     ]);
 *
 *     return (
 *       <>
 *         <script
 *           type="application/ld+json"
 *           dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 *         />
 *         <script
 *           type="application/ld+json"
 *           dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
 *         />
 *         { ...page content... }
 *       </>
 *     );
 *   }
 *
 * Validate every schema block at https://validator.schema.org before
 * deploying — do this per page type (course, retreat), not just once.
 */
