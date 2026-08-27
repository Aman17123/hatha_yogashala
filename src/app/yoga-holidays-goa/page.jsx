import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bed,
  CheckCircle2,
  Clock,
  Compass,
  Heart,
  HelpCircle,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Sunrise,
  Sunset,
  Utensils,
  Volume2,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";
import { Breadcrumbs, ButtonLink, Container, FinalCTA, JsonLd, PageHero } from "@/components/ui";
import { holidays } from "@/data/holidaysData";
import {
  absoluteUrl,
  makeMetadata,
  site,
  testimonials,
  reviewProfile,
  whatsappLink,
} from "@/data/siteData";
import ReviewsSection from "@/components/GoogleReviews";

// =========================================================================
// SEO METADATA & OPEN GRAPH
// =========================================================================
export const metadata = makeMetadata(
  "Yoga Holidays in Goa (3, 5 & 7 Days) | The Hatha Yogashala",
  "Recharge with authentic residential yoga holidays in Querim, North Goa. Includes daily Hatha yoga, Ayurvedic massage, sattvic food, and beachside relaxation.",
  "/yoga-holidays-goa",
  "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
  "yoga holidays Goa, short yoga retreat Goa, 3 day yoga holiday Goa, 7 day yoga break, beach yoga holiday India",
);

// =========================================================================
// STRUCTURED SCHEMA (JSON-LD)
// =========================================================================
const holidaySchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Yoga Holidays in Goa | The Hatha Yogashala",
  description:
    "Short format residential yoga holidays in Querim, North Goa with daily asana, Ayurvedic massage, beach walks, and organic sattvic meals.",
  url: absoluteUrl("/yoga-holidays-goa"),
  touristType: ["Yoga Holiday Guests", "Wellness Travelers", "Solo Travelers"],
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

// =========================================================================
// DATA: FREQUENTLY ASKED QUESTIONS
// =========================================================================
const holidayFaqs = [
  {
    question: "What is included in a Yoga Holiday at The Hatha Yogashala?",
    answer:
      "All packages include clean private or shared eco-cottage accommodation, daily morning and evening yoga & meditation sessions, full-body Ayurvedic Abhyanga massage, 3 freshly prepared vegetarian sattvic meals daily, unlimited filtered water, and herbal teas.",
  },
  {
    question: "Can beginners join a Yoga Holiday?",
    answer:
      "Yes! Our yoga holidays are open to all levels, including complete beginners. Our experienced teachers provide gentle guidance and modifications so you can practice comfortably at your own pace without pressure.",
  },
  {
    question: "Can I arrive on any day of the week?",
    answer:
      "Yes, yoga holidays feature flexible check-in dates throughout the season (October to May). You can start your 3, 5, or 7-day stay on whichever day fits your travel plans.",
  },
  {
    question: "How far is the beach from the holiday cottages?",
    answer:
      "The peaceful, uncrowded sands of Querim Beach are just a 5-minute leisurely walk through serene coconut palm paths from our campus.",
  },
  {
    question: "How do I reach the Yogashala from Goa airport or train stations?",
    answer:
      "We are located in Querim (Pernem), North Goa. Manohar International Airport (MOPA - GOX) is only a 40-minute drive away, while Dabolim Airport (GOI) is approx 90 minutes. We are happy to arrange trusted private airport taxi pickup upon request.",
  },
  {
    question: "Is it safe and suitable for solo female travelers?",
    answer:
      "Absolutely. A large proportion of our holiday guests are solo female travelers from all over the world. Our campus is secure, peaceful, and supported by a warm, welcoming community.",
  },
];

