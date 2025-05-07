// Track the current mouse position
let mouse = { x: 0, y: 0 };

// Array of colors to randomly pick from (note: one hex is likely invalid: "#fff00" should be "#ffff00")
const colors = ["#ffffff", "#00ffff", "#ff00ff", "#fff00", "#00ff00"];

// Create a new trail on every mouse movement
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  createTrail();
});

function createTrail() {
  const trail = document.createElement("div");
  trail.classList.add("trail");

  // Random color + glow for each trail
  const color = colors[Math.floor(Math.random() * colors.length)];
  trail.style.background = `radial-gradient(circle, ${color}, transparent 60%)`;
  trail.style.filter = `drop-shadow(0 0 8px ${color})`;

  document.body.appendChild(trail);

  // Apply random rotation to add variation
  const rotation = Math.random() * 360;

  // Set starting position (slightly offset from cursor center)
  gsap.set(trail, {
    x: mouse.x - 10,
    y: mouse.y - 10,
    rotate: rotation,
    scale: 2,
    opacity: 1,
  });

  // Animate with slight drifting, rotation, scaling, and fading
  gsap.to(trail, {
    duration: 3,
    x: mouse.x + (Math.random() - 0.5) * 100, // subtle movement offset
    y: mouse.y + (Math.random() - 0.5) * 100,
    opacity: 0,
    scale: 0.7,
    rotate: rotation + 90,
    ease: "power2.out",
    onComplete: () => {
      trail.remove(); // Clean up after animation
    },
  });
}
