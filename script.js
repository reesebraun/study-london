// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Close the mobile menu after clicking a link
      const menu = document.querySelector('.nav-links');
      menu.classList.remove('active');
    });
  });
});

// Smooth scroll to features section when "Get Started" is clicked
function scrollToSection() {
  const featuresSection = document.getElementById('features');
  featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Navigation link functionality (smooth scroll)
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const text = this.textContent.trim();
      
      // Map navbar labels to sections
      let targetId = null;
      if (text === 'Map') {
        targetId = 'features'; // Placeholder - will link to map module later
      } else if (text === 'Budget') {
        targetId = 'features'; // Placeholder - will link to budget module later
      } else if (text === 'Travel') {
        targetId = 'features'; // Placeholder - will link to travel module later
      } else if (text === 'Guide') {
        targetId = 'features'; // Placeholder - will link to guide module later
      }
      
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
