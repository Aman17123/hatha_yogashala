import { Bus, Mail, MapPin, MessageCircle, Phone, Plane, Train } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { Accordion } from "@/components/Interactive";
import {
  Container,
  FinalCTA,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { faqs, makeMetadata, site } from "@/data/siteData";

export const metadata = makeMetadata(
  "Contact The Hatha Yogashala in Goa",
  "Contact The Hatha Yogashala about yoga teacher training, retreats, travel, and applications in Goa.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We’re here to help"
        title="Contact The Hatha Yogashala"
        text="Ask about a course, retreat, accommodation, travel, accessibility, or the application process."
      />
      <section className="section">
        <Container className="contact-page-grid">
          <div>
            <SectionHeading
              eyebrow="Send an enquiry"
              title="Start with the details that matter"
              text="The form validates your message on the server. It only confirms delivery after a real webhook endpoint accepts it."
            />
            <EnquiryForm compact />
          </div>
          <aside className="contact-aside">
            {[
              ["WhatsApp", site.contact.whatsapp, MessageCircle, "whatsapp"],
              ["Email", site.contact.email, Mail, "email"],
              ["Phone", site.contact.phone, Phone, "phone"],
              ["Address", site.contact.address, MapPin, "address"],
            ].map(([label, value, Icon, id]) => (
              <div className="contact-card" id={id} key={label}>
                <Icon aria-hidden="true" />
                <div><strong>{label}</strong><p>{value}</p></div>
              </div>
            ))}
            <p className="placeholder-note">Replace all bracketed contact information before launch.</p>
          </aside>
        </Container>
      </section>
      <section className="section section-peach" id="travel">
        <Container>
          <SectionHeading
            eyebrow="Travel planning"
            title="Reaching the school in Goa"
            text="Distances, pickup services, and routes must be confirmed against the final school address."
          />
          <div className="travel-grid">
            {[
              ["By air", Plane, "[Nearest airport, distance, and transfer options]"],
              ["By train", Train, "[Nearest station, distance, and transfer options]"],
              ["By bus", Bus, "[Recommended arrival point and local connection]"],
              ["Local transfer", MapPin, "[Verified taxi or pickup instructions]"],
            ].map(([label, Icon, text]) => (
              <article className="card card-body" key={label}><Icon aria-hidden="true" /><h2>{label}</h2><p>{text}</p></article>
            ))}
          </div>
          <div className="map-placeholder mt-8">
            <MapPin aria-hidden="true" />
            <strong>Map embed pending</strong>
            <p>{site.contact.map}</p>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="content-narrow">
          <SectionHeading eyebrow="Contact FAQ" title="Useful answers before you write" />
          <Accordion items={faqs.slice(0, 4)} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
