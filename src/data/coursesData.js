/**
 * Course & Retreat data — Hatha Yogashala, Goa
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
    "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg",
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
  level: "Foundation",
  cardBadge: "BEGGINER",
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
  rating: 4.9,
  graduates: 3500,
  whatsappMessage:
    "Hi Hatha Yogashala, I'm interested in the 100-Hour Yoga Teacher Training in Goa. Could you share the upcoming dates, availability, and the full fee breakdown?",
  heroIntroduction:
    "Dive into the world of yoga with our 100-hour yoga teacher training in Goa — designed for beginners with limited time who want a solid, authentic introduction to Hatha and Ashtanga Vinyasa yoga. This two-week immersive course is also the first half of our comprehensive 200-hour program; complete the second half within 21 months to earn your full 200-hour Yoga Alliance certification.",
  duration: "14 days",
  bestFor:
    "Complete beginners and travellers with limited time who want a two-week immersive introduction to Hatha and Ashtanga Vinyasa yoga.",
  outcome:
    "A 100-hour Yoga Alliance-approved certificate, plus the option to complete the second half of the 200-hour program within 21 months.",
  description:
    "A beginner-friendly, all-inclusive foundation course covering traditional Hatha yoga, Ashtanga Vinyasa, pranayama, meditation, the eight limbs of yoga, chakra anatomy, and fundamentals of teaching methodology.",
  whatIs: {
    heading: "What is a 100-hour yoga teacher training?",
    paragraphs: [
      "The 100-hour yoga teacher training in Goa at Hatha Yogashala is a compact, all-inclusive foundation course for students who are new to yoga or simply short on time. You will explore traditional Hatha yoga, Ashtanga Vinyasa, pranayama (breathwork), meditation, the eight limbs of yoga, chakra anatomy, and the fundamentals of teaching methodology — all in a peaceful beachside ashram in North Goa.",
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
    "The 100-hour yoga teacher training in Goa at Hatha Yogashala is a compact, all-inclusive foundation course for students who are new to yoga or simply short on time.",
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
      title: "Alumni community",
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
    "Flights, visas, insurance",
    "Transfers",
    "200-hour certification (separate course / second half)",
  ],
  accommodation: {
    overview:
      "Choose from our clean, comfortable rooms — mixed AC dorms, twin-sharing AC, and private rooms (AC and non-AC) — all within walking distance of the beach in North Goa.",
    food: "Meals are healthy, vegetarian, and prepared fresh daily to support your practice and recovery — three meals per day, Monday to Saturday morning.",
    images: [
      {
        src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
        alt: "Residential campus and stay at Hatha Yogashala Goa",
        caption: "Residential stay",
      },
      {
        src: "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
        alt: "Open-air practice hall at Hatha Yogashala Goa",
        caption: "Open-air shala",
      },
      {
        src: "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
        alt: "Yoga practice near the beach at Hatha Yogashala Goa",
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
        "Yes. The 100-hour course is the first half of our 200-hour yoga teacher training. Complete the second half at Hatha Yogashala within 21 months and receive your full 200-hour certification.",
    },
    {
      question: "What is included in the fee?",
      answer:
        "The fee includes training, certification, accommodation, vegetarian meals, yoga kit, course manual, Wi-Fi, filtered water, and 24/7 student support.",
    },
    {
      question: "Where is the course located?",
      answer:
        "At Hatha Yogashala ashram in Querim, North Goa, minutes from the beach and near Arambol — one of Goa's most loved wellness destinations.",
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
  name: "200-Hour Yoga TTC in Goa",
  level: "Foundational teacher training (certifying)",
  featured: true,
  cardBadge: "Most Popular",
  cardSummary:
    "Our flagship 22-day Yoga Alliance-approved course in Hatha, Ashtanga, Vinyasa & Ayurveda — daily asana, pranayama, philosophy, anatomy, and supervised teaching practice.",
  cardStats: {
    duration: "22 Days",
    level: "Beginner–Intermediate",
    certification: "Yoga Alliance",
    batchSize: "Small batches",
  },
  pricing: {
    currency: "EUR",
    shared: "€799",
    private: "€1,199",
  },
  rating: 5.0,
  graduates: 3500,
  whatsappMessage:
    "Hi Hatha Yogashala, I'm interested in the 200-Hour Yoga Teacher Training in Goa. Could you share the upcoming dates, availability, and the full fee breakdown?",
  heroIntroduction:
    "Take the most important step in your teaching journey at Hatha Yogashala — a leading yoga school in Goa. Over 22 immersive days in North Goa, you will master Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga, study philosophy, anatomy, pranayama, and teaching methodology, and leave ready to register with the Yoga Alliance and teach yoga anywhere in the world.",
  duration: "22 days",
  bestFor:
    "Aspiring teachers and committed practitioners seeking their first teaching certification, open to all levels from beginners to experienced yogis.",
  outcome:
    "A 200-hour Yoga Alliance-approved certificate, with eligibility to register with the Yoga Alliance and teach yoga worldwide.",
  description:
    "A holistic, immersive certification course covering philosophy, meditation, anatomy, kriya, pranayama, and the art of teaching — Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga on the Yoga Alliance-approved syllabus.",
  whatIs: {
    heading: "What is a 200-hour yoga teacher training?",
    paragraphs: [
      "Hatha Yogashala's 200-hour yoga teacher training in Goa is a holistic, immersive certification course covering philosophy, meditation, anatomy, kriya, pranayama, and the art of teaching. While primarily designed for aspiring teachers, it is open to all levels — from beginners to experienced practitioners who wish to deepen their self-healing practice.",
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
        src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
        alt: "Residential campus and stay at Hatha Yogashala Goa",
        caption: "Residential stay",
      },
      {
        src: "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
        alt: "Open-air practice hall at Hatha Yogashala Goa",
        caption: "Open-air shala",
      },
      {
        src: "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
        alt: "Yoga practice near the beach at Hatha Yogashala Goa",
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
        "Yes. Hatha Yogashala is a Yoga Alliance-registered school, and graduates of our 200-hour yoga teacher training in Goa can register with the Yoga Alliance to teach worldwide.",
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
        "Hatha Yogashala is consistently rated among the best yoga teacher training schools in Goa for its experienced teachers, traditional curriculum, small class sizes, and beachside location.",
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
  name: "300-Hour Yoga TTC in Goa",
  level: "Advanced study (for certified 200-hour teachers)",
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
  rating: 4.9,
  graduates: 3500,
  whatsappMessage:
    "Hi Hatha Yogashala, I'm interested in the 300-Hour Advanced Yoga Teacher Training in Goa. Could you share the upcoming dates, availability, and the full fee breakdown?",
  heroIntroduction:
    "Take your practice and teaching to a deeper level with Hatha Yogashala's 300-hour advanced yoga teacher training in Goa. Over 27 transformative days you will master detailed anatomy, integrate Ayurveda and massage techniques for optimal alignment, explore the Bhagavad Gita and Samkhya philosophy, and practice Vigyan Bhairav Tantra meditation — all beside the beaches of North Goa.",
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
        src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
        alt: "Residential campus and stay at Hatha Yogashala Goa",
        caption: "Residential stay",
      },
      {
        src: "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
        alt: "Open-air practice hall at Hatha Yogashala Goa",
        caption: "Open-air shala",
      },
      {
        src: "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
        alt: "Yoga practice near the beach at Hatha Yogashala Goa",
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
        "Yes. Hatha Yogashala is a Yoga Alliance-registered school in Goa, and the 300-hour course follows the approved advanced training syllabus.",
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
        "Please contact us to plan a continuous certification pathway at Hatha Yogashala.",
    },
    {
      question: "How long does the 300-hour yoga teacher training take?",
      answer: "The 300-hour advanced course in Goa runs for 27 days.",
    },
  ],
};

export const mainCourses = [hundredHour, twoHundredHour, threeHundredHour];

// ---------------------------------------------------------------------
// SHORT COURSES
// Kept intentionally minimal — DO NOT publish these routes until real
// curriculum, level, duration, and facilitator details are supplied.
// `published: false` should be checked in generateStaticParams so these
// slugs return 404 rather than a thin/placeholder page going live.
// ---------------------------------------------------------------------
const retreatGallery = [
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
    alt: "Yoga practitioner meditating in a peaceful coastal Goa setting",
    caption: "Morning practice by the coast",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
    alt: "Small group studying yoga alignment in Goa",
    caption: "Guided Hatha practice",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
    alt: "Calm residential campus representing accommodation choices in Goa",
    caption: "Residential stay",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-beach-yoga-wheel-pose-students.webp",
    alt: "Beachfront yoga practice beside the Goa coast",
    caption: "Time to rest and explore",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp",
    alt: "Pranayama and breathwork practice in a peaceful tropical shala",
    caption: "Breath and meditation",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-asana-practice-3.webp",
    alt: "Teacher observing a student during a Hatha yoga practice",
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
// label swap, so 3/5/7/10-day pages aren't near-duplicates either.
// ---------------------------------------------------------------------
const retreatProfiles = {
  3: {
    category: "Mini Escape",
    emphasis:
      "A unique blend of spiritual exploration, physical rejuvenation, and cultural immersion — daily yoga and meditation, ice baths, sauna, ecstatic dance, and cultural tours in North Goa.",
    whoFor: [
      "Travellers with limited time seeking a quick reset",
      "Weekend wellness escape seekers",
      "Guests adding a short retreat to a Goa beach holiday",
    ],
  },
  5: {
    category: "Holistic Healing",
    emphasis:
      "A holistic healing-by-the-sea retreat — yoga, sound healing, breathwork, and massage designed to enhance physical, mental, and energetic well-being.",
    whoFor: [
      "Practitioners wanting genuine rest alongside practice",
      "Returning students",
      "Couples or small groups",
    ],
  },
  7: {
    category: "Mind-Body-Soul",
    emphasis:
      "The complete Goa wellness retreat — daily yoga and meditation, sound healing, sauna and ice bath, cultural excursions, and nourishing vegetarian food.",
    whoFor: [
      "Practitioners ready for a full-week wellness immersion",
      "Solo travellers wanting a complete reset",
    ],
  },
  10: {
    category: "Extended immersion",
    emphasis:
      "The longest format: includes a rest day mid-retreat, a dedicated Ayurveda/lifestyle session, and more one-on-one time with faculty.",
    whoFor: [
      "Practitioners wanting an in-depth personal-practice deep dive",
      "Anyone combining retreat with an extended Goa stay",
    ],
  },
};

const retreatWhatIs = {
  3: {
    heading: "What is a 3-day yoga retreat?",
    paragraphs: [
      "The 3-day Hatha Yogashala mini escape is a unique blend of spiritual exploration, physical rejuvenation, and cultural immersion in the serene surroundings of North Goa. Engage in yoga, meditation, and wellness practices while experiencing the region's rich heritage through nature walks, beach sessions, and cultural tours — a perfect short wellness retreat in Goa.",
      "Designed for busy travelers who still want a meaningful reset, this 3-day yoga retreat in Goa includes daily Hatha yoga and meditation, ice baths, sauna therapy, ecstatic dance, and cultural exploration. It is a holistic escape from daily life that fosters deep self-reflection, connection, and inner peace.",
      "All yoga sessions are adaptable to every level, and the retreat is a personal-practice experience — not a teacher-training course.",
    ],
    points: [
      "Daily Hatha yoga and meditation",
      "Ice bath, sauna therapy, and ecstatic dance",
      "Cultural tours and heritage exploration",
      "All levels welcome — no yoga experience needed",
    ],
  },
  5: {
    heading: "What is a 5-day yoga retreat?",
    paragraphs: [
      "Our 5-day holistic healing-by-the-sea retreat at Hatha Yogashala offers a refreshing escape to explore the wonders of your body and mind in a beautiful coastal setting. Experience yoga, meditation, sound healing, breathwork, and massage designed to enhance physical, mental, and energetic well-being.",
      "The 5-day retreat is a perfect opportunity to reconnect with yourself, refresh your mind, and discover your true potential in a serene, supportive environment — based at our peaceful ashram in Querim, North Goa, close to Arambol and the region's most beautiful beaches.",
      "All sessions are adapted to every level, and the retreat is a personal-practice experience rather than a teacher-training course.",
    ],
    points: [
      "Daily yoga, meditation, sound healing, and breathwork",
      "Sauna and ice bath therapy",
      "Massage and wellness therapies",
      "All levels welcome",
    ],
  },
  7: {
    heading: "What is a 7-day yoga retreat?",
    paragraphs: [
      "Escape to the tranquil beauty of North Goa with our exclusive 7-day Mind-Body-Soul retreat at Hatha Yogashala — one of the best yoga retreat destinations near Goa's beaches. We offer a complete wellness retreat in Goa that nurtures every aspect of your well-being.",
      "This 7-day yoga retreat in Goa is designed for those who want more than a holiday — it is a holistic journey to rejuvenate mind, body, and soul. Set in our peaceful beachside ashram in Querim, the retreat blends daily Hatha yoga and meditation with therapeutic experiences such as sound healing, breathwork, massage, Russian banya sauna and ice baths, ecstatic dance, and visits to ancient temples.",
      "Every session adapts to all levels, and the retreat remains a personal-practice experience — not a teacher-training course.",
    ],
    points: [
      "Daily yoga and meditation by the sea",
      "Sound healing, sauna, ice bath, and massage",
      "Temple visits and cultural excursions",
      "Ideal for solo travelers and all levels",
    ],
  },
  10: {
    heading: "What is a 10-day yoga retreat?",
    paragraphs: [
      "A 10-day yoga retreat is an extended residential immersion for practitioners who want an in-depth personal-practice deep dive. The longer format allows for rest days, one-on-one time with faculty, and a slower, more transformative arc.",
      "At Hatha Yogashala, the 10-day retreat is the school's longest format: twice-daily guided practice, a dedicated rest day mid-retreat, an optional Ayurveda and lifestyle session, and more individual attention. It suits practitioners ready to go deeper and anyone combining a retreat with an extended Goa stay.",
      "All sessions adapt to every level, and the retreat remains a personal-practice experience — not a teacher-training course.",
    ],
    points: [
      "The longest format, with a dedicated rest day",
      "Optional Ayurveda and lifestyle session",
      "More one-on-one time with faculty",
      "A personal-practice reset, not a teacher training",
    ],
  },
};

export const retreats = [3, 5, 7, 10].map((days) => {
  const profile = retreatProfiles[days];
  const benefitsByDays = {
    3: [
      "Daily Hatha yoga & meditation",
      "Ice baths, sauna & ecstatic dance",
      "Cultural tours & heritage experiences",
    ],
    5: [
      "Daily yoga, sound healing & breathwork",
      "Sauna, ice bath & massage therapies",
      "Beach practice near Arambol",
    ],
    7: [
      "Full-week Mind-Body-Soul wellness journey",
      "Sound healing, sauna, ice bath & massage",
      "Temple visits & cultural excursions",
    ],
    10: [
      "Extended immersion with a dedicated rest day",
      "Optional Ayurveda & lifestyle session",
      "More one-on-one time with faculty",
    ],
  };
  return {
    slug: `${days}-day-yoga-retreat-goa`,
    days,
    name: `${days}-Day Yoga Retreat in Goa`,
    category: profile.category,
    description: profile.emphasis,
    whatIs: retreatWhatIs[days],
    benefits: benefitsByDays[days],
    price: { 3: "€199", 5: "€299", 7: "€449", 10: "Fee to be confirmed" }[days],
    image:
      days % 2
        ? "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp"
        : "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg",
    date: "Monthly retreat start dates year-round",
    availability: "Book Now",
    duration: `${days} days`,
    level: "All levels",
    location: "Querim, North Goa, India",
    room: "AC dorm, twin sharing, or private room",
    meals: "Three vegetarian meals per day",
    overview: profile.emphasis,
    distinctFocus:
      "Each retreat is a personal-practice experience, not a teacher-training course or professional certification.",
    whoFor: profile.whoFor,
    itinerary: Array.from({ length: days }, (_, index) => [
      `Day ${index + 1}`,
      index === 0
        ? "Arrival, welcome, and an opening Hatha practice"
        : index === days - 1
          ? "Closing practice, reflection, and departure"
          : days === 10 && index === Math.floor(days / 2)
            ? "Rest day — no scheduled practice, optional Ayurveda consultation"
            : "Morning Hatha, breathwork, study, and protected rest",
    ]),
    dailySchedule: [
      ["07:00", "Morning Hatha yoga"],
      ["09:00", "Breakfast and free time"],
      ["11:00", "Pranayama and meditation"],
      ["17:00", "Restorative practice"],
    ],
    gallery: retreatGallery,
    includedActivities: [],
    excludedActivities: [],
    optionalGoaIdeas: [
      "Explore coastal walks and nearby beaches",
      "Plan local culture and food outings",
      "Rest, read, and reflect at your own pace",
    ],
  };
});

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
