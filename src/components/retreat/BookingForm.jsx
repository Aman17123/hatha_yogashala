"use client";

import EnquiryForm from "@/components/EnquiryForm";

export default function BookingForm({
  retreatName,
  compact = false,
  paymentOptions = [],
  pricing,
  showPayment = false,
  programOptions,
  submitLabel,
  batch,
}) {
  return (
    <div className="booking-form-wrapper">
      <EnquiryForm
        compact={compact}
        retreatName={retreatName}
        programOptions={programOptions}
        submitLabel={submitLabel || (compact ? "Reserve your spot" : "Submit reservation")}
        batch={batch}
        conversionForm="retreat-booking"
      />
    </div>
  );
}
