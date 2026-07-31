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
 */

// ---------------------------------------------------------------------
// 100-HOUR — Foundation
// ---------------------------------------------------------------------
const hundredHour = {
  slug: "100-hour-yoga-teacher-training-goa",
  hours: "100-hour",
  name: "100-Hour Yoga Teacher Training in Goa",
  level: "Foundation",
  duration: "[VERIFY: e.g. 12 days residential]",
  bestFor:
    "Practitioners who want a structured entry point before committing to a full 200-hour certification, and hobbyist practitioners deepening a home practice.",
  outcome:
    "A working foundation in Hatha asana, breath, and study habits — not a stand-alone teaching certification.",
  description:
    "A shorter residential foundation covering safe posture practice, breath awareness, and the study habits needed before stepping into a certifying 200-hour course. Ideal as a low-commitment first step into structured yoga study in Goa.",
  focus: [
    "Posture foundations",
    "Breath awareness",
    "Study & observation skills",
  ],
  overview: [
    "This is an introductory, non-certifying foundation course. It exists for students who want to test residential training, build consistency, and prepare for a 200-hour certification later — without the full commitment of a teaching qualification upfront.",
    "Daily practice is deliberately paced slower than the 200-hour track, with more repetition and instructor observation time per student.",
  ],
  designedFor: [
    "First-time residential students",
    "Practitioners deciding whether teacher training is right for them",
    "Anyone wanting a structured but lower-commitment introduction",
  ],
  prerequisites: [
    "No prior teaching experience required",
    "Basic familiarity with sun salutations recommended but not mandatory",
    "Health and mobility needs shared with the school before booking",
  ],
  curriculum: [
    {
      title: "Asana foundations",
      content:
        "[VERIFY exact hours] Core standing, seated, and supine postures with an emphasis on alignment cues and safe entry/exit, rather than advanced variations.",
    },
    {
      title: "Breath awareness",
      content:
        "[VERIFY exact hours] Introductory Ujjayi breath and diaphragmatic breathing — groundwork for pranayama study at the 200-hour level, not full pranayama technique.",
    },
    {
      title: "Observation & self-practice",
      content:
        "[VERIFY exact hours] Guided journaling and peer observation exercises to build the habit of noticing alignment and breath in others, ahead of any teaching component.",
    },
  ],
  schedule: [
    ["Morning", "Guided Hatha practice (slower pace, more repetition)"],
    ["Midday", "Breath work and short group discussion"],
    ["Evening", "Free practice or optional restorative session"],
  ],
  learningOutcomes: [
    "A personal Hatha practice built on correct alignment",
    "Comfort with basic breath techniques",
    "Clarity on whether to continue to 200-hour certification",
  ],
  inclusions: [
    "Residential tuition",
    "Course handouts",
    "Meals and stay per written offer",
  ],
  exclusions: [
    "Flights, visas, insurance",
    "Transfers",
    "200-hour certification (separate course)",
  ],
};

