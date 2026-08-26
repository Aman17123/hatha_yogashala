/**
 * Premium retreat page content — Hatha Yogashala, Goa
 *
 * This module holds the editorial + booking content for the redesigned
 * retreat detail pages. It is intentionally separated from coursesData
 * so retreat pages can ship a rich, conversion-focused experience
 * without duplicating the teacher-training data model.
 *
 * NOTE: Teacher bios and testimonials below are template content to be
 * replaced with verified, real student and faculty details before
 * public launch.
 */

const IMAGES = {
  hero: "/images/tha_hatha/the-hatha-yogashala-yoga-in-goa-india.webp",
  class: "/images/tha_hatha/the-hatha-yogashala-group-yoga-class-downward-dog-goa.webp",
  coast: "/images/tha_hatha/the-hatha-yogashala-balcony-view-coconut-trees-goa.webp",
  accommodation: "/images/tha_hatha/the-hatha-yogashala-private-room-accommodation-goa.webp",
  pranayama: "/images/tha_hatha/pranayama-meditation-goa.png",
  hatha: "/images/tha_hatha/the-hatha-yogashala-yoga-asana-practice-shala-goa.webp",
};

export const retreatPricingByDays = {
  3: { shared: { price: 199 }, private: { price: 399 } },
  5: { shared: { price: 299 }, private: { price: 499 } },
  7: { shared: { price: 399 }, private: { price: 599 } },
};

export const retreatPricing = {
  shared: { price: 199, currency: "EUR", label: "Shared Room", per: "person" },
  private: { price: 399, currency: "EUR", label: "Private Room", per: "person" },
  paymentOptions: ["Bank Transfer", "PayPal", "Wise", "UPI", "Card"],
  trustBadges: [
    "3, 5 & 7-Day Formats + 5-Day Kundalini & Iyengar",
    "Daily Yoga, Meditation & Ayurveda Sessions",
    "Sound Healing, Breathwork & Ice Baths",
    "Vegetarian & Vegan Meals (Gluten-Free on Request)",
    "Beachside Living Near Arambol & Keri Beach",
  ],
};

export const trustBadges = [
  "3, 5 & 7-Day Formats + 5-Day Kundalini & Iyengar",
  "Daily Yoga, Meditation & Ayurveda",
  "Sound Healing, Breathwork & Ice Baths",
  "Vegetarian Meals Included (Vegan/GF on request)",
  "Located Near Arambol & Keri Beach, North Goa",
];

export const whyChoose = [
  {
    title: "Small Group Experience",
    text: "Limited to a handful of guests so every practice, meal, and conversation receives genuine individual attention.",
    icon: "users",
  },
  {
    title: "Experienced Teachers",
    text: "Certified Hatha & Iyengar instructors with years of residential teaching and a clear, inclusive style.",
    icon: "award",
  },
  {
    title: "Daily Yoga Practice",
    text: "Morning and evening sessions that build strength, flexibility, and a steady rhythm you can carry home.",
    icon: "flower",
  },
  {
    title: "Meditation & Breathwork",
    text: "Guided stillness, Pranayama, and Shatkarma each day — designed for every experience level.",
    icon: "sparkles",
  },
  {
    title: "Wellness Excursions",
    text: "Ice baths, sauna therapy, mud baths, ecstatic dance, and visits to 100-year-old banyan trees and temples.",
    icon: "waves",
  },
  {
    title: "Healthy Sattvic Meals",
    text: "Three freshly prepared vegetarian meals a day, with vegan, gluten-free, and allergy options on request.",
    icon: "leaf",
  },
  {
    title: "Comfortable Accommodation",
    text: "From mixed and female-only AC dorms to twin-sharing and private rooms with attached bathrooms.",
    icon: "home",
  },
  {
    title: "Personal Growth & Sound Healing",
    text: "Sound baths, massage, and honest conversations that turn a holiday into a rejuvenating life reset.",
    icon: "compass",
  },
  {
    title: "Stress Relief & Digital Detox",
    text: "A restorative coastal rhythm that swaps notifications for stillness, sea air, and deep rest.",
    icon: "moon",
  },
  {
    title: "Community Connection",
    text: "Small-group dinners, beach sunset circles, and shared experiences that often become lifelong friendships.",
    icon: "heart",
  },
];

