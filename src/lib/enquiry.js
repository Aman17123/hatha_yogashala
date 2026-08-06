const limits = {
  name: 80,
  email: 120,
  phone: 16,
  country: 80,
  course: 120,
  batch: 80,
  room: 40,
  experience: 600,
  pickup: 80,
  message: 1500,
};

function clean(value, max) {
  return String(value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export function isAllowedOrigin(origin, host) {
  if (!origin || !host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export function validateEnquiry(input = {}) {
  const data = Object.fromEntries(
    Object.entries(limits).map(([key, max]) => [key, clean(input[key], max)]),
  );
  const errors = {};

  data.phone = data.phone.replace(/[^\d+]/g, "");

  if (!data.name) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (!/^\+[0-9]{6,15}$/.test(data.phone)) errors.phone = "Enter a valid phone number with country code.";
  if (!data.country) errors.country = "Enter your country.";
  if (!data.course) errors.course = "Choose a course, retreat, or general enquiry.";
  if (input.consent !== true) errors.consent = "Consent is required before sending.";

  return { data, errors, valid: Object.keys(errors).length === 0 };
}
