import YogaTTCHubPage from "@/components/YogaTTCHubPage";
import { JsonLd } from "@/components/ui";
import { teacherTrainings } from "@/data/coursesData";
import { getYttcPageData } from "@/data/yttcHubData";
import { makeMetadata, site } from "@/data/siteData";

export const metadata = makeMetadata(
  "Yoga Teacher Training in Goa — 100, 200 & 300-Hour TTC",
  "Join Hatha Yogashala's Yoga Alliance-approved 100-hour, 200-hour & 300-hour yoga teacher training in Goa. Residential, all-inclusive, beachside in Querim, North Goa. Monthly start dates.",
  "/yoga-teacher-training",
  "/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg",
  [
    "yoga teacher training goa",
    "yoga TTC goa",
    "200 hour yoga teacher training goa",
    "100 hour yoga teacher training goa",
    "300 hour yoga teacher training goa",
    "yoga teacher training north goa",
    "yoga alliance certified teacher training goa",
    "best yoga teacher training goa",
    "yoga school goa",
    "yttc goa",
  ],
);

const page = getYttcPageData();

/* ────────────────────────────────────────────────────
   JSON-LD: aggregate Course schema + ItemList for the
   three individual course pages. This is what AI answer
   engines (Perplexity, Google AI Overviews, ChatGPT
   plugins) extract to cite specific facts.
──────────────────────────────────────────────────── */
const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Yoga Teacher Training Courses at Hatha Yogashala, Goa",
  description:
    "Yoga Alliance-approved 100-hour, 200-hour, and 300-hour yoga teacher training courses in Goa, India.",
  itemListElement: teacherTrainings.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: course.name,
    url: `${site.url}/courses/${course.slug}`,
    item: {
      "@type": "Course",
      name: course.name,
      description: course.description,
      url: `${site.url}/courses/${course.slug}`,
      provider: {
        "@type": "Organization",
        name: site.name,
        sameAs: site.url,
      },
    },
  })),
};

const schemaAggregateCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Yoga Teacher Training in Goa",
  description: page.heroTagline,
  provider: {
    "@type": "Organization",
    name: site.name,
    sameAs: site.url,
  },
  url: `${site.url}/yoga-teacher-training`,
  courseMode: "Onsite",
  educationalLevel: ["Beginner", "Intermediate", "Advanced"],
  offers: {
    "@type": "Offer",
    price: page.pricing.shared.price,
    priceCurrency: page.pricing.shared.currency,
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: page.rating,
    reviewCount: page.ratingCount,
    bestRating: 5,
  },
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: page.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const schemaBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Yoga Teacher Training in Goa",
      item: `${site.url}/yoga-teacher-training`,
    },
  ],
};

export default function YogaTeacherTrainingPage() {
  return (
    <>
      <JsonLd data={schemaItemList} />
      <JsonLd data={schemaAggregateCourse} />
      <JsonLd data={schemaFaq} />
      <JsonLd data={schemaBreadcrumbs} />
      <YogaTTCHubPage page={page} />
    </>
  );
}
