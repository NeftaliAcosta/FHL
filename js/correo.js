$(document).ready(function () {
    $("#btnEnviarCorreo").on("click", function () {        
        //--------enviar correo---------------//
        var objCorreo = {};
        objCorreo.Nombre = $('#txtNombre').val();
        objCorreo.Email = $('#txtEmail').val();
        objCorreo.Asunto = $('#txtSubject').val();
        objCorreo.Mensaje = $('#txtMensaje').val();

        $.ajax({
            dataType: "json",
            contentType: "application/json",
            async: false,            
            url: 'http://pruebas.efhcorporativo.com/Cotizaciones/Mostrar.aspx/enviarEmailFHL',
            data: JSON.stringify({ 'datos': objCorreo }),
            type: "POST",
            success: function (msg) {
                alert(msg.d);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus + ": " + XMLHttpRequest.responseText);
            }
        });
    
    });
});
