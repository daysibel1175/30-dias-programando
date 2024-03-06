// Seleccionar o btn e o menú
let boton = document.querySelector(".btn-d");
let menu = document.querySelector("#menu-usuario");
let menud = document.querySelector("#navbarNavDropdown");

// Add um listener ao evento click do documento
document.addEventListener("click", function(event) {
  // Obter o elemento clickeado
  let target = event.target;

  // Conferir se o elemento é o btn ou o menú
  if (target !== boton || target !== menu || target !== menud) {
    // Remover a clase show do menú
    menu.classList.remove("show");
    menud.classList.remove("show")
  } 
});