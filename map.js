// Create the map
const map = L.map("map").setView([51.5074, -0.1278], 12);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; OpenStreetMap &copy; CARTO',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// Sample locations
const locations = [
  {
    name: "Borough Market",
    category: "food",
    coords: [51.5055, -0.0910],
    description: "A great food market with lots of options. Good for trying classic and international food.",
    price: "££"
  },
  {
    name: "Dishoom Covent Garden",
    category: "food",
    coords: [51.5129, -0.1267],
    description: "Popular student-friendly restaurant with a fun atmosphere and great Indian food.",
    price: "££"
  },
  {
    name: "Notting Hill",
    category: "neighborhood",
    coords: [51.5090, -0.2050],
    description: "A colorful and charming neighborhood with markets, cafes, and good weekend wandering.",
    price: "£££"
  },
  {
    name: "Camden",
    category: "neighborhood",
    coords: [51.5416, -0.1420],
    description: "Known for markets, music, vintage shopping, and a more alternative vibe.",
    price: "££"
  },
  {
    name: "British Museum",
    category: "activity",
    coords: [51.5194, -0.1270],
    description: "A must-see museum with free entry and a central location.",
    price: "Free"
  },
  {
    name: "Tower Bridge",
    category: "activity",
    coords: [51.5055, -0.0754],
    description: "One of London's most iconic landmarks and a great sightseeing stop.",
    price: "Free to view"
  }
];

// Store markers by category
let markers = [];

// Function to display markers
function showMarkers(category) {
  // Remove old markers
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];

  // Filter locations
  const filteredLocations = category === "all"
    ? locations
    : locations.filter(location => location.category === category);

  // Add new markers
  filteredLocations.forEach(location => {
    const marker = L.marker(location.coords)
      .addTo(map)
      .bindPopup(`
        <h3>${location.name}</h3>
        <p><strong>Category:</strong> ${location.category}</p>
        <p>${location.description}</p>
        <p><strong>Price:</strong> ${location.price}</p>
      `);

    markers.push(marker);
  });
}

// Initial display
showMarkers("all");

// Filter button logic
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Show matching markers
    const category = button.getAttribute("data-category");
    showMarkers(category);
  });
});