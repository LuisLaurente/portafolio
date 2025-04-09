// Esperar a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  // Función para el scroll suave al hacer clic en los enlaces del navbar
  document.querySelectorAll('.navbar a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Función para cambiar entre categorías de proyectos
  document.querySelectorAll('.category-btn').forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Remover clase active de todos los botones
          document.querySelectorAll('.category-btn').forEach(btn => {
              btn.classList.remove('active');
          });
          
          // Añadir clase active al botón clickeado
          this.classList.add('active');
          
          // Ocultar todos los contenedores de proyectos
          document.querySelectorAll('.project-container').forEach(container => {
              container.classList.remove('active');
          });
          
          // Mostrar el contenedor correspondiente
          const category = this.getAttribute('data-category');
          document.getElementById(category).classList.add('active');
      });
  });

  // Animación de aparición al hacer scroll
  function checkVisibility() {
      const elements = document.querySelectorAll('.container, .project-card');
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
          const position = element.getBoundingClientRect();
          
          // Si el elemento está en la ventana visible
          if (position.top < windowHeight * 0.85 && position.bottom >= 0) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  }

  // Verificar visibilidad en la carga inicial
  checkVisibility();
  
  // Verificar visibilidad al hacer scroll
  window.addEventListener('scroll', checkVisibility);

  // Añadir efecto de hover a los cards de proyectos
  document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px)';
          this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
      });
  });

  // Añadir efecto de resaltado al navbar según la sección visible
  function highlightNavbar() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.navbar a');
      
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (window.pageYOffset >= sectionTop - 200) {
              current = section.getAttribute('id');
          }
      });
      
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
          }
      });
  }
  
  // Verificar posición de scroll para resaltar el navbar
  window.addEventListener('scroll', highlightNavbar);
  
  // Añadir clase 'active' al navbar cuando se hace scroll
  window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
  
  // Inicializar las opacidades para la animación de aparición
  document.querySelectorAll('.container, .project-card').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Efecto de parallax en secciones
  window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      
      document.querySelectorAll('section').forEach(section => {
          const offset = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= offset - window.innerHeight && scrollPosition < offset + height) {
              const speed = section.getAttribute('data-speed') || 0.1;
              const yPos = -(scrollPosition - offset) * speed;
              
              section.style.backgroundPositionY = yPos + 'px';
          }
      });
  });
  
  // Efecto de animación para tecnologías
  document.querySelectorAll('.technology').forEach((tech, index) => {
      tech.style.animationDelay = (index * 0.1) + 's';
      tech.classList.add('animate-in');
  });
  
  // Función para añadir la clase active al elemento del navbar que corresponde a la sección actual
  highlightNavbar();
});