export const site = {
  name: "The Hatha Yogashala",
  shortName: "Hatha Yogashala",
  tagline: "Rooted practice by the Goan coast",
  location: "Goa, India",
  seoLocation: "Goa",
  description:
    "Explore yoga teacher training, short courses, and restorative retreats with The Hatha Yogashala in Goa, India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.thehathayogashala.com",
  hasProductionUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  defaultImage: "/images/hero-goa-yoga.png",

  social: {
    instagram: "", // Replace with the verified Instagram URL
    facebook: "", // Replace with the verified Facebook URL
    youtube: "", // Replace with the verified YouTube URL
  },

  contact: {
    phone: "+91 98765 43210", // Replace with real number
    whatsapp: "+91 98765 43210", // Replace with real number
    email: "info@thehathayogashala.com", // Replace if needed
    address: "Goa, India", // Replace with complete address
    map: "https://maps.google.com", // Replace with Google Maps link
    directionsUrl: "https://maps.google.com", // Replace with a directions link
    mapEmbedUrl: "https://www.google.com/maps?q=Goa%2C%20India&output=embed", // Replace with the regional embed once confirmed
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export const pageSeo = {
  home: {
    title: "Yoga Teacher Training in Goa | The Hatha Yogashala",
    description:
      "Explore residential Hatha yoga teacher training and restorative retreats in Goa, with clear course scope and verified information.",
    path: "/",
  },
  about: {
    title: "About The Hatha Yogashala",
    description:
      "Learn about The Hatha Yogashala, a residential Hatha yoga school in Goa built around clear teaching, honest information, and a grounded relationship with the coast.",
    path: "/about",
  },
  teachers: {
    title: "Our Yoga Teachers in Goa",
    description:
      "Meet the faculty at The Hatha Yogashala. Teacher names, qualifications, and experience are published only after verification.",
    path: "/teachers",
  },
  certification: {
    title: "Certification & Verification",
    description:
      "Certification details for The Hatha Yogashala yoga teacher training programs in Goa, published only when approved by the school.",
    path: "/certification",
  },
  accommodation: {
    title: "Accommodation in Goa",
    description:
      "Review the rooms, meals, shared spaces, and amenities of The Hatha Yogashala residential yoga school in Goa.",
    path: "/accommodation",
  },
  pricing: {
    title: "Yoga Course Pricing in Goa",
    description:
      "Transparent dates and fees for yoga teacher training in Goa, with confirmed room categories and written fee breakdowns.",
    path: "/pricing",
  },
  contact: {
    title: "Contact The Hatha Yogashala",
    description:
      "Contact The Hatha Yogashala in Goa to ask questions about yoga teacher training, retreats, dates, fees, and travel.",
    path: "/contact",
  },
  apply: {
    title: "Apply for Yoga Teacher Training in Goa",
    description:
      "Submit your application for residential yoga teacher training or a restorative retreat at The Hatha Yogashala in Goa.",
    path: "/apply",
  },
  courses: {
    title: "Yoga Teacher Training & Short Courses in Goa",
    description:
      "Compare 100, 200, and 300-hour yoga teacher training and short courses at The Hatha Yogashala in Goa.",
    path: "/courses",
  },
  retreats: {
    title: "Yoga Retreats in Goa",
    description:
      "Restorative coastal yoga retreats in Goa at The Hatha Yogashala. Practice, rest, and time by the coast with confirmed details.",
    path: "/retreats",
  },
  blog: {
    title: "Yoga Blog & Course Guides",
    description:
      "Practical guides to choosing yoga teacher training, planning a Goa retreat, and building a sustainable practice.",
    path: "/blog",
  },
  gallery: {
    title: "Gallery | The Hatha Yogashala",
    description:
      "A balanced gallery of practice, stay, and coastal surroundings at The Hatha Yogashala in Goa.",
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

export const heroStats = [
  {
    key: "programs",
    label: "Yoga programs & retreats",
    value: 0,
    suffix: "+",
  },
  {
    key: "reviews",
    label: "Verified student reviews",
    value: null,
    suffix: "",
  },
  {
    key: "graduates",
    label: "Published graduate outcomes",
    value: null,
    suffix: "",
  },
];

export const reviewProfile = {
  googleBusinessUrl: "",
  rating: null,
  reviewCount: null,
};

export const testimonials = [];

export const travelOptions = [
  {
    label: "By air",
    text: "The nearest airport, transfer distance, and pickup service are confirmed in writing with your reservation.",
  },
  {
    label: "By train",
    text: "The recommended station and onward route are provided once the exact school address is confirmed.",
  },
  {
    label: "By bus",
    text: "Long-distance and local bus connections are outlined after the final location is published.",
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
    label: "Short Courses",
    children: [
      {
        label: "Sound Healing",
        href: "/courses/sound-healing-course-goa",
      },
      {
        label: "Meditation",
        href: "/courses/meditation-course-goa",
      },
      {
        label: "Ayurveda",
        href: "/courses/ayurveda-course-goa",
      },
      {
        label: "Adjustment & Alignment",
        href: "/courses/adjustment-alignment-course-goa",
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
    name: "[FOUNDER NAME]",
    role: "Founder & Lead Teacher",
    specialties: ["[Speciality]", "[Speciality]"],
    experience: "[Verified experience]",
    qualifications: "[Add verified qualifications]",
    bio: "Add an approved founder biography here, including only qualifications and teaching experience that can be verified.",
  },
  {
    name: "[TEACHER NAME]",
    role: "[Teaching role]",
    specialties: ["Hatha Yoga", "[Speciality]"],
    experience: "[Verified experience]",
    qualifications: "[Add verified qualifications]",
    bio: "Replace this editorial placeholder with an approved teacher introduction.",
  },
  {
    name: "[TEACHER NAME]",
    role: "[Teaching role]",
    specialties: ["Meditation", "[Speciality]"],
    experience: "[Verified experience]",
    qualifications: "[Add verified qualifications]",
    bio: "Replace this editorial placeholder with an approved teacher introduction.",
  },
  {
    name: "[TEACHER NAME]",
    role: "[Teaching role]",
    specialties: ["Anatomy", "[Speciality]"],
    experience: "[Verified experience]",
    qualifications: "[Add verified qualifications]",
    bio: "Replace this editorial placeholder with an approved teacher introduction.",
  },
];

export const faqs = [
  {
    question: "Can beginners apply for yoga teacher training in Goa?",
    answer:
      "Entry requirements will be confirmed on each course page before applications open. Share your current practice and any relevant health considerations in the application form so the school can advise you responsibly.",
  },
  {
    question: "Are course fees and accommodation included?",
    answer:
      "Confirmed tuition, room, meal, and material inclusions have not yet been supplied. The pricing page keeps each item separate so verified fees can be published without hidden assumptions.",
  },
  {
    question: "Which certification will I receive?",
    answer:
      "Certification details are awaiting school verification. No accreditation is claimed on this website until the registration name and verification link are provided.",
  },
  {
    question: "Where in Goa is the school located?",
    answer:
      "The exact address and map link are pending. Once supplied, the contact page will show the location together with practical arrival information.",
  },
  {
    question: "What should I bring to a residential program?",
    answer:
      "A practical packing list usually includes light practice clothing, a notebook, personal medication, sun protection, and a reusable water bottle. A final course-specific list should be confirmed before travel.",
  },
  {
    question: "How do I reserve a place?",
    answer:
      "Submit the application form with your preferred program and batch. A reservation is only confirmed after the school responds and provides verified payment instructions.",
  },
];

export const facilities = [
  {
    title: "Accommodation",
    text: "Room categories, occupancy, and amenities are awaiting confirmation.",
    image: "/images/accommodation-goa.png",
  },
  {
    title: "Yoga Hall",
    text: "Add verified hall details, capacity, props, and ventilation information.",
    image: "/images/course-goa-yoga.png",
  },
  {
    title: "Meals",
    text: "Add the approved meal plan, dietary options, and serving schedule.",
    image: "/images/accommodation-goa.png",
  },
  {
    title: "Student Support",
    text: "Add only support services that the school currently provides.",
    image: "/images/course-goa-yoga.png",
  },
];

export const galleryItems = [
  {
    src: "/images/course-goa-yoga.png",
    caption: "Yoga training in Goa",
    category: "Yoga Training",
  },
  {
    src: "/images/hero-goa-yoga.png",
    caption: "Morning meditation by the coast",
    category: "Practice",
  },
  {
    src: "/images/accommodation-goa.png",
    caption: "Accommodation concept",
    category: "Accommodation",
  },
  {
    src: "/images/course-goa-yoga.png",
    caption: "Open-air practice hall",
    category: "Yoga Training",
  },
  {
    src: "/images/accommodation-goa.png",
    caption: "Quiet room concept",
    category: "Accommodation",
  },
  {
    src: "/images/hero-goa-yoga.png",
    caption: "Coastal retreat rhythm",
    category: "Retreats",
  },
  {
    src: "/images/course-goa-yoga.png",
    caption: "Teaching practice",
    category: "Student Life",
  },
  {
    src: "/images/accommodation-goa.png",
    caption: "Residential details",
    category: "Student Life",
  },
  {
    src: "/images/hero-goa-yoga.png",
    caption: "Goa practice setting",
    category: "Excursions",
  },
  {
    src: "/images/accommodation-goa.png",
    caption: "Meal service placeholder",
    category: "Meals",
  },
  {
    src: "/images/course-goa-yoga.png",
    caption: "Graduation moment placeholder",
    category: "Graduation",
  },
];

export function makeMetadata(
  title,
  description,
  path = "/",
  image = "/images/course-goa-yoga.png",
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
