import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Heart,
  MapPin,
  Palmtree,
  Plane,
  ShieldCheck,
  Sun,
  Waves,
  Wind,
} from "lucide-react";
import { Breadcrumbs, ButtonLink, Container, FinalCTA, JsonLd, PageHero, SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/retreat/Motion";
import { absoluteUrl, makeMetadata, site } from "@/data/siteData";

export const metadata = makeMetadata(
  "Yoga in Goa — Location, Beach Ashram & Travel Guide | The Hatha Yogashala",
  "Discover why Querim, North Goa is the ideal destination for Yoga Teacher Training and retreats. Travel logistics, MOPA airport proximity, climate guide, and campus details.",
  "/goa-travel-guide",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
  "yoga in Goa, yoga teacher training destination Goa, Querim beach yoga, Arambol yoga ashram, MOPA airport yoga school Goa",
);

const destinationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "The Hatha Yogashala Goa",
  description:
    "Residential yoga teacher training school and coastal ashram in Querim, North Goa near Arambol.",
  url: absoluteUrl("/goa-travel-guide"),
  touristType: ["Yoga Students", "Wellness Travelers", "Teacher Trainees"],
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
};

const goaFaqs = [
  {
    question: "Which airport is closest to The Hatha Yogashala in Goa?",
    answer:
      "Manohar International Airport in MOPA, Goa (Airport Code: GOX) is only ~30 minutes (28 km) away by taxi. Dabolim Airport (GOI) in South Goa is ~90 minutes (65 km) away. The school arranges direct pre-booked taxi pickups for all arriving students.",
  },
  {
    question: "Is North Goa safe for solo female travelers?",
    answer:
      "Yes, North Goa (and Querim/Pernem in particular) has a long-standing, peaceful international yoga and wellness community. The school campus is private, secure, and fully staffed 24/7.",
  },
  {
    question: "What is the best time of year to visit Goa for yoga?",
    answer:
      "The prime season runs from October through March, with warm, sunny days (26–32°C), cool evening breezes, and low humidity ideal for multi-hour daily asana and pranayama practice.",
  },
  {
    question: "How far is the ashram from the beach?",
    answer:
      "Querim Beach (Keri Beach) is just a short 5–10 minute walk through tranquil village coconut paths. Arambol Beach and Sweet Water Lake are roughly 7 minutes away by scooter or local taxi.",
  },
];

