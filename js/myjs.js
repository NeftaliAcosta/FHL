﻿$(document).ready(function () {
   
    var URLdomain = window.location;
    dom = window.location.host;
    doma = 'http://' + dom + '/';
    if (URLdomain == doma) {
        /*Se detecta URL limpia y cargo el modal de paises*/
        var efh = 'http://efh.com.mx/';
        var mx = 'http://efh.mx/';
        var corp = 'http://efhcorporativo.com/';
        var efhx = 'http://www.efh.com.mx/';
        var mxx = 'http://www.efh.mx/';
        var corpx = 'http://www.efhcorporativo.com/';
        var fh = 'http://fhenlinea.com/';
        var fhx = 'http://www.fhenlinea.com/';
        var ht = 'http://localhost:52409/';
        $('#flags').modal({ visible: 'show', backdrop: 'static', keyboard: 'false' });
        if ((fh == URLdomain) || (fhx == URLdomain) || (ht == URLdomain) || (efh == URLdomain) || (mx == URLdomain) || (corp == URLdomain) || (efhx == URLdomain) || (mxx == URLdomain) || (corpx == URLdomain)) {
            var mx = true;
            $('.mflags a').mouseover(function () {
                country = $(this).attr("id");
                param = '?flags=0';
                if (country == 'http://efh.mx') {
                    $("a").prop("href", URLdomain + param);
                    
                }
                else {
                    $("a").prop("href", country + param);
                }
            })
        }
        else {
            /*Asignar URL a Bandera de modal*/
            $('.mflags a').mouseover(function () {
                param = '?flags=0';
                country = $(this).attr("id");
                $("a").prop("href", country + param);
            })
            mx = false;
        }

    }
    else {
        /*No invoco el modal de las banderas*/
        $('#flags').modal('hide');
    }


    /*Inicio Proceso de invacion de modal por parametros*/
    function $_GET(param) {
        url = document.URL;
        url = String(url.match(/\?+.+/));
        url = url.replace("?", "");
        url = url.split("&");
        x = 0;
        while (x < url.length) {
            p = url[x].split("=");
            if (p[0] == param) {
                return decodeURIComponent(p[1]);
            }
            x++;
        }
    }
    if (($_GET("producto") == 'psicosoft')) {
        $('#psicosoft').modal('show')
    }
    else if (($_GET("producto") == 'psicoweb')) {
        $('#psicoweb').modal('show')
    }
    else if (($_GET("producto") == 'lpc')) {
        $('#lpc').modal('show')
    }
    else if (($_GET("producto") == 'meol')) {
        $('#meol').modal('show')
    }
    else if (($_GET("producto") == 'lider')) {
        $('#lider').modal('show')
    }
    else if (($_GET("producto") == 'conociweb')) {
        $('#conociweb').modal('show')
    }
    else if (($_GET("producto") == 'ecoclima')) {
        $('#ecoclima').modal('show')
    }
    /*Fin Proceso de invacion de modal por parametros*/

    /*Carga de contenedor de puto de venta*/
    if ($('.ventas').is(':hidden')) {
        /*En la versión móvil cargan siempre los datos de méxico*/
        $('.detalles #rfc').html("<p><span>" + ventas.Mexico.RFC + "</span></p>");
        $('.detalles #Country').html("<p><span>País: </span> México</p>");
        $('.detalles #CountryManager').html("<p><span>Country Manager: </span>" + ventas.Mexico.Country + "</p>");
        $('.detalles #Direccion').html("<p><span>Dirección: </span>" + ventas.Mexico.Direccion + "</p>");
        $('.detalles #Ventas').html("<p><span>Ventas: </span>" + ventas.Mexico.tel + "</p>");
        $('.detalles #Movil').html("<p><span>Móvil: </span>" + ventas.Mexico.Movil + "</p>");
        $('.detalles #Correo').html("<p><span>E-mail: </span>" + ventas.Mexico.mail + "</p>");
        $('.detalles #Web').html("<p><span>Web: </span>" + ventas.Mexico.web + "</p>");
        /*Activa la bandera de México sobre las demás.*/
        $('#wMexico').css("opacity", "1");
        dselect = 'Mexico';
        /*Esconde info de contacto adicional para México en móvil*/
        $('div #mxdetalles').hide();
    }
    else {
        /*Asignación de variable por dominio para cargar punto de venta según dominio*/
        if (MX = true) {
            pais = "Mexico";
         
        }
        if ((URLdomain == 'http://www.efhargentina.com/') || (URLdomain == 'http://efhargentina.com/')) {
            pais = "Argentina";
        }

        if ((URLdomain == 'http://www.efhbolivia.com/') || (URLdomain == 'http://efhvolivia.com/')) {
            pais = "Bolivia";
        }
        if ((URLdomain == 'http://www.efhchile.com/') || (URLdomain == 'http://efhchile.com/')) {
            pais = "Chile";
        }
        if ((URLdomain == 'http://www.efhcolombia.com/') || (URLdomain == 'http://efhcolombia.com/')) {
            pais = "Colombia";
        }
        if ((URLdomain == 'http://www.efhcostarica.com/') || (URLdomain == 'http://efhcostarica.com/')) {
            pais = "CostaRica";
        }
        if ((URLdomain == 'http://www.efhecuador.com/') || (URLdomain == 'http://efhecuador.com/')) {
            pais = "Ecuador";
        }
        if ((URLdomain == 'http://www.efhelsalvador.com/') || (URLdomain == 'http://efhelsalvador.com/')) {
            pais = "Ecuador";
        }
        if ((URLdomain == 'http://www.efhguatemala.com/') || (URLdomain == 'http://efhguatemala.com/')) {
            pais = "Guatemala";
        }
        if ((URLdomain == 'http://www.efhhonduras.com/') || (URLdomain == 'http://efhhonduras.com/')) {
            pais = "Honduras";
        }
        if ((URLdomain == 'http://www.efhnicaragua.com/') || (URLdomain == 'http://efhnicaragua.com/')) {
            pais = "Nicaragua";
        }
        if ((URLdomain == 'http://www.efhnicaragua.com/') || (URLdomain == 'http://efhnicaragua.com/')) {
            pais = "Nicaragua";
        }
        if ((URLdomain == 'http://www.efhpanama.com/') || (URLdomain == 'http://efhpanama.com/')) {
            pais = "Panama";
        }
        if ((URLdomain == 'http://www.efhcaribe.com/') || (URLdomain == 'http://efhcaribe.com/')) {
            pais = "Rdominicana";
        }
        /*Carga los valores de punto de venta según el dominio*/
        $('.detalles #rfc').html("<p><span>" + ventas.Mexico.RFC + "</span></p>");
        $('.detalles #Country').html("<p><span>País: </span>" + pais + "</p>");
        $('.detalles #CountryManager').html("<p><span>Country Manager: </span>" + ventas[pais].Country + "</p>");
        $('.detalles #Direccion').html("<p><span>Dirección: </span>" + ventas[pais].Direccion + "</p>");
        $('.detalles #Ventas').html("<p><span>Ventas: </span>" + ventas[pais].tel + "</p>");
        $('.detalles #Movil').html("<p><span>Móvil: </span>" + ventas[pais].Movil + "</p>");
        $('.detalles #Correo').html("<p><span>E-mail: </span>" + ventas[pais].mail + "</p>");
        $('.detalles #Web').html("<p><span>Web: </span>" + ventas[pais].web + "</p>");
        mywraper = 'w' + pais;
        $('#' + "" + mywraper + " ").css("opacity", "1");
        dselect = mywraper;
        /*Validación de país para mostrar info de contacto para México.*/
        if (pais == 'Mexico') {
            $('div #mxdetalles').show();
        }
        else {
            $('div #mxdetalles').hide();
        }
    }
    
    /*Fin del div detalles de puntos de venta*/

    /*Carga el efecto carousel al iniciar el sitio
    de los div de twiiter embed*/
    //$('#productos').carousel({
    //    interval: 3999
    //});
    //$('#carousel2').carousel({
    //    interval: 4000
    //});

});/*Fin Document ready*//*=============================================*/

