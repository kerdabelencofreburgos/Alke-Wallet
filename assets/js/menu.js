$(document).ready(function() {
    

    let saldo = localStorage.getItem("saldo") || 50000;
    $("#saldoDisplay").text("$ " + parseFloat(saldo).toLocaleString('es-CL'));

    
    $("body").hide().fadeIn(1000);

   
    $(".nav-link").hover(
        function() {
            $(this).animate({ opacity: 0.7, paddingLeft: "20px" }, 200);
        },
        function() {
            $(this).animate({ opacity: 1, paddingLeft: "12px" }, 200);
        }
    );
});