// ---------------------------------------------------------------------
// 200-HOUR — Certifying teacher training
// ---------------------------------------------------------------------
const twoHundredHour = {
  slug: "200-hour-yoga-teacher-training-goa",
  hours: "200-hour",
  name: "200-Hour Yoga Teacher Training in Goa",
  level: "Foundational teacher training (certifying)",
  duration: "[VERIFY: e.g. 25 days residential]",
  bestFor:
    "Aspiring teachers and committed practitioners seeking their first teaching certification.",
  outcome:
    "[VERIFY once certification body confirmed] A foundational teaching certification recognised for studio and independent teaching.",
  description:
    "Our core residential certification: Hatha asana, pranayama, yoga philosophy, functional anatomy, and supervised teaching practice, structured to the hour breakdown required for certification.",
  focus: [
    "Hatha practice",
    "Teaching methodology",
    "Yoga philosophy",
    "Functional anatomy",
  ],
  featured: true,
  overview: [
    "This is the school's primary certifying course, built around daily asana practice, philosophy study, anatomy, and progressively increasing teaching practicums.",
    "Students graduate with a supervised teaching record, not just theoretical study — practicums begin in week two and continue through to a final assessed class.",
  ],
  designedFor: [
    "Students ready to teach after graduation",
    "Practitioners wanting deeper philosophical and anatomical study",
    "Those seeking a certification with a documented practicum record",
  ],
  prerequisites: [
    "[VERIFY: minimum practice experience, e.g. 1 year consistent asana practice]",
    "Comfort with a full daily practice schedule",
    "Health and accessibility needs shared before booking",
  ],
  curriculum: [
    {
      title: "Asana & sequencing",
      content:
        "[VERIFY hours] Full Hatha posture catalogue with progressive sequencing principles, adjustments, and modification for common limitations.",
    },
    {
      title: "Pranayama & meditation",
      content:
        "[VERIFY hours] Structured pranayama techniques building on 100-hour breath foundations, plus seated meditation and concentration practices.",
    },
    {
      title: "Philosophy & ethics",
      content:
        "[VERIFY reading list] Foundational philosophical texts, yogic ethics (yamas/niyamas), and the teacher-student relationship, including boundaries and consent.",
    },
    {
      title: "Anatomy & teaching practicum",
      content:
        "[VERIFY hours] Functional anatomy, contraindications, and supervised teaching practice building from partner-teaching to a full assessed class.",
    },
  ],
  schedule: [
    ["Morning", "Asana practice and alignment workshop"],
    ["Midday", "Philosophy, anatomy, or pranayama theory block"],
    ["Afternoon", "Teaching practicum (from week 2 onward)"],
    ["Evening", "Meditation and reflection"],
  ],
  learningOutcomes: [
    "A confident, safe personal Hatha practice",
    "Working knowledge of pranayama and meditation techniques",
    "Documented supervised teaching practice",
    "[VERIFY] Eligibility for the confirmed certification pathway",
  ],
  inclusions: [
    "Residential tuition",
    "Course manual",
    "Meals and stay per written offer",
  ],
  exclusions: ["Flights, visas, insurance", "Transfers", "Personal expenses"],
};

// ---------------------------------------------------------------------
// 300-HOUR — Advanced study
// ---------------------------------------------------------------------
const threeHundredHour = {
  slug: "300-hour-yoga-teacher-training-goa",
  hours: "300-hour",
  name: "300-Hour Yoga Teacher Training in Goa",
  level: "Advanced study (for certified 200-hour teachers)",
  duration: "[VERIFY: e.g. 30 days residential]",
  bestFor:
    "Certified teachers seeking deeper study, mentored teaching, and specialisation.",
  outcome:
    "[VERIFY] Advanced certification building toward a combined 500-hour standing once both courses are completed.",
  description:
    "An advanced course for teachers who already hold a 200-hour certification and want to refine sequencing, deepen philosophy study, and take on mentored teaching with real students.",
  focus: [
    "Advanced sequencing",
    "Mentored teaching",
    "Applied philosophy",
    "Specialised populations",
  ],
  overview: [
    "Unlike the 200-hour course, this track assumes existing teaching experience and shifts weight toward mentorship, observation of the student's own teaching style, and refinement rather than introducing new foundational material.",
    "Students take primary responsibility for planned classes with real students under supervision, with structured feedback sessions replacing much of the lecture format used at the 200-hour level.",
  ],
  designedFor: [
    "Graduates of a recognised 200-hour certification",
    "Practising teachers wanting to refine their voice and sequencing",
    "Teachers preparing to work with specific populations (e.g. beginners, injury adaptation)",
  ],
  prerequisites: [
    "[VERIFY] Completed 200-hour certification from a recognised school",
    "Active teaching experience preferred",
    "Health and accessibility needs shared before booking",
  ],
  curriculum: [
    {
      title: "Advanced asana & adjustments",
      content:
        "[VERIFY hours] Refined hands-on and verbal adjustment technique, working with consent-based practice and more complex postures.",
    },
    {
      title: "Applied philosophy",
      content:
        "[VERIFY reading list] Deeper textual study connected directly to teaching decisions — sequencing philosophy, class themes, and student communication.",
    },
    {
      title: "Mentored teaching",
      content:
        "[VERIFY hours] Teachers plan and lead full classes for real students, with structured feedback from lead faculty after each session.",
    },
    {
      title: "Specialisation elective",
      content:
        "[VERIFY options] An elective module — e.g. teaching beginners, injury-aware sequencing, or restorative practice — chosen per batch.",
    },
  ],
  schedule: [
    ["Morning", "Advanced personal practice"],
    ["Midday", "Applied philosophy & sequencing workshop"],
    ["Afternoon", "Mentored teaching sessions with feedback"],
    ["Evening", "Elective specialisation module"],
  ],
  learningOutcomes: [
    "Refined personal teaching voice and sequencing ability",
    "Experience teaching real students under mentorship",
    "[VERIFY] Progress toward combined 500-hour standing",
  ],
  inclusions: [
    "Residential tuition",
    "Course manual",
    "Meals and stay per written offer",
  ],
  exclusions: ["Flights, visas, insurance", "Transfers", "Personal expenses"],
};

