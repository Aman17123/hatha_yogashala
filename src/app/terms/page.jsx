import PolicyPage from "@/components/PolicyPage";
import { makeMetadata } from "@/data/siteData";

export const metadata = makeMetadata(
  "Terms & Conditions",
  "Terms and conditions template for The Hatha Yogashala.",
  "/terms",
);

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
      "[Add approved attendance, conduct, health disclosure, insurance, visa, travel, and participation requirements.]",
      "Students should seek appropriate medical advice before participating and disclose information relevant to safe instruction.",
    ],
  },
  {
    title: "Changes and cancellations",
    paragraphs: [
      "[Add the school’s approved right to change teachers, schedules, venues, activities, or dates, together with the remedies available to students.]",
      "[Add cancellation, transfer, refund, no-show, early-departure, illness, and force-majeure terms.]",
    ],
  },
  {
    title: "Website information",
    paragraphs: [
      "Bracketed content and editorial placeholders are not booking promises. Confirm all course and retreat details directly with the school before payment or travel.",
    ],
  },
  {
    title: "Governing terms and contact",
    paragraphs: ["[Add legal entity, jurisdiction, dispute process, contact email, and effective date.]"],
  },
];

export default function TermsPage() {
  return <PolicyPage eyebrow="Legal" title="Terms & Conditions" description="The booking and participation terms that require school approval." sections={sections} />;
}
