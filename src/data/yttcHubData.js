/**
 * Yoga TTC hub page content — Hatha Yogashala, Goa
 *
 * Mirrors the retreat page data model (retreatData.js) so the teacher
 * training hub can share the same layout system — BookingSidebar,
 * MobileStickyBar, MonthGuide, BookingForm — without duplicating the
 * retreat data module. Campus-level content (teachers, meals, best
 * time to visit, experiences) is imported from retreatData because it
 * describes the same shala.
 */

import {
  accommodationFacilities,
  bestTimeToVisit,
  freeTimeIdeas,
  goaExperiences,
  mealPhilosophy,
  meals,
  retreatTeachers,
  testimonials as allTestimonials,
} from "@/data/retreatData";

const IMAGES = {
  hero: "/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg",
  class: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg",
  coast: "/images/tha_hatha/the-hatha-yogashala-goa-beach-yoga-wheel-pose-students.webp",
  campus: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
  pranayama: "/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp",
  hatha: "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
  philosophy: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-philosophy-class.jpg",
};

export const yttcTrustBadges = [
  "Yoga Alliance Registered (RYS 100/200/300)",
  "Ministry of AYUSH Approved",
  "Small Batches (12–15 Students)",
  "500+ Graduates · 30+ Countries",
  "Residential · All Meals Included",
];

export const yttcWhatIs = {
  heading: "A complete education in yoga — theory, practice & teaching",
  paragraphs: [
    "A yoga teacher training course (TTC or YTTC) is an intensive, residential programme that takes you from student to teacher. Rather than simply practising yoga, you study why each posture works, how to sequence classes safely, and how to read and guide a room of students.",
    "At Hatha Yogashala in Querim, North Goa, our courses are built on the traditional Hatha and Ashtanga Vinyasa syllabus and approved by the Yoga Alliance USA. You live on campus, eat sattvic vegetarian meals, and practise twice daily — creating the total immersion that accelerates learning in ways a weekly studio class cannot match.",
    "Whether you want to teach professionally, deepen your personal practice, or simply understand the ancient science of yoga more completely — a residential TTC in Goa is the clearest path.",
  ],
  points: [
    "Traditional Hatha & Ashtanga Vinyasa yoga",
    "Pranayama, breathwork & meditation",
    "Yoga philosophy & the eight limbs of Patanjali",
    "Anatomy, physiology & the energetic body",
    "Teaching methodology & class sequencing",
    "Ayurveda — the science of life",
    "Safe alignment & hands-on adjustments",
    "Mudras, kriyas & sacred texts",
  ],
};

export const yttcOverview = [
  "Hatha Yogashala sits in the quiet fishing village of Querim in North Goa — minutes from the beach, far from the tourist crowds, and surrounded by the kind of natural quiet that makes deep study possible. Our campus is a residential ashram: a place to live yoga, not just practise it.",
  "Our three yoga teacher training courses — 100-hour, 200-hour, and 300-hour — follow a structured Yoga Alliance-approved syllabus, with small batches of 12–15 students. Each course is fully residential: you sleep on campus, eat together, and study with teachers who have guided students from over 30 countries through certification.",
];

export const yttcOverviewTags = [
  "Hatha Yoga",
  "Ashtanga Vinyasa",
  "Pranayama",
  "Meditation",
  "Yoga Philosophy",
  "Anatomy",
  "Ayurveda",
  "Teaching Methodology",
  "Yin Yoga",
  "Restorative Yoga",
];

export const yttcWhyChoose = [
  {
    icon: "badge",
    title: "Yoga Alliance certified",
    text: "Earn a globally recognised Yoga Alliance-approved certificate. Register as a RYT and teach worldwide after graduation.",
  },
  {
    icon: "users",
    title: "Small, personal batches",
    text: "Batches of 12–15 students mean you get individual feedback, tailored adjustments, and a teacher who knows your practice.",
  },
  {
    icon: "leaf",
    title: "Traditional Hatha curriculum",
    text: "Rooted in classical Hatha and Ashtanga Vinyasa, the syllabus covers asana, pranayama, philosophy, anatomy, and pedagogy.",
  },
  {
    icon: "map",
    title: "Beachside ashram in North Goa",
    text: "Live and study steps from Querim beach — morning practice at sunrise, evening sessions as the light fades over the palms.",
  },
  {
    icon: "home",
    title: "Fully residential and all-inclusive",
    text: "Accommodation, three sattvic vegetarian meals daily, yoga kit, course manual, and 24/7 student support are all included.",
  },
  {
    icon: "grad",
    title: "Experienced faculty",
    text: "Your teachers have decades of combined practice and have guided students from over 30 countries through certification.",
  },
  {
    icon: "compass",
    title: "Clear certification pathway",
    text: "Progress from 100H to 200H to 300H with a structured continuation policy — credits from each level carry forward.",
  },
  {
    icon: "heart",
    title: "Supportive global community",
    text: "Join a global alumni network spanning 45+ countries, with ongoing resources and community access after graduation.",
  },
];

