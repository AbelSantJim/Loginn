document.getElementById("loginForm").addEventListener("submit", function (e) {
  const usuario = document.getElementById("usuario").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();
  
  const usuarioValido = /^[a-zA-Z0-9]{1,15}$/.test(usuario);
  if (!usuarioValido) {
    alert("El usuario debe ser alfanumérico y tener un máximo de 15 caracteres.");
    return;
  }

  // Validación de correo: formato de correo y máximo 25 caracteres
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) && correo.length <= 25;
  if (!correoValido) {
    alert("El correo debe tener formato válido y un máximo de 25 caracteres.");
    return;
  }

  // Validación de contraseña: máximo 15 caracteres
  if (contrasena.length > 15) {
    alert("La contraseña debe tener un máximo de 15 caracteres.");
    return;
  }
  
  alert("Se ha registrado exitosamente");
});