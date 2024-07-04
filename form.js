document.getElementById("formId").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  // Captura los datos del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  console.log(nombre, email, telefono);

  // Almacena los datos en el almacenamiento local del navegador
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("email", email);
  localStorage.setItem("telefono", telefono);

  // Redirige a la página de resultado
  window.location.href = "resultado.html";
});
