// Scroll Reveal
const fragments = document.querySelectorAll(".fragment");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.3 });

fragments.forEach(fragment => observer.observe(fragment));


// Fire Hover Effect
const igniteWords = document.querySelectorAll(".ignite");
const fireOverlay = document.getElementById("fireOverlay");

igniteWords.forEach(word => {
  word.addEventListener("mouseenter", () => {
    fireOverlay.classList.add("active");
  });
  word.addEventListener("mouseleave", () => {
    fireOverlay.classList.remove("active");
  });
});


// Ending Destabilization
const ending = document.getElementById("ending");

const endingObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      ending.classList.add("distort");
    }
  });
}, { threshold: 0.8 });

endingObserver.observe(ending);


document.addEventListener("DOMContentLoaded", () => {
  const orb = document.querySelector(".orb-link");
  let orbTimer = null;

  // Disable hover navigation on touch devices
  if ("ontouchstart" in window) return;

  orb.addEventListener("mouseenter", () => {
    const url = orb.getAttribute("href");

    orbTimer = setTimeout(() => {
      window.location.assign(url);
    }, 400); // delay (ms)
  });

  orb.addEventListener("mouseleave", () => {
    clearTimeout(orbTimer);
  });
});