export const retreatTeachers = [
  {
    name: "Yogendra",
    role: "Iyengar Yoga Master",
    experience: "20+ years of Iyengar Yoga expertise",
    specialization: "Precise Alignment · Posture Correction · Props Mastery",
    bio: "Yogendra brings over 20 years of Iyengar Yoga expertise, known for a meticulous eye and unmatched patience in guiding students toward better alignment — whether you're a seasoned yogi or brand new to the practice, his teaching adapts to every level.",
    credentials: "Master Iyengar Facilitator · 20+ Years Practice",
    image: IMAGES.hatha,
  },
  {
    name: "Abin",
    role: "Tantra & Philosophy Teacher",
    experience: "30 years studying Tantra, Samkhya & Yoga",
    specialization: "Kundalini Yoga · Tantric Kaula Tradition · Kriya Yoga",
    bio: "Abin has spent nearly 30 years studying Tantra, Samkhya, and Yoga, initiated into the Tantric Kaula tradition and Kriya Yoga. He brings profound spiritual insight with a relatable, grounded teaching style, connecting ancient traditions to modern living.",
    credentials: "Initiated Kaula & Kriya Yoga Lineage Master",
    image: IMAGES.pranayama,
  },
  {
    name: "Lead Hatha Yoga Teacher",
    role: "Hatha Yoga Teacher",
    experience: "12+ years teaching · 500-hour certified",
    specialization: "Hatha Vinyasa · Alignment · Adjustments",
    bio: "The lead teacher guides the morning asana practice with clear, precise cueing and a warm, unhurried pace. Trained in classical Hatha and modern functional alignment, they adapt every posture so beginners feel capable and experienced practitioners stay challenged.",
    credentials: "E-RYT 500 · 1,000+ teaching hours · First-aid certified",
    image: IMAGES.class,
  },
  {
    name: "Meditation & Pranayama Teacher",
    role: "Meditation Teacher",
    experience: "10+ years of daily practice",
    specialization: "Vipassana · Mindfulness · Yoga Nidra",
    bio: "A long-time daily meditator who makes stillness accessible to everyone. Their sessions blend breath observation, body scanning, and gentle guided practice — a grounding counterpoint to the active morning classes.",
    credentials: "Certified Meditation Facilitator · 10-day silent retreats",
    image: IMAGES.coast,
  },
];

export const retreatHighlights = [
  "Daily Morning & Evening Yoga",
  "Meditation & Breathwork (Pranayama & Shatkarma)",
  "Sound Healing & Ayurvedic Massage Therapy",
  "Sauna & Ice Bath (Russian Banya)",
  "Mud Bath Therapy & Waterfalls",
  "Ecstatic Dance & Percussion Workshops",
  "Temple Visits & 100-Year-Old Banyan Tree Excursion",
  "Three Nourishing Vegetarian Meals Daily",
  "Beachside Living Near Arambol & Keri Beach",
];

export const goaExperiences = [
  {
    title: "Temple Visits (Cultural Heritage Tour)",
    text: "Immerse yourself in the region's rich cultural heritage with visits to ancient temples, discovering the history and spirituality behind these sacred sites.",
    tag: "Culture",
  },
  {
    title: "100-Year-Old Banyan Tree",
    text: "Visit a majestic, century-old banyan tree — a natural landmark and testament to nature's resilience and beauty.",
    tag: "Nature",
  },
  {
    title: "Sauna / Ice Bath (Russian Banya)",
    text: "(availability basis) Revitalize body and mind by alternating between sauna heat and an invigorating ice bath.",
    tag: "Wellness",
  },
  {
    title: "Mud Bath",
    text: "(availability basis) A natural, therapeutic mud bath for detoxifying and revitalizing the skin.",
    tag: "Wellness",
  },
  {
    title: "Ecstatic Dance",
    text: "Free-flowing movement and rhythm sessions for an exhilarating release of energy.",
    tag: "Community",
  },
  {
    title: "Percussion Workshops",
    text: "Hands-on, collaborative sessions in rhythm and musical expression.",
    tag: "Music",
  },
  {
    title: "Arambol & Keri Beach",
    text: "Walk along tranquil beaches, watch coastal sunsets, and visit the sweet water lake.",
    tag: "Beach",
  },
];

export const freeTimeIdeas = [
  { title: "Beach walks", text: "Wander the shoreline at low tide and let the sound of the waves reset your mind.", icon: "waves" },
  { title: "Journaling", text: "Prompts are provided each day to help you capture insights before they fade.", icon: "book" },
  { title: "Reading", text: "The shala library is stocked with yoga philosophy, memoir, and travel writing.", icon: "book" },
  { title: "Café hopping", text: "Discover local cafés serving fresh juices, banana pancakes, and filter coffee.", icon: "coffee" },
  { title: "Nature photography", text: "Golden-hour light, palms, and shoreline make every frame effortless.", icon: "camera" },
  { title: "Meditation", text: "Sit by the beach or in the garden with your own quiet practice.", icon: "sparkles" },
  { title: "Sunset watching", text: "Goa sunsets are famous for a reason — find your spot and stay for the show.", icon: "sun" },
  { title: "Shopping", text: "Hunt for handmade textiles, jewellery, and ceramics at local markets.", icon: "shopping" },
];

