let startTime = Date.now();
const elapsedTimeElement = document.getElementById('elapsedTime');


const bubble = document.querySelector('.focus-bubble');
let x = window.innerWidth / 2 - 125;
let y = window.innerHeight / 2 - 125;
let dx = 0.6;
let dy = 0.4;

function updateBubble() {
    // Handle movement
    x += dx;
    y += dy;
    if (x <= 0 || x >= window.innerWidth - 250) dx *= -1;
    if (y <= 0 || y >= window.innerHeight - 250) dy *= -1;
    
    // Update position and color
    const hue = (Date.now() / 1500) % 360; // 90s color cycle
    bubble.style.transform = `translate(${x}px, ${y}px)`;
    bubble.style.background = `radial-gradient(circle, hsl(${hue}, 70%, 80%), hsl(${(hue+60)%360}, 90%, 85%))`;
    
    requestAnimationFrame(updateBubble);
}
updateBubble();

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
const audio = document.getElementById("ambientAudio");
audio.volume = 0.2;
function toggleAudio() {
  audio.muted = !audio.muted;
}


function updateElapsedTime() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    elapsedTimeElement.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    requestAnimationFrame(updateElapsedTime);
}
updateElapsedTime();
