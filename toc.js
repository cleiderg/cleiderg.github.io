// Highlights the side-nav link for the section you're reading.
const links = [...document.querySelectorAll(".toc a")];
const targets = links.map((a) => document.querySelector(a.hash));

function update() {
  let current = 0;
  targets.forEach((target, i) => {
    if (target && target.getBoundingClientRect().top < innerHeight / 3) current = i;
  });
  // At the very bottom, the last section may be too short to reach the line.
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) current = links.length - 1;
  links.forEach((a, i) => {
    if (i === current) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
}

addEventListener("scroll", update, { passive: true });
update();
