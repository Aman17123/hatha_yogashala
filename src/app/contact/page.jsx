import Link from "next/link";
import { Bus, Mail, MapPin, Phone, Plane, Train } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import EnquiryForm from "@/components/EnquiryForm";
import { Accordion } from "@/components/Interactive";
import {
  Container,
  FinalCTA,
  JsonLd,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { faqs, pageMetadata, site, travelOptions } from "@/data/siteData";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  const contactFaqs = faqs.slice(0, 4);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="We’re here to help"
        title="Contact Hatha Yogashala"
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
              ["WhatsApp", site.contact.whatsapp, SiWhatsapp, "whatsapp", "#25D366"],
              ["Email", site.contact.email, Mail, "email"],
              ["Phone", site.contact.phone, Phone, "phone"],
              ["Address", site.contact.address, MapPin, "address"],
            ].map(([label, value, Icon, id, iconColor]) => (
              <div className="contact-card" id={id} key={label}>
                <Icon
                  aria-hidden="true"
                  size={24}
                  style={iconColor ? { color: iconColor } : undefined}
                />
                <div><strong>{label}</strong><p>{value}</p></div>
              </div>
            ))}
            <p className="placeholder-note">
              Public contact details are shown only after the school confirms
              them. The enquiry form remains the available contact route.
            </p>
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
            {travelOptions.map(({ label, text }) => {
              const Icon = label === "By air" ? Plane : label === "By train" ? Train : label === "By bus" ? Bus : MapPin;
              return (
              <article className="card card-body" key={label}><Icon aria-hidden="true" /><h2>{label}</h2><p>{text}</p></article>
              );
            })}
          </div>
          <div className="grid gap-6 mt-8 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="card card-body">
              <MapPin aria-hidden="true" />
              <h2 className="mt-4">{site.contact.address}</h2>
              <p className="mt-3">
                The map remains regional until the school confirms an exact
                public pin. Request the arrival window and route before travel.
              </p>
              <Link
                className="button button-primary mt-6"
                href={site.contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Link>
            </article>
            <iframe
              className="map-frame"
              src={site.contact.mapEmbedUrl}
              title="Map showing Goa, India"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="content-narrow">
          <SectionHeading eyebrow="Contact FAQ" title="Useful answers before you write" />
          <Accordion items={contactFaqs} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
