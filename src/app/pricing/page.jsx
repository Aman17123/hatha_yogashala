import Link from "next/link";
import { Container, FinalCTA, PageHero, SectionHeading } from "@/components/ui";
import { teacherTrainings } from "@/data/coursesData";
import { pageMetadata, placeholders } from "@/data/siteData";

export const metadata = pageMetadata("pricing");

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
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <caption className="sr-only">Yoga teacher training dates and fees in Goa</caption>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Batch dates</th>
                  <th>Shared room</th>
                  <th>Private room</th>
                  <th><span className="sr-only">Course details</span></th>
                </tr>
              </thead>
              <tbody>
                {teacherTrainings.map((course) => (
                  <tr key={course.slug}>
                    <td data-label="Program">{course.name}</td>
                    <td data-label="Batch dates">{course.date}</td>
                    <td data-label="Shared room">{course.price}</td>
                    <td data-label="Private room">{course.privatePrice}</td>
                    <td data-label="Action">
                      <Link className="button button-text" href={`/courses/${course.slug}`}>
                        View course
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      <section className="section section-peach">
        <Container>
          <SectionHeading eyebrow="Before payment" title="Details every student should receive" />
          <div className="policy-grid">
            <article><h2>Deposit</h2><p>{placeholders.payment.deposit}</p></article>
            <article><h2>Balance</h2><p>{placeholders.payment.balance}</p></article>
            <article><h2>Changes</h2><p>{placeholders.payment.changes}</p></article>
          </div>
        </Container>
      </section>
      <FinalCTA title="Ask for a confirmed fee breakdown" />
    </>
  );
}
