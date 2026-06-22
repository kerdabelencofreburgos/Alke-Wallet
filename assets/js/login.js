document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    formulario.addEventListener("submit", function(event) {
        // Evitamos que el formulario se envíe realmente (para poder validar)
        event.preventDefault();

        // Datos de ejemplo (puedes cambiarlos por los tuyos)
        const emailValido = "usuario@alke.cl";
        const passwordValido = "123456";

        if (emailInput.value === emailValido && passwordInput.value === passwordValido) {
            alert("¡Bienvenido a Alke Wallet!");
            // Redirigimos al menú
            window.location.href = "menu.html";
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });
});