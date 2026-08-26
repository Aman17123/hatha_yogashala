import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock,
  Heart,
  HelpCircle,
  MapPin,
  Palmtree,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Utensils,
  Waves,
} from "lucide-react";
import { Breadcrumbs, ButtonLink, Container, FinalCTA, JsonLd, PageHero } from "@/components/ui";
import { FadeIn, Stagger, StaggerItem } from "@/components/retreat/Motion";
import { holidays } from "@/data/holidaysData";
import { absoluteUrl, makeMetadata, site, testimonials } from "@/data/siteData";

export const metadata = makeMetadata(
  "Yoga Holidays in Goa (3, 5 & 7 Days) | The Hatha Yogashala",
  "Recharge with authentic residential yoga holidays in Querim, North Goa. Includes daily Hatha yoga, Ayurvedic massage, sattvic food, and beachside relaxation.",
  "/holidays",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
  "yoga holidays Goa, short yoga retreat Goa, 3 day yoga holiday Goa, 7 day yoga break, beach yoga holiday India",
);

const holidaySchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Yoga Holidays in Goa | The Hatha Yogashala",
  description:
    "Short format residential yoga holidays in Querim, North Goa with daily asana, Ayurvedic massage, beach walks, and organic sattvic meals.",
  url: absoluteUrl("/holidays"),
  touristType: ["Yoga Holiday Guests", "Wellness Travelers", "Solo Travelers"],
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

const holidayFaqs = [
  {
    question: "What is included in a Yoga Holiday at The Hatha Yogashala?",
    answer:
      "All packages include clean eco-cottage or private accommodation, daily morning and evening yoga/meditation sessions, full-body Ayurvedic massage, 3 freshly prepared vegetarian sattvic meals daily, and filtered drinking water.",
  },
  {
    question: "Can beginners join a Yoga Holiday?",
    answer:
      "Yes, our yoga holidays are designed for all levels, including complete beginners. Our teachers offer gentle modifications so everyone can practice comfortably at their own pace.",
  },
  {
    question: "Can I arrive on any day of the week?",
    answer:
      "Yes, yoga holidays have flexible check-in dates throughout the season (October to May). You can start your 3, 5, or 7-day stay on whichever day fits your travel itinerary.",
  },
  {
    question: "How far is the beach from the holiday cottages?",
    answer:
      "The peaceful, uncrowded sands of Querim Beach are just a 5 to 10-minute walk through serene palm paths from our campus.",
  },
];

const holidayActivities = [
  {
    title: "Daily Beach & Shala Yoga",
    desc: "Gentle yet energizing traditional Hatha asana sessions to stretch, strengthen, and align the body.",
    icon: Sun,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
  },
  {
    title: "Ayurvedic Massages & Therapies",
    desc: "Nourishing full-body herbal oil Abhyanga massages to melt chronic muscular tension and improve circulation.",
    icon: Heart,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp",
  },
  {
    title: "Sound Healing & Meditation",
    desc: "Evening Tibetan singing bowl sound baths and candlelit Yoga Nidra for profound nervous system recovery.",
    icon: Sparkles,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-03.webp",
  },
  {
    title: "Organic Sattvic Cuisine",
    desc: "Three delicious, freshly cooked Ayurvedic vegetarian meals daily prepared with locally sourced Goan produce.",
    icon: Utensils,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-01.webp",
  },
];

