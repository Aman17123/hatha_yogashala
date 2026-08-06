import { Check, ShieldCheck } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/data/siteData";

export const metadata = pageMetadata("apply");

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Application"
        title="Reserve Your Spot"
        text="Share your preferred program, batch, room, experience, and support needs. Submission is an enquiry—not a confirmed booking."
        image="/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp"
        loading="eager"
      />
      <section className="section">
        <Container className="apply-grid">
          <div>
            <SectionHeading
              eyebrow="Application form"
              title="Tell us how you want to study"
              text="Required fields are validated in the browser and again on the server. Your form is only marked delivered after the configured endpoint accepts it."
            />
            <EnquiryForm />
          </div>
          <aside className="apply-aside">
            <div className="card card-body">
              <ShieldCheck aria-hidden="true" />
              <h2>Before you submit</h2>
              <ul className="check-list">
                {[
                  "Check that your email and WhatsApp number are correct",
                  "Share relevant accessibility or health considerations",
                  "Do not send payment details in this form",
                  "Wait for verified dates, fees, and payment instructions",
                  "Read the cancellation and payment policies",
                ].map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="notice">
              <p>
                <strong>Delivery status:</strong> the form returns an honest
                configuration message until ENQUIRY_WEBHOOK_URL is added.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
