export const site = {
  name: "The Hatha Yogashala",
  shortName: "Hatha Yogashala",
  tagline: "Rooted practice by the Goan coast",
  location: "Goa, India",
  seoLocation: "Goa",
  description:
    "Explore yoga teacher training, short courses, and restorative retreats with The Hatha Yogashala in Goa, India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.thehathayogashala.com",

  contact: {
    phone: "+91 98765 43210", // Replace with real number
    whatsapp: "+91 98765 43210", // Replace with real number
    email: "info@thehathayogashala.com", // Replace if needed
    address: "Goa, India", // Replace with complete address
    map: "https://maps.google.com", // Replace with Google Maps link
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

export function makeMetadata(title, description, path = "/") {
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
          url: "/images/course-goa-yoga.png",
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
      images: ["/images/course-goa-yoga.png"],
    },
  };
}
