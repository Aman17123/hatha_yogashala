import Link from "next/link";
import {
  Bus,
  MapPin,
  MapPinned,
  Phone,
  Plane,
  Train,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogos";
import EnquiryForm from "@/components/EnquiryForm";
import { Accordion } from "@/components/Interactive";
import {
  Container,
  FinalCTA,
  JsonLd,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import {
  absoluteUrl,
  faqs,
  pageMetadata,
  site,
  travelOptions,
  whatsappLink,
} from "@/data/siteData";

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

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description:
      "Yoga Alliance-registered yoga school and retreat in Querim, North Goa — yoga teacher training and wellness retreats near Arambol beach.",
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    image: absoluteUrl(site.defaultImage),
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Querim–Arambol–Agarwada Rd, Dhaktebag, Pernem",
      addressLocality: "Pernem",
      addressRegion: "North Goa",
      postalCode: "403524",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.729,
      longitude: 73.701,
    },
    hasMap: site.contact.map,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Goa" },
      { "@type": "AdministrativeArea", name: "India" },
    ],
  };

  const contactChannels = [
    {
      label: "WhatsApp",
      value: site.contact.whatsapp,
      href: whatsappLink(
        "Hello Hatha Yogashala, I'd like to ask about yoga teacher training or a retreat in Goa.",
      ),
      brand: "whatsapp",
      color: "#25D366",
    },
    {
      label: "Email",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
      brand: "gmail",
      color: "#EA4335",
    },
    {
      label: "Google Maps",
      value: "Querim–Arambol–Agarwada Rd, Pernem, North Goa",
      href: site.contact.directionsUrl,
      brand: "google-maps",
      color: "#4285F4",
    },
    {
      label: "Call us",
      value: site.contact.phone,
      href: `tel:${String(site.contact.phone).replace(/\s/g, "")}`,
    },
  ];

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={localSchema} />
      <PageHero
        eyebrow="We’re here to help"
        title="Contact the Goa Yoga School"
        text="Ask about yoga teacher training, retreats, accommodation, travel to Querim–Arambol, or the application process at Hatha Yogashala in North Goa."
      />
      <section className="section">
        <Container className="contact-page-grid">
          <div>
            <SectionHeading
              eyebrow="Send an enquiry"
              title="Start with the details that matter"
              text="Your message helps the school confirm suitability, dates, fees and availability for a yoga teacher training or retreat near Arambol, North Goa."
            />
            <EnquiryForm compact />
          </div>
          <aside className="contact-aside">
            {contactChannels.map(({ label, value, href, brand, color }) => (
              <a
                className="contact-card"
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {brand ? (
                  <BrandLogo
                    name={brand}
                    alt={`${label} icon`}
                    className="mt-0.5 size-11 shrink-0"
                  />
                ) : (
                  <Phone aria-hidden="true" size={44} className="shrink-0" style={{ color }} />
                )}
                <div>
                  <strong>{label}</strong>
                  <p>{value}</p>
                </div>
              </a>
            ))}
            <p className="placeholder-note">
              Public contact details are shared after the school confirms them;
              the enquiry form remains the reliable first route to the Goa
              campus team.
            </p>
          </aside>
        </Container>
      </section>

      <section className="section section-peach" id="travel">
        <Container>
          <SectionHeading
            eyebrow="Travel planning"
            title="Reaching the yoga school in North Goa"
            text="Hatha Yogashala sits in Querem village, Pernem — minutes from Arambol and Querim beach and a short drive from Goa’s international airports."
          />
          <div className="travel-grid">
            {travelOptions.map(({ label, text }) => {
              const Icon =
                label === "By air"
                  ? Plane
                  : label === "By train"
                    ? Train
                    : label === "By bus"
                      ? Bus
                      : MapPin;
              return (
                <article className="card card-body" key={label}>
                  <Icon aria-hidden="true" />
                  <h2>{label}</h2>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
          <div className="grid gap-6 mt-8 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="card card-body">
              <MapPinned aria-hidden="true" />
              <h2 className="mt-4">{site.contact.address}</h2>
              <p className="mt-3">
                Request the exact arrival window and route before travel so your
                airport pickup or bus connection is confirmed for Hatha Yogashala in Querim, North Goa.
              </p>
              <Link
                className="button button-primary mt-6"
                href={site.contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions to Querim
              </Link>
            </article>
            <iframe
              className="map-frame"
              src={site.contact.mapEmbedUrl}
              title="Map of Hatha Yogashala in Querim, North Goa, India"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="content-narrow">
          <SectionHeading
            eyebrow="Contact FAQ"
            title="Useful answers before you write"
          />
          <Accordion items={contactFaqs} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}