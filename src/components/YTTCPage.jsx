"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Bath,
  BookOpen,
  Bus,
  CalendarDays,
  Car,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock3,
  Compass,
  Droplets,
  Eye,
  Feather,
  Flower2,
  Globe2,
  GraduationCap,
  Handshake,
  Heart,
  Home,
  Layers,
  Leaf,
  MapPin,
  Moon,
  Mountain,
  Network,
  NotebookText,
  PersonStanding,
  Plane,
  ReceiptText,
  Salad,
  Scale,
  Shirt,
  Sparkles,
  Sprout,
  Star,
  Sun,
  Sunrise,
  Target,
  TrainFront,
  TreePalm,
  UserRound,
  Users,
  Wifi,
  Wind,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import BrandLogo from "@/components/BrandLogos";
import { yttcContent } from "@/data/yttcContent";
import {
  reviewProfile,
  site,
  tripadvisorProfile,
  whatsappLink,
} from "@/data/siteData";
import { Container, GoogleMark } from "@/components/ui";
import { Gallery } from "@/components/Interactive";

/* ── Icon lookup ─────────────────────────────── */
const ICONS = {
  activity: PersonStanding,
  anatomy: PersonStanding,
  arrival: Plane,
  asana: PersonStanding,
  award: Award,
  backpack: Sprout,
  badge: BadgeCheck,
  bath: Bath,
  book: BookOpen,
  breath: Wind,
  bus: Bus,
  calendar: CalendarDays,
  car: Car,
  certification: Award,
  clipboard: ClipboardList,
  clock: Clock3,
  compass: Compass,
  droplets: Droplets,
  ethics: Scale,
  eye: Eye,
  feather: Feather,
  flower: Flower2,
  foundation: BookOpen,
  globe: Globe2,
  grad: GraduationCap,
  graduation: GraduationCap,
  hand: Handshake,
  heart: Heart,
  home: Home,
  landmark: MapPin,
  layers: Layers,
  leaf: Leaf,
  map: MapPin,
  map2: MapPin,
  meditation: Flower2,
  moon: Moon,
  mountain: Mountain,
  network: Network,
  observation: Eye,
  palm: TreePalm,
  plane: Plane,
  practice: PersonStanding,
  receipt: ReceiptText,
  rest: Moon,
  salad: Salad,
  sequencing: Layers,
  shirt: Shirt,
  sprout: Sprout,
  star: Star,
  style: Sparkles,
  sun: Sun,
  sunrise: Sunrise,
  target: Target,
  teach: NotebookText,
  teaching: Users,
  train: TrainFront,
  tree: TreePalm,
  user: UserRound,
  users: Users,
  waves: Mountain,
  wifi: Wifi,
};

function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Sparkles;
  return <Cmp aria-hidden="true" {...props} />;
}

/* ── Design Primitives ──────────────────────── */

function SectionHead({ eyebrow, title, accent, text, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="yt-eyebrow">{eyebrow}</span>
      )}
      <h2 className="yt-section-title">
        {title}
        {accent && <em> {accent}</em>}
      </h2>
      {text && (
        <p className="yt-section-desc">{text}</p>
      )}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`yt-card p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

function IconTile({ name, className = "" }) {
  return (
    <span className={`yt-icon-tile ${className}`}>
      <Icon name={name} size={20} />
    </span>
  );
}

function PillButton({ href, children, variant = "primary", className = "" }) {
  const cls = {
    primary: "yt-btn-primary",
    outline: "yt-btn-outline",
    whatsapp: "yt-btn-whatsapp",
  }[variant];
  const isInternal = href.startsWith("/") || href.startsWith("#") || href.startsWith("mailto:");
  return isInternal ? (
    <Link href={href} className={`${cls} ${className}`}>
      {children}
      <ArrowRight size={13} aria-hidden="true" />
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${cls} ${className}`}>
      {children}
      <ArrowRight size={13} aria-hidden="true" />
    </a>
  );
}

function CheckItem({ children, className = "" }) {
  return (
    <li className={`flex items-start gap-2.5 ${className}`}>
      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--cream)] text-[var(--coral-dark)] ring-1 ring-[var(--border)]">
        <Check size={12} aria-hidden="true" />
      </span>
      <span className="text-[13.5px] leading-relaxed text-[var(--muted)]">{children}</span>
    </li>
  );
}

function Stars({ value, size = 13 }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.round(value)
              ? "fill-[var(--gold)] text-[var(--gold)]"
              : "fill-gray-200 text-gray-200"
          }
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

function TripAdvisorMark() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[15px] font-bold text-[#00aa6c]">
      <BrandLogo name="tripadvisor" alt="TripAdvisor" className="size-6" />
      TripAdvisor
    </span>
  );
}

function formatRange(start, end) {
  if (!start || !end || String(start).startsWith("Available") || String(start).startsWith("Confirm") || String(start).startsWith("[")) return null;
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return null;
  const monthDay = { day: "numeric", month: "short" };
  const withYear = { day: "numeric", month: "short", year: "numeric" };
  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  return `${new Intl.DateTimeFormat("en-IN", monthDay).format(startDate)} – ${new Intl.DateTimeFormat("en-IN", sameYear ? monthDay : withYear).format(endDate)}`;
}

function savePercent(original, current) {
  const originalNum = Number(String(original || "").replace(/[^\d.]/g, ""));
  const currentNum = Number(String(current || "").replace(/[^\d.]/g, ""));
  if (!originalNum || !currentNum || originalNum <= currentNum) return 0;
  return Math.round((1 - currentNum / originalNum) * 100);
}

function initials(name = "") {
  const parts = name.split(/[\s,]+/).filter(Boolean);
  return (parts[0]?.[0] || "S").toUpperCase();
}

