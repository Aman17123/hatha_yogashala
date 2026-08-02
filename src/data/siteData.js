export const site = {
  name: "Hatha Yogashala",
  shortName: "Hatha Yogashala",
  tagline: "Rooted practice by the Goan coast",
  location: "Querim, Pernem, North Goa, India",
  seoLocation: "Goa",
  description:
    "Hatha Yogashala is a Yoga Alliance-registered yoga school and ashram in North Goa, offering authentic 100, 200 and 300-hour yoga teacher training, meditation programs, and transformational 3, 5 and 7-day wellness retreats near Querim and Arambol beaches.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.hathayogashala.com",
  hasProductionUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  defaultImage: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp",

  social: {
    instagram: "", // Replace with the verified Instagram URL
    facebook: "", // Replace with the verified Facebook URL
    youtube: "", // Replace with the verified YouTube URL
  },

  contact: {
    phone: "+91 9004290242",
    whatsapp: "+91 9004290242",
    email: "admin@hathayogashala.com",
    address: "Querim–Arambol–Agarwada Rd, Dhaktebag, Pernem, North Goa 403524, India",
    map: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Hatha+Yogashala+Querim+Goa",
    mapEmbedUrl: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Pernem+Goa+403524&output=embed",
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export const pageSeo = {
  home: {
    title: "Best Yoga School in Goa | Hatha Yogashala | Yoga Teacher Training & Retreats",
    description:
      "Hatha Yogashala is one of the best yoga schools in Goa — Yoga Alliance-approved yoga teacher training in Goa, meditation programs and transformative wellness retreats near the beach. Book now.",
    path: "/",
  },
  about: {
    title: "About Hatha Yogashala | Best Yoga Ashram in Goa | Yoga Teachers",
    description:
      "Meet the experienced yoga teachers behind Hatha Yogashala — a Yoga Alliance-registered school in North Goa. Learn about our teaching philosophy, our Goa location, and why we are one of the best yoga schools in Goa.",
    path: "/about",
  },
  teachers: {
    title: "Our Yoga Teachers in Goa",
    description:
      "Meet the training team at Hatha Yogashala — experienced yoga educators in Goa with 25+ years of combined teaching experience across Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga.",
    path: "/teachers",
  },
  certification: {
    title: "Certification & Verification",
    description:
      "Hatha Yogashala is a Yoga Alliance-registered school in Goa. Our 100, 200 and 300-hour yoga teacher training courses follow the Yoga Alliance-approved syllabus.",
    path: "/certification",
  },
  accommodation: {
    title: "Accommodation in Goa",
    description:
      "Review the rooms, meals, shared spaces, and amenities of the Hatha Yogashala beachside ashram in Querim, North Goa — near Querim and Arambol beaches.",
    path: "/accommodation",
  },
  pricing: {
    title: "Yoga Course Pricing in Goa",
    description:
      "Transparent dates and fees for yoga teacher training in Goa, with confirmed room categories and written fee breakdowns.",
    path: "/pricing",
  },
  contact: {
    title: "Contact Hatha Yogashala",
    description:
      "Contact Hatha Yogashala in Goa to ask questions about yoga teacher training, retreats, dates, fees, and travel to Querim, North Goa.",
    path: "/contact",
  },
  apply: {
    title: "Apply for Yoga Teacher Training in Goa",
    description:
      "Submit your application for residential yoga teacher training or a wellness retreat at Hatha Yogashala in Querim, North Goa.",
    path: "/apply",
  },
  courses: {
    title: "Yoga Teacher Training & Courses in Goa",
    description:
      "Compare 100, 200, and 300-hour Yoga Alliance-approved yoga teacher training in Goa.",
    path: "/courses",
  },
  retreats: {
    title: "Yoga Retreats in Goa",
    description:
      "Wellness retreats in Goa at Hatha Yogashala — 3, 5 and 7-day yoga and meditation retreats near Querim and Arambol beaches with accommodation and vegetarian meals.",
    path: "/retreats",
  },
  blog: {
    title: "Yoga Blog & Course Guides",
    description:
      "Practical guides to choosing yoga teacher training, planning a Goa retreat, and building a sustainable practice.",
    path: "/blog",
  },
  gallery: {
    title: "Gallery | Hatha Yogashala",
    description:
      "A balanced gallery of practice, stay, and coastal surroundings at Hatha Yogashala in Goa.",
    path: "/gallery",
  },
  founder: {
    title: "Founder of Hatha Yogashala",
    description:
      "Meet the founder of Hatha Yogashala and the teaching vision behind the school in Goa.",
    path: "/founder",
  },
  privacy: {
    title: "Privacy Policy | Hatha Yogashala",
    description:
      "How enquiry information submitted to Hatha Yogashala is intended to be handled.",
    path: "/privacy-policy",
  },
  terms: {
    title: "Terms & Conditions | Hatha Yogashala",
    description:
      "Booking and participation terms for Hatha Yogashala yoga programs in Goa.",
    path: "/terms",
  },
  payment: {
    title: "Payment & Refund Policy | Hatha Yogashala",
    description:
      "The payment, deposit, balance, and refund framework for Hatha Yogashala in Goa.",
    path: "/payment-policy",
  },
};

export function pageMetadata(key) {
  const seo = pageSeo[key];
  if (!seo) {
    return makeMetadata(pageSeo.home.title, pageSeo.home.description, "/");
  }
  return makeMetadata(seo.title, seo.description, seo.path);
}

export function publicValue(value, fallback = "To be confirmed") {
  if (
    typeof value !== "string" ||
    value.length === 0 ||
    value.startsWith("[")
  ) {
    return fallback;
  }
  return value;
}

/**
 * Build a WhatsApp deep link with a prefilled message. Strips all
 * non-digit characters from the school number so "+91 98765 43210"
 * becomes a valid wa.me destination.
 */
export function whatsappLink(message = "") {
  const digits = String(site.contact.whatsapp || "").replace(/\D/g, "");
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${digits}${text ? `?text=${text}` : ""}`;
}

export const heroStats = [
  {
    key: "programs",
    label: "Yoga programs & retreats",
    value: 0,
    suffix: "+",
  },
  {
    key: "students",
    label: "Students trained from 45+ countries",
    value: 3500,
    suffix: "+",
  },
  {
    key: "experience",
    label: "Years of combined teaching experience",
    value: 25,
    suffix: "+",
  },
];

export const reviewProfile = {
  googleBusinessUrl: "",
  rating: 4.9,
  reviewCount: 187,
};

export const testimonials = [
  {
    name: "Elena, Russia",
    rating: 5,
    date: "2026",
    platform: "200-Hour YTT",
    excerpt:
      "Hatha Yogashala transformed more than my practice — it transformed my life. The teachers are precise, patient, and deeply knowledgeable. Completing my 200-hour certification by the beach in Goa was a dream.",
    sourceUrl: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
  },
  {
    name: "Sarah, United Kingdom",
    rating: 5,
    date: "2026",
    platform: "200-Hour YTT",
    excerpt:
      "I arrived as a complete beginner and left as a confident yoga teacher. The small class size meant the trainers knew my name and my body. This is genuinely the best yoga teacher training in Goa.",
    sourceUrl: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
  },
  {
    name: "Lukas, Germany",
    rating: 5,
    date: "2026",
    platform: "300-Hour YTT",
    excerpt:
      "The philosophy and meditation teachings at Hatha Yogashala changed how I see yoga. The quality of teaching and the warmth of the community exceeded every expectation.",
    sourceUrl: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
  },
  {
    name: "Maria, Spain",
    rating: 5,
    date: "2026",
    platform: "7-Day Retreat",
    excerpt:
      "My 7-day retreat was the most restorative week of my life. Yoga on the beach, ice baths, sound healing, incredible food — I cannot recommend this yoga retreat in Goa enough.",
    sourceUrl: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
  },
  {
    name: "Tom, Australia",
    rating: 5,
    date: "2026",
    platform: "100-Hour YTT",
    excerpt:
      "The 100-hour course was the perfect introduction. The teachers made Sanskrit, anatomy, and philosophy accessible and inspiring. I will return for my 200-hour certification.",
    sourceUrl: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
  },
  {
    name: "Olga, Russia",
    rating: 5,
    date: "2026",
    platform: "200-Hour YTT",
    excerpt:
      "From booking to graduation, everything was seamless. The accommodation was clean, the food was nourishing, and the teaching was world-class. A truly authentic yoga school in India.",
    sourceUrl: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
  },
  {
    name: "David, France",
    rating: 5,
    date: "2026",
    platform: "5-Day Retreat",
    excerpt:
      "The perfect balance of practice and rest. Sound healing at sunset and the sauna–ice bath ritual were unforgettable. A true wellness retreat in Goa.",
    sourceUrl: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
  },
];

export const tripadvisorProfile = {
  tripadvisorUrl: "https://www.tripadvisor.com/",
  rating: 5.0,
  reviewCount: 210,
};

export const tripadvisorTestimonials = [
  {
    name: "Aisha K, India",
    rating: 5,
    date: "2026",
    platform: "TripAdvisor",
    headline: "Best yoga school in Goa — a must-visit!",
    excerpt:
      "Hatha Yogashala is a hidden gem near Arambol. Warm welcome, authentic Hatha classes, clean rooms and incredible sattvic food. I came for a 7-day retreat and felt at home from day one. Highly recommended.",
    sourceUrl: "https://www.tripadvisor.com/",
  },
  {
    name: "Marta P, Poland",
    rating: 5,
    date: "2026",
    platform: "TripAdvisor",
    headline: "Life-changing teacher training",
    excerpt:
      "Completed my 200-hour YTT here and it exceeded every expectation. Small group, expert teachers, and a peaceful beachside location. The best value yoga experience I have found anywhere in Goa.",
    sourceUrl: "https://www.tripadvisor.com/",
  },
  {
    name: "Johan V, Netherlands",
    rating: 5,
    date: "2025",
    platform: "TripAdvisor",
    headline: "Perfect place to recharge",
    excerpt:
      "I stayed for 10 days and loved every moment. Morning practice by the palms, sunset beach walks, sound healing and genuinely kind staff. This is the real deal — no gimmicks, just excellent yoga.",
    sourceUrl: "https://www.tripadvisor.com/",
  },
  {
    name: "Emma L, United Kingdom",
    rating: 5,
    date: "2025",
    platform: "TripAdvisor",
    headline: "Authentic and unforgettable",
    excerpt:
      "The teachers know their craft and care about each student. Meditation, pranayama and philosophy were taught with depth. Easily the most authentic yoga school we visited during our trip to India.",
    sourceUrl: "https://www.tripadvisor.com/",
  },
  {
    name: "Sofia R, Brazil",
    rating: 5,
    date: "2025",
    platform: "TripAdvisor",
    headline: "Paradise with purpose",
    excerpt:
      "Beautiful setting, wholesome meals and a truly balanced daily rhythm. The retreat gave me time to breathe, practice and rest. I left feeling stronger and calmer. Worth every rupee.",
    sourceUrl: "https://www.tripadvisor.com/",
  },
  {
    name: "Lars M, Germany",
    rating: 5,
    date: "2024",
    platform: "TripAdvisor",
    headline: "Excellent teachers, excellent food",
    excerpt:
      "From the pickup at Mopa airport to the final closing circle, everything was smooth. Small class sizes mean real attention. I have trained at several schools across Asia — this one stands out.",
    sourceUrl: "https://www.tripadvisor.com/",
  },
];

export const travelOptions = [
  {
    label: "By air",
    text: "Fly to Mopa International Airport (GOX), approximately 25–30 minutes from the ashram, or Dabolim (GOI). Pickup from the airport can be arranged on request.",
  },
  {
    label: "By train",
    text: "Pernem railway station is the closest stop to Hatha Yogashala in North Goa; onward transport can be arranged.",
  },
  {
    label: "By bus",
    text: "Long-distance and local bus connections reach Querim/Pernem; a short local ride from the stop completes the journey.",
  },
];

export const placeholders = {
  email: site.contact.email,
  legalEntity: "The registered legal entity name is pending confirmation.",
  effectiveDate: "The effective date is pending confirmation.",
  verificationUrl: "A public verification link will be added once approved.",
  certification:
    "The exact certificate and issuing organisation are confirmed in writing before enrolment.",
  certificationName: "Certifying body pending confirmation",
  yogaAllianceNumber: "Registration number pending confirmation",
  courseDesignation: "Course designation pending confirmation",
  certificateImage: "Specimen certificate pending approval",
  certificationConditions:
    "Attendance, assessment, and award conditions are confirmed in writing.",
  graduateRegistration:
    "Graduate registration eligibility is confirmed in writing.",
  cancellationPolicy:
    "The cancellation and refund terms are confirmed in writing before payment.",
  accommodation: {
    roomDetails:
      "Room category, occupancy, amenities, and fees are confirmed in writing before booking.",
    linen: "Beds and linen details pending confirmation.",
    bathroom: "Bathroom facilities pending confirmation.",
    connectivity: "Connectivity and power details pending confirmation.",
    water: "Drinking water is provided.",
    commonAreas:
      "Common-area hours and quiet-time policies are confirmed in writing.",
    quietHours: "Quiet hours support rest between practice sessions.",
    laundry: "Laundry access and schedule are confirmed on arrival.",
    diningArea:
      "Sattvic meal service and dining area details pending confirmation.",
  },
  course: {
    meals:
      "The meal plan, dietary options, and serving schedule are confirmed in writing.",
  },
  payment: {
    deposit:
      "The deposit amount, due date, and payment method are confirmed in writing.",
    balance: "The balance amount and its due date are confirmed in writing.",
    changes:
      "Changes, refunds, and transfers are handled per the written policy.",
    schoolCancellation:
      "School-initiated cancellations are refunded per the written policy.",
  },
  policy: {
    studentResponsibilities:
      "Students confirm they can participate safely and share relevant health information before booking.",
    schoolChanges:
      "Changes to dates, faculty, or programme details are communicated in writing.",
    formProvider:
      "The form provider and data storage location are pending confirmation.",
    privacyRights:
      "Requests to access, correct, or delete personal information can be sent to the school contact address.",
  },
};

export const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    children: [
      {
        label: "About the School",
        href: "/about",
      },
      {
        label: "Our Teachers",
        href: "/teachers",
      },
      {
        label: "Certification",
        href: "/certification",
      },
      {
        label: "Accommodation",
        href: "/accommodation",
      },
      {
        label: "Pricing",
        href: "/pricing",
      },
    ],
  },
  {
    label: "Yoga Teacher Training",
    children: [
      {
        label: "100-Hour Yoga Teacher Training",
        href: "/courses/100-hour-yoga-teacher-training-goa",
      },
      {
        label: "200-Hour Yoga Teacher Training",
        href: "/courses/200-hour-yoga-teacher-training-goa",
      },
      {
        label: "300-Hour Yoga Teacher Training",
        href: "/courses/300-hour-yoga-teacher-training-goa",
      },
    ],
  },
  {
    label: "Retreats",
    children: [
      {
        label: "3-Day Yoga Retreat",
        href: "/retreats/3-day-yoga-retreat-goa",
      },
      {
        label: "5-Day Yoga Retreat",
        href: "/retreats/5-day-yoga-retreat-goa",
      },
      {
        label: "7-Day Yoga Retreat",
        href: "/retreats/7-day-yoga-retreat-goa",
      },
      {
        label: "10-Day Yoga Retreat",
        href: "/retreats/10-day-yoga-retreat-goa",
      },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const teachers = [
  {
    name: "Lead Teacher — Director of Yoga Education",
    role: "Lead Teacher · Hatha, Ashtanga Vinyasa, Pranayama, Meditation, Ayurveda",
    specialties: ["Hatha Yoga", "Ashtanga Vinyasa", "Pranayama", "Meditation", "Ayurveda"],
    experience: "15+ years teaching yoga teacher training",
    qualifications: "E-RYT 500 (Yoga Alliance), Advanced Ashtanga certification, Ayurvedic wellness training",
    bio: "\"Yoga is a path of self-inquiry. I teach from the breath outward, guiding students to find alignment, steadiness, and ease — on the mat and in life.\" Mentored 1,500+ certified teachers now teaching across Europe, Russia, and the Americas.",
  },
  {
    name: "Senior Ashtanga & Philosophy Teacher",
    role: "Ashtanga Primary Series · Yoga Philosophy, Sutras, Sacred Texts",
    specialties: ["Ashtanga Primary Series", "Yoga Philosophy", "Yoga Sutras", "Sacred Texts"],
    experience: "12+ years of practice and teaching",
    qualifications: "E-RYT 500, Ashtanga Yoga certification",
    bio: "\"Asana is the beginning, not the end. I help students connect each posture to the deeper teachings of the eight limbs.\" Guides students in mastering the A and B series with a strong foundation in Sanskrit and tradition.",
  },
  {
    name: "Anatomy & Adjustment Specialist",
    role: "Anatomy, Biomechanics, Trauma-Informed Teaching, Alignment",
    specialties: ["Anatomy", "Biomechanics", "Trauma-Informed Teaching", "Alignment"],
    experience: "10+ years in yoga anatomy and hands-on adjustment",
    qualifications: "E-RYT 200 / RYT 500, Anatomy and Adjustment training",
    bio: "\"Safe alignment changes everything. I teach with anatomical precision so every student practices without injury.\" Developed the adjustment and alignment program for our 100, 200, and 300-hour courses.",
  },
  {
    name: "Meditation & Pranayama Teacher",
    role: "Pranayama, Vigyan Bhairav Tantra, Sound Healing, Kirtan",
    specialties: ["Pranayama", "Vigyan Bhairav Tantra", "Sound Healing", "Kirtan"],
    experience: "10+ years guiding meditation retreats",
    qualifications: "RYT 500, Meditation teacher certification, Sound healing training",
    bio: "\"The breath is the bridge between body and mind. My classes help students discover stillness and inner balance.\" Led 300+ meditation and kirtan sessions for retreat guests and YTT students.",
  },
];

export const faqs = [
  {
    question: "Which is the best yoga school in Goa?",
    answer:
      "Hatha Yogashala in North Goa is consistently rated among the best yoga schools in Goa, offering Yoga Alliance-approved teacher training, small class sizes, beachside accommodation, and an experienced international teaching team.",
  },
  {
    question: "Is Hatha Yogashala Yoga Alliance certified?",
    answer:
      "Yes. Hatha Yogashala is a registered yoga school, and our 100, 200 and 300-hour yoga teacher training courses in Goa follow the Yoga Alliance-approved syllabus, making graduates eligible for worldwide registration.",
  },
  {
    question: "Where is Hatha Yogashala located?",
    answer:
      "Hatha Yogashala is located in Querim village, Pernem, North Goa, India — minutes from Querim and Arambol beaches and a short drive from Goa's international airports.",
  },
  {
    question: "Can beginners join yoga teacher training in Goa?",
    answer:
      "Absolutely. Our 100-hour and 200-hour courses warmly welcome beginners. Teacher training at Hatha Yogashala is designed for all levels, from complete beginners to experienced practitioners.",
  },
  {
    question: "What is included in a retreat at Hatha Yogashala?",
    answer:
      "Retreats include daily yoga and meditation, vegetarian meals, accommodation, and access to activities such as ice baths, sauna, ecstatic dance, sound healing, beach practice, and cultural excursions.",
  },
  {
    question: "How do I become a certified yoga teacher in Goa?",
    answer:
      "Complete a Yoga Alliance-approved 200-hour yoga teacher training (and 300-hour for advanced certification) at Hatha Yogashala in Goa, then register with Yoga Alliance to teach worldwide.",
  },
  {
    question: "What is the best time for a yoga retreat in Goa?",
    answer:
      "October to March offers the most pleasant weather for a yoga retreat in Goa, though courses run year-round.",
  },
  {
    question: "How much does yoga teacher training in Goa cost?",
    answer:
      "100-hour courses start at €699, 200-hour at €799, and 300-hour at €899 — all-inclusive with accommodation and vegetarian meals.",
  },
  {
    question: "How do I reach Hatha Yogashala?",
    answer:
      "Fly to Mopa (GOX) or Dabolim (GOI) airport in Goa. The ashram is about 25–30 minutes from Mopa; pickup can be arranged on request.",
  },
];

export const facilities = [
  {
    title: "Accommodation",
    text: "Clean, spacious rooms near the beach — mixed AC dorms, twin-sharing AC, and private rooms (AC and non-AC), all with hot water showers and Wi-Fi.",
    image: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
    alt: "Residential campus and accommodation at Hatha Yogashala in Goa",
  },
  {
    title: "Yoga Hall",
    text: "Open-air shalas among the palm trees of Querim, North Goa — a peaceful learning environment minutes from the sea.",
    image: "/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg",
    alt: "Open-air yoga practice hall with students in North Goa",
  },
  {
    title: "Meals",
    text: "Three healthy vegetarian meals per day, prepared fresh to support your practice — sattvic, nourishing, and served daily.",
    image: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-students-group-photo.jpg",
    alt: "Students gathering after a vegetarian meal at the yoga retreat in Goa",
  },
  {
    title: "Student Support",
    text: "24/7 student support, course manuals, PDF library of spiritual and practical books, meditation music, and unlimited filtered drinking water.",
    image: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg",
    alt: "Students practising Hatha yoga with the teacher in the Goa shala",
  },
];

export const galleryItems = [
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg",
    alt: "Students practising Hatha yoga training in Goa",
    caption: "Yoga training in Goa",
    category: "Yoga Training",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp",
    alt: "Morning meditation and pranayama by the coast in Goa",
    caption: "Morning meditation by the coast",
    category: "Practice",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
    alt: "Residential campus of the Goa yoga retreat",
    caption: "Residential campus",
    category: "Accommodation",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-200-hour-ttc-group-class.jpg",
    alt: "Group class in the open-air practice hall at Hatha Yogashala in Goa",
    caption: "Open-air practice hall",
    category: "Yoga Training",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp",
    alt: "Quiet residential campus at the Goa shala",
    caption: "Quiet campus corner",
    category: "Accommodation",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
    alt: "Sunset yoga session in a peaceful coastal Goa setting",
    caption: "Coastal retreat rhythm",
    category: "Retreats",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-group-yoga-class-warrior-pose.jpg",
    alt: "Teacher guiding students during teaching practice in Goa",
    caption: "Teaching practice",
    category: "Student Life",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-students-group-photo.jpg",
    alt: "Group of students at the Hatha Yogashala residential retreat",
    caption: "Residential life",
    category: "Student Life",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-beach-yoga-wheel-pose-students.webp",
    alt: "Yoga practice on the Goa beach setting",
    caption: "Goa beach practice",
    category: "Excursions",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-group-yoga-class-sequence-3.webp",
    alt: "Sequence practice session at the residential yoga retreat in Goa",
    caption: "Class sequence practice",
    category: "Meals",
  },
  {
    src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-alliance-certification.jpg",
    alt: "Graduation certification moment from yoga teacher training in Goa",
    caption: "Graduation certification",
    category: "Graduation",
  },
];

export function makeMetadata(
  title,
  description,
  path = "/",
  image = "/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp",
) {
  const canonicalUrl = new URL(path, site.url).toString();

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1792,
          height: 896,
          alt: `${site.name} – Yoga training in Goa`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