export const mainCourses = [hundredHour, twoHundredHour, threeHundredHour];

// ---------------------------------------------------------------------
// SHORT COURSES
// Kept intentionally minimal — DO NOT publish these routes until real
// curriculum, level, duration, and facilitator details are supplied.
// `published: false` should be checked in generateStaticParams so these
// slugs return 404 rather than a thin/placeholder page going live.
// ---------------------------------------------------------------------
export const shortCourses = [
  {
    slug: "meditation-course-goa",
    hours: "Short course",
    name: "Meditation Course in Goa",
    published: false,
    level: "All levels",
    duration: "[Add duration]",
    bestFor: "Students developing a steady personal meditation practice",
    outcome: "[Add verified outcome]",
    description:
      "A practical introduction to attention, breath, and sustainable meditation routines.",
    focus: ["Breath awareness", "Concentration", "Reflection"],
  },
  {
    slug: "sound-healing-course-goa",
    hours: "Short course",
    name: "Sound Healing Course in Goa",
    published: false,
    level: "[Add level]",
    duration: "[Add duration]",
    bestFor: "[Add suitability]",
    outcome: "[Add verified outcome]",
    description:
      "Course scope, facilitator credentials, instruments, and certification status pending.",
    focus: ["[Add module]", "[Add module]", "[Add module]"],
  },
  {
    slug: "ayurveda-course-goa",
    hours: "Short course",
    name: "Ayurveda Course in Goa",
    published: false,
    level: "[Add level]",
    duration: "[Add duration]",
    bestFor: "[Add suitability]",
    outcome: "[Add verified outcome]",
    description:
      "Placeholder course outline awaiting an approved syllabus and facilitator details.",
    focus: ["[Add module]", "[Add module]", "[Add module]"],
  },
  {
    slug: "adjustment-alignment-course-goa",
    hours: "Short course",
    name: "Adjustment & Alignment Course in Goa",
    published: false,
    level: "[Add level]",
    duration: "[Add duration]",
    bestFor: "[Add suitability]",
    outcome: "[Add verified outcome]",
    description:
      "A skills course. Final scope, consent practices, and teacher credentials require approval.",
    focus: ["Observation", "Consent-led assists", "Clear cueing"],
  },
];

