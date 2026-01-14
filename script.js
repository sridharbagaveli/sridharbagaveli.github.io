// Smooth scrolling for nav links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Project hover effect
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'scale(1.02)';
    project.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
  });
  project.addEventListener('mouseleave', () => {
    project.style.transform = 'scale(1)';
    project.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
  });
});

// Dynamic current year in footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
