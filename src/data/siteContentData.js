/**
 * Site Content Data for Hatha Yogashala, Goa
 * Contains structured reusable data objects for About, Founder, Teachers,
 * and Interactive Enrolment Questions.
 */

export const enrolmentQuestionsData = [
  {
    id: "certification",
    number: "01",
    question: "Is the school’s certification verified & globally recognized?",
    shortSummary:
      "Transparent verification without unverified claims or false affiliations.",
    description:
      "Choosing a yoga school requires certainty about the credential you earn. At Hatha Yogashala in Goa, we confirm the exact certificate, issuing body, attendance conditions, and public verification status in writing before you pay your deposit.",
    bullets: [
      "Written breakdown of certificate designation (100-Hr foundation vs 200-Hr / 300-Hr teaching qualification).",
      "Clear explanation of Yoga Alliance registration status and graduate registration eligibility.",
      "Direct verification links and sample certificates provided upon request.",
    ],
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-yoga-alliance-certification.jpg",
    imageAlt: "Yoga Alliance certification ceremony at Hatha Yogashala in Goa",
  },
  {
    id: "teachers",
    number: "02",
    question: "Who will actually teach the course during your batch?",
    shortSummary:
      "Experienced lead faculty assigned in writing before enrolment.",
    description:
      "Many schools advertise famous masters who rarely appear in daily classes. We assign lead teachers, anatomy specialists, and pranayama faculty to specific batch dates in advance so you know exactly who guides your practice every day.",
    bullets: [
      "Lead Hatha teachers and subject specialists named in your course offer letter.",
      "Verified qualifications and teaching experience published transparently.",
      "Small faculty-to-student ratio ensuring personal feedback during daily practicums.",
    ],
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp",
    imageAlt:
      "Yoga teacher guiding pranayama and breathwork practice in a peaceful tropical shala in Goa",
  },
  {
    id: "batch-size",
    number: "03",
    question: "How large is each training batch & student group?",
    shortSummary:
      "Small-group focus (maximum 12-16 students) for genuine mentorship.",
    description:
      "Large batches of 30+ students make personalized corrections and teaching mentorship impossible. We intentionally limit batch sizes so every student receives individual posture assessments, voice coaching, and one-on-one feedback.",
    bullets: [
      "Strict cap on maximum student numbers per intake in our Goa campus.",
      "Dedicated time for individual teaching practicums and peer feedback.",
      "Supportive group dynamic where teachers remember your name, goals, and physical needs.",
    ],
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
    imageAlt:
      "Small group of yoga teacher training students practising Hatha postures together",
  },
  {
    id: "course-fee",
    number: "04",
    question: "What is included in the course fee before you pay?",
    shortSummary:
      "No hidden charges—accommodation, sattvic meals, and materials itemised upfront.",
    description:
      "Unexpected costs for study manuals, tax additions, or meal surcharges ruin your experience. We provide a complete itemised written breakdown of course tuition, room category, vegetarian meal plans, manuals, and airport transfers before reservation.",
    bullets: [
      "Clear separation between course tuition and accommodation packages.",
      "Sattvic vegetarian meal plan and drinking water details confirmed upfront.",
      "Transparent refund, transfer, and cancellation policies provided in writing.",
    ],
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-yoga-school-cover-image.webp",
    imageAlt:
      "Residential campus of Hatha Yogashala with student accommodation in Goa",
  },
  {
    id: "practical-teaching",
    number: "05",
    question: "Does the curriculum include practical teaching experience?",
    shortSummary:
      "Supervised practicums from week one so you graduate with real confidence.",
    description:
      "Reading about yoga philosophy is not enough to make you a confident teacher. Our curriculum places you in practical teaching scenarios early, refining your verbal cues, posture corrections, alignment observation, and class sequencing under teacher supervision.",
    bullets: [
      "Daily practice teaching sessions with constructive feedback from lead faculty.",
      "Hands-on and verbal adjustment techniques taught with consent and physical safety.",
      "Sequencing design workshops tailored to real-world studio and online classes.",
    ],
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-group-yoga-class-sequence-1.webp",
    imageAlt:
      "Yoga students in a supervised teaching practice during teacher training",
  },
  {
    id: "post-graduation",
    number: "06",
    question: "What support and mentorship is available after graduation?",
    shortSummary:
      "Lifelong graduate network, career guidance, and continuing study options.",
    description:
      "Your journey does not end when you leave Goa. We provide ongoing graduate community access, teaching resources, assistance with class sequencing, recommendations, and discounted alumni rates for advanced 300-hour training.",
    bullets: [
      "Access to private alumni community forums and teaching opportunity listings.",
      "Direct email and message access to faculty for career advice and sequencing reviews.",
      "Alumni discounts on continuing education, specialized modules, and annual retreats.",
    ],
    image: "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
    imageAlt:
      "Serene sunset yoga session on the Goa coast representing lifelong reflection",
  },
];

