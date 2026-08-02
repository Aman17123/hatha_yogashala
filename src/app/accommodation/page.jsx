import { Bath, BedDouble, Salad, Wifi } from "lucide-react";
import { Accordion } from "@/components/Interactive";
import {
  Container,
  FinalCTA,
  JsonLd,
  Media,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { pageMetadata, placeholders } from "@/data/siteData";

export const metadata = pageMetadata("accommodation");

const stayFaqs = [
  { question: "Are rooms on the school campus?", answer: "The exact building, distance to the yoga hall, and room allocation process are awaiting confirmation." },
  { question: "Are meals included?", answer: "The school has not yet supplied a verified meal plan, serving schedule, dietary options, or allergen process." },
  { question: "Can I request a private room?", answer: "Room categories, occupancy, fees, and availability will be added once confirmed." },
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
        title="Accommodation in Goa"
        text="Review the room, meals, practice spaces, everyday amenities, and written details to confirm before a residential stay."
        image="/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp"
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Room categories"
            title="Rest should support the training"
            text="Request current photographs and a written facility list for the exact room category attached to your booking."
          />
          <div className="room-grid">
            {["Shared room request", "Private room request"].map((room) => (
              <article className="card overflow-hidden" key={room}>
                <Media src="/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp" alt={`${room} setting for residential yoga training`} className="room-image" />
                <div className="card-body">
                  <h2>{room}</h2>
                  <p>{placeholders.accommodation.roomDetails}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section section-peach">
        <Container>
          <SectionHeading eyebrow="Amenities" title="Details students need before travel" />
          <div className="values-grid">
            {[
              ["Beds & linen", BedDouble, placeholders.accommodation.linen],
              ["Bathrooms", Bath, placeholders.accommodation.bathroom],
              ["Connectivity", Wifi, placeholders.accommodation.connectivity],
              ["Meals", Salad, placeholders.course.meals],
            ].map(([title, Icon, text]) => (
              <article className="card card-body" key={title}><Icon aria-hidden="true" /><h2>{title}</h2><p>{text}</p></article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="split-layout">
          <Media src="/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg" alt="Naturally lit yoga hall used for group practice" className="course-overview-image" />
          <div>
            <SectionHeading
              eyebrow="Shared spaces"
              title="Yoga hall, meals, and common areas"
              text="Confirm hall size, floor material, ventilation, props, common-space hours, meal service, and quiet-time policies for your batch."
            />
            <ul className="check-list">
              {Object.values(placeholders.accommodation).slice(4).map((item) => (
                <li key={item}><BedDouble aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="section section-cream">
        <Container className="content-narrow">
          <SectionHeading eyebrow="Stay FAQ" title="Before you pack" />
          <Accordion items={stayFaqs} />
        </Container>
      </section>
      <FinalCTA title="Ask about rooms and meals" />
    </>
  );
}
