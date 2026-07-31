"use client";

import { useMemo, useState } from "react";
import {
  Banknote,
  CheckCircle2,
  Landmark,
  LoaderCircle,
  Lock,
  Send,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const paymentIcons = {
  PayPal: Wallet,
  Wise: Banknote,
  UPI: Landmark,
  "Bank Transfer": ShieldCheck,
};

const initialStatus = { state: "idle", message: "", errors: [] };

function Field({ label, name, children, hint, required = false }) {
  return (
    <label className="form-field">
      <span>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      {children}
      {hint && <small>{hint}</small>}
    </label>
  );
}

export default function BookingForm({
  retreatName,
  compact = false,
  paymentOptions = [],
  pricing,
  showPayment = true,
}) {
  const [status, setStatus] = useState(initialStatus);
  const [accommodation, setAccommodation] = useState("Shared room");
  const [days, setDays] = useState("3");

  const message = useMemo(() => {
    return "";
  }, []);

  async function submit(event) {
    event.preventDefault();
    setStatus({ state: "loading", message: "Securing your reservation…", errors: [] });

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const payload = {
      name: data.name,
      email: data.email,
      countryCode: data.countryCode,
      phone: data.whatsapp,
      country: data.country,
      course: retreatName,
      batch: data.startDate && data.endDate ? `${data.startDate} to ${data.endDate}` : "Flexible dates",
      room: data.accommodation,
      experience: `${data.notes || ""}${data.days ? ` Retreat duration: ${data.days} day(s).` : ""}`.trim(),
      pickup: "No",
      message: `Booking request for ${retreatName}. Start: ${data.startDate || "flexible"} · End: ${data.endDate || "flexible"} · Duration: ${data.days || "flexible"} day(s) · Accommodation: ${data.accommodation}. Notes: ${data.notes || "none"}`,
      consent: data.consent === "on",
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus({
          state: "error",
          message: result.message || "Your reservation could not be sent.",
          errors: Object.values(result.errors || {}),
        });
        return;
      }

      form.reset();
      setAccommodation("Shared room");
      setDays("3");
      setStatus({
        state: "success",
        message:
          "Thank you! Your reservation request was received. Our team will confirm availability and send verified payment details shortly.",
        errors: [],
      });
    } catch {
      setStatus({
        state: "error",
        message: "The form could not reach the server. Please try again later.",
        errors: [],
      });
    }
  }

  return (
    <form
      className="enquiry-form"
      onSubmit={submit}
      noValidate={false}
      data-conversion-form="retreat-booking"
    >
      <div className="form-grid">
        <Field label="Full name" name="name" required>
          <input id={`${compact ? "c" : "f"}-name`} name="name" autoComplete="name" maxLength="80" required />
        </Field>
        <Field label="Email address" name="email" required>
          <input id={`${compact ? "c" : "f"}-email`} name="email" type="email" autoComplete="email" maxLength="120" required />
        </Field>
        <Field label="Country code" name="countryCode" required>
          <input id={`${compact ? "c" : "f"}-cc`} name="countryCode" inputMode="tel" placeholder="+91" maxLength="8" required />
        </Field>
        <Field label="WhatsApp number" name="whatsapp" required>
          <input id={`${compact ? "c" : "f"}-wa`} name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" maxLength="30" required />
        </Field>
        <Field label="Country" name="country" required>
          <input id={`${compact ? "c" : "f"}-country`} name="country" autoComplete="country-name" maxLength="80" required />
        </Field>
        <Field label="Retreat duration" name="days" required>
          <select
            id={`${compact ? "c" : "f"}-days`}
            name="days"
            required
            value={days}
            onChange={(event) => setDays(event.target.value)}
          >
            <option value="3">3-Day Yoga Retreat</option>
            <option value="5">5-Day Yoga Retreat</option>
            <option value="7">7-Day Yoga Retreat</option>
            <option value="10">10-Day Yoga Retreat</option>
          </select>
        </Field>
        <Field label="Accommodation" name="accommodation" required>
          <select
            id={`${compact ? "c" : "f"}-accom`}
            name="accommodation"
            required
            value={accommodation}
            onChange={(event) => setAccommodation(event.target.value)}
          >
            <option value="Shared room">Shared Room — €{pricing?.shared?.price ?? 199}/person</option>
            <option value="Private room">Private Room — €{pricing?.private?.price ?? 399}/person</option>
          </select>
        </Field>
        {!compact && (
          <>
            <Field label="Start date" name="startDate" required>
              <input id="f-start" name="startDate" type="date" required />
            </Field>
            <Field label="End date" name="endDate" required>
              <input id="f-end" name="endDate" type="date" required />
            </Field>
          </>
        )}
        <Field label="Additional notes" name="notes">
          <textarea
            id={`${compact ? "c" : "f"}-notes`}
            name="notes"
            rows={compact ? 3 : 4}
            maxLength="1200"
            placeholder="Dietary needs, arrival details, health considerations, or questions"
          />
        </Field>
      </div>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex="-1" autoComplete="off" />
      </label>

      <label className="consent-field">
        <input type="checkbox" name="consent" required />
        <span>I agree that the school may use these details to confirm my booking and respond to my enquiry.</span>
      </label>

      <button
        className="button button-primary submit-button"
        type="submit"
        disabled={status.state === "loading"}
        data-conversion-action="submit-booking"
      >
        {status.state === "loading" ? (
          <LoaderCircle className="spin" aria-hidden="true" size={18} />
        ) : (
          <Send aria-hidden="true" size={18} />
        )}
        {status.state === "loading"
          ? "Securing your place…"
          : compact
            ? "Book Your Retreat"
            : "Request Booking"}
      </button>

      <div
        className="form-status"
        data-state={status.state}
        aria-live="polite"
        role={status.state === "error" ? "alert" : "status"}
      >
        {status.message && <p>{status.message}</p>}
        {status.errors.length > 0 && (
          <ul>{status.errors.map((error) => <li key={error}>{error}</li>)}</ul>
        )}
      </div>

      {showPayment && paymentOptions.length > 0 && (
        <div className="booking-payments">
          <span>Secure payment options</span>
          <div>
            {paymentOptions.map((option) => {
              const Icon = paymentIcons[option] || Wallet;
              return (
                <span key={option} className="booking-payment-chip">
                  <Icon size={14} aria-hidden="true" />
                  {option}
                </span>
              );
            })}
          </div>
          <p>
            <Lock size={12} aria-hidden="true" />
            Encrypted, verified payment links issued after confirmation
          </p>
        </div>
      )}

      {compact && status.state === "success" && (
        <p className="booking-success-note">
          <CheckCircle2 size={15} aria-hidden="true" />
          Reservation request received — we will reply within 24 hours.
        </p>
      )}
    </form>
  );
}
