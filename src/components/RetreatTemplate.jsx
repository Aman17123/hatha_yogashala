import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Heart,
  Home,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Waves,
  XCircle,
} from "lucide-react";
import { retreats } from "@/data/coursesData";
import { absoluteUrl, site } from "@/data/siteData";
import { Accordion } from "./Interactive";
import { Container, ButtonLink, JsonLd, Media, MobileStickyBar, RetreatCard, SectionHeading } from "./ui";
import BookingSidebar from "./retreat/BookingSidebar";
import BookingForm from "./retreat/BookingForm";
import TestimonialCarousel from "./retreat/TestimonialCarousel";
import { FadeIn, Stagger, StaggerItem } from "./retreat/Motion";
import { SiWhatsapp } from "react-icons/si";

const whyIcons = {
  users: Users,
  flower: Sparkles,
  sparkles: Sparkles,
  waves: Waves,
  leaf: Leaf,
  home: Home,
  heart: Heart,
};

function RetreatEyebrow({ children }) {
  return (
    <p className="mb-2 flex items-center gap-2 text-[13.5px] font-extrabold uppercase tracking-[0.16em] text-[var(--coral-dark)]">
      <Sparkles size={14} aria-hidden="true" />
      {children}
    </p>
  );
}

export default function RetreatTemplate({ retreat, page }) {
  const p = page;
  const isSimple = Boolean(p.hidePricingAndSidebar || retreat.hidePricingAndSidebar);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const tripOffers = [];
  if (p.pricing && typeof p.pricing.shared?.price === "number") {
    tripOffers.push({
      "@type": "Offer",
      name: "Shared room",
      price: p.pricing.shared.price,
      priceCurrency: p.pricing.shared.currency,
      availability: "https://schema.org/InStock",
    });
  }
  if (p.pricing && typeof p.pricing.private?.price === "number") {
    tripOffers.push({
      "@type": "Offer",
      name: "Private room",
      price: p.pricing.private.price,
      priceCurrency: p.pricing.private.currency,
      availability: "https://schema.org/InStock",
    });
  }
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: retreat.name,
    description: retreat.description,
    url: absoluteUrl(`/retreats/${retreat.slug}`),
    touristType: "Yoga and wellness travellers",
    provider: { "@type": "Organization", name: site.name, url: site.url },
    itinerary: p.daysSchedule?.length > 0 ? {
      "@type": "ItemList",
      itemListElement: p.daysSchedule.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Day ${index + 1} — ${day.title}`,
        description: day.intro,
      })),
    } : undefined,
    offers: tripOffers.length > 0 ? tripOffers : undefined,
  };
  const currencySymbol =
    p.pricing?.shared?.currency === "INR" || retreat?.priceCurrency === "INR"
      ? "₹"
      : p.pricing?.shared?.currency === "EUR"
        ? "€"
        : "$";
  const priceRange =
    p.pricing && typeof p.pricing.shared?.price === "number" && typeof p.pricing.private?.price === "number"
      ? `${currencySymbol}${p.pricing.shared.price}-${currencySymbol}${p.pricing.private.price}`
      : undefined;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl("/")}#organization`,
    name: site.name,
    url: site.url,
    image: absoluteUrl(site.defaultImage),
    priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goa",
      addressCountry: "IN",
    },
    areaServed: { "@type": "AdministrativeArea", name: "Goa" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: p.rating,
      reviewCount: p.ratingCount,
    },
  };
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: retreat.name,
    description: p.overviewSummary[0],
    startDate: p.dates?.[0]?.start,
    endDate: p.dates?.[0]?.end,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: site.name,
      address: { "@type": "PostalAddress", addressLocality: "Goa", addressCountry: "IN" },
    },
    offers:
      p.pricing && typeof p.pricing.shared?.price === "number"
        ? {
            "@type": "Offer",
            price: p.pricing.shared.price,
            priceCurrency: p.pricing.shared.currency,
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/retreats/${retreat.slug}`),
          }
        : undefined,
    organizer: { "@type": "Organization", name: site.name, url: site.url },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Yoga retreats", item: absoluteUrl("/retreats") },
      { "@type": "ListItem", position: 3, name: retreat.name, item: absoluteUrl(`/retreats/${retreat.slug}`) },
    ],
  };
  const related = retreats.filter((item) => item.slug !== retreat.slug).slice(0, 3);
  const whatsappHref = "/contact#whatsapp";

  return (
    <>
      <JsonLd data={tripSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={eventSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ============ HERO SECTION ============ */}
      <section className="retreat-hero">
        <div className="retreat-hero-bg">
          <Image
            src={p.heroImage}
            alt={p.heroImageAlt || retreat.name}
            fill
            priority
            sizes="100vw"
            className="retreat-hero-bg-img"
          />
          <div className="retreat-hero-overlay" />
          <span className="retreat-hero-orb" aria-hidden="true" />
        </div>
        <Container className="retreat-hero-inner">
          <Stagger gap={0.11}>
            <StaggerItem>
              <nav aria-label="Breadcrumb" className="retreat-hero-breadcrumbs">
                <ol>
                  <li><Link href="/">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/retreats">Yoga Retreats</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">{retreat.name}</li>
                </ol>
              </nav>
            </StaggerItem>

            <StaggerItem>
              <div className="retreat-hero-pills">
                <span>{p.category}</span>
                <span>Residential · All levels</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1>{retreat.name}</h1>
            </StaggerItem>

            <StaggerItem>
              <p className="retreat-hero-tagline">{p.heroTagline}</p>
            </StaggerItem>

            <StaggerItem>
              <div className="retreat-hero-meta">
                <div>
                  <Clock3 size={17} aria-hidden="true" />
                  <span><strong>Duration</strong>{p.duration}</span>
                </div>
                <div>
                  <MapPin size={17} aria-hidden="true" />
                  <span><strong>Location</strong>{p.location}</span>
                </div>
                <div>
                  <span className="hero-stars" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className={`size-3.5 ${i < Math.round(p.rating) ? "fill-[var(--gold)] text-[var(--gold)]" : "fill-white/30 text-white/40"}`} />
                    ))}
                  </span>
                  <span><strong>{p.rating}/5</strong>{p.ratingCount} verified reviews</span>
                </div>
                <div>
                  <Users size={17} aria-hidden="true" />
                  <span><strong>{p.students}</strong>retreat guests</span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="retreat-hero-actions">
                {isSimple ? (
                  <>
                    <ButtonLink href="#inquiry" className="retreat-hero-cta">
                      Inquire Now
                    </ButtonLink>
                    <a href={whatsappHref} className="button retreat-whatsapp">
                      <SiWhatsapp size={17} aria-hidden="true" />
                      WhatsApp Inquiry
                    </a>
                    <ButtonLink href="/contact" variant="light">
                      Schedule a Call
                    </ButtonLink>
                  </>
                ) : (
                  <>
                    <ButtonLink href="#registration" className="retreat-hero-cta">
                      Book Your Retreat
                    </ButtonLink>
                    <ButtonLink href="#accommodation" variant="light">
                      View Accommodation
                    </ButtonLink>
                    <a href={whatsappHref} className="button retreat-whatsapp">
                      <SiWhatsapp size={17} aria-hidden="true" />
                      WhatsApp Inquiry
                    </a>
                  </>
                )}
              </div>
            </StaggerItem>
          </Stagger>
        </Container>

        <div className="retreat-trust-badges" aria-label="Retreat trust badges">
          <Container>
            {p.trustBadges.map((badge) => (
              <span key={badge}>
                <Check size={14} aria-hidden="true" />
                {badge}
              </span>
            ))}
          </Container>
        </div>
      </section>

      {/* ============ STICKY BOOKING SIDEBAR / CONTENT ============ */}
      <div className={isSimple ? "container max-w-4xl mx-auto px-4 py-12" : "container retreat-layout"}>
        {!isSimple && (
          <>
            {/* Sticky booking sidebar */}
            <BookingSidebar page={p} retreat={retreat} />
            <MobileStickyBar
              left={
                <p className="text-[13.5px] font-black leading-tight text-[var(--brown)]">
                  From <span className="text-[var(--coral-dark)]">{typeof p.pricing?.shared?.price === "number" ? `${currencySymbol}${p.pricing.shared.price.toLocaleString()}` : "On enquiry"}</span>
                  <span className="text-[13.5px] font-semibold text-[var(--muted)]"> /person</span>
                </p>
              }
              right={
                <>
                  <a href="#book" className="button button-primary !px-4 !py-2.5 !text-[13.5px]">Book Your Retreat</a>
                  <a href={whatsappHref} className="button booking-whatsapp !px-3 !py-2.5 !text-[13.5px]" aria-label="WhatsApp inquiry">
                    <SiWhatsapp size={15} aria-hidden="true" />
                  </a>
                </>
              }
            />
          </>
        )}

        <div className={isSimple ? "retreat-content !max-w-none !w-full" : "retreat-content"} id="overview">

          {/* ============ SECTION 1 — OVERVIEW ============ */}
          <section className="retreat-section">
            <RetreatEyebrow>Overview</RetreatEyebrow>
            <h2 className="retreat-section-title">A transformative reset in North Goa</h2>
            <div className="retreat-overview">
              {p.overview.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.04}>
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>
            <div className="retreat-overview-tags">
              {["Relaxation", "Meditation", "Beach experience", "Community", "Wellness", "Yoga practice"].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>

          {/* ============ SECTION 2 — WHAT THIS IS (SEO / AEO) ============ */}
          {retreat.whatIs && (
            <section className="retreat-section" id="what-is">
              <RetreatEyebrow>What Is This</RetreatEyebrow>
              <h2 className="retreat-section-title">{retreat.whatIs.heading}</h2>
              <div className="retreat-overview">
                {retreat.whatIs.paragraphs.map((paragraph, index) => (
                  <FadeIn key={index} delay={index * 0.04}>
                    <p>{paragraph}</p>
                  </FadeIn>
                ))}
              </div>
              {retreat.whatIs.points?.length > 0 && (
                <Stagger className="retreat-highlight-grid">
                  {retreat.whatIs.points.map((point) => (
                    <StaggerItem key={point}>
                      <div className="retreat-highlight-card">
                        <CheckCircle2 size={19} className="text-[var(--coral-dark)]" aria-hidden="true" />
                        <span>{point}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              )}

              {/* In-body Visual Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-06.webp"
                    alt="Morning coastal yoga practice on the beach in Goa"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-03.webp"
                    alt="Evening restorative sound healing and meditation session"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          )}

          {/* ============ SECTION: VEDIC WISDOM & SACRED FIRE RITUALS ============ */}
          <section className="retreat-section" id="vedic-rituals">
            <RetreatEyebrow>Vedic Heritage</RetreatEyebrow>
            <h2 className="retreat-section-title">Sacred Vedic Rituals &amp; Fire Puja</h2>
            <p className="retreat-section-lead">
              Experience the depth of ancient yogic traditions. From sacred Havan fire ceremonies and Vedic mantra chanting to flower petal Om mandalas and candlelit Trataka meditation, these rituals purify the energy and ground your retreat practice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-6">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-havan-fire-puja-opening-ceremony-01.webp"
                  alt="Traditional Vedic Havan fire puja ceremony at The Hatha Yogashala Goa"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Vedic Havan Fire Puja</span>
                </div>
              </div>

              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-flower-petal-om-mandala-ceremony-01.webp"
                  alt="Sacred flower petal Om mandala ceremony"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Sacred Om Mandalas</span>
                </div>
              </div>

              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp"
                  alt="Evening candlelit Trataka and sound meditation inside the shala"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Candlelit Trataka Meditation</span>
                </div>
              </div>

              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-teacher-led-meditation-philosophy-talk-01.webp"
                  alt="Teacher-led Vedic philosophy and Upanishads talk"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Vedic Philosophy &amp; Chanting</span>
                </div>
              </div>
            </div>
          </section>

          {/* ============ SECTION: AERIAL & WALL-SUPPORTED ALIGNMENT ============ */}
          <section className="retreat-section" id="aerial-alignment">
            <RetreatEyebrow>Modern &amp; Classical Alignment</RetreatEyebrow>
            <h2 className="retreat-section-title">Aerial &amp; Wall-Supported Inversions</h2>
            <p className="retreat-section-lead">
              Deepen your asana practice with therapeutic wall ropes and supported aerial inversions. This allows effortless spinal decompression, precise shoulder opening, and safe Sirsasana (headstand) mastery regardless of your experience level.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-01.webp"
                  alt="Yoga student practicing wall-supported Sirsasana headstand with rope alignment"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white">Wall-Supported Sirsasana</span>
                </div>
              </div>

              <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-03.webp"
                  alt="Precise alignment and spine decompression using yoga wall props"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white">Spine Decompression &amp; Props</span>
                </div>
              </div>

              <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-beach-headstand-sirsasana-pose-01.webp"
                  alt="Confident headstand inversion on the beach in Goa"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white">Freestanding Inversions</span>
                </div>
              </div>
            </div>
          </section>

          {/* ============ SECTION: AYURVEDIC HEALING & COOKING WISDOM ============ */}
          <section className="retreat-section" id="ayurveda-wisdom">
            <RetreatEyebrow>Ayurvedic Living</RetreatEyebrow>
            <h2 className="retreat-section-title">Ayurvedic Therapies &amp; Kitchen Wisdom</h2>
            <p className="retreat-section-lead">
              Ayurveda and Yoga are sister sciences of longevity. Enjoy rejuvenating herbal oil massages, dosha-balancing Ayurvedic meals, and hands-on interactive cooking masterclasses in our open-air garden kitchen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-ayurvedic-cooking-class-kitchen-01.webp"
                  alt="Students learning traditional Ayurvedic cooking and spices at The Hatha Yogashala"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Ayurvedic Cooking Masterclasses</span>
                </div>
              </div>

              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-ayurvedic-cooking-class-kitchen-02.webp"
                  alt="Hands-on Indian roti and herbal preparation with resident chefs"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Dosha-Balancing Recipes</span>
                </div>
              </div>

              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-01.webp"
                  alt="Fresh organic Sattvic vegetarian ashram thali in Goa"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Organic Sattvic Feasts</span>
                </div>
              </div>
            </div>
          </section>

          {/* ============ SECTION: COMMUNITY CELEBRATION & FESTIVAL GATHERINGS ============ */}
          <section className="retreat-section" id="community-festivals">
            <RetreatEyebrow>Community &amp; Festivals</RetreatEyebrow>
            <h2 className="retreat-section-title">Community Celebration, Kirtan &amp; Ecstatic Gatherings</h2>
            <p className="retreat-section-lead">
              Retreat life at Hatha Yogashala is vibrant and heartwarming. Join our evening live kirtans, joyful community gatherings, sacred mandala art workshops, and beach sunset circles where lifelong friendships are formed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-birthday-celebration-community-gathering-01.webp"
                  alt="Evening retreat community celebration and live music at The Hatha Yogashala Goa"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Live Kirtan &amp; Celebrations</span>
                </div>
              </div>

              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-mandala-art-therapy-workshop-01.webp"
                  alt="Creative mandala art therapy and sacred geometry workshop"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Mandala Art Therapy</span>
                </div>
              </div>

              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src="/images/hatha-yogashala/hatha-yogashala-pernem-goa-beach-group-tree-pose-vrksasana-01.webp"
                  alt="Joyful beach yoga group connection at Querim beach Goa"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white tracking-wide">Beach Sunset Connection</span>
                </div>
              </div>
            </div>
          </section>

          {/* ============ SECTION — ACCOMMODATION (Standard Retreats Only) ============ */}
          {!isSimple && (
            <section className="retreat-section" id="accommodation">
              <RetreatEyebrow>Accommodation</RetreatEyebrow>
              <h2 className="retreat-section-title">Comfortable living &amp; sanctuary spaces</h2>
              <p className="retreat-section-lead">
                Rest deeply between your yoga practices. Every space is air-conditioned, calm, clean, and located inside our tranquil beachside ashram campus in North Goa.
              </p>

              {/* Structured Accommodation Options */}
              {p.accommodation.options?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {p.accommodation.options.map((opt) => (
                    <article key={opt.name} className="p-5 rounded-2xl border border-[var(--border)] bg-white shadow-xs">
                      <h3 className="font-heading text-lg font-semibold text-[var(--brown)] mb-2 flex items-center gap-2">
                        <Home size={18} className="text-[var(--coral-dark)] shrink-0" />
                        {opt.name}
                      </h3>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{opt.description}</p>
                    </article>
                  ))}
                </div>
              )}

              <div className="retreat-rooms mt-8">
                <FadeIn>
                  <article className="retreat-room-block">
                    <h3>Shared Living &amp; Dorms</h3>
                    <p>Thoughtfully paired twin beds and community dorms with garden views and the easy friendships of retreat life.</p>
                    <div className="retreat-room-gallery">
                      {p.accommodation.sharedGallery.map((image) => (
                        <Media key={image.caption} src={image.src} alt={image.alt} className="h-40 w-full rounded-2xl" />
                      ))}
                    </div>
                  </article>
                </FadeIn>
                <FadeIn delay={0.08}>
                  <article className="retreat-room-block">
                    <h3>Private Rooms</h3>
                    <p>Your own sanctuary with an attached bathroom and quiet environment for those who prefer solitude and personal space.</p>
                    <div className="retreat-room-gallery">
                      {p.accommodation.privateGallery.map((image) => (
                        <Media key={image.caption} src={image.src} alt={image.alt} className="h-40 w-full rounded-2xl" />
                      ))}
                    </div>
                  </article>
                </FadeIn>
              </div>
              <div className="retreat-facilities">
                <h3>Facilities &amp; Amenities</h3>
                <ul>
                  {p.accommodation.facilities.map((facility) => (
                    <li key={facility.label}>
                      <Check size={15} className="text-[var(--coral-dark)]" aria-hidden="true" />
                      {facility.label}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* ============ SECTION — DAILY SCHEDULE (Standard Retreats Only) ============ */}
          {!isSimple && (p.scheduleMatrix || p.dailySchedule) && (
            <section className="retreat-section" id="schedule">
              <RetreatEyebrow>Daily Schedule</RetreatEyebrow>
              <h2 className="retreat-section-title">Daily rhythm &amp; routine</h2>
              <div className="inline-block bg-[var(--coral-dark)]/10 text-[var(--coral-dark)] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide mt-2">
                <em>Check-in: {p.checkIn || "11:00 AM"} | Check-out: {p.checkOut || "1:00 PM"}</em>
              </div>

              {p.scheduleMatrix ? (
                <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[var(--coral-dark)] text-white">
                          {p.scheduleMatrix.columns.map((col, cIdx) => (
                            <th
                              key={col}
                              className={`py-3.5 px-4 font-sans font-bold ${
                                cIdx < p.scheduleMatrix.columns.length - 1 ? "border-r border-white/20" : ""
                              }`}
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {p.scheduleMatrix.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={`border-b border-[var(--border)] transition-colors hover:bg-[var(--surface)]/50 ${
                              rIdx % 2 === 1 ? "bg-[var(--cream)]" : "bg-white"
                            }`}
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 ${cIdx === 0 ? "font-bold text-[var(--coral-dark)] whitespace-nowrap" : "text-[var(--brown)] font-medium"} ${
                                  cIdx < row.length - 1 ? "border-r border-[var(--border)]" : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[var(--coral-dark)] text-white">
                          <th className="py-3.5 px-6 font-sans font-bold border-r border-white/20 w-1/3">
                            Time
                          </th>
                          <th className="py-3.5 px-6 font-sans font-bold">
                            Activity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.dailySchedule.map(([time, activity], idx) => (
                          <tr
                            key={time}
                            className={`border-b border-[var(--border)] transition-colors hover:bg-[var(--surface)]/50 ${
                              idx % 2 === 1 ? "bg-[var(--cream)]" : "bg-white"
                            }`}
                          >
                            <td className="py-3.5 px-6 font-bold text-[var(--coral-dark)] border-r border-[var(--border)] whitespace-nowrap">
                              {time}
                            </td>
                            <td className="py-3.5 px-6 font-medium text-[var(--brown)]">
                              {activity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* ============ SECTION — EXCURSIONS & ACTIVITIES (Standard Retreats Only) ============ */}
          {!isSimple && (
            <section className="retreat-section" id="excursions">
              <RetreatEyebrow>Excursions &amp; Activities</RetreatEyebrow>
              <h2 className="retreat-section-title">Beyond the mat — the Goa experience</h2>
              {p.excursionsStory && (
                <div className="p-5 sm:p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] my-6">
                  <p className="text-sm sm:text-base text-[var(--brown)] leading-relaxed font-normal">
                    {p.excursionsStory}
                  </p>
                </div>
              )}
              <div className="retreat-experience-grid">
                {p.experiences.map((exp) => (
                  <article key={exp.title} className="retreat-experience-card">
                    <span className="retreat-experience-tag">{exp.tag}</span>
                    <h3>{exp.title}</h3>
                    <p>{exp.text}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* ============ SECTION — WHY CHOOSE (Standard Retreats Only) ============ */}
          {!isSimple && p.whyChoose?.length > 0 && (
            <section className="retreat-section" id="why">
              <RetreatEyebrow>Why choose this retreat</RetreatEyebrow>
              <h2 className="retreat-section-title">Ten reasons guests keep coming back</h2>
              <Stagger className="retreat-why-grid">
                {p.whyChoose.map((item) => {
                  const Icon = whyIcons[item.icon] || Sparkles;
                  return (
                    <StaggerItem key={item.title}>
                      <article className="retreat-why-card">
                        <span className="retreat-why-icon">
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </article>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </section>
          )}

          {/* ============ SECTION — MEALS (Standard Retreats Only) ============ */}
          {!isSimple && p.meals?.length > 0 && (
            <section className="retreat-section" id="meals">
              <RetreatEyebrow>Meals</RetreatEyebrow>
              <h2 className="retreat-section-title">Sattvic food, cooked with love</h2>
              <p className="retreat-section-lead">
                Three freshly prepared vegetarian meals a day, plus snacks — the fuel your practice and rest depend on.
              </p>
              <Stagger className="retreat-meal-grid">
                {p.meals.map((meal) => (
                  <StaggerItem key={meal.meal}>
                    <article className="retreat-meal-card">
                      <Media src={meal.image} alt={`${meal.meal} at the retreat`} className="h-44 w-full" />
                      <div className="retreat-meal-body">
                        <span className="retreat-meal-time">
                          <Clock3 size={13} aria-hidden="true" /> {meal.time}
                        </span>
                        <h3>{meal.meal}</h3>
                        <p>{meal.text}</p>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
              {p.mealPhilosophy && (
                <div className="retreat-meal-philosophy">
                  <Leaf size={22} className="text-[var(--coral)]" aria-hidden="true" />
                  <div>
                    <h3>{p.mealPhilosophy.title}</h3>
                    <ul>
                      {p.mealPhilosophy.points.map((point) => (
                        <li key={point}>
                          <Check size={14} className="text-[var(--coral)]" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* ============ SECTION — WHAT'S INCLUDED (Standard Retreats Only) ============ */}
          {!isSimple && p.included?.length > 0 && (
            <section className="retreat-section" id="included">
              <RetreatEyebrow>What&apos;s included</RetreatEyebrow>
              <h2 className="retreat-section-title">Everything you need, nothing you don&apos;t</h2>
              <div className="retreat-inclusion-grid">
                <article className="retreat-include-card">
                  <h3>
                    <CheckCircle2 size={18} aria-hidden="true" /> Included
                  </h3>
                  <ul>
                    {p.included.map((item) => (
                      <li key={item}>
                        <Check size={15} className="text-[var(--coral)]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="retreat-exclude-card">
                  <h3>
                    <XCircle size={18} aria-hidden="true" /> Not included
                  </h3>
                  <ul>
                    {p.notIncluded.map((item) => (
                      <li key={item}>
                        <XCircle size={15} className="text-[var(--coral-dark)]/60" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>
          )}

          {/* ============ SECTION — TESTIMONIALS ============ */}
          <section className="retreat-section" id="reviews">
            <RetreatEyebrow>Guest stories</RetreatEyebrow>
            <h2 className="retreat-section-title">Trusted by travellers from 30+ countries</h2>
            <TestimonialCarousel testimonials={p.testimonials} />
          </section>

          {/* ============ SECTION — FAQ ============ */}
          <section className="retreat-section" id="faq">
            <RetreatEyebrow>Retreat FAQ</RetreatEyebrow>
            <h2 className="retreat-section-title">Answers before you ask</h2>
            <Accordion items={p.faqs} />
          </section>

          {/* ============ SECTION — INQUIRY / REGISTRATION ============ */}
          {isSimple ? (
            <section className="retreat-section" id="inquiry">
              <RetreatEyebrow>Inquire &amp; Connect</RetreatEyebrow>
              <h2 className="retreat-section-title">Inquire About {retreat.name}</h2>
              <p className="retreat-section-lead">
                Interested in joining or have questions about upcoming dates and arrangements? Send your enquiry below and our team will get back to you within 24 hours.
              </p>
              <FadeIn>
                <div className="retreat-booking-form mt-6">
                  <BookingForm
                    retreatName={retreat.name}
                    showPayment={false}
                    submitLabel="Send Enquiry"
                  />
                  <div className="retreat-booking-trust">
                    <span>
                      <ShieldCheck size={15} aria-hidden="true" /> Secure confidential inquiry
                    </span>
                    <span>
                      <LockIcon /> Spam protected
                    </span>
                    <span>
                      <Check size={15} aria-hidden="true" /> No spam, ever
                    </span>
                  </div>
                </div>
              </FadeIn>
            </section>
          ) : (
            <section className="retreat-section" id="registration">
              {/* Centered Course Fees Title with Underline */}
              <div className="text-center mb-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[var(--brown)]">
                  Course Fees
                </h2>
                <div className="w-16 h-0.5 bg-[var(--coral-dark)] mx-auto mt-2.5" />
              </div>

              {/* Course Fees Table */}
              {p.feeRows && (
                <div className="max-w-2xl mx-auto overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-xs mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-center">
                      <thead>
                        {/* Retreat Name Subheader Row */}
                        <tr className="bg-white border-b border-[var(--border)]">
                          <th
                            colSpan={2}
                            className="py-3 px-4 text-center font-heading text-sm sm:text-base font-normal text-[var(--brown)]"
                          >
                            {p.feeTableName || `${p.days} Days Yoga Retreat`}
                          </th>
                        </tr>
                        {/* Table Column Headers (Orange Background) */}
                        <tr className="bg-[var(--coral-dark)] text-white">
                          <th className="py-3 px-6 text-center font-sans font-bold text-xs sm:text-sm border-r border-white/20 w-1/2">
                            {p.facilityHeader || "Facilities"}
                          </th>
                          <th className="py-3 px-6 text-center font-sans font-bold text-xs sm:text-sm w-1/2">
                            {p.priceHeader || "Price In Euro"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.feeRows.map((row, idx) => (
                          <tr
                            key={row.facility}
                            className={`border-b border-[var(--border)] transition-colors hover:bg-[var(--surface)]/50 ${
                              idx % 2 === 1 ? "bg-[var(--surface)]/30" : "bg-white"
                            }`}
                          >
                            <td className="py-3.5 px-6 text-center font-medium text-xs sm:text-sm text-[var(--brown)] border-r border-[var(--border)]">
                              {row.facility}
                            </td>
                            <td className="py-3.5 px-6 text-center font-normal text-xs sm:text-sm text-[var(--brown)]">
                              {row.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <FadeIn>
                <div className="retreat-booking-form">
                  <h3>Secure booking form</h3>
                  <BookingForm
                    retreatName={retreat.name}
                    paymentOptions={p.pricing?.paymentOptions}
                    pricing={p.pricing}
                  />
                  <div className="retreat-booking-trust">
                    <span>
                      <ShieldCheck size={15} aria-hidden="true" /> Secure encrypted submission
                    </span>
                    <span>
                      <LockIcon /> Spam protected
                    </span>
                    <span>
                      <Check size={15} aria-hidden="true" /> No spam, ever
                    </span>
                  </div>
                </div>
              </FadeIn>
            </section>
          )}
        </div>
      </div>

      {/* ============ SECTION — FINAL CTA ============ */}
      <section className="retreat-final-cta">
        <Container>
          <FadeIn className="retreat-final-cta-inner">
            <h2>Start Your Retreat Journey</h2>
            <p>
              Ready to disconnect, recharge, and reconnect with yourself? Reach out to The Hatha Yogashala and experience Goa&apos;s beaches,
              culture, and wellness traditions in one immersive escape.
            </p>
            <div className="retreat-final-cta-actions">
              <ButtonLink href={isSimple ? "#inquiry" : "#registration"} className="retreat-hero-cta">
                {isSimple ? "Inquire Now" : "Book Now"}
              </ButtonLink>
              <a href={whatsappHref} className="button retreat-whatsapp">
                <SiWhatsapp size={17} aria-hidden="true" />
                WhatsApp Inquiry
              </a>
              <ButtonLink href="/contact" variant="light">
                Schedule a Call
              </ButtonLink>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Related retreats */}
      <section className="section">
        <Container>
          <SectionHeading eyebrow="More retreats" title="Find the right length for you" />
          <div className="retreat-grid three">
            {related.map((item) => (
              <RetreatCard retreat={item} key={item.slug} />
            ))}
          </div>
          <p className="mt-8 text-center text-[13.5px] leading-relaxed text-[var(--muted)]">
            Ready to teach? Explore our{" "}
            <Link
              href="/yoga-teacher-training"
              className="font-bold uppercase tracking-widest text-[var(--coral-dark)] underline-offset-4 transition hover:underline"
            >
              Yoga Teacher Training Courses in Goa
            </Link>{" "}
            — 100, 200 &amp; 300-hour certification at the same beachside shala.
          </p>
        </Container>
      </section>
    </>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
