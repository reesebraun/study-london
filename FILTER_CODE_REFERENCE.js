// ============================================================
// FILTER IMPROVEMENTS - QUICK REFERENCE
// ============================================================

/**
 * NEW: applyTravelFilters()
 * 
 * Purpose: Apply all active filters to destination list
 * Triggered: Automatically when any checkbox changes (LIVE filtering)
 * Also available: Manual "Apply Filters" button (kept for flexibility)
 * 
 * What it does:
 * 1. Collects all checked filter values
 * 2. Filters destinations using AND logic (all filters apply)
 * 3. Updates map, cards, summary
 * 4. Zooms map to focus on results
 * 5. Closes panel on mobile + smooth scrolls
 * 
 * Key Fix: Uses destination.duration_category instead of fragile text matching
 */

function applyTravelFilters() {
  // Get selected filter values
  const budgetChecks = Array.from(document.querySelectorAll('input[name="travel-budget"]:checked')).map(el => el.value);
  const durationChecks = Array.from(document.querySelectorAll('input[name="travel-duration"]:checked')).map(el => el.value);
  const seasonChecks = Array.from(document.querySelectorAll('input[name="travel-season"]:checked')).map(el => el.value);
  const interestChecks = Array.from(document.querySelectorAll('input[name="travel-interests"]:checked')).map(el => el.value);
  const vibeChecks = Array.from(document.querySelectorAll('input[name="travel-vibe"]:checked')).map(el => el.value);

  // Filter destinations based on selections
  filteredDestinations = allDestinations.filter(destination => {
    // Budget: exact match required
    if (budgetChecks.length > 0 && !budgetChecks.includes(destination.budget)) {
      return false;
    }

    // Duration: IMPROVED - uses duration_category field
    if (durationChecks.length > 0) {
      if (!durationChecks.includes(destination.duration_category)) {
        return false;
      }
    }

    // Season: match ANY selected season
    if (seasonChecks.length > 0) {
      const hasSeasonMatch = seasonChecks.some(season => destination.best_season.includes(season));
      if (!hasSeasonMatch) return false;
    }

    // Interests: match ANY selected interest
    if (interestChecks.length > 0) {
      const hasInterestMatch = interestChecks.some(interest => destination.interests.includes(interest));
      if (!hasInterestMatch) return false;
    }

    // Vibe: IMPROVED - handles array properly with .includes()
    if (vibeChecks.length > 0) {
      const hasVibeMatch = vibeChecks.some(vibe => destination.vibe.includes(vibe));
      if (!hasVibeMatch) return false;
    }

    return true;
  });

  // Update UI
  updateFilterResultsSummary();
  renderDestinationCards();
  createTravelMarkers();
  zoomToFilteredDestinations();

  // Mobile experience
  if (window.innerWidth <= 768) {
    document.getElementById('travelFilterPanel').classList.remove('active');
    setTimeout(() => {
      document.querySelector('.travel-destinations').scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}

/**
 * NEW: zoomToFilteredDestinations()
 * 
 * Purpose: Intelligently zoom map to show filtered results
 * 
 * Behavior:
 * - 0 results: Do nothing (no zoom)
 * - 1 result: Fly to destination at zoom 12
 * - 2+ results: Fit all on screen with fitBounds()
 * 
 * Animation: 1500ms smooth transition
 */

function zoomToFilteredDestinations() {
  if (filteredDestinations.length === 0) {
    // No results: don't zoom, just show message
    return;
  }

  if (filteredDestinations.length === 1) {
    // Single destination: fly to it with zoom
    const destination = filteredDestinations[0];
    map.flyTo({
      center: destination.coordinates,
      zoom: 12,
      duration: 1500
    });
  } else {
    // Multiple destinations: fit all on screen using bounds
    const bounds = new mapboxgl.LngLatBounds();
    
    filteredDestinations.forEach(destination => {
      bounds.extend(destination.coordinates);
    });

    map.fitBounds(bounds, {
      padding: 60,
      duration: 1500,
      maxZoom: 11
    });
  }
}

/**
 * NEW: updateFilterResultsSummary()
 * 
 * Purpose: Display count of matching destinations
 * Shows emoji indicators:
 * - ✅ When results found
 * - ❌ When no results
 */

function updateFilterResultsSummary() {
  const summaryElement = document.getElementById('filter-results-summary');
  const count = filteredDestinations.length;
  
  if (count === 0) {
    summaryElement.innerHTML = '<p class="summary-text">❌ No destinations match your filters. Try adjusting them!</p>';
    summaryElement.style.display = 'block';
  } else if (count === 1) {
    summaryElement.innerHTML = `<p class="summary-text">✅ 1 destination matches your filters</p>`;
    summaryElement.style.display = 'block';
  } else {
    summaryElement.innerHTML = `<p class="summary-text">✅ ${count} destinations match your filters</p>`;
    summaryElement.style.display = 'block';
  }
}

/**
 * IMPROVED: resetTravelFilters()
 * 
 * Purpose: Reset filters to sensible defaults
 * 
 * Default behavior:
 * ✅ Budget (all checked): budget, moderate, expensive
 * ✅ Duration (all checked): weekend, extended
 * ✅ Season (all checked): spring, summer, fall
 * ❌ Interests (all unchecked)
 * ❌ Vibe (all unchecked)
 * 
 * OLD: Would check every box on reset
 * NEW: Restores intended defaults only
 */

function resetTravelFilters() {
  const defaults = {
    "travel-budget": ["budget", "moderate", "expensive"],
    "travel-duration": ["weekend", "extended"],
    "travel-season": ["spring", "summer", "fall"],
    "travel-interests": [],
    "travel-vibe": [],
    "travel-style": [],
    "travel-priority": []
  };

  // Uncheck all inputs first
  document.querySelectorAll('#travelFilterPanel input[type="checkbox"]').forEach(input => {
    input.checked = false;
  });

  // Then check only the defaults
  document.querySelectorAll('#travelFilterPanel input[type="checkbox"]').forEach(input => {
    const group = input.name;
    if (defaults[group]?.includes(input.value)) {
      input.checked = true;
    }
  });

  // Reset filters and update UI
  filteredDestinations = [...allDestinations];
  updateFilterResultsSummary();
  renderDestinationCards();
  createTravelMarkers();
  zoomToFilteredDestinations();
}

// ============================================================
// EVENT LISTENERS (NEW)
// ============================================================

// LIVE FILTERING: Update immediately when any checkbox changes
document.querySelectorAll('#travelFilterPanel input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    applyTravelFilters();  // Triggers instantly!
  });
});

