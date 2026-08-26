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
    setStatus({ state: "loading", message: "Sending your enquiry…", errors: [] });

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    payload.consent = payload.consent === "on";
    payload.phone = phone;
    if (!payload.course && selectedCourse) {
      payload.course = selectedCourse;
    }

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
      setPhone("");
      setStatus({
        state: "success",
        message: "Your enquiry was delivered. The school will respond with verified details shortly.",
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
      <div className="form-grid">
        <Field label="Full name" name="name" required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            maxLength="80"
            required
            placeholder="Your full name"
          />
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
          <input
            id="country"
            name="country"
            autoComplete="country-name"
            maxLength="80"
            required
            placeholder="Your country of residence"
          />
        </Field>

        <Field label="Course or retreat" name="course" required>
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
                <optgroup label="Yoga Teacher Training (TTC)">
                  {courses.map((c) => (
                    <option value={c.name} key={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Yoga Retreats">
                  {retreats.map((r) => (
                    <option value={r.name} key={r.slug}>
                      {r.name}
                    </option>
                  ))}
                </optgroup>
                <option value="General enquiry">General enquiry</option>
              </>
            )}
          </select>
        </Field>

        {!compact && (
          <>
            <Field label="Preferred batch" name="batch">
              <input
                id="batch"
                name="batch"
                defaultValue={propBatch}
                placeholder="Month or dates"
                maxLength="80"
              />
            </Field>
            <Field label="Room preference" name="room">
              <select id="room" name="room" defaultValue="Not decided">
                {Array.isArray(roomOptions) && roomOptions.length > 0 ? (
                  roomOptions.map((opt) => {
                    const label = typeof opt === "string" ? opt : opt.facility || opt.type || opt.name;
                    return <option key={label}>{label}</option>;
                  })
                ) : (
                  <>
                    <option>Not decided</option>
                    <option>Shared room</option>
                    <option>Private room</option>
                  </>
                )}
              </select>
            </Field>
            <Field label="Yoga experience" name="experience">
              <textarea
                id="experience"
                name="experience"
                rows="3"
                maxLength="600"
                placeholder="Your past yoga practice or goals"
              />
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
            rows={compact ? 3 : 5}
            maxLength="1500"
            placeholder="Questions, accessibility needs, or health notes"
          />
        </Field>
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
