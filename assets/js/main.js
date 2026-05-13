const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach((carousel) => {
  const duration = Number(carousel.getAttribute("data-carousel")) || 3000;
  const slidesWrap = carousel.querySelector(".slides");
  const slides = carousel.querySelectorAll(".slide");

  if (!slidesWrap || slides.length < 2) {
    return;
  }

  let index = 0;

  const goToSlide = (nextIndex) => {
    index = nextIndex;
    slidesWrap.style.transform = `translate3d(-${index * 100}%, 0, 0)`;
  };

  let timer = setInterval(() => {
    const next = (index + 1) % slides.length;
    goToSlide(next);
  }, duration);

  carousel.addEventListener("mouseenter", () => {
    clearInterval(timer);
  });

  carousel.addEventListener("mouseleave", () => {
    timer = setInterval(() => {
      const next = (index + 1) % slides.length;
      goToSlide(next);
    }, duration);
  });
});