const retreatGallery = [
  {
    src: "/images/hero-goa-yoga.png",
    alt: "Yoga practitioner meditating in a peaceful coastal Goa setting",
    caption: "Morning practice by the coast",
  },
  {
    src: "/images/course-goa-yoga.png",
    alt: "Small group studying yoga alignment in Goa",
    caption: "Guided Hatha practice",
  },
  {
    src: "/images/accommodation-goa.png",
    alt: "Calm residential room representing accommodation choices in Goa",
    caption: "Residential stay",
  },
  {
    src: "/images/goa-coast-yoga-retreat.png",
    alt: "Palm-fringed Goa coastline beside a quiet nature path",
    caption: "Time to rest and explore",
  },
  {
    src: "/images/pranayama-meditation-goa.png",
    alt: "Pranayama and breathwork practice in a peaceful tropical shala",
    caption: "Breath and meditation",
  },
  {
    src: "/images/hatha-yoga-class-goa.png",
    alt: "Teacher observing a student during a Hatha yoga practice",
    caption: "Personal guidance",
  },
];

// Common fields genuinely shared across ALL courses (business facts, not
// content) are fine to spread — these aren't what Google evaluates for
// duplicate content; body copy is.
export const courses = [...mainCourses, ...shortCourses].map((course) => ({
  location: "Goa, India",
  price: "Fee to be confirmed",
  privatePrice: "Fee to be confirmed",
  certification: "Confirmed in writing before enrolment",
  image: "/images/course-goa-yoga.png",
  date: "Dates to be announced",
  bookingStatus: "Confirm with the school",
  format: "Residential",
  yogaStyles: ["Hatha Yoga"],
  teachingLanguage: "English",
  batchSize: "Confirmed with the batch",
  room: "Room options confirmed in writing",
  meals: "Meal plan confirmed in writing",
  faq: [],
  courseDates: [],
  includedActivities: [],
  optionalGoaIdeas: [
    "Plan independent coastal activities around the confirmed timetable, weather, transport, cost, and safety.",
  ],
  ...course, // course-specific unique fields always win over shared defaults above
}));

export const teacherTrainings = mainCourses;
export const shortPrograms = shortCourses;

// ---------------------------------------------------------------------
// RETREATS — day-count still drives the template, but with genuinely
// different itinerary emphasis per length rather than only a category
// label swap, so 3/5/7/10-day pages aren't near-duplicates either.
// ---------------------------------------------------------------------
const retreatProfiles = {
  3: {
    category: "Coastal reset",
    emphasis:
      "A short, high-intensity reset: two guided practices a day, minimal free time, designed for travellers with limited leave.",
    whoFor: [
      "Travellers with limited time",
      "First-time retreat guests testing the format",
      "Weekend-extension visitors",
    ],
  },
  5: {
    category: "Restorative stay",
    emphasis:
      "A balanced week-minus-two: guided practice each morning and evening, with open afternoons for rest or independent exploring.",
    whoFor: [
      "Practitioners wanting genuine rest alongside practice",
      "Returning students",
      "Couples or small groups",
    ],
  },
  7: {
    category: "Full week immersion",
    emphasis:
      "A full week with a progressive practice arc — lighter opening days building to deeper pranayama and meditation work by the midpoint.",
    whoFor: [
      "Practitioners ready for a progressive arc, not just repeated daily sessions",
      "Solo travellers wanting a full reset",
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

export const retreats = [3, 5, 7, 10].map((days) => {
  const profile = retreatProfiles[days];
  return {
    slug: `${days}-day-yoga-retreat-goa`,
    days,
    name: `${days}-Day Yoga Retreat in Goa`,
    category: profile.category,
    description: profile.emphasis,
    benefits: [
      "Guided practice schedule",
      "Time for rest",
      "Goa coastal setting",
    ],
    price: "Fee to be confirmed",
    image:
      days % 2 ? "/images/hero-goa-yoga.png" : "/images/course-goa-yoga.png",
    date: "Dates to be announced",
    availability: "Enquire now",
    duration: `${days} days`,
    level: "All levels",
    location: "Goa, India",
    room: "Room options confirmed in writing",
    meals: "Meal plan confirmed in writing",
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
 * This keeps the 4 short courses (still full of "[Add ...]" placeholders)
 * out of the sitemap and out of Google's index until real content lands —
 * the single highest-leverage SEO fix available right now.
 */
