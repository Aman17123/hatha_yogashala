import { Bath, BedDouble, Salad, Wifi } from "lucide-react";
import { Accordion } from "@/components/Interactive";
import {
  Container,
  FinalCTA,
  Media,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { makeMetadata } from "@/data/siteData";

export const metadata = makeMetadata(
  "Yoga School Accommodation in Goa",
  "Explore accommodation, meals, yoga hall, and residential facility placeholders for The Hatha Yogashala.",
  "/accommodation",
);

const stayFaqs = [
  { question: "Are rooms on the school campus?", answer: "The exact building, distance to the yoga hall, and room allocation process are awaiting confirmation." },
  { question: "Are meals included?", answer: "The school has not yet supplied a verified meal plan, serving schedule, dietary options, or allergen process." },
  { question: "Can I request a private room?", answer: "Room categories, occupancy, fees, and availability will be added once confirmed." },
];

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential life"
        title="Accommodation in Goa"
        text="A calm, useful framework for rooms, meals, practice spaces, and everyday amenities—ready for verified school details."
        image="/images/accommodation-goa.png"
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Room categories"
            title="Rest should support the training"
            text="Generated room imagery is editorial only. Replace it with photographs of the exact rooms students book."
          />
          <div className="room-grid">
            {["Shared room", "Private room", "Optional upgraded room"].map((room) => (
              <article className="card overflow-hidden" key={room}>
                <Media src="/images/accommodation-goa.png" alt={`${room} editorial placeholder`} className="room-image" />
                <div className="card-body">
                  <h2>{room}</h2>
                  <p>[Add occupancy, bed type, bathroom, view, floor, accessibility, amenities, and confirmed price.]</p>
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
              ["Beds & linen", BedDouble, "[Add linen, towel, and housekeeping details]"],
              ["Bathrooms", Bath, "[Add private/shared, hot water, and accessibility details]"],
              ["Connectivity", Wifi, "[Add Wi-Fi and mobile signal information]"],
              ["Meals", Salad, "[Add meal plan, dietary options, and allergen process]"],
            ].map(([title, Icon, text]) => (
              <article className="card card-body" key={title}><Icon aria-hidden="true" /><h2>{title}</h2><p>{text}</p></article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="split-layout">
          <Media src="/images/course-goa-yoga.png" alt="Yoga hall editorial placeholder" className="course-overview-image" />
          <div>
            <SectionHeading
              eyebrow="Shared spaces"
              title="Yoga hall, meals, and common areas"
              text="Add verified hall dimensions, floor material, ventilation, props, common-space hours, meal service, and quiet-time policies."
            />
            <ul className="check-list">
              {["[Yoga hall details]", "[Dining area details]", "[Study / common space]", "[Laundry process]", "[Drinking water]", "[Campus safety and support]"].map((item) => (
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
