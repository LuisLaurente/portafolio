document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  /* PROYECTOS */
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const proyectos = document.querySelectorAll(".proyecto");

    // Mostrar todos al inicio
    document.querySelector(".filter-btn[data-filter='todos']").classList.add("active");
    proyectos.forEach(p => p.style.display = "block");

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        // Remover clase 'active' de todos los botones
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const filtro = this.getAttribute("data-filter");

        proyectos.forEach(proyecto => {
          if (filtro === "todos" || proyecto.classList.contains(filtro)) {
            proyecto.style.display = "block";
          } else {
            proyecto.style.display = "none";
          }
        });
      });
    });
  });