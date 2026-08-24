import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  Clock3,
  Coffee,
  Compass,
  GraduationCap,
  Heart,
  Home,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Users,
  Waves,
  XCircle,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { retreats } from "@/data/coursesData";
import { whatsappLink } from "@/data/siteData";
import { Accordion } from "./Interactive";
import {
  Container,
  ButtonLink,
  Media,
  MobileStickyBar,
  RetreatCard,
  SectionHeading,
} from "./ui";
import BookingSidebar from "./retreat/BookingSidebar";
import BookingForm from "./retreat/BookingForm";
import TestimonialCarousel, {
  VideoTestimonials,
} from "./retreat/TestimonialCarousel";
import MonthGuide from "./retreat/MonthGuide";
import { FadeIn, Stagger, StaggerItem } from "./retreat/Motion";

const whyIcons = {
  badge: BadgeCheck,
  users: Users,
  award: Award,
  leaf: Leaf,
  map: MapPin,
  home: Home,
  grad: GraduationCap,
  compass: Compass,
  heart: Heart,
};

const freeTimeIcons = {
  waves: Waves,
  book: Compass,
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

export default function YogaTTCHubPage({ page }) {
  const p = page;
  const currencySymbol = p.pricing.shared.currency === "EUR" ? "€" : "$";
  const whatsappHref = whatsappLink(p.whatsappMessage);
  const programOptions = p.levels.map((level) => ({
    value: level.slug,
    label: `${level.hours}-Hour Yoga TTC (${level.duration})`,
  }));

  return (
    <>
      {/* ============ SECTION 1 — HERO ============ */}
      <section className="retreat-hero" id="top">
        <Image
          src="/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg"
          alt="Students in a group yoga class during teacher training at Hatha Yogashala in Goa"
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
                  <li aria-current="page">Yoga Teacher Training in Goa</li>
                </ol>
              </nav>
            </StaggerItem>

            <StaggerItem>
              <div className="retreat-hero-pills">
                <span>{p.category}</span>
                <span>Residential · North Goa</span>
                <span>All Levels Welcome</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1>{p.name}</h1>
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
                  <span><strong>{p.students}</strong>graduates worldwide</span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="retreat-hero-actions">
                <ButtonLink href="#registration" className="retreat-hero-cta">
                  Reserve Your Spot
                </ButtonLink>
                <ButtonLink href="#courses" variant="light">
                  View Courses
                </ButtonLink>
                <a href={whatsappHref} className="button retreat-whatsapp">
                  <SiWhatsapp size={17} aria-hidden="true" />
                  WhatsApp Inquiry
                </a>
              </div>
            </StaggerItem>
          </Stagger>
        </Container>

        <div className="retreat-trust-badges" aria-label="School credentials">
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
        <BookingSidebar
          page={p}
          retreat={{ name: p.name, date: p.date, whatsappMessage: p.whatsappMessage }}
          ctaLabel="Reserve Your Spot"
          entityLabel="Training course"
          studentsLabel="TTC graduates"
          programOptions={programOptions}
        />
        <MobileStickyBar
          left={
            <p className="text-[13.5px] font-black leading-tight text-[var(--brown)]">
              From <span className="text-[var(--coral-dark)]">{currencySymbol}{p.pricing.shared.price}</span>
              <span className="text-[13.5px] font-semibold text-[var(--muted)]"> /person</span>
            </p>
          }
          right={
            <>
              <a href="#book" className="button button-primary !px-4 !py-2.5 !text-[13.5px]">Reserve Your Spot</a>
              <a href={whatsappHref} className="button booking-whatsapp !px-3 !py-2.5 !text-[13.5px]" aria-label="WhatsApp inquiry">
                <SiWhatsapp size={15} aria-hidden="true" />
              </a>
            </>
          }
        />

        <div className="retreat-content" id="overview">

          {/* ============ SECTION 2 — WHAT THIS IS (SEO) ============ */}
          <section className="retreat-section" id="what-is">
            <RetreatEyebrow>What is a yoga teacher training course?</RetreatEyebrow>
            <h2 className="retreat-section-title">{p.whatIs.heading}</h2>
            <div className="retreat-overview">
              {p.whatIs.paragraphs.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.04}>
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>
            {p.whatIs.points?.length > 0 && (
              <Stagger className="retreat-highlight-grid">
                {p.whatIs.points.map((point) => (
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

          {/* ============ SECTION 3 — OVERVIEW ============ */}
          <section className="retreat-section">
            <RetreatEyebrow>Overview</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Authentic yoga study in the most beautiful setting in India
            </h2>
            <div className="retreat-overview">
              {p.overview.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.04}>
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>
            <div className="retreat-overview-tags">
              {p.overviewTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>

          {/* ============ SECTION 4 — WHY CHOOSE ============ */}
          <section className="retreat-section" id="why">
            <RetreatEyebrow>Why choose Hatha Yogashala</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Eight reasons students from 30+ countries choose us
            </h2>
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

          {/* ============ SECTION 5 — THE THREE COURSES ============ */}
          <section className="retreat-section" id="courses">
            <RetreatEyebrow>Choose your level</RetreatEyebrow>
            <h2 className="retreat-section-title">
              Three pathways — one certification journey
            </h2>
            <p className="retreat-section-lead">
              Each course is a complete programme. Take one, take two, or take
              all three — credits carry forward on our continuation pathway to
              Yoga Alliance RYT-500.
            </p>
            <Stagger className="retreat-teacher-grid">
              {p.levels.map((level) => (
                <StaggerItem key={level.slug}>
                  <article
                    className={`retreat-teacher-card${level.featured ? " ring-2 ring-[var(--coral-dark)]" : ""}`}
                  >
                    <div className="retreat-teacher-image relative">
                      <Image
                        src={level.image}
                        alt={level.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-[var(--coral-dark)] px-2.5 py-1 text-[13.5px] font-black uppercase tracking-wider text-white">
                        {level.badge}
                      </span>
                      {level.featured && (
                        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[13.5px] font-black text-[var(--coral-dark)]">
                          <Star size={11} className="fill-[var(--gold)] text-[var(--gold)]" aria-hidden="true" />
                          Most popular
                        </span>
                      )}
                    </div>
                    <div className="retreat-teacher-body">
                      <p className="retreat-teacher-role">
                        <Clock3 size={13} aria-hidden="true" className="mr-1 inline" />
                        {level.duration} · {level.level}
                      </p>
                      <h3>{level.hours}-Hour Yoga Teacher Training in Goa</h3>
                      <p className="retreat-teacher-exp font-semibold text-[var(--coral-dark)]">
                        From {currencySymbol}{level.price} / person (shared room)
                      </p>
                      <p className="retreat-teacher-bio">{level.text}</p>
                      <ul className="mt-3 space-y-1.5">
                        {level.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-[13.5px] text-[var(--muted)]">
                            <Check size={14} className="mt-0.5 shrink-0 text-[var(--coral-dark)]" aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2.5">
                        <Link
                          href={`/courses/${level.slug}`}
                          className="button button-primary !px-4 !py-2 !text-[13.5px]"
                        >
                          View full details
                        </Link>
                        <Link href="#registration" className="button button-secondary !px-4 !py-2 !text-[13.5px]">
                          Reserve now
                        </Link>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          {/* ============ SECTION 6 — MEET YOUR TEACHERS ============ */}
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

          {/* ============ SECTION 7 — TRAINING HIGHLIGHTS ============ */}
          <section className="retreat-section" id="highlights">
            <RetreatEyebrow>Training highlights</RetreatEyebrow>
            <h2 className="retreat-section-title">Every day builds your certification</h2>
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

          {/* ============ SECTION 8 — DAILY SCHEDULE ============ */}
          <section className="retreat-section" id="schedule">
            <RetreatEyebrow>A day in the TTC life</RetreatEyebrow>
            <h2 className="retreat-section-title">A structured daily rhythm designed for deep immersion</h2>
            <p className="retreat-section-lead">
              Predictable days make deep learning possible. Here is how a
              typical day at Hatha Yogashala unfolds during the training.
            </p>
            <div className="retreat-schedule">
              <FadeIn>
                <article className="retreat-schedule-day">
                  <header>
                    <span className="retreat-schedule-daynum">Daily Timetable</span>
                    <h3>Sunrise to silence — every day</h3>
                    <p>
                      Sessions rotate through asana, study, teaching practicum,
                      and self-practice, with protected rest in the afternoon.
                    </p>
                  </header>
                  <div className="retreat-schedule-timeline">
                    {p.dailySchedule.map(([time, activity]) => (
                      <div className="retreat-schedule-entry" key={`${time}-${activity}`}>
                        <time>{time}</time>
                        <span className="retreat-schedule-dot" aria-hidden="true" />
                        <strong>{activity}</strong>
                      </div>
                    ))}
                  </div>
                </article>
              </FadeIn>
            </div>
          </section>

          {/* ============ SECTION 9 — LIFE BEYOND THE SHALA ============ */}
          <section className="retreat-section" id="experiences">
            <RetreatEyebrow>Rest days &amp; excursions</RetreatEyebrow>
            <h2 className="retreat-section-title">Goa beyond the shala</h2>
            <p className="retreat-section-lead">
              Sundays and free afternoons are yours — explore the best of North
              Goa, each option easy to arrange with our host.
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

          {/* ============ SECTION 10 — FREE TIME IDEAS ============ */}
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

          {/* ============ SECTION 11 — ACCOMMODATION ============ */}
          <section className="retreat-section" id="accommodation">
            <RetreatEyebrow>Accommodation</RetreatEyebrow>
            <h2 className="retreat-section-title">Rest well between practices</h2>
            <p className="retreat-section-lead">
              Choose a shared room or dormitory for community, or a private
              room for extra space and quiet. Every option is clean, calm, and
              close to the practice hall.
            </p>
            <div className="retreat-rooms">
              <FadeIn>
                <article className="retreat-room-block">
                  <h3>Shared room</h3>
                  <p>Twin-sharing AC rooms or a mixed dormitory — the easy friendships of residential training life.</p>
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
                  <p>Your own space with an attached bathroom and extra quiet for self-study and rest.</p>
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

          {/* ============ SECTION 12 — MEALS ============ */}
          <section className="retreat-section" id="meals">
            <RetreatEyebrow>Meals</RetreatEyebrow>
            <h2 className="retreat-section-title">Sattvic food, cooked with love</h2>
            <p className="retreat-section-lead">
              Three freshly prepared vegetarian meals a day, plus snacks — the
              fuel four weeks of practice and study depend on.
            </p>
            <Stagger className="retreat-meal-grid">
              {p.meals.map((meal) => (
                <StaggerItem key={meal.meal}>
                  <article className="retreat-meal-card">
                    <Media src={meal.image} alt={`${meal.meal} at Hatha Yogashala`} className="h-44 w-full" />
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

          {/* ============ SECTION 13 — BEST TIME TO VISIT ============ */}
          <section className="retreat-section" id="best-time">
            <RetreatEyebrow>Best time to visit</RetreatEyebrow>
            <h2 className="retreat-section-title">Every season has its gift</h2>
            <p className="retreat-section-lead">
              Tap any month to see weather, batch sizes, and the training
              experience each season offers.
            </p>
            <MonthGuide months={p.bestTime} />
          </section>

          {/* ============ SECTION 14 — WHAT'S INCLUDED ============ */}
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

          {/* ============ SECTION 15 — TESTIMONIALS ============ */}
          <section className="retreat-section" id="reviews">
            <RetreatEyebrow>Graduate stories</RetreatEyebrow>
            <h2 className="retreat-section-title">Trusted by graduates from 30+ countries</h2>
            <TestimonialCarousel testimonials={p.testimonials} />
            <div className="retreat-video-testimonials">
              <h3>Watch their stories</h3>
              <VideoTestimonials items={p.testimonials.slice(0, 3)} />
            </div>
          </section>

          {/* ============ SECTION 16 — FAQ ============ */}
          <section className="retreat-section" id="faq">
            <RetreatEyebrow>Yoga TTC FAQ</RetreatEyebrow>
            <h2 className="retreat-section-title">Answers before you ask</h2>
            <Accordion items={p.faqs} />
          </section>

          {/* ============ SECTION 17 — OFFICIAL REGISTRATION ============ */}
          <section className="retreat-section" id="registration">
            <RetreatEyebrow>Fees &amp; registration</RetreatEyebrow>
            <h2 className="retreat-section-title">Reserve your place</h2>
            <p className="retreat-section-lead">
              All fees are all-inclusive — accommodation, meals, yoga kit,
              course manual, and Yoga Alliance certification are covered.
              Submit the booking form and our team replies within 24 hours
              with verified payment instructions.
            </p>

            <div className="retreat-pricing-cards">
              {p.levels.map((level, index) => (
                <FadeIn key={level.slug} delay={index * 0.06}>
                  <article
                    className={`retreat-price-card${level.featured ? " retreat-price-card-featured" : ""}`}
                  >
                    <span
                      className={`retreat-price-badge${level.featured ? " retreat-price-badge-featured" : ""}`}
                    >
                      {level.featured && <Heart size={11} aria-hidden="true" />}
                      {level.hours}-Hour TTC
                    </span>
                    <div className="retreat-price-value">
                      <span className="retreat-price-currency">{currencySymbol}</span>
                      <strong>{level.price}</strong>
                      <span className="retreat-price-per">/ person</span>
                    </div>
                    <ul>
                      {level.highlights.slice(0, 3).map((point) => (
                        <li key={point}>
                          <Check
                            size={15}
                            className={level.featured ? "text-[var(--coral-dark)]" : "text-[var(--coral)]"}
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                      <li>
                        <Check
                          size={15}
                          className={level.featured ? "text-[var(--coral-dark)]" : "text-[var(--coral)]"}
                          aria-hidden="true"
                        />
                        {level.duration} residential
                      </li>
                    </ul>
                    <Link
                      href={`/courses/${level.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-bold uppercase tracking-widest text-[var(--coral-dark)] transition hover:underline"
                    >
                      Full details →
                    </Link>
                  </article>
                </FadeIn>
              ))}
            </div>

            <div className="retreat-dates-strip mt-8" aria-label="Batch information">
              <CalendarDays size={16} className="shrink-0 text-[var(--coral-dark)]" aria-hidden="true" />
              <div>
                <strong>Monthly start dates throughout the year</strong>
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
              <div className="retreat-booking-form mt-8">
                <h3>Secure booking form</h3>
                <BookingForm
                  retreatName={p.name}
                  paymentOptions={p.pricing.paymentOptions}
                  pricing={p.pricing}
                  programOptions={programOptions}
                  submitLabel="Reserve Your Spot"
                />
                <div className="retreat-booking-trust">
                  <span>
                    <ShieldCheck size={15} aria-hidden="true" /> Secure encrypted submission
                  </span>
                  <span>
                    <BadgeCheck size={15} aria-hidden="true" /> Yoga Alliance Registered School
                  </span>
                  <span>
                    <Check size={15} aria-hidden="true" /> Reply within 24 hours
                  </span>
                </div>
              </div>
            </FadeIn>
          </section>
        </div>
      </div>

      {/* ============ SECTION 18 — FINAL CTA ============ */}
      <section className="retreat-final-cta">
        <Container>
          <FadeIn className="retreat-final-cta-inner">
            <h2>Your Teaching Journey Starts in Goa</h2>
            <p>
              Join 500+ graduates from 30+ countries who chose Hatha Yogashala
              for their yoga teacher training. Reserve your spot today.
            </p>
            <div className="retreat-final-cta-actions">
              <ButtonLink href="#registration" className="retreat-hero-cta">
                Reserve Your Spot
              </ButtonLink>
              <a href={whatsappHref} className="button retreat-whatsapp">
                <SiWhatsapp size={17} aria-hidden="true" />
                WhatsApp Inquiry
              </a>
              <ButtonLink href="/courses" variant="light">
                Compare All Courses
              </ButtonLink>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Related retreats — internal linking between TTC and retreats */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="More from the shala"
            title="Pair your training with a Goan retreat"
          />
          <div className="retreat-grid three">
            {retreats.slice(0, 3).map((item) => (
              <RetreatCard retreat={item} key={item.slug} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
