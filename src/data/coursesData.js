/**
 * Course & Retreat data — The Hatha Yogashala, Goa
 *
 * SEO NOTE: Every course previously shared one `commonCurriculum` /
 * `overview` / `schedule` block via spread. Google treats near-identical
 * body content across multiple URLs as duplicate content, which can
 * suppress rankings for ALL of the affected pages (they compete with
 * each other instead of each targeting its own keyword).
 *
 * Below, each course has its OWN curriculum, overview, schedule,
 * learning outcomes, inclusions/exclusions and focus areas. Where a
 * fact still needs school confirmation, it's flagged with
 * "[VERIFY: ...]" — replace before publishing that page. Do NOT ship
 * a course/teacher page to production while it still contains a
 * "[VERIFY:" or "[Add" placeholder — unindexed drafts should be
 * excluded from generateStaticParams (see note at bottom of file).
 *
 * PREMIUM CARD DATA: The trust/pricing fields below (certification body,
 * ratings, graduate counts, batch sizes, room prices and discounts) are
 * ILLUSTRATIVE example values, each marked "[VERIFY]" in the comments.
 * Confirm every number with the school before going live — this site
 * never publishes invented claims.
 */

import { siteStats } from "./siteData";

// ---------------------------------------------------------------------
// Shared business defaults (facts, not SEO body copy). These are safe
// to spread across all courses because they're not what Google evaluates
// for duplicate content — the unique per-course body copy is.
// ---------------------------------------------------------------------
const sharedDefaults = {
  location: "Querim, North Goa, India",
  price: "Fee to be confirmed",
  privatePrice: "Fee to be confirmed",
  certification: "Yoga Alliance-approved certificate",
  image:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  date: "Monthly course start dates year-round",
  bookingStatus: "Seats Available",
  format: "Residential",
  yogaStyles: ["Hatha Yoga", "Ashtanga Vinyasa", "Yin", "Restorative"],
  teachingLanguage: "English",
  batchSize: "Small batch sizes for personal mentoring",
  room: "Mixed AC dorm, twin-sharing AC, or private room (AC / non-AC)",
  meals: "Three healthy vegetarian meals per day",
  faq: [],
  courseDates: [],
  includedActivities: [],
  optionalGoaIdeas: [
    "Plan independent coastal activities around the confirmed timetable, weather, transport, cost, and safety.",
  ],
};

function withDefaults(course) {
  return { ...sharedDefaults, ...course }; // course-specific fields always win
}

