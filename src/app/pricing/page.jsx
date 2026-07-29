import { PricingTabs } from "@/components/Interactive";
import { Container, FinalCTA, PageHero, SectionHeading } from "@/components/ui";
import { makeMetadata } from "@/data/siteData";

export const metadata = makeMetadata(
  "Yoga Teacher Training Fees & Dates in Goa",
  "Review transparent pricing and batch placeholders for yoga teacher training in Goa.",
  "/pricing",
);

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Fees & batches"
        title="Yoga Course Pricing in Goa"
        text="A responsive schedule prepared for confirmed dates, room prices, availability, and application links."
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Teacher training"
            title="Publish the full price—not just a headline fee"
            text="Each batch row separates dates, room categories, and schedule status. Unverified discounts and availability badges are intentionally absent."
          />
          <PricingTabs />
        </Container>
      </section>
      <section className="section section-peach">
        <Container>
          <SectionHeading eyebrow="Before payment" title="Details every student should receive" />
          <div className="policy-grid">
            <article><h2>Deposit</h2><p>[Add amount, currency, due date, refundability, and payment link owner.]</p></article>
            <article><h2>Balance</h2><p>[Add due date, accepted methods, taxes, bank fees, and receipt process.]</p></article>
            <article><h2>Changes</h2><p>[Add transfer, cancellation, refund, illness, and force-majeure terms.]</p></article>
          </div>
        </Container>
      </section>
      <FinalCTA title="Ask for a confirmed fee breakdown" />
    </>
  );
}
