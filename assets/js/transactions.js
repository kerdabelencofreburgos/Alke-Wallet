document.addEventListener("DOMContentLoaded", function() {

    const tablaCuerpo = document.getElementById("transactionsBody");
    
    const historial = JSON.parse(localStorage.getItem("historial")) || [];

    if (historial.length === 0) {
        tablaCuerpo.innerHTML = "<tr><td colspan='3'>No hay movimientos registrados.</td></tr>";
        return;
    }

    historial.forEach(movimiento => {
        const fila = `<tr>
            <td>${movimiento.fecha}</td>
            <td>${movimiento.tipo}</td>
            <td>$${movimiento.monto}</td>
        </tr>`;
        tablaCuerpo.innerHTML += fila;
    });
});