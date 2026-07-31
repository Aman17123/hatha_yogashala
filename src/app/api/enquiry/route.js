import { isAllowedOrigin, validateEnquiry } from "@/lib/enquiry";

const attempts = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

// ponytail: process-local limiter, replace with a shared store if multi-instance abuse becomes measurable.
function isRateLimited(key) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > MAX_ATTEMPTS;
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!isAllowedOrigin(origin, host)) {
    return Response.json({ message: "Cross-origin submissions are not accepted." }, { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (isRateLimited(ip)) {
    return Response.json({ message: "Too many attempts. Please try again later." }, { status: 429 });
  }

  let input;
  try {
    input = await request.json();
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (input.website) return Response.json({ delivered: true });

  const result = validateEnquiry(input);
  if (!result.valid) {
    return Response.json(
      { message: "Please correct the highlighted details.", errors: result.errors },
      { status: 422 },
    );
  }

  if (!process.env.ENQUIRY_WEBHOOK_URL) {
    return Response.json(
      {
        message:
          "The form is validated, but delivery is not configured yet. Add ENQUIRY_WEBHOOK_URL before launch.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(process.env.ENQUIRY_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...result.data, submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) throw new Error("Webhook rejected enquiry");
    return Response.json({ delivered: true }, { status: 201 });
  } catch {
    return Response.json(
      { message: "The delivery service is unavailable. Your details were not stored." },
      { status: 502 },
    );
  }
}
