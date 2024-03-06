document.addEventListener("DOMContentLoaded", function (form) {

  // Obtenemos las referencias a las pestañas y a los campos del formulario
  let conta = document.getElementById("titulo_tab_conta");
  let envio = document.getElementById("titulo_tab_envio");
  let pagamento = document.getElementById("titulo_tab_pagamento");


  let nome = document.getElementById("nome_no_cartao");
  let endereco = document.getElementById("inputUserEndereco");
  let cartao = document.getElementById("ccn");
  let cvc = document.getElementById("inputCVC");
  let btnEntrar = document.getElementById("btnEntrar");

// Agrega un evento al formulario para manejar el envío
const forms = document.querySelector('.needs-validation');
forms.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Realiza la validación de la contraseña y el correo electrónico aquí
  // ...
    const email = document.getElementById("inputEmail");
    const password = document.getElementById("inputPassword");
  
    const emailValido = email.checkValidity();
    const passwordValido = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password.value);
  console.log(emailValido)
  console.log(passwordValido)

    if (emailValido == true) {
      email.classList.add('is-valid');
      email.classList.remove('is-invalid');
    } else {
      email.classList.remove('is-valid');
      email.classList.add('is-invalid');
    }
  
    if (passwordValido == true) {
      password.classList.add('is-valid');
      password.classList.remove('is-invalid')
    } else {
      password.classList.remove('is-valid');
      password.classList.add('is-invalid');
    }

  // Si todo está válido, cambia a la siguiente pestaña
  if (emailValido == true && passwordValido == true) {
    const tabActual = document.getElementById('conta');
    const siguienteTab = document.getElementById('envio')
      
      tabActual.classList.remove('show','active');
      siguienteTab.classList.add('show','active');
  }
});


 




});
