/**
 * Site Content Data for The Hatha Yogashala, Goa
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
      "Choosing a yoga school requires certainty about the credential you earn. At The Hatha Yogashala in Goa, we confirm the exact certificate, issuing body, attendance conditions, and public verification status in writing before you pay your deposit.",
    bullets: [
      "Written breakdown of certificate designation (100-Hr foundation vs 200-Hr / 300-Hr teaching qualification).",
      "Clear explanation of Yoga Alliance registration status and graduate registration eligibility.",
      "Direct verification links and sample certificates provided upon request.",
    ],
    image: "/images/course-goa-yoga.png",
    imageAlt:
      "Students receiving posture alignment guidance in a Hatha yoga teacher training class in Goa",
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
    image: "/images/pranayama-meditation-goa.png",
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
    image: "/images/hatha-yoga-class-goa.png",
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
    image: "/images/accommodation-goa.png",
    imageAlt:
      "Clean, peaceful residential room for students at The Hatha Yogashala in Goa",
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
    image: "/images/hero-goa-yoga.png",
    imageAlt:
      "Yoga practitioner demonstrating focused alignment during a practical teaching session",
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
    image: "/images/goa-coast-yoga-retreat.png",
    imageAlt:
      "Serene Goa coastal nature path representing lifelong yoga reflection and community",
  },
];

export const founderData = {
  name: "Acharya Ramkrishna",
  role: "Founder & Lead Hatha Yoga Master",
  shortBio:
    "Grounded in traditional Hatha Yoga lineages and modern functional biomechanics, Acharya Ramkrishna founded The Hatha Yogashala in Goa to offer an authentic, disciplined, and accessible sanctuary for yoga education.",
  fullBio:
    "Acharya Ramkrishna has spent over 15 years immersed in classical Hatha Yoga, pranayama, and yogic philosophy. Having trained under respected traditional masters in Rishikesh and South India, he established The Hatha Yogashala near the tranquil coastal shores of North Goa. His teaching integrates traditional sequencing, breath retention (Kumbhaka), and anatomical precision, ensuring students build a personal practice rooted in clarity, mental stillness, and bodily safety.",
  qualifications: "E-RYT 500, Traditional Hatha Master",
  experience: "15+ Years Practising & Teaching",
  philosophy:
    "Yoga is not a performance of difficult shapes; it is a steady, conscious inquiry into breath, body alignment, and mental quietude. We teach Hatha Yoga as a lived discipline that restores harmony to everyday life.",
  quote:
    "True yoga begins when we stop striving to impress others with physical postures and start listening deeply to the body's natural intelligence.",
  image: "/images/hero-goa-yoga.png",
  imageAlt: "Acharya Ramkrishna, Founder of The Hatha Yogashala in Goa",
  lineage: "Classical Hatha Yoga (Rishikesh & South Indian Traditions)",
  areasOfExpertise: [
    "Traditional Hatha Postures",
    "Pranayama & Subtle Energy (Kriyas)",
    "Yoga Philosophy & Sutra Study",
    "Functional Anatomical Alignment",
    "Teacher Mentorship & Practicums",
  ],
  message:
    "Welcome to The Hatha Yogashala in Goa. Our shala was built to be a sanctuary where sincere seekers can study traditional Hatha Yoga deeply, away from the noise and rush of modern life. Whether you come to become a certified teacher or to immerse yourself in self-discovery, we welcome you with warmth, discipline, and honest guidance.",
  isPlaceholder: true,
  placeholderNote:
    "[EDITABLE DATA PLACEHOLDER: Replace name, portrait, qualifications, and biography with verified founder details as needed.]",
};

export const teachersData = [
  {
    id: "acharya-ramkrishna",
    name: "Acharya Ramkrishna",
    role: "Founder & Lead Hatha Teacher",
    specialty: "Hatha Yoga & Philosophy",
    bio: "Leads traditional Hatha yoga practices, pranayama, and classical text studies with a focus on breath retention and inner stillness.",
    qualifications: "E-RYT 500 Master",
    experience: "15+ Years",
    image: "/images/hatha-yoga-class-goa.png",
    imageAlt: "Acharya Ramkrishna guiding a Hatha yoga class in Goa",
    coursesTaught: [
      "100-Hour Yoga Teacher Training",
      "200-Hour Yoga Teacher Training",
      "300-Hour Yoga Teacher Training",
    ],
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Anatomy & Alignment Specialist",
    specialty: "Functional Yoga Anatomy",
    bio: "Combines modern biomechanics with traditional alignment to ensure safe, injury-free practice for all student body types.",
    qualifications: "M.Sc. Kinesiology, RYT 500",
    experience: "9 Years",
    image: "/images/course-goa-yoga.png",
    imageAlt: "Priya Sharma demonstrating anatomical alignment in Goa",
    coursesTaught: [
      "200-Hour Yoga Teacher Training",
      "Adjustment & Alignment Course",
    ],
  },
  {
    id: "dev-ananth",
    name: "Dev Ananth",
    role: "Pranayama & Meditation Faculty",
    specialty: "Pranayama, Sound & Nidra",
    bio: "Guides daily meditation, Vedic chanting, and sound healing immersions in our quiet coastal yoga shala.",
    qualifications: "Certified Sound & Nidra Master",
    experience: "11 Years",
    image: "/images/pranayama-meditation-goa.png",
    imageAlt: "Dev Ananth leading meditation in Goa shala",
    coursesTaught: ["Sound Healing Course", "Meditation & Yoga Nidra"],
  },
  {
    id: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    role: "Ayurveda & Lifestyle Teacher",
    specialty: "Ayurvedic Diet & Living",
    bio: "Teaches practical Ayurvedic nutrition, dosha balancing, and daily sattvic routines for residential students.",
    qualifications: "B.A.M.S. (Ayurvedic Physician)",
    experience: "8 Years",
    image: "/images/accommodation-goa.png",
    imageAlt: "Ananya Deshmukh teaching Ayurveda principles",
    coursesTaught: ["Ayurveda Course", "Goa Yoga Retreats"],
  },
];

export const aboutSectionData = {
  eyebrow: "Authentic Yoga School in Goa",
  heading: "A Sanctuary for Traditional Hatha Yoga Study & Practice",
  subheading:
    "Rooted in classical traditions and surrounded by North Goa's calming coastal nature, The Hatha Yogashala provides residential teacher training and retreats designed for deep learning.",
  paragraph1:
    "As an established Hatha Yoga school in India, The Hatha Yogashala offers intensive Yoga teacher training in Goa that balances traditional practices with modern biomechanics and safe alignment. Our school provides a peaceful learning environment where students cultivate physical strength, mental clarity, and authentic teaching methodology.",
  paragraph2:
    "Whether you are joining our certified yoga courses in Goa to launch a teaching career or attending our restorative yoga retreats in Goa for personal renewal, our small-group approach ensures you receive dedicated guidance, transparent course information, and personalized feedback at every step.",
  trustPoints: [
    {
      title: "Small-Group Ratio",
      description: "Max 12-16 students per batch for individual feedback.",
    },
    {
      title: "Certified Yoga Pathways",
      description: "Structured 100-Hr, 200-Hr, and 300-Hr curricula.",
    },
    {
      title: "Traditional & Anatomy Focus",
      description: "Classical Hatha merged with modern movement science.",
    },
    {
      title: "Coastal Goa Setting",
      description: "Peaceful residential shala near North Goa beaches.",
    },
  ],
};
