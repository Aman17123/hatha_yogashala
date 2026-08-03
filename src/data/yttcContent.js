/**
 * yttcContent.js — content config for the YTTCPage template
 * ------------------------------------------------------------------
 * Everything the course template renders is driven from this file.
 * The builder below derives most values from the shared course data
 * (src/data/coursesData.js) so all three course pages stay in sync,
 * then layers on template-specific copy (excursions, rules, outcomes,
 * pathway, tabs, checklists) written in the school's own voice.
 *
 * PLACEHOLDERS — anything marked with `// REPLACE:` is a value the
 * school should confirm before going live. The template renders fine
 * with them, but do not publish unverified numbers.
 * ------------------------------------------------------------------
 */

import { teacherTrainings } from "./coursesData";
import {
  galleryItems,
  site,
  teachers,
  testimonials,
  travelOptions,
  tripadvisorTestimonials,
} from "./siteData";

const LEVEL_ORDER = ["100-hour", "200-hour", "300-hour"];

function safe(value, fallback = "To be confirmed") {
  if (
    typeof value !== "string" ||
    value.trim().length === 0 ||
    value.startsWith("[")
  ) {
    return fallback;
  }
  return value;
}

function nextLevels(course) {
  const index = LEVEL_ORDER.indexOf(course.hours);
  if (index === -1) return [];
  return teacherTrainings
    .filter((item) => LEVEL_ORDER.indexOf(item.hours) > index)
    .slice(0, 2);
}

function hoursSplit(course) {
  const total = Number.parseInt(String(course.hours), 10) || 100;
  // REPLACE: adjust the hour split to match the confirmed syllabus.
  const split =
    total >= 300
      ? { asana: 0.34, anatomy: 0.2, philosophy: 0.24, teaching: 0.22 }
      : total >= 200
        ? { asana: 0.4, anatomy: 0.16, philosophy: 0.2, teaching: 0.24 }
        : { asana: 0.46, anatomy: 0.15, philosophy: 0.19, teaching: 0.2 };
  const round5 = (fraction) => Math.round((total * fraction) / 5) * 5;
  return {
    asana: round5(split.asana),
    anatomy: round5(split.anatomy),
    philosophy: round5(split.philosophy),
    teaching: round5(split.teaching),
    total,
  };
}

// Condense the course journey into the 4-step roadmap used by the
// compact timeline (Arrival → Opening & Basics → Intensive Practice →
// Graduation). Keeps the school's own copy; only merges when a course
// lists more than 4 steps.
function compactTimeline(journey) {
  if (!journey || journey.length <= 4) return journey || [];
  const [arrival, opening, foundation, ...rest] = journey;
  return [
    arrival,
    {
      icon: opening?.icon || "foundation",
      label: "Opening Ceremony & Basics",
      time: [opening?.time, foundation?.time].filter(Boolean).join(" · "),
      text: [opening?.text, foundation?.text].filter(Boolean).join(" "),
    },
    ...rest,
  ];
}

function findModule(course, keywords) {
  return (course.curriculum || []).find((module) =>
    keywords.some((word) =>
      module.title.toLowerCase().includes(word.toLowerCase()),
    ),
  );
}

function gainCards(course) {
  const definitions = [
    {
      icon: "anatomy",
      keywords: ["anatomy"],
      title: "Applied Anatomy",
      text: "Learn how the body moves in foundational poses and which muscles engage in each asana — the basic anatomical literacy that separates practicing blindly from practicing intelligently.",
    },
    {
      icon: "book",
      keywords: ["philosophy"],
      title: "Yoga Philosophy",
      text: "Begin with the Yamas and Niyamas — the ethical foundation every asana practice rests on — and understand why yoga is a way of life, not a workout.",
    },
    {
      icon: "breath",
      keywords: ["pranayama"],
      title: "Pranayama Techniques",
      text: "Learn Nadi Shodhana, Kapalabhati and Ujjayi from scratch. Within days you will feel the difference in your energy, focus and the quality of your sleep.",
    },
    {
      icon: "meditation",
      keywords: ["meditation"],
      title: "Deep Meditation",
      text: "Daily guided sessions introduce concentration and meditation — the skill that settles the mind before, during and between every practice.",
    },
    {
      icon: "asana",
      keywords: ["asana"],
      title: "Traditional Asanas",
      text: "Hatha and Ashtanga postures taught with alignment-first precision. You will not move to the next pose until the current one is understood in your body.",
    },
    {
      icon: "feather",
      keywords: ["ayurveda", "kriya", "mudra"],
      title: "Mantras, Kriyas & Ayurveda",
      text: "Sanskrit mantras, classical purification techniques and Ayurvedic lifestyle study complete the traditional Hatha syllabus and calm the nervous system.",
    },
  ];

  return definitions.map((item) => {
    const found = findModule(course, item.keywords);
    return { ...item, text: found ? found.content : item.text };
  });
}

