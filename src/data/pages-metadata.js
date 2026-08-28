/**
 * data/pages-metadata.js — Single source of truth for static-page metadata
 * The Hatha Yogashala
 *
 * Every static route in src/app/ has an entry here.
 * Dynamic routes ([slug]) use generateMetadata() and fetch their own data —
 * they do NOT need an entry here.
 *
 * Shape of each entry:
 *   {
 *     title:       string   — page <title> (without site name suffix)
 *     description: string   — meta description (≤ 160 chars recommended)
 *     path:        string   — canonical path, e.g. "/about"
 *     image:       string?  — OG image path (falls back to SITE.defaultImage)
 *     imageAlt:    string?  — OG image alt text
 *     keywords:    string|string[]?  — optional keyword list
 *   }
 *
 * Usage (static page):
 *   import { buildMetadata } from "@/lib/seo";
 *   import { pagesMetadata } from "@/data/pages-metadata";
 *   export const metadata = buildMetadata(pagesMetadata.home);
 */

export const pagesMetadata = {
  // ─── Root ─────────────────────────────────────────────────────────────────
  home: {
    title:
      "Yoga School in Goa | Teacher Training & Retreats — The Hatha Yogashala",
    description:
      "Yoga Alliance-registered yoga school in Goa offering 100–300-hour teacher training and 3–7 day wellness retreats near Querim beach, North Goa. Book now.",
    path: "/",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
    imageAlt:
      "Yoga students practicing teacher training alignment at The Hatha Yogashala in Goa",
  },

  // ─── About cluster ────────────────────────────────────────────────────────
  about: {
    title: "About The Hatha Yogashala | Yoga School in Goa",
    description:
      "Learn about The Hatha Yogashala, a Yoga Alliance-registered residential yoga school in Querim, North Goa, offering teacher training and retreats.",
    path: "/about",
    imageAlt:
      "The Hatha Yogashala campus and open-air shala in Goa",
    keywords:
      "yoga ashram Goa, best yoga school in Goa, Hatha Yoga teacher training Goa, yoga retreat North Goa, Arambol yoga school, Querim yoga ashram, The Hatha Yogashala",
  },

  founder: {
    title: "Our Founder | Yogi Kalpendra Chauhan – The Hatha Yogashala",
    description:
      "Meet Yogi Kalpendra Chauhan, founder of The Hatha Yogashala, with 15+ years teaching Hatha yoga, philosophy, pranayama and meditation in Goa.",
    path: "/founder",
    imageAlt:
      "Yogi Kalpendra Chauhan, founder of The Hatha Yogashala",
  },

  teachers: {
    title: "Our Teachers | Yoga Faculty in Goa — The Hatha Yogashala",
    description:
      "Meet the experienced Hatha yoga, Ashtanga Vinyasa and philosophy teachers leading yoga teacher training and retreats at The Hatha Yogashala, Goa.",
    path: "/teachers",
    imageAlt:
      "Yoga teacher training faculty at The Hatha Yogashala, Goa",
  },

  certification: {
    title: "Yoga Alliance Certification | The Hatha Yogashala, Goa",
    description:
      "The Hatha Yogashala USA certified 100, 200 and 300-hour yoga teacher training in Goa. Certificates accepted worldwide.",
    path: "/yoga-alliance-certification",
    imageAlt:
      "Yoga Alliance certificate awarded by The Hatha Yogashala",
    keywords:
      "yoga teacher training certification Goa, Yoga Alliance certificate, 200 hour YTTC certificate, Hatha Yoga TTC certification, yoga school registration Goa",
  },

  accommodation: {
    title: "Accommodation & Food in Goa | The Hatha Yogashala",
    description:
      "Clean, beach-near rooms from mixed dorms to private cottages, with three vegetarian meals a day and 24/7 student support at The Hatha Yogashala, Goa.",
    path: "/accommodation-goa",
    imageAlt:
      "Residential accommodation at The Hatha Yogashala in Querim, North Goa",
    keywords:
      "yoga school accommodation Goa, yoga retreat stay Arambol, ashram rooms North Goa, vegetarian meals yoga retreat Goa, The Hatha Yogashala rooms",
  },

  // ─── Programs ─────────────────────────────────────────────────────────────
  yogaTeacherTraining: {
    title:
      "Yoga Teacher Training Courses in Goa | The Hatha Yogashala",
    description:
      "Compare our 100, 200 and 300-hour Yoga Alliance certified teacher training courses in Goa — curriculum, accommodation, fees and completion details.",
    path: "/yoga-teacher-training-goa",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
    imageAlt:
      "Students taking part in yoga teacher training in Goa",
    keywords: [
      "yoga teacher training goa",
      "200 hour YTT Goa",
      "Yoga Alliance certified yoga school Goa",
      "Ashtanga Vinyasa teacher training",
      "aerial yoga teacher training Goa",
      "300 hour yoga TTC",
      "100 hour yoga teacher training goa",
      "yoga school goa",
      "yttc goa",
    ],
  },

  yogaRetreats: {
    title:
      "Yoga & Meditation Retreats in Goa | The Hatha Yogashala",
    description:
      "3, 5 and 7-day yoga and meditation retreats in Goa — daily Hatha practice, sound healing, ayurveda and coastal calm near Querim beach.",
    path: "/yoga-retreats-goa",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    imageAlt:
      "Yoga and meditation retreat session at The Hatha Yogashala, Goa",
    keywords: [
      "yoga retreat Goa",
      "3 day yoga retreat Goa",
      "5 day yoga retreat Goa",
      "7 day wellness retreat Goa",
      "Ayurvedic massage Goa",
      "aerial yoga retreat Goa",
      "yoga festival Goa",
    ],
  },

  yogaHolidays: {
    title: "All Yoga Holidays in Goa | The Hatha Yogashala",
    description:
      "3, 5 and 7-day yoga holidays in Goa combining daily practice with beach time, local culture and a relaxed coastal pace.",
    path: "/yoga-holidays-goa",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    imageAlt:
      "Students relaxing and restoring in the coastal setting of North Goa",
    keywords:
      "yoga holidays Goa, short yoga retreat Goa, 3 day yoga holiday Goa, 7 day yoga break, beach yoga holiday India",
  },

  onlinePranayama: {
    title:
      "Online Pranayama & Breathwork Courses | The Hatha Yogashala",
    description:
      "Learn classical Indian pranayama and breathwork online with The Hatha Yogashala's experienced teachers, from anywhere in the world.",
    path: "/online-pranayama",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp",
    imageAlt:
      "Pranayama and meditation session at The Hatha Yogashala Goa",
    keywords:
      "pranayama course, breathwork training online, learn yogic breathing, Hatha pranayama Goa, Nadi Shodhana class",
  },

  // ─── Blog ─────────────────────────────────────────────────────────────────
  blog: {
    title: "Yoga & Goa Travel Guides | The Hatha Yogashala",
    description:
      "Original, practical articles on yoga teacher training, Goa travel and building a sustainable home practice, from The Hatha Yogashala editorial team.",
    path: "/blog",
    imageAlt:
      "The Hatha Yogashala blog and journal articles",
    keywords:
      "yoga blog, yoga teacher training tips, yoga retreat Goa guide, Hatha yoga practice, beginner yoga Goa, yoga for beginners",
  },

  // ─── Utility pages ────────────────────────────────────────────────────────
  gallery: {
    title: "Photo Gallery | Life at The Hatha Yogashala, Goa",
    description:
      "Browse photos of daily practice, ceremonies, accommodation and coastal life at The Hatha Yogashala, a residential yoga school in Querim, North Goa.",
    path: "/gallery",
    imageAlt:
      "Morning asana and alignment practice at The Hatha Yogashala Goa",
    keywords:
      "yoga school photos Goa, yoga teacher training pictures, yoga retreat Goa images, Arambol yoga beach, North Goa ashram photos",
  },

  goaTravelGuide: {
    title:
      "Destination Goa | Travel Guide for Yoga Students",
    description:
      "Planning your trip to Goa for yoga teacher training or a retreat? A practical guide to weather, travel and life near Querim beach, North Goa.",
    path: "/goa-travel-guide",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    imageAlt:
      "Yoga students practicing on a Goa beach in North Goa",
    keywords:
      "yoga in Goa, yoga teacher training destination Goa, Querim beach yoga, Arambol yoga ashram, MOPA airport yoga school Goa",
  },

  contact: {
    title: "Contact & Travel — The Hatha Yogashala",
    description:
      "Get in touch with The Hatha Yogashala for course dates, fees, availability and travel planning. Call, WhatsApp or send an enquiry today.",
    path: "/contact",
    imageAlt:
      "The Hatha Yogashala yoga school location in Goa",
    keywords:
      "contact yoga school Goa, yoga teacher training enquiry Goa, The Hatha Yogashala Goa contact, WhatsApp yoga Goa, yoga retreat booking North Goa",
  },

  apply: {
    title: "Reserve Your Spot | The Hatha Yogashala, Goa",
    description:
      "Apply for a yoga teacher training course or retreat at The Hatha Yogashala, Goa. Batch dates, fees and room availability confirmed before payment.",
    path: "/apply",
    imageAlt:
      "Graduation celebration at The Hatha Yogashala Goa",
  },

  paymentPolicy: {
    title: "Payment & Booking Policy | The Hatha Yogashala",
    description:
      "Read The Hatha Yogashala's payment terms — dates, fees, faculty and room availability are confirmed in writing before any payment is made.",
    path: "/payment-policy",
    imageAlt:
      "The Hatha Yogashala yoga school campus in Goa",
  },

  privacyPolicy: {
    title: "Privacy Policy",
    description:
      "Read The Hatha Yogashala's privacy policy covering how we collect, use and protect your personal information.",
    path: "/privacy-policy",
    imageAlt: "The Hatha Yogashala logo",
  },

  terms: {
    title: "Terms & Conditions | The Hatha Yogashala",
    description:
      "Read the terms and conditions for booking a yoga teacher training course or retreat with The Hatha Yogashala, Goa.",
    path: "/terms",
    imageAlt: "The Hatha Yogashala logo",
  },
};
