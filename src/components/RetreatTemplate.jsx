import { Check, Clock3, MapPin, Sparkles } from "lucide-react";
import { retreats } from "@/data/coursesData";
import { site } from "@/data/siteData";
import { Accordion } from "./Interactive";
import {
  ButtonLink,
  Container,
  FinalCTA,
  JsonLd,
  Media,
  PageHero,
  RetreatCard,
  SectionHeading,
  Snapshot,
} from "./ui";

const retreatFaqs = [
  {
    question: "Is this retreat available now?",
    answer: "Dates and availability are awaiting confirmation. Submit an enquiry before arranging travel.",
  },
  {
    question: "What is included?",
    answer: "The final practice schedule, room, meal, excursion, transfer, and material inclusions have not yet been supplied.",
  },
  {
    question: "Do I need yoga experience?",
    answer: "The school must confirm the required practice level and any health considerations for each retreat.",
  },
];

export default function RetreatTemplate({ retreat }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: retreat.name,
    description: retreat.description,
    touristType: "Yoga retreat participant",
    provider: { "@type": "Organization", name: site.name, url: site.url },
  };
  const related = retreats.filter((item) => item.slug !== retreat.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow={`${retreat.days} days · Goa, India`}
        title={retreat.name}
        text={retreat.description}
        image={retreat.image}
      />
      <section className="section section-tight">
        <Container>
          <Snapshot items={[
            { label: "Duration", value: `${retreat.days} days`, icon: "clock" },
            { label: "Location", value: "Goa, India", icon: "location" },
            { label: "Dates", value: "[Add confirmed dates]", icon: "calendar" },
            { label: "Starting fee", value: retreat.price, icon: "clock" },
          ]} />
        </Container>
      </section>
      <section className="section">
        <Container className="split-layout">
          <div>
            <SectionHeading
              eyebrow={retreat.category}
              title="A restorative rhythm with room to breathe"
              text={retreat.description}
            />
            <p className="text-muted">
              The final itinerary should state which sessions are guided, which activities are
              optional, how much free time is protected, and what changes in wet weather.
            </p>
            <ul className="check-list mt-6">
              {retreat.benefits.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
            </ul>
            <ButtonLink href="/apply" className="mt-7">Ask about this retreat</ButtonLink>
          </div>
          <Media src={retreat.image} alt={`${retreat.name} editorial placeholder`} className="course-overview-image" />
        </Container>
      </section>
      <section className="section section-peach">
        <Container>
          <SectionHeading
            eyebrow="Sample itinerary"
            title="What the days could hold"
            text="This is a content framework, not a confirmed schedule."
          />
          <div className="detail-grid">
            {[
              ["Morning", Clock3, "[Guided practice and breathwork]"],
              ["Daytime", MapPin, "[Meals, rest, and optional Goa activity]"],
              ["Evening", Sparkles, "[Gentle practice, reflection, or free time]"],
            ].map(([title, Icon, text]) => (
              <article className="card card-body detail-card" key={title}>
                <Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Stay & investment"
            title="Confirm every inclusion before payment"
            text="Room type, meals, practice sessions, transfers, excursions, taxes, deposits, and cancellation terms are pending."
          />
          <div className="pricing-summary">
            <div className="card card-body"><span>Dates</span><strong>[Add confirmed dates]</strong></div>
            <div className="card card-body"><span>Room</span><strong>[Add room options]</strong></div>
            <div className="card card-body"><span>Fee</span><strong>{retreat.price}</strong></div>
          </div>
        </Container>
      </section>
      <section className="section section-peach">
        <Container className="content-narrow">
          <SectionHeading eyebrow="Retreat FAQ" title="Plan with confidence" />
          <Accordion items={retreatFaqs} />
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionHeading eyebrow="Other retreats" title="Compare a different pace" />
          <div className="retreat-grid three">
            {related.map((item) => <RetreatCard retreat={item} key={item.slug} />)}
          </div>
        </Container>
      </section>
      <FinalCTA title={`Ask about the ${retreat.days}-day retreat`} />
    </>
  );
}
