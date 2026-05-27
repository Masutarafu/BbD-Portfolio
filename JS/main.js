
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












// async function handleSubmit(e) {
//   e.preventDefault();
  
//   const form = e.target;
//   const btn = form.querySelector('button[type="submit"]');
//   const originalText = 'Send Message →';
  
//   // 1. Instantly show visual feedback that the network request has started
//   btn.textContent = 'Sending...';
//   btn.disabled = true;

//   // 2. Capture the actual user input from the fields
//   const formData = new FormData(form);

//   try {
//     // 3. Fire the live data package to the form backend
//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });
    
//     const result = await response.json();
    
//     // 4. Check if the backend successfully processed and emailed it
//     if (result.success) {
//       // Success Animation (Keeps your client's original design logic)
//       btn.textContent = 'Message Sent ✓';
//       btn.style.background = '#2d9e5f';
//       form.reset();
      
//       // Reset button back to normal after 3 seconds
//       setTimeout(() => {
//         btn.textContent = originalText;
//         btn.style.background = '';
//         btn.disabled = false;
//       }, 3000);
      
//     } else {
//       // API Error Handling (e.g., if the Access Key expired or was copied wrong)
//       alert("Submission Error: " + result.message);
//       btn.textContent = originalText;
//       btn.disabled = false;
//     }
    
//   } catch (error) {
//     // 5. Network Error Handling (e.g., user loses internet connection mid-click)
//     console.error("Form transmission failed:", error);
//     alert("Network error. Please check your connection and try again.");
//     btn.textContent = originalText;
//     btn.disabled = false;
//   }
// }







































































// // This function captures the form submission
// async function handleSubmit(event) {
//   // 1. Stop the browser from refreshing the page
//   event.preventDefault(); 
  
//   const form = event.target;
  
//   // 2. Gather all the data typed into the inputs
//   const formData = new FormData(form);
  
//   try {
//     // 3. Send the data to a form service (e.g., Web3Forms or Formspree)
//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });
    
//     const result = await json = await response.json();
    
//     if (response.status === 200) {
//       alert("Message sent successfully! Dare will get back to you.");
//       form.reset(); // Clear the form fields
//     } else {
//       alert("Something went wrong. Please try again.");
//     }
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     alert("Network error. Please check your connection.");
//   }
// }