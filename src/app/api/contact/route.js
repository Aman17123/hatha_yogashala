import nodemailer from "nodemailer";
import { isAllowedOrigin, validateEnquiry } from "@/lib/enquiry";
import { site } from "@/data/siteData";

const attempts = new Map();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

function isRateLimited(key) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > MAX_ATTEMPTS;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!isAllowedOrigin(origin, host)) {
    return Response.json(
      { success: false, error: "Cross-origin submissions are not accepted." },
      { status: 403 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (isRateLimited(ip)) {
    return Response.json(
      { success: false, error: "Too many attempts. Please try again in 15 minutes." },
      { status: 429 }
    );
  }

  let input;
  try {
    input = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot check for spam bots
  if (input.website) {
    return Response.json(
      { success: true, message: "Your enquiry was delivered." },
      { status: 200 }
    );
  }

  // Validate form fields
  const validation = validateEnquiry(input);
  if (!validation.valid) {
    return Response.json(
      {
        success: false,
        error: "Please correct the required fields.",
        errors: validation.errors,
      },
      { status: 400 }
    );
  }

  const data = validation.data;

  // Environment variables
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const ownerEmail = process.env.OWNER_EMAIL || gmailUser || site.contact.email;

  if (!gmailUser || !gmailAppPassword) {
    console.error(
      "⚠️ [Nodemailer Configuration Error]: GMAIL_USER or GMAIL_APP_PASSWORD is not set in environment variables."
    );
    return Response.json(
      {
        success: false,
        error:
          "Email service is not configured yet. Please ensure GMAIL_USER and GMAIL_APP_PASSWORD are set.",
      },
      { status: 500 }
    );
  }

  // Create Nodemailer Transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const submissionDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  // Prepare table rows for owner notification
  const ownerDetails = [
    { label: "Full Name", value: data.name },
    { label: "Email Address", value: data.email },
    { label: "WhatsApp / Phone", value: data.phone },
    { label: "Country of Residence", value: data.country },
    { label: "Program / Inquiry Topic", value: data.course },
    { label: "Preferred Batch / Dates", value: data.batch },
    { label: "Room Category", value: data.room },
    { label: "Dietary Preference", value: data.diet },
    { label: "Gender", value: data.gender },
    { label: "Age", value: data.age },
    { label: "Yoga Practice Background", value: data.experience },
    { label: "Airport Taxi Coordination", value: data.pickup },
    { label: "Health / Injuries", value: data.health },
    { label: "Message / Questions", value: data.message },
  ].filter((item) => item.value && item.value.trim() !== "");

  const ownerDetailsHtml = ownerDetails
    .map(
      (item) => `
      <tr style="border-bottom: 1px solid #e4dccb;">
        <td style="padding: 10px 14px; font-weight: 600; color: #24402f; width: 35%; vertical-align: top; background-color: #faf7f0;">
          ${escapeHtml(item.label)}
        </td>
        <td style="padding: 10px 14px; color: #202019; vertical-align: top; background-color: #ffffff;">
          ${escapeHtml(item.value).replace(/\n/g, "<br/>")}
        </td>
      </tr>
    `
    )
    .join("");

  const ownerDetailsText = ownerDetails
    .map((item) => `${item.label}: ${item.value}`)
    .join("\n");

  // 1. Email to Ashram Owner / Admissions Team
  const ownerMailOptions = {
    from: `"The Hatha YogaShala Website" <${gmailUser}>`,
    to: ownerEmail,
    replyTo: data.email,
    subject: `🧘 New Enquiry: ${data.name} — ${data.course}`,
    text: `New Enquiry / Application Received:
------------------------------------------
Submitted: ${submissionDate} (IST)

${ownerDetailsText}

--
The Hatha YogaShala Website Form
Location: Querim Beach, Pernem, North Goa`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — The Hatha YogaShala</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #f7f3ea; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #202019;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e4dccb; box-shadow: 0 4px 20px rgba(36, 64, 47, 0.08);">
    <!-- Header -->
    <tr>
      <td style="background-color: #24402f; padding: 24px 28px; text-align: left; border-bottom: 3px solid #c9a961;">
        <h1 style="margin: 0; font-size: 22px; color: #ffffff; font-weight: 700; letter-spacing: 0.5px;">The Hatha YogaShala</h1>
        <p style="margin: 4px 0 0; font-size: 13px; color: #e5f2ef; letter-spacing: 0.3px;">New Website Enquiry &amp; Registration Lead</p>
      </td>
    </tr>
    <!-- Content -->
    <tr>
      <td style="padding: 28px;">
        <div style="margin-bottom: 20px; padding: 12px 16px; background-color: #e5f2ef; border-left: 4px solid #2f4f3e; border-radius: 4px;">
          <p style="margin: 0; font-size: 14px; color: #24402f; font-weight: 600;">
            Received from: <strong>${escapeHtml(data.name)}</strong> (<a href="mailto:${escapeHtml(data.email)}" style="color: #2f4f3e; text-decoration: underline;">${escapeHtml(data.email)}</a>)
          </p>
          <p style="margin: 4px 0 0; font-size: 12px; color: #55564c;">
            Submission Time: ${submissionDate} (IST)
          </p>
        </div>

        <h2 style="font-size: 16px; color: #24402f; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.8px;">Enquiry Details</h2>
        
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e4dccb; border-radius: 8px; overflow: hidden; font-size: 14px; margin-bottom: 24px;">
          ${ownerDetailsHtml}
        </table>

        <div style="text-align: center; margin-top: 24px;">
          <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20The%20Hatha%20YogaShala%20Enquiry%20-%20${encodeURIComponent(data.course)}" style="display: inline-block; padding: 12px 24px; background-color: #2f4f3e; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
            Reply to ${escapeHtml(data.name)}
          </a>
        </div>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="background-color: #faf7f0; padding: 16px 28px; text-align: center; border-top: 1px solid #e4dccb; font-size: 12px; color: #55564c;">
        The Hatha YogaShala · House No. EHN No 1, Dhaktebag, Querim, Pernem, Goa 403524, India
      </td>
    </tr>
  </table>
</body>
</html>
`,
  };

  // 2. Email to User (Warm Confirmation Styled to Match Site's Earthy/Yoga Theme)
  const userMailOptions = {
    from: `"The Hatha YogaShala" <${gmailUser}>`,
    to: data.email,
    replyTo: ownerEmail,
    subject: `Namaste ${data.name} — We have received your message | The Hatha YogaShala`,
    text: `Namaste ${data.name},

Thank you for contacting The Hatha YogaShala in North Goa, India.

We have received your enquiry regarding: ${data.course}

Our admissions and faculty team will review your details and respond within 24 hours with complete program information, dates, room availability, and fee details.

YOUR SUBMITTED DETAILS:
------------------------------------------
Name: ${data.name}
Phone/WhatsApp: ${data.phone}
Program/Topic: ${data.course}
${data.batch ? `Preferred Batch: ${data.batch}\n` : ""}${data.country ? `Country: ${data.country}\n` : ""}${data.message ? `Message: ${data.message}\n` : ""}

If you have urgent travel questions or would like immediate assistance, feel free to contact us:
• WhatsApp: ${site.contact.whatsapp}
• Email: ${site.contact.email}
• Address: ${site.contact.address}

With warm regards & blessings,
The Hatha YogaShala Team
Querim Beach, Pernem, North Goa, India
https://thehathayogashala.com`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Namaste from The Hatha YogaShala</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #f7f3ea; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #202019; line-height: 1.6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e4dccb; box-shadow: 0 6px 24px rgba(36, 64, 47, 0.08);">
    
    <!-- Top Brand Banner -->
    <tr>
      <td style="background-color: #24402f; padding: 32px 28px; text-align: center; border-bottom: 4px solid #c9a961;">
        <span style="display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #c9a961; margin-bottom: 6px;">
          Yoga Alliance USA Registered School
        </span>
        <h1 style="margin: 0; font-size: 26px; color: #ffffff; font-weight: 700; letter-spacing: 0.5px;">
          The Hatha YogaShala
        </h1>
        <p style="margin: 6px 0 0; font-size: 13px; color: #e5f2ef; font-style: italic;">
          Rooted traditional practice by the peaceful coast of Querim, North Goa
        </p>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 32px 28px;">
        <h2 style="font-size: 20px; color: #24402f; margin: 0 0 16px; font-weight: 700;">
          Namaste ${escapeHtml(data.name)},
        </h2>

        <p style="font-size: 15px; color: #202019; margin: 0 0 16px;">
          Thank you for reaching out to <strong>The Hatha YogaShala</strong>. We are delighted to receive your message regarding <strong>${escapeHtml(data.course)}</strong>.
        </p>

        <p style="font-size: 15px; color: #202019; margin: 0 0 20px;">
          Our admissions team and teachers will carefully review your details and respond to you within <strong style="color: #24402f;">24 hours</strong> with complete schedule, syllabus, accommodation availability, and fee details.
        </p>

        <!-- Summary Card -->
        <div style="background-color: #faf7f0; border: 1px solid #e4dccb; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 12px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #2f4f3e; font-weight: 700;">
            Summary of your enquiry:
          </h3>
          <ul style="margin: 0; padding-left: 18px; font-size: 14px; color: #55564c; line-height: 1.8;">
            <li><strong>Program / Topic:</strong> ${escapeHtml(data.course)}</li>
            ${data.batch ? `<li><strong>Preferred Dates / Batch:</strong> ${escapeHtml(data.batch)}</li>` : ""}
            ${data.room ? `<li><strong>Room Preference:</strong> ${escapeHtml(data.room)}</li>` : ""}
            ${data.phone ? `<li><strong>Contact Number:</strong> ${escapeHtml(data.phone)}</li>` : ""}
            ${data.message ? `<li><strong>Your Message:</strong> <em>"${escapeHtml(data.message)}"</em></li>` : ""}
          </ul>
        </div>

        <!-- Direct WhatsApp CTA -->
        <div style="background-color: #e5f2ef; border-radius: 10px; padding: 18px 20px; text-align: center; margin-bottom: 24px;">
          <p style="margin: 0 0 10px; font-size: 14px; color: #24402f; font-weight: 600;">
            Have an urgent question or need immediate travel assistance?
          </p>
          <a href="https://wa.me/${String(site.contact.whatsapp || "").replace(/\\D/g, "")}?text=${encodeURIComponent("Hello The Hatha Yogashala, I submitted an enquiry on your website regarding " + data.course)}" style="display: inline-block; padding: 10px 22px; background-color: #25D366; color: #ffffff; text-decoration: none; border-radius: 20px; font-weight: 700; font-size: 13px; letter-spacing: 0.3px;">
            💬 Chat on WhatsApp (${site.contact.whatsapp})
          </a>
        </div>

        <p style="font-size: 14px; color: #55564c; margin: 0; line-height: 1.6;">
          We look forward to guiding you on your yogic journey in North Goa.
        </p>

        <p style="font-size: 14px; color: #24402f; font-weight: 600; margin: 16px 0 0;">
          With warmth and peace,<br />
          <strong>The Faculty &amp; Admissions Team</strong><br />
          <span style="font-size: 13px; color: #55564c; font-weight: normal;">The Hatha YogaShala, Goa</span>
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #24402f; padding: 20px 28px; text-align: center; font-size: 12px; color: #e5f2ef; border-top: 1px solid #c9a961;">
        <p style="margin: 0 0 6px; font-weight: 600; color: #ffffff;">The Hatha YogaShala</p>
        <p style="margin: 0 0 6px; color: #d1dfd8;">Querim–Arambol–Agarwada Rd, Dhaktebag, Pernem, Goa 403524, India</p>
        <p style="margin: 0; color: #c9a961;">
          <a href="${site.url}" style="color: #c9a961; text-decoration: underline;">Visit our Website</a> · 
          <a href="mailto:${site.contact.email}" style="color: #c9a961; text-decoration: underline;">${site.contact.email}</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`,
  };

  try {
    // Send email to owner
    await transporter.sendMail(ownerMailOptions);

    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);

    console.log(`✉️ [Contact Form Success]: Delivered emails for ${data.name} (${data.email})`);

    return Response.json(
      {
        success: true,
        message: "Your enquiry was delivered. The school will respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ [Nodemailer Delivery Error]:", error);
    return Response.json(
      {
        success: false,
        error:
          "The email delivery service encountered an issue. Please try again or reach us directly via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
