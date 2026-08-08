import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
  Star,
  Timer,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { publicValue, whatsappLink } from "@/data/siteData";
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

export function MobileStickyBar({ left, right, className = "" }) {
  return (
    <div className={`sticky top-16 z-30 md:top-[76px] lg:hidden ${className}`}>
      <div className="flex items-center gap-3 border-b border-[var(--border)] bg-white/95 px-4 py-2.5 shadow-[0_8px_24px_rgba(41,73,54,0.08)] backdrop-blur-xl">
        <div className="min-w-0 flex-1">{left}</div>
        {right && (
          <div className="flex shrink-0 items-center gap-2">{right}</div>
        )}
      </div>
    </div>
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
    <div
      className={`section-heading ${align === "center" ? "text-center" : ""}`}
    >
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
  preload = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}) {
  return (
    <div className={`media ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        preload={preload}
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
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
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
  image = "/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp",
  imageAlt,
  breadcrumbs = [{ label: "Home", href: "/" }, { label: title }],
  actions = [],
  facts = [],
}) {
  return (
    <section className="page-hero">
      <Image
        src={image}
        alt={imageAlt || `Hatha Yogashala — ${title || "yoga school in Goa"}`}
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
                {action.icon}
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

function formatPrice(value) {
  const num = Number(value);
  if (Number.isFinite(num)) return num.toLocaleString("en-US");
  return value;
}

export function PriceRow({ label, price, currency }) {
  if (!price) return null;
  if (typeof price === "string") {
    return (
      <div className="program-price">
        <span className="program-price-label">{label}</span>
        <span className="program-price-values">
          <strong>{price}</strong>
        </span>
      </div>
    );
  }
  const current = Number(price.current);
  const original = Number(price.original);
  const save =
    original && current && original > current
      ? Math.round((1 - current / original) * 100)
      : 0;
  return (
    <div className="program-price">
      <span className="program-price-label">{label}</span>
      <span className="program-price-values">
        {original > 0 && (
          <del>
            {currency}
            {formatPrice(original)}
          </del>
        )}
        <strong>
          {currency}
          {formatPrice(current)}
        </strong>
      </span>
      {save > 0 && <span className="program-save">Save {save}%</span>}
    </div>
  );
}

export function ProgramCard({ course, horizontal = false }) {
  const image =
    course.image ||
    "/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp";
  const stats = course.cardStats || {};
  const pricing = course.pricing || null;
  const currency = pricing?.currency || "$";
  const isFeatured = course.featured;
  const hasRating = typeof course.rating === "number";
  const hasGraduates = typeof course.graduates === "number";

  return (
    <article
      className={`card program-card group ${
        horizontal ? "program-card-horizontal" : ""
      } ${isFeatured ? "program-card-featured" : ""}`}
    >
      <div className="program-media">
        <Image
          src={image}
          alt={`Students taking part in ${course.name}`}
          fill
          sizes={
            horizontal
              ? "(max-width: 820px) 100vw, 45vw"
              : "(max-width: 820px) 100vw, 33vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {course.cardBadge && (
          <span className="program-badge">{course.cardBadge}</span>
        )}
      </div>
      <div className="card-body program-body">
        <h3 className="program-title">{course.name}</h3>

        <dl className="program-stats">
          <div>
            <dt>
              <Timer aria-hidden="true" size={14} /> Duration
            </dt>
            <dd>{publicValue(stats.duration)}</dd>
          </div>
          <div>
            <dt>
              <BadgeCheck aria-hidden="true" size={14} /> Certification
            </dt>
            <dd>{publicValue(stats.certification)}</dd>
          </div>
        </dl>

        {pricing && (
          <div className="program-pricing">
            <PriceRow
              label="Shared room"
              price={pricing.shared}
              currency={currency}
            />
            <PriceRow
              label="Private room"
              price={pricing.private}
              currency={currency}
            />
          </div>
        )}

        <div className="program-actions">
          <ButtonLink
            href={`/courses/${course.slug}`}
            className={isFeatured ? "shadow-md" : ""}
          >
            View Details
          </ButtonLink>
          <a
            className="program-wa"
            href={whatsappLink(course.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask about ${course.name} on WhatsApp`}
            title="Ask on WhatsApp"
          >
            <SiWhatsapp aria-hidden="true" size={19} />
          </a>
        </div>

        {(hasRating || hasGraduates) && (
          <p className="program-trust">
            {hasRating && (
              <span className="program-rating">
                <Star className="program-star" aria-hidden="true" size={14} />
                {course.rating.toFixed(1)}
              </span>
            )}
            {hasRating && hasGraduates && (
              <span className="program-dot" aria-hidden="true">
                ·
              </span>
            )}
            {hasGraduates && (
              <span>{course.graduates.toLocaleString("en-US")}+ Graduates</span>
            )}
          </p>
        )}
      </div>
    </article>
  );
}

