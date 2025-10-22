const bubble = document.querySelector('.focus-bubble');
function updateColor() {
  const now = Date.now() / 1000;
  const hue = (now * 10) % 360;
  bubble.style.background = `radial-gradient(circle, hsl(${hue}, 70%, 80%), hsl(${(hue+60)%360}, 90%, 85%))`;
  requestAnimationFrame(updateColor);
}
updateColor();

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
function fadeInOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      fade.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();

// Audio toggle
const audio = document.getElementById('ambientAudio');
function toggleAudio() {
  audio.muted = !audio.muted;
}
