import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BookOpen,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  Clock3,
  Coffee,
  Compass,
  Heart,
  Home,
  Leaf,
  MapPin,
  Moon,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
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
import TestimonialCarousel, { VideoTestimonials } from "./retreat/TestimonialCarousel";
import MonthGuide from "./retreat/MonthGuide";
import { FadeIn, Stagger, StaggerItem } from "./retreat/Motion";
import { SiWhatsapp } from "react-icons/si";

const whyIcons = {
  users: Users,
  award: Award,
  flower: Sparkles,
  sparkles: Sparkles,
  waves: Waves,
  leaf: Leaf,
  home: Home,
  compass: Compass,
  moon: Moon,
  heart: Heart,
};

const freeTimeIcons = {
  waves: Waves,
  book: BookOpen,
  coffee: Coffee,
  camera: Camera,
  sparkles: Sparkles,
  sun: Sun,
  shopping: Compass,
  compass: Compass,
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
  if (typeof p.pricing.shared.price === "number") {
    tripOffers.push({
      "@type": "Offer",
      name: "Shared room",
      price: p.pricing.shared.price,
      priceCurrency: p.pricing.shared.currency,
      availability: "https://schema.org/InStock",
    });
  }
  if (typeof p.pricing.private.price === "number") {
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
    itinerary: {
      "@type": "ItemList",
      itemListElement: p.daysSchedule.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Day ${index + 1} — ${day.title}`,
        description: day.intro,
      })),
    },
    offers: tripOffers.length > 0 ? tripOffers : undefined,
  };
  const currencySymbol = p.pricing.shared.currency === "EUR" ? "€" : "$";
  const priceRange =
    typeof p.pricing.shared.price === "number" && typeof p.pricing.private.price === "number"
      ? `${currencySymbol}${p.pricing.shared.price}-${currencySymbol}${p.pricing.private.price}`
      : currencySymbol;
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
    startDate: p.dates[0]?.start,
    endDate: p.dates[0]?.end,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: site.name,
      address: { "@type": "PostalAddress", addressLocality: "Goa", addressCountry: "IN" },
    },
    offers:
      typeof p.pricing.shared.price === "number"
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
      <JsonLd data={faqSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={eventSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ============ SECTION 1 — HERO ============ */}
      <section className="retreat-hero" id="top">
        <Image
          src={retreat.image}
          alt={`${retreat.name} on the Goan coast`}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="retreat-hero-overlay" />
        <span className="retreat-hero-orb" aria-hidden="true" />
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
                <ButtonLink href="#registration" className="retreat-hero-cta">
                  Book Your Retreat
                </ButtonLink>
                <ButtonLink href="#schedule" variant="light">
                  View Schedule
                </ButtonLink>
                <a href={whatsappHref} className="button retreat-whatsapp">
                  <SiWhatsapp size={17} aria-hidden="true" />
                  WhatsApp Inquiry
                </a>
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

      {/* ============ STICKY BOOKING SIDEBAR / 60% CONTENT ============ */}
      <div className="container retreat-layout">
        {/* Sticky booking sidebar */}
        <BookingSidebar page={p} retreat={retreat} />
        <MobileStickyBar
          left={
            <p className="text-[13.5px] font-black leading-tight text-[var(--brown)]">
              From <span className="text-[var(--coral-dark)]">{typeof p.pricing.shared.price === "number" ? `${currencySymbol}${p.pricing.shared.price}` : "On enquiry"}</span>
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

        <div className="retreat-content" id="overview">

          {/* ============ SECTION 2 — WHAT THIS IS (SEO) ============ */}
          {retreat.whatIs && (
            <section className="retreat-section" id="what-is">
              <RetreatEyebrow>What this retreat is</RetreatEyebrow>
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
            </section>
          )}

          {/* ============ SECTION 3 — OVERVIEW ============ */}
          <section className="retreat-section">
            <RetreatEyebrow>Overview</RetreatEyebrow>
            <h2 className="retreat-section-title">A pause that changes the pace of your life</h2>
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

          {/* ============ SECTION 3 — WHY CHOOSE ============ */}
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

          {/* ============ SECTION 4 — MEET YOUR TEACHERS ============ */}
          <section className="retreat-section" id="teachers">
            <RetreatEyebrow>Meet your teachers</RetreatEyebrow>
            <h2 className="retreat-section-title">Guided by experienced, compassionate teachers</h2>
            <Stagger className="retreat-teacher-grid">
              {p.teachers.map((teacher) => (
                <StaggerItem key={teacher.role}>
                  <article className="retreat-teacher-card">
                    <div className="retreat-teacher-image">
                      <Media src={teacher.image} alt={`Portrait of ${teacher.role}`} className="h-full w-full" />
                    </div>
                    <div className="retreat-teacher-body">
                      <p className="retreat-teacher-role">{teacher.role}</p>
                      <h3>{teacher.name}</h3>
                      <p className="retreat-teacher-exp">{teacher.experience}</p>
                      <p className="retreat-teacher-spec">{teacher.specialization}</p>
                      <p className="retreat-teacher-bio">{teacher.bio}</p>
                      <p className="retreat-teacher-cred">
                        <Award size={14} aria-hidden="true" />
                        {teacher.credentials}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ SECTION 5 — RETREAT HIGHLIGHTS ============ */}
          <section className="retreat-section" id="highlights">
            <RetreatEyebrow>Retreat highlights</RetreatEyebrow>
            <h2 className="retreat-section-title">Every day, a different gift</h2>
            <Stagger className="retreat-highlight-grid">
              {p.highlights.map((highlight) => (
                <StaggerItem key={highlight}>
                  <div className="retreat-highlight-card">
                    <CheckCircle2 size={19} className="text-[var(--coral-dark)]" aria-hidden="true" />
                    <span>{highlight}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ SECTION 6 — DAILY SCHEDULE ============ */}
          <section className="retreat-section" id="schedule">
            <RetreatEyebrow>Detailed daily schedule</RetreatEyebrow>
            <h2 className="retreat-section-title">A {p.days}-day rhythm designed to restore</h2>
            <p className="retreat-section-lead">
              Predictable days make deep rest possible. Here is how your {p.days} days at Hatha Yogashala unfold.
            </p>
            <div className="retreat-schedule">
              {p.daysSchedule.map((day, dayIndex) => (
                <FadeIn key={day.title} delay={dayIndex * 0.05}>
                  <article className="retreat-schedule-day">
                    <header>
                      <span className="retreat-schedule-daynum">Day {dayIndex + 1}</span>
                      <h3>{day.title}</h3>
                      <p>{day.intro}</p>
                    </header>
                    <div className="retreat-schedule-timeline">
                      {day.schedule.map(([time, activity]) => (
                        <div className="retreat-schedule-entry" key={`${time}-${activity}`}>
                          <time>{time}</time>
                          <span className="retreat-schedule-dot" aria-hidden="true" />
                          <strong>{activity}</strong>
                        </div>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* ============ SECTION 7 — OPTIONAL GOA EXPERIENCES ============ */}
          <section className="retreat-section" id="experiences">
            <RetreatEyebrow>Optional Goa experiences</RetreatEyebrow>
            <h2 className="retreat-section-title">Goa beyond the shala</h2>
            <p className="retreat-section-lead">
              During free time, explore the best of North Goa — each option is easy to arrange with our host.
            </p>
            <Stagger className="retreat-experience-grid">
              {p.experiences.map((experience) => (
                <StaggerItem key={experience.title}>
                  <article className="retreat-experience-card">
                    <span className="retreat-experience-tag">{experience.tag}</span>
                    <h3>{experience.title}</h3>
                    <p>{experience.text}</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ SECTION 8 — FREE TIME IDEAS ============ */}
          <section className="retreat-section" id="free-time">
            <RetreatEyebrow>Free time ideas</RetreatEyebrow>
            <h2 className="retreat-section-title">Unhurried hours, entirely yours</h2>
            <Stagger className="retreat-freetime-grid">
              {p.freeTime.map((idea) => {
                const Icon = freeTimeIcons[idea.icon] || Sparkles;
                return (
                  <StaggerItem key={idea.title}>
                    <div className="retreat-freetime-card">
                      <Icon size={18} className="text-[var(--coral-dark)]" aria-hidden="true" />
                      <div>
                        <h3>{idea.title}</h3>
                        <p>{idea.text}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </section>

          {/* ============ SECTION 9 — ACCOMMODATION ============ */}
          <section className="retreat-section" id="accommodation">
            <RetreatEyebrow>Accommodation</RetreatEyebrow>
            <h2 className="retreat-section-title">Rest well between practices</h2>
            <p className="retreat-section-lead">
              Choose a shared twin room for community, or a private room for extra space and privacy. Every room is calm, clean, and close to the practice hall.
            </p>
            <div className="retreat-rooms">
              <FadeIn>
                <article className="retreat-room-block">
                  <h3>Shared room</h3>
                  <p>Thoughtfully paired twin beds, garden views, and the easy friendships of retreat life.</p>
                  <div className="retreat-room-gallery">
                    {p.accommodation.sharedGallery.map((image) => (
                      <Media key={image.caption} src={image.src} alt={image.alt} className="h-40 w-full rounded-2xl" />
                    ))}
                  </div>
                </article>
              </FadeIn>
              <FadeIn delay={0.08}>
                <article className="retreat-room-block">
                  <h3>Private room</h3>
                  <p>Your own space with an attached bathroom and extra quiet for those who prefer solitude.</p>
                  <div className="retreat-room-gallery">
                    {p.accommodation.privateGallery.map((image) => (
                      <Media key={image.caption} src={image.src} alt={image.alt} className="h-40 w-full rounded-2xl" />
                    ))}
                  </div>
                </article>
              </FadeIn>
            </div>
            <div className="retreat-facilities">
              <h3>Facilities</h3>
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

          {/* ============ SECTION 10 — MEALS ============ */}
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
          </section>

          {/* ============ SECTION 11 — BEST TIME TO VISIT ============ */}
          <section className="retreat-section" id="best-time">
            <RetreatEyebrow>Best time to visit</RetreatEyebrow>
            <h2 className="retreat-section-title">Every season has its gift</h2>
            <p className="retreat-section-lead">
              Tap any month to see weather, crowds, and the retreat experience it offers.
            </p>
            <MonthGuide months={p.bestTime} />
          </section>

          {/* ============ SECTION 12 — WHAT'S INCLUDED ============ */}
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

          {/* ============ SECTION 13 — TESTIMONIALS ============ */}
          <section className="retreat-section" id="reviews">
            <RetreatEyebrow>Guest stories</RetreatEyebrow>
            <h2 className="retreat-section-title">Trusted by travellers from 30+ countries</h2>
            <TestimonialCarousel testimonials={p.testimonials} />
            <div className="retreat-video-testimonials">
              <h3>Watch their stories</h3>
              <VideoTestimonials items={p.testimonials.slice(0, 3)} />
            </div>
          </section>

          {/* ============ SECTION 14 — FAQ ============ */}
          <section className="retreat-section" id="faq">
            <RetreatEyebrow>Retreat FAQ</RetreatEyebrow>
            <h2 className="retreat-section-title">Answers before you ask</h2>
            <Accordion items={p.faqs} />
          </section>

          {/* ============ SECTION 15 — OFFICIAL REGISTRATION ============ */}
          <section className="retreat-section" id="registration">
            <RetreatEyebrow>Official registration</RetreatEyebrow>
            <h2 className="retreat-section-title">Reserve your place</h2>
            <p className="retreat-section-lead">
              Choose your room, confirm your dates, and submit the secure booking form. Our team replies within 24 hours with verified payment instructions.
            </p>

            <div className="retreat-pricing-cards">
              <FadeIn>
                <article className="retreat-price-card">
                  <span className="retreat-price-badge">Shared Room</span>
                  <div className="retreat-price-value">
                    <span className="retreat-price-currency">{p.pricing.shared.currency === "EUR" ? "€" : "$"}</span>
                    <strong>{p.pricing.shared.price ?? "—"}</strong>
                    <span className="retreat-price-per">/ person</span>
                  </div>
                  <ul>
                    <li><Check size={15} className="text-[var(--coral)]" aria-hidden="true" />Shared twin room</li>
                    <li><Check size={15} className="text-[var(--coral)]" aria-hidden="true" />Three daily meals</li>
                    <li><Check size={15} className="text-[var(--coral)]" aria-hidden="true" />Full retreat access</li>
                    <li><Check size={15} className="text-[var(--coral)]" aria-hidden="true" />Community experience</li>
                  </ul>
                </article>
              </FadeIn>
              <FadeIn delay={0.08}>
                <article className="retreat-price-card retreat-price-card-featured">
                  <span className="retreat-price-badge retreat-price-badge-featured">
                    <Heart size={11} aria-hidden="true" /> Most booked
                  </span>
                  <div className="retreat-price-value">
                    <span className="retreat-price-currency">{p.pricing.private.currency === "EUR" ? "€" : "$"}</span>
                    <strong>{p.pricing.private.price ?? "—"}</strong>
                    <span className="retreat-price-per">/ person</span>
                  </div>
                  <ul>
                    <li><Check size={15} className="text-[var(--coral-dark)]" aria-hidden="true" />Private room</li>
                    <li><Check size={15} className="text-[var(--coral-dark)]" aria-hidden="true" />Attached bathroom</li>
                    <li><Check size={15} className="text-[var(--coral-dark)]" aria-hidden="true" />Extra privacy</li>
                    <li><Check size={15} className="text-[var(--coral-dark)]" aria-hidden="true" />Full retreat access</li>
                  </ul>
                </article>
              </FadeIn>
            </div>

            <div className="retreat-dates-strip" aria-label="Upcoming dates">
              <CalendarDays size={16} className="text-[var(--coral-dark)] shrink-0" aria-hidden="true" />
              <div>
                <strong>Upcoming start dates</strong>
                <ul>
                  {p.dates.map((date) => (
                    <li key={date.id}>
                      <span>{date.label}</span>
                      <small>{date.availability}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <FadeIn>
              <div className="retreat-booking-form">
                <h3>Secure booking form</h3>
                <BookingForm
                  retreatName={retreat.name}
                  paymentOptions={p.pricing.paymentOptions}
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
        </div>
      </div>

      {/* ============ SECTION 16 — FINAL CTA ============ */}
      <section className="retreat-final-cta">
        <Container>
          <FadeIn className="retreat-final-cta-inner">
            <h2>Your Journey Starts Here</h2>
            <p>
              Reserve your place and experience three transformative days of yoga, mindfulness, community, and the beauty of Goa.
            </p>
            <div className="retreat-final-cta-actions">
              <ButtonLink href="#registration" className="retreat-hero-cta">
                Book Your Retreat
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