export function RetreatCard({ retreat }) {
  const page = getRetreatPageData(retreat.days);
  const numericPrice = page.pricing.shared.price;
  const price =
    typeof numericPrice === "number"
      ? `${page.pricing.shared.currency === "EUR" ? "€" : "$"}${numericPrice}`
      : (retreat.price ?? "On enquiry");

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--coral-dark)]/40">
      {/* Card Image */}
      <div className="home-retreat-media relative overflow-hidden aspect-[4/3]">
        <Media
          src={retreat.image}
          alt={`Yoga and meditation during ${retreat.name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[13.5px] font-extrabold uppercase tracking-wider text-[var(--coral-dark)] shadow-sm">
            {retreat.days} Days
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-[13.5px] font-medium text-white">
            <Star
              className="size-3 fill-[var(--gold)] text-[var(--gold)]"
              aria-hidden="true"
            />
            {page.rating}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-black group-hover:text-[var(--coral-dark)] transition-colors leading-snug">
          <Link href={`/retreats/${retreat.slug}`}>{retreat.name}</Link>
        </h3>

        <p className="text-body mt-2.5 line-clamp-2">{retreat.description}</p>

        {/* Card Footer */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
          <div>
            <span className="block text-[13.5px] font-bold uppercase tracking-wider text-[var(--muted)]">
              From / person
            </span>
            <strong className="text-lg font-bold text-[var(--coral-dark)]">
              {price}
            </strong>
          </div>
          <ButtonLink
            href={`/retreats/${retreat.slug}`}
            className="home-retreat-cta"
          >
            View Details
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function GoogleMark({ className = "" }) {
  return (
    <span className={`google-mark ${className}`}>
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M17.64 9.205c0-.64-.057-1.255-.164-1.846H9v3.492h4.844a4.14 4.14 0 0 1-1.796 2.716v2.266h2.909c1.703-1.568 2.683-3.88 2.683-6.628Z"
        />
        <path
          fill="#34A853"
          d="M9 18c2.43 0 4.468-.806 5.957-2.18l-2.909-2.265c-.806.54-1.836.86-3.048.86-2.344 0-4.328-1.585-5.036-3.714H.957v2.336A9 9 0 0 0 9 18Z"
        />
        <path
          fill="#FBBC05"
          d="M3.964 10.7A5.41 5.41 0 0 1 3.682 9c0-.59.101-1.164.282-1.7V4.964H.957A9 9 0 0 0 0 9c0 1.45.347 2.822.957 4.036L3.964 10.7Z"
        />
        <path
          fill="#EA4335"
          d="M9 3.58c1.322 0 2.51.454 3.445 1.345l2.581-2.582C13.464.891 11.426 0 9 0A9 9 0 0 0 .957 4.964L3.964 7.3C4.672 5.17 6.656 3.58 9 3.58Z"
        />
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
          <dt className="flex flex-col items-center">
            {icon === "calendar" ? (
              <CalendarDays aria-hidden="true" size={20} />
            ) : icon === "location" ? (
              <MapPin aria-hidden="true" size={20} />
            ) : (
              <Clock3 aria-hidden="true" size={20} />
            )}
            {label}
          </dt>
          <dd>{publicValue(value)}</dd>
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
  className = "",
  height, // e.g. "45vh"
}) {
  return (
    <section
      className={`final-cta-section ${className}`}
      style={height ? { "--final-cta-height": height } : undefined}
      aria-labelledby="final-cta-title"
    >
      <Container>
        <Eyebrow>Begin with a conversation</Eyebrow>
        <h2 id="final-cta-title">{title}</h2>
        <p>{text}</p>
        <div className="final-cta-actions">
          <ButtonLink href="/apply">Reserve your spot</ButtonLink>
          <ButtonLink href="/contact#whatsapp" variant="light">
            <SiWhatsapp aria-hidden="true" size={17} />
            Ask on WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
