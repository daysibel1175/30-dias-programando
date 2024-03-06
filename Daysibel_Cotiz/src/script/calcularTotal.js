// meu codigo para fazer a suma o resta quando clickar nos botoes +- e atualizar o total da compra

document.addEventListener("DOMContentLoaded", function () {
  const maisBtn = document.getElementById("mais");
  const menosBtn = document.getElementById("menos");
  const quantidade = document.getElementById("quantidade");
  const preco = 15.22; //  ajustar esto según necessario
  const taxa = 3.45; // ajustar esto según necessario
  const totalElemento = document.getElementById("total");

  function atualizarTotal() {
    let total = parseInt(quantidade.value) * preco + taxa;
    totalElemento.textContent = "R$" + total.toFixed(2);
  }

  maisBtn.addEventListener("click", function () {
    if (parseInt(quantidade.value) < 5) {
      quantidade.value = parseInt(quantidade.value) + 1;
      atualizarTotal();
    } 
  });

  menosBtn.addEventListener("click", function () {
    if (parseInt(quantidade.value) > 1) {
      quantidade.value = parseInt(quantidade.value) - 1;
      atualizarTotal();
    }
  });
});
