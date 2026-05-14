
// ── Theme Toggle ────────────────────────
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
html.setAttribute('data-theme', next);
localStorage.setItem('theme', next);
});

// ── Hamburger ───────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Typed Hero Role ─────────────────────
const roles = [
'IT Infrastructure Engineer',
'Network Specialist',
'AI Media Creator',
'Systems Administrator',
];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById('typedRole');

function type() {
const word = roles[ri];
el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);

if (!deleting && ci > word.length) {
setTimeout(() => { deleting = true; type(); }, 1800);
return;
}
if (deleting && ci < 0) {
deleting = false;
ri = (ri + 1) % roles.length;
ci = 0;
setTimeout(type, 300);
return;
}
setTimeout(type, deleting ? 45 : 90);
}
type();

// ── Scroll Reveal ───────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
entries.forEach(e => {
if (e.isIntersecting) {
e.target.classList.add('visible');
observer.unobserve(e.target);
}
});
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// ── Contact Form ────────────────────────
function handleSubmit(e) {
e.preventDefault();
const btn = e.target.querySelector('button[type="submit"]');
btn.textContent = 'Sending...';
btn.disabled = true;

// PLACEHOLDER: Wire this to a real form backend (Formspree, EmailJS, etc.)
setTimeout(() => {
btn.textContent = 'Message Sent ✓';
btn.style.background = '#2d9e5f';
e.target.reset();
setTimeout(() => {
btn.textContent = 'Send Message →';
btn.style.background = '';
btn.disabled = false;
}, 3000);
}, 1200);
}
