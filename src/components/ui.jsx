import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { publicValue } from "@/data/siteData";
import { getRetreatPageData } from "@/data/retreatData";

export function Container({ children, className = "" }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  return (
    <Link className={`button button-${variant} ${className}`} href={href}>
      {children}
      <ArrowRight aria-hidden="true" size={17} />
    </Link>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="eyebrow">
      <Sparkles aria-hidden="true" size={15} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  as = "h2",
}) {
  const Heading = as;
  return (
    <div className={`section-heading ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading>{title}</Heading>
      {text && <p>{text}</p>}
    </div>
  );
}

export function Media({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}) {
  return (
    <div className={`media ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumbs">
        {items.map((item, index) => (
          <li key={item.label}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            {index < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image = "/images/course-goa-yoga.png",
  breadcrumbs = [{ label: "Home", href: "/" }, { label: title }],
  actions = [],
  facts = [],
}) {
  return (
    <section className="page-hero">
      <Image
        src={image}
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div className="page-hero-overlay" />
      <Container className="relative z-10">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="page-hero-copy">{text}</p>}
        {actions.length > 0 && (
          <div className="page-hero-actions">
            {actions.map((action) => (
              <ButtonLink
                key={`${action.href}-${action.label}`}
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        )}
        {facts.length > 0 && (
          <dl className="page-hero-facts">
            {facts.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
}

export function ProgramCard({ course, horizontal = false }) {
  const duration = publicValue(course.duration);
  const date = publicValue(course.date, "Dates to be announced");
  const price = publicValue(course.price, "Fee to be confirmed");
  const certification = publicValue(
    course.certification,
    "Certification details pending",
  );
  const room = publicValue(course.room, "Room options confirmed in writing");
  const isFeatured = course.featured;

  return (
    <article
      className={`card program-card relative overflow-hidden transition-all duration-300 ${
        isFeatured
          ? "ring-2 ring-[#cf5b50] bg-[#fff8f6] shadow-xl lg:-translate-y-2"
          : ""
      } ${horizontal ? "program-card-horizontal" : ""}`}
    >
      {isFeatured && (
        <span className="absolute top-3 right-3 z-10 rounded-full bg-[#cf5b50] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
          ★ Recommended
        </span>
      )}
      <Media
        src={course.image}
        alt={`Students taking part in ${course.name}`}
        className="program-media"
      />
      <div className="card-body flex flex-1 flex-col">
        <div className="flex flex-wrap gap-2">
          <span className="pill">{course.level}</span>
          <span className="pill pill-muted">{course.hours}</span>
        </div>
        <h3 className="program-title mt-4 text-2xl font-serif">{course.name}</h3>
        <p className="program-description mt-3 text-muted">
          {course.description}
        </p>
        <dl className="program-details mt-5">
          <div>
            <dt>Duration</dt>
            <dd>{duration}</dd>
          </div>
          <div>
            <dt>Level</dt>
            <dd>{course.level}</dd>
          </div>
          <div>
            <dt>Next start</dt>
            <dd>{date}</dd>
          </div>
          <div>
            <dt>Accommodation</dt>
            <dd>{room}</dd>
          </div>
          <div className="program-details-wide">
            <dt>Completion document</dt>
            <dd>{certification}</dd>
          </div>
        </dl>
        <div className="program-footer mt-auto pt-5">
          <p>
            <span>Fee</span>
            <strong className={isFeatured ? "text-[#cf5b50]" : ""}>{price}</strong>
          </p>
          <ButtonLink href={`/courses/${course.slug}`} className={isFeatured ? "shadow-md" : ""}>
            View course
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function ShortProgramCard({ course }) {
  const duration = publicValue(course.duration);
  const date = publicValue(course.date, "Dates to be announced");
  const price = publicValue(course.price, "Fee to be confirmed");
  const certification = publicValue(
    course.certification,
    "Completion details pending",
  );
  const room = publicValue(course.room, "Room options confirmed in writing");

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-[24px] border border-[#e8ddd6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#cf5b50]/40">
      {/* Image Header */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <Media
          src={course.image}
          alt={`Students taking part in ${course.name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#cf5b50] shadow-sm">
            {course.hours} Focus
          </span>
          <span className="inline-flex items-center rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white">
            {course.level}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-black group-hover:text-[#cf5b50] transition-colors leading-snug">
          <Link href={`/courses/${course.slug}`}>
            {course.name}
          </Link>
        </h3>

        <p className="mt-2 text-xs text-black/70 leading-relaxed line-clamp-2">
          {course.description}
        </p>

        {/* Specs Grid */}
        <dl className="mt-4 grid grid-cols-2 gap-2 text-[11px] bg-[#faf7f4] p-3 rounded-xl border border-[#e8ddd6]/60">
          <div>
            <dt className="font-bold text-[#9b8a7e] uppercase tracking-wider text-[9px]">Duration</dt>
            <dd className="font-semibold text-black/80 truncate">{duration}</dd>
          </div>
          <div>
            <dt className="font-bold text-[#9b8a7e] uppercase tracking-wider text-[9px]">Next Start</dt>
            <dd className="font-semibold text-black/80 truncate">{date}</dd>
          </div>
          <div>
            <dt className="font-bold text-[#9b8a7e] uppercase tracking-wider text-[9px]">Stay</dt>
            <dd className="font-semibold text-black/80 truncate">{room}</dd>
          </div>
          <div>
            <dt className="font-bold text-[#9b8a7e] uppercase tracking-wider text-[9px]">Certificate</dt>
            <dd className="font-semibold text-black/80 truncate">{certification}</dd>
          </div>
        </dl>

        {/* Card Footer */}
        <div className="mt-auto pt-5 flex items-center justify-between gap-3 border-t border-[#f0ebe6] mt-5">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-[#9b8a7e]">Program Fee</span>
            <strong className="text-lg font-bold text-[#cf5b50]">{price}</strong>
          </div>
          <ButtonLink href={`/courses/${course.slug}`} className="!py-2.5 !px-4 !text-xs">
            View Program
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function RetreatCard({ retreat }) {
  const page = getRetreatPageData(retreat.days);
  const date = page.dates[0]?.label || "Dates to be announced";
  const price = page.pricing.shared.price;
  const room = publicValue(retreat.room, "Room confirmed in writing");
  const meals = publicValue(retreat.meals, "Meal plan confirmed in writing");

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-[24px] border border-[#e8ddd6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#cf5b50]/40">
      {/* Card Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Media
          src={retreat.image}
          alt={`Yoga and meditation during ${retreat.name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#cf5b50] shadow-sm">
            {retreat.days} Days
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white">
            <Star className="size-3 fill-[#f5a623] text-[#f5a623]" aria-hidden="true" />
            {page.rating}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-black group-hover:text-[#cf5b50] transition-colors leading-snug">
          <Link href={`/retreats/${retreat.slug}`}>
            {retreat.name}
          </Link>
        </h3>

        <p className="mt-2.5 text-xs text-black/70 leading-relaxed line-clamp-2">
          {retreat.description}
        </p>

        {/* Benefits Checklist */}
        {retreat.benefits?.length > 0 && (
          <ul className="mt-4 space-y-2 border-t border-[#f0ebe6] pt-4">
            {retreat.benefits.slice(0, 2).map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-xs font-medium text-black/80">
                <Check className="size-4 shrink-0 text-[#cf5b50]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Key Specs */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] bg-[#faf7f4] p-3 rounded-xl border border-[#e8ddd6]/60">
          <div>
            <span className="block font-bold text-[#9b8a7e] uppercase tracking-wider text-[9px]">Next Dates</span>
            <span className="font-semibold text-black/80 truncate block">{date}</span>
          </div>
          <div>
            <span className="block font-bold text-[#9b8a7e] uppercase tracking-wider text-[9px]">Accommodation</span>
            <span className="font-semibold text-black/80 truncate block">{room}</span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-auto pt-5 flex items-center justify-between gap-3 border-t border-[#f0ebe6] mt-5">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-[#9b8a7e]">From / person</span>
            <strong className="text-lg font-bold text-[#cf5b50]">${price}</strong>
          </div>
          <ButtonLink href={`/retreats/${retreat.slug}`} className="!py-2.5 !px-4 !text-xs">
            View Retreat
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}


export function GoogleMark({ className = "" }) {
  return (
    <span className={`google-mark ${className}`} aria-label="Google">
      <svg viewBox="0 0 18 18" role="img" aria-hidden="true">
        <path fill="#4285F4" d="M17.64 9.205c0-.64-.057-1.255-.164-1.846H9v3.492h4.844a4.14 4.14 0 0 1-1.796 2.716v2.266h2.909c1.703-1.568 2.683-3.88 2.683-6.628Z" />
        <path fill="#34A853" d="M9 18c2.43 0 4.468-.806 5.957-2.18l-2.909-2.265c-.806.54-1.836.86-3.048.86-2.344 0-4.328-1.585-5.036-3.714H.957v2.336A9 9 0 0 0 9 18Z" />
        <path fill="#FBBC05" d="M3.964 10.7A5.41 5.41 0 0 1 3.682 9c0-.59.101-1.164.282-1.7V4.964H.957A9 9 0 0 0 0 9c0 1.45.347 2.822.957 4.036L3.964 10.7Z" />
        <path fill="#EA4335" d="M9 3.58c1.322 0 2.51.454 3.445 1.345l2.581-2.582C13.464.891 11.426 0 9 0A9 9 0 0 0 .957 4.964L3.964 7.3C4.672 5.17 6.656 3.58 9 3.58Z" />
      </svg>
      <strong>Google</strong>
    </span>
  );
}

export function Snapshot({ items }) {
  return (
    <dl className="snapshot">
      {items.map(({ label, value, icon }) => (
        <div key={label}>
          {icon === "calendar" ? (
            <CalendarDays aria-hidden="true" size={20} />
          ) : icon === "location" ? (
            <MapPin aria-hidden="true" size={20} />
          ) : (
            <Clock3 aria-hidden="true" size={20} />
          )}
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function FinalCTA({
  title = "Ready to plan your practice in Goa?",
  text = "Tell us what you want to study. The school can confirm suitability, dates, fees, and availability before you make travel plans.",
}) {
  return (
    <section className="section">
      <Container>
        <div className="final-cta">
          <div>
            <Eyebrow>Begin with a conversation</Eyebrow>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/apply">Reserve your spot</ButtonLink>
            <ButtonLink href="/contact#whatsapp" variant="light">
              Ask on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
