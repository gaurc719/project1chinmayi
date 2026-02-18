const titles = document.querySelectorAll(".title");

titles.forEach(title => {
  let hoverTimer = null;

  title.addEventListener("mouseenter", () => {
    const url = title.getAttribute("href");
    if (!url) return;

    hoverTimer = setTimeout(() => {
      window.location.href = url;
    }, 800); // change delay here if needed
  });

  title.addEventListener("mouseleave", () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".title");

  titles.forEach(title => {
    title.addEventListener("mouseenter", function () {
      if (this.href) {
        window.location.href = this.href;
      }
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
