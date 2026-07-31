import PolicyPage from "@/components/PolicyPage";
import { pageMetadata, placeholders } from "@/data/siteData";

export const metadata = pageMetadata("privacy");

const sections = [
  {
    title: "Information submitted through forms",
    paragraphs: [
      "The application and contact forms can collect your name, email, phone or WhatsApp number, country, program interest, room preference, practice experience, pickup request, message, and consent.",
      "Do not submit payment card data, passport scans, medical records, or other sensitive documents through these forms.",
    ],
  },
  {
    title: "How information is used",
    paragraphs: [
      "Form information is intended only to assess and respond to your enquiry, provide verified booking information, and support relevant accessibility or arrival requests.",
      "The current website does not claim successful delivery unless the configured enquiry endpoint accepts the submission.",
    ],
  },
  {
    title: "Storage, sharing, and retention",
    paragraphs: [
      placeholders.policy.formProvider,
      placeholders.policy.privacyRights,
    ],
  },
  {
    title: "Cookies and analytics",
    paragraphs: [
      "No advertising or analytics scripts are included in this implementation. Update this section before adding any analytics, embedded media, or marketing tools.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [`Privacy questions: ${placeholders.email}. Effective date: ${placeholders.effectiveDate}.`],
  },
];

export default function PrivacyPage() {
  return <PolicyPage eyebrow="Legal" title="Privacy Policy" description="How enquiry information is intended to be handled." sections={sections} />;
}
