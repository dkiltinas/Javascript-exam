//==============================Scroll==============================//
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

//========================Review gallery============================//
document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.querySelectorAll(".reviews");
  const indicators = document.querySelectorAll(".indicator");

  function showReviews(index) {
    reviews.forEach(function (review) {
      review.style.display = "none";
    });

    for (let i = index * 3; i < (index + 1) * 3; i++) {
      if (reviews[i]) {
        reviews[i].style.display = "flex";
      }
    }
  }

  showReviews(0);

  indicators.forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      indicators.forEach(function (indicator) {
        indicator.classList.remove("active");
      });
      this.classList.add("active");

      showReviews(index);
    });
  });

  indicators[0].classList.add("active");
});
