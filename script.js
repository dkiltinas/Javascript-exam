function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function scrollToSection(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute("href");

  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
