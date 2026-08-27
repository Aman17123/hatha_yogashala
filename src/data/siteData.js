export const site = {
  name: "The Hatha Yogashala",
  shortName: "The Hatha Yogashala",
  tagline: "Rooted practice by the Goan coast",
  location: "Querim, Pernem, North Goa, India",
  seoLocation: "Goa",
  description:
    "The Hatha Yogashala is a Yoga Alliance-registered yoga school and ashram in North Goa, offering authentic 100, 200 and 300-hour yoga teacher training, meditation programs, and transformational 3, 5 and 7-day wellness retreats near Querim and Arambol beaches.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.hathayogashala.com",
  hasProductionUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  defaultImage:
    "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",

  social: {
    instagram: "", // Replace with the verified Instagram URL
    facebook: "", // Replace with the verified Facebook URL
    youtube: "", // Replace with the verified YouTube URL
    tripadvisor: "", // Replace with the verified TripAdvisor URL
  },

  contact: {
    phone: "+91 9004290242",
    whatsapp: "+91 9004290242",
    email: "admin@hathayogashala.com",
    address:
      "Querim–Arambol–Agarwada Rd, Dhaktebag, Pernem, North Goa 403524, India",
    map: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Hatha+Yogashala+Querim+Goa",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Pernem+Goa+403524&output=embed",
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export const pageSeo = {
  home: {
    title: "Yoga School in Goa — Teacher Training & Retreats",
    description:
      "The Hatha Yogashala is a Yoga Alliance-registered yoga school in Goa offering 100–300-hour teacher training and 3–7 day wellness retreats near Querim beach. Book now.",
    path: "/",
  },
  about: {
    title: "About the School – Yoga Ashram & Teacher Training in Goa",
    description:
      "The Hatha Yogashala is a Yoga Alliance-registered yoga school and beachside ashram in Querim, North Goa — near Arambol. Meet our teachers, philosophy, campus, and why students choose us for yoga teacher training and retreats in Goa.",
    keywords:
      "yoga ashram Goa, best yoga school in Goa, Hatha Yoga teacher training Goa, yoga retreat North Goa, Arambol yoga school, Querim yoga ashram, The Hatha Yogashala",
    path: "/about",
  },
  teachers: {
    title: "Our Yoga Teachers in Goa",
    description:
      "Meet the training team at The Hatha Yogashala — experienced yoga educators in Goa with 25+ years of combined teaching experience across Hatha, Ashtanga Vinyasa, Yin, and Restorative yoga.",
    path: "/teachers",
  },
  certification: {
    title: "Yoga Teacher Training Certification & Verification in Goa",
    description:
      "See the certificate graduates receive from The Hatha Yogashala — a Yoga Alliance-registered school in Goa. Learn how our 100, 200 and 300-hour yoga teacher training courses are certified and verified.",
    keywords:
      "yoga teacher training certification Goa, Yoga Alliance certificate, 200 hour YTTC certificate, Hatha Yoga TTC certification, yoga school registration Goa",
    path: "/certification",
  },
  accommodation: {
    title: "Accommodation at the Yoga School in North Goa",
    description:
      "Rooms, meals and amenities at The Hatha Yogashala — a beachside yoga ashram in Querim, North Goa near Arambol. What's included in yoga course and retreat accommodation.",
    keywords:
      "yoga school accommodation Goa, yoga retreat stay Arambol, ashram rooms North Goa, vegetarian meals yoga retreat Goa, The Hatha Yogashala rooms",
    path: "/accommodation",
  },
  contact: {
    title: "Contact Us – Yoga School in Querim, North Goa",
    description:
      "Contact The Hatha Yogashala in Querim, North Goa to ask about yoga teacher training, retreats, dates, fees, accommodation and travel to Arambol and Querim beach, North Goa, India.",
    keywords:
      "contact yoga school Goa, yoga teacher training enquiry Goa, The Hatha Yogashala Goa contact, WhatsApp yoga Goa, yoga retreat booking North Goa, Arambol yoga contact",
    path: "/contact",
  },
  apply: {
    title: "Apply for Yoga Teacher Training in Goa",
    description:
      "Submit your application for residential yoga teacher training or a wellness retreat at The Hatha Yogashala in Querim, North Goa.",
    path: "/apply",
  },
  courses: {
    title: "Yoga Teacher Training Goa | Yoga Alliance Certified TTC | The Hatha Yogashala",
    description:
      "Join The Hatha Yogashala in Goa for Yoga Alliance certified 100/200/300-Hour Yoga Teacher Training and Aerial Yoga TTC. Hatha, Ashtanga, Vinyasa & Ayurveda — beachside, all-inclusive, 24/7 support.",
    path: "/courses",
  },
  retreats: {
    title: "Yoga Retreats in Goa | 3, 5 & 7 Day Wellness Retreats | The Hatha Yogashala",
    description:
      "Book a 3, 5, or 7-day yoga retreat in Goa with The Hatha Yogashala. Daily yoga, meditation, Ayurveda, sound healing, ice baths, and beachside living — all-inclusive.",
    path: "/retreats",
  },
  holidays: {
    title: "Yoga Holidays in Goa — 3, 5 & 7 Day Authentic Yogic Breaks",
    description:
      "Take an authentic yoga break by the ocean in Goa. Explore 3, 5, and 7-day yoga holidays with daily asana, Ayurvedic massage, sattvic food, and beachside relaxation.",
    path: "/holidays",
  },
  blog: {
    title: "Yoga Blog, Tips & Goa Retreat Guides",
    description:
      "Practical yoga guides from The Hatha Yogashala in Goa — how to choose yoga teacher training, plan a yoga retreat in Goa near Arambol, and build a sustainable home practice.",
    keywords:
      "yoga blog, yoga teacher training tips, yoga retreat Goa guide, Hatha yoga practice, beginner yoga Goa, yoga for beginners",
    path: "/blog",
  },
  gallery: {
    title: "Yoga School Gallery in Goa – Photos & Campus",
    description:
      "Browse the Hatha Yogashala gallery in Querim, Near Arambol, North Goa — yoga teacher training classes, meditation, beach practice, campus rooms and the Goan coast.",
    keywords:
      "yoga school photos Goa, Hahn yoga Goa gallery, yoga teacher training pictures, yoga retreat Goa images, Arambol yoga beach, North Goa ashram photos",
    path: "/gallery",
  },
  founder: {
    title: "Founder of The Hatha Yogashala",
    description:
      "Meet the founder of The Hatha Yogashala and the teaching vision behind the school in Goa.",
    path: "/founder",
  },
  privacy: {
    title: "Privacy Policy | The Hatha Yogashala",
    description:
      "How enquiry information submitted to The Hatha Yogashala is intended to be handled.",
    path: "/privacy-policy",
  },
  terms: {
    title: "Terms & Conditions | The Hatha Yogashala",
    description:
      "Booking and participation terms for The Hatha Yogashala yoga programs in Goa.",
    path: "/terms",
  },
  payment: {
    title: "Payment & Refund Policy | The Hatha Yogashala",
    description:
      "The payment, deposit, balance, and refund framework for The Hatha Yogashala in Goa.",
    path: "/payment-policy",
  },
};

export function pageMetadata(key) {
  const seo = pageSeo[key];
  if (!seo) {
    return makeMetadata(pageSeo.home.title, pageSeo.home.description, "/");
  }
  return makeMetadata(
    seo.title,
    seo.description,
    seo.path,
    site.defaultImage,
    seo.keywords,
  );
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
      "The Hatha Yogashala transformed more than my practice — it transformed my life. The teachers are precise, patient, and deeply knowledgeable. Completing my 200-hour certification by the beach in Goa was a dream.",
    sourceUrl: "https://www.google.com/maps?q=Hatha+Yogashala+Querim+Goa",
  },
  {
    name: "Sarah, UK",
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
      "The philosophy and meditation teachings at The Hatha Yogashala changed how I see yoga. The quality of teaching and the warmth of the community exceeded every expectation.",
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



export const travelOptions = [
  {
    label: "By air",
    text: "Fly to Mopa International Airport (GOX), approximately 25–30 minutes from the ashram, or Dabolim (GOI). Pickup from the airport can be arranged on request.",
  },
  {
    label: "By train",
    text: "Pernem railway station is the closest stop to The Hatha Yogashala in North Goa; onward transport can be arranged.",
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
    ],
  },
  {
    label: "Yoga TTC",
    children: [
      {
        label: "Yoga Teacher Training Courses in Goa",
        href: "/yoga-teacher-training",
      },
      {
        label: "100 Hour Yoga Teacher Training in Goa",
        href: "/courses/100-hour-yoga-teacher-training-goa",
      },
      {
        label: "200 Hour Yoga Teacher Training in Goa",
        href: "/courses/200-hour-yoga-teacher-training-goa",
      },
      {
        label: "22-Day 200 Hour Flexible Yoga Teacher Training in Goa",
        href: "/courses/22-day-200-hour-flexible-yoga-teacher-training-goa",
      },
      {
        label: "200 Hour Ashtanga Vinyasa Yoga Teacher Training in Goa",
        href: "/courses/200-hour-ashtanga-vinyasa-yoga-teacher-training-goa",
      },
      {
        label: "300 Hour Yoga Teacher Training in Goa",
        href: "/courses/300-hour-yoga-teacher-training-goa",
      },
      {
        label: "Aerial Yoga Teacher Training in Goa",
        href: "/courses/aerial-yoga-teacher-training-goa",
      },
    ],
  },
  {
    label: "Retreats",
    children: [
      {
        label: "Yoga and Meditation Retreat in Goa",
        href: "/retreats",
      },
      {
        label: "3 Day Yoga Retreat",
        href: "/retreats/3-day-yoga-retreat-goa",
      },
      {
        label: "5 Day Yoga Retreat",
        href: "/retreats/5-day-yoga-retreat-goa",
      },
      {
        label: "7 Day Yoga Retreat",
        href: "/retreats/7-day-yoga-retreat-goa",
      },
      {
        label: "5 Day Awaken & Align Retreat",
        href: "/retreats/5-day-awaken-and-align-retreat-goa",
      },
      {
        label: "Aerial Yoga Retreat",
        href: "/retreats/aerial-yoga-retreat-goa",
      },
      {
        label: "Ayurvedic Massage Therapy",
        href: "/retreats/ayurvedic-massage-therapy-goa",
      },
      {
        label: "Yoga Festivals in Goa",
        href: "/retreats/yoga-festivals-in-goa",
      },
    ],
  },
  {
    label: "Holidays",
    children: [
      {
        label: "All Yoga Holidays",
        href: "/holidays",
      },
      {
        label: "3 Day Yoga Holiday in Goa",
        href: "/holidays/3-day-yoga-holiday-goa",
      },
      {
        label: "5 Day Yoga Holiday in Goa",
        href: "/holidays/5-day-yoga-holiday-goa",
      },
      {
        label: "7 Day Yoga Holiday in Goa",
        href: "/holidays/7-day-yoga-holiday-goa",
      },
    ],
  },
  {
    label: "Online Pranayama",
    children: [
      {
        label: "Pre-Pranayama Foundation",
        href: "/pranayama/pre-pranayama-foundation",
      },
      {
        label: "Beginner Pranayama",
        href: "/pranayama/beginner-pranayama",
      },
      {
        label: "Intermediate Pranayama",
        href: "/pranayama/intermediate-pranayama",
      },
      {
        label: "Advanced Pranayama",
        href: "/pranayama/advanced-pranayama",
      },
      {
        label: "Meditation & Breathing for Stress Relief",
        href: "/pranayama/stress-relief-course",
      },
      {
        label: "Daily Pranayama Classes",
        href: "/pranayama/daily-pranayama-subscription",
      },
      {
        label: "Online Yoga and Meditation",
        href: "/pranayama/online-yoga-meditation",
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
    specialties: [
      "Hatha Yoga",
      "Ashtanga Vinyasa",
      "Pranayama",
      "Meditation",
      "Ayurveda",
    ],
    experience: "15+ years teaching yoga teacher training",
    qualifications:
      "E-RYT 500 (Yoga Alliance), Advanced Ashtanga certification, Ayurvedic wellness training",
    bio: '"Yoga is a path of self-inquiry. I teach from the breath outward, guiding students to find alignment, steadiness, and ease — on the mat and in life." Mentored 1,500+ certified teachers now teaching across Europe, Russia, and the Americas.',
  },
  {
    name: "Senior Ashtanga & Philosophy Teacher",
    role: "Ashtanga Primary Series · Yoga Philosophy, Sutras, Sacred Texts",
    specialties: [
      "Ashtanga Primary Series",
      "Yoga Philosophy",
      "Yoga Sutras",
      "Sacred Texts",
    ],
    experience: "12+ years of practice and teaching",
    qualifications: "E-RYT 500, Ashtanga Yoga certification",
    bio: '"Asana is the beginning, not the end. I help students connect each posture to the deeper teachings of the eight limbs." Guides students in mastering the A and B series with a strong foundation in Sanskrit and tradition.',
  },
  {
    name: "Anatomy & Adjustment Specialist",
    role: "Anatomy, Biomechanics, Trauma-Informed Teaching, Alignment",
    specialties: [
      "Anatomy",
      "Biomechanics",
      "Trauma-Informed Teaching",
      "Alignment",
    ],
    experience: "10+ years in yoga anatomy and hands-on adjustment",
    qualifications: "E-RYT 200 / RYT 500, Anatomy and Adjustment training",
    bio: '"Safe alignment changes everything. I teach with anatomical precision so every student practices without injury." Developed the adjustment and alignment program for our 100, 200, and 300-hour courses.',
  },
  {
    name: "Meditation & Pranayama Teacher",
    role: "Pranayama, Vigyan Bhairav Tantra, Sound Healing, Kirtan",
    specialties: [
      "Pranayama",
      "Vigyan Bhairav Tantra",
      "Sound Healing",
      "Kirtan",
    ],
    experience: "10+ years guiding meditation retreats",
    qualifications:
      "RYT 500, Meditation teacher certification, Sound healing training",
    bio: '"The breath is the bridge between body and mind. My classes help students discover stillness and inner balance." Led 300+ meditation and kirtan sessions for retreat guests and YTT students.',
  },
];

export const faqs = [
  {
    question: "Which is the best yoga school in Goa?",
    answer:
      "The Hatha Yogashala in North Goa is consistently rated among the best yoga schools in Goa, offering Yoga Alliance-approved teacher training, small class sizes, beachside accommodation, and an experienced international teaching team.",
  },
  {
    question: "Is The Hatha Yogashala Yoga Alliance certified?",
    answer:
      "Yes. The Hatha Yogashala is a registered yoga school, and our 100, 200 and 300-hour yoga teacher training courses in Goa follow the Yoga Alliance-approved syllabus, making graduates eligible for worldwide registration.",
  },
  {
    question: "Where is The Hatha Yogashala located?",
    answer:
      "The Hatha Yogashala is located in Querim village, Pernem, North Goa, India — minutes from Querim and Arambol beaches and a short drive from Goa's international airports.",
  },
  {
    question: "Can beginners join yoga teacher training in Goa?",
    answer:
      "Absolutely. Our 100-hour and 200-hour courses warmly welcome beginners. Teacher training at The Hatha Yogashala is designed for all levels, from complete beginners to experienced practitioners.",
  },
  {
    question: "What is included in a retreat at The Hatha Yogashala?",
    answer:
      "Retreats include daily yoga and meditation, vegetarian meals, accommodation, and access to activities such as ice baths, sauna, ecstatic dance, sound healing, beach practice, and cultural excursions.",
  },
  {
    question: "How do I become a certified yoga teacher in Goa?",
    answer:
      "Complete a Yoga Alliance-approved 200-hour yoga teacher training (and 300-hour for advanced certification) at The Hatha Yogashala in Goa, then register with Yoga Alliance to teach worldwide.",
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
    question: "How do I reach The Hatha Yogashala?",
    answer:
      "Fly to Mopa (GOX) or Dabolim (GOI) airport in Goa. The ashram is about 25–30 minutes from Mopa; pickup can be arranged on request.",
  },
];

export const facilities = [
  {
    title: "Accommodation",
    text: "Clean, spacious rooms near the beach — mixed AC dorms, female AC dorms, twin-sharing AC, and private eco wooden cottages with hot water showers and Wi-Fi.",
    image:
      "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
    alt: "Eco wooden cottage accommodation at The Hatha Yogashala in Arambol, Goa",
  },
  {
    title: "Yoga Hall",
    text: "Open-air shalas among the palm trees of Querim, North Goa — a peaceful learning environment minutes from the sea.",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-06.webp",
    alt: "Open-air wooden yoga practice hall with mats at The Hatha Yogashala Goa",
  },
  {
    title: "Meals",
    text: "Three healthy vegetarian and vegan meals per day, prepared fresh to support your practice — sattvic, nourishing, and served daily.",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-01.webp",
    alt: "Wholesome vegetarian ashram thali meal served at The Hatha Yogashala in Pernem, Goa",
  },
  {
    title: "Student Support",
    text: "24/7 student support, course manuals, PDF library of spiritual and practical books, meditation music, and unlimited filtered drinking water.",
    image:
      "/images/hatha-yogashala/hatha-yogashala-pernem-goa-garden-lounge-candid-portrait-01.webp",
    alt: "Lush tropical ashram campus and student support at The Hatha Yogashala in North Goa",
  },
];

export const galleryItems = [
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
    alt: "Students practicing Hatha yoga asana alignment inside the shala at The Hatha Yogashala, Pernem, Goa",
    caption: "Hatha Asana Practice",
    category: "Yoga Training",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp",
    alt: "Morning sunrise beach yoga session on Querim beach with students from The Hatha Yogashala, Goa",
    caption: "Sunrise Beach Yoga",
    category: "Beach Yoga",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-candlelit-meditation-session-shala-01.webp",
    alt: "Evening candlelit meditation and sound healing in the wooden shala at The Hatha Yogashala, Goa",
    caption: "Candlelit Meditation",
    category: "Practice",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-wooden-cottage-exterior-01.webp",
    alt: "Eco wooden cottages in lush tropical garden setting at The Hatha Yogashala in Arambol, Goa",
    caption: "Eco Wooden Cottages",
    category: "Accommodation",
  },
  {
    src: "/images/accomodation/the-hatha-yogashala-arambol-goa-cottage-bedroom-interior-01.webp",
    alt: "Comfortable cottage bedroom interior with modern amenities at The Hatha Yogashala, Arambol, Goa",
    caption: "Cottage Bedroom Interior",
    category: "Accommodation",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-havan-fire-puja-opening-ceremony-01.webp",
    alt: "Traditional havan fire puja opening ceremony at The Hatha Yogashala yoga retreat in Pernem, Querim, Goa",
    caption: "Havan Fire Puja Ceremony",
    category: "Ceremony",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-flower-petal-om-mandala-ceremony-01.webp",
    alt: "Flower petal Om mandala made by students during opening ceremony at The Hatha Yogashala, Pernem, Goa",
    caption: "Flower Petal Om Mandala",
    category: "Ceremony",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ashram-vegetarian-thali-meal-01.webp",
    alt: "Wholesome vegetarian ashram thali meal served at The Hatha Yogashala in Pernem, Goa",
    caption: "Sattvic Ashram Meals",
    category: "Meals",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-ayurvedic-cooking-class-kitchen-01.webp",
    alt: "Students learning traditional Indian cooking and roti-making in the kitchen at The Hatha Yogashala, Pernem, Goa",
    caption: "Ayurvedic Cooking Workshop",
    category: "Meals",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-graduation-group-photo-celebration-01.webp",
    alt: "Group photo celebrating yoga teacher training graduation at The Hatha Yogashala, Pernem, Goa",
    caption: "Graduation Celebration",
    category: "Graduation",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-certificate-presentation-teacher-training-01.webp",
    alt: "Certificate presentation to graduating student at The Hatha Yogashala, Pernem, Goa",
    caption: "Certificate Presentation",
    category: "Graduation",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-beach-group-tree-pose-vrksasana-01.webp",
    alt: "Group tree pose Vrksasana practice along the sandy shore in Querim, Goa",
    caption: "Beach Asana Alignment",
    category: "Beach Yoga",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-wall-supported-headstand-practice-01.webp",
    alt: "Wall-supported headstand Sirsasana practice and alignment workshop at The Hatha Yogashala, Goa",
    caption: "Inversion Workshop",
    category: "Yoga Training",
  },
  {
    src: "/images/hatha-yogashala/hatha-yogashala-pernem-goa-garden-lounge-candid-portrait-01.webp",
    alt: "Students relaxing in the lush tropical garden lounge between sessions at The Hatha Yogashala, Goa",
    caption: "Garden Lounge & Community",
    category: "Student Life",
  },
];

export function makeMetadata(
  title,
  description,
  path = "/",
  image = "/images/hatha-yogashala/hatha-yogashala-pernem-goa-hatha-yoga-asana-practice-shala-01.webp",
  keywords = [],
) {
  const canonicalUrl = new URL(path, site.url).toString();

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    keywords: keywords,
    applicationCategory: "Yoga",
    inLanguage: "en-IN",

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
