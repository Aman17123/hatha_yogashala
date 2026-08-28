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
    title: "Yoga School in Goa | Teacher Training & Retreats",
    description:
      "Yoga Alliance-certified yoga school in Goa offering 100–300h teacher training & retreats near Querim beach. Book now.",
    path: "/",
    image: "/og-image.jpg",
    imageAlt:
      "Yoga students practicing teacher training alignment at The Hatha Yogashala in Goa",
  },

  // ─── About cluster ────────────────────────────────────────────────────────
  about: {
    title: "About The Hatha Yogashala | Yoga School in Goa",
    description:
      "Yoga Alliance-registered residential yoga school in Querim, North Goa offering teacher training courses and wellness retreats.",
    path: "/about",
    image: "/og-image.jpg",
    imageAlt: "The Hatha Yogashala campus and open-air shala in Goa",
    keywords:
      "yoga ashram Goa, best yoga school in Goa, Hatha Yoga teacher training Goa, yoga retreat North Goa, Arambol yoga school, Querim yoga ashram, The Hatha Yogashala",
  },

  founder: {
    title: "Our Founder | Yogi Kalpendra Chauhan",
    description:
      "Meet Yogi Kalpendra Chauhan, founder of The Hatha Yogashala with 15+ years teaching Hatha yoga, pranayama & philosophy in Goa.",
    path: "/founder",
    image: "/og-image.jpg",
    imageAlt:
      "Yogi Kalpendra Chauhan, founder of The Hatha Yogashala in Goa",
  },

  teachers: {
    title: "Our Yoga Teachers in Goa | Faculty",
    description:
      "Meet the experienced Hatha and Ashtanga Vinyasa teachers leading yoga teacher training and retreats at The Hatha Yogashala, Goa.",
    path: "/teachers",
    image: "/og-image.jpg",
    imageAlt: "Yoga teacher training faculty at The Hatha Yogashala, Goa",
  },

  certification: {
    title: "Yoga Alliance Certification in Goa",
    description:
      "Yoga Alliance USA certified 100, 200 & 300-hour yoga teacher training in Goa. Globally recognized certification.",
    path: "/yoga-alliance-certification",
    image: "/og-image.jpg",
    imageAlt: "Yoga Alliance certificate awarded by The Hatha Yogashala",
    keywords:
      "yoga teacher training certification Goa, Yoga Alliance certificate, 200 hour YTTC certificate, Hatha Yoga TTC certification, yoga school registration Goa",
  },

  accommodation: {
    title: "Accommodation & Food | The Hatha Yogashala",
    description:
      "Beach-near rooms from mixed dorms to private cottages with three sattvic vegetarian meals daily in Querim, North Goa.",
    path: "/accommodation-goa",
    image: "/og-image.jpg",
    imageAlt:
      "Residential accommodation at The Hatha Yogashala in Querim, North Goa",
    keywords:
      "yoga school accommodation Goa, yoga retreat stay Arambol, ashram rooms North Goa, vegetarian meals yoga retreat Goa, The Hatha Yogashala rooms",
  },

  // ─── Programs ─────────────────────────────────────────────────────────────
  yogaTeacherTraining: {
    title: "Yoga Teacher Training Courses in Goa",
    description:
      "100, 200 & 300-hour Yoga Alliance certified teacher training in Goa. Curriculum, accommodation, dates & fees.",
    path: "/yoga-teacher-training-goa",
    image: "/og-image.jpg",
    imageAlt: "Students taking part in yoga teacher training in Goa",
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
    title: "Yoga & Meditation Retreats in Goa",
    description:
      "3, 5 & 7-day yoga and meditation retreats in Goa with daily Hatha practice, sound healing & ayurveda near Querim beach.",
    path: "/yoga-retreats-goa",
    image: "/og-image.jpg",
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
    title: "Yoga Holidays in Goa | Beach Breaks",
    description:
      "3, 5 and 7-day oceanfront yoga holidays in Goa combining daily practice with beach time and coastal relaxation.",
    path: "/yoga-holidays-goa",
    image: "/og-image.jpg",
    imageAlt:
      "Students relaxing and restoring in the coastal setting of North Goa",
    keywords:
      "yoga holidays Goa, short yoga retreat Goa, 3 day yoga holiday Goa, 7 day yoga break, beach yoga holiday India",
  },

  onlinePranayama: {
    title: "Online Pranayama & Breathwork Courses",
    description:
      "Learn authentic classical Indian pranayama and breathwork online with experienced teachers from anywhere in the world.",
    path: "/online-pranayama",
    image: "/og-image.jpg",
    imageAlt:
      "Pranayama and meditation session at The Hatha Yogashala Goa",
    keywords:
      "pranayama course, breathwork training online, learn yogic breathing, Hatha pranayama Goa, Nadi Shodhana class",
  },

  // ─── Blog ─────────────────────────────────────────────────────────────────
  blog: {
    title: "Yoga & Goa Travel Guides | Blog",
    description:
      "Practical articles on yoga teacher training, retreats and Goa travel from The Hatha Yogashala editorial team.",
    path: "/blog",
    image: "/og-image.jpg",
    imageAlt: "The Hatha Yogashala blog and journal articles",
    keywords:
      "yoga blog, yoga teacher training tips, yoga retreat Goa guide, Hatha yoga practice, beginner yoga Goa, yoga for beginners",
  },

  // ─── Utility pages ────────────────────────────────────────────────────────
  gallery: {
    title: "Photo Gallery | Life at The Hatha Yogashala",
    description:
      "Photos of daily practice, ceremonies, accommodation and coastal life at The Hatha Yogashala in Querim, North Goa.",
    path: "/gallery",
    image: "/og-image.jpg",
    imageAlt:
      "Morning asana and alignment practice at The Hatha Yogashala Goa",
    keywords:
      "yoga school photos Goa, yoga teacher training pictures, yoga retreat Goa images, Arambol yoga beach, North Goa ashram photos",
  },

  goaTravelGuide: {
    title: "Destination Goa | Yoga Student Travel Guide",
    description:
      "Travel guide to Querim, Arambol and North Goa for students joining yoga teacher training or a retreat in Goa.",
    path: "/goa-travel-guide",
    image: "/og-image.jpg",
    imageAlt: "Yoga students practicing on a Goa beach in North Goa",
    keywords:
      "yoga in Goa, yoga teacher training destination Goa, Querim beach yoga, Arambol yoga ashram, MOPA airport yoga school Goa",
  },

  contact: {
    title: "Contact Us | The Hatha Yogashala, Goa",
    description:
      "Contact The Hatha Yogashala for course dates, fees and availability. Call, WhatsApp or send an enquiry today.",
    path: "/contact",
    image: "/og-image.jpg",
    imageAlt: "The Hatha Yogashala yoga school location in Goa",
    keywords:
      "contact yoga school Goa, yoga teacher training enquiry Goa, The Hatha Yogashala Goa contact, WhatsApp yoga Goa, yoga retreat booking North Goa",
  },

  apply: {
    title: "Apply Now | Reserve Your Spot in Goa",
    description:
      "Apply for yoga teacher training or a retreat at The Hatha Yogashala Goa. Batch dates and fees confirmed before payment.",
    path: "/apply",
    image: "/og-image.jpg",
    imageAlt: "Graduation celebration at The Hatha Yogashala Goa",
  },

  paymentPolicy: {
    title: "Payment & Booking Policy | The Hatha Yogashala",
    description:
      "Read our clear payment, deposit and refund terms for yoga teacher training and retreats in Goa.",
    path: "/payment-policy",
    image: "/og-image.jpg",
    imageAlt: "The Hatha Yogashala yoga school campus in Goa",
  },

  privacyPolicy: {
    title: "Privacy Policy | The Hatha Yogashala",
    description:
      "How The Hatha Yogashala collects, uses and protects your personal information.",
    path: "/privacy-policy",
    image: "/og-image.jpg",
    imageAlt: "The Hatha Yogashala logo",
  },

  terms: {
    title: "Terms & Conditions | The Hatha Yogashala",
    description:
      "Terms and conditions for booking a yoga teacher training course or retreat at The Hatha Yogashala, Goa.",
    path: "/terms",
    image: "/og-image.jpg",
    imageAlt: "The Hatha Yogashala logo",
  },
};
