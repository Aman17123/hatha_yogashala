import PolicyPage from "@/components/PolicyPage";
import { makeMetadata } from "@/data/siteData";

export const metadata = makeMetadata(
  "Privacy Policy",
  "Privacy policy template for The Hatha Yogashala website and enquiry form.",
  "/privacy-policy",
);

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
      "[Add the approved form provider, storage location, staff access, retention period, deletion process, and any international data transfers.]",
      "[Add the lawful basis, privacy contact, and rights that apply to the school’s students and website visitors.]",
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
    paragraphs: ["Privacy questions: [EMAIL ADDRESS]. Effective date: [ADD DATE]."],
  },
];

export default function PrivacyPage() {
  return <PolicyPage eyebrow="Legal" title="Privacy Policy" description="How enquiry information is intended to be handled." sections={sections} />;
}
