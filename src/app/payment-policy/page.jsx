import PolicyPage from "@/components/PolicyPage";
import { placeholders } from "@/data/siteData";
import { pagesMetadata } from "@/data/pages-metadata";
import { buildMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui";

export const metadata = buildMetadata(pagesMetadata.paymentPolicy);

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
    paragraphs: [placeholders.payment.changes],
  },
  {
    title: "School cancellation",
    paragraphs: [placeholders.payment.schoolCancellation],
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
  const pageSchema = webPageSchema(
    "/payment-policy",
    pagesMetadata.paymentPolicy.title,
    pagesMetadata.paymentPolicy.description,
  );

  return (
    <>
      <JsonLd data={pageSchema} />
      <PolicyPage
        eyebrow="Legal"
        title="Payment Policy"
        description="A transparent framework for fees, deposits, changes, and refunds."
        sections={sections}
      />
    </>
  );
}
