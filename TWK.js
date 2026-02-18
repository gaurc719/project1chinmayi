document.addEventListener("DOMContentLoaded", () => {

  const hoverWords = document.querySelectorAll(".hover-word");

  hoverWords.forEach(word => {
    const targetId = word.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    word.addEventListener("mouseenter", () => {
      targetElement.classList.add("visible");
      // The element stays visible permanently — we do NOT remove the class on mouseleave
    });
  });

});
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
