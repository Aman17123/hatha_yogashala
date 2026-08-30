"use client";

import { useState } from "react";
import Image from "next/image";
import { LoaderCircle, Send } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { courses, retreats } from "@/data/coursesData";

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

export default function EnquiryForm({
  compact = false,
  retreatName,
  course: propCourse,
  initialCourse,
  programOptions,
  submitLabel,
  batch: propBatch = "",
  roomOptions,
  conversionForm,
}) {
  const defaultSelectedCourse =
    retreatName ||
    propCourse ||
    initialCourse ||
    programOptions?.[0]?.value ||
    "";

  const [status, setStatus] = useState(initialStatus);
  const [phone, setPhone] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(defaultSelectedCourse);

  async function submit(event) {
    event.preventDefault();
    if (status.state === "loading") return;

    setStatus({ state: "loading", message: "Sending your enquiry…", errors: [] });

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    payload.consent = payload.consent === "on";
    payload.phone = phone;
    if (!payload.course && selectedCourse) {
      payload.course = selectedCourse;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || result.success === false) {
        setStatus({
          state: "error",
          message: result.error || result.message || "Your enquiry could not be sent. Please check the fields and try again.",
          errors: result.errors ? Object.values(result.errors) : [],
        });
        return;
      }

      form.reset();
      setPhone("");
      setStatus({
        state: "success",
        message: result.message || "Namaste! Your enquiry was delivered successfully. The school will respond within 24 hours.",
        errors: [],
      });
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus({
        state: "error",
        message: "The form could not reach the server. Please check your connection or contact us via WhatsApp.",
        errors: [],
      });
    }
  }

  const formIdentifier =
    conversionForm || (compact ? "compact-enquiry" : "course-application");

  const buttonText =
    submitLabel || (compact ? "Send enquiry" : "Submit application");

  return (
    <form
      className="enquiry-form"
      onSubmit={submit}
      noValidate={false}
      data-conversion-form={formIdentifier}
    >
      {/* Official School Logo & Verification Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 mb-5 rounded-2xl bg-[var(--surface)]/70 border border-[var(--border)]">
        <div className="relative w-36 sm:w-44 h-10 sm:h-12 shrink-0">
          <Image
            src="/images/The-Hatha-Yogashala-logo.png"
            alt="The Hatha Yogashala Official Logo"
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="min-w-0 sm:text-right">
          <span className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[var(--coral-dark)]">
            Official Ashram Registration Desk
          </span>
          <strong className="block text-xs sm:text-sm font-bold text-[var(--brown)] truncate">
            {retreatName || propCourse || "The Hatha Yogashala · Querim, North Goa"}
          </strong>
        </div>
      </div>

      <div className="form-grid">
        {/* === Section 1: Contact & Personal Details === */}
        <div className="col-span-full border-b border-[var(--border)]/60 pb-2 mb-1">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
            1. Personal & Contact Information
          </span>
        </div>

        <Field label="Full name" name="name" required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            maxLength="80"
            required
            placeholder="e.g. Maya Sharma"
          />
        </Field>

        <Field label="Email address" name="email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength="120"
            placeholder="maya@example.com"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            title="Enter a valid email address like name@example.com"
            required
          />
        </Field>

        <Field label="WhatsApp / Phone" name="phone" hint="With country code" required>
          <PhoneInput
            id="phone"
            name="phone"
            international
            defaultCountry="IN"
            autoComplete="tel"
            inputMode="tel"
            maxLength="16"
            value={phone}
            onChange={setPhone}
          />
        </Field>

        <Field label="Country of residence" name="country" required={!compact}>
          <input
            id="country"
            name="country"
            autoComplete="country-name"
            maxLength="80"
            required={!compact}
            placeholder="e.g. Germany, UK, USA, India"
          />
        </Field>

        {!compact && (
          <>
            <Field label="Gender" name="gender" hint="For room & dorm allotment">
              <select id="gender" name="gender" defaultValue="Female">
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </Field>

            <Field label="Age" name="age" hint="Optional">
              <input
                id="age"
                name="age"
                type="number"
                min="16"
                max="90"
                placeholder="e.g. 28"
              />
            </Field>

            {/* === Section 2: Program & Accommodation === */}
            <div className="col-span-full border-b border-[var(--border)]/60 pb-2 mb-1 mt-4">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--coral-dark)]">
                2. Program & Stay Selection
              </span>
            </div>
          </>
        )}

        <Field label={compact ? "Inquiry topic or program" : "Program / Course"} name="course" required>
          <select
            id="course"
            name="course"
            required
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="" disabled>
              Select a program
            </option>
            {Array.isArray(programOptions) && programOptions.length > 0 ? (
              programOptions.map((opt) => (
                <option value={opt.label || opt.value} key={opt.value}>
                  {opt.label || opt.value}
                </option>
              ))
            ) : (
              <>
                <optgroup label="Yoga Teacher Training Courses (TTC)">
                  {courses.map((c) => (
                    <option value={c.name} key={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Yoga Retreats in Goa">
                  {retreats.map((r) => (
                    <option value={r.name} key={r.slug}>
                      {r.name}
                    </option>
                  ))}
                </optgroup>
                <option value="General admission inquiry">General admission inquiry</option>
              </>
            )}
          </select>
        </Field>

        {!compact && (
          <>
            <Field label="Preferred batch / dates" name="batch">
              <input
                id="batch"
                name="batch"
                defaultValue={propBatch}
                placeholder="e.g. 1st of upcoming month / October 2026"
                maxLength="80"
              />
            </Field>

            <Field label="Room category preference" name="room">
              <select id="room" name="room" defaultValue="Private AC Wooden Cottage">
                {Array.isArray(roomOptions) && roomOptions.length > 0 ? (
                  roomOptions.map((opt) => {
                    const label = typeof opt === "string" ? opt : opt.facility || opt.type || opt.name;
                    return <option key={label} value={label}>{label}</option>;
                  })
                ) : (
                  <>
                    <option value="Private AC Wooden Cottage">Private AC Wooden Cottage</option>
                    <option value="Twin Sharing AC Room">Twin Sharing AC Room (2 people)</option>
                    <option value="Deluxe AC Dormitory">Deluxe AC Dormitory (Budget-friendly)</option>
                    <option value="Undecided - Please advise">Undecided - Please advise</option>
                  </>
                )}
              </select>
            </Field>

            <Field label="Dietary preference" name="diet">
              <select id="diet" name="diet" defaultValue="Sattvic Vegetarian (Standard)">
                <option value="Sattvic Vegetarian (Standard)">Sattvic Vegetarian (Standard buffet)</option>
                <option value="100% Pure Vegan">100% Pure Vegan</option>
                <option value="Gluten-Free Vegetarian">Gluten-Free Vegetarian</option>
                <option value="Dairy-Free">Dairy-Free</option>
                <option value="No Special Restrictions">No Special Restrictions</option>
              </select>
            </Field>

            {/* === Section 3: Yogic Background & Health === */}
            <div className="col-span-full border-b border-[var(--border)]/60 pb-2 mb-1 mt-4">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--coral-dark)]">
                3. Yogic Background & Health History
              </span>
            </div>

            <Field label="Yoga practice background" name="experience">
              <select id="experience" name="experience" defaultValue="Regular Practitioner (1–3 years)">
                <option value="Complete Beginner (Little or no practice)">Complete Beginner (Little or no practice)</option>
                <option value="Practicing 6 months to 1 year">Practicing 6 months to 1 year</option>
                <option value="Regular Practitioner (1–3 years)">Regular Practitioner (1–3 years)</option>
                <option value="Intermediate / Advanced (3+ years)">Intermediate / Advanced (3+ years)</option>
                <option value="Certified Yoga Teacher looking to upskill">Certified Yoga Teacher looking to upskill</option>
              </select>
            </Field>

            <Field label="Airport taxi coordination" name="pickup">
              <select id="pickup" name="pickup" defaultValue="No, arranging travel independently">
                <option value="No, arranging travel independently">No, arranging travel independently</option>
                <option value="Yes — Pickup from MOPA Airport (GOX) ~30 min">Yes — Pickup from MOPA Airport (GOX) ~30 min</option>
                <option value="Yes — Pickup from Dabolim Airport (GOI) ~60 min">Yes — Pickup from Dabolim Airport (GOI) ~60 min</option>
                <option value="Yes — Pickup from Pernem / Thivim Train Station">Yes — Pickup from Pernem / Thivim Train Station</option>
              </select>
            </Field>

            <div className="col-span-full">
              <Field
                label="Health considerations, injuries, or surgeries"
                name="health"
                hint="Helps our teachers provide safe alignment modifications"
              >
                <textarea
                  id="health"
                  name="health"
                  rows="2"
                  maxLength="600"
                  placeholder="e.g. Past lower back stiffness, knee injury, pregnancy, or 'None'"
                />
              </Field>
            </div>

            {/* === Section 4: Questions & Special Notes === */}
            <div className="col-span-full border-b border-[var(--border)]/60 pb-2 mb-1 mt-4">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--coral-dark)]">
                4. Questions & Special Requests
              </span>
            </div>
          </>
        )}

        <div className="col-span-full">
          <Field label={compact ? "Your message or question" : "Additional message / questions"} name="message" required={compact}>
            <textarea
              id="message"
              name="message"
              rows={compact ? 4 : 3}
              maxLength="1500"
              required={compact}
              placeholder={
                compact
                  ? "Please share what you would like to ask our Goa team..."
                  : "Any specific goals, arrival questions, or notes for the faculty..."
              }
            />
          </Field>
        </div>
      </div>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex="-1" autoComplete="off" />
      </label>

      <label className="consent-field">
        <input type="checkbox" name="consent" required />
        <span>
          I agree that the school may use these details to respond to my enquiry.
        </span>
      </label>

      <button
        className="button button-primary submit-button"
        type="submit"
        disabled={status.state === "loading"}
        data-conversion-action="submit-enquiry"
      >
        {status.state === "loading" ? (
          <LoaderCircle className="spin" aria-hidden="true" size={18} />
        ) : (
          <Send aria-hidden="true" size={18} />
        )}
        {status.state === "loading" ? "Sending…" : buttonText}
      </button>

      <div
        className="form-status"
        data-state={status.state}
        aria-live="polite"
        role={status.state === "error" ? "alert" : "status"}
      >
        {status.message && <p>{status.message}</p>}
        {status.errors.length > 0 && (
          <ul>
            {status.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}