export const accommodationFacilities = [
  { label: "WiFi", included: true },
  { label: "Attached Bathroom", included: true },
  { label: "Clean Linen", included: true },
  { label: "Hot Water", included: true },
  { label: "Air Conditioning", included: true },
  { label: "Peaceful Environment", included: true },
];

export const accommodationOptions = [
  {
    name: "Mixed AC Dorm",
    description:
      "Comfortable community living, ideal for solo travelers or groups. A relaxed, air-conditioned shared space with easy access to all amenities.",
  },
  {
    name: "Female AC Dorm",
    description:
      "A dedicated, safe, and peaceful air-conditioned dorm for women travelers who value comfort, security, and a supportive community.",
  },
  {
    name: "Twin Sharing",
    description:
      "A balance of privacy and companionship for friends or solo travelers, with comfortable beds and a peaceful ambience.",
  },
  {
    name: "Triple Sharing",
    description:
      "A spacious, budget-friendly option for small groups, with three beds, air conditioning, and full amenities.",
  },
  {
    name: "Private Room",
    description:
      "Ultimate privacy and comfort, with plush beds and a tranquil setting for guests who want their own space during the retreat.",
  },
];

const sharedGallery = [
  { src: "/images/tha_hatha/the-hatha-yogashala-shared-dormitory-room-goa.webp", alt: "Air conditioned shared dorm room accommodation at The Hatha Yogashala Goa", caption: "Shared AC dorm room" },
  { src: "/images/tha_hatha/the-hatha-yogashala-balcony-view-coconut-trees-goa.webp", alt: "Lush tropical palm garden and balcony view", caption: "Tropical garden view" },
  { src: "/images/tha_hatha/the-hatha-yogashala-yoga-hall-with-mats-goa.webp", alt: "Open-air wooden shala with yoga mats for daily retreat practice", caption: "Practice hall" },
];

const privateGallery = [
  { src: "/images/tha_hatha/the-hatha-yogashala-private-room-accommodation-goa.webp", alt: "Private room with plush bedding and attached modern bathroom in Goa", caption: "Private room" },
  { src: "/images/tha_hatha/the-hatha-yogashala-balcony-view-coconut-trees-goa.webp", alt: "Private balcony facing peaceful coconut palm groves", caption: "Private balcony" },
  { src: "/images/tha_hatha/the-hatha-yogashala-yoga-school-campus-goa.webp", alt: "Serene campus pathways to nearby Keri and Arambol beach", caption: "Campus & beach path" },
];

const mealImages = {
  breakfast: "/images/tha_hatha/the-hatha-yogashala-sattvic-yogic-meal-goa.webp",
  lunch: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-04.webp",
  dinner: "/images/tha_hatha/the-hatha-yogashala-sattvic-yogic-meal-goa.webp",
  snacks: "/images/tha_hatha/the-hatha-yogashala-yoga-school-goa-05.webp",
};

export const meals = [
  {
    meal: "Breakfast",
    time: "09:30 – 10:45 AM",
    text: "A wholesome start featuring fruits, cereals, and traditional Indian dishes to ease you into the day.",
    image: mealImages.breakfast,
  },
  {
    meal: "Lunch",
    time: "01:30 – 02:30 PM",
    text: "A balanced plate of vegetables, grains, and legumes for a satisfying, energizing midday meal.",
    image: mealImages.lunch,
  },
  {
    meal: "Dinner",
    time: "07:00 – 08:00 PM",
    text: "Light, easily digestible dishes designed to support restful sleep and recovery, always vegetarian.",
    image: mealImages.dinner,
  },
  {
    meal: "Tea/Coffee Break",
    time: "08:00 – 08:15 AM",
    text: "Herbal teas, fresh filter coffee, and fruit after morning cleansing.",
    image: mealImages.snacks,
  },
];

export const mealPhilosophy = {
  title: "Food & Nutrition",
  points: [
    "All meals at The Hatha Yogashala are vegetarian, prepared with fresh, locally sourced ingredients.",
    "Breakfast: A wholesome start featuring fruits, cereals, and traditional Indian dishes.",
    "Lunch: A balanced plate of vegetables, grains, and legumes for a satisfying, energizing midday meal.",
    "Dinner: Light, easily digestible dishes designed to support restful sleep and recovery.",
    "Vegan, gluten-free, and allergy-specific requirements accommodated with prior notice.",
  ],
};