/* Js Facebook*/
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=556541261138043";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/*zopin*/
window.$zopim || (function (d, s) {
    var z = $zopim = function (c) { z._.push(c) }, $ = z.s =
    d.createElement(s), e = d.getElementsByTagName(s)[0]; z.set = function (o) {
        z.set.
        _.push(o)
    }; z._ = []; z.set._ = []; $.async = !0; $.setAttribute("charset", "utf-8");
    $.src = "//v2.zopim.com/?3anqSB90R9klm0u9AVGgMUkI8CmnDJ5X"; z.t = +new Date; $.
    type = "text/javascript"; e.parentNode.insertBefore($, e)
})(document, "script");

/*Clientes img hover optimizado*/
$('.cliente li img').mouseover(function () {
    tag = $(this).attr("id");
    var src = "img/fhl/" + tag + ".jpg";
    $(this).attr("src", src);
})
    .mouseout(function () {
        var src = $(this).attr("src").replace("img/fhl/" + tag + ".jpg", "img/fhl/" + tag + "n.jpg");
        $(this).attr("src", src);

    });

/*Efecto Mouseover Modal Flags*/
$('.mflags .modal-dialog .modal-content .modal-body .flag-wrapper').mouseover(function () {
    $(this).css("opacity", "1");
})
    .mouseout(function () {
        $(this).css("opacity", "0.7");
    });

