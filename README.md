# The Hatha Yogashala

Official website for **The Hatha Yogashala** — a Yoga Alliance-registered yoga school and ashram in Querim, North Goa, offering residential Hatha yoga teacher training (100 / 200 / 300-hour), restorative yoga retreats (3–7 days), and online pranayama & breathwork courses.

🔗 **Live site:** [hatha-yogashala.vercel.app](https://hatha-yogashala.vercel.app/)

---

## ✨ Overview

The site is a marketing and enquiry platform for the school, covering:

- **Yoga Teacher Training Courses** — 100-Hr, 200-Hr, 22-Day Flexible 200-Hr, 200-Hr Ashtanga Vinyasa, 300-Hr, and Aerial Yoga TTC
- **Retreats** — 3, 5, and 7-Day yoga retreats, Awaken & Align, Aerial Yoga Retreat, Ayurvedic Massage Therapy, Yoga Festivals
- **Yoga Holidays** — 3, 5, and 7-Day holiday packages
- **Online Pranayama & Breathwork** — Pre-Pranayama Foundation, Beginner/Intermediate/Advanced Pranayama, Stress Relief, Daily Subscription classes
- **About** — School story, founder, teachers, Yoga Alliance certification details, accommodation & food, payment policy
- **Extras** — Destination Goa travel guide, photo gallery, blog/journal, contact & travel info
- Course pages with pricing, WhatsApp enquiry links, and a **Book Now / Apply** flow
- Contact form with automated **owner notification + user confirmation emails**
- SEO-optimized slugs, meta tags (OG/Twitter), heading hierarchy, and JSON-LD schema

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Hosting/Deployment:** [Vercel](https://vercel.com/)
- **Email:** Nodemailer + Gmail SMTP (contact form submissions)
- **Images:** Next.js Image Optimization, WebP format
- **Styling:** *(update with actual styling solution — e.g. Tailwind CSS / CSS Modules)*

## 📂 Project Structure

```
.
├── app/ or pages/          # Route-based pages (courses, retreats, holidays, blog, etc.)
├── components/             # Reusable UI components
├── public/
│   └── images/              # Site imagery (organized by section, all served as .webp)
├── styles/                  # Global and component styles
├── lib/ or utils/           # Helpers (e.g. mail sender, SEO utilities)
└── README.md
```

> Update this tree to match the actual repo layout.

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm / yarn / pnpm

### Installation

```bash
git clone <repository-url>
cd hatha-yogashala
npm install
```

### Environment Variables

Create a `.env.local` file in the project root for the contact form's email flow:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
CONTACT_RECEIVER_EMAIL=info@thehathayogashala.com
```

> Use a Gmail **App Password** (not your regular password) since SMTP requires 2FA-enabled app passwords.

### Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## 📧 Contact Form Flow

Submitting the contact form triggers two emails via Nodemailer + Gmail SMTP:

1. **Owner notification email** — sent to the school's inbox with the enquiry details.
2. **Thank-you confirmation email** — sent to the user confirming receipt of their enquiry.

## 🖼 Image & SEO Guidelines

- All images are converted to and served as genuine **WebP** format (not just renamed).
- Filenames follow a descriptive, SEO-friendly slug convention (e.g. `hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp`).
- Pages include meta description, canonical URL, Open Graph, and Twitter Card tags.
- Structured data (JSON-LD schema) is included for search engine rich results.

## 🌐 Deployment

The project auto-deploys to **Vercel** on push to the main branch.

Live URL: [https://hatha-yogashala.vercel.app](https://hatha-yogashala.vercel.app/)

## 📄 License

*(Add license information here, e.g. proprietary / all rights reserved to The Hatha Yogashala.)*

## 🙋 Contact

- **Website:** [thehathayogashala.com](https://hatha-yogashala.vercel.app/)
- **Email:** info@thehathayogashala.com
- **Phone/WhatsApp:** +91 98370 01148
- **Location:** House No. EHN No 1, Dhaktebag, Querim–Arambol–Agarwada Rd, Pernem, Goa 403524, India

---

*Designed & developed by [Devbhoomi Infotech](https://www.devbhoomiinfotech.com/).*