export const bestTimeToVisit = [
  { month: "January", weather: "Clear skies · 24–32°C", crowd: "Busy", experience: "Bright mornings, warm beaches, and energetic retreat energy.", rec: "Best for first-timers and beach lovers.", season: "high" },
  { month: "February", weather: "Sunny · 23–32°C", crowd: "Busy", experience: "Classic Goan weather — perfect for sunrise yoga and evening ocean swims.", rec: "Best for beach activities.", season: "high" },
  { month: "March", weather: "Warming · 26–34°C", crowd: "Moderate", experience: "The retreat season peaks as travellers seek reset before the summer heat.", rec: "Best for yoga retreats.", season: "high" },
  { month: "April", weather: "Hot · 28–36°C", crowd: "Calmer", experience: "Quieter shalas and warm sea make for a focused, personal practice.", rec: "Best for fewer crowds.", season: "shoulder" },
  { month: "May", weather: "Very warm · 28–37°C", crowd: "Quiet", experience: "An introspective, still month — ideal for deep meditation and slow days.", rec: "Best for quiet stays.", season: "shoulder" },
  { month: "June", weather: "Monsoon start · humid", crowd: "Very quiet", experience: "Heavy rains begin; lush green begins to overtake the coastline.", rec: "Beginning of monsoon.", season: "monsoon" },
  { month: "July", weather: "Monsoon · heavy rain", crowd: "Very quiet", experience: "Emerald landscapes and dramatic skies — a dramatic, contemplative setting.", rec: "Lush green landscapes.", season: "monsoon" },
  { month: "August", weather: "Monsoon easing · warm rain", crowd: "Very quiet", experience: "Peaceful and deeply introspective — retreat rates are at their most gentle.", rec: "Peaceful introspective retreat.", season: "monsoon" },
  { month: "September", weather: "Rain easing · 25–31°C", crowd: "Quiet", experience: "The landscape is still green but the skies are clearing — an underrated gem.", rec: "Underrated season.", season: "shoulder" },
  { month: "October", weather: "Dry returning · 24–32°C", crowd: "Quiet", experience: "Clear skies and pleasant warmth return as the tourist season slowly builds.", rec: "Clear skies.", season: "shoulder" },
  { month: "November", weather: "Perfect · 22–31°C", crowd: "Building", experience: "Near-perfect conditions: warm days, cool nights, and a fresh start to the season.", rec: "Perfect weather.", season: "high" },
  { month: "December", weather: "Mild · 20–30°C", crowd: "Festive", experience: "Holiday retreat atmosphere with Christmas and New Year beach celebrations.", rec: "Holiday retreat atmosphere.", season: "high" },
];

export const whatIncluded = [
  "Beachside accommodation (dorm, twin-share, or private)",
  "Three daily vegetarian meals (vegan/GF on request)",
  "Daily yoga, meditation & breathwork sessions",
  "Ayurveda & philosophy classes",
  "Sound healing, breathwork & massage therapy",
  "Wellness excursions (ice bath, sauna, mud bath, ecstatic dance, temples)",
  "Wi-Fi, hot water & filtered drinking water",
  "24/7 student support throughout your stay",
];

export const whatNotIncluded = [
  "Flights, visa & travel insurance",
  "Airport or railway station transfers (available on request)",
  "Personal toiletries & laundry",
  "Optional personal expenses",
];

export const testimonials = [
  {
    name: "Maria",
    country: "Spain",
    rating: 5,
    text: "The 7-day retreat at Hatha Yogashala was the reset I desperately needed. The teachers' guidance, the ice baths, the food, the beach meditations — every single day felt intentional and healing. I left Goa feeling like a new person.",
    image: IMAGES.hero,
    tag: "7-Day Retreat",
  },
  {
    name: "Anna",
    country: "Germany",
    rating: 5,
    text: "Five days at Hatha Yogashala gave me what months of city life could not — stillness, energy, and clarity. The sound healing and beach meditations were unforgettable. I will be back for the 7-day retreat next year.",
    image: IMAGES.class,
    tag: "5-Day Retreat",
  },
  {
    name: "Nikita",
    country: "Russia",
    rating: 5,
    text: "I only had a weekend in Goa, and this 3-day retreat at Hatha Yogashala was the perfect way to spend it. The ice bath, the beach yoga, the food — everything was exceptional. I left completely recharged.",
    image: IMAGES.coast,
    tag: "3-Day Retreat",
  },
  {
    name: "Elena",
    country: "Russia",
    rating: 5,
    text: "Hatha Yogashala completely transformed my relationship with yoga. The teaching was precise, the community was warm, and training next to the beach in Goa was beyond what I imagined.",
    image: IMAGES.pranayama,
    tag: "200-Hour YTT",
  },
  {
    name: "Sarah",
    country: "United Kingdom",
    rating: 5,
    text: "I arrived as a complete beginner and left as a confident yoga teacher. The small class size meant the trainers knew my name and my body. This is genuinely the best yoga teacher training in Goa.",
    image: IMAGES.hatha,
    tag: "200-Hour YTT",
  },
  {
    name: "David",
    country: "France",
    rating: 5,
    text: "The perfect balance of practice and rest. Sound healing at sunset and the sauna–ice bath ritual were unforgettable. A true wellness retreat in Goa.",
    image: IMAGES.coast,
    tag: "5-Day Retreat",
  },
  {
    name: "Lukas",
    country: "Germany",
    rating: 5,
    text: "The philosophy and meditation teachings at Hatha Yogashala changed how I see yoga. The quality of teaching and the warmth of the community exceeded every expectation.",
    image: IMAGES.hero,
    tag: "300-Hour YTT",
  },
  {
    name: "Tom",
    country: "Australia",
    rating: 5,
    text: "The 100-hour course was the perfect introduction. The teachers made Sanskrit, anatomy, and philosophy accessible and inspiring. I will return for my 200-hour certification.",
    image: IMAGES.pranayama,
    tag: "100-Hour YTT",
  },
];

