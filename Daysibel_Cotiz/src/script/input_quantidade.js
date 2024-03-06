//  codigo para sumar ou restar um item clicando nos botoes + -
// Obter os elementos HTML pelo id
let input = document.getElementById("quantidade");
let mais = document.getElementById("mais");
let menos = document.getElementById("menos");

// Agregar um evento de clic ao btn de +
mais.addEventListener("click", function () {
  // Obter o valor atual do input y convertir em número
  let value = Number(input.value);
  // Incrementar o valor em um, se nao supera o valor máximo
  if (value < input.max) {
    value +1;
  }
  // Asignar o novo valor ao input
  input.value = value;
});

// Agregar um evento de clic ao btn de -
menos.addEventListener("click", function () {
  // Obtener o valor atual do input e convertirlo em número
  let value = Number(input.value);
  // Decrementar o valor em um , se nao é menor que o valor mínimo
  if (value > input.min) {
    value -1;
  }
  // Asignar o novo valor ao input
  input.value = value;
});
