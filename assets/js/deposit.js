document.addEventListener("DOMContentLoaded", function() {
    const btnDepositar = document.getElementById("btnDepositar");
    const inputMonto = document.getElementById("montoDeposito");

    btnDepositar.addEventListener("click", function() {
        const monto = parseFloat(inputMonto.value);

        if (isNaN(monto) || monto <= 0) {
            alert("Por favor, ingresa un monto válido.");
            return;
        }

        let saldoActual = parseFloat(localStorage.getItem("saldo")) || 0;
        let nuevoSaldo = saldoActual + monto;
        
        localStorage.setItem("saldo", nuevoSaldo);
const nuevoMovimiento = {
            tipo: "Depósito",
            monto: monto,
            fecha: new Date().toLocaleDateString()
        };

       
        let historial = JSON.parse(localStorage.getItem("historial")) || [];
        
        
        historial.push(nuevoMovimiento);
        
       
        localStorage.setItem("historial", JSON.stringify(historial));
        alert("Depósito realizado. Nuevo saldo: $" + nuevoSaldo);
        inputMonto.value = ""; 
    });
});

const saldoActual = localStorage.getItem("saldo") || 0;
console.log("Tu saldo es: $" + saldoActual);