export const retreatFaqs = [
  {
    question:
      "What is a yoga retreat, and how is it different from a Yoga Teacher Training (YTT)?",
    answer:
      "A yoga retreat is a short, immersive wellness break focused on daily practice, rest, and self-care — typically 3 to 7 days — with no certification involved. A Yoga Teacher Training (YTT) is a longer, structured certification course (100–300 hours) that qualifies you to teach. The Hatha Yogashala offers both.",
  },
  {
    question: "How long are the retreats at The Hatha Yogashala?",
    answer:
      "We offer 3-day, 5-day, and 7-day retreat formats, plus a specialized 5-Day Kundalini & Iyengar fusion retreat near Keri Beach. Each includes daily yoga, meditation, Ayurveda basics, and wellness excursions.",
  },
  {
    question: "Do I need prior yoga experience to join a retreat?",
    answer:
      "No. Our retreats are open to all levels, from complete beginners to experienced practitioners. Classes and practices are adapted to suit everyone in the group.",
  },
  {
    question: "What is included in the retreat price?",
    answer:
      "Accommodation, three daily vegetarian meals, daily yoga and meditation sessions, Ayurveda/philosophy classes, sound healing or breathwork sessions, and access to wellness excursions (subject to availability) such as ice baths, sauna, and mud baths.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Standard check-in is 11:00 AM and check-out is 1:00 PM on the retreat's start and end dates.",
  },
  {
    question: "Can dietary restrictions be accommodated?",
    answer:
      "Yes. Vegan, gluten-free, and allergy-specific requirements can be accommodated with prior notice.",
  },
  {
    question: "How do I get to The Hatha Yogashala in Goa?",
    answer:
      "The nearest airport is Manohar International Airport (Mopa, North Goa), about an hour away; Dabolim Airport is roughly a 2-hour drive. The nearest railway station is Margao, about 80 km away. Airport and station transfers can be arranged for an additional charge.",
  },
];