/*Pauso video al cerrar modal*/
$('.close').click(function () {
    document.getElementById('myvideo').pause();
});

/*Botón más y menos clientes versión xs*/
$("#btnCliente").on('click', function () {
    if ($("#btnCliente").text() == "Menos clientes") {
        $("#btnCliente").text("Más clientes");
    } else {
        $("#btnCliente").text("Menos clientes");
    }
});

/*Efecto Mouseover Modal Flags*/
$('.mflags .modal-dialog .modal-content .modal-body .flag-wrapper').mouseover(function () {
    $(this).css("opacity", "1");
})
    .mouseout(function () {
        $(this).css("opacity", "0.7");
    });

/*Llenado de detalles de contacto en banderas por clic*/
var ventas = {
    Mexico: {
        RFC: 'Excelencia en Factor Humano S.A de C.V.',
        Direccion: 'Miguel Ángel de Quevedo número 8 Piso 5, Colonia Hacienda Guadalupe Chimalistac, Delegación Álvaro Obregón, 01050 México, Distrito Federal.',
        Country: '',
        tel: '+52 (55)5663-3220',
        Movil: '',
        mail: 'info@efhcorporativo.com',
        web: 'www.efh.mx'
    },
    Argentina: {
        Country: '',
        Direccion:'',
        tel: '',
        Movil: '',
        mail: 'info@efhargentina.com',
        web: 'www.efhargentina.com'
    },
    Bolivia: {
        Country: 'Raúl Ramallo',
        Direccion:'Av. Sanchez Lima, Edificio Tango, piso 10, Oficina 1001. La Paz, Bolivia',
        tel: '+591 77556161',
        Movil: '',
        mail: 'info@efhbolivia.com',
        web: 'www.efhBolivia.com'
    },
    Chile: {
        Country: 'David Segovia ',
        Direccion:'Av. Nueva Providencia 1881, Oficina 520 Comuna Providencia Santiago de Chile.',
        tel: '+562 2753 3604 /+569 4245 1987',
        Movil: '',
        mail: 'info@efhchile.com',
        web: 'www.efhchile.com'
    },
    Colombia: {
        Country: 'Alejandro García',
        Direccion: 'Calle 20 No.82-52 Oficina 402, Centro Empresarial Hayuelos, Bogotá D.C.',
        tel: '+57 1 7041489, +57 1 7041487.',
        Movil:'+57 31 64 73 89 81',
        mail: 'info@efhcolombia.com',
        web: 'www.efhcolombia.com'
    },
    CostaRica: {
        Country: 'Rebeca Bustamante',
        Direccion: 'Centro cultural norteamericano 200 mts norte, 50 mts este oficentro Ofident, los Yoses, San Jose CR.',
        tel: '+506 4030-7764, +506 4034-3947.',
        Movil: '+506 8751-7643',
        mail: 'info@efhcostarica.com',
        web: 'www.efhcostarica.com'
    },
    Ecuador: {
        Country: 'Xavier Verdesoto V.',
        Direccion: 'Italia N31-54 y Vancouver, Quito, Ecuador.',
        tel: '+5932 6007500, 6007502, 6007503.',
        Movil: '+593 099515200',
        mail: 'info@efhecuador.com',
        web: 'www.efhecuador.com'
    },
    Salvador: {
        Country: 'Lic. Angela G. Escobar',
        Direccion: '13 Calle Poniente No. 4344, Col. Escalón, San Salvador, El Salvador, C.A.',
        Movil: '',
        tel: '+503 2264 5961/62/63',
        mail: 'info@efhelsalvador.com',
        web: 'www.efhelsalvador.com'
    },
    Guatemala: {
        Country: 'Diana Altamirano',
        Direccion: 'Guatemala, Centroamérica',
        tel: '+502 5528 22 11.',
        Movil: '+502 5179-8516',
        mail: 'info@efhguatemala.com',
        web: 'www.efhguatemala.com'
    },
    Honduras: {
        Country: 'Ing. Gustavo Molina',
        Direccion: '2a. calle No. 4101 Col. Florencia Sur Tegucigalpa, Honduras, CA',
        tel: '+504 2232 0013, +504 9963 4879',
        mail: 'info@efhhonduras.com',
        web: 'www.efhhonduras.com'
    },
    Nicaragua: {
        Country: 'Sandra Lira',
        Direccion: 'Managua, Canal 2 TV, 2 Cuadras Norte 20 varas Oeste, Bolonia',
        tel: '+505 2254 5153, +505 2266 6776',
        mail: 'info@efhnicaragua.com',
        web: 'www.efhnicaragua.com'
    },
    Panama: {
        Country: 'Jorge Isaac Pitty M.',
        Direccion: 'Calle 8 La Rivera Don Bosco, Local 57-E Ciudad de Panamá, Panamá.',
        tel: '+00 507 293 6903.',
        Movil:'+00 507 6680 711',
        mail: 'info@efhpanama.com',
        web: 'www.efhpanama.com'
    },
    Peru: {
        Country: 'Enrique A. Queija S.',
        Direccion: 'Calle Monte Rosa 255, Piso 4, Urbanización Chacarilla, Santiago de Surco. Lima.',
        tel: '+511 625 9747',
        Movil: '',
        mail: 'info@efhperu.com',
        web: 'www.efhperu.com'
    },
    Rdominicana: {
        Country: 'Luisa Maleno',
        Direccion: 'Calle Plaza de la Cultura No. 26, El Millón, Sto. Domingo, República Dominicana.',
        tel: '+809-482-2657',
        Movil: '',
        mail: 'lmaleno@efhcaribe.com',
        web: 'www.efhcaribe.com'
    },
};
selec = ''; /*Variable global para efecto mouseover*/
$('.ventas .flag-wrapper').click(function () {
    var pais = $('div',this).attr("id");
    var mypais = $('div', this).attr("title");
    selec = 'w' + pais;
    $(this).css("opacity", "1");
    $('#' + ""+ dselect+ "").css("opacity", "0.7");
    $('.detalles #rfc').html("<p><span>" + ventas.Mexico.RFC + "</span></p>");
    $('.detalles #Country').html("<p><span>País: </span>" + mypais + "</p>");
    $('.detalles #CountryManager').html("<p><span>Country Manager: </span>" + ventas[pais].Country + "</p>");
    $('.detalles #Direccion').html("<p><span>Dirección: </span>" + ventas[pais].Direccion + "</p>");
    $('.detalles #Ventas').html("<p><span>Ventas: </span>" + ventas[pais].tel + "</p>");
    $('.detalles #Movil').html("<p><span>Móvil: </span>" + ventas[pais].Movil + "</p>");
    $('.detalles #Correo').html("<p><span>E-mail: </span>" + ventas[pais].mail + "</p>");
    $('.detalles #Web').html("<p><span>Web: </span>" + ventas[pais].web + "</p>");
    dselect = selec;
    /*Validación de país para mostrar info de contacto para México.*/
    if (pais == 'Mexico') {
        $('div #mxdetalles').show();
    }
    else {
        $('div #mxdetalles').hide();
    }
});

