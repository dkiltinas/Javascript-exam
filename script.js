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

//============================Tab section ================================//

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = [
    {
      title: "Register",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iusto? Officia obcaecati, animi officiis blanditiis accusantium voluptates impedit delectus, corrupti quasi reprehenderit enim vitae ex nemo rem laboriosam ipsa amet.",
    },
    {
      title: "Apply",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cupiditate quibusdam beatae molestias et assumenda repellat ut natus rerum repellendus quaerat aspernatur, nihil corporis totam a corrupti itaque enim! Alias!",
    },
    {
      title: "Receive",

      text: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minima porro possimus explicabo, repellendus earum atque magni rem soluta veniam deleniti qui ipsam culpa sapiente ipsum? Veritatis perspiciatis at laborum.lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt tempora hic ipsum, accusamus doloribus odit? Maxime illo iusto ab, accusamus nam, voluptatum commodi alias ratione a voluptas fuga cumque sed.",
    },
  ];

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      const titleElement = document.querySelector(".text h4");
      const textElement = document.querySelector(".text p");
      const content = contents[index];

      titleElement.textContent = content.title;
      textElement.textContent = content.text;

      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      tab.classList.add("active");
    });
  });
});