/* ScrollRow */
function ScrollRow({ children, label = "items" }) {
  const rowRef = useRef(null);
  function scroll(direction) {
    rowRef.current?.scrollBy({
      left: direction * Math.min(rowRef.current.clientWidth * 0.85, 720),
      behavior: "smooth",
    });
  }
  return (
    <div className="relative">
      <div className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2">
        {children}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2.5">
        <button type="button" onClick={() => scroll(-1)} aria-label={`Previous ${label}`} className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--coral-dark)] shadow-sm transition-all hover:bg-[var(--coral-dark)] hover:text-white">
          <ChevronLeft size={16} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label={`Next ${label}`} className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--coral-dark)] shadow-sm transition-all hover:bg-[var(--coral-dark)] hover:text-white">
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

/* MiniAccordion */
function MiniAccordion({ eyebrow, title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`yt-card overflow-hidden !p-0 transition-all duration-300 ${open ? "ring-1 ring-[var(--coral-dark)]/20" : ""}`}>
      <h3 className="m-0">
        <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className="flex w-full items-center gap-4 p-5 text-left">
          {icon ? (
            <IconTile name={icon} className={open ? "!bg-[var(--coral-dark)] !text-white !ring-transparent" : ""} />
          ) : (
            <span className={`grid size-9 shrink-0 place-items-center rounded-xl transition-colors ${open ? "bg-[var(--coral-dark)] text-white" : "bg-[var(--cream)] text-[var(--coral-dark)]"}`}>
              <ChevronDown size={18} aria-hidden="true" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </span>
          )}
          <span className="flex-1">
            {eyebrow && <span className="mb-0.5 block text-[10px] font-black uppercase tracking-[0.16em] text-[var(--coral)]">{eyebrow}</span>}
            <span className="font-serif text-[15px] leading-snug text-[var(--brown)] sm:text-[17px] font-semibold">{title}</span>
          </span>
          {icon && <ChevronDown size={18} aria-hidden="true" className={`shrink-0 text-[var(--muted)] transition-transform duration-300 ${open ? "rotate-180 text-[var(--coral-dark)]" : ""}`} />}
        </button>
      </h3>
      <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr" }} aria-hidden={!open}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm leading-relaxed text-[var(--muted)] md:pl-20">{children}</div>
        </div>
      </div>
    </div>
  );
}

function SectionCard({ id, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-28 py-10 md:py-14 ${className}`}>
      {children}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   1. HERO — Sukha-style full-width hero
   ═══════════════════════════════════════════════ */
function Hero({ c, course }) {
  const hours = String(course.hours).replace("-hour", "");
  const whatsappHref = whatsappLink(course.whatsappMessage);

  return (
    <section id="top" className="yt-hero">
      <Image src={course.image} alt={`Students practising during ${course.name}`} fill loading="eager" fetchPriority="high" sizes="100vw" className="yt-hero-img" />
      <div className="yt-hero-overlay" />
      <Container className="relative z-10 w-full pb-14 pt-32 md:pb-20 md:pt-40">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
            {c.hero.breadcrumbs.map((item, index) => (
              <li key={item.label} className="flex items-center gap-2">
                {item.href ? <Link href={item.href} className="transition hover:text-white/80">{item.label}</Link> : <span className="text-white/80">{item.label}</span>}
                {index < c.hero.breadcrumbs.length - 1 && <ChevronRight size={12} aria-hidden="true" className="text-white/30" />}
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm ring-1 ring-white/10">
            <Clock3 size={13} aria-hidden="true" />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm ring-1 ring-white/10">
            <Target size={13} aria-hidden="true" />
            {course.level}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm ring-1 ring-white/10">
            <Award size={13} aria-hidden="true" />
            Global Alliance
          </span>
        </div>

        <h1 className="max-w-3xl font-serif text-[2.2rem] font-normal leading-[1.1] tracking-tight text-white sm:text-[2.8rem] md:text-[3.5rem]">
          {hours} Hour Yoga Teacher Training
          <em className="block text-[var(--gold)]">in Goa</em>
        </h1>

        <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-white/60 md:text-[15px]">{c.hero.text}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <PillButton href="/apply">Reserve your spot</PillButton>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="yt-btn-whatsapp">
            <SiWhatsapp size={16} aria-hidden="true" />
            Ask on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   COURSE SNAPSHOT SIDEBAR (Sukha style — right column)
   ═══════════════════════════════════════════════ */
function CourseSidebar({ c, course }) {
  const s = c.sidebar;
  const shared = s.pricing.shared || course.price;
  const privateRoom = s.pricing.private || course.privatePrice;
  const listShared = s.pricing.listShared;
  const listPrivate = s.pricing.listPrivate;
  const save = savePercent(listShared, shared);
  const savePrivate = savePercent(listPrivate, privateRoom);
  const whatsappHref = whatsappLink(course.whatsappMessage);

  return (
    <div className="space-y-5">
      {/* Main pricing card */}
      <div className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[0_8px_32px_rgba(47,79,62,0.1)]">
        <div className="bg-gradient-to-br from-[var(--coral-dark)] to-[var(--coral)] px-6 py-5 text-white">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] font-black uppercase tracking-[0.16em]">{String(course.hours).replace("-hour", "")}H YTTC Fees</p>
            {save > 0 && <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-black text-[var(--coral-dark)]">Save {save}%</span>}
          </div>
          <p className="mt-2.5 flex flex-wrap items-baseline gap-2">
            <span className="text-3xl font-black leading-none">{shared}</span>
            <span className="text-[13px] font-bold text-white/50 line-through">{listShared}</span>
          </p>
          <p className="mt-1.5 text-[12px] leading-5 text-white/70">{s.pricing.note}</p>
        </div>

        <div className="p-5">
          {/* Pricing rows */}
          <div className="space-y-2.5 border-b border-[var(--border)] pb-4">
            {[
              { label: "Double Shared", value: shared, original: listShared, pct: save },
              { label: "Private Room", value: privateRoom, original: listPrivate, pct: savePrivate },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between text-[13px]">
                <span className="font-semibold text-[var(--muted)]">{row.label}</span>
                <span className="font-black text-[var(--brown)]">
                  {row.value} {row.pct > 0 && <del className="text-[11px] font-semibold text-[var(--coral)]">{row.original}</del>}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-4 space-y-2.5">
            <PillButton href="/apply" className="min-h-[48px] w-full">Reserve Your Spot</PillButton>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="yt-btn-whatsapp min-h-[46px] w-full">
              <SiWhatsapp size={15} aria-hidden="true" />
              Ask on WhatsApp
            </a>
          </div>

          {/* View full calendar link */}
          <div className="mt-4 text-center">
            <a href="#dates-fees" className="text-[11px] font-bold uppercase tracking-widest text-[var(--coral-dark)] transition hover:underline">View Full Batch Calendar →</a>
          </div>
        </div>
      </div>

      {/* Course at a Glance card */}
      <div className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white p-5 shadow-sm">
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--coral)]">Course Details</p>
        <div className="space-y-3">
          {s.details.map((detail) => (
            <div key={detail.label} className="flex items-center gap-3">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[var(--cream)] text-[var(--coral-dark)]">
                <Icon name={detail.icon} size={15} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">{detail.label}</p>
                <p className="truncate text-[13px] font-bold text-[var(--brown)]">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust badges card */}
      <div className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white p-5 shadow-sm">
        <div className="space-y-3">
          {[
            { icon: "shield", label: "Yoga Alliance USA Certified" },
            { icon: "badge", label: "Ministry of AYUSH Recognized" },
            { icon: "users", label: "Small Batches (12–15 Students)" },
            { icon: "graduation", label: `${(s.graduates || 500)}+ Graduates · 30+ Countries` },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[var(--cream)] text-[var(--coral-dark)]">
                <Icon name={b.icon} size={15} />
              </span>
              <p className="text-[13px] font-semibold text-[var(--brown)]">{b.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Google rating */}
      <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--cream)] px-4 py-3.5">
        <div className="flex items-center gap-3">
          <GoogleMark />
          <div>
            <p className="font-serif text-xl font-semibold leading-none text-[var(--brown)]">{s.rating}</p>
            <Stars value={s.rating} size={10} />
          </div>
        </div>
        <p className="text-right text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
          {(s.graduates || 0).toLocaleString("en-IN")}+ graduates
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   2. QUICK NAV — floating pill navigation
   ═══════════════════════════════════════════════ */
function QuickNav({ c }) {
  const items = c.quickNav;
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { for (const entry of entries) { if (entry.isIntersecting) setActive(entry.target.id); } },
      { rootMargin: "-160px 0px -70% 0px", threshold: 0 },
    );
    items.forEach((item) => { const el = document.getElementById(item.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Course sections" className="sticky top-16 z-40 border-b border-[var(--border)] bg-white/80 backdrop-blur-xl md:top-[76px]">
      <div className="no-scrollbar mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-2.5 md:justify-center md:px-8">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
              active === item.id ? "bg-[var(--coral-dark)] text-white shadow-sm shadow-[var(--coral-dark)]/15" : "text-[var(--muted)] hover:bg-[var(--cream)] hover:text-[var(--brown)]"
            }`}>{item.label}</a>
        ))}
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   3. OVERVIEW
   ═══════════════════════════════════════════════ */
