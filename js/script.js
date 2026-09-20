const menuButton = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');
const menuIcon = menuButton.querySelector('i');

menuButton.addEventListener('click', () => {
  const open = navbar.classList.toggle('active');
  menuButton.setAttribute('aria-expanded', String(open));
  menuIcon.className = open ? 'fas fa-times' : 'fas fa-bars';
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    menuIcon.className = 'fas fa-bars';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('#appointment-form');
const status = document.querySelector('#form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Demo request captured. Connect this form to your clinic workflow before launch.';
  form.reset();
});