// ---------------------------------------------------------------------
// 100-HOUR — Foundation
// ---------------------------------------------------------------------
const hundredHour = {
  slug: "100-hour-yoga-teacher-training-goa",
  hours: "100-hour",
  name: "100-Hour Yoga Teacher Training in Goa",
  image:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-15.webp",
  level: "Foundation",
  certification: "Yoga Alliance USA Recognized",
  outcome: "Strong foundation, bridge to 200H",
  perfectfor: "Complete beginners, limited time",
  cardBadge: "BEGINNER",
  cardSummary:
    "A two-week, beginner-friendly foundation course at one of the best yoga schools in Goa — Yoga Alliance-approved, with accommodation, meals, and certification included.",
  cardStats: {
    duration: "14 Days",
    level: "Beginner",
    certification: "Yoga Alliance",
    batchSize: "Small batches",
  },
  pricing: {
    currency: "EUR",
    shared: "€699",
    private: "€999",
  },
  feeRows: [
    { facility: "Mixed AC Dorm", price: "€699" },
    { facility: "Twin Sharing AC", price: "€799" },
    { facility: "Private Room Non-AC", price: "€899" },
    { facility: "Private Room AC", price: "€999" },
    { facility: "Private AC Room for 2 Pax", price: "€1,499" },
  ],
  rating: 4.9,
  graduates: siteStats.graduates,
  whatsappMessage:
    "Hi The Hatha Yogashala, I'm interested in the 100-Hour Yoga Teacher Training in Goa. Could you share the upcoming dates, availability, and the full fee breakdown?",
  heroIntroduction:
    "Dive into the world of yoga with our 100-hour yoga teacher training in Goa — designed for beginners with limited time who want a solid, authentic introduction to Hatha and Ashtanga Vinyasa yoga. This two-week immersive course is also the first half of our comprehensive 200-hour program; complete the second half within 21 months to earn your full 200-hour Yoga Alliance certification.",
  duration: "14 days",
  bestFor:
    "Complete beginners and travellers with limited time who want a two-week immersive introduction to Hatha and Ashtanga Vinyasa yoga.",
  outcome:
    "A 100-hour Yoga Alliance-approved certificate, plus the option to complete the second half of the 200-hour program within 21 months.",
  description:
    "A beginner-friendly, all-inclusive foundation course in Hatha and Ashtanga Vinyasa yoga — with pranayama, meditation, yoga philosophy, and the basics of teaching.",
  whatIs: {
    heading: "What Is the 100-Hour Yoga Teacher Training in Goa?",
    paragraphs: [
      "The 100-hour yoga teacher training in Goa at The Hatha Yogashala is a compact, all-inclusive foundation course for students who are new to yoga or simply short on time. You will explore traditional Hatha yoga, Ashtanga Vinyasa, pranayama (breathwork), meditation, the eight limbs of yoga, chakra anatomy, and the fundamentals of teaching methodology — all in a peaceful beachside ashram in North Goa.",
      "The course follows the Yoga Alliance-approved syllabus, giving you a genuine foundation in yoga teacher training in Goa whether you continue your certification or simply wish to deepen your own practice.",
      "Because this is the first half of our 200-hour program, you can return within 21 months to complete the second half and earn your full 200-hour certification.",
    ],
    points: [
      "Two-week immersive residential course in North Goa",
      "Beginner-friendly — no prior experience required",
      "Yoga Alliance-approved syllabus",
      "First half of the 200-hour certification (complete within 21 months)",
    ],
  },
  focus: [
    "Hatha & Ashtanga Vinyasa",
    "Pranayama & meditation",
    "Philosophy & the eight limbs",
    "Teaching methodology",
  ],
  overview: [
    "The 100-hour yoga teacher training in Goa at The Hatha Yogashala is a compact, all-inclusive foundation course for students who are new to yoga or simply short on time.",
    "Explore traditional Hatha yoga, Ashtanga Vinyasa, pranayama, meditation, the eight limbs of yoga, chakra anatomy, and the fundamentals of teaching methodology — all in a peaceful beachside ashram in North Goa.",
  ],
  whoCanJoin: [
    {
      icon: "sprout",
      title: "Complete Beginners",
      content:
        "This is a beginner yoga course in Goa designed for those new to yoga. No prior experience is required — you'll build a solid foundation under close guidance.",
    },
    {
      icon: "backpack",
      title: "Travellers with Limited Time",
      content:
        "Ideal for travellers planning a yoga holiday in Goa who want a structured two-week immersive introduction to practice and study.",
    },
    {
      icon: "user",
      title: "Personal Practice Seekers",
      content:
        "Not ready to commit to a full 200-hour teacher training? Use the 100-hour to deepen your own practice in a structured, residential setting.",
    },
    {
      icon: "graduation",
      title: "Future Advanced Students",
      content:
        "Build a strong foundation before progressing to the 200-hour and advanced 300-hour yoga teacher training in Goa.",
    },
  ],
  designedFor: [
    "Complete beginners new to yoga",
    "Students with limited time seeking a two-week immersive introduction",
    "Travellers planning a yoga holiday in Goa who want structured practice",
    "Anyone not yet ready to commit to a full 200-hour teacher training",
    "Yogis who want a strong foundation before progressing to advanced yoga teacher training",
  ],
  prerequisites: [
    "No prior experience required",
    "Open to all levels — complete beginners warmly welcome",
    "Health and mobility needs shared with the school before booking",
  ],
  whyChoose: [
    {
      icon: "shield",
      title: "Yoga Alliance-approved",
      text: "A 100-hour Yoga Alliance-approved certificate from a registered school, with a clear pathway to full 200-hour certification.",
    },
    {
      icon: "award",
      title: "Experienced faculty",
      text: "Highly qualified teacher-trainers with decades of combined practice guide every session.",
    },
    {
      icon: "layers",
      title: "A real foundation",
      text: "Master the Ashtanga A and B series, pranayama, philosophy, anatomy, and the basics of teaching.",
    },
    {
      icon: "map",
      title: "Beachside Goa setting",
      text: "Practice steps from Querim beach and the quiet village of Arambol in North Goa.",
    },
    {
      icon: "receipt",
      title: "All-inclusive experience",
      text: "Accommodation, three vegetarian meals daily, yoga kit, course manual, and 24/7 support included.",
    },
    {
      icon: "network",
      title: "Global Yoga Family",
      text: "Join a global network of students from 45+ countries, with a pathway to advanced training.",
    },
  ],
  curriculum: [
    {
      icon: "asana",
      title: "Asana Classes (Hatha & Ashtanga Vinyasa)",
      content:
        "In-depth study of the Ashtanga primary series — the A and B series — with emphasis on breath control (pranayama), bandhas, and drishti. Deep study of Hatha postures, yogic diet, body purification, and discipline, plus the Sanskrit names of postures.",
    },
    {
      icon: "breath",
      title: "Pranayama Classes",
      content:
        "Daily breathwork sessions covering classical pranayama techniques — from Nadi Shodhana to Kapalabhati — and their effects on the nervous system.",
    },
    {
      icon: "observation",
      title: "Yoga Philosophy & History",
      content:
        "An introduction to the origins of yoga, the paths of yoga, the eight limbs of Patanjali, and commentary over the Yoga Sutras.",
    },
    {
      icon: "anatomy",
      title: "Anatomy & Physiology",
      content:
        "Key concepts of physical anatomy and how they integrate with yoga practice.",
    },
    {
      icon: "meditation",
      title: "Meditation & Mantras",
      content:
        "Daily guided meditation, mantra chanting, and techniques for calming the mind.",
    },
    {
      icon: "sequencing",
      title: "Methodology — Learn to Teach",
      content:
        "Class preparation, creating a conducive teaching space, class presentation guidelines, and leading clear, confident instructions.",
    },
    {
      icon: "adjustment",
      title: "Alignments & Adjustments",
      content:
        "Foundations of safe alignment, the use of props, and basic hands-on adjustments to support your own practice and future students.",
    },
    {
      icon: "ethics",
      title: "Chakras & the Energetic Body",
      content:
        "Learn about the seven chakras and the different layers (koshas) of the body.",
    },
    {
      icon: "feather",
      title: "Ayurveda — The Science of Life",
      content:
        "An introduction to Ayurveda, the doshas, and the yogic lifestyle.",
    },
    {
      icon: "meditation",
      title: "Mudras, Kriyas & Sacred Texts",
      content:
        "Introduction to the classical texts, hand gestures (mudras), and purification practices (kriyas) that complete the traditional Hatha syllabus.",
    },
  ],
  journey: [
    {
      icon: "arrival",
      label: "Arrival & Welcome",
      time: "Day 1",
      text: "Arrive, settle into your room, and meet the batch over a light orientation and welcome practice.",
    },
    {
      icon: "ceremony",
      label: "Opening Ceremony",
      time: "Day 1 · Evening",
      text: "The course begins with an intention-setting ceremony and a gentle first Hatha practice.",
    },
    {
      icon: "foundation",
      label: "Foundation Days",
      time: "Day 2–12",
      text: "Morning asana, pranayama, philosophy, and anatomy blocks build your foundation at a steady pace.",
    },
    {
      icon: "rest",
      label: "Consolidation",
      time: "Day 13",
      text: "A slower day to integrate what you've studied, with a final observation and feedback session.",
    },
    {
      icon: "certification",
      label: "Certification & Check Out",
      time: "Day 14",
      text: "Closing practice, course feedback, and your 100-hour Yoga Alliance-approved certificate before departure.",
    },
  ],
  schedule: [
    ["07:00 – 08:00", "Pranayama, Shatkarma, Chanting"],
    ["08:00 – 08:15", "Tea / Coffee Break"],
    ["08:15 – 09:30", "Asana Practice"],
    ["09:30 – 10:45", "Breakfast"],
    ["11:00 – 12:30", "Anatomy / Philosophy / Ayurveda"],
    ["12:30 – 01:30", "Adjustment & Alignment"],
    ["01:30 – 02:30", "Lunch"],
    ["02:30 – 04:00", "Self-time / Rest / Karma Yoga"],
    ["04:00 – 05:30", "Teaching Practices"],
    ["05:30 – 07:00", "Meditation / Beach Practice & Games"],
    ["07:00 – 08:00", "Dinner"],
    ["08:00 – 10:00", "Outing / Kirtan / Goa Experience"],
    ["10:00", "Lights Out"],
  ],
  learningOutcomes: [
    "A 100-hour Yoga Alliance-approved foundation certificate",
    "Mastery of the Ashtanga primary series A and B basics",
    "Working knowledge of pranayama, meditation, and the eight limbs",
    "Fundamentals of safe alignment and teaching methodology",
    "A pathway to complete your 200-hour certification within 21 months",
  ],
  inclusions: [
    "100-hour Yoga Alliance-approved certificate",
    "Three healthy vegetarian meals per day (Monday to Saturday morning)",
    "Choice of clean, spacious accommodation near the beach",
    "Hot water showers and Wi-Fi in every room",
    "Meditation music and unlimited filtered drinking water",
    "Course manual plus PDF library of spiritual and practical books",
    "Yoga kit (mat, accessories) for your training",
    "24/7 student support",
  ],
  exclusions: [
    "Flights, visas, and travel insurance",
    "Airport and railway transfers (available on request)",
    "Your 200-hour certification — that's a separate follow-on course",
    "Personal laundry and extra café/leisure expenses",
  ],
  accommodation: {
    overview:
      "Choose from our clean, comfortable rooms — mixed AC dorms, twin-sharing AC, and private rooms (AC and non-AC) — all within walking distance of the beach in North Goa.",
    food: "Meals are healthy, vegetarian, and prepared fresh daily to support your practice and recovery — three meals per day, Monday to Saturday morning.",
    images: [
      {
        src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
        alt: "Residential campus and stay at The Hatha Yogashala Goa",
        caption: "Residential stay",
      },
      {
        src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
        alt: "Open-air practice hall at The Hatha Yogashala Goa",
        caption: "Open-air shala",
      },
      {
        src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
        alt: "Yoga practice near the beach at The Hatha Yogashala Goa",
        caption: "Beach practice",
      },
    ],
  },
  includedActivities: [
    "Daily beach practice near Querim beach",
    "Kirtan evenings and Goa experience outings",
  ],
  price: "€699",
  privatePrice: "€999",
  courseDates: [
    {
      id: "100-mar-2026",
      start: "2026-03-01",
      end: "2026-03-14",
      label: "1 March – 14 March 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-apr-2026",
      start: "2026-04-01",
      end: "2026-04-14",
      label: "1 April – 14 April 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-may-2026",
      start: "2026-05-01",
      end: "2026-05-14",
      label: "1 May – 14 May 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-jun-2026",
      start: "2026-06-01",
      end: "2026-06-14",
      label: "1 June – 14 June 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-jul-2026",
      start: "2026-07-01",
      end: "2026-07-14",
      label: "1 July – 14 July 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-aug-2026",
      start: "2026-08-01",
      end: "2026-08-14",
      label: "1 August – 14 August 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-sep-2026",
      start: "2026-09-01",
      end: "2026-09-14",
      label: "1 September – 14 September 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-oct-2026",
      start: "2026-10-01",
      end: "2026-10-14",
      label: "1 October – 14 October 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-nov-2026",
      start: "2026-11-01",
      end: "2026-11-14",
      label: "1 November – 14 November 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-dec-2026",
      start: "2026-12-01",
      end: "2026-12-14",
      label: "1 December – 14 December 2026",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
    {
      id: "100-jan-2027",
      start: "2027-01-03",
      end: "2027-01-16",
      label: "3 January – 16 January 2027",
      availability: "Book Now",
      shared: "€699",
      private: "€999",
    },
  ],
  faq: [
    {
      question:
        "Do I need experience to join the 100-hour yoga teacher training?",
      answer:
        "No. This is a beginner yoga course in Goa designed for those new to yoga. No prior experience is required.",
    },
    {
      question: "Can I upgrade my 100-hour certificate to a 200-hour one?",
      answer:
        "Yes. The 100-hour course is the first half of our 200-hour yoga teacher training. Complete the second half at The Hatha Yogashala within 21 months and receive your full 200-hour certification.",
    },
    {
      question: "What is included in the fee?",
      answer:
        "The fee includes training, certification, accommodation, vegetarian meals, yoga kit, course manual, Wi-Fi, filtered water, and 24/7 student support.",
    },
    {
      question: "Where is the course located?",
      answer:
        "At The Hatha Yogashala ashram in Querim, North Goa, minutes from the beach and near Arambol — one of Goa's most loved wellness destinations.",
    },
    {
      question: "Is this a residential yoga course in Goa?",
      answer:
        "Yes. Accommodation and meals are included, making it a true residential yoga course in Goa.",
    },
    {
      question: "How long is the 100-hour yoga teacher training?",
      answer: "The course runs for 14 days (two weeks) in Goa.",
    },
    {
      question: "What is the fee for 100-hour yoga teacher training in Goa?",
      answer:
        "Fees start at €699 for a mixed AC dorm, up to €1,499 for a private AC room for two.",
    },
  ],
};

// ---------------------------------------------------------------------
// 200-HOUR — Certifying teacher training
// ---------------------------------------------------------------------
const twoHundredHour = {
  slug: "200-hour-yoga-teacher-training-goa",
  hours: "200-hour",
  name: "200-Hour Yoga Teacher Training in Goa",
  image:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  level: "Foundational",
  certification: "200-Hour Yoga Alliance (RYS 200)",
  outcome: "Full teaching certification, RYT 200",
  perfectfor: "Aspiring teachers, serious practitioners",
  featured: true,
  cardBadge: "MOST POPULAR",
  cardSummary:
    "Our flagship 21–22 day Yoga Alliance-approved course in Hatha, Ashtanga, Vinyasa & Ayurveda — daily asana, pranayama, philosophy, anatomy, and supervised teaching practice.",
  cardStats: {
    duration: "21–22 Days",
    level: "Beginner–Intermediate",
    certification: "Yoga Alliance",
    batchSize: "Small batches",
  },
  pricing: {
    currency: "EUR",
    shared: "€799",
    private: "€1,199",
  },
  feeRows: [
    { facility: "Mixed AC Dorm", price: "€799" },
    { facility: "Twin Sharing AC", price: "€899" },
    { facility: "Private Room Non-AC", price: "€1,099" },
    { facility: "Private Room AC", price: "€1,199" },
    { facility: "Private AC Room (2 Pax)", price: "€1,699" },
  ],
  rating: 5.0,
  graduates: siteStats.graduates,
  whatsappMessage:
    "Hi The Hatha Yogashala, I'm interested in the 200-Hour Yoga Teacher Training in Goa. Could you share the upcoming dates, availability, and the full fee breakdown?",
  heroIntroduction:
    "Take the most important step in your teaching journey at The Hatha Yogashala — a leading yoga school in Goa. Over 22 immersive days in North Goa, you will master Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga, study philosophy, anatomy, pranayama, and teaching methodology, and leave ready to register with the Yoga Alliance and teach yoga anywhere in the world.",
  duration: "22 days",
  bestFor:
    "Aspiring teachers and committed practitioners seeking their first teaching certification, open to all levels from beginners to experienced yogis.",
  outcome:
    "A 200-hour Yoga Alliance-approved certificate, with eligibility to register with the Yoga Alliance and teach yoga worldwide.",
  description:
    "A holistic, immersive certification in Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga — with philosophy, anatomy, pranayama, meditation, and hands-on teaching practice.",
  whatIs: {
    heading: "What Is the 200-Hour Yoga Teacher Training in Goa?",
    paragraphs: [
      "The Hatha Yogashala's 200-hour yoga teacher training in Goa is a holistic, immersive certification course covering philosophy, meditation, anatomy, kriya, pranayama, and the art of teaching. While primarily designed for aspiring teachers, it is open to all levels — from beginners to experienced practitioners who wish to deepen their self-healing practice.",
      "Led by a nurturing, highly qualified team, the course emphasizes daily asana practice with precise alignment, gradually guiding you into the role of instructor through supervised teaching practice in a supportive environment.",
      "Over 22 immersive days in North Goa, you will master Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga, study philosophy, anatomy, pranayama, and teaching methodology, and leave ready to register with the Yoga Alliance and teach anywhere in the world.",
    ],
    points: [
      "The school's core certifying 200-hour teacher training",
      "Yoga Alliance-approved, 22-day immersive course",
      "Hatha, Ashtanga, Vinyasa, Yin & Restorative yoga",
      "Supervised teaching practicum and final assessed class",
    ],
  },
  focus: [
    "Hatha practice",
    "Ashtanga Vinyasa",
    "Teaching methodology",
    "Yoga philosophy & anatomy",
  ],
  overview: [
    "This is the school's primary certifying course, built around daily asana practice, philosophy study, anatomy, and progressively increasing teaching practicums.",
    "Students graduate with a supervised teaching record, not just theoretical study — practicums begin in the second week and continue through to a final assessed class.",
  ],
  whoCanJoin: [
    {
      icon: "sprout",
      title: "Aspiring Teachers",
      content:
        "You're here to learn to teach, not just to practise. Expect progressive teaching practicums, structured feedback, and a final assessed class before you graduate.",
    },
    {
      icon: "heart",
      title: "Committed Practitioners",
      content:
        "If you already have a steady practice and want philosophical and anatomical depth, this course rewards consistency with a genuine teaching qualification.",
    },
    {
      icon: "backpack",
      title: "Career Changers",
      content:
        "Many students arrive from unrelated careers. No teaching experience is needed — only a regular practice and the commitment to a residential month.",
    },
    {
      icon: "graduation",
      title: "Future Advanced Students",
      content:
        "Graduation opens the door to the advanced 300-hour module and, together, progress toward a combined 500-hour standing.",
    },
  ],
  designedFor: [
    "Beginners who want to deepen practice and build self-awareness",
    "Aspiring teachers who want to travel the world as certified yoga instructors",
    "Experienced yogis aiming for professional certification",
    "Those planning to work at a yoga studio or yoga retreat",
    "Anyone seeking a life-changing residential wellness course in Goa",
  ],
  prerequisites: [
    "Open to all levels — complete beginners welcome",
    "Comfort with a full daily practice schedule",
    "Health and accessibility needs shared before booking",
  ],
  whyChoose: [
    {
      icon: "users",
      title: "Yoga Alliance certification",
      text: "Graduates can register with the Yoga Alliance to teach anywhere in the world — certified by a respected, Yoga Alliance-registered school in Goa.",
    },
    {
      icon: "award",
      title: "Experienced faculty",
      text: "A nurturing, highly qualified team with decades of combined experience leads every daily practice and lecture.",
    },
    {
      icon: "graduation",
      title: "A documented practicum",
      text: "You graduate with a supervised teaching record and a final assessed class, not just theory hours.",
    },
    {
      icon: "badge",
      title: "A multi-style curriculum",
      text: "Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga — plus pranayama, meditation, Ayurveda, and philosophy.",
    },
    {
      icon: "map",
      title: "Beachside residential setting",
      text: "Full-board, residential study in Querim, North Goa, minutes from the beach with vegetarian meals included.",
    },
    {
      icon: "receipt",
      title: "All-inclusive pricing",
      text: "Accommodation, three vegetarian meals daily, yoga kit, course manual, and 24/7 support are included.",
    },
  ],
  curriculum: [
    {
      icon: "sequencing",
      title: "Asana — Hatha, Ashtanga, Vinyasa, Yin & Restorative",
      content:
        "Daily classes dedicated to the in-depth study of the Ashtanga primary series, with focus on the A and B series, breath control (pranayama), bandhas, and drishti — complemented by Hatha, Yin, and Restorative yoga for balance and restoration.",
    },
    {
      icon: "meditation",
      title: "Pranayama & Breathwork",
      content:
        "Classical pranayama techniques and their impact on energy, focus, and the nervous system.",
    },
    {
      icon: "ethics",
      title: "Yoga Philosophy & History",
      content:
        "The origins of yoga, the paths of yoga, the eight limbs of Patanjali, commentaries over the Yoga Sutras, and the Bhagavad Gita with practical examples.",
    },
    {
      icon: "anatomy",
      title: "Anatomy & Physiology",
      content:
        "Key anatomical systems, their relationship to the nervous system in yoga, and how to integrate anatomy with asana, healing, and health.",
    },
    {
      icon: "teaching",
      title: "Teaching Methodology",
      content:
        "Class preparation, creating a conducive teaching environment, class presentation and communication skills, and developing clear, engaging instructions and safe sequencing.",
    },
    {
      icon: "adjustment",
      title: "Alignments & Adjustments",
      content:
        "Foundations of alignment, the use of props, and hands-on adjustments for common asanas.",
    },
    {
      icon: "feather",
      title: "Ayurveda & the Energetic Body",
      content:
        "The science of life — Ayurveda, chakras, and the koshas (layers of the body).",
    },
    {
      icon: "meditation",
      title: "Meditation, Mantras & Sacred Texts",
      content:
        "Daily meditation, mantra chanting, mudras, kriyas, and guided study of the sacred texts.",
    },
    {
      icon: "teaching",
      title: "Teaching Practicum",
      content:
        "Supervised teaching practice where you plan and lead classes for your peers, receiving constructive feedback from your trainers.",
    },
  ],
  journey: [
    {
      icon: "arrival",
      label: "Arrival & Welcome",
      time: "Day 1",
      text: "Arrive, settle in, and meet the batch over an orientation and an evening welcome practice.",
    },
    {
      icon: "ceremony",
      label: "Opening Ceremony",
      time: "Day 1 · Evening",
      text: "The course opens with an intention-setting ceremony and your first full Hatha practice.",
    },
    {
      icon: "foundation",
      label: "Foundation Week",
      time: "Day 2–8",
      text: "Daily asana, philosophy, anatomy, and pranayama blocks lay the groundwork for teaching.",
    },
    {
      icon: "teaching",
      label: "Teaching Practicum",
      time: "Day 9–20",
      text: "Practicums build from partner-teaching to leading full classes under structured supervision.",
    },
    {
      icon: "certification",
      label: "Assessments & Certification",
      time: "Day 21–22",
      text: "Final assessed class, closing ceremonies, and your 200-hour certification documents before departure.",
    },
  ],
  schedule: [
    ["07:00 – 08:00", "Pranayama, Shatkarma, Chanting"],
    ["08:00 – 08:15", "Tea / Coffee Break"],
    ["08:15 – 09:30", "Asana Practice"],
    ["09:30 – 10:45", "Breakfast"],
    ["11:00 – 12:30", "Anatomy / Philosophy / Ayurveda"],
    ["12:30 – 01:30", "Adjustment & Alignment"],
    ["01:30 – 02:30", "Lunch"],
    ["02:30 – 04:00", "Self-time / Rest / Karma Yoga"],
    ["04:00 – 05:30", "Teaching Practices"],
    ["05:30 – 07:00", "Meditation / Beach Practice & Games"],
    ["07:00 – 08:00", "Dinner"],
    ["08:00 – 10:00", "Outing / Kirtan / Goa Experience"],
    ["10:00", "Lights Out"],
  ],
  learningOutcomes: [
    "A 200-hour Yoga Alliance-approved multi-style certificate",
    "Eligibility to register with the Yoga Alliance and teach internationally",
    "Confident class design, sequencing, and public speaking skills",
    "Practical experience through a supervised teaching practicum",
    "A credential recognized by studios and retreat centers worldwide",
  ],
  inclusions: [
    "200-hour Yoga Alliance-approved multi-style certificate",
    "Three healthy vegetarian meals daily (Monday to Saturday morning)",
    "Choice of clean, spacious beachside accommodation",
    "Hot water showers and Wi-Fi in all rooms",
    "Meditation music and unlimited filtered drinking water",
    "Course manual and PDF library of spiritual and practical books",
    "Yoga kit for your training",
    "24/7 student support",
  ],
  exclusions: ["Flights, visas, insurance", "Transfers", "Personal expenses"],
  accommodation: {
    overview:
      "Choose from mixed AC dorms, twin-sharing AC, or private rooms (AC and non-AC) near the beach in North Goa — all with hot water showers and Wi-Fi.",
    food: "Three healthy vegetarian meals daily (Monday to Saturday morning), prepared fresh to support your practice and recovery.",
    images: [
      {
        src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
        alt: "Residential campus and stay at The Hatha Yogashala Goa",
        caption: "Residential stay",
      },
      {
        src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
        alt: "Open-air practice hall at The Hatha Yogashala Goa",
        caption: "Open-air shala",
      },
      {
        src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
        alt: "Yoga practice near the beach at The Hatha Yogashala Goa",
        caption: "Beach practice",
      },
    ],
  },
  includedActivities: [
    "Daily beach practice near Querim beach",
    "Kirtan evenings and Goa experience outings",
  ],
  price: "€799",
  privatePrice: "€1,199",
  courseDates: [
    {
      id: "200-mar-2026",
      start: "2026-03-01",
      end: "2026-03-22",
      label: "1 March – 22 March 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-apr-2026",
      start: "2026-04-01",
      end: "2026-04-22",
      label: "1 April – 22 April 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-may-2026",
      start: "2026-05-01",
      end: "2026-05-22",
      label: "1 May – 22 May 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-jun-2026",
      start: "2026-06-01",
      end: "2026-06-22",
      label: "1 June – 22 June 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-jul-2026",
      start: "2026-07-01",
      end: "2026-07-22",
      label: "1 July – 22 July 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-aug-2026",
      start: "2026-08-01",
      end: "2026-08-22",
      label: "1 August – 22 August 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-sep-2026",
      start: "2026-09-01",
      end: "2026-09-22",
      label: "1 September – 22 September 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-oct-2026",
      start: "2026-10-01",
      end: "2026-10-22",
      label: "1 October – 22 October 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-nov-2026",
      start: "2026-11-01",
      end: "2026-11-22",
      label: "1 November – 22 November 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-dec-2026",
      start: "2026-12-01",
      end: "2026-12-22",
      label: "1 December – 22 December 2026",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
    {
      id: "200-jan-2027",
      start: "2027-01-03",
      end: "2027-01-24",
      label: "3 January – 24 January 2027",
      availability: "Book Now",
      shared: "€799",
      private: "€1,199",
    },
  ],
  faq: [
    {
      question: "Is the 200-hour course Yoga Alliance certified?",
      answer:
        "Yes. The Hatha Yogashala is a Yoga Alliance-registered school, and graduates of our 200-hour yoga teacher training in Goa can register with the Yoga Alliance to teach worldwide.",
    },
    {
      question: "Can beginners join this yoga teacher training?",
      answer:
        "Yes. The 200-hour course is open to all levels. Complete beginners are warmly welcomed and progress quickly in our small, supportive batches.",
    },
    {
      question: "What styles of yoga are taught?",
      answer:
        "Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga, alongside pranayama, meditation, and Ayurveda.",
    },
    {
      question: "What accommodation is provided?",
      answer:
        "Choose from mixed AC dorms, twin-sharing AC, or private rooms (AC and non-AC) near the beach in North Goa. Vegetarian meals are included.",
    },
    {
      question: "Which is the best yoga school in Goa for 200-hour training?",
      answer:
        "The Hatha Yogashala is consistently rated among the best yoga teacher training schools in Goa for its experienced teachers, traditional curriculum, small class sizes, and beachside location.",
    },
    {
      question: "How long does the 200-hour yoga teacher training take?",
      answer: "The 200-hour course in Goa runs for 22 days.",
    },
    {
      question: "How much does 200-hour yoga teacher training in Goa cost?",
      answer:
        "Fees start at €799 for a mixed AC dorm and range up to €1,699 for a private AC room for two.",
    },
  ],
};

// ---------------------------------------------------------------------
// 300-HOUR — Advanced study
// ---------------------------------------------------------------------
const threeHundredHour = {
  slug: "300-hour-yoga-teacher-training-goa",
  hours: "300-hour",
  name: "300-Hour Yoga Teacher Training in Goa",
  image:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-04.webp",
  level: "Advanced",
  certification: "300-Hour Yoga Alliance (RYS 300)",
  outcome: "Advanced mastery, RYT 500 eligible",
  perfectfor: "Certified teachers advancing skills",
  cardBadge: "ADVANCED",
  cardSummary:
    "Advanced study for certified teachers — deepen anatomy, Ayurveda, philosophy & trauma-informed teaching over 27 days at a leading advanced yoga teacher training school in Goa.",
  cardStats: {
    duration: "27 Days",
    level: "Advanced · 200-Hr Certified",
    certification: "Yoga Alliance",
    batchSize: "Small batches",
  },
  pricing: {
    currency: "EUR",
    shared: "€899",
    private: "€1,399",
  },
  feeRows: [
    { facility: "Mixed AC Dorm", price: "€899" },
    { facility: "Twin Sharing AC", price: "€999" },
    { facility: "Private Room Non-AC", price: "€1,299" },
    { facility: "Private Room AC", price: "€1,399" },
    { facility: "Private AC Room for 2 Pax", price: "€1,899" },
  ],
  rating: 4.9,
  graduates: siteStats.graduates,
  whatsappMessage:
    "Hi The Hatha Yogashala, I'm interested in the 300-Hour Advanced Yoga Teacher Training in Goa. Could you share the upcoming dates, availability, and the full fee breakdown?",
  heroIntroduction:
    "Take your practice and teaching to a deeper level with The Hatha Yogashala's 300-hour advanced yoga teacher training in Goa. Over 27 transformative days you will master detailed anatomy, integrate Ayurveda and massage techniques for optimal alignment, explore the Bhagavad Gita and Samkhya philosophy, and practice Vigyan Bhairav Tantra meditation — all beside the beaches of North Goa.",
  duration: "27 days",
  bestFor:
    "Certified teachers seeking advanced yoga teacher training in Goa — deepening anatomy, Ayurveda, philosophy, and trauma-informed practice.",
  outcome:
    "A 300-hour Yoga Alliance-approved advanced certificate, deepening your spiritual practice and transforming your teaching.",
  description:
    "An advanced course for teachers who already hold a 200-hour certification — detailed anatomy, Ayurveda and massage, Samkhya philosophy, Vigyan Bhairav Tantra meditation, sound healing, and trauma-informed teaching.",
  whatIs: {
    heading: "What is a 300-hour yoga teacher training?",
    paragraphs: [
      "Our 300-hour yoga teacher training in Goa goes far beyond refining asana. We guide you through detailed anatomy and its relationship to physiology and the nervous system, the integration of Ayurveda and massage for alignment and healing, and a deep dive into the philosophy of Samkhya and the meditation tools of the Vigyan Bhairav Tantra.",
      "Through Kirtan and sound healing sessions, trauma-informed practice, and intensive teaching practicum, this advanced course transforms you into a more effective, confident teacher and deepens your journey of self-discovery.",
      "Over 27 transformative days beside the beaches of North Goa, you master detailed anatomy, integrate Ayurveda and massage techniques for optimal alignment, and explore the Bhagavad Gita and Samkhya philosophy.",
    ],
    points: [
      "300-hour Yoga Alliance-approved advanced certificate",
      "Detailed anatomy, physiology & the nervous system",
      "Ayurveda & massage for alignment",
      "Samkhya philosophy, Bhagavad Gita & Vigyan Bhairav Tantra meditation",
      "Trauma-informed teaching, Kirtan & sound healing",
    ],
  },
  focus: [
    "Advanced asana & alignment",
    "Anatomy & the nervous system",
    "Ayurveda & massage",
    "Trauma-informed teaching",
  ],
  overview: [
    "Unlike the 200-hour course, this track assumes existing teaching experience and shifts weight toward mentorship, observation of the student's own teaching style, and refinement rather than introducing new foundational material.",
    "Students take primary responsibility for planned classes with real students under supervision, with structured feedback sessions replacing much of the lecture format used at the 200-hour level.",
  ],
  whoCanJoin: [
    {
      icon: "graduation",
      title: "Certified Teachers",
      content:
        "Designed for graduates of a recognised 200-hour certification who want to go deeper than the foundation material.",
    },
    {
      icon: "users",
      title: "Working Teachers",
      content:
        "Refine your voice, sequencing, and adjustment skills through mentored classes taught to real students each week.",
    },
    {
      icon: "target",
      title: "Specialising Teachers",
      content:
        "Prepare to work with specific populations — beginners, injury-aware sequencing, or restorative practice — through an elective module.",
    },
    {
      icon: "compass",
      title: "Long-Term Students",
      content:
        "Continue a longer relationship with the school, building toward a combined 500-hour standing and joining the alumni network.",
    },
  ],
  designedFor: [
    "Certified teachers seeking advanced yoga teacher training in Goa",
    "Yogis who want to share the healing power of yoga with themselves and others",
    "Teachers who want to travel the world with deeper knowledge and confidence",
    "Professionals planning to work at a yoga studio or yoga retreat",
  ],
  prerequisites: [
    "Completed 200-hour yoga teacher training at a Yoga Alliance-approved school",
    "Active teaching experience preferred",
    "Health and accessibility needs shared before booking",
  ],
  whyChoose: [
    {
      icon: "users",
      title: "Yoga Alliance-approved",
      text: "A 300-hour Yoga Alliance-approved certificate from a leading advanced yoga teacher training school in Goa.",
    },
    {
      icon: "graduation",
      title: "Deeper anatomy & Ayurveda",
      text: "Detailed anatomy and the practical application of Ayurveda and its massage techniques to optimize asana alignment.",
    },
    {
      icon: "feather",
      title: "Vigyan Bhairav Tantra meditation",
      text: "Realize the true nature of consciousness through breath awareness, body centers, non-dual awareness, and contemplation.",
    },
    {
      icon: "target",
      title: "Trauma-informed teaching",
      text: "Specialized focus on teaching safely, inclusively, and with compassion.",
    },
    {
      icon: "award",
      title: "Kirtan & sound healing",
      text: "Group chanting and sound healing sessions enrich your practice and teaching toolkit.",
    },
    {
      icon: "network",
      title: "Small class sizes",
      text: "Personalized attention from a dedicated team of highly qualified teacher-trainers, with 24/7 support.",
    },
  ],
  curriculum: [
    {
      icon: "asana",
      title: "Advanced Asana & Alignment",
      content:
        "In-depth study of the Ashtanga primary series with emphasis on breath control (pranayama), bandhas, and drishti — complemented by Hatha, Vinyasa, Yin, and basic restorative yoga.",
    },
    {
      icon: "anatomy",
      title: "Anatomy, Physiology & the Nervous System",
      content:
        "Detailed exploration of anatomy and physiology, how they relate to the nervous system in yoga, and the integration of asana, pranayama, and mudra for healing and health.",
    },
    {
      icon: "adjustment",
      title: "Ayurveda & Massage for Alignment",
      content:
        "The practical application of Ayurveda and its massage techniques to optimize asana alignment and support the body's natural balance.",
    },
    {
      icon: "feather",
      title: "Philosophy — Samkhya & the Bhagavad Gita",
      content:
        "Deeper study of Samkhya philosophy, the Bhagavad Gita with practical examples, and commentaries over the Patanjali Yoga Sutras.",
    },
    {
      icon: "meditation",
      title: "Vigyan Bhairav Tantra Meditation",
      content:
        "Realizing the true nature of consciousness through breath awareness, concentration on body centers, non-dual awareness, mantra chanting, visual meditation, and contemplation.",
    },
    {
      icon: "heart",
      title: "Trauma-Informed Teaching",
      content:
        "Specialized focus on trauma-informed practices to teach safely, inclusively, and with compassion.",
    },
    {
      icon: "sparkles",
      title: "Kirtan & Sound Healing",
      content:
        "Group chanting and sound healing sessions to enrich your practice and teaching toolkit.",
    },
    {
      icon: "breath",
      title: "Pranayama, Mudra & Kriya",
      content:
        "Advanced breathwork, classical mudras, and purification techniques.",
    },
    {
      icon: "teaching",
      title: "Teaching Methodology & Practicum",
      content:
        "Class preparation, presentation, adjustment training, and supervised teaching practice with peer feedback.",
    },
  ],
  journey: [
    {
      icon: "arrival",
      label: "Arrival & Welcome",
      time: "Day 1",
      text: "Arrive, settle in, and meet a small cohort of certified teachers over orientation.",
    },
    {
      icon: "ceremony",
      label: "Opening Ceremony",
      time: "Day 1 · Evening",
      text: "An intention-setting ceremony marks the start of your advanced study.",
    },
    {
      icon: "foundation",
      label: "Reflective Practice Days",
      time: "Day 2–9",
      text: "Advanced personal practice and philosophy workshops re-anchor your teaching approach.",
    },
    {
      icon: "teaching",
      label: "Mentored Teaching Weeks",
      time: "Day 10–25",
      text: "Lead real classes with structured debriefs, plus your specialisation modules.",
    },
    {
      icon: "certification",
      label: "Certification & Check Out",
      time: "Day 26–27",
      text: "Final assessment, closing ceremony, and your 300-hour certification documents before departure.",
    },
  ],
  schedule: [
    ["07:00 – 08:00", "Pranayama, Shatkarma, Chanting"],
    ["08:00 – 08:15", "Tea / Coffee Break"],
    ["08:15 – 09:30", "Asana Practice"],
    ["09:30 – 10:45", "Breakfast"],
    ["11:00 – 12:30", "Anatomy / Philosophy / Ayurveda"],
    ["12:30 – 01:30", "Adjustment & Alignment"],
    ["01:30 – 02:30", "Lunch"],
    ["02:30 – 04:00", "Self-time / Rest / Karma Yoga"],
    ["04:00 – 05:30", "Teaching Practices"],
    ["05:30 – 07:00", "Meditation / Beach Practice & Games"],
    ["07:00 – 08:00", "Dinner"],
    ["08:00 – 10:00", "Outing / Kirtan / Goa Experience"],
    ["10:00", "Lights Out"],
  ],
  learningOutcomes: [
    "A 300-hour Yoga Alliance-approved advanced certificate",
    "Deeper understanding of your spiritual practice",
    "Skill in Hatha, Vinyasa, Yin, and basic restorative yoga teaching",
    "Foundations of alignment and trauma-informed teaching",
    "Multiple meditation techniques from the Vigyan Bhairav Tantra",
  ],
  inclusions: [
    "300-hour Yoga Alliance-approved certificate",
    "Three healthy vegetarian meals per day (Monday to Saturday morning)",
    "Clean, spacious beachside accommodation of your choice",
    "Hot water showers and Wi-Fi in each room",
    "Meditation music and unlimited filtered drinking water",
    "Course manual plus PDF library of spiritual and practical books",
    "24/7 student support",
  ],
  exclusions: ["Flights, visas, insurance", "Transfers", "Personal expenses"],
  accommodation: {
    overview:
      "Choose from mixed AC dorms, twin-sharing AC, or private rooms (AC and non-AC) near the beach in North Goa — with shops and restaurants nearby.",
    food: "Three healthy vegetarian meals per day (Monday to Saturday morning), prepared fresh to support your practice and recovery.",
    images: [
      {
        src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
        alt: "Residential campus and stay at The Hatha Yogashala Goa",
        caption: "Residential stay",
      },
      {
        src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
        alt: "Open-air practice hall at The Hatha Yogashala Goa",
        caption: "Open-air shala",
      },
      {
        src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
        alt: "Yoga practice near the beach at The Hatha Yogashala Goa",
        caption: "Beach practice",
      },
    ],
  },
  includedActivities: [
    "Kirtan and sound healing sessions",
    "Daily beach practice near Querim beach",
  ],
  price: "€899",
  privatePrice: "€1,399",
  courseDates: [
    {
      id: "300-mar-2026",
      start: "2026-03-01",
      end: "2026-03-27",
      label: "1 March – 27 March 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-apr-2026",
      start: "2026-04-01",
      end: "2026-04-27",
      label: "1 April – 27 April 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-may-2026",
      start: "2026-05-01",
      end: "2026-05-27",
      label: "1 May – 27 May 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-jun-2026",
      start: "2026-06-01",
      end: "2026-06-27",
      label: "1 June – 27 June 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-jul-2026",
      start: "2026-07-01",
      end: "2026-07-27",
      label: "1 July – 27 July 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-aug-2026",
      start: "2026-08-01",
      end: "2026-08-27",
      label: "1 August – 27 August 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-sep-2026",
      start: "2026-09-01",
      end: "2026-09-27",
      label: "1 September – 27 September 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-oct-2026",
      start: "2026-10-01",
      end: "2026-10-27",
      label: "1 October – 27 October 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-nov-2026",
      start: "2026-11-01",
      end: "2026-11-27",
      label: "1 November – 27 November 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-dec-2026",
      start: "2026-12-01",
      end: "2026-12-27",
      label: "1 December – 27 December 2026",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
    {
      id: "300-jan-2027",
      start: "2027-01-03",
      end: "2027-01-29",
      label: "3 January – 29 January 2027",
      availability: "Book Now",
      shared: "€899",
      private: "€1,399",
    },
  ],
  faq: [
    {
      question: "What is the prerequisite for the 300-hour course?",
      answer:
        "You should have completed a 200-hour yoga teacher training at a Yoga Alliance-approved school before joining.",
    },
    {
      question: "Is the 300-hour certification recognized?",
      answer:
        "Yes. The Hatha Yogashala is a Yoga Alliance-registered school in Goa, and the 300-hour course follows the approved advanced training syllabus.",
    },
    {
      question: "What makes this an advanced yoga teacher training in Goa?",
      answer:
        "It adds 300-hour advanced content in anatomy, Ayurveda and massage, Samkhya philosophy, Vigyan Bhairav Tantra meditation, sound healing, and trauma-informed teaching on top of your 200-hour foundation.",
    },
    {
      question: "What accommodation is provided?",
      answer:
        "Choose from mixed AC dorms, twin-sharing AC, or private rooms near the beach, with vegetarian meals, Wi-Fi, and hot water included.",
    },
    {
      question:
        "Can I combine the 100-hour and 200-hour courses into the 300-hour track?",
      answer:
        "Please contact us to plan a continuous certification pathway at The Hatha Yogashala.",
    },
    {
      question: "How long does the 300-hour yoga teacher training take?",
      answer: "The 300-hour advanced course in Goa runs for 27 days.",
    },
  ],
};

// ---------------------------------------------------------------------
// 22-DAY 200-HOUR FLEXIBLE YOGA TEACHER TRAINING
// ---------------------------------------------------------------------
const flexibleTwoHundredHour = {
  slug: "22-day-200-hour-flexible-yoga-teacher-training-goa",
   hours: "200-hour",
  name: "22-Day 200-Hour Flexible Yoga Teacher Training in Goa",
  image:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-04.webp",
  level: "Multi-Style & Flexible",
  certification: "Yoga Alliance USA Recognized RYS-200",
  outcome: "200-Hour Multi-Style Yoga Teacher Certification",
  perfectfor: "All levels, aspiring teachers, flexible learners",
  featured: true,
  cardBadge: "FLEXIBLE",
  cardSummary:
    "A 22-day holistic Yoga Alliance-approved 200-Hour training in Goa covering Hatha, Ashtanga, Vinyasa, Yin, Restorative, and Ayurveda with freedom to customize your schedule.",
  cardStats: {
    duration: "22 Days",
    level: "All Levels",
    certification: "Yoga Alliance RYT-200",
    batchSize: "Small batches",
  },
  pricing: {
    currency: "EUR",
    shared: "€799",
    private: "€1,199",
    roomOptions: [
      { type: "Mixed AC Dorm", price: "€799" },
      { type: "Twin Sharing AC", price: "€899" },
      { type: "Private Room Non-AC", price: "€1,099" },
      { type: "Private Room AC", price: "€1,199" },
      { type: "Private AC Room (2 Pax)", price: "€1,699" },
    ],
  },
  feeRows: [
    { facility: "Mixed AC Dorm", price: "€799" },
    { facility: "Twin Sharing AC", price: "€899" },
    { facility: "Private Room Non-AC", price: "€1,099" },
    { facility: "Private Room AC", price: "€1,199" },
    { facility: "Private AC Room for 2 Pax", price: "€1,699" },
  ],
  rating: 5.0,
  graduates: siteStats.graduates,
  whatsappMessage:
    "Hi The Hatha Yogashala, I'm interested in the 22-Day 200-Hour Flexible Yoga Teacher Training in Goa. Could you share upcoming dates and availability?",
  heroIntroduction:
    "At The Hatha Yogashala, our 200-Hour Yoga Teacher Training course offers a holistic approach to yoga, covering philosophy, meditation, anatomy, kriya, and the art of teaching. Over the span of 22 days in Goa, dive into the practices of Hatha, Vinyasa, Yin, and Restorative yoga techniques.",
  duration: "22 days",
  bestFor:
    "Beginners and experienced practitioners who want a comprehensive, flexible 200-Hour teacher training covering multiple styles in Goa.",
  outcome:
    "200-Hour Yoga Alliance approved Multi-Style Yoga Teacher Training certificate upon completion.",
  description:
    "22-Day 200-Hour Hatha, Ashtanga, Vinyasa, Ayurveda and Flexible Yoga Teacher Training in Goa. Open to all levels.",
  whatIs: {
    heading:
      "22-Day 200-Hour Hatha, Ashtanga, Vinyasa & Ayurveda Flexible Training",
    paragraphs: [
      "At The Hatha Yogashala, our 200-Hour Yoga Teacher Training course offers a holistic approach to yoga, covering philosophy, meditation, anatomy, kriya, and the art of teaching. This program is designed not only to prepare you to design and deliver yoga classes but also to help you integrate yoga into your daily life. Over the span of 22 days in Goa, you’ll dive into the practices of Hatha, Vinyasa, Yin, and Restorative yoga techniques.",
      "Our experienced and nurturing teachers will guide you through yoga philosophy, meditation, anatomy, alignment, teaching methodology, and pranayama breathing techniques. Although this 200-Hour Yoga Teacher Training is primarily designed for aspiring yoga teachers, it is open to all levels—from beginners to those with some yoga experience who wish to deepen their knowledge and self-healing practices.",
      "Upon completing the course, you will be eligible to register with the Yoga Alliance, allowing you to teach yoga anywhere in the world. Throughout the training, our instructors place a strong emphasis on asana practice, helping you enhance your posture and alignment for optimal physical benefits.",
    ],
    points: [
      "22-day holistic residential program in North Goa",
      "Yoga Alliance approved RYT-200 certification",
      "Multi-style: Hatha, Ashtanga Primary Series, Vinyasa & Ayurveda",
      "Supervised teaching practicum and individualized alignment adjustments",
    ],
  },
  curriculum: [
    {
      title: "Asana Classes (Ashtanga Primary Series & Hatha)",
      content:
        "Dedicated in-depth study of the Ashtanga primary series (A & B series) focusing on breath control (pranayama), bandhas, and drishti. Combined with foundational Hatha postures, yogic diet, body purification, and Sanskrit posture names.",
    },
    {
      title: "Pranayama, Mudras & Mantras",
      content:
        "Classical breath regulation, energy locks, hand mudras, and traditional Sanskrit mantra chanting for physical and subtle energy purification.",
    },
    {
      title: "Yoga Philosophy, History & Patanjali Sutras",
      content:
        "Origins of yoga, the 8 limbs (Ashtanga), commentaries over Patanjali Yoga Sutras, and integrating ancient wisdom into contemporary living.",
    },
    {
      title: "Alignments, Adjustments & Anatomy",
      content:
        "Functional anatomy and physiology, biomechanics, safe posture adjustments, prop usage, and injury prevention.",
    },
    {
      title: "Teaching Methodology & Practicum",
      content:
        "Class preparation, space setting, voice projection, student sequencing, class presentation, and hands-on teaching practice with mentor feedback.",
    },
    {
      title: "Ayurveda, Chakras & Karma Yoga",
      content:
        "Ayurveda fundamentals, body layers (Koshas), energy centers (Chakras), and selfless action (Karma Yoga) in daily ashram living.",
    },
  ],
  schedule: [
    ["07:00 am – 08:00 am", "Pranayama, Shatkarma, Chanting"],
    ["08:00 am – 08:15 am", "Tea / Coffee Break"],
    ["08:15 am – 09:30 am", "Asana (Hatha / Ashtanga)"],
    ["09:30 am – 10:45 am", "Healthy Breakfast"],
    ["11:00 am – 12:30 pm", "Anatomy / Philosophy / Ayurveda"],
    ["12:30 pm – 01:30 pm", "Adjustment & Alignment Lab"],
    ["01:30 pm – 02:30 pm", "Sattvic Lunch"],
    ["02:30 pm – 04:00 pm", "Self-time / Rest / Karma Yoga"],
    ["04:00 pm – 05:30 pm", "Teaching Practices & Methodology"],
    ["05:30 pm – 07:00 pm", "Meditation / Beach Practice Games"],
    ["07:00 pm – 08:00 pm", "Dinner"],
    ["08:00 pm – 10:00 pm", "Outing / Kirtan / Goa Experience"],
    ["10:00 pm", "Lights Out"],
  ],
  inclusions: [
    "200-Hour Yoga Alliance approved Multi-Style Yoga Teacher Training certificate",
    "Three healthy vegetarian meals daily (Monday to Saturday morning)",
    "Choice of clean and spacious accommodation near the beach",
    "Hot water showers and Wi-Fi in all rooms",
    "Meditation music and unlimited filtered drinking water",
    "Course manual and PDFs of spiritual and practical books from library",
    "Yoga Kit (mat and training accessories)",
    "24/7 student support",
  ],
  learningOutcomes: [
    "Ancient Yogic Philosophy (History and Origin)",
    "Practical Yoga Classes for Strength, Flexibility & Mobility",
    "Paths of Yoga and Different definitions of Yoga as per Yogic Texts",
    "All about Ashtanga Yoga (8 Limbs)",
    "Anatomy & Physiology and How to integrate it with Yoga",
    "Ayurveda - The Science of Life",
    "All about Chakras and different layers of our body",
    "Commentaries over Patanjali Yoga Sutras",
    "Usage of Props & Resources for Teaching",
    "Tons of eBooks & Resources on different topics related to Yoga",
  ],
  courseDates: [
    { label: "1 March 2026", availability: "Book Now" },
    { label: "1 April 2026", availability: "Book Now" },
    { label: "1 May 2026", availability: "Book Now" },
    { label: "1 June 2026", availability: "Book Now" },
    { label: "1 July 2026", availability: "Book Now" },
    { label: "1 August 2026", availability: "Book Now" },
    { label: "1 September 2026", availability: "Book Now" },
    { label: "1 October 2026", availability: "Book Now" },
    { label: "1 November 2026", availability: "Book Now" },
    { label: "1 December 2026", availability: "Book Now" },
    { label: "3 January 2027", availability: "Book Now" },
  ],
};

// ---------------------------------------------------------------------
// 200-HOUR ASHTANGA VINYASA YOGA TEACHER TRAINING
// ---------------------------------------------------------------------
const ashtangaTwoHundredHour = {
  slug: "200-hour-ashtanga-vinyasa-yoga-teacher-training-goa",
  hours: "200-hour",
  name: "200-Hour Ashtanga Vinyasa Yoga Teacher Training in Goa",
  image:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  level: "Ashtanga Vinyasa Specialist",
  certification: "200-Hour Yoga Alliance (RYS 200)",
  outcome: "200-Hour Ashtanga Vinyasa Yoga Teacher Certification",
  perfectfor: "Dynamic practitioners, aspiring Ashtanga Vinyasa instructors",
  cardBadge: "ASHTANGA",
  cardSummary:
    "An intensive 21-day Ashtanga Vinyasa certification in Goa focusing on the Primary Series, Ujjayi breath, bandhas, drishti, dynamic adjustments, and 6 Goa excursions.",
  cardStats: {
    duration: "21 Days",
    level: "All Levels",
    certification: "Yoga Alliance RYT-200",
    batchSize: "Small batches",
  },
  pricing: {
    currency: "EUR",
    shared: "€799",
    private: "€1,199",
    roomOptions: [
      { type: "Mixed AC Dorm", price: "€799" },
      { type: "Twin Sharing AC", price: "€899" },
      { type: "Private Room Non-AC", price: "€1,099" },
      { type: "Private Room AC", price: "€1,199" },
      { type: "Private AC Room (2 Pax)", price: "€1,699" },
    ],
  },
  feeRows: [
    { facility: "Mixed AC Dorm", price: "€799" },
    { facility: "Twin Sharing AC", price: "€899" },
    { facility: "Private Room Non-AC", price: "€1,099" },
    { facility: "Private Room AC", price: "€1,199" },
    { facility: "Private AC Room (2 Pax)", price: "€1,699" },
  ],
  rating: 5.0,
  graduates: siteStats.graduates,
  whatsappMessage:
    "Hi The Hatha Yogashala, I'm interested in the 200-Hour Ashtanga Vinyasa Yoga Teacher Training in Goa. Could you share upcoming dates and availability?",
  heroIntroduction:
    "Come join us in a journey of growth and discovery with our 200-Hour Ashtanga and Vinyasa Yoga Teacher Training Course at The Hatha Yogashala Goa. Over three weeks, be guided by seasoned instructors passionate about Hatha and Ashtanga Vinyasa Yoga.",
  duration: "21 days",
  bestFor:
    "Students looking for an immersive Ashtanga and Vinyasa flow teacher training program in North Goa.",
  outcome:
    "Yoga Alliance approved 200-Hour Ashtanga Vinyasa Yoga Teacher Training certificate.",
  description:
    "Join The Hatha Yogashala for a three-week journey of growth and discovery through Ashtanga and Vinyasa yoga. Led by seasoned instructors passionate about Hatha and Ashtanga Vinyasa, this course blends timeless tradition with contemporary teaching methods to help you become a confident, capable yoga teacher — while deepening your own connection to practice and purpose. Beginners are welcome.",
  whatIs: {
    heading: "200-Hour Ashtanga Vinyasa Yoga Teacher Training Course in Goa",
    paragraphs: [
      "Come join us in a journey of growth and discovery with our 200-Hour Ashtanga and Vinyasa Yoga Teacher Training Course. Over three weeks in beautiful Goa, you’ll be guided by a dedicated team of seasoned instructors who are passionate about Hatha and Ashtanga Vinyasa Yoga.",
      "This course is crafted to nurture your skills and knowledge, helping you become a confident and skilled yoga teacher. We blend timeless yoga traditions with fresh, modern insights to create a rich and fulfilling learning experience. Join us to unlock your potential and connect deeply with your practice and purpose.",
      "All our asana classes are dedicated to the in-depth study and practice of the Ashtanga primary series. In these sessions, asanas are practiced in a dynamic, set sequence, with a strong focus on mastering the A and B series. Emphasis is placed on breath control (pranayama), energy locks (bandhas), and the gaze (drishti).",
    ],
    points: [
      "21-day immersive Ashtanga Vinyasa certification",
      "Full Primary Series masterclasses (Series A & B)",
      "Pranayama, Bandhas, Drishti and Alignment adjustments",
      "6 Exciting Goa Excursions included (Temple visits, 100-Year Banyan tree, Russian banya ice bath, Mud bath, Ecstatic dance, Percussion workshop)",
    ],
  },
  curriculum: [
    {
      title: "Asana Classes (Ashtanga Primary Series & Hatha)",
      content:
        "Daily practice of the Ashtanga primary series A and B with precision on bandhas, drishti, breath, and Sanskrit posture names.",
    },
    {
      title: "Pranayama & Mantras",
      content:
        "Traditional breathwork and sacred mantra chanting to harmonize energy channels.",
    },
    {
      title: "Yoga Philosophy and History",
      content:
        "Eight limbs of Ashtanga yoga, Patanjali yoga sutras, and historical origins.",
    },
    {
      title: "Alignments, Adjustments & Methodology",
      content:
        "Hands-on adjustments, teaching skills, class presentation, and sequencing dynamic vinyasa classes.",
    },
    {
      title: "Anatomy, Kriyas & Mudras",
      content:
        "Applied biomechanics, muscle engagement, shatkarma cleansing, and mudras.",
    },
    {
      title: "Meditation & Karma Yoga",
      content:
        "Daily meditation practice, yoga nidra, and selfless action in daily life.",
    },
  ],
  schedule: [
    ["07:00 am – 08:00 am", "Pranayama, Shatkarma, Chanting"],
    ["08:00 am – 08:15 am", "Tea / Coffee Break"],
    ["08:15 am – 09:30 am", "Asana (Ashtanga Vinyasa)"],
    ["09:30 am – 10:45 am", "Breakfast"],
    ["11:00 am – 12:30 pm", "Anatomy / Philosophy / Ayurveda"],
    ["12:30 pm – 01:30 pm", "Adjustment & Alignment Lab"],
    ["01:30 pm – 02:30 pm", "Lunch"],
    ["02:30 pm – 04:00 pm", "Self-time / Rest / Karma Yoga"],
    ["04:00 pm – 05:30 pm", "Teaching Practices"],
    ["05:30 pm – 07:00 pm", "Meditation / Beach Practice Games"],
    ["07:00 pm – 08:00 pm", "Dinner"],
    ["08:00 pm – 10:00 pm", "Outing / Kirtan / Goa Experience"],
    ["10:00 pm", "Lights Out"],
  ],
  inclusions: [
    "Daily meditation or chanting sessions",
    "Comprehensive course manual and study materials",
    "Yoga Alliance registration eligibility on completion",
    "Opening and closing ceremonies",
    "21 nights of beachside accommodation",
    "Three daily vegetarian/vegan meals",
    "Full access to shala facilities, Wi-Fi campus, and chill-out zone",
    "Self-service laundry",
  ],
  excursions: [
    "Temple Visits — a cultural heritage tour of the region's ancient temples",
    "100-Year-Old Banyan Tree — a visit to this centuries-old natural landmark",
    "Sauna / Ice Bath (Russian Banya) — alternating heat and cold therapy",
    "Mud Bath — a natural, detoxifying skin treatment",
    "Ecstatic Dance — free-movement sessions to music and rhythm",
    "Percussion Workshops — hands-on musical and creative expression",
  ],
  learningOutcomes: [
    "Ancient Yogic Philosophy (History and Origin)",
    "Practical Yoga Classes for Strength, Flexibility & Mobility",
    "Paths of Yoga and Different definitions of Yoga as per Yogic Texts",
    "All about Ashtanga Yoga (8 Limbs)",
    "Anatomy & Physiology and How to integrate it with Yoga",
    "Ayurveda - The Science of Life",
    "All about Chakras and different layers of our body",
    "Commentaries over Patanjali Yoga Sutras",
    "Usage of the Props & Resources for Teaching",
    "Tons of eBooks & Resources on different topics related to Yoga",
  ],
  courseDates: [
    { label: "1 March 2026", availability: "Book Now" },
    { label: "1 April 2026", availability: "Book Now" },
    { label: "1 May 2026", availability: "Book Now" },
    { label: "1 June 2026", availability: "Book Now" },
    { label: "1 July 2026", availability: "Book Now" },
    { label: "1 August 2026", availability: "Book Now" },
    { label: "1 September 2026", availability: "Book Now" },
    { label: "1 October 2026", availability: "Book Now" },
    { label: "1 November 2026", availability: "Book Now" },
    { label: "1 December 2026", availability: "Book Now" },
    { label: "3 January 2027", availability: "Book Now" },
  ],
};

// ---------------------------------------------------------------------
// AERIAL YOGA TEACHER TRAINING
// ---------------------------------------------------------------------
const aerialTtc = {
  slug: "aerial-yoga-teacher-training-goa",
   hours: "50-hour",
  name: "Aerial Yoga Teacher Training in Goa",
  image:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-08.webp",
  level: "Aerial Specialist",
  certification: "50-Hour Yoga Alliance Approved",
  outcome: "50-Hour Aerial Yoga Teacher Certification",
  perfectfor: "Yogis and instructors seeking aerial hammock mastery",
  cardBadge: "AERIAL",
  cardSummary:
    "A 7-day 50-hour Aerial Yoga Teacher Training in Goa covering aerial hammock poses, safe rigging, spinal decompression, and therapeutic fly sequencing.",
  cardStats: {
    duration: "7 Days",
    level: "All Levels",
    certification: "Yoga Alliance",
    batchSize: "Small batches",
  },
  pricing: {
    currency: "EUR",
    shared: "€849",
    private: "€1,199",
    roomOptions: [
      { type: "Mixed AC Dorm", price: "€849" },
      { type: "Twin Sharing AC", price: "€949" },
      { type: "Private Room Non-AC", price: "€999" },
      { type: "Private Room AC", price: "€1,199" },
    ],
  },
  feeRows: [
    { facility: "Mixed AC Dorm", price: "€849" },
    { facility: "Twin Sharing AC", price: "€949" },
    { facility: "Private Room Non-AC", price: "€999" },
    { facility: "Private Room AC", price: "€1,199" },
  ],
  rating: 4.9,
  graduates: siteStats.graduates,
  whatsappMessage:
    "Hi The Hatha Yogashala, I'm interested in the Aerial Yoga Teacher Training in Goa. Could you share upcoming dates and availability?",
  heroIntroduction:
    "Elevate your practice with our 50-Hour Aerial Yoga Teacher Training in Goa at The Hatha Yogashala. Over 7 days, immerse yourself in aerial yoga — mastering graceful teaching technique alongside the technical science of working with the hammock.",
  duration: "7 days",
  bestFor:
    "Beginners with limited time seeking a focused introduction to aerial yoga and foundational technique, as well as certified teachers wanting to add aerial expertise to their offering.",
  outcome:
    "50-Hour Yoga Alliance approved Aerial Yoga Teacher Training certificate.",
  description:
    "Elevate your practice with The Hatha Yogashala's 50-Hour Aerial Yoga Teacher Training. Over seven days, immerse yourself in aerial yoga — mastering graceful teaching technique alongside the technical science of working with the hammock. This course is designed to refine skill, build confidence, and deepen your understanding of aerial movement.",
  whatIs: {
    heading: "Aerial Yoga Teacher Training Course in Goa",
    paragraphs: [
      "Elevate your practice with our 50-hour Aerial Yoga Teacher Training in Goa. Over the course of 7 days, immerse yourself in the world of aerial yoga, mastering both the art of graceful teaching and the science of aerial techniques. This training is crafted to refine your skills, boost your confidence, and deepen your understanding of aerial yoga.",
      "You’ll explore a variety of unique aerial poses and sequences, learn essential safety measures, and develop effective teaching strategies. Our program provides advanced training in aerial poses, therapeutic techniques for different age groups, and a thorough understanding of anatomy and hands-on adjustments.",
      "Whether you’re a dedicated yogi or aspiring instructor, this course will transform you into a skilled aerial yoga teacher, certified by Yoga Alliance. Join us to unlock new dimensions of your practice and teaching journey.",
    ],
    points: [
      "7-day intensive residential aerial training",
      "Silk hammock safety, knots, and rigging fundamentals",
      "Spinal decompression, inversions & restorative aerial flows",
      "50-Hour Yoga Alliance approved teacher certification",
    ],
  },
  curriculum: [
    {
      title: "Aerial Asana & Sequencing",
      content:
        "Grounded and aerial asana drawing on the Ashtanga primary series structure, pranayama, bandhas, drishti, hammock poses, transitions, floating flows, and restorative suspensions.",
    },
    {
      title: "Rigging, Safety & Equipment Care",
      content:
        "Proper hammock heights, daisy chains, carabiners, structural rigging safety, and student weight distributions.",
    },
    {
      title: "Anatomy of Inversions & Decompression",
      content:
        "Spine mechanics, pelvic alignment, shoulder girdle stabilization in fabric, and contraindications.",
    },
    {
      title: "Teaching Methodology & Hands-on Spotting",
      content:
        "Safe hands-on spotting techniques, verbal cueing while suspended, and lesson plan structuring.",
    },
    {
      title: "Floating Meditation & Yoga Nidra",
      content:
        "Cocoon relaxation, breath regulation in hammock, and sound healing integration.",
    },
  ],
  schedule: [
    ["07:00 am – 08:00 am", "Pranayama, Shatkarma, Chanting"],
    ["08:00 am – 08:15 am", "Tea / Coffee Break"],
    ["08:15 am – 09:30 am", "Aerial Asana & Hammock Practice"],
    ["09:30 am – 10:45 am", "Breakfast"],
    ["11:00 am – 12:30 pm", "Aerial Anatomy / Rigging Safety"],
    ["12:30 pm – 01:30 pm", "Hands-on Spotting & Adjustments"],
    ["01:30 pm – 02:30 pm", "Lunch"],
    ["02:30 pm – 04:00 pm", "Rest / Self-study"],
    ["04:00 pm – 05:30 pm", "Teaching Practices & Sequencing"],
    ["05:30 pm – 07:00 pm", "Floating Meditation / Yoga Nidra"],
    ["07:00 pm – 08:00 pm", "Dinner"],
    ["08:00 pm – 10:00 pm", "Evening Satsang / Goa Experience"],
    ["10:00 pm", "Lights Out"],
  ],
  inclusions: [
    "50-Hour Yoga Alliance approved Aerial Yoga certificate",
    "Three vegetarian meals daily (Monday–Saturday mornings)",
    "Beachside accommodation options",
    "Hot water, in-room Wi-Fi, meditation music, unlimited filtered water",
    "Course manual plus digital spiritual and practical library",
    "Yoga kit",
    "24/7 student support",
  ],
  learningOutcomes: [
    "Complete aerial hammock posture repertoire and transitions",
    "Safety rigging protocols, equipment inspection, and spotting",
    "Spinal decompression and therapeutic aerial adjustments",
    "Confidence in designing and teaching full 60–90 minute aerial classes",
    "Yoga Alliance recognized teaching credential",
  ],
  courseDates: [
    { label: "1 March 2026", availability: "Book Now" },
    { label: "1 April 2026", availability: "Book Now" },
    { label: "1 May 2026", availability: "Book Now" },
    { label: "1 June 2026", availability: "Book Now" },
    { label: "1 July 2026", availability: "Book Now" },
    { label: "1 August 2026", availability: "Book Now" },
    { label: "1 September 2026", availability: "Book Now" },
    { label: "1 October 2026", availability: "Book Now" },
    { label: "1 November 2026", availability: "Book Now" },
    { label: "1 December 2026", availability: "Book Now" },
    { label: "3 January 2027", availability: "Book Now" },
  ],
};

const mainCourses = [
  hundredHour,
  twoHundredHour,
  threeHundredHour,
  flexibleTwoHundredHour,
  ashtangaTwoHundredHour,
  aerialTtc,
];

// ---------------------------------------------------------------------
// SHORT COURSES
// Kept intentionally minimal — DO NOT publish these routes until real
// curriculum, level, duration, and facilitator details are supplied.
// `published: false` should be checked in generateStaticParams so these
// slugs return 404 rather than a thin/placeholder page going live.
// ---------------------------------------------------------------------
const retreatGallery = [
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    alt: "Morning yoga practice at The Hatha Yogashala Goa beachside campus",
    caption: "Morning practice by the coast",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
    alt: "Students practicing Hatha yoga asana alignment in open-air shala",
    caption: "Guided Hatha practice",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
    alt: "Lush tropical ashram campus and peaceful gardens in North Goa",
    caption: "Residential stay",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-coconut-palms-sunlight-02.webp",
    alt: "Balcony view overlooking coconut palms at yoga retreat campus",
    caption: "Time to rest and explore",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp",
    alt: "Pranayama breathwork and guided meditation practice in Goa",
    caption: "Breath and meditation",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-02.webp",
    alt: "Restorative yoga alignment practice using chairs and yoga props",
    caption: "Personal guidance",
  },
];

// All exported course arrays share the same business defaults, so every
// consumer (homepage, course index, related-courses, pricing) can rely on
// `image`, `price`, `date`, etc. being present.
export const courses = mainCourses.map(withDefaults);
export const teacherTrainings = mainCourses.map(withDefaults);

// ---------------------------------------------------------------------
// RETREATS — day-count still drives the template, but with genuinely
// different itinerary emphasis per length rather than only a category
// label swap, so 3/5/7-day pages aren't near-duplicates either.
// ---------------------------------------------------------------------
const retreatProfiles = {
  3: {
    category: "3-Day Retreat",
    tagline: "Discover. Recharge. Thrive.",
    emphasis:
      "Step away from the noise of daily life and into three days of stillness, movement, and community at The Hatha Yogashala, Goa. This short, immersive retreat is designed for travelers who want a genuine reset — a blend of yoga practice, internal cleansing, sound healing, and the natural beauty of Goa's coastline, all held within a warm and supportive community.",
    excursionsStory:
      'Beyond the mat, your days open up into the best of Goa: sunset beach sessions, waterfall visits, and evening kirtan circles for the soul. Ice baths and sauna sessions support recovery and deepen the reset, while our evening "Goa Experience" outings give you a taste of local culture, markets, and coastline beyond the retreat walls. Playful beach games and acro yoga round out the day with lightness and connection.',
    checkIn: "11:00 AM",
    checkOut: "1:00 PM",
    whoFor: [
      "Travellers with limited time seeking a quick reset",
      "Weekend wellness escape seekers",
      "Guests adding a short retreat to a Goa beach holiday",
    ],
  },
  5: {
    category: "5-Day Retreat",
    tagline: "Rebalance Your Soul in Goa's Bliss",
    emphasis:
      "Five days offers the space to truly settle into practice. This retreat combines daily Hatha yoga, philosophy and anatomy sessions, cleansing rituals, and restorative downtime, giving you enough time to build routine, deepen your understanding, and leave feeling genuinely renewed.",
    excursionsStory:
      "With five days to explore, you'll experience more of what makes Goa special — waterfall trips, sunset beaches, and kirtan evenings woven around your practice. Ice bath and sauna sessions offer recovery between deeper philosophy and anatomy sessions, while nightly Goa Experience outings introduce you to local flavor, culture, and community beyond the retreat.",
    checkIn: "11:00 AM",
    checkOut: "1:00 PM",
    whoFor: [
      "Practitioners wanting genuine rest alongside practice",
      "Returning students and holistic wellness seekers",
      "Couples or solo travellers needing a vital life reset",
    ],
  },
  7: {
    category: "7-Day Retreat",
    tagline: "Discover Harmony in Goa's Calm",
    emphasis:
      "A full week at The Hatha Yogashala is where transformation really begins to take root. Seven days of consistent Hatha practice, philosophy, ayurveda, sound healing, and community give you time to move past the initial adjustment and into a genuine rhythm — leaving with tools and habits you can carry home.",
    excursionsStory:
      "A full week gives the richest excursion experience: multiple waterfall and beach outings, evening kirtan, and repeated Goa Experience trips into local markets and culture. Ice bath and sauna rituals become part of your rhythm, and beach games and acro yoga sessions build genuine camaraderie within the group over the course of the week.",
    checkIn: "11:00 AM",
    checkOut: "1:00 PM",
    whoFor: [
      "Practitioners ready for a full-week wellness immersion",
      "Solo travellers wanting deep transformation and rest",
    ],
  },
};

const retreatWhatIs = {
  3: {
    heading: "Retreat Highlights",
    paragraphs: [
      "Step away from daily noise into three days of stillness, movement, and coastal rejuvenation in North Goa.",
    ],
    points: [
      "3 days of daily Hatha practice, breathwork & internal cleansing",
      "Waterfall and beach outings, ice baths & sauna",
      "Evening kirtan and a warm, close-knit community",
    ],
  },
  5: {
    heading: "Retreat Highlights",
    paragraphs: [
      "Five days of immersive practice and rest to reset your rhythm and restore vital energy.",
    ],
    points: [
      "5 days of daily Hatha practice, philosophy & Ayurveda",
      "Waterfall and beach outings, ice baths & sauna",
      "Evening kirtan and a warm, close-knit community",
    ],
  },
  7: {
    heading: "Retreat Highlights",
    paragraphs: [
      "A seven-day retreat gives you the space to step completely out of routine and establish a lasting rhythm of health and inner calm.",
    ],
    points: [
      "7 days of daily Hatha practice, philosophy & Ayurveda",
      "Waterfall and beach outings, ice baths & sauna",
      "Evening kirtan and a warm, close-knit community",
    ],
  },
};

const standardRetreatSchedule = [
  ["07:00 – 08:00 AM", "Internal Cleansing"],
  ["08:00 – 08:15 AM", "Tea / Coffee Break"],
  ["08:15 – 09:30 AM", "Yoga Practice"],
  ["09:30 – 10:45 AM", "Breakfast"],
  ["11:00 AM – 12:30 PM", "Anatomy / Philosophy / Ayurveda Basics"],
  ["12:30 – 01:30 PM", "Sound Healing / Breath Work / Massage"],
  ["01:30 – 02:30 PM", "Lunch"],
  ["02:30 – 04:00 PM", "Self-Reflection / Rest"],
  ["04:00 – 05:30 PM", "Ice Bath / Sauna / Waterfalls / Kirtan"],
  ["05:30 – 07:00 PM", "Meditation / Beach Practice Games / Acro Yoga"],
  ["07:00 – 08:00 PM", "Dinner"],
  ["08:00 – 10:00 PM", "Outing / Goa Experience"],
  ["10:00 PM", "Lights Out"],
];

const standardAccommodationOptions5 = [
  {
    name: "AC Dorm",
    description:
      "Comfortable, climate-controlled shared accommodation with individual secure storage, clean linens, and attached bathrooms — perfect for solo travelers who enjoy a friendly community atmosphere.",
  },
  {
    name: "Twin Sharing",
    description:
      "A harmonious balance of privacy and companionship featuring twin beds, air conditioning, attached modern bathroom, and peaceful tropical garden or balcony views.",
  },
  {
    name: "Private Room",
    description:
      "A serene, private sanctuary with a plush double bed, air conditioning, private attached bathroom, and dedicated workspace — ideal for guests seeking restful solitude.",
  },
];

const standardAccommodationOptions7 = [
  {
    name: "AC Dorm",
    description:
      "Comfortable, climate-controlled shared accommodation with individual secure storage, clean linens, and attached bathrooms — perfect for solo travelers who enjoy a friendly community atmosphere.",
  },
  {
    name: "Twin Sharing",
    description:
      "A harmonious balance of privacy and companionship featuring twin beds, air conditioning, attached modern bathroom, and peaceful tropical garden or balcony views.",
  },
  {
    name: "Private Room",
    description:
      "A serene, private sanctuary with a plush double bed, air conditioning, private attached bathroom, and dedicated workspace — ideal for guests seeking restful solitude.",
  },
];

export const retreats = [
  ...[3, 5, 7].map((days) => {
    const profile = retreatProfiles[days];
    const feeRowsByDays = {
      3: [
        { facility: "Mixed AC Dorm", price: "€199" },
        { facility: "Twin Sharing", price: "€299" },
        { facility: "Private Room", price: "€399" },
      ],
      5: [
        { facility: "Mixed AC Dorm", price: "€299" },
        { facility: "Twin Sharing", price: "€399" },
        { facility: "Private Room", price: "€499" },
      ],
      7: [
        { facility: "AC Dorm", price: "€399" },
        { facility: "Twin Sharing", price: "€499" },
        { facility: "Private Room", price: "€599" },
      ],
    };
    const benefitsByDays = {
      3: [
        "Daily Hatha yoga & internal cleansing",
        "Ice baths, sauna, waterfalls & kirtan",
        "Goa Experience outings & beach practice",
      ],
      5: [
        "Daily Hatha yoga, anatomy & philosophy",
        "Sound healing, breathwork & massage",
        "Sunset beach sessions & Goa cultural outings",
      ],
      7: [
        "Full 7-day deep transformational immersion",
        "Ayurveda, philosophy, sound healing & massage",
        "Multiple waterfall & beach outings + kirtan circles",
      ],
    };
    return {
      slug: `${days}-day-yoga-retreat-goa`,
      days,
      name: `${days}-Day Yoga Retreat in Goa`,
      category: profile.category,
      description: profile.emphasis,
      rating: days === 5 ? 5.0 : 4.9,
      whatIs: retreatWhatIs[days],
      benefits: benefitsByDays[days],
      price: { 3: "€199", 5: "€299", 7: "€399" }[days],
      priceNumeric: { 3: 199, 5: 299, 7: 399 }[days],
      priceCurrency: "EUR",
      feeTableName: `${days} Days Yoga Retreat`,
      facilityHeader: "Facilities",
      priceHeader: "Price In Euro",
      feeRows: feeRowsByDays[days],
      accommodationOptions:
        days === 7
          ? standardAccommodationOptions7
          : standardAccommodationOptions5,
      excursionsStory: profile.excursionsStory,
      image:
        {
          3: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
          5: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-04.webp",
          7: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-02.webp",
        }[days] ||
        "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
      date: "Monthly retreat start dates year-round",
      availability: "Book Now",
      duration: `${days} days`,
      checkIn: "11:00 AM",
      checkOut: "1:00 PM",
      level: "All levels",
      location: "Querim, North Goa, India",
      room:
        days === 7
          ? "Female AC dorm, twin sharing, or private room"
          : "Mixed AC dorm, female AC dorm, twin sharing, triple sharing, or private room",
      meals: "Three vegetarian meals per day (vegan/GF on request)",
      overview: profile.emphasis,
      distinctFocus:
        "Each retreat is a personal-practice experience, not a teacher-training course or professional certification.",
      whoFor: profile.whoFor,
      itinerary: Array.from({ length: days }, (_, index) => [
        `Day ${index + 1}`,
        index === 0
          ? "Arrival (11:00 AM check-in), welcome orientation, opening yoga, and dinner"
          : index === days - 1
            ? "Morning practice, closing reflection, lunch, and departure (1:00 PM check-out)"
            : "Morning cleansing & yoga, sound healing/massage, excursions, and sunset beach meditation",
      ]),
      dailySchedule: standardRetreatSchedule,
      gallery: [],
      includedActivities: [
        "Temple visits (cultural heritage tour)",
        "100-Year-Old Banyan Tree visit",
        "Sauna / ice bath (Russian Banya)",
        "Mud bath therapy",
        "Ecstatic dance",
        "Percussion workshops",
      ],
      excludedActivities: [],
      optionalGoaIdeas: [
        "Explore coastal walks and nearby Arambol beaches",
        "Visit local spice farms and sweet water lake",
        "Rest, read, and reflect at your own pace",
      ],
    };
  }),
  {
    slug: "5-day-awaken-and-align-yoga-retreat-goa",
    days: 5,
    name: "5-Day Awaken & Align Yoga Retreat in Goa",
    category: "Kundalini & Iyengar Fusion",
    description:
      "The Awaken & Align Retreat is a five-day journey into Iyengar-style asana, Tantra philosophy, and Kundalini and Chakra Sadhana. Structured around a clear arc — arrival, deep practice, and closing ceremony — this retreat is built for those seeking a more focused, tradition-rooted exploration of yoga and inner alignment.",
    whatIs: {
      heading: "What Is The Awaken & Align Retreat?",
      paragraphs: [
        "The Awaken & Align Retreat is a five-day journey into Iyengar-style asana, Tantra philosophy, and Kundalini and Chakra Sadhana. Structured around a clear arc — arrival, deep practice, and closing ceremony — this retreat is built for those seeking a more focused, tradition-rooted exploration of yoga and inner alignment.",
        "Facilitated by Yogendra (20+ years Iyengar Yoga expertise) and Abin (30 years Tantra, Samkhya & Yoga initiated in Kaula tradition), this retreat combines precise posture alignment with energy awakening in North Goa.",
      ],
      points: [
        "Iyengar-Style Asana & Postural Alignment Mastery",
        "Tantra Philosophy & Sacred Teachings",
        "Kundalini & Chakra Sadhana Energy Work",
        "Kaya Shuddhi Cleansing & Meditative Breathwork",
      ],
    },
    benefits: [
      "Precision Iyengar posture alignment & props mastery",
      "Kundalini Kriyas, Chakra Sadhana & Tantra philosophy",
      "Gourmet wellness cuisine & beachside serene accommodation",
    ],
    price: "₹21,000",
    priceNumeric: 21000,
    priceCurrency: "INR",
    feeTableName: "5 Days Awaken & Align Retreat",
    facilityHeader: "Sharing Type",
    priceHeader: "Cost",
    feeRows: [
      { facility: "Twin Sharing", price: "21000" },
      { facility: "Private Room", price: "25000" },
      { facility: "Twin Sharing Private Room", price: "39000" },
    ],
    accommodationOptions: [
      {
        name: "Twin Sharing",
        description:
          "The Twin Sharing room is perfect for friends or solo travelers looking to share a space with a fellow yogi. These rooms offer a balance of privacy and companionship, featuring comfortable beds, modern amenities, and a peaceful ambiance that promotes rest and rejuvenation.",
      },
      {
        name: "Private Room",
        description:
          "Our Private Rooms are designed for those who seek solitude and personal space. These rooms offer ultimate privacy and comfort, featuring plush beds, modern amenities, and a tranquil environment that allows you to unwind completely. Perfect for individuals who value their own space while enjoying the benefits of a retreat.",
      },
      {
        name: "Twin Sharing (Private Room)",
        description:
          "Ideal for couples or friends who want private deluxe accommodation with two beds, air conditioning, and attached modern bathroom.",
      },
    ],
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-02.webp",
    date: "Monthly retreat start dates year-round",
    availability: "Book Now",
    duration: "5 Days, 4 Nights",
    level: "All levels",
    location: "Near Keri Beach, Arambol, North Goa",
    room: "Twin sharing or private room",
    meals: "Three wholesome, soul-nourishing meals daily",
    overview:
      "The Awaken & Align Retreat is a five-day journey into Iyengar-style asana, Tantra philosophy, and Kundalini and Chakra Sadhana. Structured around a clear arc — arrival, deep practice, and closing ceremony — this retreat is built for those seeking a more focused, tradition-rooted exploration of yoga and inner alignment.",
    distinctFocus:
      "Each retreat is a personal-practice experience, not a teacher-training course or professional certification.",
    whoFor: [
      "Seekers wanting deep postural alignment and Kundalini energy awakening",
      "Practitioners looking to learn authentic Tantra and Chakra Sadhana",
      "Travellers wanting a boutique, small-group coastal retreat experience",
    ],
    scheduleMatrix: {
      columns: ["Time", "Day 01", "Day 02 / 03 / 04", "Day 05"],
      rows: [
        ["07:00 – 07:45 AM", "–", "Kaya Shuddhi", "Kaya Shuddhi"],
        ["08:00 – 09:30 AM", "–", "Iyengar Style Asana", "Iyengar Style Asana"],
        ["09:30 – 10:15 AM", "–", "Breakfast", "Breakfast"],
        [
          "10:15 AM – 12:00 PM",
          "–",
          "Beach Time / Self-Time",
          "Tantra Philosophy, Kundalini and Chakra Sadhana",
        ],
        ["12:00 – 01:00 PM", "–", "Tantra Philosophy", "Closing Ceremony"],
        ["01:00 – 02:00 PM", "–", "Lunch", "Lunch"],
        [
          "02:00 – 04:30 PM",
          "Check-In*",
          "Beach Time / Self-Time",
          "Beach Time / Self-Time",
        ],
        [
          "04:30 – 05:30 PM",
          "Orientation",
          "Iyengar Style Asana",
          "Check-Out*",
        ],
        [
          "05:45 – 07:15 PM",
          "Kundalini and Chakra Sadhana",
          "Kundalini and Chakra Sadhana",
          "–",
        ],
        ["07:15 – 08:15 PM", "Dinner", "Dinner", "–"],
        ["10:00 PM", "Lights Off", "Lights Off", "–"],
      ],
    },
    itinerary: [
      [
        "Day 1",
        "Check-in (02:00–04:30 PM), Orientation (04:30 PM), Kundalini & Chakra Sadhana (05:45 PM), Dinner (07:15 PM)",
      ],
      [
        "Days 2–4",
        "Kaya Shuddhi (07:00 AM), Iyengar Asana (08:00 AM), Breakfast, Beach Time, Tantra Philosophy (12:00 PM), Lunch, Afternoon Asana (04:30 PM), Kundalini & Chakra Sadhana (05:45 PM), Dinner",
      ],
      [
        "Day 5",
        "Kaya Shuddhi (07:00 AM), Iyengar Asana (08:00 AM), Breakfast, Tantra & Chakra Sadhana (10:15 AM), Closing Ceremony (12:00 PM), Lunch, Beach Time, Check-Out (04:30–05:30 PM)",
      ],
    ],
    dailySchedule: [
      ["07:00 – 07:45 AM", "Kaya Shuddhi (Cleansing)"],
      ["08:00 – 09:30 AM", "Iyengar-Style Asana"],
      ["09:30 – 10:15 AM", "Breakfast"],
      ["10:15 AM – 12:00 PM", "Beach Time / Self-Time"],
      ["12:00 – 01:00 PM", "Tantra Philosophy"],
      ["01:00 – 02:00 PM", "Lunch"],
      ["02:00 – 04:30 PM", "Beach Time / Self-Time"],
      ["04:30 – 05:30 PM", "Iyengar-Style Asana"],
      ["05:45 – 07:15 PM", "Kundalini & Chakra Sadhana"],
      ["07:15 – 08:15 PM", "Dinner"],
      ["10:00 PM", "Lights Off"],
    ],
    gallery: [],
    includedActivities: [
      "Two Iyengar asana classes & two Kundalini sessions daily",
      "Tantra philosophy lectures and practical techniques",
      "Kaya Shuddhi & Shatkarma cleansing practices",
    ],
    excludedActivities: [],
    optionalGoaIdeas: [
      "Walk to unspoiled Keri Beach",
      "Explore Arambol sweet water lake and sunset viewpoints",
    ],
  },
  {
    slug: "aerial-yoga-retreat-goa",
    days: 5,
    name: "Aerial Yoga Retreat in Goa",
    category: "Aerial & Flow",
    hidePricingAndSidebar: true,
    description:
      "Take your practice off the mat and into the air. At The Hatha Yogashala, our Aerial Yoga Retreat blends the grounded principles of Hatha yoga with the playful, decompressive power of the aerial hammock — helping you build strength, release tension in the spine, and rediscover a sense of lightness in both body and mind.",
    whatIs: {
      heading: "What Is This",
      paragraphs: [
        "Aerial yoga uses a soft fabric hammock, suspended at hip height, to support and deepen traditional yoga postures. It allows for gentle spinal decompression and inversions that are normally difficult or inaccessible on the ground, while building core strength and flexibility. No prior aerial or advanced yoga experience is needed — our instructors guide you through each pose safely, from basic supported stretches to more playful inversions, at a pace that suits your body. It's an experience that feels equal parts practice and play, leaving you both challenged and refreshed.",
      ],
      points: [
        "Daily aerial hammock classes and safe guided inversions",
        "Gentle spinal decompression and joint-friendly flexibility",
        "Guided meditation, sunrise beach yoga & holistic health workshops",
        "Cozy eco-friendly accommodation with garden & pool access",
      ],
    },
    benefits: [
      "Anti-gravity spinal decompression & joint relief",
      "Guided meditation & sunrise beach yoga sessions",
      "Holistic wellness workshops & hammock sound baths",
    ],
    testimonials: [
      {
        name: "Retreat Guest",
        country: "International Guest",
        tag: "Aerial Yoga Retreat",
        rating: 5,
        text: "I came in nervous about being upside down in a hammock and left feeling stronger and lighter than I have in years. The teachers made it feel completely safe.",
      },
      {
        name: "Retreat Guest",
        country: "International Guest",
        tag: "Aerial Yoga Retreat",
        rating: 5,
        text: "Aerial yoga at The Hatha Yogashala was the highlight of my trip to Goa. My back pain eased within days, and the whole experience felt joyful, not just therapeutic.",
      },
      {
        name: "Retreat Guest",
        country: "International Guest",
        tag: "Aerial Yoga Retreat",
        rating: 5,
        text: "Such a unique way to experience yoga. The instructors were patient with beginners like me, and by the end of the week I was doing inversions I never thought possible.",
      },
    ],
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-08.webp",
    date: "Flexible dates available on enquiry",
    availability: "Inquire Now",
    duration: "5 days",
    level: "All levels",
    location: "Querim, North Goa, India",
    room: "Sanctuary accommodation in North Goa",
    meals: "Three vegetarian meals per day",
    overview:
      "Take your practice off the mat and into the air. At The Hatha Yogashala, our Aerial Yoga Retreat blends the grounded principles of Hatha yoga with the playful, decompressive power of the aerial hammock — helping you build strength, release tension in the spine, and rediscover a sense of lightness in both body and mind.",
    distinctFocus:
      "Each retreat is a personal-practice experience, not a teacher-training course or professional certification.",
    whoFor: [
      "Anyone curious to try aerial yoga in a safe, guided setting",
      "Yogis wanting joint decompression and deeper flexibility",
      "Travellers seeking a fun, uplifting, and restorative coastal retreat",
    ],
    itinerary: [],
    gallery: [],
    includedActivities: [],
    excludedActivities: [],
    optionalGoaIdeas: [
      "Paddleboarding and ocean swims at Querim beach",
      "Sunset walks around Arambol sweet water lake",
      "Unwinding at beachside cafes",
    ],
  },
  {
    slug: "ayurvedic-massage-therapy-goa",
    days: 7,
    name: "Ayurvedic Massage Therapy in Goa",
    category: "Ayurveda & Healing",
    hidePricingAndSidebar: true,
    description:
      "Rooted in one of the world's oldest healing traditions, our Ayurvedic Massage experience at The Hatha Yogashala is designed to restore balance to body and mind. Using warm herbal oils and time-honored techniques, each session is tailored to support relaxation, detoxification, and deep physical release alongside your yoga practice.",
    whatIs: {
      heading: "What Is This",
      paragraphs: [
        "Ayurvedic massage, or Abhyanga, is a therapeutic full-body treatment rooted in Ayurveda, India's traditional system of medicine. Warm, herb-infused oils are massaged into the body using rhythmic strokes suited to your individual constitution, or dosha, helping to release muscular tension, stimulate circulation, and calm the nervous system. At The Hatha Yogashala, our practitioners are trained in traditional Ayurvedic methods and work with you to choose oils and techniques that complement your retreat experience, whether your focus is recovery, relaxation, or deeper energetic balance.",
      ],
      points: [
        "Abhyanga — full-body massage with warm herbal oils",
        "Shirodhara — continuous stream of warm oil across the forehead",
        "Pinda Sweda — herbal poultice massage",
        "Marma Point Therapy — massage targeting vital energy points",
        "Daily gentle restorative yoga & dosha-balancing nutrition",
      ],
    },
    benefits: [
      "Abhyanga & Shirodhara traditional therapies",
      "Pinda Sweda & Marma point body healing",
      "Restorative yoga, pranayama & nervous system reset",
    ],
    testimonials: [
      {
        name: "Retreat Guest",
        country: "International Guest",
        tag: "Ayurvedic Massage",
        rating: 5,
        text: "The Ayurvedic massage was pure bliss after a week of intense practice. My shoulders and back felt completely reset, and the herbal oils left my skin glowing.",
      },
      {
        name: "Retreat Guest",
        country: "International Guest",
        tag: "Ayurvedic Massage",
        rating: 5,
        text: "I've had massages before, but this felt different — more intentional, more connected to what my body actually needed. Truly restorative.",
      },
      {
        name: "Retreat Guest",
        country: "International Guest",
        tag: "Ayurvedic Massage",
        rating: 5,
        text: "A perfect complement to the yoga sessions. I left feeling like my whole system had been recalibrated.",
      },
    ],
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ayurvedic-cooking-class-kitchen-02.webp",
    date: "Flexible dates available on enquiry",
    availability: "Inquire Now",
    duration: "7 days",
    level: "All levels",
    location: "Querim, North Goa, India",
    room: "Sanctuary accommodation in North Goa",
    meals: "Three vegetarian meals per day",
    overview:
      "Rooted in one of the world's oldest healing traditions, our Ayurvedic Massage experience at The Hatha Yogashala is designed to restore balance to body and mind. Using warm herbal oils and time-honored techniques, each session is tailored to support relaxation, detoxification, and deep physical release alongside your yoga practice.",
    distinctFocus:
      "Each retreat is a personal-practice experience, not a teacher-training course or professional certification.",
    whoFor: [
      "Those experiencing physical exhaustion, muscle tension, or burnout",
      "Seekers of authentic Indian Ayurvedic massage and dosha balancing",
      "Anyone wanting a slower, deeply nurturing restorative retreat",
    ],
    itinerary: [],
    gallery: [],
    includedActivities: [],
    excludedActivities: [],
    optionalGoaIdeas: [
      "Herbal spice plantation excursions",
      "Quiet sunset walks on Querim beach",
      "Ayurvedic cooking masterclass",
    ],
  },
  {
    slug: "yoga-festivals-goa",
    days: 3,
    name: "Yoga Festivals in Goa",
    category: "Festival & Community",
    description:
      "Once a year, The Hatha Yogashala opens its doors for a celebration of yoga in all its forms. Our Yoga Festival brings together practitioners, teachers, musicians, and seekers from around the world for days of shared practice, workshops, live music, and community — a joyful gathering for anyone who loves yoga, in whatever form that takes.",
    whatIs: {
      heading: "What Is This Festival Gathering",
      paragraphs: [
        "The Yoga Festival is a multi-day gathering featuring a rotating lineup of yoga styles, workshops, and wellness sessions led by teachers from different traditions and backgrounds — from Hatha and Vinyasa to Kundalini, sound healing, and meditation. Alongside daily practice sessions, the festival includes live kirtan and music evenings, communal meals, and open spaces for connection between practitioners of all levels. It's designed to feel less like a structured course and more like a celebration — an opportunity to sample new styles, meet fellow yogis, and soak in the energy of a shared community event.",
      ],
      points: [
        "Daily multi-level yoga classes & guided meditation",
        "Workshops on alignment, breathwork & yoga philosophy",
        "Wellness talks on nutrition, mindfulness & self-care",
        "Live music, ecstatic dance performances & marketplace",
        "All-inclusive celebration pass with healthy meals and stay",
      ],
    },
    benefits: [
      "Daily yoga classes, meditation & alignment workshops",
      "Live music, ecstatic dance & wellness marketplace",
      "Healthy meals & vibrant global community connection",
    ],
    testimonials: [
      {
        name: "Festival Guest",
        country: "International Guest",
        tag: "Yoga Festival",
        rating: 5,
        text: "The variety was incredible — I tried styles of yoga I'd never even heard of and left with a completely refreshed practice.",
      },
      {
        name: "Festival Guest",
        country: "International Guest",
        tag: "Yoga Festival",
        rating: 5,
        text: "The evening kirtan sessions gave me chills every night. The whole festival had this beautiful, welcoming energy.",
      },
      {
        name: "Festival Guest",
        country: "International Guest",
        tag: "Yoga Festival",
        rating: 5,
        text: "I came alone and left with a community. The festival is as much about connection as it is about yoga.",
      },
    ],
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-birthday-celebration-community-gathering-01.webp",
    date: "Flexible & Annual dates available on enquiry",
    availability: "Booking Open",
    duration: "3 days",
    level: "All levels",
    location: "Querim, North Goa, India",
    room: "Sanctuary accommodation in North Goa",
    meals: "Three vegetarian meals per day",
    overview:
      "Once a year, The Hatha Yogashala opens its doors for a celebration of yoga in all its forms. Our Yoga Festival brings together practitioners, teachers, musicians, and seekers from around the world for days of shared practice, workshops, live music, and community — a joyful gathering for anyone who loves yoga, in whatever form that takes.",
    distinctFocus:
      "Each retreat is a personal-practice experience, not a teacher-training course or professional certification.",
    whoFor: [
      "Community seekers and festival enthusiasts",
      "Yogis looking to experience multiple styles and live music",
      "Travellers wanting a high-energy, uplifting weekend retreat",
    ],
    itinerary: [],
    gallery: [],
    includedActivities: [],
    excludedActivities: [],
    optionalGoaIdeas: [
      "Arambol beach drum circle at sunset",
      "Exploring bohemian cafes and artisan stalls",
      "River kayaking and coastal nature trails",
    ],
  },
];

export function getCourse(slug) {
  return courses.find((course) => course.slug === slug);
}

export function getRetreat(slug) {
  return retreats.find((retreat) => retreat.slug === slug);
}

/**
 * Use in app/courses/[slug]/page.jsx:
 *
 *   export function generateStaticParams() {
 *     return courses.filter((c) => c.published !== false).map((c) => ({ slug: c.slug }));
 *   }
 *
 * This keeps placeholder-only courses out of the sitemap and out of
 * Google's index until real content lands — the single highest-leverage
 * SEO fix available right now.
 */
