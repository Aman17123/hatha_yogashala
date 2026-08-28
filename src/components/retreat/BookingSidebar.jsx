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

  const pricingTarget =
    entityLabel === "TTC Course" ? "#fees" : "#registration";

  return (
    <aside
      className="retreat-sidebar scroll-mt-[130px]"
      id="book"
      aria-label={`${entityLabel} booking summary`}
    >
      <div className="booking-card mt-10">
        {/* Price block */}
        <div className="booking-card-head !p-3.9 sm:!p-4">
          {/* Ashram Branding */}
          <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-[var(--border)]/70">
            <div className="relative w-28 h-6.5 shrink-0">
              <Image
                src="/images/The-Hatha-Yogashala-logo.png"
                alt="The Hatha Yogashala Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-[var(--coral-dark)] text-right">
              Direct Reservation
            </span>
          </div>

          <div className="booking-price">
            <span className="booking-price-from !text-[11px] font-bold">
              From
            </span>
            <span>
              <strong className="!text-[25px] font-philosopher">
                {formatPrice(p.shared.price) ?? "On enquiry"}
              </strong>
              <small className="!text-[11.5px]"> /person</small>
            </span>
          </div>
          <div className="booking-rating !mt-1">
            <span
              aria-label={`${page.rating} out of 5`}
              className="inline-flex items-center gap-0.5"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`size-3 ${i < Math.round(page.rating) ? "fill-[var(--gold)] text-[var(--gold)]" : "text-[var(--border)]"}`}
                  aria-hidden="true"
                />
              ))}
            </span>
            <strong className="!text-[11.5px]">{page.rating}/5</strong>
            <small className="!text-[11px]">({page.ratingCount} reviews)</small>
          </div>
        </div>

        {/* Key details */}
        <dl className="booking-facts !px-3.5 sm:!px-4">
          <div className="!py-1.5">
            <dt className="!text-[12px]">
              <Clock3 size={13.5} aria-hidden="true" /> Duration
            </dt>
            <dd className="!text-[12px]">{page.duration}</dd>
          </div>
          <div className="!py-1.5">
            <dt className="!text-[12px]">
              <CalendarDays size={13.5} aria-hidden="true" /> Dates
            </dt>
            <dd className="!text-[12px]">{retreat.date || "Monthly start"}</dd>
          </div>
          <div className="!py-1.5">
            <dt className="!text-[12px]">
              <MapPin size={13.5} aria-hidden="true" /> Location
            </dt>
            <dd className="!text-[12px]">Querim, Goa</dd>
          </div>
          <div className="!py-1.5">
            <dt className="!text-[12px]">
              <Users size={13.5} aria-hidden="true" /> Batch Size
            </dt>
            <dd className="!text-[12px]">{page.students} max</dd>
          </div>
        </dl>

        {/* CTA buttons */}
        <div className="booking-actions !p-3 sm:!p-3.5 !gap-2">
          <button
            type="button"
            className="button button-primary !w-full !py-2 !text-[12.5px] font-bold"
            onClick={() => setOpenForm((value) => !value)}
            aria-expanded={openForm}
          >
            <span>{ctaLabel}</span>
            <ArrowRight size={14} aria-hidden="true" />
          </button>

          <div className="grid grid-cols-2 gap-2 w-full">
            <a
              href={pricingTarget}
              className="button button-secondary !w-full !py-1.5 !px-2 !text-[11.5px] font-semibold text-center truncate"
            >
              Prices &amp; Dates
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button booking-whatsapp !w-full !py-1.5 !px-2 !text-[11.5px] font-bold flex items-center justify-center gap-1 truncate"
              aria-label="WhatsApp inquiry"
            >
              <SiWhatsapp size={12} className="shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Inline booking form */}
        {openForm && (
          <div className="booking-inline-form !p-3.5">
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
        <ul className="booking-trust !p-2.5 sm:!p-3 !gap-1">
          {page.trustBadges.slice(0, 3).map((badge) => (
            <li key={badge} className="!text-[11px] !gap-1.5">
              <Check
                size={12}
                aria-hidden="true"
                className="shrink-0 text-emerald-600"
              />
              <span>{badge}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
