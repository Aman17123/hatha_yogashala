/**
 * JSON-LD structured data generators — The Hatha Yogashala
 *
 * Implements schema graph per ground truth spec Section 6:
 * - 6.1 Site-Wide Identity Bundle (Organization + LocalBusiness + WebSite)
 * - 6.2 WebPage Node (referencing site-wide @ids)
 * - 6.4 Course Schema & Service Schema
 * - 6.5 TouristTrip Schema, Service Schema & Event Schema
 */

const SITE_URL = "https://www.hathayogashala.com";
const ORG_ID = `${SITE_URL}/#organization`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;
const LOGO_URL = `${SITE_URL}/images/The-Hatha-Yogashala-logo.png`;

// ─────────────────────────────────────────────────────────────────────────────
// 6.1 Site-Wide Identity Bundle — Organization + LocalBusiness + WebSite
// Injected once in the root layout (src/app/layout.jsx)
// ─────────────────────────────────────────────────────────────────────────────
export function siteIdentityGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "The Hatha Yogashala",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": LOGO_ID,
          url: LOGO_URL,
        },
        image: { "@id": LOGO_ID },
        sameAs: [
          "https://www.instagram.com/thehathayogashala/",
          "https://www.facebook.com/profile.php?id=61557638113374",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": LOCAL_BUSINESS_ID,
        name: "The Hatha Yogashala",
        url: SITE_URL,
        image: { "@id": LOGO_ID },
        telephone: "+91-9004290242",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "House No. EHN No 1, Dhaktebag, Querim–Arambol–Agarwada Rd",
          addressLocality: "Pernem",
          addressRegion: "Goa",
          postalCode: "403524",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.instagram.com/thehathayogashala/",
          "https://www.facebook.com/profile.php?id=61557638113374",
        ],
        parentOrganization: { "@id": ORG_ID },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: "The Hatha Yogashala",
        publisher: { "@id": ORG_ID },
        inLanguage: "en-IN",
      },
    ],
  };
}

// Backwards-compat aliases for layout.jsx
export function organizationSchema() {
  return siteIdentityGraphSchema();
}

export function websiteSchema() {
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// 6.2 WebPage Node — for every individual page
// ─────────────────────────────────────────────────────────────────────────────
export function webPageSchema(pageUrl, title, description, aboutId = null) {
  const url = pageUrl.startsWith("http") ? pageUrl : `${SITE_URL}${pageUrl}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description: description,
    isPartOf: { "@id": WEBSITE_ID },
    about: aboutId ? { "@id": aboutId } : { "@id": LOCAL_BUSINESS_ID },
    inLanguage: "en-IN",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 6.4 Course Schema — for /courses/* and /online-pranayama/* course pages
// ─────────────────────────────────────────────────────────────────────────────
export function courseSchema(course) {
  const coursePath = course.slug.startsWith("/")
    ? course.slug
    : course.slug.includes("pranayama")
      ? `/online-pranayama/${course.slug}`
      : `/courses/${course.slug}`;
  const courseUrl = `${SITE_URL}${coursePath}`;
  const courseId = `${courseUrl}#course`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": courseId,
    name: course.name || course.title,
    description: course.description || course.summary,
    provider: { "@id": ORG_ID },
    url: courseUrl,
  };

  if (course.certification) {
    schema.educationalCredentialAwarded = course.certification;
  }

  if (course.courseWorkload) {
    schema.hasCourseInstance = {
      "@type": "CourseInstance",
      courseMode: course.courseMode || "Onsite",
      courseWorkload: course.courseWorkload,
      location: {
        "@type": "Place",
        name: "The Hatha Yogashala",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "House No. EHN No 1, Dhaktebag, Querim–Arambol–Agarwada Rd",
          addressLocality: "Pernem",
          addressRegion: "Goa",
          postalCode: "403524",
          addressCountry: "IN",
        },
      },
    };
  }

  if (course.priceNumeric || (course.pricing && course.pricing.shared)) {
    const low = course.lowPrice || (typeof course.pricing?.shared === "string" ? course.pricing.shared.replace(/[^0-9]/g, "") : null);
    const high = course.highPrice || (typeof course.pricing?.private === "string" ? course.pricing.private.replace(/[^0-9]/g, "") : null);
    
    if (low && high) {
      schema.offers = {
        "@type": "AggregateOffer",
        priceCurrency: course.priceCurrency || "EUR",
        lowPrice: String(low),
        highPrice: String(high),
        availability: "https://schema.org/InStock",
        url: courseUrl,
      };
    } else if (low || course.priceNumeric) {
      schema.offers = {
        "@type": "Offer",
        priceCurrency: course.priceCurrency || "EUR",
        price: String(low || course.priceNumeric),
        availability: "https://schema.org/InStock",
        url: courseUrl,
      };
    }
  }

  return schema;
}

// ─────────────────────────────────────────────────────────────────────────────
// Service Schema — for Ongoing subscriptions & treatments
// ─────────────────────────────────────────────────────────────────────────────
export function serviceSchema({ name, description, path, price, priceCurrency = "USD" }) {
  const url = `${SITE_URL}${path}`;
  const serviceId = `${url}#service`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name,
    description,
    provider: { "@id": ORG_ID },
    url,
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency,
            price: String(price).replace(/[^0-9.]/g, ""),
            availability: "https://schema.org/InStock",
            url,
          },
        }
      : {}),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 6.5 TouristTrip Schema — for Retreat & Holiday detail pages
// ─────────────────────────────────────────────────────────────────────────────
export function retreatSchema(retreat) {
  return touristTripSchema(retreat);
}

export function touristTripSchema(item) {
  const isHoliday = item.slug?.includes("holiday");
  const path = isHoliday ? `/holidays/${item.slug}` : `/retreats/${item.slug}`;
  const tripUrl = `${SITE_URL}${path}`;
  const tripId = `${tripUrl}#trip`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": tripId,
    name: item.name || item.title,
    description: item.description || item.overview,
    provider: { "@id": ORG_ID },
    url: tripUrl,
    touristType: "Wellness travelers, yoga practitioners",
  };

  const numericPrice = item.priceNumeric || (item.pricing?.shared?.price);
  if (numericPrice) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: item.priceCurrency || item.pricing?.shared?.currency || "EUR",
      price: String(numericPrice),
      availability: "https://schema.org/InStock",
      url: tripUrl,
    };
  }

  return schema;
}

// ─────────────────────────────────────────────────────────────────────────────
// Event Schema — for Yoga Festivals
// ─────────────────────────────────────────────────────────────────────────────
export function eventSchema({ name, description, path, startDate, endDate }) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    organizer: { "@id": ORG_ID },
    url,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "The Hatha Yogashala",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "House No. EHN No 1, Dhaktebag, Querim–Arambol–Agarwada Rd",
        addressLocality: "Pernem",
        addressRegion: "Goa",
        postalCode: "403524",
        addressCountry: "IN",
      },
    },
    ...(startDate ? { startDate } : {}),
    ...(endDate ? { endDate } : {}),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Article / BlogPosting schema — for /blog/[slug]
// ─────────────────────────────────────────────────────────────────────────────
export function articleSchema(post) {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${SITE_URL}${post.image}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { "@type": "Organization", name: post.author || "The Hatha Yogashala" },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: postUrl,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Breadcrumb schema — attach on every inner page
// ─────────────────────────────────────────────────────────────────────────────
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ schema
// ─────────────────────────────────────────────────────────────────────────────
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
        text: item.answer || item.description || "",
      },
    })),
  };
}