// ---------------------------------------------------------------------
// Day-by-day schedules
// ---------------------------------------------------------------------
const baseDays = {
  3: [
    {
      title: "Finding Your Rhythm",
      intro:
        "Arrive, unpack, and let the coastal rhythm take over. Your first evening practice introduces the week ahead at a gentle, welcoming pace.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Goa Sightseeing & Beach Exploration"],
        ["13:00", "Lunch"],
        ["14:00", "Rest"],
        ["17:00", "Vinyasa Flow"],
        ["18:30", "Sunset Meditation"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Going Deeper",
      intro:
        "Your body opens up and the breath deepens. A nature walk connects the morning practice to the landscape around you, and Yoga Nidra guides you into profound rest.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Nature Walk & Cultural Exploration"],
        ["13:00", "Lunch"],
        ["14:00", "Rest"],
        ["17:00", "Vinyasa Flow"],
        ["18:30", "Yoga Nidra & Meditation"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Taking It Home",
      intro:
        "The final day is about integration — softening the practice, reflecting on what you have learned, and celebrating your journey with a farewell dinner under the stars.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Reflection Session"],
        ["13:00", "Lunch"],
        ["14:00", "Rest"],
        ["17:00", "Gentle Yoga"],
        ["18:30", "Closing Meditation"],
        ["20:00", "Farewell Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
  ],
  5: [
    {
      title: "Finding Your Rhythm",
      intro:
        "Arrive, unpack, and settle into the slow coastal rhythm. An opening Hatha practice and welcome circle set a warm, unhurried tone.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Goa Sightseeing & Beach Exploration"],
        ["13:00", "Lunch"],
        ["14:00", "Rest"],
        ["17:00", "Vinyasa Flow"],
        ["18:30", "Sunset Meditation"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Going Deeper",
      intro:
        "The practice builds. Breathwork, alignment workshops, and a beach walk deepen your connection between effort and ease.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Beach Walk & Breathwork Workshop"],
        ["13:00", "Lunch"],
        ["14:00", "Rest"],
        ["17:00", "Hatha Flow"],
        ["18:30", "Yoga Nidra & Meditation"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Exploring Goa",
      intro:
        "A mid-retreat excursion — spice farms, heritage streets, or a sunset cruise — gives the body a gentle day of movement through culture and nature.",
      schedule: [
        ["07:00", "Gentle Morning Yoga"],
        ["09:00", "Breakfast"],
        ["10:30", "Goa Excursion (spice farm, heritage, or cruise)"],
        ["13:00", "Lunch on the move"],
        ["14:00", "Free time"],
        ["17:00", "Restorative Practice"],
        ["18:30", "Sunset Practice"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Stillness & Sound",
      intro:
        "A quieter day of meditation, sound healing, and journaling — time to let everything from the first days land.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Sound Healing Session"],
        ["13:00", "Lunch"],
        ["14:00", "Rest & Journaling"],
        ["17:00", "Gentle Yoga"],
        ["18:30", "Community Circle"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Taking It Home",
      intro:
        "Integration day — a closing meditation, honest reflection, and a farewell dinner that sends you home with tools to keep the practice alive.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Reflection Session"],
        ["13:00", "Lunch"],
        ["14:00", "Rest"],
        ["17:00", "Gentle Yoga"],
        ["18:30", "Closing Meditation"],
        ["20:00", "Farewell Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
  ],
  7: [
    {
      title: "Finding Your Rhythm",
      intro:
        "Arrive and settle into the coastal rhythm. A gentle opening practice and welcome dinner ease you into the week ahead.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Goa Sightseeing & Beach Exploration"],
        ["13:00", "Lunch"],
        ["14:00", "Rest"],
        ["17:00", "Vinyasa Flow"],
        ["18:30", "Sunset Meditation"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Going Deeper",
      intro:
        "Your practice builds momentum as alignment workshops and breathwork sharpen your awareness.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Alignment & Breathwork Workshop"],
        ["13:00", "Lunch"],
        ["14:00", "Rest"],
        ["17:00", "Hatha Flow"],
        ["18:30", "Yoga Nidra & Meditation"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Beach & Nature Day",
      intro:
        "A day anchored by the ocean — sunrise practice on the sand, a long coastal walk, and unstructured time by the water.",
      schedule: [
        ["07:00", "Sunrise Beach Yoga"],
        ["09:00", "Breakfast"],
        ["10:30", "Beach Walk & Nature Time"],
        ["13:00", "Lunch"],
        ["14:00", "Free Beach Time"],
        ["17:00", "Restorative Practice"],
        ["18:30", "Sunset Meditation"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Exploring Goa",
      intro:
        "A cultural excursion — spice plantation, heritage walk, or sunset cruise — connects the retreat to the land around it.",
      schedule: [
        ["07:00", "Gentle Morning Yoga"],
        ["09:00", "Breakfast"],
        ["10:30", "Goa Excursion"],
        ["13:00", "Lunch on the move"],
        ["14:00", "Free time"],
        ["17:00", "Vinyasa Flow"],
        ["18:30", "Sunset Practice"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Stillness & Sound",
      intro:
        "A softer day of meditation, sound healing, and journaling as the week's insights begin to settle.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Sound Healing & Mindfulness Workshop"],
        ["13:00", "Lunch"],
        ["14:00", "Rest & Journaling"],
        ["17:00", "Gentle Yoga"],
        ["18:30", "Community Circle"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Surrender & Rest",
      intro:
        "A deeply restorative day — slow flow, extended rest, and space to simply be before the closing chapter.",
      schedule: [
        ["07:00", "Slow Hatha Yoga"],
        ["09:00", "Breakfast"],
        ["11:00", "Restorative Yoga & Breathwork"],
        ["13:00", "Lunch"],
        ["14:00", "Extended Rest"],
        ["17:00", "Gentle Practice"],
        ["18:30", "Sunset Meditation"],
        ["20:00", "Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
    {
      title: "Taking It Home",
      intro:
        "Integration day — reflection, closing meditation, and a farewell celebration that marks the end of the journey and the start of your home practice.",
      schedule: [
        ["07:00", "Asana & Pranayama"],
        ["09:00", "Breakfast"],
        ["11:00", "Reflection Session"],
        ["13:00", "Lunch"],
        ["14:00", "Rest"],
        ["17:00", "Gentle Yoga"],
        ["18:30", "Closing Meditation"],
        ["20:00", "Farewell Dinner"],
        ["22:00", "Lights Off"],
      ],
    },
  ],
};

// ---------------------------------------------------------------------
// 600–800 word overview, parametrised by days + category
// ---------------------------------------------------------------------
function buildOverview(days, name) {
  return [
    `The ${name} is a small-group, residential wellness retreat in North Goa designed for anyone who needs to pause. Whether you are recovering from a demanding job, marking a transition, or simply craving a week without screens and schedules, this retreat offers a gentle container of yoga, meditation, nutritious food, and the ocean — a rare combination that lets the nervous system actually unwind.`,
    `Goa is ideal for this kind of reset. Warm mornings, palm-fringed beaches, and a famously unhurried coastal rhythm create the perfect backdrop for practice and rest. The shala sits in a quiet residential area of North Goa, moments from the sand, yet close enough to the region's cafés, markets, and culture for easy exploration during free time. There is something deeply grounding about practising yoga with the sound of the sea in the distance and the salt air on your skin.`,
    `What can you expect? A rhythm that is full enough to feel transformative and spacious enough to feel restorative. Each day typically opens with asana and pranayama as the sun rises, followed by a sattvic breakfast, a free or excursion block, a leisurely lunch, protected rest, an evening flow or gentle practice, and a guided meditation as the day closes. Between sessions there is real time — time to read, walk the beach, nap, journal, or do nothing at all.`,
    `The mental benefits are often the first thing guests notice. Days of guided stillness, breathwork, and screen-free time quiet the mental chatter that busy life amplifies. The physical benefits follow quickly: regular movement improves strength, flexibility, and circulation, while the calm nervous system supports deeper sleep and easier digestion. For many guests, the deepest shift is spiritual or emotional — a restored sense of clarity, a renewed relationship with the body, and a quiet confidence that comes from being truly witnessed in a supportive group.`,
    `The atmosphere is warm, simple, and judgment-free. This is not a bootcamp and there are no performance targets. The teaching team meets every guest where they are, offering variations for every posture and honest, encouraging feedback. Evenings belong to the community — sunset circles, shared dinners, and the kind of conversations that often become lifelong friendships.`,
    `The daily rhythm is deliberately predictable, because predictability is what makes deep rest possible. Your body learns the schedule: move, breathe, eat, rest, practise, sleep. By the final day, most guests arrive at a surprising conclusion — this is what sustainable wellbeing feels like, and it is possible to build it back home with simple, daily practices.`,
    `Each retreat includes comfortable shared or private accommodation, three freshly prepared vegetarian meals a day, all yoga and meditation sessions, retreat materials, and ongoing teacher support. Optional excursions — spice plantations, heritage walks, sunset cruises, and Ayurvedic therapies — let you experience the best of Goa on your own terms.`,
    `With ${days} days of guided practice and the Goan coast as your backdrop, this retreat is less a holiday and more a handbrake turn on your year. You will leave with a deeper practice, a calmer mind, a fuller heart, and a clear, personal plan for taking the rhythm home.`,
  ];
}

function buildOverviewShort(days, name) {
  return [
    `The ${name} is a small-group residential retreat in North Goa for anyone who needs a genuine pause — a few days of yoga, meditation, nourishing food, and the ocean to let the nervous system truly unwind.`,
    `Each day opens with asana and pranayama at sunrise, followed by a sattvic breakfast, a free or excursion block, lunch, protected rest, an evening practice, and a guided meditation as the day closes. The rhythm is full enough to feel transformative and spacious enough to feel restorative.`,
    `You will leave with a deeper practice, a calmer mind, and a simple, personal plan for carrying the rhythm home.`,
  ];
}

// Upcoming sample start dates per retreat length. Replace with the
// confirmed published schedule before launch.
function sampleDates(days) {
  const starts = {
    3: ["2026-08-01", "2026-08-15", "2026-09-05", "2026-09-19"],
    5: ["2026-08-03", "2026-08-17", "2026-09-07", "2026-09-21"],
    7: ["2026-08-02", "2026-08-16", "2026-09-06", "2026-09-20"],
  };
  const list = starts[days] || starts[3];
  const toDate = (value) =>
    new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(
      new Date(value),
    );
  return list.map((start, index) => {
    const end = new Date(start);
    end.setDate(end.getDate() + days - 1);
    return {
      id: `${start}-${days}`,
      start,
      end: end.toISOString().slice(0, 10),
      label: `${toDate(start)} — ${toDate(end.toISOString().slice(0, 10))}`,
      availability: index === 0 ? "Almost full" : index === 1 ? "6 spots left" : "Available",
    };
  });
}

export function getRetreatPageData(arg) {
  const retreat = typeof arg === "object" && arg !== null ? arg : null;
  const days = retreat?.days || (typeof arg === "number" ? arg : 5);
  const category =
    retreat?.category ||
    (days === 3
      ? "3-Day Retreat"
      : days === 5
        ? "5-Day Retreat"
        : days === 7
          ? "7-Day Retreat"
          : "Mindful Yoga Retreat");
  const name = retreat?.name || `${days}-Day Yoga Retreat in Goa`;
  const heroImage = retreat?.image || IMAGES.hero;
  const heroImageAlt = retreat?.name
    ? `Yoga and meditation session during ${retreat.name}`
    : `Peaceful yoga and meditation session during ${name}`;
  const heroTagline =
    retreat?.tagline ||
    retreat?.heroSubtitle ||
    (retreat?.description
      ? retreat.description.split(". ")[0] + "."
      : days === 3
        ? "Step away from the noise of daily life into 3 days of stillness, movement, and community in Goa."
        : days === 7
          ? "Seven days of consistent Hatha practice, Ayurvedic wellness, and coastal living in North Goa."
          : "Five days to settle into practice — daily Hatha yoga, cleansing rituals, and restorative downtime.");
  const duration = retreat?.duration || `${days} days · ${days - 1} nights`;
  const location = retreat?.location || "Querim, North Goa, India";
  const locationDetail =
    "Querim · near Arambol · approx. 25–30 min from MOPA (GOX) · Mopa and Dabolim (GOI) airports";

  const currency = retreat?.priceCurrency || "EUR";
  const sharedPriceNumber =
    retreat?.pricing?.shared?.price ??
    retreat?.priceNumeric ??
    retreatPricingByDays[days]?.shared?.price ??
    (days === 3 ? 199 : days === 7 ? 399 : 299);
  const privatePriceNumber =
    retreat?.pricing?.private?.price ??
    retreatPricingByDays[days]?.private?.price ??
    (days === 3 ? 399 : days === 7 ? 599 : 499);

  const rawOverview = retreat?.overview
    ? Array.isArray(retreat.overview)
      ? retreat.overview
      : [retreat.overview]
    : retreat?.whatIs?.paragraphs || buildOverview(days, name);

  const isSimple = Boolean(retreat?.hidePricingAndSidebar);

  return {
    days,
    name,
    category,
    rating: retreat?.rating ?? (days === 5 ? 5.0 : 4.9),
    ratingCount: 187,
    students: "3,500+",
    heroTagline,
    heroImage,
    heroImageAlt,
    duration,
    hidePricingAndSidebar: isSimple,
    checkIn: retreat?.checkIn || "11:00 AM",
    checkOut: retreat?.checkOut || "1:00 PM",
    location,
    locationDetail,
    overview: rawOverview,
    overviewSummary: retreat?.whatIs?.paragraphs || rawOverview,
    whyChoose: isSimple ? [] : whyChoose,
    teachers: retreatTeachers,
    highlights: retreat?.benefits || retreatHighlights,
    daysSchedule: isSimple ? [] : baseDays[days] || baseDays[5],
    dailySchedule: isSimple ? null : retreat?.dailySchedule || standardRetreatSchedule,
    scheduleMatrix: isSimple ? null : retreat?.scheduleMatrix || null,
    excursionsStory: isSimple ? null : retreat?.excursionsStory || null,
    experiences: isSimple ? [] : goaExperiences,
    freeTime: isSimple ? [] : freeTimeIdeas,
    feeRows: isSimple ? null : retreat?.feeRows || null,
    feeTableName: retreat?.feeTableName || `${days} Days Yoga Retreat`,
    facilityHeader: retreat?.facilityHeader || "Facilities",
    priceHeader: retreat?.priceHeader || (retreat?.priceCurrency === "INR" ? "Cost" : "Price In Euro"),
    accommodation: {
      options: isSimple ? [] : retreat?.accommodationOptions || accommodationOptions,
      sharedGallery: isSimple ? [] : sharedGallery,
      privateGallery: isSimple ? [] : privateGallery,
      facilities: isSimple ? [] : accommodationFacilities,
    },
    meals: isSimple ? [] : meals,
    mealPhilosophy: isSimple ? null : mealPhilosophy,
    bestTime: bestTimeToVisit,
    included: isSimple ? [] : whatIncluded,
    notIncluded: isSimple ? [] : whatNotIncluded,
    testimonials: retreat?.testimonials || testimonials,
    faqs: retreatFaqs,
    pricing: isSimple
      ? null
      : {
          ...retreatPricing,
          shared: {
            ...retreatPricing.shared,
            price: sharedPriceNumber,
            currency,
          },
          private: {
            ...retreatPricing.private,
            price: privatePriceNumber,
            currency,
          },
        },
    trustBadges: isSimple
      ? [
          "Authentic Yoga & Wellness Tradition in Goa",
          "Certified Experienced Instructors",
          "Beachside Ashram Campus in North Goa",
          "All Experience Levels Welcome",
        ]
      : trustBadges,
    dates: isSimple ? [] : sampleDates(days),
  };
}
