"use strict";

// The site remains fully usable when JavaScript is disabled.
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Clicking the portrait swaps between Deiomo and Paige. Every visit starts as Deiomo.
const personas = {
  deiomo: { title: "Deiomo", name: "deiomo", greeting: "hey", mark: "d.", art: "assets/deiomo.webp" },
  paige: { title: "Paige", name: "paige", greeting: "sup", mark: "p.", art: "assets/oc.png" }
};

const swap = document.querySelector(".persona-swap");
if (swap) {
  const arts = document.querySelectorAll(".portrait-image > img[data-persona]");
  const artLink = document.querySelector(".art-link");
  const wordmark = document.querySelector(".wordmark");
  const status = document.getElementById("persona-status");
  const fields = {
    greeting: document.querySelector(".hero-greeting"),
    name: document.querySelector(".hero-name"),
    wordmarkName: document.querySelector(".wordmark-name"),
    mark: document.querySelector(".brand-mark"),
    label: document.querySelector(".portrait-top")
  };
  let current = "deiomo";

  const loadArt = img => {
    if (!img.getAttribute("src") && img.dataset.src) img.src = img.dataset.src;
  };

  const setText = (el, text) => {
    if (!el || el.textContent === text) return;
    el.textContent = text;
    el.classList.remove("swap-fade");
    void el.offsetWidth; // restart the fade animation
    el.classList.add("swap-fade");
  };

  // Fetch the other picture in the background so the first swap is instant.
  if (document.readyState === "complete") arts.forEach(loadArt);
  else window.addEventListener("load", () => arts.forEach(loadArt));

  swap.hidden = false;
  swap.addEventListener("click", () => {
    const next = current === "deiomo" ? "paige" : "deiomo";
    const p = personas[next];

    arts.forEach(img => {
      const active = img.dataset.persona === next;
      if (active) loadArt(img);
      img.classList.toggle("is-active", active);
      img.setAttribute("aria-hidden", String(!active));
    });

    setText(fields.greeting, p.greeting);
    setText(fields.name, p.name);
    setText(fields.wordmarkName, p.name);
    setText(fields.mark, p.mark);
    setText(fields.label, p.title.toUpperCase());

    if (artLink) {
      artLink.href = p.art;
      artLink.setAttribute("aria-label", `Open the full ${p.title} artwork in a new tab`);
    }
    if (wordmark) wordmark.setAttribute("aria-label", `${p.name} home`);
    swap.setAttribute("aria-label", `Switch to ${personas[current].title}`);
    if (status) status.textContent = `Now showing ${p.title}`;

    current = next;
  });
}