function Overview({ c, course }) {
  const credential = c.overview.credential;
  const points = course.whatIs?.points || [];
  return (
    <div>
      <SectionHead eyebrow="Gateway to Transformation" title={course.name.split(" in ")[0] || course.name} accent="in Goa" />
      <p className="mt-5 text-[14px] font-medium italic leading-relaxed text-[var(--muted)] sm:text-[15px]">{course.bestFor}</p>
      <div className="mt-5 max-w-[60ch] space-y-4 text-[15px] leading-relaxed text-[var(--muted)]">
        {c.overview.paragraphs.map((p) => <p key={p}>{p}</p>)}
      </div>
      {points.length > 0 && (
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {points.map((p) => <CheckItem key={p}>{p}</CheckItem>)}
        </ul>
      )}
      <div className="mt-8 flex items-start gap-4 rounded-2xl bg-gradient-to-br from-[var(--cream)] to-white p-6 ring-1 ring-[var(--border)] sm:items-center sm:p-7">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--coral-dark)] text-white shadow-md shadow-[var(--coral-dark)]/15">
          <BadgeCheck size={22} aria-hidden="true" />
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--coral)]">{credential.eyebrow}</p>
          <h3 className="mt-1 font-serif text-lg font-semibold text-[var(--brown)]">{credential.title}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">{credential.text}</p>
          <Link href={credential.link || "/certification"} className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[var(--coral-dark)] transition hover:gap-2.5">
            How certification works <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   4. WHO CAN JOIN
   ═══════════════════════════════════════════════ */
