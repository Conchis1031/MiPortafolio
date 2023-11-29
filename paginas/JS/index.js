document.addEventListener('DOMContentLoaded', function () {
    // Función para desplazarse a una sección específica
    function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
  
    // Agregar eventos de clic a los enlaces de navegación
    document.querySelectorAll('.smoothscroll').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        // Extraer el destino del atributo href
        var targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  });
  