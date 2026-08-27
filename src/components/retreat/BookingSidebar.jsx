"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  CreditCard,
  Heart,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { whatsappLink } from "@/data/siteData";
import BookingForm from "./BookingForm";

export default function BookingSidebar({
  page,
  retreat,
  ctaLabel = "Book Your Retreat",
  entityLabel = "Retreat",
  studentsLabel = "retreat guests",
  programOptions,
}) {
  const [openForm, setOpenForm] = useState(false);
  const p = page.pricing;
  const whatsappHref = whatsappLink(
    retreat.whatsappMessage ||
      `Hi, I have a question about the ${retreat.name} retreat in Goa.`,
  );
  const currencySymbol =
    p?.shared?.currency === "INR" || retreat?.priceCurrency === "INR"
      ? "₹"
      : p?.shared?.currency === "EUR"
        ? "€"
        : "$";
  const formatPrice = (price) =>
    typeof price === "number"
      ? `${currencySymbol}${price.toLocaleString()}`
      : null;

  const pricingTarget = entityLabel === "TTC Course" ? "#fees" : "#registration";

  return (
    <aside
      className="retreat-sidebar scroll-mt-[110px]"
      id="book"
      aria-label={`${entityLabel} booking summary`}
    >
      <div className="booking-card">
        {/* Price block */}
        <div className="booking-card-head">
          {/* Official Ashram Logo Badge */}
          <div className="flex items-center justify-between gap-2.5 mb-3.5 pb-3 border-b border-[var(--border)]/70">
            <div className="relative w-32 h-8 shrink-0">
              <Image
                src="/images/The-Hatha-Yogashala-logo.png"
                alt="The Hatha Yogashala Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--coral-dark)] text-right">
              Direct Reservation
            </span>
          </div>

          <div className="booking-price">
            <span className="booking-price-from">From</span>
            <span>
              <strong>{formatPrice(p.shared.price) ?? "On enquiry"}</strong>
              <small>/person</small>
            </span>
          </div>
          <div className="booking-rating">
            <span
              aria-label={`${page.rating} out of 5`}
              className="inline-flex items-center gap-0.5"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`size-3.5 ${i < Math.round(page.rating) ? "fill-[var(--gold)] text-[var(--gold)]" : "text-[var(--border)]"}`}
                  aria-hidden="true"
                />
              ))}
            </span>
            <strong>{page.rating}/5</strong>
            <small>{page.ratingCount} verified reviews</small>
          </div>
        </div>

        {/* Key details */}
        <dl className="booking-facts">
          <div>
            <dt>
              <Clock3 size={15} aria-hidden="true" /> Duration
            </dt>
            <dd>{page.duration}</dd>
          </div>
          <div>
            <dt>
              <CalendarDays size={15} aria-hidden="true" /> Dates
            </dt>
            <dd>{retreat.date || "Flexible — enquire"}</dd>
          </div>
          <div>
            <dt>
              <MapPin size={15} aria-hidden="true" /> Location
            </dt>
            <dd>{page.location}</dd>
          </div>
          <div>
            <dt>
              <Users size={15} aria-hidden="true" /> Students
            </dt>
            <dd>
              {page.students} {studentsLabel}
            </dd>
          </div>
        </dl>

        {/* CTA buttons */}
        <div className="booking-actions">
          <button
            type="button"
            className="button button-primary !w-full !py-2.5 !text-[13px] font-bold"
            onClick={() => setOpenForm((value) => !value)}
            aria-expanded={openForm}
          >
            <span>{ctaLabel}</span>
            <ArrowRight size={15} aria-hidden="true" />
          </button>

          <a
            href={pricingTarget}
            className="button button-secondary !w-full !py-2.5 !text-[12.5px] font-bold flex items-center justify-center gap-1.5"
          >
            <CreditCard size={14} className="text-[var(--coral-dark)]" />
            <span>View Prices &amp; Dates</span>
          </a>

          <div className="booking-actions-secondary">
            <Link
              href="#accommodation"
              className="button button-secondary !w-full !py-2 !px-2 !text-[12px] font-semibold text-center truncate"
            >
              Accommodation
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button booking-whatsapp !w-full !py-2 !px-2 !text-[12px] font-bold flex items-center justify-center gap-1 truncate"
              aria-label="WhatsApp inquiry"
            >
              <SiWhatsapp size={13} className="shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Inline booking form */}
        {openForm && (
          <div className="booking-inline-form">
            <BookingForm
              retreatName={retreat.name}
              compact
              paymentOptions={p.paymentOptions}
              pricing={p}
              programOptions={programOptions}
              submitLabel={ctaLabel}
            />
          </div>
        )}

        {/* Trust badges */}
        <ul className="booking-trust">
          {page.trustBadges.map((badge) => (
            <li key={badge}>
              <Check size={14} aria-hidden="true" />
              {badge}
            </li>
          ))}
        </ul>
      </div>

      {/* Quick links into the page */}
      <nav
        className="booking-mininav"
        aria-label={`${entityLabel} page sections`}
      >
        <a href="#overview">Overview</a>
        <a href="#accommodation">Accommodation</a>
        <a href="#meals">Meals</a>
        <a href="#included">Included</a>
        <a href={pricingTarget}>Prices &amp; Dates</a>
        <a href="#faq">FAQ</a>
      </nav>
    </aside>
  );
}
