"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Heart,
  MapPin,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import BookingForm from "./BookingForm";

export default function BookingSidebar({ page, retreat }) {
  const [openForm, setOpenForm] = useState(false);
  const p = page.pricing;
  const whatsappHref = "/contact#whatsapp";

  return (
    <aside className="retreat-sidebar" aria-label="Retreat booking summary">
      <div className="booking-card">
        {/* Price block */}
        <div className="booking-card-head">
          <div className="booking-price">
            <span className="booking-price-from">From</span>
            <span>
              <strong>${p.shared.price}</strong>
              <small>/person</small>
            </span>
          </div>
          <div className="booking-rating">
            <span aria-label={`${page.rating} out of 5`}>
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`size-3.5 ${i < Math.round(page.rating) ? "fill-[#f5a623] text-[#f5a623]" : "text-[#e8ddd6]"}`}
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
            <dd>{page.students} retreat guests</dd>
          </div>
        </dl>

        {/* Room pricing */}
        <div className="booking-rooms">
          <div>
            <span>Shared Room</span>
            <strong>${p.shared.price}</strong>
            <small>/ person</small>
          </div>
          <div className="booking-rooms-featured">
            <span>
              <Heart size={11} aria-hidden="true" /> Most booked
            </span>
            <strong>${p.private.price}</strong>
            <small>/ person</small>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="booking-actions">
          <button
            type="button"
            className="button button-primary booking-cta"
            onClick={() => setOpenForm((value) => !value)}
            aria-expanded={openForm}
          >
            Book Your Retreat
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          <div className="booking-actions-secondary">
            <Link href="#schedule" className="button button-secondary">
              View Schedule
            </Link>
            <a
              href={whatsappHref}
              className="button booking-whatsapp"
              aria-label="WhatsApp inquiry"
            >
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp
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
      <nav className="booking-mininav" aria-label="Retreat page sections">
        <a href="#overview">Overview</a>
        <a href="#schedule">Daily Schedule</a>
        <a href="#accommodation">Accommodation</a>
        <a href="#meals">Meals</a>
        <a href="#registration">Pricing & Booking</a>
        <a href="#faq">FAQ</a>
      </nav>
    </aside>
  );
}
