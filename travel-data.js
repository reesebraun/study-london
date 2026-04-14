// Travel Destinations Data
const travelDestinations = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    coordinates: [2.3522, 48.8566],
    image: "🗼",
    description: "The City of Light - iconic museums, cafés, and romantic architecture.",
    budget: "budget",
    estimated_cost: "£80–150",
    duration_category: "weekend",
    duration_label: "2–3 days",
    best_season: ["spring", "fall"],
    interests: ["art", "culture", "food", "romance"],
    vibe: ["romantic", "cultural"],
    travel_style: ["budget-friendly", "cultural"],
    priorities: ["best-museums", "best-food", "romantic"],
    weather: ["mild", "pleasant"],
    student_tip: "Buy a Paris Museum Pass if visiting multiple museums. Hostels in Latin Quarter are very social and budget-friendly.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Cafés", "Seine River"],
    testimonial_source: "Sarah & Marcus"
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    coordinates: [4.8945, 52.3676],
    image: "🚲",
    description: "Canals, bikes, and vibrant nightlife - very student-friendly.",
    budget: "budget",
    estimated_cost: "£70–130",
    duration_category: "weekend",
    duration_label: "2–3 days",
    best_season: ["spring", "summer"],
    interests: ["nightlife", "culture", "food", "cycling"],
    vibe: ["social", "energetic"],
    travel_style: ["group-friendly", "budget-friendly"],
    priorities: ["best-nightlife", "easy-to-get-around", "social"],
    weather: ["cool", "variable"],
    student_tip: "Get a bike rental - it's the best way to explore. Free museums on certain hours.",
    highlights: ["Canal Cruises", "Anne Frank House", "Bike Culture", "Cafés"],
    testimonial_source: "Emma & Jamal"
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    coordinates: [2.1729, 41.3851],
    image: "🏖️",
    description: "Beach, architecture, and vibrant culture - perfect for spring/summer.",
    budget: "moderate",
    estimated_cost: "£100–180",
    duration_category: "extended",
    duration_label: "3–4 days",
    best_season: ["spring", "summer", "fall"],
    interests: ["beach", "architecture", "food", "culture"],
    vibe: ["energetic", "social"],
    travel_style: ["group-friendly", "adventure"],
    priorities: ["best-food", "best-nightlife", "easy-to-get-around"],
    weather: ["warm", "sunny"],
    student_tip: "Visit Sagrada Familia early or buy skip-the-line tickets. Beachfront drinks are pricier than city center.",
    highlights: ["Sagrada Familia", "Park Güell", "Beach", "Tapas"],
    testimonial_source: "Zara & Marcus"
  },
  {
    id: "berlin",
    name: "Berlin",
    country: "Germany",
    coordinates: [13.4050, 52.5200],
    image: "🎨",
    description: "History, street art, and legendary nightlife - very affordable.",
    budget: "budget",
    estimated_cost: "£60–120",
    duration_category: "extended",
    duration_label: "3 days",
    best_season: ["spring", "fall"],
    interests: ["history", "nightlife", "art", "culture"],
    vibe: ["artsy", "social"],
    travel_style: ["budget-friendly", "cultural"],
    priorities: ["best-nightlife", "best-art-scene", "budget"],
    weather: ["cool", "pleasant"],
    student_tip: "Berlin is super affordable. Visit museums on free entry evenings. Kreuzberg has the best street art.",
    highlights: ["Brandenburg Gate", "Street Art", "Nightclubs", "Museums"],
    testimonial_source: "Sarah & Aiden"
  },
  {
    id: "prague",
    name: "Prague",
    country: "Czech Republic",
    coordinates: [14.4370, 50.0755],
    image: "🏰",
    description: "Medieval fairytale city - stunning architecture and very cheap.",
    budget: "budget",
    estimated_cost: "£50–100",
    duration_category: "weekend",
    duration_label: "2–3 days",
    best_season: ["spring", "fall"],
    interests: ["history", "architecture", "food", "culture"],
    vibe: ["romantic", "cultural"],
    travel_style: ["budget-friendly", "cultural"],
    priorities: ["best-budget", "romantic", "easy-to-get-around"],
    weather: ["mild", "pleasant"],
    student_tip: "Czech beer is incredibly cheap - enjoy it! Avoid Old Town Square restaurants, head to side streets.",
    highlights: ["Charles Bridge", "Prague Castle", "Old Town Square", "Beer Halls"],
    testimonial_source: "Jamal & Liv"
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    coordinates: [12.4964, 41.9028],
    image: "🏛️",
    description: "Ancient history and amazing food - the ultimate student bucket list.",
    budget: "moderate",
    estimated_cost: "£90–160",
    duration_category: "extended",
    duration_label: "3–4 days",
    best_season: ["spring", "fall"],
    interests: ["history", "food", "culture", "architecture"],
    vibe: ["historic", "cultural"],
    travel_style: ["cultural", "food-focused"],
    priorities: ["best-food", "best-museums", "romantic"],
    weather: ["warm", "pleasant"],
    student_tip: "Get the Roma Pass for museum entry. Street food (panini, pizza al taglio) is affordable.",
    highlights: ["Colosseum", "Vatican", "Roman Forum", "Gelato"],
    testimonial_source: "Marcus & Diego"
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    coordinates: [-9.1393, 38.7223],
    image: "☀️",
    description: "Warm weather, friendly locals, and great food - Portugal's coolest city.",
    budget: "budget",
    estimated_cost: "£60–120",
    duration_category: "extended",
    duration_label: "3 days",
    best_season: ["spring", "summer", "fall"],
    interests: ["beach", "food", "culture", "relaxation"],
    vibe: ["relaxed", "social"],
    travel_style: ["budget-friendly", "chill"],
    priorities: ["best-food", "best-weather", "budget"],
    weather: ["warm", "sunny"],
    student_tip: "Pastel de Nata and cheap wine everywhere. The city is very walkable and affordable.",
    highlights: ["Belém Tower", "Street Food", "Fado Music", "Beaches"],
    testimonial_source: "Emma & Nia"
  },
  {
    id: "budapest",
    name: "Budapest",
    country: "Hungary",
    coordinates: [19.0402, 47.4979],
    image: "🏊",
    description: "Thermal baths and ruin bars - perfect for a fun weekend.",
    budget: "budget",
    estimated_cost: "£50–110",
    duration_category: "weekend",
    duration_label: "2–3 days",
    best_season: ["spring", "summer", "fall"],
    interests: ["nightlife", "relaxation", "culture", "food"],
    vibe: ["social", "relaxed"],
    travel_style: ["group-friendly", "wellness"],
    priorities: ["best-nightlife", "best-value", "social"],
    weather: ["warm", "pleasant"],
    student_tip: "Ruin bars are iconic - extremely social. Thermal baths are therapeutic and cheap.",
    highlights: ["Thermal Baths", "Ruin Bars", "Danube River", "Street Food"],
    testimonial_source: "Aiden & Kai"
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
