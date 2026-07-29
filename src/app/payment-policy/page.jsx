import PolicyPage from "@/components/PolicyPage";
import { makeMetadata } from "@/data/siteData";

export const metadata = makeMetadata(
  "Payment & Refund Policy",
  "Payment, deposit, cancellation, and refund policy template for The Hatha Yogashala.",
  "/payment-policy",
);

const sections = [
  {
    title: "Confirmed price",
    paragraphs: [
      "Do not send money based on a placeholder or verbal estimate. The school should issue a written breakdown of tuition, accommodation, meals, taxes, certification, transfers, and optional costs.",
    ],
  },
  {
    title: "Deposit and balance",
    paragraphs: [
      "[Add the deposit amount or percentage, currency, due date, payment method, transaction fees, balance due date, and receipt process.]",
    ],
  },
  {
    title: "Refunds and transfers",
    paragraphs: [
      "[Add approved cancellation windows, refundable and non-refundable amounts, batch transfer rules, credit validity, and processing times.]",
    ],
  },
  {
    title: "School cancellation",
    paragraphs: [
      "[Add the remedy if the school cancels or materially changes a program, including what travel costs are not covered.]",
    ],
  },
  {
    title: "Payment safety",
    paragraphs: [
      "Use only an account and payment link confirmed by the school through its verified contact channel. Never send card details through the website enquiry form.",
      "Payment questions: [EMAIL ADDRESS]. Effective date: [ADD DATE].",
    ],
  },
];

export default function PaymentPolicyPage() {
  return <PolicyPage eyebrow="Legal" title="Payment & Refund Policy" description="A transparent framework for fees, deposits, changes, and refunds." sections={sections} />;
}
