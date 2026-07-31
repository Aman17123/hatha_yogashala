import PolicyPage from "@/components/PolicyPage";
import { pageMetadata, placeholders } from "@/data/siteData";

export const metadata = pageMetadata("payment");

const sections = [
  {
    title: "Confirmed price",
    paragraphs: [
      "Do not send money based on a verbal estimate. The school should issue a written breakdown of tuition, accommodation, meals, taxes, completion documents, transfers, and optional costs.",
    ],
  },
  {
    title: "Deposit and balance",
    paragraphs: [
      `${placeholders.payment.deposit}. ${placeholders.payment.balance}.`,
    ],
  },
  {
    title: "Refunds and transfers",
    paragraphs: [
      placeholders.payment.changes,
    ],
  },
  {
    title: "School cancellation",
    paragraphs: [
      placeholders.payment.schoolCancellation,
    ],
  },
  {
    title: "Payment safety",
    paragraphs: [
      "Use only an account and payment link confirmed by the school through its verified contact channel. Never send card details through the website enquiry form.",
      `Payment questions: ${placeholders.email}. Effective date: ${placeholders.effectiveDate}.`,
    ],
  },
];

export default function PaymentPolicyPage() {
  return <PolicyPage eyebrow="Legal" title="Payment & Refund Policy" description="A transparent framework for fees, deposits, changes, and refunds." sections={sections} />;
}
