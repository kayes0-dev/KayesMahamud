// ---- Typing effect for role ----
const roles = ["Web Developer", "Frontend Developer", "UI Designer"];
const typedEl = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIndex];

  if(!deleting){
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 90);
}
typeLoop();

// ---- Mobile nav toggle ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- Animated stat counters ----
const stats = document.querySelectorAll('.stat-num');
let counted = false;

function animateStats(){
  stats.forEach(stat => {
    const target = parseInt(stat.dataset.target, 10);
    let count = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const interval = setInterval(() => {
      count += step;
      if(count >= target){
        count = target;
        clearInterval(interval);
      }
      stat.textContent = count;
    }, 30);
  });
}

const statsSection = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting && !counted){
      counted = true;
      animateStats();
    }
  });
}, { threshold: 0.4 });
observer.observe(statsSection);

// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();