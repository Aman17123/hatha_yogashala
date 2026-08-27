import Image from "next/image";
import {
  Bath,
  BedDouble,
  CheckCircle2,
  Clock3,
  Coffee,
  HeartHandshake,
  Leaf,
  Salad,
  Sparkles,
  Utensils,
  Wifi,
} from "lucide-react";
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
      "Residential yoga courses and retreats at The Hatha Yogashala include a room at the school in Querim, North Goa and three vegetarian meals per day. Exact room category, occupancy and fees are confirmed in writing before booking.",
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
    question: "What kind of food is served, and can dietary restrictions be accommodated?",
    answer:
      "We serve three freshly prepared, sattvic vegetarian meals daily (Monday through Saturday morning). Our kitchen accommodates vegan, gluten-free, dairy-free, and nut-allergy requirements upon advance notice.",
  },
  {
    question: "Is drinking water provided on campus?",
    answer:
      "Yes. Unlimited, multi-stage filtered and UV-purified drinking water is available 24/7 throughout the campus and dining hall.",
  },
];

const atAGlance = [
  ["Location", "Querim, North Goa — near Arambol & Querim beaches"],
  ["Room options", "Shared dorms · twin-sharing · private (AC / non-AC)"],
  ["Meals & Food", "3 sattvic vegetarian meals daily (Mon–Sat) · vegan/GF on request"],
  ["Extras", "Hot-water showers, Wi-Fi, UV-filtered drinking water"],
  ["Practice spaces", "Open-air yoga shala among coconut palms"],
  ["Student support", "24/7 on-site support · course manuals · study library"],
];

const mealSchedule = [
  {
    meal: "Morning Sattvic Breakfast",
    time: "08:30 AM – 09:30 AM",
    description:
      "Herbal teas, seasonal tropical fruits (papaya, bananas, pomegranate), warm Ayurvedic porridge, traditional South Indian poha, idlis or dosas, and soaked seeds.",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-01.webp",
    alt: "Fresh breakfast and herbal tea served at The Hatha Yogashala in Goa",
  },
  {
    meal: "Wholesome Ayurvedic Lunch",
    time: "01:00 PM – 02:00 PM",
    description:
      "A complete balanced Indian thali featuring organic seasonal sabzi (vegetables), protein-rich dal (lentils), whole-grain rice, freshly rolled chapatis, cooling raita, and crisp garden salads.",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-02.webp",
    alt: "Traditional vegetarian ashram lunch thali at The Hatha Yogashala in Pernem Goa",
  },
  {
    meal: "Light Restorative Dinner",
    time: "07:00 PM – 08:00 PM",
    description:
      "Digestive-friendly sattvic khichdi, steamed greens, warming vegetable broths, herbal infusions, and light grains formulated for restful sleep and overnight muscle recovery.",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-03.webp",
    alt: "Nourishing sattvic dinner served at the yoga school dining area in Goa",
  },
];

const dietaryHighlights = [
  "100% Sattvic & Pure Vegetarian",
  "Vegan & Dairy-Free Options",
  "Gluten-Free upon Request",
  "Locally Sourced Organic Ingredients",
  "Unlimited Purified Drinking Water",
  "Freshly Cooked Daily on Campus",
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
        title="Accommodation & Food in North Goa"
        text="Restful rooms, nourishing sattvic meals, and everyday ashram amenities at The Hatha Yogashala in Querim — a peaceful beachside sanctuary for yoga teacher training and retreats near Arambol."
        image="/images/accomodation/the-hatha-yogashala-arambol-goa-cottage-bedroom-interior-01.webp"
        imageAlt="Comfortable cottage bedroom interior at The Hatha Yogashala in Querim, Goa"
      />

      {/* 1. Where You Stay — Room Options */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Where you stay"
            title="A quiet campus near the beach"
            text="The Hatha Yogashala is a residential yoga school in Querim village, North Goa — minutes from Querim and Arambol beaches. Rooms, meals and practice spaces sit together on one peaceful campus."
          />
          <div className="split-layout">
            <Media
              src="/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp"
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

      {/* 2. Accommodation & Stay at a Glance */}
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
                <dt className="text-[13.5px] font-bold uppercase tracking-[0.12em] text-[var(--coral-dark)]">
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

      {/* 3. Dedicated Food & Sattvic Dining Section */}
      <section className="section bg-[var(--cream)]" id="food">
        <Container>
          <SectionHeading
            eyebrow="Nourishment & Dining"
            title="Sattvic Nutrition & Mindful Dining Experience"
            text="Food is an integral pillar of yogic discipline. Our in-house ashram kitchen prepares three wholesome, freshly cooked vegetarian meals every day to energize your body, maintain digestive ease, and support intense daily asana and pranayama practice."
          />

          {/* Dietary Highlights Bar */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {dietaryHighlights.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-[13.5px] font-semibold text-[var(--brown)] shadow-xs"
              >
                <CheckCircle2 size={15} className="text-[var(--coral-dark)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Daily Meals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mealSchedule.map((meal) => (
              <article
                key={meal.meal}
                className="group flex flex-col rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--cream)]">
                  <Image
                    src={meal.image}
                    alt={meal.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 space-y-2.5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                    <Clock3 size={14} />
                    <span>{meal.time}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--brown)]">
                    {meal.meal}
                  </h3>

                  <p className="text-sm text-[var(--text)] leading-relaxed flex-1">
                    {meal.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Dining Ambiance & Dietary Notes */}
          <div className="mt-10 rounded-[28px] border border-[var(--border)] bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                  <Utensils size={15} />
                  <span>Communal Dining & Sangha</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--brown)]">
                  Mindful Eating in an Open-Air Ashram Setting
                </h3>
                <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
                  Meals are served in our shaded communal dining hall overlooking lush Goan greenery. Dining together creates a warm, supportive community (sangha) where teachers and students share conversations, reflections, and laughter after practice.
                </p>
              </div>

              <div className="lg:col-span-4 rounded-2xl bg-[var(--surface)] p-5 border border-[var(--border)]/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                  <HeartHandshake size={15} />
                  <span>Dietary Requirements</span>
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--muted)]">
                  Please notify our team during enrollment if you require vegan, gluten-free, or specific allergen-safe meal preparations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Campus Amenities Grid */}
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

      {/* 5. Shared Spaces */}
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
            src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp"
            alt="Naturally lit open-air yoga hall used for group practice in Goa"
            className="course-overview-image"
          />
        </Container>
      </section>

      {/* 6. FAQ Section */}
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
