import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

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

export function PlaceholderBadge({ children = "Editorial placeholder" }) {
  return <span className="placeholder-badge">{children}</span>;
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
      <PlaceholderBadge />
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

export function PageHero({ eyebrow, title, text, image = "/images/course-goa-yoga.png" }) {
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
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
        {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="page-hero-copy">{text}</p>}
      </Container>
    </section>
  );
}

export function ProgramCard({ course, horizontal = false }) {
  return (
    <article className={`card overflow-hidden ${horizontal ? "program-card-horizontal" : ""}`}>
      <Media
        src={course.image}
        alt={`${course.name} editorial placeholder`}
        className="program-media"
      />
      <div className="card-body flex flex-1 flex-col">
        <div className="flex flex-wrap gap-2">
          <span className="pill">{course.level}</span>
          <span className="pill pill-muted">{course.duration}</span>
        </div>
        <h3 className="mt-5 text-2xl">{course.name}</h3>
        <p className="mt-3 text-muted">{course.description}</p>
        <dl className="meta-grid mt-5">
          <div>
            <MapPin aria-hidden="true" size={17} />
            <dt>Location</dt>
            <dd>{course.location}</dd>
          </div>
          <div>
            <span aria-hidden="true">₹</span>
            <dt>Fee</dt>
            <dd>{course.price}</dd>
          </div>
        </dl>
        <div className="mt-auto pt-6">
          <ButtonLink href={`/courses/${course.slug}`} variant="text">
            View full curriculum
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function RetreatCard({ retreat }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <Media
        src={retreat.image}
        alt={`${retreat.name} editorial placeholder`}
        className="retreat-media"
      />
      <div className="card-body flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="pill">{retreat.days} days</span>
          <span className="text-sm text-muted">{retreat.category}</span>
        </div>
        <h3 className="mt-5 text-2xl">{retreat.name}</h3>
        <p className="mt-3 text-muted">{retreat.description}</p>
        <ul className="check-list mt-5">
          {retreat.benefits.map((benefit) => (
            <li key={benefit}>
              <Check aria-hidden="true" size={17} />
              {benefit}
            </li>
          ))}
        </ul>
        <p className="mt-5 font-semibold text-brown">{retreat.price}</p>
        <ButtonLink href={`/retreats/${retreat.slug}`} className="mt-5 w-full justify-center">
          Explore retreat
        </ButtonLink>
      </div>
    </article>
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
