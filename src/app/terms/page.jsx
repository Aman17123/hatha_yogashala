import PolicyPage from "@/components/PolicyPage";
import { pageMetadata, placeholders } from "@/data/siteData";

export const metadata = pageMetadata("terms");

const sections = [
  {
    title: "Applications and acceptance",
    paragraphs: [
      "Submitting an application does not reserve a place. A booking exists only after the school confirms suitability, dates, fees, inclusions, and the required payment steps in writing.",
    ],
  },
  {
    title: "Student responsibilities",
    paragraphs: [
      placeholders.policy.studentResponsibilities,
      "Students should seek appropriate medical advice before participating and disclose information relevant to safe instruction.",
    ],
  },
  {
    title: "Changes and cancellations",
    paragraphs: [
      placeholders.policy.schoolChanges,
      placeholders.payment.changes,
    ],
  },
  {
    title: "Website information",
    paragraphs: [
      "General planning information is not a booking promise. Confirm the selected dates, total fee, room, meals, faculty, activities, completion details, and policies in writing before payment or travel.",
    ],
  },
  {
    title: "Governing terms and contact",
    paragraphs: [`${placeholders.legalEntity}. ${placeholders.email}. ${placeholders.effectiveDate}.`],
  },
];

export default function TermsPage() {
  return <PolicyPage eyebrow="Legal" title="Terms & Conditions" description="The booking and participation terms that require school approval." sections={sections} />;
}
