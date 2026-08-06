"use client";

import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { courses, retreats } from "@/data/coursesData";

const initialStatus = { state: "idle", message: "", errors: [] };

function Field({ label, name, children, hint, required = false }) {
  return (
    <label className="form-field">
      <span>{label}{required && <span aria-hidden="true"> *</span>}</span>
      {children}
      {hint && <small>{hint}</small>}
    </label>
  );
}

export default function EnquiryForm({ compact = false }) {
  const [status, setStatus] = useState(initialStatus);
  const [phone, setPhone] = useState("");

  async function submit(event) {
    event.preventDefault();
    setStatus({ state: "loading", message: "Sending your enquiry…", errors: [] });

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    payload.consent = payload.consent === "on";
    payload.phone = phone;

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
          message: result.message || "Your enquiry could not be sent.",
          errors: Object.values(result.errors || {}),
        });
        return;
      }

      form.reset();
      setStatus({
        state: "success",
        message: "Your enquiry was delivered. The school can now respond with verified details.",
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
      data-conversion-form={compact ? "contact-enquiry" : "course-application"}
    >
      <div className="form-grid">
        <Field label="Full name" name="name" required>
          <input id="name" name="name" autoComplete="name" maxLength="80" required />
        </Field>
        <Field label="Email" name="email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength="120"
            placeholder="you@example.com"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            title="Enter a valid email address like name@example.com"
            required
          />
        </Field>
        <Field label="Phone / WhatsApp" name="phone" hint="Includes country code" required>
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
        <Field label="Country" name="country" required>
          <input id="country" name="country" autoComplete="country-name" maxLength="80" required />
        </Field>
        <Field label="Course or retreat" name="course" required>
          <select id="course" name="course" required defaultValue="">
            <option value="" disabled>Select a program</option>
            {courses.map((course) => (
              <option value={course.name} key={course.slug}>{course.name}</option>
            ))}
            {retreats.map((retreat) => (
              <option value={retreat.name} key={retreat.slug}>{retreat.name}</option>
            ))}
            <option value="General enquiry">General enquiry</option>
          </select>
        </Field>
        {!compact && (
          <>
            <Field label="Preferred batch" name="batch">
              <input id="batch" name="batch" placeholder="Month or dates" maxLength="80" />
            </Field>
            <Field label="Room preference" name="room">
              <select id="room" name="room" defaultValue="Not decided">
                <option>Not decided</option>
                <option>Shared room</option>
                <option>Private room</option>
              </select>
            </Field>
            <Field label="Yoga experience" name="experience">
              <textarea id="experience" name="experience" rows="3" maxLength="600" />
            </Field>
            <Field label="Pickup requirement" name="pickup">
              <select id="pickup" name="pickup" defaultValue="No">
                <option>No</option>
                <option>Yes — please share verified options</option>
              </select>
            </Field>
          </>
        )}
        <Field label="Message" name="message">
          <textarea
            id="message"
            name="message"
            rows={compact ? 4 : 5}
            maxLength="1500"
            placeholder="Questions, accessibility needs, or health information relevant to your enquiry"
          />
        </Field>
      </div>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex="-1" autoComplete="off" />
      </label>
      <label className="consent-field">
        <input type="checkbox" name="consent" required />
        <span>I agree that the school may use these details to respond to my enquiry.</span>
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
        {status.state === "loading" ? "Sending…" : compact ? "Send enquiry" : "Submit application"}
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
    </form>
  );
}