export const founderData = {
  name: "Lead Teacher — Director of Yoga Education",
  role: "Founder & Lead Hatha Yoga Master",
  shortBio:
    "Grounded in traditional Hatha Yoga and Ashtanga Vinyasa lineages, our lead teacher founded Hatha Yogashala in Goa to offer an authentic, disciplined, and accessible sanctuary for yoga education — Yoga Alliance-registered and built on more than 15 years of teaching experience.",
  fullBio:
    "Our lead teacher has spent over 15 years immersed in classical Hatha Yoga, Ashtanga Vinyasa, pranayama, meditation, and Ayurveda, teaching yoga teacher training in India and internationally. With E-RYT 500 certification and advanced Ashtanga training, they have mentored more than 1,500 certified teachers now teaching across Europe, Russia, and the Americas. The teaching integrates traditional sequencing, breath retention (Kumbhaka), and anatomical precision, ensuring students build a personal practice rooted in clarity, mental stillness, and bodily safety.",
  qualifications: "E-RYT 500 (Yoga Alliance), Advanced Ashtanga",
  experience: "15+ Years Teaching Yoga Teacher Training",
  philosophy:
    "Yoga is not a performance of difficult shapes; it is a steady, conscious inquiry into breath, body alignment, and mental quietude. We teach Hatha Yoga as a lived discipline that restores harmony to everyday life.",
  quote:
    "Yoga is a path of self-inquiry. I teach from the breath outward, guiding students to find alignment, steadiness, and ease — on the mat and in life.",
  image: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-portrait.webp",
  imageAlt: "Lead Teacher of Hatha Yogashala in Goa",
  lineage: "Classical Hatha Yoga & Ashtanga Vinyasa (India)",
  areasOfExpertise: [
    "Traditional Hatha Postures",
    "Ashtanga Vinyasa & Pranayama",
    "Yoga Philosophy & Sutra Study",
    "Functional Anatomical Alignment",
    "Teacher Mentorship & Practicums",
  ],
  message:
    "Welcome to Hatha Yogashala in Querim, North Goa. Our shala was built to be a sanctuary where sincere seekers can study traditional Hatha Yoga deeply, away from the noise and rush of modern life. Whether you come to become a certified teacher or to immerse yourself in self-discovery, we welcome you with warmth, discipline, and honest guidance.",
  isPlaceholder: true,
  placeholderNote:
    "[EDITABLE DATA PLACEHOLDER: Replace name, portrait, qualifications, and biography with verified founder details as needed.]",
};