function subjectTabs(course) {
  const definitions = [
    {
      id: "hatha",
      title: "Hatha",
      keywords: ["hatha"],
      fallback:
        "The slow, grounded half of the training — steady holds, precise alignment and the mechanics of each posture taught step by step.",
      topics: [
        "Standing, seated, supine and balance families",
        "Sun Salutations — classical Surya Namaskar",
        "Alignment cues and prop use",
        "Sanskrit names of key postures",
      ],
    },
    {
      id: "vinyasa",
      title: "Vinyasa",
      keywords: ["vinyasa", "ashtanga"],
      fallback:
        "Movement linked to breath — the flowing Ashtanga-style sequences that build heat, strength and a moving meditation.",
      topics: [
        "The Ashtanga Primary Series — A and B sequences",
        "Linking breath, bandhas and drishti",
        "Safe transitions and pacing",
        "Modifications for every level",
      ],
    },
    {
      id: "pranayama",
      title: "Pranayama",
      keywords: ["pranayama", "breath"],
      fallback:
        "Daily breathwork — classical techniques studied on the cushion and translated straight back into your own practice and teaching.",
      topics: [
        "Nadi Shodhana and the calming breath",
        "Kapalabhati and energising breath",
        "Ujjayi and breath awareness in asana",
        "Effects on the nervous system",
      ],
    },
    {
      id: "philosophy",
      title: "Philosophy",
      keywords: ["philosophy", "sutras", "bhagavad", "samkhya"],
      fallback:
        "The eight limbs, the Yoga Sutras and the Bhagavad Gita — studied not as history but as tools you can use on the mat and in daily life.",
      topics: [
        "The eight limbs of Patanjali",
        "Commentary over the Yoga Sutras",
        "The Bhagavad Gita and the paths of yoga",
        "Yama, niyama and ethical teaching",
      ],
    },
    {
      id: "anatomy",
      title: "Anatomy",
      keywords: ["anatomy", "physiology"],
      fallback:
        "Practical anatomy for yoga — how bones, joints, muscles and the nervous system work together in the postures you teach.",
      topics: [
        "Skeletal structure and joint movement",
        "Key muscle groups in common postures",
        "The nervous system and breath",
        "Safe alignment and contraindications",
      ],
    },
    {
      id: "meditation",
      title: "Meditation",
      keywords: ["meditation", "mantra", "tantra", "mudra"],
      fallback:
        "Guided meditation, mantra chanting and techniques for steadying the mind — the part of the training students often carry home first.",
      topics: [
        "Guided daily meditation",
        "Mantra chanting and kirtan",
        "Mudras and breath-centred focus",
        "Building a sustainable home practice",
      ],
    },
    {
      id: "cleansing",
      title: "Cleansing & Lifestyle",
      keywords: ["kriya", "ayurveda", "mudra", "lifestyle"],
      fallback:
        "The traditional Hatha extras — purification practices, Ayurveda and the yogic daily rhythm that support practice and teaching.",
      topics: [
        "Shatkarma — classical purification techniques",
        "Ayurveda, doshas and the yogic diet",
        "The chakras and the energetic body",
        "Daily rhythm, rest and self-care",
      ],
    },
  ];

  return definitions.map((subject) => {
    const foundModule = findModule(course, subject.keywords);
    return {
      ...subject,
      description: foundModule ? foundModule.content : subject.fallback,
    };
  });
}

