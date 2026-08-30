/**
 * Yoga TTC hub page content — The Hatha Yogashala, Goa
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
  hero: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  class: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-02.webp",
  coast: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
  campus: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
  pranayama: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp",
  hatha: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
  philosophy: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-teacher-led-meditation-philosophy-talk-01.webp",
};

export const yttcTrustBadges = [
  "Yoga Alliance (RYS) Certified Curriculum",
  "Beachside Campus in North Goa",
  "Three Vegetarian/Vegan Meals Daily (Mon–Sat)",
  "Small Class Sizes with Personalized Attention",
  "24/7 Support, Wi-Fi & Hot Water",
  "Course Manual + Digital Yoga Library Included",
];

export const yttcWhatIs = {
  heading: "Who We Are",
  paragraphs: [
    "The Hatha Yogashala is a Yoga Alliance certified yoga teacher training school on the beaches of North Goa, India. We train aspiring teachers and dedicated practitioners in the authentic lineages of Hatha, Ashtanga, Vinyasa, Yin, and Restorative yoga — blending classical philosophy with modern, practical teaching skills.",
    "Our residential courses run for 7 to 27 days and range from 50 to 300 certification hours, so whether you have one week or one month, there is a training path built for you. Every program is delivered by experienced, Yoga Alliance registered teacher-trainers in a small-group, beachside setting designed for deep practice and genuine transformation.",
  ],
  points: [
    "Yoga Alliance (RYS) certified curriculum across all programs",
    "Beachside campus in North Goa with AC and non-AC room options",
    "Three vegetarian/vegan meals a day, Monday–Saturday",
    "Small class sizes with personalized attention",
    "24/7 student support, Wi-Fi, hot water, and unlimited filtered drinking water",
    "Course manual + digital library of yoga texts included",
    "Graduates are eligible to register with Yoga Alliance and teach worldwide",
  ],
};

export const yttcOverview = [
  "The Hatha Yogashala is a Yoga Alliance certified yoga teacher training school on the beaches of North Goa, India. We train aspiring teachers and dedicated practitioners in the authentic lineages of Hatha, Ashtanga, Vinyasa, Yin, and Restorative yoga — blending classical philosophy with modern, practical teaching skills.",
  "Our residential courses run for 7 to 27 days and range from 50 to 300 certification hours, so whether you have one week or one month, there is a training path built for you. Every program is delivered by experienced, Yoga Alliance registered teacher-trainers in a small-group, beachside setting designed for deep practice and genuine transformation.",
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
    text: "Small class sizes mean you get personalized attention, tailored adjustments, and a teacher who knows your practice.",
  },
  {
    icon: "leaf",
    title: "Traditional Hatha & Ashtanga curriculum",
    text: "Rooted in authentic Hatha, Ashtanga, Vinyasa, Yin, and Restorative yoga — blending classical philosophy with practical teaching skills.",
  },
  {
    icon: "map",
    title: "Beachside campus in North Goa",
    text: "Live and study steps from Querim beach in North Goa with AC and non-AC room options.",
  },
  {
    icon: "home",
    title: "Fully residential and all-inclusive",
    text: "Accommodation, three vegetarian/vegan meals daily (Mon–Sat), yoga kit, course manual, and 24/7 student support included.",
  },
  {
    icon: "grad",
    title: "Experienced faculty",
    text: "Delivered by experienced, Yoga Alliance registered teacher-trainers dedicated to deep practice and transformation.",
  },
  {
    icon: "compass",
    title: "Clear certification pathway",
    text: "50-Hour Aerial to 100-Hour, 200-Hour, and 300-Hour advanced TTC — built for wherever you are on your path.",
  },
  {
    icon: "heart",
    title: "Supportive global community",
    text: "Graduates are eligible to register with Yoga Alliance and join an international network teaching worldwide.",
  },
];

export const yttcHighlights = [
  "Yoga Alliance (RYS) certified curriculum across all programs",
  "Beachside campus in North Goa with AC and non-AC room options",
  "Three vegetarian/vegan meals a day, Monday–Saturday",
  "Small class sizes with personalized attention",
  "24/7 student support, Wi-Fi, hot water, and unlimited filtered drinking water",
  "Course manual + digital library of yoga texts included",
  "Graduates eligible to register with Yoga Alliance and teach worldwide",
];

export const yttcLevels = [
  {
    badge: "Foundation",
    hours: "100",
    name: "100-Hour Yoga Teacher Training — Goa",
    duration: "14 Days",
    level: "Beginner",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-02.webp",
    imageAlt: "100-Hour Yoga Teacher Training Foundation Course at The Hatha Yogashala Goa",
    text: "Built for those new to practice or with limited time. The first half of our full 200-Hour curriculum; complete the remaining 100 hours within 21 months for full certification.",
    price: 699,
    slug: "100-hour-yoga-teacher-training-goa",
    highlights: [
      "Hatha & Vinyasa fundamentals",
      "Pranayama, meditation & 8 limbs",
      "Anatomy, philosophy & teaching basics",
      "Complete 200H within 21 months",
    ],
  },
  {
    badge: "Most Popular",
    hours: "200",
    name: "200-Hour Yoga Alliance Certified Teacher Training — Goa",
    duration: "21–22 Days",
    level: "All Levels",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
    imageAlt:
      "200-Hour Yoga Teacher Training in Hatha Ashtanga and Vinyasa at The Hatha Yogashala Goa",
    text: "Holistic, immersive training covering philosophy, meditation, anatomy, kriya, and teaching methodology across Hatha, Vinyasa, Yin, and Restorative yoga.",
    price: 799,
    slug: "200-hour-yoga-teacher-training-goa",
    highlights: [
      "Hatha, Ashtanga, Vinyasa, Yin & Restorative",
      "Anatomy, alignment & adjustment techniques",
      "Supervised teaching practicum",
      "Yoga Alliance RYT-200 certification",
    ],
    featured: true,
  },
  {
    badge: "Flexible & Multi-Style",
    hours: "200",
    name: "22-Day 200 Hour Flexible Yoga Teacher Training Goa",
    duration: "22 Days",
    level: "All Levels",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-04.webp",
    imageAlt:
      "22-Day flexible multi-style yoga teacher training session at The Hatha Yogashala Goa",
    text: "A 22-day holistic Yoga Alliance-approved training in Goa covering Hatha, Ashtanga, Vinyasa, Yin, Restorative, and Ayurveda with freedom to customize your schedule.",
    price: 799,
    slug: "22-day-200-hour-flexible-yoga-teacher-training-goa",
    highlights: [
      "Hatha, Ashtanga Primary, Vinyasa & Ayurveda",
      "Flexible schedule with individualised attention",
      "Anatomy, adjustments, chakras & mudras",
      "RYT-200 Yoga Alliance certification",
    ],
  },
  {
    badge: "Ashtanga Specialist",
    hours: "200",
    name: "200-Hour Ashtanga Vinyasa Yoga Teacher Training — Goa",
    duration: "21 Days",
    level: "All Levels",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-02.webp",
    imageAlt:
      "200-Hour Ashtanga Vinyasa yoga teacher training course in North Goa",
    text: "Three-week journey of growth through Ashtanga and Vinyasa yoga with primary series mastery, pranayama, bandhas, drishti, and 6 cultural excursions.",
    price: 799,
    slug: "200-hour-ashtanga-vinyasa-yoga-teacher-training-goa",
    highlights: [
      "Ashtanga Primary Series A & B",
      "Bandhas, drishti & breath immersion",
      "6 Goa excursions & experiences included",
      "RYT-200 Yoga Alliance certification",
    ],
  },
  {
    badge: "Advanced",
    hours: "300",
    name: "300-Hour Yoga Teacher Training — Goa",
    duration: "27 Days",
    level: "200H Certified",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    imageAlt:
      "300-Hour Advanced Yoga Teacher Training Course at The Hatha Yogashala Goa",
    text: "Advanced training in detailed anatomy, Ayurvedic massage for alignment, Bhagavad Gita & Samkhya philosophy, Vigyan Bhairav Tantra meditation, and sound healing.",
    price: 899,
    slug: "300-hour-yoga-teacher-training-goa",
    highlights: [
      "Detailed anatomy & Ayurveda massage alignment",
      "Samkhya philosophy & Bhagavad Gita",
      "Vigyan Bhairav Tantra meditation & Kirtan",
      "RYT-500 Yoga Alliance registration eligible",
    ],
  },
  {
    badge: "Aerial Specialist",
    hours: "50",
    name: "Aerial Yoga Teacher Training — Goa",
    duration: "7 Days",
    level: "All Levels",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-08.webp",
    imageAlt:
      "50-Hour Aerial Yoga Teacher Training Course with silk hammocks in Goa",
    text: "7-day 50-Hour Yoga Alliance approved course mastering graceful aerial teaching, hammock rigging safety, spinal decompression, and therapeutic fly sequencing.",
    price: 849,
    slug: "aerial-yoga-teacher-training-goa",
    highlights: [
      "Aerial hammock poses & transitions",
      "Rigging safety & equipment care",
      "Spinal decompression & therapeutic adjustments",
      "50-Hour Yoga Alliance approved certification",
    ],
  },
];

export const yttcDailySchedule = [
  ["7:00 – 8:00 AM", "Pranayama, Shatkarma, Chanting"],
  ["8:00 – 8:15 AM", "Tea/Coffee Break"],
  ["8:15 – 9:30 AM", "Asana"],
  ["9:30 – 10:45 AM", "Breakfast"],
  ["11:00 AM – 12:30 PM", "Anatomy / Philosophy / Ayurveda"],
  ["12:30 – 1:30 PM", "Adjustment & Alignment"],
  ["1:30 – 2:30 PM", "Lunch"],
  ["2:30 – 4:00 PM", "Self-Time / Rest / Karma Yoga"],
  ["4:00 – 5:30 PM", "Teaching Practicum"],
  ["5:30 – 7:00 PM", "Meditation / Beach Practice"],
  ["7:00 – 8:00 PM", "Dinner"],
  ["8:00 – 10:00 PM", "Outing / Kirtan / Goa Experience"],
  ["10:00 PM", "Lights Out"],
];

const sharedGallery = [
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-twin-bed-room-interior-01.webp",
    alt: "Shared student twin AC bedroom at The Hatha Yogashala Goa",
    caption: "Shared twin room",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-twin-bed-room-interior-02.webp",
    alt: "Twin sharing room with veranda and tropical garden view in North Goa",
    caption: "Garden setting & veranda",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
    alt: "Open-air wooden practice shala used by teacher training students",
    caption: "Open-air practice hall",
  },
];

const privateGallery = [
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-cottage-bedroom-interior-01.webp",
    alt: "Private student cottage room with attached bathroom at the Goa ashram",
    caption: "Private cottage room",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-double-bed-room-interior-01.webp",
    alt: "Spacious private double room with workspace and attached modern bathroom",
    caption: "Spacious double bedroom",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
    alt: "Quiet eco-cottages surrounded by lush tropical gardens in North Goa",
    caption: "Eco-cottages exterior",
  },
];

export const yttcIncluded = [
  "Yoga Alliance approved certificate",
  "Three vegetarian meals daily (Monday–Saturday mornings)",
  "Choice of accommodation near the beach (AC & non-AC)",
  "Hot water showers and in-room Wi-Fi",
  "Meditation music and unlimited filtered drinking water",
  "Course manual + digital library of yoga texts included",
  "Yoga kit (mat, accessories)",
  "24/7 student support throughout the course",
];

export const yttcNotIncluded = [
  "Flights, visa & travel insurance",
  "Airport or station transfers",
  "Personal toiletries & laundry",
  "Optional personal expenses",
];

export const yttcDates = [
  { id: "monthly", label: "Batches start on the 1st of every month", availability: "Goa campus (plus Jan 3rd intake)" },
  { id: "season", label: "Year-Round Programs: 7 to 27 Days", availability: "50-Hr, 100-Hr, 200-Hr & 300-Hr" },
  { id: "size", label: "Small class sizes with personal attention", availability: "Early booking recommended" },
];

// Graduate reviews only — the retreat-tagged stories stay on retreat pages.
export const yttcTestimonials = allTestimonials.filter((item) =>
  item.tag?.endsWith("YTT"),
);

export const yttcFaqs = [
  {
    question: "What is Yoga Teacher Training (YTT)?",
    answer:
      "Yoga Teacher Training is a structured certification program covering yoga philosophy, anatomy, asana practice, pranayama, meditation, and teaching methodology. Graduates of a Yoga Alliance approved YTT can register as certified yoga teachers and teach classes anywhere in the world.",
  },
  {
    question: "Do I need prior yoga experience to join a course at The Hatha Yogashala?",
    answer:
      "No. Our 100-Hour, 200-Hour, and Aerial Yoga programs are open to complete beginners as well as experienced practitioners. The 300-Hour program requires a prior 200-Hour Yoga Alliance certification.",
  },
  {
    question: "How long does a 200-Hour Yoga Teacher Training take?",
    answer:
      "Our 200-Hour Multi-Style Yoga Teacher Training runs over 21–22 days in Goa, combining daily asana practice, philosophy, anatomy, and teaching practicums.",
  },
  {
    question: "Is accommodation and food included in the course fee?",
    answer:
      "Yes. All programs at The Hatha Yogashala are all-inclusive — beachside accommodation (dorm, twin-share, or private), three vegetarian meals a day (Mon–Sat mornings), Wi-Fi, hot water, and a course manual are included in every fee.",
  },
  {
    question: "Will I receive an internationally recognized certificate?",
    answer:
      "Yes. On successful completion, you receive a Yoga Alliance approved certificate, which allows you to register as a certified yoga teacher (RYT) and teach globally, including in studios, retreats, and online.",
  },
  {
    question: "What is the difference between the 100-Hour and 200-Hour course?",
    answer:
      "The 100-Hour program is the first half of our 200-Hour curriculum, ideal for beginners or those with limited time. You can complete the remaining 100 hours within 21 months to earn the full 200-Hour Yoga Alliance certification.",
  },
  {
    question: "What styles of yoga are taught?",
    answer:
      "Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga form the core of our curriculum, supported by pranayama, meditation, mantra, Ayurveda, and yoga philosophy.",
  },
  {
    question: "When do courses start?",
    answer:
      "New batches begin on the 1st of every month in Goa (see the schedule table below), with an additional January intake on the 3rd.",
  },
];

export const yttcSyllabusModules = [
  {
    number: "01",
    title: "Asana Classes",
    shortSummary: "Ashtanga Primary Series (A & B), classical Hatha, pranayama, bandhas, drishti & Sanskrit names",
    paragraphs: [
      "All our asana classes are dedicated to the in-depth study and practice of the Ashtanga primary series. In these sessions, asanas are practiced in a dynamic, set sequence, with a strong focus on mastering the A and B series. Emphasis is placed on breath control (pranayama), energy locks (bandhas), and the gaze (drishti).",
      "Ashtanga, which means “eight limbs,” is a branch of yoga introduced to the modern world by K. Pattabhi Jois in the 20th century. While Ashtanga yoga is a prominent focus, we also delve deeply into Hatha yoga. Hatha yoga practice includes postures, pranayama, proper yogic diet, body purification, and discipline, all aimed at achieving health and well-being as a foundation for spiritual growth.",
      "In these classes, you will also learn the Sanskrit names of the postures, connecting you to the ancient roots of this practice.",
    ],
    points: [],
  },
  {
    number: "02",
    title: "Methodology",
    shortSummary: "Integrating yogic lifestyle, class prep, presentation & teaching leadership",
    paragraphs: [
      "Learn to integrate the yogic lifestyle into modern living and share this wisdom with your future students. Key aspects include:",
    ],
    points: [
      "Incorporating Yoga into Daily Life: Applying yogic disciplines in contemporary settings.",
      "Class Preparation: Setting up the space and ensuring a conducive environment for teaching.",
      "Class Presentation: Guidelines for delivering engaging and effective classes.",
      "Teaching Skills: Developing techniques to clearly explain and lead sessions.",
    ],
    note: "Equip yourself with the tools to teach yoga effectively and inspire your students.",
  },
  {
    number: "03",
    title: "Pranayama Classes",
    shortSummary: "Vital life energy control, correct breathing techniques & 7 classical pranayamas",
    paragraphs: [
      "Pranayama is the conscious control of the vital life energy, with prana meaning life force and ayana meaning control. It involves mastering correct yogic breathing techniques, transforming breathing from an unconscious act into a mindful, intentional practice. Pranayama is particularly beneficial for healing stress-related disorders, promoting overall balance and well-being.",
      "In our course, you will learn a variety of specific pranayama techniques, each with its own unique healing and balancing effects:",
    ],
    points: [
      "Nadi Shodhana (Alternate Nostril Breathing)",
      "Ujjayi (Victorious Breath)",
      "Kapalbhati (Skull Shining Breath)",
      "Bhastrika (Bellows Breath)",
      "Bhramari (Humming Bee Breath)",
      "Sheetali (Cooling Breath)",
      "Shitkari (Hissing Breath)",
    ],
    note: "These techniques will deepen your understanding and practice of pranayama, guiding you towards greater physical and mental harmony.",
  },
  {
    number: "04",
    title: "Mantras",
    shortSummary: "Sanskrit sound syllables, positive frequencies, seed mantras & chanting significance",
    paragraphs: [
      "In our Yoga Teacher Training Course (YTTC), we explore the power of Sanskrit mantras, which are ancient sound syllables that resonate with specific parts of the body, promoting healing and balance in both the mind and body. These mantras, derived from the Sanskrit alphabet, are known for their ability to induce positive frequencies and facilitate spiritual growth.",
      "During the course, you will learn various mantras, each with a unique purpose:",
    ],
    points: [
      "Mantras for Good Health: Enhance well-being and vitality.",
      "Mantras for Wealth: Attract abundance and prosperity.",
      "Mantras to Remove Obstacles: Clear the path for success and peace.",
      "Seed Mantras: Activate deep spiritual and energetic healing.",
    ],
    note: "These mantras will be taught with their proper pronunciation and significance, enabling you to integrate them into your personal practice and teaching.",
  },
  {
    number: "05",
    title: "Yoga Philosophy and History",
    shortSummary: "Kleshas, Koshas, Eight Limbs, Karma/Bhakti/Raja/Kundalini Yoga & history",
    paragraphs: [
      "Our Yoga Teacher Training delves into the essence of yoga through its philosophy and history, covering:",
    ],
    points: [
      "Kleshas: The five obstacles to spiritual growth.",
      "Koshas: The five layers of human existence.",
      "Eight Limbs of Yoga: Ashtanga Yoga’s path, including yamas, niyamas, asanas, and more.",
    ],
    subSectionTitle: "You’ll explore various yoga types:",
    subPoints: [
      "Karma Yoga: Selfless action.",
      "Bhakti Yoga: Devotion.",
      "Raja Yoga: Meditation and mental control.",
      "Kundalini Yoga: Awakening spiritual energy.",
    ],
    note: "Practical excursions will offer hands-on experience with these styles, alongside a concise summary of yoga’s historical evolution. This blend of theory and practice enriches your teaching and personal journey.",
  },
  {
    number: "06",
    title: "Alignments and Adjustments",
    shortSummary: "Entering/exiting postures, holds, alignments, hands-on adjustments & modifications",
    paragraphs: [
      "Master the art of safely guiding yourself and others through yoga postures. This module covers:",
    ],
    points: [
      "Entering and Exiting Postures: Techniques for smooth transitions.",
      "Posture Maintenance: How to hold poses effectively.",
      "Teaching Alignments: Methods to instruct students on proper posture alignment.",
      "Hands-On Adjustments: Practical skills for providing corrective adjustments, minimizing injury risks.",
      "Limitations and Contraindications: Understanding when and how to modify poses for individual needs.",
    ],
    note: "Gain confidance in your ability to teach and practice yoga safely and effectively with this essential training.",
  },
  {
    number: "07",
    title: "Karma Yoga: Selfless Action in Daily Life",
    shortSummary: "Selfless service, mindful action, detachment from results & inner harmony",
    paragraphs: [
      "Karma Yoga focuses on selfless service and mindfulness in everyday tasks. Here’s a brief overview:",
    ],
    points: [
      "Selfless Service: Perform actions without expecting rewards.",
      "Mindful Action: Be fully present in every task.",
      "Detachment from Results: Let go of concerns about outcomes.",
      "Everyday Practice: Turn simple tasks like making your bed, cleaning dishes, and organizing into mindful acts of service.",
      "Inner Harmony: Achieve balance and peace through daily selfless action.",
    ],
    note: "Karma Yoga transforms daily routines into meaningful spiritual practice.",
  },
  {
    number: "08",
    title: "Introduction to sacred texts",
    shortSummary: "Patanjali’s Yoga Sutras, Hatha Yoga Pradipika, Bhagavad Gita & regular study",
    paragraphs: [
      "Gain insight into key spiritual texts and their significance:",
    ],
    points: [
      "Patanjali’s Yoga Sutras: Explore foundational principles of yoga philosophy.",
      "Hatha Yoga Pradipika: Understand the essentials of Hatha yoga practice.",
      "Bhagavad Gita: Delve into the philosophical and spiritual teachings.",
    ],
    note: "Learn the benefits of regularly studying these sacred texts to deepen your yoga practice and understanding.",
  },
  {
    number: "09",
    title: "Mudras",
    shortSummary: "Total of 12 spiritual, yogic, and healing hand gestures to channel energy",
    paragraphs: [
      "Discover the power of spiritual, yogic, and healing hand gestures:",
    ],
    points: [
      "Total of 12 Mudras: Explore various hand gestures used to channel energy and enhance your practice.",
    ],
  },
  {
    number: "10",
    title: "Anatomy",
    shortSummary: "Digestive, respiratory, endocrine, immune, muscular systems & spine focus",
    paragraphs: [
      "Comprehensive study of anatomy applied directly to yoga postures and spinal health:",
    ],
    points: [
      "Comprehensive Study: Delve into the digestive, respiratory, endocrine, immune, and muscular systems.",
      "Focus on the Spine: Detailed examination of the skeleton with an emphasis on spinal function.",
    ],
  },
  {
    number: "11",
    title: "Kriyas",
    shortSummary: "Bodily and mental purification methods & guided practice of at least two kriyas",
    paragraphs: [
      "Explore classical yogic kriyas for physical cleansing and mental clarity:",
    ],
    points: [
      "Bodily and Mental Purification: Explore kriyas, which are methods for cleansing and purifying the body and mind.",
      "Practice and Study: Learn and practice at least two kriyas for deepening your personal and teaching experience.",
    ],
  },
  {
    number: "12",
    title: "Meditation",
    shortSummary: "Silent meditation, Tratak, Sound Healing & Third Eye meditation",
    paragraphs: [
      "Diverse Techniques: Engage in and practice four types of meditation.",
    ],
    points: [
      "Silent Meditation: Cultivate inner peace through quiet contemplation.",
      "Tratak Meditation: Focus on a single point to enhance concentration.",
      "Sound Healing Meditation: Use sound to promote relaxation and healing.",
      "Third Eye Meditation: Develop intuition and insight through focused awareness.",
    ],
  },
];

export function getYttcPageData() {
  return {
    name: "Yoga Teacher Training in Goa",
    category: "Yoga Alliance Certified",
    rating: 4.9,
    ratingCount: 187,
    students: "12–15 max",
    graduates: "3,500+",
    heroTagline:
      "Join The Hatha Yogashala in Goa for Yoga Alliance certified 100/200/300-Hour Yoga Teacher Training and Aerial Yoga TTC. Hatha, Ashtanga, Vinyasa & Ayurveda — beachside, all-inclusive, 24/7 support.",
    duration: "7 to 27 Days · 50 to 300 Hours",
    location: "Querim, North Goa, India",
    date: "1st of every month (plus Jan 3rd intake)",
    whatsappMessage:
      "Hi The Hatha Yogashala, I'd like to know more about the yoga teacher training in Goa — upcoming dates, fees, and availability.",
    whatIs: yttcWhatIs,
    overview: yttcOverview,
    overviewTags: yttcOverviewTags,
    whyChoose: yttcWhyChoose,
    levels: yttcLevels,
    teachers: retreatTeachers,
    highlights: yttcHighlights,
    dailySchedule: yttcDailySchedule,
    curriculum: yttcSyllabusModules,
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