export const teachersData = [
  {
    id: "lead-teacher",
    name: "Lead Teacher",
    role: "Founder & Director of Yoga Education",
    specialty: "Hatha Yoga, Philosophy & Teacher Training",
    bio: "Leads the teacher-training curriculum, pranayama, and classical text studies. With more than 15 years of experience and E-RYT 500 certification, has mentored over 1,500 certified teachers worldwide.",
    qualifications: "E-RYT 500 (Yoga Alliance)",
    experience: "15+ Years",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-portrait.webp",
    imageAlt:
      "Portrait of the lead Hatha yoga teacher at Hatha Yogashala in Goa",
    coursesTaught: [
      "100-Hour Yoga Teacher Training",
      "200-Hour Yoga Teacher Training",
      "300-Hour Yoga Teacher Training",
    ],
  },
  {
    id: "senior-ashtanga-teacher",
    name: "Senior Ashtanga Teacher",
    role: "Ashtanga Vinyasa Faculty",
    specialty: "Ashtanga Vinyasa & Mysore Practice",
    bio: "Certified Ashtanga Vinyasa teacher (under Paramaguru Sharath Jois, Mysore) with 10+ years of experience. Leads Mysore-style practice, sequencing, and teaching methodology.",
    qualifications: "Certified Ashtanga (Mysore) Teacher",
    experience: "10+ Years",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-asana-practice-1.webp",
    imageAlt: "Senior Ashtanga teacher demonstrating alignment in Goa",
    coursesTaught: [
      "200-Hour Yoga Teacher Training",
      "300-Hour Yoga Teacher Training",
    ],
  },
  {
    id: "hatha-philosophy-teacher",
    name: "Hatha & Philosophy Teacher",
    role: "Philosophy, Sanskrit & Meditation Faculty",
    specialty: "Yoga Philosophy, Sanskrit, Meditation",
    bio: "Guides daily meditation, philosophy, Sanskrit, and chanting studies — deepening students' understanding of the traditions behind the practice.",
    qualifications: "Traditional Hatha & Philosophy Scholar",
    experience: "10+ Years",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-yoga-philosophy-class.jpg",
    imageAlt:
      "Philosophy and meditation class led by the Hatha philosophy teacher",
    coursesTaught: [
      "100-Hour Yoga Teacher Training",
      "Meditation & Yoga Nidra",
    ],
  },
  {
    id: "anatomy-alignment-teacher",
    name: "Anatomy & Alignment Teacher",
    role: "Anatomy & Adjustment Faculty",
    specialty: "Functional Yoga Anatomy",
    bio: "Combines modern movement science with traditional alignment to ensure safe, injury-free practice for all student body types.",
    qualifications: "M.Sc. Anatomy & Kinesiology",
    experience: "8+ Years",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-asana-practice-2.webp",
    imageAlt: "Anatomy and alignment teacher explaining yogic alignment",
    coursesTaught: [
      "200-Hour Yoga Teacher Training",
      "300-Hour Yoga Teacher Training",
      "Adjustment & Alignment Course",
    ],
  },
  {
    id: "ayurveda-teacher",
    name: "Ayurveda & Lifestyle Teacher",
    role: "Ayurveda & Wellness Faculty",
    specialty: "Ayurvedic Diet & Living",
    bio: "Teaches practical Ayurvedic nutrition, dosha balancing, and daily sattvic routines for residential students.",
    qualifications: "B.A.M.S. (Ayurvedic Physician)",
    experience: "8+ Years",
    image:
      "/images/tha_hatha/the-hatha-yogashala-goa-yoga-students-relaxation.webp",
    imageAlt: "Ayurveda teacher sharing wellness principles at Hatha Yogashala",
    coursesTaught: ["Ayurveda Course", "Goa Yoga Retreats"],
  },
];

export const aboutSectionData = {
  eyebrow: "Yoga Alliance Registered School in Goa",
  heading: "A Sanctuary for Traditional Hatha Yoga Study & Practice",
  subheading:
    "Rooted in classical traditions and surrounded by North Goa's calming coastal nature, Hatha Yogashala in Querim provides residential teacher training and retreats designed for deep learning.",
  paragraph1:
    "Hatha Yogashala is a Yoga Alliance-registered yoga school in North Goa, offering authentic 100, 200, and 300-hour teacher training led by internationally certified teachers with 15+ years of experience. Students have trained here from all over the world, and our graduates now teach across Europe, Russia, and the Americas.",
  paragraph2:
    "Our residential school sits a short walk from Querim beach, blending daily Hatha yoga and meditation, breathwork, and philosophy with the warmth of a true Indian ashram.",
  trustPoints: [
    {
      title: "Yoga Alliance Registered",
      description: "RYS certification for 100-Hr, 200-Hr, and 300-Hr training.",
    },
    {
      title: "Small-Group Ratio",
      description:
        "Intimate batches so every student receives personal attention.",
    },
    {
      title: "Experienced Faculty",
      description:
        "E-RYT 500 lead teacher with 15+ years of teaching experience.",
    },
    {
      title: "Beachside Querim Setting",
      description:
        "Peaceful residential ashram near North Goa's cleanest beaches.",
    },
  ],
};