function outcomesWithImages(course) {
  const images = [
    "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-asana-practice-3.webp",
    "/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp",
    "/images/tha_hatha/the-hatha-yogashala-goa-yoga-philosophy-class.jpg",
    "/images/tha_hatha/the-hatha-yogashala-goa-group-yoga-class-warrior-pose.jpg",
    "/images/tha_hatha/the-hatha-yogashala-goa-yoga-alliance-certification.jpg",
    "/images/tha_hatha/the-hatha-yogashala-goa-yoga-students-group-photo.jpg",
    "/images/tha_hatha/the-hatha-yogashala-goa-beach-yoga-wheel-pose-students.webp",
  ];
  return (course.learningOutcomes || []).map((title, index) => ({
    title,
    image: images[index % images.length],
    alt: `Students during ${course.name} — ${title}`,
  }));
}

export function yttcContent(course) {
  const hours = hoursSplit(course);
  const next = nextLevels(course);
  const featuredTeachers = teachers
    .filter((teacher) => teacher.name && !teacher.name.startsWith("["))
    .map((teacher, index) => ({
      ...teacher,
      // REPLACE: assign the correct faculty portrait per teacher.
      image:
        index === 0
          ? "/images/tha_hatha/Pradeep-Singh.png"
          : index === 1
            ? "/images/tha_hatha/Surbhi-Babhulkar.png"
            : "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-portrait.webp",
    }));
  const currency = course.pricing?.currency || "€";

  // REPLACE: confirm the pre-discount list price for each room tier.
  const listShared =
    course.hours === "300-hour"
      ? 1199
      : course.hours === "200-hour"
        ? 1049
        : 899;
  const listPrivate =
    course.hours === "300-hour"
      ? 1799
      : course.hours === "200-hour"
        ? 1549
        : 1249;

  const canTeachAfter =
    course.hours === "100-hour"
      ? "Not on its own — completes as Part 1 of the 200-hour"
      : course.hours === "300-hour"
        ? "Yes — advanced 300-hour teaching standing"
        : "Yes — register with Yoga Alliance and teach worldwide";

  const nextStep =
    course.hours === "100-hour"
      ? "Add the 200-hour second half within 21 months"
      : course.hours === "200-hour"
        ? "Advance to the 300-hour for a combined 500-hour standing"
        : "Combine 200 + 300-hour for a 500-hour standing";

  const attendancePolicy =
    "Full attendance is required to receive the completion certificate. Requests to miss any session must be raised with the school in advance.";

  return {
    // ── Hero ────────────────────────────────────────────────
    hero: {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Yoga courses", href: "/courses" },
        { label: `${course.hours} YTTC` },
      ],
      pills: [
        { label: "Duration", value: safe(course.duration), icon: "clock" },
        { label: "Level", value: safe(course.level), icon: "sprout" },
        { label: "Certifying body", value: "Yoga Alliance", icon: "shield" },
        { label: "Location", value: "North Goa", icon: "map" },
      ],
      text: safe(course.heroIntroduction || course.description),
      image: course.image,
      subtitle: safe(course.level),
      trust: [
        { text: "Yoga Alliance USA certified", icon: "shield" },
        { text: "Ministry of AYUSH recognized", icon: "award" },
        { text: "Small batches — personal mentoring", icon: "users" },
        {
          text: `${(course.graduates || 0).toLocaleString("en-IN")} graduates worldwide`,
          icon: "grad",
        },
      ],
    },

    // ── Stats band (animated counters) ──────────────────────
    stats: [
      {
        value: course.graduates || 3500,
        suffix: "+",
        label: "Students trained worldwide",
        icon: "users",
      },
      {
        value: 45,
        suffix: "+",
        label: "Countries represented",
        icon: "globe",
      },
      {
        value: 25,
        suffix: "+",
        label: "Years of combined teaching experience",
        icon: "award",
      },
      {
        value: course.rating || 4.9,
        decimals: 1,
        suffix: "",
        label: "Average student rating",
        icon: "star",
      },
    ],

    // ── What you get ────────────────────────────────────────
    gain: gainCards(course),

    // ── Course at a glance (sticky card) ────────────────────
    glance: {
      details: [
        { label: "Duration", value: safe(course.duration), icon: "clock" },
        {
          label: "Yoga styles",
          value: course.yogaStyles.join(", "),
          icon: "style",
        },
        { label: "Batch size", value: safe(course.batchSize), icon: "users" },
        {
          label: "Language",
          value: safe(course.teachingLanguage),
          icon: "globe",
        },
        { label: "Location", value: safe(course.location), icon: "map" },
        { label: "Start dates", value: safe(course.date), icon: "calendar" },
        { label: "Meals", value: safe(course.meals), icon: "salad" },
        { label: "Accommodation", value: safe(course.room), icon: "home" },
      ],
      pricing: {
        currency,
        note: "All-inclusive residential fee — training, room, meals, kit, manual and certification.",
        rooms: [
          {
            id: "shared",
            label: "Double Shared",
            current: safe(course.price),
            original: `${currency}${listShared}`,
          },
          {
            id: "private",
            label: "Private Room",
            current: safe(course.privatePrice),
            original: `${currency}${listPrivate}`,
          },
        ],
      },
      trust: [
        {
          text: "Yoga Alliance-approved certificate",
          icon: "shield",
        },
        {
          text: "Small batches — personal mentoring",
          icon: "users",
        },
        {
          text: `${(course.graduates || 0).toLocaleString("en-IN")}+ graduates worldwide`,
          icon: "grad",
        },
        {
          text: "24/7 on-campus student support",
          icon: "heart",
        },
      ],
    },

    // ── Quick-nav jump links ───────────────────────────────
    quickNav: [
      { id: "overview", label: "Overview" },
      { id: "syllabus", label: "Syllabus" },
      { id: "schedule", label: "Schedule" },
      { id: "dates-fees", label: "Dates & Fees" },
      { id: "teachers", label: "Teachers" },
      { id: "accommodation", label: "Accommodation" },
      { id: "reviews", label: "Reviews" },
      { id: "faq", label: "FAQ" },
    ],

    // ── Sticky booking sidebar ─────────────────────────────
    sidebar: {
      badge: String(course.cardBadge || "").trim() || "Booking Open",
      pricing: {
        currency: course.pricing?.currency || "EUR",
        shared: course.pricing?.shared,
        private: course.pricing?.private,
        listShared: `€${listShared}`,
        listPrivate: `€${listPrivate}`,
        note: "All-inclusive residential fee — training, room, meals, kit, manual and certification.",
      },
      details: [
        { label: "Duration", value: safe(course.duration), icon: "clock" },
        { label: "Level", value: safe(course.level), icon: "sprout" },
        { label: "Batch size", value: safe(course.batchSize), icon: "users" },
        { label: "Meals", value: safe(course.meals), icon: "salad" },
      ],
      inclusions: (course.inclusions || []).slice(0, 6),
      rating: course.rating || 4.9,
      graduates: course.graduates || 3500,
      trust: [
        { text: "Yoga Alliance-approved certificate", icon: "shield" },
        { text: "Small batches — personal mentoring", icon: "users" },
        {
          text: `${(course.graduates || 0).toLocaleString("en-IN")}+ graduates worldwide`,
          icon: "grad",
        },
      ],
    },

    // ── Course overview ─────────────────────────────────────
    overview: {
      paragraphs: course.overview,
      credential: {
        eyebrow: "Credential",
        title: `${course.hours} — ${safe(course.certification)}`,
        text: safe(course.outcome),
        link: "/certification",
      },
    },

    // ── Who should join ─────────────────────────────────────
    whoShouldJoin: course.whoCanJoin || [],
    requirements: [
      {
        label: "Age",
        value: "18 years and above (younger students with a guardian in writing)",
      },
      {
        label: "Fitness level",
        value: "No prior experience required — all levels welcome",
      },
      { label: "Language", value: safe(course.teachingLanguage) },
      {
        label: "Health & contraindications",
        value:
          "Share injuries, pregnancy, or any condition with the school before booking",
      },
      { label: "Attendance", value: attendancePolicy },
    ],

    // ── Why choose us ───────────────────────────────────────
    whyChoose: course.whyChoose || [],

    // ── Curriculum ──────────────────────────────────────────
    curriculum: {
      hours,
      categories: [
        {
          label: "Asana, Pranayama & Meditation",
          hours: hours.asana,
          icon: "practice",
          sub: ["Asana", "Pranayama", "Meditation"],
        },
        {
          label: "Anatomy & Physiology",
          hours: hours.anatomy,
          icon: "anatomy",
          sub: ["Skeletal System", "Muscular System", "Subtle Body"],
        },
        {
          label: "Philosophy & Lifestyle",
          hours: hours.philosophy,
          icon: "book",
          sub: ["History", "Philosophy", "Ethics"],
        },
        {
          label: "Teaching Methodology & Practicum",
          hours: hours.teaching,
          icon: "teach",
          sub: ["Methodology", "Development", "Practicum"],
        },
      ],
      tabs: subjectTabs(course),
      topicPills: [
        ...new Set([...course.focus, ...(course.yogaStyles || [])]),
      ].slice(0, 8),
    },

    // ── Teachers ─────────────────────────────────────────────
    teachers: featuredTeachers,

    // ── Certification ───────────────────────────────────────
    certification: {
      text: `${safe(course.certification)}. Attendance and assessment conditions are confirmed in writing before enrolment.`,
      bodies: [
        {
          name: "Yoga Alliance",
          src: "/images/yoga-alliance-logo.webp",
          note: "Registered school (RYS) — graduates can register as RYT",
        },
        {
          name: "Ministry of AYUSH",
          src: "/images/ayush-logo.jpg",
          note: "India's ministry for traditional systems of wellness",
        },
      ],
      sample: {
        src: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-alliance-certification.jpg",
        alt: "Sample completion certificate from Hatha Yogashala in Goa",
      },
    },

    // ── Program timeline (4-step compact roadmap) ───────────
    timeline: compactTimeline(course.journey || []),

    // ── Daily schedule ──────────────────────────────────────
    schedule: (course.dailySchedule || course.schedule || []).map(
      ([time, event]) => ({ time, event }),
    ),

    // ── Pathway comparison ──────────────────────────────────
    pathway: {
      current: course,
      next,
      canTeachAfter,
      nextStep,
      rows: [
        ["Who it's for", course.bestFor, ...next.map((item) => item.bestFor)],
        [
          "Certification status",
          safe(course.certification),
          ...next.map((item) => safe(item.certification)),
        ],
        [
          "Prior experience needed",
          course.prerequisites.join(", "),
          ...next.map((item) => item.prerequisites.join(", ")),
        ],
        [
          "Can you teach after?",
          canTeachAfter,
          ...next.map((item) =>
            item.hours === "300-hour"
              ? "Yes — advanced 300-hour teaching standing"
              : "Yes — register with Yoga Alliance",
          ),
        ],
        [
          "Duration",
          course.duration,
          ...next.map((item) => item.duration),
        ],
        [
          "Typical cost",
          `${currency}${course.price} shared / ${currency}${course.privatePrice} private`,
          ...next.map(
            (item) =>
              `${currency}${item.price} shared / ${currency}${item.privatePrice} private`,
          ),
        ],
        ["Next step", nextStep, ...next.map((item) => "Continue the pathway")],
      ],
    },

    // ── Outcomes ─────────────────────────────────────────────
    outcomes: outcomesWithImages(course),

    // ── Excursions ──────────────────────────────────────────
    // REPLACE: swap in the school's confirmed excursion list.
    excursions: [
      {
        title: "Temple visits",
        text: "Guided visits to local temples, with history and ritual explained by the faculty.",
        image:
          "/images/tha_hatha/the-hatha-yogashala-goa-yoga-philosophy-class.jpg",
        alt: "Students exploring local temple culture near Hatha Yogashala",
      },
      {
        title: "Sunrise points",
        text: "Early-morning beach and cliff viewpoints for quiet sunrise practice.",
        image:
          "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
        alt: "Sunrise meditation spot near the Goa coast",
      },
      {
        title: "Nature sites",
        text: "River and waterfall walks through the green North-Goa countryside.",
        image:
          "/images/tha_hatha/the-hatha-yogashala-goa-beach-yoga-wheel-pose-students.webp",
        alt: "Nature walk through the North Goa landscape",
      },
      {
        title: "Cultural landmarks",
        text: "Market days, forts and heritage villages that show the real Goa beyond the beach.",
        image:
          "/images/tha_hatha/the-hatha-yogashala-goa-yoga-students-group-photo.jpg",
        alt: "Students on a cultural outing near Querim, North Goa",
      },
    ],

    // ── Rules & code of conduct ─────────────────────────────
    rules: [
      {
        icon: "clipboard",
        title: "Attendance",
        text: attendancePolicy,
      },
      {
        icon: "clock",
        title: "Punctuality",
        text: "Practice and class start on time. Repeated lateness is recorded and may affect completion.",
      },
      {
        icon: "moon",
        title: "Quiet hours",
        text: "Respect early-morning silence and evening quiet so every student can rest and study.",
      },
      {
        icon: "leaf",
        title: "Dietary & lifestyle",
        text: "The course is residential and sattvic. Alcohol, tobacco and non-prescribed substances are not part of the programme.",
      },
      {
        icon: "shirt",
        title: "Dress code",
        text: "Comfortable, modest practice wear for the shala. Remove footwear before entering practice spaces.",
      },
      {
        icon: "heart",
        title: "Health disclosure",
        text: "Share relevant health, injury, pregnancy and accessibility needs before booking and update the school if anything changes.",
      },
      {
        icon: "receipt",
        title: "Refund & cancellation",
        text: "Deposits, refunds and transfers follow the written policy. Review the payment policy before paying.",
      },
    ],

    // ── Batches & pricing ───────────────────────────────────
    batches: (course.courseDates || []).map((batch) => ({
      ...batch,
      availabilityLabel:
        String(batch.availability || "").toLowerCase().includes("filling")
          ? "Filling Fast"
          : "Seats Available",
      availabilityType: String(batch.availability || "")
        .toLowerCase()
        .includes("filling")
        ? "filling"
        : "open",
    })),

    // ── Included / not included / what to bring ─────────────
    packageTabs: [
      {
        id: "included",
        title: "What's Included",
        items: course.inclusions,
      },
      {
        id: "not-included",
        title: "What's Not Included",
        items: course.exclusions,
      },
      {
        id: "bring",
        title: "What to Bring",
        items: [
          "Comfortable practice clothing for warm weather",
          "A reusable water bottle and personal toiletries",
          "Personal medication and any health documents",
          "A notebook and pen for classes",
          "Sun and rain protection for the season",
          // REPLACE: add any school-specific packing requirements
          "A light shawl or wrap for meditation",
        ],
      },
    ],

    // ── Accommodation & food ────────────────────────────────
    accommodation: course.accommodation || {
      overview: safe(course.room),
      food: safe(course.meals),
      images: galleryItems.slice(0, 3).map((item) => ({
        src: item.src,
        alt: item.alt,
        caption: item.caption,
      })),
    },
    stayChips: [
      { icon: "home", title: "Private, Twin & Dorms", text: "Clean rooms near the beach" },
      { icon: "wifi", title: "Wi-Fi & Hot Water", text: "In every room" },
      { icon: "bath", title: "Daily Housekeeping", text: "Clean & hygienic" },
      { icon: "map", title: "Minutes from the Sea", text: "Querim beach on foot" },
    ],
    foodChips: [
      { icon: "leaf", title: "Pure Sattvic Diet", text: "Prepared fresh daily" },
      { icon: "salad", title: "3 Meals a Day", text: "Monday to Saturday morning" },
      { icon: "droplets", title: "Filtered Water", text: "Unlimited, always available" },
      { icon: "sun", title: "Dietary Options", text: "Shared with notice" },
    ],

    // ── Gallery ─────────────────────────────────────────────
    gallery: galleryItems,

    // ── Reviews ─────────────────────────────────────────────
    reviews: {
      google: testimonials,
      tripadvisor: tripadvisorTestimonials,
    },

    // ── FAQ ─────────────────────────────────────────────────
    faq: course.faq.length
      ? course.faq
      : [
          {
            question: `Who can join the ${course.hours} course?`,
            answer: safe(course.bestFor),
          },
          {
            question: "Is the certificate recognised?",
            answer: `${safe(course.certification)}. Exact registration steps are confirmed in writing.`,
          },
          {
            question: "What does the fee include?",
            answer: course.inclusions.join(". "),
          },
        ],

    // ── Directions ──────────────────────────────────────────
    directions: {
      address: site.contact.address,
      travel: [
        ...travelOptions,
        {
          label: "By car",
          text: "Drive along the NH66 coast road toward Pernem; parking and precise directions are shared with your written booking confirmation.",
        },
      ],
    },
  };
}
