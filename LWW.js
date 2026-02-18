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
