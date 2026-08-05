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
  hero: "/images/tha_hatha/the-hatha-yogashala-goa-sunset-yoga-session.webp",
  class: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-teacher-training-students-practice.jpg",
  coast: "/images/tha_hatha/the-hatha-yogashala-goa-beach-yoga-wheel-pose-students.webp",
  accommodation: "/images/tha_hatha/the-hatha-yogashala-goa-yoga-shala-campus-view.webp",
  pranayama: "/images/tha_hatha/the-hatha-yogashala-goa-meditation-pranayama-session.webp",
  hatha: "/images/tha_hatha/the-hatha-yogashala-goa-hatha-yoga-teacher-training-session.jpg",
};

export const retreatPricingByDays = {
  3: { shared: { price: 199 }, private: { price: 399 } },
  5: { shared: { price: 299 }, private: { price: 499 } },
  7: { shared: { price: 449 }, private: { price: 649 } },
};

export const retreatPricing = {
  shared: { price: 199, currency: "EUR", label: "Shared Room", per: "person" },
  private: { price: 399, currency: "EUR", label: "Private Room", per: "person" },
  paymentOptions: ["Bank Transfer", "PayPal", "Card"],
  trustBadges: [
    "Yoga Alliance Registered School",
    "All-inclusive vegetarian meals",
    "Beachside accommodation included",
    "24/7 student support",
  ],
};

export const trustBadges = [
  "Yoga Alliance Inspired Curriculum",
  "Small Group Experience",
  "Vegetarian Meals Included",
  "Beach & Nature Experiences",
];

export const whyChoose = [
  {
    title: "Small Group Experience",
    text: "Limited to a handful of guests so every practice, meal, and conversation receives genuine individual attention.",
    icon: "users",
  },
  {
    title: "Experienced Teachers",
    text: "Certified Hatha instructors with years of residential teaching and a clear, consent-led, inclusive style.",
    icon: "award",
  },
  {
    title: "Daily Yoga Practice",
    text: "Morning and evening sessions that build strength, flexibility, and a steady rhythm you can carry home.",
    icon: "flower",
  },
  {
    title: "Meditation Sessions",
    text: "Guided stillness each day — from breath awareness to Yoga Nidra — designed for every experience level.",
    icon: "sparkles",
  },
  {
    title: "Beach Walks",
    text: "Sunrise and sunset beach time beside quiet North Goa shores, moments from the shala.",
    icon: "waves",
  },
  {
    title: "Healthy Sattvic Meals",
    text: "Three freshly prepared vegetarian meals a day, cooked with local produce and traditional Ayurvedic principles.",
    icon: "leaf",
  },
  {
    title: "Comfortable Accommodation",
    text: "Clean, calm shared or private rooms with attached bathrooms, hot water, and a restful environment.",
    icon: "home",
  },
  {
    title: "Personal Growth",
    text: "Guided reflection, journaling prompts, and honest conversations that turn a holiday into a turning point.",
    icon: "compass",
  },
  {
    title: "Stress Relief",
    text: "A protected digital-detox rhythm that swaps notifications for stillness, sea air, and deep rest.",
    icon: "moon",
  },
  {
    title: "Community Connection",
    text: "Small-group dinners, sunset circles, and shared experiences that often become lifelong friendships.",
    icon: "heart",
  },
];

export const retreatTeachers = [
  {
    name: "Lead Hatha Yoga Teacher",
    role: "Hatha Yoga Teacher",
    experience: "12+ years teaching · 500-hour certified",
    specialization: "Hatha Vinyasa · Alignment · Adjustments",
    bio: "The lead teacher guides the morning asana practice with clear, precise cueing and a warm, unhurried pace. Trained in classical Hatha and modern functional alignment, they adapt every posture so beginners feel capable and experienced practitioners stay challenged.",
    credentials: "E-RYT 500 · 1,000+ teaching hours · First-aid certified",
    image: IMAGES.hatha,
  },
  {
    name: "Meditation & Pranayama Teacher",
    role: "Meditation Teacher",
    experience: "10+ years of daily practice",
    specialization: "Vipassana · Mindfulness · Yoga Nidra",
    bio: "A long-time daily meditator who makes stillness accessible to everyone. Their sessions blend breath observation, body scanning, and gentle guided practice — a grounding counterpoint to the active morning classes.",
    credentials: "Certified Meditation Facilitator · 10-day silent retreats",
    image: IMAGES.pranayama,
  },
  {
    name: "Breathwork & Pranayama Teacher",
    role: "Pranayama Teacher",
    experience: "8+ years of breath coaching",
    specialization: "Pranayama · Breathwork · Nervous-system regulation",
    bio: "Leads the breathwork and pranayama sessions with an emphasis on safety and personal pacing. Expect accessible techniques that calm the nervous system, improve focus, and support better sleep — taught without dogma.",
    credentials: "Breathwork Facilitator · Yoga Therapy Diploma",
    image: IMAGES.class,
  },
  {
    name: "Retreat Facilitator & Host",
    role: "Retreat Facilitator",
    experience: "7+ years hosting retreats in Goa",
    specialization: "Hospitality · Community · Excursions",
    bio: "Your host for the stay — from arrival to farewell. They coordinate meals, excursions, sunset circles, and the small logistics that make a retreat feel effortless, and they are always available for a conversation or a question.",
    credentials: "Retreat Management · Local Goa guide network",
    image: IMAGES.coast,
  },
];

