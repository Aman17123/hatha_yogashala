import Image from "next/image";
import { Bath, BedDouble, Leaf, Salad, Wifi } from "lucide-react";
import { Accordion } from "@/components/Interactive";
import {
  Container,
  FinalCTA,
  JsonLd,
  Media,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { facilities, pageMetadata } from "@/data/siteData";

export const metadata = pageMetadata("accommodation");

const stayFaqs = [
  {
    question: "What accommodation is included with the yoga course?",
    answer:
      "Residential yoga courses and retreats at Hatha Yogashala include a room at the school in Querim, North Goa and three vegetarian meals per day. Exact room category, occupancy and fees are confirmed in writing before booking.",
  },
  {
    question: "Where is the accommodation located?",
    answer:
      "Rooms are at the Hatha Yogashala campus in Querim village, Pernem, North Goa — minutes from Querim and Arambol beaches. Confirm the exact building and distance to the yoga hall before travel.",
  },
  {
    question: "Can I request a private room?",
    answer:
      "Yes. Room categories include shared dorms, twin-sharing, and private rooms (AC and non-AC). Availability and the private-room fee are confirmed in writing before booking.",
  },
  {
    question: "Are meals included in the price?",
    answer:
      "Yes. Three healthy vegetarian meals are served daily, prepared fresh to support daily yoga practice. The serving schedule, dietary options and allergen process are confirmed before enrolment.",
  },
];

const atAGlance = [
  ["Location", "Querim, North Goa — near Arambol & Querim beaches"],
  ["Room options", "Shared dorms · twin-sharing · private (AC / non-AC)"],
  ["Meals", "3 vegetarian meals per day, served fresh"],
  ["Extras", "Hot-water showers, Wi-Fi, filtered drinking water"],
  ["Practice spaces", "Open-air yoga shala on the residential campus"],
  ["Student support", "24/7 support · course manuals · PDF library"],
];

export default function AccommodationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stayFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="Residential life"
        title="Accommodation in North Goa"
        text="Rest, meals and everyday amenities at the Hatha Yogashala ashram in Querim — a beachside home for yoga teacher training and retreats near Arambol."
        image="/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp"
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Where you stay"
            title="A quiet campus near the beach"
            text="Hatha Yogashala is a residential yoga school in Querim village, North Goa — minutes from Querim and Arambol beaches. Rooms, meals and practice spaces sit together on one peaceful campus."
          />
          <div className="split-layout">
            <Media
              src="/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp"
              alt="Residential campus and accommodation of the yoga school in North Goa"
              className="course-overview-image"
            />
            <div>
              <h2 className="section-title">
                Rooms for focused, restorative training
              </h2>
              <div className="prose-compact mt-4">
                <p>
                  Choose from shared dormitories, twin-sharing rooms, or private
                  rooms with AC or non-AC options. Every room includes hot-water
                  showers and Wi-Fi, giving you a comfortable place to rest
                  between practice sessions.
                </p>
                <p>
                  All residential stays include three vegetarian meals a day,
                  prepared fresh to support daily yoga practice. The exact room
                  category attached to your booking is confirmed in writing
                  before payment.
                </p>
              </div>
              <ul className="check-list">
                <li>
                  <BedDouble aria-hidden="true" />
                  Shared dorms, twin-sharing & private rooms
                </li>
                <li>
                  <Bath aria-hidden="true" />
                  Hot-water showers in every room
                </li>
                <li>
                  <Wifi aria-hidden="true" />
                  Wi-Fi and filtered drinking water included
                </li>
                <li>
                  <Leaf aria-hidden="true" />
                  Quiet-time hours to support rest
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section-peach">
        <Container>
          <SectionHeading
            eyebrow="Accommodation at a glance"
            title="Facts students need before booking"
            text="Clearly labelled details you can quote when comparing yoga schools and retreats in Goa."
          />
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {atAGlance.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm"
              >
                <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--coral-dark)]">
                  {label}
                </dt>
                <dd className="mt-1.5 text-[14.5px] font-semibold leading-relaxed text-[var(--brown)]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Campus amenities"
            title="Everything included in your stay"
            text="From the practice hall to meals and student support, here is what makes up daily life at the Goa ashram."
          />
          <div className="facility-grid">
            {facilities.map(({ title, text, image, alt }) => (
              <article key={title}>
                <Image
                  src={image}
                  alt={alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 820px) 100vw, 50vw"
                  className="object-cover"
                />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-cream">
        <Container className="split-layout split-reverse">
          <div>
            <SectionHeading
              eyebrow="Shared spaces"
              title="Yoga hall, meals and common areas"
              text="The open-air shala among the palm trees is where practice happens; meals and common spaces support the daily rhythm of the residential retreat."
            />
            <ul className="check-list">
              {[
                "Open-air yoga shala among the palm trees",
                "Three fresh vegetarian meals served daily",
                "Student support and course library on site",
                "Quiet-time policies support rest between practice",
              ].map((item) => (
                <li key={item}>
                  <Salad aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Media
            src="/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg"
            alt="Naturally lit open-air yoga hall used for group practice in Goa"
            className="course-overview-image"
          />
        </Container>
      </section>

      <section className="section">
        <Container className="content-narrow">
          <SectionHeading
            eyebrow="Stay FAQ"
            title="Common questions about the accommodation"
            text="Clear answers to what students most often ask before booking a residential course or retreat in Goa."
          />
          <Accordion items={stayFaqs} />
        </Container>
      </section>
      <FinalCTA title="Ask about rooms and meals" />
    </>
  );
}
