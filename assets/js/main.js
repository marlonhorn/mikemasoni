const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

const carousels = document.querySelectorAll("[data-carousel]");

const hero = document.querySelector(".hero");

if (hero) {
  let rafId = null;

  const resetHeroTilt = () => {
    hero.style.setProperty("--hero-rotate-x", "0deg");
    hero.style.setProperty("--hero-rotate-y", "0deg");
    hero.style.setProperty("--hero-shift-x", "0px");
    hero.style.setProperty("--hero-shift-y", "0px");
  };

  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;

    const rect = hero.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;
    const maxRotate = 3;
    const maxShift = 8;

    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
      hero.style.setProperty("--hero-rotate-x", `${(-normalizedY * maxRotate).toFixed(2)}deg`);
      hero.style.setProperty("--hero-rotate-y", `${(normalizedX * maxRotate).toFixed(2)}deg`);
      hero.style.setProperty("--hero-shift-x", `${(normalizedX * maxShift).toFixed(2)}px`);
      hero.style.setProperty("--hero-shift-y", `${(normalizedY * maxShift).toFixed(2)}px`);
    });
  });

  hero.addEventListener("pointerleave", () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    resetHeroTilt();
  });

  resetHeroTilt();
}

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

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