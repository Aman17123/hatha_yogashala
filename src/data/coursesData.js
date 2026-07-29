const commonCurriculum = [
  {
    title: "Asana foundations",
    content:
      "Proposed topics: alignment principles, safe progression, observation, and adapting practice to different bodies. Replace with the approved syllabus and contact hours.",
  },
  {
    title: "Pranayama and meditation",
    content:
      "Proposed topics: breath awareness, introductory pranayama, concentration, and guided meditation. Replace with confirmed techniques and teaching hours.",
  },
  {
    title: "Philosophy and ethics",
    content:
      "Proposed topics: historical context, foundational texts, teaching ethics, and responsible student care. Replace with the approved reading list.",
  },
  {
    title: "Anatomy and teaching practice",
    content:
      "Proposed topics: functional movement, contraindications, sequencing, cueing, and supervised teaching practice. Replace with the approved curriculum.",
  },
];

const mainCourses = [
  {
    slug: "100-hour-yoga-teacher-training-goa",
    hours: "100-hour",
    name: "100-Hour Yoga Teacher Training in Goa",
    level: "Foundation",
    duration: "[Add confirmed duration]",
    bestFor: "Practitioners exploring a structured foundation",
    outcome: "[Add verified course outcome]",
    description:
      "A focused introduction to traditional practice, study habits, and the foundations of teaching. Final syllabus and eligibility are awaiting school approval.",
    focus: ["Practice foundations", "Breath awareness", "Study skills"],
  },
  {
    slug: "200-hour-yoga-teacher-training-goa",
    hours: "200-hour",
    name: "200-Hour Yoga Teacher Training in Goa",
    level: "Foundational teacher training",
    duration: "[Add confirmed duration]",
    bestFor: "Aspiring teachers and committed practitioners",
    outcome: "[Add verified course outcome]",
    description:
      "A proposed residential pathway combining asana, pranayama, philosophy, anatomy, and teaching practice. Certification details remain pending verification.",
    focus: ["Hatha practice", "Teaching methodology", "Yoga philosophy"],
    featured: true,
  },
  {
    slug: "300-hour-yoga-teacher-training-goa",
    hours: "300-hour",
    name: "300-Hour Yoga Teacher Training in Goa",
    level: "Advanced study",
    duration: "[Add confirmed duration]",
    bestFor: "Teachers seeking deeper study",
    outcome: "[Add verified course outcome]",
    description:
      "An advanced course outline for qualified teachers who want to refine observation, sequencing, philosophy, and facilitation skills.",
    focus: ["Advanced practice", "Mentored teaching", "Applied philosophy"],
  },
];

const shortCourses = [
  {
    slug: "meditation-course-goa",
    hours: "Short course",
    name: "Meditation Course in Goa",
    level: "All levels",
    duration: "[Add duration]",
    bestFor: "Students developing a steady personal practice",
    outcome: "[Add verified outcome]",
    description: "A proposed practical introduction to attention, breath, and sustainable meditation routines.",
    focus: ["Breath awareness", "Concentration", "Reflection"],
  },
  {
    slug: "sound-healing-course-goa",
    hours: "Short course",
    name: "Sound Healing Course in Goa",
    level: "[Add level]",
    duration: "[Add duration]",
    bestFor: "[Add suitability]",
    outcome: "[Add verified outcome]",
    description: "Course scope, facilitator credentials, instruments, and certification status are pending verification.",
    focus: ["[Add module]", "[Add module]", "[Add module]"],
  },
  {
    slug: "ayurveda-course-goa",
    hours: "Short course",
    name: "Ayurveda Course in Goa",
    level: "[Add level]",
    duration: "[Add duration]",
    bestFor: "[Add suitability]",
    outcome: "[Add verified outcome]",
    description: "A placeholder course outline awaiting an approved syllabus and qualified facilitator details.",
    focus: ["[Add module]", "[Add module]", "[Add module]"],
  },
  {
    slug: "adjustment-alignment-course-goa",
    hours: "Short course",
    name: "Adjustment & Alignment Course in Goa",
    level: "[Add level]",
    duration: "[Add duration]",
    bestFor: "[Add suitability]",
    outcome: "[Add verified outcome]",
    description: "A proposed skills course. Final scope, consent practices, and teacher credentials require approval.",
    focus: ["Observation", "Consent-led assists", "Clear cueing"],
  },
];

export const courses = [...mainCourses, ...shortCourses].map((course) => ({
  ...course,
  location: "Goa, India",
  price: "[Add confirmed price]",
  certification: "[Certification details pending verification]",
  image: "/images/course-goa-yoga.png",
  curriculum: commonCurriculum,
}));

export const teacherTrainings = courses.slice(0, 3);
export const shortPrograms = courses.slice(3);

export const retreats = [3, 5, 7, 10].map((days) => ({
  slug: `${days}-day-yoga-retreat-goa`,
  days,
  name: `${days}-Day Yoga Retreat in Goa`,
  category: days <= 3 ? "Coastal reset" : days <= 7 ? "Restorative stay" : "Extended immersion",
  description:
    "A calm retreat framework with practice, rest, and time by the coast. The final schedule, inclusions, and facilitator details are awaiting approval.",
  benefits: ["Guided practice schedule", "Time for rest", "Goa coastal setting"],
  price: "[Add confirmed price]",
  image: days % 2 ? "/images/hero-goa-yoga.png" : "/images/course-goa-yoga.png",
}));

export function getCourse(slug) {
  return courses.find((course) => course.slug === slug);
}

export function getRetreat(slug) {
  return retreats.find((retreat) => retreat.slug === slug);
}