export const yttcHighlights = [
  "Yoga Alliance-approved certificate (RYS 100/200/300)",
  "Sunrise beach practice at Querim beach",
  "Small batches of 12–15 students",
  "Daily teaching practicum with real feedback",
  "Alignment & adjustment labs",
  "Kirtan, chanting & cultural evenings",
  "Guided meditation & yoga nidra sessions",
  "Ayurveda & yogic lifestyle workshops",
  "Course manual, PDF library & yoga kit included",
  "Alumni community access after graduation",
];

export const yttcLevels = [
  {
    badge: "Foundation",
    hours: "100",
    duration: "14 days",
    level: "Beginner",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-asana-practice-3.webp",
    imageAlt: "Students practising Hatha yoga at the 100-hour TTC in Goa",
    text: "A two-week immersive foundation course for complete beginners — Yoga Alliance-approved, beachside, and all-inclusive. Also the first half of our 200-hour program.",
    price: 699,
    slug: "100-hour-yoga-teacher-training-goa",
    highlights: [
      "Hatha & Ashtanga Vinyasa A + B",
      "Pranayama, meditation & philosophy",
      "Anatomy, Ayurveda & teaching basics",
      "Pathway to 200-hour (within 21 months)",
    ],
  },
  {
    badge: "Certification",
    hours: "200",
    duration: "22 days",
    level: "All levels",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg",
    imageAlt:
      "Group Hatha yoga class during the 200-hour TTC at Hatha Yogashala Goa",
    text: "The globally recognised standard for yoga teacher certification. Cover Hatha, Ashtanga Vinyasa, Yin, Restorative yoga, anatomy, philosophy, and full teaching methodology.",
    price: 799,
    slug: "200-hour-yoga-teacher-training-goa",
    highlights: [
      "Full Hatha, Ashtanga, Yin & Restorative",
      "Complete anatomy & philosophy syllabus",
      "Teaching practicum with real-world feedback",
      "RYT-200 Yoga Alliance registration eligible",
    ],
    featured: true,
  },
  {
    badge: "Advanced",
    hours: "300",
    duration: "27 days",
    level: "200H graduates",
    image: IMAGES.philosophy,
    imageAlt:
      "Advanced philosophy class during the 300-hour TTC at Hatha Yogashala Goa",
    text: "Advanced post-graduate training for certified 200-hour teachers. Deepen your philosophy, refine your teaching, and earn your RYT-500 Yoga Alliance credential.",
    price: 899,
    slug: "300-hour-yoga-teacher-training-goa",
    highlights: [
      "Advanced asana, sequencing & methodology",
      "In-depth philosophy & Sanskrit",
      "Specialisations: Yin, Restorative, Pranayama",
      "RYT-500 Yoga Alliance registration eligible",
    ],
  },
];

export const yttcDailySchedule = [
  ["06:30 – 07:00", "Morning bells & self-practice"],
  ["07:00 – 08:00", "Pranayama, Shatkarma & Chanting"],
  ["08:15 – 09:30", "Asana class (Hatha or Ashtanga Vinyasa)"],
  ["09:30 – 10:45", "Breakfast"],
  ["11:00 – 12:30", "Anatomy · Philosophy · Ayurveda"],
  ["12:30 – 01:30", "Alignment & Adjustment lab"],
  ["01:30 – 02:30", "Lunch"],
  ["02:30 – 04:00", "Self-study · Rest · Karma Yoga"],
  ["04:00 – 05:30", "Teaching practicum"],
  ["05:30 – 07:00", "Meditation · Beach practice"],
  ["07:00 – 08:00", "Dinner"],
  ["08:00 – 10:00", "Kirtan · Goa outing · Silence"],
  ["10:00", "Lights out"],
];

const sharedGallery = [
  {
    src: IMAGES.campus,
    alt: "Shared student twin room at the Hatha Yogashala Goa ashram",
    caption: "Shared twin room",
  },
  {
    src: IMAGES.coast,
    alt: "Palm-lined garden grounds of the TTC campus in Querim, North Goa",
    caption: "Garden setting",
  },
  {
    src: IMAGES.class,
    alt: "Open-air practice shala used by teacher training students",
    caption: "Open-air practice hall",
  },
];

const privateGallery = [
  {
    src: IMAGES.campus,
    alt: "Private student room with attached bathroom at the Goa ashram",
    caption: "Private room",
  },
  {
    src: IMAGES.hero,
    alt: "Quiet corner of the residential TTC campus in North Goa",
    caption: "Study nook",
  },
  {
    src: IMAGES.coast,
    alt: "Path from the private rooms down to Querim beach",
    caption: "Beach access",
  },
];

export const yttcIncluded = [
  "Yoga Alliance-approved certificate",
  "Three healthy vegetarian meals daily",
  "Clean residential accommodation (shared or private)",
  "Hot water, Wi-Fi & filtered drinking water",
  "Course manual & PDF spiritual library",
  "Yoga kit (mat, blocks, strap, bag)",
  "Beach practice & kirtan evenings",
  "24/7 student support throughout the course",
];

export const yttcNotIncluded = [
  "Flights, visa & travel insurance",
  "Airport or station transfers",
  "Personal toiletries & laundry",
  "Optional Goa excursions & activities",
];