function WhoCanJoin({ c, course }) {
  const items = c.whoShouldJoin.length ? c.whoShouldJoin : course.designedFor.map((t) => ({ title: t, content: "" }));
  return (
    <div>
      <SectionHead eyebrow="Perfect for You" title="Who Can" accent="Join" text="The course welcomes every level — here is who it is designed for." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title} className="flex items-start gap-4">
            <IconTile name={item.icon || "user"} />
            <div className="min-w-0">
              <h3 className="font-serif text-[17px] font-semibold leading-snug text-[var(--brown)]">{item.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">{item.content || "A natural fit for this course."}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
        <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[var(--cream)] px-6 py-4">
          <span className="grid size-9 place-items-center rounded-xl bg-[var(--coral-dark)] text-white"><BadgeCheck size={18} aria-hidden="true" /></span>
          <h3 className="font-serif text-lg font-semibold text-[var(--brown)]">Requirements &amp; considerations</h3>
        </div>
        <dl className="grid gap-px bg-[var(--border)] sm:grid-cols-2">
          {c.requirements.map((item) => (
            <div key={item.label} className="bg-white px-6 py-5">
              <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--coral)]">{item.label}</dt>
              <dd className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   5. WHY CHOOSE US
   ═══════════════════════════════════════════════ */
function WhyChoose({ c, course }) {
  const items = c.whyChoose.length ? c.whyChoose : [
    { icon: "shield", title: "Yoga Alliance-approved", text: "Certified training from a registered school." },
    { icon: "award", title: "Experienced faculty", text: "Decades of combined teaching practice." },
  ];
  return (
    <div>
      <SectionHead eyebrow="Our Promise" title="Why Choose Our" accent="Yoga School" text={`Six reasons students choose Hatha Yogashala for their ${course.hours} TTC in Goa.`} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title} className="group">
            <IconTile name={item.icon} className="transition-colors group-hover:bg-[var(--coral-dark)] group-hover:text-white" />
            <h3 className="mt-4 font-serif text-[17px] font-semibold text-[var(--brown)]">{item.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">{item.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   6. WHAT YOU GET
   ═══════════════════════════════════════════════ */
function WhatYouGet({ c }) {
  return (
    <div>
      <SectionHead eyebrow="Included" title="Core Learning" accent="Pillars" text="What you get with this training — from the mat to the philosophy." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {c.gain.map((item) => (
          <Card key={item.title} className="group">
            <IconTile name={item.icon} className="transition-colors group-hover:bg-[var(--coral-dark)] group-hover:text-white" />
            <h3 className="mt-4 font-serif text-[17px] font-semibold text-[var(--brown)]">{item.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">{item.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   7. TEACHERS
   ═══════════════════════════════════════════════ */
function Teachers({ c }) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHead eyebrow="Learn from the Masters" title="Meet Your" accent="Teachers" />
        <PillButton href="/teachers" variant="outline" className="shrink-0">All teachers</PillButton>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {c.teachers.map((teacher) => (
          <Card key={teacher.name} className="flex gap-5">
            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl">
              <Image src={teacher.image} alt={`Portrait of ${teacher.name}`} fill sizes="96px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-lg font-semibold leading-snug text-[var(--brown)]">{teacher.name}</h3>
              <p className="mt-0.5 text-[12px] font-bold text-[var(--coral)]">{teacher.role}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(teacher.specialties || []).slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full bg-[var(--cream)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--coral-dark)] ring-1 ring-[var(--border)]">{tag}</span>
                ))}
              </div>
              <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-[var(--muted)]">{teacher.bio}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   8. CERTIFICATION
   ═══════════════════════════════════════════════ */
function Certification({ c }) {
  const cert = c.certification;
  return (
    <div>
      <SectionHead eyebrow="Global Recognition" title="Yoga Alliance" accent="Certification" text={cert.text} />
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        {cert.bodies.map((body) => (
          <Card key={body.name} className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="relative h-14 w-28"><Image src={body.src} alt={`${body.name} logo`} fill sizes="112px" className="object-contain" /></div>
            <p className="font-serif text-base font-semibold text-[var(--brown)]">{body.name}</p>
            <p className="text-[12px] leading-5 text-[var(--muted)]">{body.note}</p>
          </Card>
        ))}
        <Card className="flex flex-col items-center justify-center gap-3 text-center">
          <span className="grid size-12 place-items-center rounded-2xl bg-[var(--coral-dark)] text-white"><BadgeCheck size={22} aria-hidden="true" /></span>
          <p className="font-serif text-base font-semibold text-[var(--brown)]">Verified &amp; Registered</p>
          <p className="text-[12px] leading-5 text-[var(--muted)]">Clear written certification pathway</p>
        </Card>
      </div>
      <figure className="mt-8 overflow-hidden rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-[var(--border)]">
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl">
          <Image src={cert.sample.src} alt={cert.sample.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <figcaption className="px-4 py-3 text-center text-[11px] font-black uppercase tracking-widest text-[var(--coral)]">Sample completion certificate</figcaption>
      </figure>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   9. TIMELINE
   ═══════════════════════════════════════════════ */
function Timeline({ c, course }) {
  const steps = c.timeline;
  return (
    <div>
      <SectionHead center eyebrow="Your Journey" title={`Your ${String(course.hours).replace("-hour", "")}-Hour TTC`} accent="Roadmap" text="Four phases, from arrival to certification." />
      {steps.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={step.label} className="group relative">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-2xl bg-[var(--cream)] text-[var(--coral-dark)] ring-1 ring-[var(--border)]"><Icon name={step.icon} size={20} /></span>
                <span className="font-serif text-3xl font-semibold leading-none text-[var(--border)]">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--coral)]">{step.time}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-[var(--brown)]">{step.label}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">{step.text}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   10. DAILY SCHEDULE
   ═══════════════════════════════════════════════ */
function DailySchedule({ c }) {
  const schedule = c.schedule;
  return (
    <div>
      <SectionHead eyebrow="Your Rhythm" title="A Day in the" accent="Life" text="A typical day — structured, balanced and unhurried." />
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {schedule.map((item, index) => (
          <div key={`${item.time}-${index}`} className="yt-card flex items-center gap-4 !p-4">
            <span className="shrink-0 rounded-xl bg-[var(--coral-dark)] px-3 py-2 text-[11px] font-black uppercase tracking-widest text-white shadow-sm">{item.time}</span>
            <span className="text-[14px] font-semibold leading-snug text-[var(--brown)]">{item.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   11. SYLLABUS
   ═══════════════════════════════════════════════ */
function Syllabus({ c, course }) {
  const { categories, topicPills, tabs } = c.curriculum;
  const modules = course.curriculum || [];
  return (
    <div>
      <SectionHead eyebrow="Course Syllabus" title={`${String(course.hours).replace("-hour", "")}-Hour TTC`} accent="Syllabus" text={`Around ${c.curriculum.hours.total} contact hours, split across four streams.`} />
      <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <Card key={cat.label} className="flex flex-col">
            <div className="flex items-center justify-between gap-3">
              <IconTile name={cat.icon} />
              <p className="font-serif text-2xl font-semibold leading-none text-[var(--coral-dark)]">
                {cat.hours}<span className="ml-1 font-sans text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">hrs</span>
              </p>
            </div>
            <h3 className="mt-3 font-serif text-[14px] font-semibold leading-tight text-[var(--brown)]">{cat.label}</h3>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {(cat.sub || []).map((tag) => (
                <span key={tag} className="rounded-full bg-[var(--cream)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[var(--coral-dark)] ring-1 ring-[var(--border)]">{tag}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {topicPills.map((pill) => (
          <span key={pill} className="rounded-full border border-[var(--border)] bg-white px-4 py-1.5 text-[12px] font-semibold text-[var(--coral-dark)]">{pill}</span>
        ))}
      </div>
      {modules.length > 0 && (
        <>
          <h3 className="mt-9 font-serif text-xl font-semibold text-[var(--brown)]">Course modules</h3>
          <div className="mt-4 space-y-2.5">
            {modules.map((mod, i) => (
              <MiniAccordion key={mod.title} icon={mod.icon} eyebrow={`Module ${String(i + 1).padStart(2, "0")}`} title={mod.title} defaultOpen={i === 0}>{mod.content}</MiniAccordion>
            ))}
          </div>
        </>
      )}
      {tabs.length > 0 && (
        <>
          <h3 className="mt-10 font-serif text-xl font-semibold text-[var(--brown)]">Key subjects covered</h3>
          <div className="mt-4 space-y-2.5">
            {tabs.map((sub) => (
              <MiniAccordion key={sub.id} title={sub.title} defaultOpen={false}>
                <p className="mb-3">{sub.description}</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {(sub.topics || []).map((t) => <CheckItem key={t}>{t}</CheckItem>)}
                </ul>
              </MiniAccordion>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   12. PATHWAY
   ═══════════════════════════════════════════════ */
function Pathway({ c, course }) {
  const { current, next } = c.pathway;
  const steps = [current, ...next];
  const labels = ["Current Step", "Next Level", "Advanced Level"];
  return (
    <div>
      <SectionHead eyebrow="Certification Pathway" title="Your Pathway to" accent={next[0] ? `${String(next[0].hours).replace("-hour", "")}-Hour TTC` : "the Next Level"} />
      <div className="mt-8 space-y-3">
        {steps.map((step, i) => (
          <Card key={`${step.slug}-${i}`} className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
            <div className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--cream)] text-[var(--coral-dark)] ring-1 ring-[var(--border)]"><Award size={20} aria-hidden="true" /></span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--coral)]">{labels[i] || `Step ${i + 1}`}</p>
                <h3 className="mt-0.5 font-serif text-lg font-semibold text-[var(--brown)]">{String(step.hours).replace("-hour", "")}-Hour TTC</h3>
              </div>
            </div>
            <div className="shrink-0">
              {i === 0 ? <PillButton href="/apply">Start Here</PillButton> : <PillButton href={`/courses/${step.slug}`} variant="outline">View Details</PillButton>}
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-5 text-center text-[13px] font-semibold text-[var(--muted)]">{c.pathway.nextStep}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   13. OUTCOMES
   ═══════════════════════════════════════════════ */
function Outcomes({ c }) {
  return (
    <div>
      <SectionHead eyebrow="What You Gain" title="Outcomes of Your" accent="Yoga Journey" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {c.outcomes.map((outcome, i) => (
          <Card key={outcome.title} className="group overflow-hidden !p-0">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src={outcome.image} alt={outcome.alt} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute left-3 top-3 grid size-8 place-items-center rounded-full bg-white/90 font-serif text-xs font-semibold text-[var(--coral-dark)] shadow-sm backdrop-blur">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="p-5 font-serif text-[17px] font-semibold leading-snug text-[var(--brown)]">{outcome.title}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   14. EXCURSIONS (Sukha-style portrait grid)
   ═══════════════════════════════════════════════ */
function Excursions({ c }) {
  return (
    <div>
      <SectionHead eyebrow="Sacred Explorations" title="Excursions" accent="Beyond the Mat" text="Half-day outings woven into the course to balance study with exploration." />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {c.excursions.map((item) => (
          <article key={item.title} className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
              <h3 className="font-serif text-[14px] font-semibold leading-snug text-white sm:text-base">{item.title}</h3>
              <p className="mt-0.5 text-[11px] leading-relaxed text-white/65 line-clamp-2">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   15. COMPARISON TABLE
   ═══════════════════════════════════════════════ */
function ComparisonTable({ c, course }) {
  const { current, next } = c.pathway;
  const steps = [current, ...next];
  return (
    <div>
      <SectionHead eyebrow="Choose Your Path" title={`${String(course.hours).replace("-hour", "")}-Hour vs 200 vs 300`} accent="Which Is Right for You?" />
      <div className="no-scrollbar mt-8 overflow-x-auto rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-[var(--cream)]">
            <tr>
              <th scope="col" className="px-5 py-4 font-serif text-base text-[var(--brown)]">Compare</th>
              {steps.map((step, i) => (
                <th scope="col" key={step.slug} className="px-5 py-4 text-[13px] font-bold text-[var(--brown)]">
                  <span className="font-serif">{String(step.hours).replace("-hour", "")} Hour</span>
                  {i === 0 && <span className="mt-1.5 block w-fit rounded-full bg-[var(--coral-dark)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">This Course</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.pathway.rows.map((row, ri) => (
              <tr key={row[0]} className={`transition-colors ${ri % 2 ? "bg-white" : "bg-[var(--cream)]/50"} hover:bg-[var(--surface)]/40`}>
                <th scope="row" className="px-6 py-4 text-[13px] font-bold text-[var(--brown)]">{row[0]}</th>
                {row.slice(1).map((cell, ci) => (
                  <td key={ci} className={`px-5 py-4 text-[13px] leading-6 text-[var(--muted)] ${ci === 0 ? "bg-[var(--cream)] text-[var(--brown)] ring-1 ring-[var(--border)]" : ""}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto sm:hidden">
        {steps.map((step, i) => (
          <div key={step.slug} className="min-w-[85%] snap-center overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
            <div className={`px-5 py-4 font-serif text-lg font-semibold ${i === 0 ? "bg-[var(--coral-dark)] text-white" : "bg-[var(--cream)] text-[var(--muted)]"}`}>
              {String(step.hours).replace("-hour", "")} Hour
            </div>
            <div className="space-y-3 p-5">
              {c.pathway.rows.map((row) => (
                <div key={row[0]} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-[var(--coral-dark)]"><Check size={14} aria-hidden="true" /></span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--muted)]">{row[0]}</p>
                    <p className="text-[13px] leading-5 text-[var(--muted)]">{row[i + 1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-[var(--muted)]">Fees shown per person for shared rooms — all-inclusive (training, room, meals, kit, manual, certification).</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   16. RULES
   ═══════════════════════════════════════════════ */
function Rules({ c }) {
  return (
    <div>
      <SectionHead eyebrow="Ashram Discipline" title="Rules & Code of" accent="Conduct" text="Simple expectations that keep the ashram quiet, safe and focused." />
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {c.rules.map((rule, i) => (
          <Card key={rule.title} className="flex items-start gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--cream)] font-serif text-[13px] font-semibold text-[var(--coral-dark)] ring-1 ring-[var(--border)]">{String(i + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <h3 className="font-serif text-[15px] font-semibold text-[var(--brown)]">{rule.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">{rule.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   17. DATES & FEES
   ═══════════════════════════════════════════════ */
function DatesBatches({ c, course }) {
  const s = c.sidebar;
  const listShared = s.pricing.listShared;
  const listPrivate = s.pricing.listPrivate;
  const whatsappHref = whatsappLink(course.whatsappMessage);
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[var(--coral-dark)] to-[var(--coral)] px-6 py-6 text-white shadow-lg shadow-[var(--coral-dark)]/20 md:flex-row lg:px-8">
        <p className="flex flex-wrap items-center justify-center gap-3 text-center text-[16px] font-semibold md:justify-start">
          <Sparkles size={18} aria-hidden="true" />
          Early Bird Offer — Save Up To 30%
          <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest ring-1 ring-white/25">Limited Seats</span>
        </p>
        <PillButton href="/apply" className="!bg-white !text-[var(--coral-dark)] hover:!bg-[var(--cream)]">Claim Offer</PillButton>
      </div>

      <SectionHead eyebrow="Dates & Pricing" title={`${String(course.hours).replace("-hour", "")}-Hour YTTC Fees`} accent="Dates & Batch Calendar" />

      <div className="no-scrollbar mt-8 overflow-x-auto rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--cream)]">
              {["Course Dates", "Double Shared", "Private Room", "Book Now"].map((l) => (
                <th key={l} scope="col" className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[var(--brown)]">{l}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.batches.map((batch) => {
              const range = formatRange(batch.start, batch.end);
              const saveShared = savePercent(listShared, batch.shared);
              const savePrivate = savePercent(listPrivate, batch.private);
              const filling = String(batch.availability || "").toLowerCase().includes("filling");
              return (
                <tr key={batch.id} className="group border-b border-[var(--border)] transition-colors last:border-0 hover:bg-[var(--cream)]/50">
                  <td className="px-6 py-5">
                    <h4 className="font-serif text-[15px] font-semibold text-[var(--brown)]">{range || batch.label || "Dates confirmed with the batch"}</h4>
                    {!range && <span className="mt-0.5 block text-[12px] text-[var(--muted)]">Dates confirmed with the batch</span>}
                    <span className={`mt-2 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${filling ? "bg-green-50 text-green-700 ring-1 ring-green-200" : "bg-[var(--cream)] text-[var(--coral-dark)] ring-1 ring-[var(--border)]"}`}>
                      {batch.availabilityLabel || batch.availability}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Shared</p>
                    {saveShared > 0 && <del className="text-[12px] text-[var(--coral)]">{listShared}</del>}
                    <p className="mt-0.5 font-serif text-xl font-semibold text-[var(--brown)]">{batch.shared}</p>
                    {saveShared > 0 && <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--coral)]">Save {saveShared}%</p>}
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Private</p>
                    {savePrivate > 0 && <del className="text-[12px] text-[var(--coral)]">{listPrivate}</del>}
                    <p className="mt-0.5 font-serif text-xl font-semibold text-[var(--brown)]">{batch.private}</p>
                    {savePrivate > 0 && <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--coral)]">Save {savePrivate}%</p>}
                  </td>
                  <td className="px-6 py-5"><PillButton href="/apply">Book Seat</PillButton></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[11px] text-[var(--muted)]">Fees shown per person, all-inclusive (training, room, meals, kit, manual and certification).</p>

      <div className="mt-10">
        <h3 className="font-serif text-xl font-semibold text-[var(--brown)]">Know exactly what&apos;s included</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {c.packageTabs.map((item, i) => (
            <button key={item.id} type="button" onClick={() => setTab(i)}
              className={`rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all ${tab === i ? "bg-[var(--coral-dark)] text-white shadow-md shadow-[var(--coral-dark)]/15" : "border border-[var(--border)] bg-white text-[var(--muted)] hover:text-[var(--coral-dark)]"}`}>
              {item.title}
            </button>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm md:p-7">
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.packageTabs[tab]?.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-6">
            <PillButton href="/apply">Reserve Your Spot</PillButton>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="yt-btn-whatsapp">
              <SiWhatsapp size={15} aria-hidden="true" /> Ask about dates
            </a>
          </div>
        </div>
      </div>

      {/* Free Bonus Sessions */}
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-[var(--cream)] to-white p-6 ring-1 ring-[var(--border)] md:p-7">
        <h3 className="font-serif text-xl font-semibold text-[var(--brown)]">Free Bonus Sessions Included</h3>
        <p className="mt-1 text-[13px] text-[var(--muted)]">Complimentary wellness workshops and experiences to enrich your journey.</p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {[
            { icon: "flower", label: "Sound Healing" },
            { icon: "meditation", label: "Mantra Chanting" },
            { icon: "moon", label: "Yoga Nidra" },
            { icon: "breath", label: "Pranayama Workshop" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white p-3.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[var(--cream)] text-[var(--coral-dark)]"><Icon name={item.icon} size={16} /></span>
              <p className="text-[13px] font-bold text-[var(--brown)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   18. ACCOMMODATION
   ═══════════════════════════════════════════════ */
function Accommodation({ c, course }) {
  const acc = c.accommodation;
  const images = acc.images || [];
  return (
    <div>
      <SectionHead eyebrow="Included with Every Course" title="Accommodation &" accent="Food" text="Comfortable rooms and sattvic meals near the beach." />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-7">
          <div>
            <h3 className="font-serif text-lg font-semibold text-[var(--brown)]">Peaceful rooms near the beach</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{acc.overview}</p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {c.stayChips.map((chip) => (
                <li key={chip.title} className="flex items-start gap-3 rounded-2xl bg-[var(--cream)] p-3.5 ring-1 ring-[var(--border)]">
                  <IconTile name={chip.icon} className="!size-9 !rounded-xl" />
                  <div>
                    <p className="text-[13px] font-bold text-[var(--brown)]">{chip.title}</p>
                    <p className="text-[12px] leading-5 text-[var(--muted)]">{chip.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-[var(--brown)]">Sattvic meals, cooked fresh</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{acc.food}</p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {c.foodChips.map((chip) => (
                <li key={chip.title} className="flex items-start gap-3 rounded-2xl bg-[var(--cream)] p-3.5 ring-1 ring-[var(--border)]">
                  <IconTile name={chip.icon} className="!size-9 !rounded-xl" />
                  <div>
                    <p className="text-[13px] font-bold text-[var(--brown)]">{chip.title}</p>
                    <p className="text-[12px] leading-5 text-[var(--muted)]">{chip.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-md ring-1 ring-[var(--border)]">
            <Image src={images[0]?.src || course.image} alt={images[0]?.alt || `Stay at ${course.name}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </figure>
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {images.slice(0, 3).map((img) => (
              <figure key={img.caption}>
                <div className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-[var(--border)]">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 30vw, 15vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <figcaption className="mt-1.5 text-center text-[10px] font-black uppercase tracking-widest text-[var(--coral)]">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <PillButton href="/apply">Reserve Your Spot</PillButton>
            <PillButton href="/accommodation" variant="outline">Review Accommodation</PillButton>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   19. GALLERY
   ═══════════════════════════════════════════════ */
function GallerySection({ c }) {
  return (
    <div>
      <SectionHead center eyebrow="Our Sacred Journey" title="Beautiful Moments of Our" accent="School & Students" />
      <div className="mt-8"><Gallery items={c.gallery} filters={false} /></div>
      <div className="mt-8 text-center"><PillButton href="/gallery" variant="outline">View Full Gallery</PillButton></div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   20. REVIEWS
   ═══════════════════════════════════════════════ */
function Reviews({ c }) {
  const google = c.reviews.google;
  const tripadvisor = c.reviews.tripadvisor;
  const platforms = [
    { name: "Google", rating: reviewProfile.rating, count: reviewProfile.reviewCount, color: "#2f6de0" },
    { name: "Yoga Alliance", rating: "4.8", count: "78+", color: "#2e8378" },
    { name: "TripAdvisor", rating: tripadvisorProfile.rating, count: tripadvisorProfile.reviewCount, color: "#007a5e" },
  ];

  function ReviewCard({ review, tone = "coral" }) {
    const color = tone === "ta" ? "#007a5e" : "var(--coral-dark)";
    return (
      <article className="flex h-[250px] w-[290px] shrink-0 snap-center flex-col rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:w-[320px]">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full text-[11px] font-black text-white" style={{ backgroundColor: color }}>{initials(review.name)}</span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-bold text-[var(--brown)]">{review.name}</p>
            <p className="text-[11px] text-[var(--muted)]">{review.date} · {review.platform}</p>
          </div>
        </div>
        {review.headline && <p className="mt-2.5 font-serif text-[14px] font-semibold text-[var(--brown)]">{review.headline}</p>}
        <div className="mt-1"><Stars value={review.rating} size={11} /></div>
        <blockquote className="mt-2.5 flex-1 text-[13px] leading-relaxed text-[var(--muted)]">&ldquo;{review.excerpt}&rdquo;</blockquote>
        <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 text-[11px] font-bold text-[var(--coral-dark)] transition hover:underline">Read Full Review →</a>
      </article>
    );
  }

  return (
    <div>
      {/* Platform badges */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        {platforms.map((p) => (
          <a key={p.name} href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-5 py-3 shadow-sm transition hover:shadow-md">
            <span className="text-[13px] font-bold" style={{ color: p.color }}>{p.name}</span>
            <span className="font-serif text-xl font-semibold text-[var(--brown)]">{p.rating}</span>
            <span className="flex gap-0.5">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={11} className="fill-[var(--gold)] text-[var(--gold)]" />)}</span>
            <span className="text-[11px] text-[var(--muted)]">{p.count} reviews</span>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHead eyebrow={`Verified ${reviewProfile.rating} Rating in Goa`} title="Google —" accent="Student Reviews" />
        <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
          <GoogleMark />
          <div>
            <p className="font-serif text-2xl font-semibold leading-none text-[var(--brown)]">{reviewProfile.rating}</p>
            <Stars value={reviewProfile.rating} size={12} />
            <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]">{reviewProfile.reviewCount} reviews</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <ScrollRow label="Google reviews">
          {google.map((r) => <ReviewCard key={`g-${r.name}`} review={r} />)}
        </ScrollRow>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        <a href={reviewProfile.googleBusinessUrl || "#"} target="_blank" rel="noopener noreferrer" className="yt-btn-primary">Google Reviews</a>
        <a href={reviewProfile.googleBusinessUrl || "#"} target="_blank" rel="noopener noreferrer" className="yt-btn-outline">Write a Review</a>
      </div>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-[var(--border)] pt-8">
        <SectionHead eyebrow={`Rated ${tripadvisorProfile.rating} on TripAdvisor`} title="TripAdvisor —" accent="Student Reviews" />
        <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
          <TripAdvisorMark />
          <div>
            <p className="font-serif text-2xl font-semibold leading-none text-[var(--brown)]">{tripadvisorProfile.rating}</p>
            <div className="mt-1 flex gap-1">{Array.from({ length: 5 }, (_, i) => <span key={i} className="size-2.5 rounded-full bg-[#00af87]" />)}</div>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]">{tripadvisorProfile.reviewCount} reviews</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <ScrollRow label="TripAdvisor reviews">
          {tripadvisor.map((r) => <ReviewCard key={`ta-${r.name}`} review={r} tone="ta" />)}
        </ScrollRow>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   21. FAQ
   ═══════════════════════════════════════════════ */
function Faq({ c }) {
  const whatsappHref = whatsappLink("Hi Hatha Yogashala, I have a question about a course.");
  return (
    <div>
      <SectionHead eyebrow="Support Center" title="Frequently Asked" accent="Questions" />
      <div className="mt-8 space-y-2.5">
        {c.faq.map((faq, i) => (
          <MiniAccordion key={faq.question} title={faq.question} defaultOpen={i === 0}>{faq.answer}</MiniAccordion>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-[var(--cream)] to-white p-6 text-center ring-1 ring-[var(--border)] sm:flex-row sm:text-left md:p-7">
        <span className="text-3xl text-[var(--coral-dark)]" aria-hidden="true">ॐ</span>
        <div className="flex-1">
          <h3 className="font-serif text-lg font-semibold text-[var(--brown)]">Still have questions?</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">Our team is available to help you choose the right path — we reply within a day.</p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="yt-btn-whatsapp"><SiWhatsapp size={15} aria-hidden="true" /> Chat on WhatsApp</a>
          <a href={`mailto:${site.contact.email}`} className="yt-btn-outline">Email Support</a>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   22. LOCATION
   ═══════════════════════════════════════════════ */
function Location({ c }) {
  const dirs = c.directions;
  const whatsappHref = whatsappLink("Hi Hatha Yogashala, I'd like to ask about a yoga teacher training course.");
  return (
    <div>
      <SectionHead eyebrow="Visit Us" title="How to Reach" accent="Hatha Yogashala" />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm md:p-7">
          <h3 className="font-serif text-xl font-semibold text-[var(--brown)]">{site.name}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">A residential yoga school in the quiet village of Querim, North Goa — minutes from Querim and Arambol beaches.</p>
          <div className="mt-4 flex items-start gap-3">
            <span className="mt-0.5 text-[var(--coral-dark)]"><MapPin size={18} aria-hidden="true" /></span>
            <p className="text-[14px] leading-relaxed text-[var(--muted)]">{dirs.address}</p>
          </div>
          <div className="mt-5 space-y-3.5">
            {dirs.travel.map((opt) => (
              <div key={opt.label} className="flex items-start gap-3">
                <IconTile name="map" />
                <div>
                  <p className="text-[13px] font-bold text-[var(--brown)]">{opt.label}</p>
                  <p className="text-[12px] leading-5 text-[var(--muted)]">{opt.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <PillButton href={site.contact.directionsUrl} className="!px-5"><MapPin size={14} aria-hidden="true" /> Get Directions</PillButton>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="yt-btn-whatsapp !px-5"><SiWhatsapp size={14} aria-hidden="true" /> WhatsApp us</a>
          </div>
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-[var(--border)] shadow-md lg:min-h-[380px]">
          <iframe src={site.contact.mapEmbedUrl} title={`Map showing the public ${site.location} location`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
          <span className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 shadow-lg">
            <MapPin size={15} className="text-[var(--coral-dark)]" aria-hidden="true" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[var(--brown)]">Hatha Yogashala — Querim</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MOBILE BOTTOM BAR
   ═══════════════════════════════════════════════ */
function MobileBottomBar({ course }) {
  const whatsappHref = whatsappLink(course.whatsappMessage);
  return (
    <div className="fixed inset-x-0 bottom-0 z-[800] border-t border-[var(--border)] bg-white/90 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-2.5">
        <div className="min-w-0 shrink-0">
          <p className="text-[9px] font-black uppercase tracking-widest text-[var(--coral-dark)]">From</p>
          <p className="truncate text-[15px] font-black leading-tight text-[var(--brown)]">{course.price}</p>
        </div>
        <PillButton href="/apply" className="min-h-[0] flex-1 py-3">Reserve Spot</PillButton>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-md transition hover:brightness-105">
          <SiWhatsapp size={15} aria-hidden="true" /> WhatsApp Chat
        </a>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT — Sukha-style 2-column layout
   Content LEFT | Sidebar RIGHT
   ═══════════════════════════════════════════════ */
export default function YTTCPage({ course }) {
  const c = yttcContent(course);

  return (
    <div className="yttc-modern pb-16 lg:pb-0">
      <Hero c={c} course={course} />
      <QuickNav c={c} />

      {/* Sukha-style: Content LEFT, Sidebar RIGHT */}
      <div className="px-4 pb-16 pt-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-10">
            {/* LEFT — Main content (8 cols) */}
            <div className="order-last lg:order-first lg:col-span-8">
              <SectionCard id="overview"><Overview c={c} course={course} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="who-can-join"><WhoCanJoin c={c} course={course} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="why-choose"><WhyChoose c={c} course={course} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="what-you-get"><WhatYouGet c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="teachers"><Teachers c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="certification"><Certification c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="timeline"><Timeline c={c} course={course} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="schedule"><DailySchedule c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="syllabus"><Syllabus c={c} course={course} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="pathway"><Pathway c={c} course={course} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="outcomes"><Outcomes c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="excursions"><Excursions c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="compare"><ComparisonTable c={c} course={course} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="rules"><Rules c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="dates-fees"><DatesBatches c={c} course={course} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="accommodation"><Accommodation c={c} course={course} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="gallery"><GallerySection c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="reviews"><Reviews c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="faq"><Faq c={c} /></SectionCard>
              <div className="yt-divider" />
              <SectionCard id="location"><Location c={c} /></SectionCard>
            </div>

            {/* RIGHT — Sticky sidebar (4 cols) — Sukha style */}
            <aside className="order-first lg:order-last lg:col-span-4">
              <div className="space-y-5 lg:sticky lg:top-32">
                <CourseSidebar c={c} course={course} />
              </div>
            </aside>
          </div>
        </div>
      </div>

      <MobileBottomBar course={course} />
    </div>
  );
}
