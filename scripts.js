// Formulario Login aparecer e desaparecer

const loginForm = document.querySelector(".MeowForm");
const OutFormButton = document.querySelector(".FormOut");
const loginButton = document.getElementById("LoginButton");

loginButton.addEventListener("click", () => {
  loginForm.style.left = "35%";
});

OutFormButton.addEventListener("click", () => {
  loginForm.style.left = "-40%";
});


// Formulario Pedido aparecer e desaparecer

const deliveryButton = document.getElementById("DeliveryButton")
const deliveryForm = document.querySelector(".DeliveryForm")


deliveryButton.addEventListener("click", () => {
  deliveryForm.style.right = "40%";
})

OutFormButton.addEventListener("click", () => {
  deliveryForm.style.right = "-40%";
});


// Formulario Delivery levar até o Formulario de Login

const goLoginFormButton = document.getElementById("OpenLoginForm");

goLoginFormButton.addEventListener("click", () => {
  registerForm.style.left = "35%"
  deliveryForm.style.right = "-40%"
})

// Formulario Login levar até o Formulario Cadastro

const loginButtonToRegister = document.querySelector(".OpenRegisterForm")
const registerForm = document.querySelector(".RegisterForm")

loginButtonToRegister.addEventListener("click", () => {
  loginForm.style.left = "-40%"
  registerForm.style.left = "35%"
})

// Formulario Cadastro levar até o  Formulario Login

const registerButtonToLogin = document.querySelector(".OpenLoginForm")

registerButtonToLogin.addEventListener("click", () => {
  loginForm.style.left = "35%"
  registerForm.style.left = "-40%"
})

// Links dinamicos

const links = document.querySelectorAll('.group-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});