// Panel toggle still works
document.getElementById('travelFilterToggle').addEventListener('click', function() {
  document.getElementById('travelFilterPanel').classList.toggle('active');
});

document.getElementById('closeTravelFilter').addEventListener('click', function() {
  document.getElementById('travelFilterPanel').classList.remove('active');
});

// Apply button still available (redundant now but kept for flexibility)
document.getElementById('applyTravelFilters').addEventListener('click', applyTravelFilters);
document.getElementById('resetTravelFilters').addEventListener('click', resetTravelFilters);

// ============================================================
// HTML ADDITIONS
// ============================================================

// Add this line to travel.html after <h2>Matching Destinations</h2>:
// <div id="filter-results-summary" class="filter-results-summary"></div>

// ============================================================
// CSS ADDITIONS
// ============================================================

// Add to styles.css:
/*
.filter-results-summary {
  display: none;
  margin-bottom: 1.5rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(0, 61, 130, 0.08), rgba(200, 16, 46, 0.05));
  border-left: 4px solid #C8102E;
  border-radius: 6px;
}

.filter-results-summary .summary-text {
  margin: 0;
  font-size: 1rem;
  color: #003D82;
  font-weight: 600;
}
*/

// ============================================================
// DATA REQUIREMENTS
// ============================================================

// Each destination in travel-data.js must have:
// - destination.budget: "budget" | "moderate" | "expensive"
// - destination.duration_category: "weekend" | "extended"
// - destination.best_season: ["spring", "summer", "fall", ...]
// - destination.interests: ["culture", "food", ...]
// - destination.vibe: ["social", "romantic", "energetic", ...]

// Example destination structure:
/*
{
  id: "paris",
  name: "Paris",
  country: "France",
  coordinates: [2.3522, 48.8566],
  marker_emoji: "🗼",
  image_url: "https://...",
  description: "...",
  budget: "moderate",
  estimated_cost: "£80–150",
  duration_category: "weekend",  // KEY FIELD for filtering
  duration_label: "2–3 days",
  travel_time: "2.5 hours",
  best_season: ["spring", "fall"],
  interests: ["art", "culture", "food", "romance"],
  vibe: ["romantic", "cultural"],
  ...
}
*/
