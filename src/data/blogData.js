export const posts = [
  {
    slug: "how-to-choose-yoga-teacher-training-goa",
    title: "How to Choose Yoga Teacher Training in Goa",
    category: "Teacher Training",
    date: "2026-07-20",
    updated: "2026-07-20",
    author: "The Hatha Yogashala Editorial Team",
    readingTime: "6 min read",
    excerpt:
      "A practical checklist for comparing curriculum, teachers, accommodation, fees, and certification without relying on marketing claims.",
    image: "/images/course-goa-yoga.png",
    sections: [
      {
        heading: "Start with the learning outcome",
        body:
          "Decide whether you want a personal immersion, a professional teaching pathway, or advanced study. The right hour count follows the outcome—not the other way around.",
      },
      {
        heading: "Verify the curriculum and teachers",
        body:
          "Ask for a written syllabus, daily contact hours, assessment method, and the names and qualifications of the teachers who will actually lead your batch.",
      },
      {
        heading: "Read the complete fee",
        body:
          "Compare tuition, taxes, accommodation, meals, manuals, excursions, transfers, certification charges, deposits, and cancellation terms as separate line items.",
      },
      {
        heading: "Plan for Goa’s climate",
        body:
          "Goa changes through the dry, hot, and monsoon seasons. Confirm ventilation, transport, laundry, drinking water, and the distance between your room and practice hall.",
      },
    ],
  },
  {
    slug: "100-vs-200-vs-300-hour-yoga-training",
    title: "100 vs 200 vs 300-Hour Yoga Training",
    category: "Course Guides",
    date: "2026-07-15",
    updated: "2026-07-15",
    author: "The Hatha Yogashala Editorial Team",
    readingTime: "5 min read",
    excerpt:
      "Understand what each training length is commonly designed to support before you compare dates and fees.",
    image: "/images/hero-goa-yoga.png",
    sections: [
      {
        heading: "100-hour: focused foundations",
        body:
          "A 100-hour format is often used for foundational study or a specific subject. Confirm whether it is a standalone course, continuing education, or part of a longer pathway.",
      },
      {
        heading: "200-hour: broader teacher preparation",
        body:
          "A 200-hour program commonly introduces practice, philosophy, anatomy, ethics, and teaching methodology. Certification must still be verified with the named registering body.",
      },
      {
        heading: "300-hour: advanced study",
        body:
          "A 300-hour course is typically aimed at teachers who already hold a foundational qualification. Check prerequisites and the depth of supervised teaching.",
      },
    ],
  },
  {
    slug: "planning-a-yoga-retreat-in-goa",
    title: "Planning a Yoga Retreat in Goa",
    category: "Goa",
    date: "2026-07-08",
    updated: "2026-07-08",
    author: "The Hatha Yogashala Editorial Team",
    readingTime: "4 min read",
    excerpt:
      "Choose a season, location, and retreat rhythm that leave enough room for both practice and recovery.",
    image: "/images/accommodation-goa.png",
    sections: [
      {
        heading: "Choose the season deliberately",
        body:
          "The dry season is popular for beach travel, while the monsoon brings lush landscapes and heavier rain. Ask how the shala handles heat, humidity, and wet-weather transport.",
      },
      {
        heading: "Protect recovery time",
        body:
          "A retreat does not need a packed timetable. Look for a clear balance of guided sessions, meals, quiet time, and optional excursions.",
      },
      {
        heading: "Confirm the practical details",
        body:
          "Before paying, verify room type, food, practice level, transfers, cancellation terms, health disclosures, and the exact person responsible for your booking.",
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
