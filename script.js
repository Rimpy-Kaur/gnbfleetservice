// script.js

// Select the toggle button and nav menu
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Optional: Close menu when clicking outside or on a link
document.addEventListener('click', (e) => {
  if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
    navList.classList.remove('active');
  }
});

// Optional: Smooth scroll for internal links
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('active'); // Close mobile menu on click
    }
  });
});
