const targets = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  },
  { threshold: 0.15 }
);

targets.forEach((t) => io.observe(t));

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  const opened = navMenu.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", opened ? "true" : "false");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

/* (선택) 메뉴 밖 클릭하면 닫히게 */
document.addEventListener("click", (e) => {
  const clickedInside = navMenu.contains(e.target) || menuBtn.contains(e.target);
  if (!clickedInside) {
    navMenu.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});
