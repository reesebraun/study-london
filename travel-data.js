// Travel Destinations Data
const travelDestinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    image: "🗼",
    description: "The City of Light - iconic museums, cafés, and romantic architecture.",
    budget: "budget",
    duration: "2-3 days",
    travel_time: "2.5 hours",
    interests: ["art", "culture", "food", "romance"],
    best_season: ["spring", "fall"],
    vibe: "romantic",
    coordinates: [2.3522, 48.8566],
    estimated_cost: "£80-150",
    highlights: ["Eiffel Tower", "Louvre Museum", "Cafés", "Seine River"],
    student_tips: "Buy a Paris Museum Pass if visiting multiple museums. Hostels in Latin Quarter are very social and budget-friendly.",
    testimonials: [1, 2]
  },
  {
    id: 2,
    name: "Amsterdam",
    country: "Netherlands",
    image: "🚲",
    description: "Canals, bikes, and vibrant nightlife - very student-friendly.",
    budget: "budget",
    duration: "2-3 days",
    travel_time: "3 hours",
    interests: ["nightlife", "culture", "food", "cycling"],
    best_season: ["spring", "summer"],
    vibe: "social",
    coordinates: [4.8945, 52.3676],
    estimated_cost: "£70-130",
    highlights: ["Canal Cruises", "Anne Frank House", "Bike Culture", "Cafés"],
    student_tips: "Get a bike rental - it's the best way to explore. Free museums on certain hours.",
    testimonials: [3, 4]
  },
  {
    id: 3,
    name: "Barcelona",
    country: "Spain",
    image: "🏖️",
    description: "Beach, architecture, and vibrant culture - perfect for spring/summer.",
    budget: "moderate",
    duration: "3-4 days",
    travel_time: "2 hours",
    interests: ["beach", "architecture", "food", "culture"],
    best_season: ["spring", "summer", "fall"],
    vibe: "energetic",
    coordinates: [2.1729, 41.3851],
    estimated_cost: "£100-180",
    highlights: ["Sagrada Familia", "Park Güell", "Beach", "Tapas"],
    student_tips: "Visit Sagrada Familia early or buy skip-the-line tickets. Beachfront drinks are pricier than city center.",
    testimonials: [2, 5]
  },
  {
    id: 4,
    name: "Berlin",
    country: "Germany",
    image: "🎨",
    description: "History, street art, and legendary nightlife - very affordable.",
    budget: "budget",
    duration: "3 days",
    travel_time: "3 hours",
    interests: ["history", "nightlife", "art", "culture"],
    best_season: ["spring", "fall"],
    vibe: "artsy",
    coordinates: [13.4050, 52.5200],
    estimated_cost: "£60-120",
    highlights: ["Brandenburg Gate", "Street Art", "Nightclubs", "Museums"],
    student_tips: "Berlin is super affordable. Visit museums on free entry evenings. Kreuzberg has the best street art.",
    testimonials: [1, 6]
  },
  {
    id: 5,
    name: "Prague",
    country: "Czech Republic",
    image: "🏰",
    description: "Medieval fairytale city - stunning architecture and very cheap.",
    budget: "budget",
    duration: "2-3 days",
    travel_time: "2 hours",
    interests: ["history", "architecture", "food", "culture"],
    best_season: ["spring", "fall"],
    vibe: "romantic",
    coordinates: [14.4370, 50.0755],
    estimated_cost: "£50-100",
    highlights: ["Charles Bridge", "Prague Castle", "Old Town Square", "Beer Halls"],
    student_tips: "Czech beer is incredibly cheap - enjoy it! Avoid Old Town Square restaurants, head to side streets.",
    testimonials: [4, 7]
  },
  {
    id: 6,
    name: "Rome",
    country: "Italy",
    image: "🏛️",
    description: "Ancient history and amazing food - the ultimate student bucket list.",
    budget: "moderate",
    duration: "3-4 days",
    travel_time: "2.5 hours",
    interests: ["history", "food", "culture", "architecture"],
    best_season: ["spring", "fall"],
    vibe: "historic",
    coordinates: [12.4964, 41.9028],
    estimated_cost: "£90-160",
    highlights: ["Colosseum", "Vatican", "Roman Forum", "Gelato"],
    student_tips: "Get the Roma Pass for museum entry. Street food (panini, pizza al taglio) is affordable.",
    testimonials: [2, 8]
  },
  {
    id: 7,
    name: "Lisbon",
    country: "Portugal",
    image: "☀️",
    description: "Warm weather, friendly locals, and great food - Portugal's coolest city.",
    budget: "budget",
    duration: "3 days",
    travel_time: "3 hours",
    interests: ["beach", "food", "culture", "relaxation"],
    best_season: ["spring", "summer", "fall"],
    vibe: "relaxed",
    coordinates: [[-9.1393, 38.7223]],
    estimated_cost: "£60-120",
    highlights: ["Belém Tower", "Street Food", "Fado Music", "Beaches"],
    student_tips: "Pastel de Nata and cheap wine everywhere. The city is very walkable and affordable.",
    testimonials: [3, 9]
  },
  {
    id: 8,
    name: "Budapest",
    country: "Hungary",
    image: "🏊",
    description: "Thermal baths and ruin bars - perfect for a fun weekend.",
    budget: "budget",
    duration: "2-3 days",
    travel_time: "2.5 hours",
    interests: ["nightlife", "relaxation", "culture", "food"],
    best_season: ["spring", "summer", "fall"],
    vibe: "social",
    coordinates: [19.0402, 47.4979],
    estimated_cost: "£50-110",
    highlights: ["Thermal Baths", "Ruin Bars", "Danube River", "Street Food"],
    student_tips: "Ruin bars are iconic - extremely social. Thermal baths are therapeutic and cheap.",
    testimonials: [6, 10]
  }
];