export default function DestinationGoaPage() {
  return (
    <>
      <JsonLd data={destinationSchema} />
      <PageHero
        eyebrow="Ashram Destination & Travel Guide"
        title="Yoga Study & Retreats in North Goa"
        text="A peaceful coastal sanctuary in Querim, North Goa — where ancient yogic traditions meet serene Arabian Sea sunrises, lush coconut groves, and a focused residential learning environment."
        image="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-02.webp"
      />

      {/* ============ 1. WHY TRAIN IN GOA ============ */}
      <section className="section bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                The Coastal Advantage
              </span>
              <h2 className="mt-2 text-[var(--brown)]">
                Why Students Choose Goa for Yoga Teacher Training
              </h2>
              <div className="mt-6 space-y-4 text-[16px] text-[#433c37] leading-relaxed">
                <p>
                  While traditional pilgrimage towns in the north offer historical significance, North Goa provides an unmatched balance of authentic yogic rigor and soothing natural tranquility.
                </p>
                <p>
                  The tropical coastal climate naturally warms the muscles and joints, allowing practitioners to safely deepen their asana alignment without stiffness. Clean ocean air enriched with negative ions supports deeper respiratory volume during morning Pranayama, while the rhythmic sound of waves provides an organic backdrop for evening meditation.
                </p>
                <p>
                  Far from the noisy commercial nightlife of central Goa, our campus in <strong>Querim (Pernem)</strong> is nestled amidst quiet palm groves, providing a dedicated ashram atmosphere free from external distractions.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[var(--surface)]/50 p-5 border border-[var(--border)]">
                  <Waves className="text-[var(--coral-dark)] mb-2" size={24} />
                  <h4 className="font-heading text-base font-bold text-[var(--brown)]">Clean Coastal Energy</h4>
                  <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                    Fresh sea breeze and unpolluted air support diaphragmatic expansion and cellular vitality.
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--surface)]/50 p-5 border border-[var(--border)]">
                  <Sun className="text-[var(--coral-dark)] mb-2" size={24} />
                  <h4 className="font-heading text-base font-bold text-[var(--brown)]">Warm Climate Healing</h4>
                  <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                    Warm year-round temperatures encourage muscle elasticity and prevent injuries during training.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp"
                  alt="Yoga students practicing on Querim beach in North Goa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/accomodation/the-hatha-yogashala-arambol-goa-coconut-palms-sunlight-02.webp"
                  alt="Lush green coconut palms surrounding The Hatha Yogashala Goa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ 2. LOCATION HIGHLIGHTS ============ */}
      <section className="section bg-[var(--surface)]/30 border-y border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Pernem, North Goa
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Location Highlights & Surroundings
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Querim is North Goa&apos;s northernmost coastal village, celebrated for its raw natural beauty, ancient banyan trees, and tranquil beaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white p-6 sm:p-7 border border-[var(--border)] shadow-xs">
              <div className="size-11 rounded-2xl bg-[var(--coral-dark)]/10 text-[var(--coral-dark)] flex items-center justify-center mb-4">
                <Palmtree size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[var(--brown)] mb-2">
                Querim (Keri) Beach
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                A pristine, wide golden sand beach lined with casuarina trees. Free from commercial beach shacks and noisy water sports, it is our sanctuary for sunrise yoga and meditation.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-7 border border-[var(--border)] shadow-xs">
              <div className="size-11 rounded-2xl bg-[var(--coral-dark)]/10 text-[var(--coral-dark)] flex items-center justify-center mb-4">
                <Compass size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[var(--brown)] mb-2">
                Arambol & Sweet Water Lake
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Just 7 minutes down the road lies Arambol — a world-renowned wellness hub filled with Ayurvedic doctors, organic health cafes, ecstatic dance gatherings, and the serene freshwater lake.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-7 border border-[var(--border)] shadow-xs">
              <div className="size-11 rounded-2xl bg-[var(--coral-dark)]/10 text-[var(--coral-dark)] flex items-center justify-center mb-4">
                <Plane size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[var(--brown)] mb-2">
                30 Mins from MOPA Airport
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                With Goa&apos;s new international airport (GOX) located right in Pernem, arriving at the school is fast, seamless, and completely avoids long multi-hour highway commutes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ 3. TRAVEL LOGISTICS & ARRIVAL GUIDE ============ */}
      <section className="section bg-white">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl bg-[var(--cream)] p-8 sm:p-12 border border-[var(--border)] shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                Practical Travel Info
              </span>
              <h2 className="mt-1 text-[var(--brown)]">
                Planning Your Arrival in Goa
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#433c37]">
              <div className="p-5 rounded-2xl bg-white border border-[var(--border)]">
                <h4 className="font-heading text-base font-bold text-[var(--brown)] mb-2 flex items-center gap-2">
                  <Plane className="text-[var(--coral-dark)]" size={18} />
                  Flights & Airport Transfers
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm text-[var(--muted)]">
                  Fly into <strong>Manohar International Airport, MOPA (GOX)</strong> for the fastest arrival (30 mins). Alternatively, fly into Dabolim (GOI). We arrange reliable, pre-paid driver pickups directly to the ashram gate.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[var(--border)]">
                <h4 className="font-heading text-base font-bold text-[var(--brown)] mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-[var(--coral-dark)]" size={18} />
                  Visa & Entry Requirements
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm text-[var(--muted)]">
                  Most international travelers can obtain an Indian <strong>e-Tourist Visa (30-day, 1-year, or 5-year)</strong> easily online within 3 to 5 business days before flying.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[var(--border)]">
                <h4 className="font-heading text-base font-bold text-[var(--brown)] mb-2 flex items-center gap-2">
                  <Sun className="text-[var(--coral-dark)]" size={18} />
                  What to Pack
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm text-[var(--muted)]">
                  Light, breathable cotton yoga wear, sandals/flip-flops, reusable water bottle, sunscreen, natural mosquito repellent, and a personal travel yoga mat if preferred.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[var(--border)]">
                <h4 className="font-heading text-base font-bold text-[var(--brown)] mb-2 flex items-center gap-2">
                  <Heart className="text-[var(--coral-dark)]" size={18} />
                  Ashram Accommodation & Food
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm text-[var(--muted)]">
                  Private and shared eco-cottages with hot water, ceiling fans, Wi-Fi, and 3 freshly prepared vegetarian Ayurvedic meals daily included in all courses.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <ButtonLink
                href="/courses/200-hour-yoga-teacher-training-goa"
                className="button button-primary !py-3.5 !px-8 text-sm font-bold shadow-md"
              >
                <span>View 200-Hour TTC in Goa</span>
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ 4. FAQ SECTION ============ */}
      <section className="section bg-[var(--surface)]/20 border-t border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Travel Questions
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Goa Travel & Ashram FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {goaFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6 shadow-xs"
              >
                <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--brown)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#433c37] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Experience Authentic Yoga Study in Goa"
        text="Check upcoming training dates, room availability, and confirmed course fees at The Hatha Yogashala in North Goa."
        height="auto"
        className="!min-h-[260px] !py-8 md:!py-10"
      />
    </>
  );
}