// =========================================================================
// DATA: SAMPLE DAILY SCHEDULE / RHYTHM
// =========================================================================
const dailySchedule = [
  {
    time: "06:30 AM – 07:30 AM",
    title: "Sunrise Pranayama & Beach Meditation",
    desc: "Awaken gently by the ocean with rhythmic breathwork, cleansing kriyas, and silent mindfulness as the sun rises over the Goan coast.",
    icon: Sunrise,
    tag: "Morning",
  },
  {
    time: "07:30 AM – 09:00 AM",
    title: "Classical Hatha Yoga Asana Flow",
    desc: "Energizing, alignment-focused posture practice in the open-air wooden shala, designed to stretch, build stamina, and unlock vital energy.",
    icon: Sun,
    tag: "Practice",
  },
  {
    time: "09:15 AM – 10:30 AM",
    title: "Fresh Sattvic Breakfast Buffet",
    desc: "Wholesome morning feast with fresh tropical fruits, warm Ayurvedic porridge, Goan herbal teas, fresh juices, and homemade breads.",
    icon: Utensils,
    tag: "Dining",
  },
  {
    time: "11:00 AM – 01:00 PM",
    title: "Ayurvedic Massage / Free Beach Leisure",
    desc: "Enjoy your included full-body herbal oil Abhyanga massage, stroll along Querim beach, read a book in a garden hammock, or explore nearby Arambol.",
    icon: Heart,
    tag: "Relaxation",
  },
  {
    time: "01:15 PM – 02:30 PM",
    title: "Mindful Ayurvedic Lunch",
    desc: "Nutrient-dense vegetarian lunch prepared according to Ayurvedic doshic balance, featuring organic grains, seasonal vegetables, and lentils.",
    icon: Utensils,
    tag: "Dining",
  },
  {
    time: "02:30 PM – 04:30 PM",
    title: "Afternoon Rest & Village Walks",
    desc: "Unhurried personal time for a restorative siesta, journaling under palm trees, or wandering through quiet coastal Goan village lanes.",
    icon: Wind,
    tag: "Free Time",
  },
  {
    time: "04:30 PM – 06:00 PM",
    title: "Sunset Restorative Yoga & Yin",
    desc: "Gentle, grounding evening session focusing on deep hip openers, restorative stretches, and breath awareness to soothe the nervous system.",
    icon: Sunset,
    tag: "Practice",
  },
  {
    time: "06:30 PM – 07:30 PM",
    title: "Tibetan Sound Healing & Yoga Nidra",
    desc: "Candlelit deep relaxation with resonant Tibetan singing bowls, guided body scan, and meditative stillness in the tranquil shala.",
    icon: Volume2,
    tag: "Healing",
  },
  {
    time: "07:45 PM – 09:00 PM",
    title: "Community Dinner & Stargazing",
    desc: "Warm evening meal with fellow yogis, herbal infusions, peaceful conversations, and restful preparation for deep night sleep.",
    icon: Utensils,
    tag: "Dining",
  },
];

