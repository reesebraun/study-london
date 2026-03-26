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

// Navigation links now point directly to their respective pages
// No additional script needed for navigation
