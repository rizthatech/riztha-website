document.addEventListener("DOMContentLoaded", () => {

  // Smooth fade-in animation
  const elements = document.querySelectorAll("section, .card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.animate([
          { opacity: 0, transform: "translateY(30px)" },
          { opacity: 1, transform: "translateY(0)" }
        ], {
          duration: 700,
          easing: "ease-out",
          fill: "forwards"
        });

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
  });

  // Active navigation highlight
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Footer year
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = footer.innerHTML.replace("2026", new Date().getFullYear());
  }

  console.log("RIZTHA website loaded successfully.");

});
