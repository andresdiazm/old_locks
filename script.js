const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  siteNav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});
