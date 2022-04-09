const intro = document.querySelector(".intro-container");
const logo = document.querySelector(".logo-header");
const logo_span = document.querySelectorAll(".logo");
const quote = document.querySelector(".quote");
const nav = document.getElementById("navbar");
const services = document.getElementById("services");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logo_span.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 500);
    });

    setTimeout(() => {
      quote.classList.add("active");
    }, 1500);

    setTimeout(() => {
      logo_span.forEach((span, index) => {
        setTimeout(() => {
          setTimeout(() => {
            span.classList.remove("active");
            span.classList.add("fade");
          }, (index + 0.1) * 100);
        }, 800);
      });

      setTimeout(() => {
        quote.classList.remove("active");
        quote.classList.add("fade");
      }, 1000);
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 3500);
  });
});

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNavOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const stickyNav = (entries) => {
  const entry = entries[0];
  //   console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("block");
  } else {
    nav.classList.remove("block");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, stickyNavOptions);
headerObserver.observe(header);


// reveal elements on scroll (you can comment the below code if you don't want this feature)
const allSections = document.querySelectorAll(".section");

const revealSections = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  }

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionOptions = {
  root: null,
  threshold: 0.15,
  rootMargin: "200px",
};

const sectionsObserver = new IntersectionObserver(
  revealSections,
  sectionOptions
);

allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionsObserver.observe(section);
});

