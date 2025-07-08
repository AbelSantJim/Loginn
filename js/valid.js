document.getElementById("loginForm").addEventListener("submit", function (e) {
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (correo === "abel@gmail.com" && contrasena === "12345678") {
    mensaje.style.color = "green";
    mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";

    setTimeout(() => {
      window.open("https://abelsantjim.github.io/PortafolioAbel/", "_blank");
    }, 1000);
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = "Correo o contraseña incorrectos.";
  }
});
document.getElementById("olvidoContrasena").addEventListener("click", function(){
  alert("Se ha mandado un codigo de verificacion a su correo de respaldo");
});

document.getElementById("registrate").addEventListener("click", function(){
  alert("En un momento se abrira una nueva pestaña");
});

