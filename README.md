# The Hatha Yogashala

Premium, responsive yoga school website for Goa, built with Next.js 16 App Router, React 19, Tailwind CSS 4, and JavaScript/JSX.

## Local setup

```bash
npm install
npm run dev
```

Validation:

```bash
npm run lint
npm run check:enquiry
npm run build
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`: the final canonical website origin.
- `ENQUIRY_WEBHOOK_URL`: a secure endpoint that accepts the validated enquiry JSON.

The form intentionally returns `503` until `ENQUIRY_WEBHOOK_URL` is configured. It never shows a fake success message and does not store failed submissions.
Without `NEXT_PUBLIC_SITE_URL`, metadata uses the reserved `.example` fallback as the canonical base; pages remain indexable and robots allow crawling. Set the variable before going live so the real domain is used.

## Content replacement

Replace the bracketed values in `src/data/siteData.js` and `src/data/coursesData.js`. They centralize contact details, fees, dates, certification, qualifications, reviews, policies, facilities, travel, and availability.

The files in `public/images/` are generated editorial placeholders. Replace them with original school photography while keeping the same filenames, or update the shared paths in `src/data/`.