// =========================================================================
// DATA: 4 CORE RETREAT PILLARS
// =========================================================================
const holidayActivities = [
  {
    title: "Daily Beach & Shala Yoga",
    desc: "Energizing morning Hatha and restorative evening Yin sessions in our breezy open-air wooden shala.",
    icon: Sun,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  },
  {
    title: "Ayurvedic Herbal Massages",
    desc: "Full-body Abhyanga massage with warm therapeutic oils to dissolve muscular tightness and fatigue.",
    icon: Heart,
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp",
  },
  {
    title: "Sound Healing & Yoga Nidra",
    desc: "Evening sound baths with singing bowls and guided psychic sleep to restore your nervous system.",
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

// =========================================================================
// DATA: LOCATION HIGHLIGHTS (QUERIM BEACH SANCTUARY)
// =========================================================================
const querimHighlights = [
  {
    title: "5-Minute Walk to Querim Beach",
    desc: "Querim (Keri) is North Goa's most peaceful beach — wide white sands, swaying pine groves, and clean ocean waters far from loud commercial crowds.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    tag: "Coastline",
  },
  {
    title: "Open-Air Natural Wooden Shala",
    desc: "Practice with the sound of rustling coconut fronds and ocean breezes. Fully equipped with natural mats, blocks, belts, and bolsters.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
    tag: "Sanctuary",
  },
  {
    title: "Lush Tropical Garden Campus",
    desc: "Stay nestled in lush tropical greenery, flowering frangipani trees, shaded hammock areas, and peaceful garden pathways.",
    image: "/images/accomodation/the-hatha-yogashala-arambol-goa-coconut-palms-sunlight-02.webp",
    tag: "Nature",
  },
];

// =========================================================================
// DATA: INCLUSIONS & AMENITIES
// =========================================================================
const inclusionsList = [
  {
    icon: Bed,
    title: "Peaceful Eco-Cottage Stay",
    desc: "Private or shared comfortable cottage with ensuite bathroom, hot shower, and garden patio.",
  },
  {
    icon: Sun,
    title: "2 Daily Guided Yoga Sessions",
    desc: "Morning energizing Hatha flow & evening restorative / Yin practice tailored for all levels.",
  },
  {
    icon: Utensils,
    title: "3 Sattvic Meals Daily",
    desc: "Nutrient-rich, delicious Ayurvedic vegetarian breakfasts, lunches, and dinners prepared fresh.",
  },
  {
    icon: Heart,
    title: "Ayurvedic Body Massage",
    desc: "Rejuvenating full-body herbal oil Abhyanga massage to soothe muscles and relieve stress.",
  },
  {
    icon: Volume2,
    title: "Sound Bath & Meditation",
    desc: "Candlelit Tibetan singing bowl sound healing sessions, pranayama, and guided Yoga Nidra.",
  },
  {
    icon: Waves,
    title: "Beachside Leisure & Nature",
    desc: "Direct 5-minute walking access to peaceful Querim beach for sunrise walks and ocean swims.",
  },
  {
    icon: Leaf,
    title: "Herbal Teas & Pure Water",
    desc: "Unlimited filtered drinking water, detox herbal infusions, fresh fruits, and chai.",
  },
  {
    icon: Sparkles,
    title: "All Yoga Equipment",
    desc: "High-density mats, cork blocks, straps, bolsters, and meditation cushions provided.",
  },
];

// =========================================================================
// DATA: TARGET GUEST PROFILES (WHO IS THIS FOR)
// =========================================================================
const holidayPersonas = [
  {
    title: "Solo Travelers & Seekers",
    subtitle: "A welcoming, peaceful home",
    desc: "Safe, supportive atmosphere where you can enjoy quiet solitude or connect with warm, like-minded yogis over shared meals.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-garden-lounge-candid-portrait-01.webp",
  },
  {
    title: "Professionals & Burnout Recovery",
    subtitle: "Digital detox & deep reset",
    desc: "Step away from screens, deadlines, and city bustle to let your nervous system recharge through slow living, fresh air, and deep sleep.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-savasana-final-relaxation-pose-02.webp",
  },
  {
    title: "Complete Beginners",
    subtitle: "Gentle, non-judgmental guidance",
    desc: "No prior yoga experience needed. Our instructors meet you where you are, teaching you safe alignment and mindful breath awareness.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-04.webp",
  },
  {
    title: "Couples & Friends",
    subtitle: "Reconnecting in tropical serenity",
    desc: "Share restorative beach sunrises, nourishing feasts, and transformative relaxation together in an unhurried tropical setting.",
    image: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-beach-group-tree-pose-vrksasana-01.webp",
  },
];

// =========================================================================
// DATA: PHOTO GALLERY MOMENTS
// =========================================================================
const galleryMoments = [
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-03.webp",
    alt: "Beach yoga session at sunrise on Querim beach Goa",
    title: "Sunrise Beach Practice",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
    alt: "Wooden garden cottages at The Hatha Yogashala Goa",
    title: "Garden Eco-Cottages",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-02.webp",
    alt: "Fresh Ayurvedic vegetarian thali meal",
    title: "Ayurvedic Sattvic Meals",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-02.webp",
    alt: "Candlelit meditation and sound healing in yoga shala",
    title: "Evening Sound Baths",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-garden-lounge-candid-portrait-06.webp",
    alt: "Relaxing in the tropical garden lounge",
    title: "Tranquil Garden Lounge",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-flower-petal-om-mandala-ceremony-01.webp",
    alt: "Flower petal sacred mandala ceremony",
    title: "Sacred Ceremonies",
  },
];

// =========================================================================
// MAIN PAGE COMPONENT
// =========================================================================
export default function YogaHolidaysGoaPage() {
  const whatsappBookingHref = whatsappLink(
    "Hi The Hatha Yogashala, I would like to check availability and inquire about booking a Yoga Holiday in Goa."
  );

  return (
    <>
      {/* Search Engine Rich Snippet Schema */}
      <JsonLd data={holidaySchema} />

      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <PageHero
        eyebrow="Mindful Coastal Escapes · Querim, North Goa"
        title="Yoga Holidays in North Goa"
        text="Step away from the demands of busy life. Experience 3, 5, or 7 days of restorative yoga practice, Ayurvedic healing, nourishing meals, and unhurried beach walks in Querim, North Goa."
        image="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-04.webp"
      />

      {/* =========================================================================
          SECTION 2 — QUICK HIGHLIGHTS STRIP
          ========================================================================= */}
      <div className="bg-[var(--surface)] border-b border-[var(--border)] py-4">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
            <div className="pt-2 md:pt-0">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                Duration Options
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-[var(--brown)]">
                3, 5 &amp; 7-Day Stays
              </span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                Check-in
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-[var(--brown)]">
                Flexible Arrival Dates
              </span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                Location
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-[var(--brown)]">
                5 Min to Querim Beach
              </span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                Experience
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-[var(--brown)]">
                Yoga · Massage · Meals
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* =========================================================================
          SECTION 3 — ALL-INCLUSIVE PACKAGES GRID (3, 5 & 7 DAYS)
          ========================================================================= */}
      <section className="section bg-white" id="packages">
        <Container>
          <div className="section-heading">
            <p className="eyebrow plain">Choose Your Ideal Stay</p>
            <h2>All-Inclusive Yoga Holiday Packages</h2>
            <p className="max-w-2xl mx-auto">
              Flexible arrival dates throughout the season with accommodation, 3 sattvic meals daily, daily yoga, and Ayurvedic therapies included.
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
                    <span className="inline-flex rounded-full bg-[var(--coral-dark)] px-3.5 py-1.5 text-[13px] font-bold text-white shadow-md">
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
                        <span>Full-Body Ayurvedic Herbal Massage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[var(--coral-dark)] shrink-0" />
                        <span>3 Sattvic Vegetarian Meals Daily</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[var(--coral-dark)] shrink-0" />
                        <span>Ensuite Garden Cottage Accommodation</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      href={`/holidays/${pkg.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--surface)] px-4 py-3.5 text-xs sm:text-sm font-bold text-[var(--coral-dark)] transition-all hover:bg-[var(--coral-dark)] hover:text-white shadow-xs"
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

      {/* =========================================================================
          SECTION 4 — SAMPLE DAILY RHYTHM / SCHEDULE TIMELINE
          ========================================================================= */}
      <section className="section bg-[var(--cream)] border-y border-[var(--border)]" id="daily-schedule">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Unhurried Flow
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              A Typical Day on Your Yoga Holiday
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
              A balanced rhythm designed to awaken your body, nourish your digestion, and leave ample free time for coastal exploration and rest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Timeline Column */}
            <div className="lg:col-span-7 space-y-3.5">
              {dailySchedule.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[var(--border)] shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:w-44 shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-[var(--surface)] flex items-center justify-center text-[var(--coral-dark)] shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[var(--coral-dark)] block">
                          {item.time}
                        </span>
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)] bg-[var(--surface)] px-2 py-0.5 rounded-full mt-0.5">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    <div className="sm:border-l sm:border-[var(--border)] sm:pl-4 flex-1">
                      <h3 className="font-heading text-base font-bold text-[var(--brown)]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#544c45] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual Sticky Card Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[4/5]">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp"
                  alt="Students enjoying morning yoga by Querim beach in Goa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                    <Sparkles size={13} />
                    Completely Optional Schedule
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold">
                    Practice at Your Own Pace
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-2 leading-relaxed">
                    Every session is an invitation, not an obligation. Sleep in, take extra beach hours, or join every class — this holiday is entirely yours.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[var(--border)] shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface)] flex items-center justify-center text-[var(--coral-dark)] shrink-0">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-[var(--brown)]">
                      Flexible Free Time
                    </h4>
                    <p className="text-xs text-[var(--muted)]">
                      Explore Querim caves, Tiracol fort, surf spots, and local spice markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5 — THE 4 PILLARS OF YOUR GOA YOGA HOLIDAY
          ========================================================================= */}
      <section className="section bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Holistic Rejuvenation
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              The 4 Pillars of Your Goa Yoga Holiday
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Every day is crafted to align physical health, mental clarity, and deep sensory rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {holidayActivities.map((act, i) => {
              const Icon = act.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl bg-white border border-[var(--border)] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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

      {/* =========================================================================
          SECTION 6 — THE QUERIM BEACH SANCTUARY (LOCATION SHOWCASE)
          ========================================================================= */}
      <section className="section bg-[var(--surface)]/30 border-y border-[var(--border)]" id="location">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              The Haven
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Why Querim, North Goa is the Ideal Sanctuary
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
              Far removed from commercial party strips, Querim offers undisturbed nature, sweet-water river estuaries, and empty coastal horizons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {querimHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[var(--border)] overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative w-full aspect-[16/11] overflow-hidden">
                  <Image
                    src={hl.image}
                    alt={hl.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)] shadow-xs">
                      {hl.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--brown)]">
                      {hl.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 7 — SANCTUARY ACCOMMODATION & SATTVIC DINING
          ========================================================================= */}
      <section className="section bg-white" id="accommodation">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                Sanctuary &amp; Nourishment
              </span>
              <h2 className="mt-2 text-[var(--brown)]">
                Tranquil Cottage Living &amp; Sattvic Organic Dining
              </h2>
              <div className="mt-6 space-y-4 text-[15px] text-[#433c37] leading-relaxed">
                <p>
                  Our eco-cottages and private rooms are designed for deep, undisturbed sleep. Surrounded by lush coconut palms and flowering garden pathways, every room includes hot water, ceiling fans, private bathrooms, and high-speed Wi-Fi.
                </p>
                <p>
                  Nutrition is an essential pillar of your holiday. Our kitchen prepares three wholesome vegetarian meals daily following Ayurvedic principles — balancing fresh vegetables, grains, lentils, and herbal teas to leave you feeling light and energized.
                </p>
              </div>

              {/* Room & Food Amenities */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-[var(--brown)]">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Bed size={15} className="text-[var(--coral-dark)]" />
                  <span>Ensuite Bathroom</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Wind size={15} className="text-[var(--coral-dark)]" />
                  <span>Garden Balcony</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Wifi size={15} className="text-[var(--coral-dark)]" />
                  <span>High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Utensils size={15} className="text-[var(--coral-dark)]" />
                  <span>3 Buffet Meals Daily</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Sun size={15} className="text-[var(--coral-dark)]" />
                  <span>Solar Hot Water</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--surface)]">
                  <Leaf size={15} className="text-[var(--coral-dark)]" />
                  <span>Pure Herbal Teas</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/accommodation-goa" variant="outline" className="!py-3 !px-6 text-sm font-bold">
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

      {/* =========================================================================
          SECTION 8 — EVERYTHING INCLUDED IN YOUR STAY (8 INCLUSIONS)
          ========================================================================= */}
      <section className="section bg-[var(--cream)] border-y border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Transparent &amp; Complete
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Everything Included in Your Stay
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
              No hidden costs. Everything you need for a restorative and enriching holiday is prepared for you upon arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusionsList.map((inc, idx) => {
              const Icon = inc.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[var(--border)] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface)] flex items-center justify-center text-[var(--coral-dark)] mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[var(--brown)]">
                      {inc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 leading-relaxed">
                      {inc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9 — WHO IS THIS YOGA HOLIDAY FOR (TARGET PERSONAS)
          ========================================================================= */}
      <section className="section bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Tailored For You
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Who is a Goa Yoga Holiday Perfect For?
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Whether you are traveling on your own, resetting from career burnout, or taking your first steps in yoga.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {holidayPersonas.map((persona, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[var(--border)] bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative w-full aspect-[16/11] overflow-hidden">
                  <Image
                    src={persona.image}
                    alt={persona.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--coral-dark)]">
                      {persona.subtitle}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[var(--brown)] mt-1">
                      {persona.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] mt-2.5 leading-relaxed">
                      {persona.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 10 — HOLIDAY MOMENTS & ATMOSPHERE (PHOTO MOSAIC)
          ========================================================================= */}
      <section className="section bg-[var(--surface)]/30 border-y border-[var(--border)]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
                Life on Holiday
              </span>
              <h2 className="mt-2 text-[var(--brown)]">
                Moments &amp; Memories at The Hatha Yogashala
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--coral-dark)] hover:underline group"
            >
              <span>View Full School Gallery</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryMoments.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xs hover:shadow-lg transition-all"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs sm:text-sm font-bold">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 11 — GOOGLE REVIEWS & TESTIMONIALS (Interactive Carousel)
          ========================================================================= */}
      <ReviewsSection
        testimonials={testimonials}
        reviewProfile={reviewProfile}
        title="Student Reviews"
        subtitle="Verified 5.0 Rating for The Hatha Yogashala Goa"
      />

      {/* =========================================================================
          SECTION 12 — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="section bg-[var(--cream)] border-t border-[var(--border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--coral-dark)]">
              Practical Information
            </span>
            <h2 className="mt-2 text-[var(--brown)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {holidayFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 sm:p-6 shadow-xs"
              >
                <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--brown)] mb-2 flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-[var(--coral-dark)] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#433c37] leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 13 — FINAL CALL TO ACTION (CTA)
          ========================================================================= */}
      <FinalCTA
        title="Ready for Your Yoga Holiday in Goa?"
        text="Check availability for 3, 5, or 7-day stays. We look forward to welcoming you to the peaceful shores of Querim."
        height="auto"
        className="!min-h-[260px] !py-8 md:!py-10"
      />
    </>
  );
}