export default function HolidaysPage() {
  return (
    <>
      <JsonLd data={holidaySchema} />
      <PageHero
        eyebrow="Mindful Coastal Escapes"
        title="Yoga Holidays in North Goa"
        text="Step away from the demands of busy life. Experience 3, 5, or 7 days of restorative yoga practice, Ayurvedic healing, nourishing meals, and unhurried beach walks in Querim, North Goa."
        image="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-04.webp"
      />

      {/* ============ 1. PACKAGES GRID ============ */}
      <section className="section bg-white">
        <Container>
          <div className="section-heading">
            <p className="eyebrow plain">Choose Your Length of Stay</p>
            <h2>All-Inclusive Yoga Holiday Packages</h2>
            <p className="max-w-2xl mx-auto">
              Flexible arrival dates with accommodation, 3 meals daily, daily yoga, and Ayurvedic therapies included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {holidays.map((pkg) => (
              <div
                key={pkg.slug}
                className="group flex flex-col rounded-3xl border border-[var(--border)] bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[16/11] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.imageAlt || pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)] shadow-xs">
                      <Clock size={12} />
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="inline-flex rounded-full bg-[var(--coral-dark)] px-3 py-1 text-[13px] font-bold text-white shadow-md">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
                      {pkg.days} Days · Residential
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[var(--brown)] mt-1 group-hover:text-[var(--coral-dark)] transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-2.5 leading-relaxed line-clamp-3">
                      {pkg.tagline}
                    </p>

                    <div className="mt-5 space-y-2 pt-4 border-t border-[var(--border)]/70 text-xs sm:text-[13px] text-[#433c37] font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[var(--coral-dark)] shrink-0" />
                        <span>Daily Morning &amp; Evening Yoga</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[var(--coral-dark)] shrink-0" />
                        <span>Ayurvedic Full-Body Massage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[var(--coral-dark)] shrink-0" />
                        <span>3 Sattvic Vegetarian Meals Daily</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      href={`/holidays/${pkg.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--surface)] px-4 py-3 text-xs sm:text-sm font-bold text-[var(--coral-dark)] transition-all hover:bg-[var(--coral-dark)] hover:text-white shadow-xs"
                    >
                      <span>View Full Itinerary &amp; Book</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ 2. WELLNESS ACTIVITIES & EXPERIENCES ============ */}
      <section className="section bg-[var(--surface)]/30 border-y border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              The Retreat Experience
            </span>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[var(--brown)]">
              What You Will Experience in Goa
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              A holistic blend of traditional yogic practices, therapeutic treatments, and unhurried coastal leisure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {holidayActivities.map((act, i) => {
              const Icon = act.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl bg-white border border-[var(--border)] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[var(--coral-dark)] mb-2">
                        <Icon size={18} />
                        <h3 className="font-heading text-base font-bold text-[var(--brown)]">
                          {act.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============ 3. ACCOMMODATION & FOOD SHOWCASE ============ */}
      <section className="section bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                Sanctuary &amp; Nourishment
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[var(--brown)] leading-tight">
                Tranquil Living &amp; Sattvic Organic Dining
              </h2>
              <div className="mt-6 space-y-4 text-[15.5px] text-[#433c37] leading-relaxed">
                <p>
                  Our eco-cottages and private rooms are designed for deep, undisturbed sleep. Surrounded by lush coconut palms and flowering garden pathways, every room includes hot water, ceiling fans, private bathrooms, and high-speed Wi-Fi.
                </p>
                <p>
                  Nutrition is an essential pillar of your holiday. Our kitchen prepares three wholesome vegetarian meals daily following Ayurvedic principles — balancing fresh vegetables, grains, lentils, and herbal teas to leave you feeling light and energized.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/accommodation" variant="outline" className="!py-3 !px-6 text-sm font-bold">
                  <span>Explore Rooms &amp; Facilities</span>
                  <ArrowRight size={14} />
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp"
                  alt="Garden cottage exterior at The Hatha Yogashala Goa"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-02.webp"
                  alt="Ayurvedic vegetarian meal served during yoga holiday"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ 4. TESTIMONIALS ============ */}
      <section className="section bg-[var(--cream)] border-y border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Guest Stories
            </span>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-normal text-[var(--brown)]">
              What Guests Say About Their Stay
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-6 sm:p-7 border border-[var(--border)] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-[var(--gold)] mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} className="fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#433c37] leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)]/70">
                  <strong className="block text-sm font-bold text-[var(--brown)]">{item.author}</strong>
                  <span className="text-xs text-[var(--muted)]">{item.location} · {item.course}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ 5. FAQS ============ */}
      <section className="section bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Holiday Planning
            </span>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-normal text-[var(--brown)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {holidayFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 p-5 sm:p-6 shadow-xs"
              >
                <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--brown)] mb-2 flex items-start gap-2">
                  <HelpCircle size={18} className="text-[var(--coral-dark)] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#433c37] leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Ready for Your Yoga Holiday in Goa?"
        text="Check availability for 3, 5, or 7-day stays. We look forward to welcoming you to the shores of Querim."
        height="auto"
        className="!min-h-[260px] !py-8 md:!py-10"
      />
    </>
  );
}