export const yttcDates = [
  { id: "monthly", label: "New batches start every month", availability: "100-, 200- & 300-hour intakes" },
  { id: "season", label: "Peak season: October – March", availability: "Dry, warm Goan winter" },
  { id: "size", label: "Small batches: 12–15 students", availability: "Early booking recommended" },
];

// Graduate reviews only — the retreat-tagged stories stay on retreat pages.
export const yttcTestimonials = allTestimonials.filter((item) =>
  item.tag?.endsWith("YTT"),
);

export const yttcFaqs = [
  {
    question: "Is the yoga teacher training Yoga Alliance certified?",
    answer:
      "Yes. Hatha Yogashala is a Yoga Alliance-registered school in India (RYS 100, RYS 200, RYS 300). Graduates of our 100-hour, 200-hour, and 300-hour teacher trainings in Goa can register with the Yoga Alliance as RYT-100, RYT-200, or RYT-300 certified yoga teachers and teach worldwide.",
  },
  {
    question: "Do I need prior yoga experience to join?",
    answer:
      "No prior experience is required for the 100-hour or 200-hour courses. Both are open to complete beginners and are designed to build a strong, safe foundation from the ground up. The 300-hour course requires a 200-hour certificate.",
  },
  {
    question: "What styles of yoga are taught in the TTC?",
    answer:
      "Our curriculum covers traditional Hatha yoga, Ashtanga Vinyasa (primary series A and B), Yin yoga, and Restorative yoga — alongside pranayama, meditation, yoga philosophy, anatomy, Ayurveda, and teaching methodology.",
  },
  {
    question: "What is included in the course fee?",
    answer:
      "All course fees are all-inclusive: your Yoga Alliance-approved certificate, accommodation (shared or private room), three sattvic vegetarian meals per day (Monday to Saturday), yoga kit (mat, blocks, strap), course manual, PDF library, and 24/7 student support. Flights, visa, travel insurance, and personal expenses are not included.",
  },
  {
    question: "How long is each yoga teacher training course?",
    answer:
      "The 100-hour TTC runs for 14 days. The 200-hour TTC runs for 22 days. The 300-hour TTC runs for 27 days. All courses start monthly throughout the year.",
  },
  {
    question: "Can the 100-hour course count towards the 200-hour certification?",
    answer:
      "Yes. Our 100-hour course is the first half of our 200-hour program. Complete the 100-hour course, then return within 21 months to complete the second half and earn your full 200-hour Yoga Alliance certificate.",
  },
  {
    question: "What accommodation is available?",
    answer:
      "We offer a choice of mixed AC dormitory, twin-sharing AC rooms, and private rooms (AC or non-AC) — all within walking distance of Querim beach in North Goa. All rooms have hot water and Wi-Fi.",
  },
  {
    question: "What is the best time to do a yoga teacher training in Goa?",
    answer:
      "Our TTC courses run year-round with monthly start dates. The prime season is October to March when the weather is dry and warm. The quieter months (April to September) offer smaller, more intimate batches and are favoured by students who prefer a more focused study environment.",
  },
  {
    question: "What is the difference between 100-hour, 200-hour, and 300-hour TTC?",
    answer:
      "The 100-hour is a two-week foundation course — ideal for beginners and travellers with limited time. The 200-hour is the globally recognised standard for becoming a certified yoga teacher. The 300-hour is advanced, post-graduate training that deepens your practice, philosophy, and teaching skills to RYT-500 level.",
  },
];

export function getYttcPageData() {
  return {
    name: "Yoga Teacher Training in Goa",
    category: "Yoga Alliance Certified",
    rating: 4.9,
    ratingCount: 187,
    students: "500+",
    heroTagline:
      "Yoga Alliance-approved 100-hour, 200-hour & 300-hour TTC courses — by the beach in Querim, North Goa.",
    duration: "14 · 22 · or 27 days",
    location: "Querim, North Goa, India",
    date: "Monthly start dates · year-round",
    whatsappMessage:
      "Hi Hatha Yogashala, I'd like to know more about the yoga teacher training in Goa — upcoming dates, fees, and availability.",
    whatIs: yttcWhatIs,
    overview: yttcOverview,
    overviewTags: yttcOverviewTags,
    whyChoose: yttcWhyChoose,
    levels: yttcLevels,
    teachers: retreatTeachers,
    highlights: yttcHighlights,
    dailySchedule: yttcDailySchedule,
    experiences: goaExperiences,
    freeTime: freeTimeIdeas,
    accommodation: {
      sharedGallery,
      privateGallery,
      facilities: accommodationFacilities,
    },
    meals,
    mealPhilosophy,
    bestTime: bestTimeToVisit,
    included: yttcIncluded,
    notIncluded: yttcNotIncluded,
    testimonials: yttcTestimonials,
    faqs: yttcFaqs,
    pricing: {
      shared: { price: 699, currency: "EUR" },
      private: { price: 999, currency: "EUR" },
      paymentOptions: ["Bank Transfer", "PayPal", "Wise", "UPI"],
    },
    trustBadges: yttcTrustBadges,
    dates: yttcDates,
  };
}
