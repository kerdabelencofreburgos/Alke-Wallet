$(document).ready(function() {
    
    
    const contactos = ["Juan Pérez", "Ana García", "Carlos López", "María Rodríguez", "Pedro Sánchez"];

    $("#destinatario").on("input", function() {
        const busqueda = $(this).val().toLowerCase();
        $("#listaSugerencias").empty();

        if (busqueda.length > 0) {
            const filtrados = contactos.filter(c => c.toLowerCase().includes(busqueda));
            filtrados.forEach(c => {
                $("#listaSugerencias").append(`<li class="list-group-item list-group-item-action">${c}</li>`);
            });
        }
    });

    $("#listaSugerencias").on("click", "li", function() {
        $("#destinatario").val($(this).text());
        $("#listaSugerencias").empty();
    });

    $("#btnConfirmarTransferencia").on("click", function() {
        const monto = parseFloat($("#monto").val());
        let saldoActual = parseFloat(localStorage.getItem("saldo")) || 0;

       
        if (isNaN(monto) || monto <= 0) {
            alert("Por favor, ingresa un monto válido.");
            return;
        }

        if (monto > saldoActual) {
            alert("Fondos insuficientes. Tu saldo actual es: $" + saldoActual);
            return;
        }

       
        let nuevoSaldo = saldoActual - monto;
        let historial = JSON.parse(localStorage.getItem("historial")) || [];
        
        historial.push({
            tipo: "Transferencia",
            monto: monto,
            fecha: new Date().toLocaleDateString()
        });

        localStorage.setItem("historial", JSON.stringify(historial));
        localStorage.setItem("saldo", nuevoSaldo);

        $("#modalConfirmacion").modal('hide');
        
        setTimeout(() => {
            alert("Transferencia exitosa. Saldo restante: $" + nuevoSaldo);
            $("#monto").val("");
            $("#destinatario").val("");
        }, 150);
    });
});