function createNavbar() {
    let navbar = document.getElementById("navbar");
    let navigation = `<nav class="navbar navbar-expand-lg navbar-light custom-navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Inicio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./HabilidadesYExperiencias.html">Habilidades y Experiencia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./Proyectos.html">Proyectos</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="Contacto.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contacto</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Correo</a></li>
              <li><a class="dropdown-item" href="#">GitHub</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">LinkedIn</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>   `;
    navbar.insertAdjacentHTML("afterbegin", navigation);
}

createNavbar();

document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
        console.log(link.href + " " + window.location.href)
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});