export const retreatHighlights = [
  "Beach Sunrise Yoga",
  "Guided Meditation",
  "Breathwork Sessions",
  "Sound Healing",
  "Healthy Vegetarian Meals",
  "Nature Excursions",
  "Sunset Practices",
  "Community Circles",
  "Digital Detox",
  "Mindfulness Workshops",
];

export const goaExperiences = [
  {
    title: "Arambol Beach",
    text: "A bohemian northern beach famous for its drum circles, cliff viewpoints, and relaxed sunset energy — a favourite for a slow afternoon.",
    tag: "Free time",
  },
  {
    title: "Morjim Beach",
    text: "A wide, quiet stretch of sand and olive ridley turtle nesting ground, ideal for long walks and birdwatching by the estuary.",
    tag: "Nature",
  },
  {
    title: "Ashwem Beach",
    text: "A serene, upscale beach with shallow waters and laid-back beach shacks — perfect for swimming and sunset dinners.",
    tag: "Relaxation",
  },
  {
    title: "Sunset Cruise",
    text: "Sail along the Chapora river as the sky turns gold, often with dolphins surfacing alongside the boat.",
    tag: "Boat trip",
  },
  {
    title: "Dolphin Watching",
    text: "An early-morning boat ride to spot playful spinner dolphins in their natural habitat.",
    tag: "Wildlife",
  },
  {
    title: "Spice Plantation Tour",
    text: "Wander through fragrant spice farms, taste fresh tropical fruit, and learn how Ayurvedic ingredients reach your plate.",
    tag: "Culture",
  },
  {
    title: "Old Goa Heritage Walk",
    text: "Explore the colonial churches, cathedrals, and ruins of 16th-century Old Goa with a knowledgeable local guide.",
    tag: "History",
  },
  {
    title: "Portuguese Architecture Tour",
    text: "Wander the pastel-hued streets and heritage houses of Fontainhas, Goa's Latin Quarter.",
    tag: "Culture",
  },
  {
    title: "Local Markets",
    text: "Browse vibrant Anjuna and Mapusa markets for textiles, spices, ceramics, and handmade souvenirs.",
    tag: "Shopping",
  },
  {
    title: "Beach Cafes",
    text: "Sip fresh coconut water or a lassi at a sun-drenched café while watching the waves roll in.",
    tag: "Food",
  },
  {
    title: "Live Music Evenings",
    text: "Acoustic sets and open-mic nights at nearby beach bars — a gentle taste of Goa's creative scene.",
    tag: "Evening",
  },
  {
    title: "Water Activities",
    text: "Kayaking, paddleboarding, and snorkelling at calm coves, arranged through trusted local operators.",
    tag: "Adventure",
  },
  {
    title: "Ayurvedic Therapies",
    text: "Traditional Abhyanga massage and herbal treatments with qualified Ayurvedic practitioners.",
    tag: "Wellness",
  },
  {
    title: "Massage Sessions",
    text: "Rejuvenating deep-tissue or relaxation massages at the shala or a trusted nearby studio.",
    tag: "Wellness",
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
  { title: "Local culture exploration", text: "Visit a village temple, a spice farm, or a heritage house to meet the real Goa.", icon: "compass" },
];

export const accommodationFacilities = [
  { label: "WiFi", included: true },
  { label: "Attached Bathroom", included: true },
  { label: "Clean Linen", included: true },
  { label: "Hot Water", included: true },
  { label: "Air Conditioning", included: true },
  { label: "Peaceful Environment", included: true },
];

const sharedGallery = [
  { src: IMAGES.accommodation, alt: "Calm shared twin room at the retreat", caption: "Shared twin room" },
  { src: IMAGES.coast, alt: "Shared room garden and palm setting", caption: "Garden setting" },
  { src: IMAGES.class, alt: "Open-air shared practice area", caption: "Open-air practice hall" },
];

const privateGallery = [
  { src: IMAGES.accommodation, alt: "Private room with attached bathroom", caption: "Private room" },
  { src: IMAGES.hero, alt: "Private balcony facing the garden", caption: "Private balcony" },
  { src: IMAGES.coast, alt: "Tranquil path from private rooms to the beach", caption: "Beach access" },
];

const mealImages = {
  breakfast: IMAGES.accommodation,
  lunch: IMAGES.class,
  dinner: IMAGES.pranayama,
  snacks: IMAGES.coast,
};

export const meals = [
  {
    meal: "Breakfast",
    time: "09:00",
    text: "Fresh fruit, smoothie bowls, porridge, eggs on request, herbal teas, and filter coffee to ease you into the day.",
    image: mealImages.breakfast,
  },
  {
    meal: "Lunch",
    time: "13:00",
    text: "A sattvic thali with seasonal vegetables, dal, rice, salad, and chutney — cooked fresh and balanced for energy.",
    image: mealImages.lunch,
  },
  {
    meal: "Dinner",
    time: "20:00",
    text: "A lighter evening meal with soups, grains, vegetables, and the occasional local Goan speciality, always vegetarian.",
    image: mealImages.dinner,
  },
  {
    meal: "Snacks",
    time: "16:30",
    text: "Fruit, nuts, coconut water, and herbal tea between sessions to keep you nourished without heaviness.",
    image: mealImages.snacks,
  },
];

export const mealPhilosophy = {
  title: "A sattvic kitchen",
  points: [
    "Sattvic philosophy — food that is fresh, pure, and light to support clarity and calm",
    "Fresh ingredients — vegetables and fruit sourced locally, often the same day",
    "Vegetarian meals — no meat or fish anywhere on the retreat",
    "Vegan options — every meal can be prepared plant-based on request",
    "Gluten-free options — accommodated with advance notice",
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
  "Accommodation",
  "Meals",
  "Daily Yoga",
  "Meditation",
  "Retreat Materials",
  "Community Activities",
  "Teacher Support",
];

export const whatNotIncluded = [
  "Flights",
  "Visa",
  "Travel Insurance",
  "Personal Expenses",
  "Airport Transfers",
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
    question: "What should I bring to the retreat?",
    answer:
      "Pack breathable practice clothing, a light layer for early mornings, sun protection, a refillable water bottle, personal toiletries, prescribed medication, and comfortable walking shoes. Mats and props are provided.",
  },
  {
    question: "Can complete beginners join?",
    answer:
      "Yes. Every session is adapted for all levels, and the teachers offer variations for every posture. Many first-time yoga guests join our retreats and leave with a practice they can continue at home.",
  },
  {
    question: "Is airport transfer available?",
    answer:
      "Airport transfers are not included in the retreat fee, but we can arrange a reliable transfer from Goa International Airport (GOI) or Manohar International Airport (GOX) for a small fee. Share your flight details when you book.",
  },
  {
    question: "What is included in the retreat price?",
    answer:
      "The price includes accommodation, three daily sattvic meals, daily yoga and meditation sessions, retreat materials, community activities, and ongoing teacher support. Flights, visa, insurance, personal expenses, and transfers are not included.",
  },
  {
    question: "Can dietary needs be accommodated?",
    answer:
      "Yes. The kitchen is fully vegetarian with vegan and gluten-free options available. Please let us know about allergies or dietary requirements at the time of booking so we can prepare.",
  },
  {
    question: "Is Goa safe for solo travellers?",
    answer:
      "Goa is one of India's most traveller-friendly destinations, and North Goa is very safe for solo travellers. The shala is in a peaceful residential area, and our staff are available around the clock.",
  },
  {
    question: "Which airport should I fly into?",
    answer:
      "Goa International Airport (GOI / Dabolim) and Manohar International Airport (GOX / MOPA) both serve the region. GOX is closer to the shala in North Goa. Most guests book flights before confirming transfers.",
  },
  {
    question: "What is the daily schedule?",
    answer:
      "Most days begin with morning asana and pranayama, followed by breakfast, a free or excursion block, lunch, rest, an evening vinyasa or gentle session, and sunset meditation. A full day-by-day schedule is shown on this page.",
  },
  {
    question: "Is the retreat suitable for pregnant guests?",
    answer:
      "Many prenatal guests join with an approved doctor's note. Please share your stage of pregnancy and any medical guidance when booking so the teachers can plan suitable variations.",
  },
  {
    question: "Can I extend my stay?",
    answer:
      "Yes — many guests combine a retreat with a longer stay in Goa. Ask about extending your accommodation or joining a longer retreat back to back.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept PayPal, Wise, UPI, and international bank transfer. After booking, you will receive verified payment instructions and a written confirmation of your reservation.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Reservations are fully refundable up to 14 days before the retreat start date. Inside 14 days, the deposit is non-refundable but can be transferred to a future retreat date.",
  },
  {
    question: "Are the retreats run by the same teachers every time?",
    answer:
      "Our core teaching team leads every retreat, with occasional guest teachers for specialist sessions like sound healing. The exact facilitator for your dates is confirmed at booking.",
  },
  {
    question: "How large are the retreat groups?",
    answer:
      "We keep groups intentionally small — typically 8 to 14 guests — so every person receives genuine individual attention.",
  },
  {
    question: "Will I have free time during the retreat?",
    answer:
      "Absolutely. Each day includes protected free time for the beach, reading, journaling, exploring, or simply resting. The schedule is designed for restoration, not a packed itinerary.",
  },
  {
    question: "Is there WiFi and phone signal?",
    answer:
      "Yes, high-speed WiFi is available at the shala and phone signal is strong in the area. We gently encourage a digital detox, but you are never cut off.",
  },
  {
    question: "Can couples or friends share a room?",
    answer:
      "Yes. The shared rooms are twin rooms, ideal for two people travelling together. Choose the shared room option and note your preference at booking.",
  },
  {
    question: "What if I have an injury or health condition?",
    answer:
      "Share any injuries, conditions, or accessibility needs when you book. The teachers will adapt your practice and, if needed, suggest suitable sessions with a health professional's guidance.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Comfortable, modest practice clothing is perfect. Goa is relaxed, but modest dress is appreciated in villages and temples during excursions.",
  },
  {
    question: "How do I confirm my booking?",
    answer:
      "Complete the booking form on this page, and our team will confirm availability, send verified payment instructions, and issue written confirmation — including a pre-retreat preparation guide.",
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

export function getRetreatPageData(days) {
  const category = days === 3 ? "Coastal reset" : days === 5 ? "Restorative stay" : days === 7 ? "Full week immersion" : "Extended immersion";
  const name = `${days}-Day Yoga Retreat in Goa`;
  return {
    days,
    name,
    category,
    rating: 4.9,
    ratingCount: 187,
    students: "3,500+",
    heroTagline: days === 3
      ? "A unique blend of spiritual exploration, physical rejuvenation, and cultural immersion in North Goa."
      : days === 7
        ? "A complete Mind-Body-Soul wellness retreat — daily yoga and meditation, sound healing, sauna and ice bath, and cultural excursions by the sea."
        : `${days} days of guided yoga, beach-side meditation, sattvic food, and true rest on the Goan coast.`,
    duration: `${days} days · ${days - 1} nights`,
    location: "Querim, North Goa, India",
    locationDetail: "Querim · near Arambol · approx. 25–30 min from MOPA (GOX) · Mopa and Dabolim (GOI) airports",
    overview: buildOverview(days, name),
    overviewSummary: buildOverviewShort(days, name),
    whyChoose,
    teachers: retreatTeachers,
    highlights: retreatHighlights,
    daysSchedule: baseDays[days],
    experiences: goaExperiences,
    freeTime: freeTimeIdeas,
    accommodation: {
      sharedGallery,
      privateGallery,
      facilities: accommodationFacilities,
    },
    meals,
    mealPhilosophy,
    bestTime: bestTimeToVisit,
    included: whatIncluded,
    notIncluded: whatNotIncluded,
    testimonials,
    faqs: retreatFaqs,
    pricing: {
      ...retreatPricing,
      shared: {
        ...retreatPricing.shared,
        price: retreatPricingByDays[days].shared.price,
      },
      private: {
        ...retreatPricing.private,
        price: retreatPricingByDays[days].private.price,
      },
    },
    trustBadges,
    dates: sampleDates(days),
  };
}