// Student Testimonials
const studentTestimonials = [
  {
    id: 1,
    name: "Sarah",
    year: "Junior",
    destination_id: [1, 4],
    text: "Paris was dreamy but can get pricey. Berlin blew my mind with the nightlife and art scene!",
    image: "👩"
  },
  {
    id: 2,
    name: "Marcus",
    year: "Sophomore",
    destination_id: [1, 3, 6],
    text: "I've done three European trips. Pro tip: visit museums early morning to avoid crowds and save money.",
    image: "👨"
  },
  {
    id: 3,
    name: "Emma",
    year: "Junior",
    destination_id: [2, 7],
    text: "Amsterdam was perfect for a friend group trip. Lisbon was unexpectedly relaxing - great vibes.",
    image: "👩"
  },
  {
    id: 4,
    name: "Jamal",
    year: "Senior",
    destination_id: [2, 5],
    text: "Prague is unbelievably cheap. I saved money there to splurge in Amsterdam. Both worth it!",
    image: "👨"
  },
  {
    id: 5,
    name: "Zara",
    year: "Junior",
    destination_id: [3],
    text: "Barcelona was my favorite. Went for the beaches, stayed for the food. Paella was life-changing.",
    image: "👩"
  },
  {
    id: 6,
    name: "Aiden",
    year: "Sophomore",
    destination_id: [4, 8],
    text: "Berlin's nightlife is unmatched. Budapest's ruin bars are the best social experience ever.",
    image: "👨"
  },
  {
    id: 7,
    name: "Liv",
    year: "Senior",
    destination_id: [5],
    text: "Prague felt like stepping into a fairy tale. Cheapest beer I've ever had. Highly recommend!",
    image: "👩"
  },
  {
    id: 8,
    name: "Diego",
    year: "Junior",
    destination_id: [6],
    text: "Rome is pricey but worth every penny. The history and food are incredible. Go for at least 3 days.",
    image: "👨"
  },
  {
    id: 9,
    name: "Nia",
    year: "Sophomore",
    destination_id: [7],
    text: "Lisbon was affordable and chill. Perfect place to slow down and enjoy good food and weather.",
    image: "👩"
  },
  {
    id: 10,
    name: "Kai",
    year: "Junior",
    destination_id: [8],
    text: "The thermal baths in Budapest are therapeutic. Ruin bars are where students go to party. Amazing experience!",
    image: "👨"
  }
];

// Color mapping for budgets and vibes
const budgetColors = {
  "budget": "#2ecc71",
  "moderate": "#f39c12",
  "expensive": "#e74c3c"
};

const vibeEmojis = {
  "romantic": "💕",
  "social": "🎉",
  "energetic": "⚡",
  "artsy": "🎨",
  "historic": "📚",
  "relaxed": "😌"
};