/*Efecto MouseOver Puntos de Venta*/
$('.ventas .flag-wrapper').mouseover(function () {
    $(this).css("opacity", "1");
    activo = $(this).attr("id")
})
    .mouseout(function () {
        if (selec == activo) {
            $(this).css("opacity", "1")
        }
        else {
            $(this).css("opacity", "0.7");
        }
    });


$('#btnEnviarCorreo').click(function () {
    var Nombre = $('#txtNombre').val();
    var Email = $('#txtEmail').val();
    var Asunto = $('#txtSubject').val();
    var Mensaje = $('#txtMensaje').val();
    var obj;
    if ((Nombre == '') || (Email == '') || (Asunto == '') || (Mensaje == '')) {
        $('#respuesta').show();
        $('#respuesta').html("<p class='msjmail'>LLene correctamente el formulario</p>")
        
    }
    else {
        $.ajax({
            dataType: "json",
            contentType: "application/json",
            async: false,
            url: '/Servicio.aspx/EnviarCorreo',
            data: JSON.stringify({ "Nombre": Nombre, "Email": Email, "Asunto": Asunto, "Mensaje": Mensaje }),
            type: "POST",
            success: function (msg) {
                obj = msg.d
                $('#respuesta').show();
                $('#respuesta').html("<p class='msjmail'>" + obj + "</p>")
                $('#txtNombre').val('');
                $('#txtEmail').val('');
                $('#txtSubject').val('');
                $('#txtMensaje').val('');
                
            }
        });

    }
    $('#respuesta').hide(7000)
  
    return false;
    
});