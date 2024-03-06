// Obtener el botón y el body

document.addEventListener("DOMContentLoaded", function () {
  let boton = document.getElementById("btn_dark_mode");
  let body = document.querySelector("body");
  let navbarDark = document.getElementById("navbar");
  let icones = document.getElementById("icone-shopping-nav" )

  // Agregar un evento de clic al botón
  boton.onclick = function () {
    // Alternar la clase dark-mode al body
    boton.classList.toggle("dark-mode-active");
    body.classList.toggle("dark-mode-active");
    navbarDark.classList.toggle("dark-mode-active");
    navbarDark.classList.toggle("navbar-dark");
  };
});
