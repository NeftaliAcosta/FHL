$(document).ready(function () {
    alert("Hola");
    $("#btnEnviarCorreo").on("click", function () {        
        //--------enviar correo---------------//
       
         var Nombre = $('#txtNombre').val();
         var Email = $('#txtEmail').val();
         var Asunto = $('#txtSubject').val();
         var Mensaje = $('#txtMensaje').val();
         var obj;
        $.ajax({
            dataType: "json",
            contentType: "application/json",
            async: false,            
            url: '/Servicio.aspx/EnviarCorreo',
            data: JSON.stringify({ "Nombre": Nombre, "Email": Email, "Asunto": Asunto, "Mensaje": Mensaje }),
            type: "POST",
            success: function (msg) {
                obj = msg.d;
            },
            error: function (jqXHR, exception) {
            }

        });
        return obj;
    });
});
