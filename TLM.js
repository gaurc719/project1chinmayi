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
const textBlock = document.getElementById("textBlock");

// Split text into words
const words = textBlock.innerText.split(" ");
textBlock.innerHTML = "";

words.forEach(word => {
  const span = document.createElement("span");
  span.classList.add("word");
  span.innerText = word + " ";
  textBlock.appendChild(span);
});

const wordElements = document.querySelectorAll(".word");

wordElements.forEach((word, index) => {
  word.addEventListener("mouseenter", () => {

    wordElements.forEach(w => w.classList.remove("active"));

    for (let i = index - 3; i <= index + 3; i++) {
      if (wordElements[i]) {
        wordElements[i].classList.add("active");
      }
    }
  });
});

textBlock.addEventListener("mouseleave", () => {
  wordElements.forEach(w => w.classList.remove("active"));
});
