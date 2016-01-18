$(document).ready(function () {
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
        var ht = 'http://localhost:58702/';
        $('#flags').modal({ visible: 'show', backdrop: 'static', keyboard: 'false' });
        if ((fh == URLdomain) || (fhx == URLdomain) || (ht == URLdomain) || (efh == URLdomain) || (mx == URLdomain) || (corp == URLdomain) || (efhx == URLdomain) || (mxx == URLdomain) || (corpx == URLdomain)) {

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
        }

    }
    else {
        /*No invoco el modal de las banderas*/
        $('#flags').modal('hide');
    }


    /*Proceso de invacion de modal por parametros*/
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
    else if (($_GET("producto") == 'ecoclima')) {
        $('#ecoclima').modal('show')
    }


    /*Carga el efecto carousel al iniciar el sitio
    de los div de twiiter embed*/
    $('#productos').carousel({
        interval: 3999
    });
    $('#carousel2').carousel({
        interval: 4000
    });


    $('.carousel clientes').carousel('show');

 
    
  
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


/*Pauso video al cerrar modal*/
$('.close').click(function () {
    document.getElementById('myvideo').pause();
});


$("#btnCliente").on('click', function () {
    if ($("#btnCliente").text() == "Menos clientes") {
        $("#btnCliente").text("Más clientes");
    } else {
        $("#btnCliente").text("Menos clientes");
    }
});



















/*Llenado de detalles de contacto en banderas*/
var ventas = {
    México: {
        RFC: 'Excelencia en Factor Humano S.A de C.V.',
        Country: 'Raúl Ramallo',
        tel: '+52 (55)5663-3220',
        mail: 'info@efhcorporativo.com',
        web: 'www.efh.mx'
    },
    Argentina: {
        Country: '',
        Direccion:'',
        tel: '',
        mail: 'info@efhargentina.com',
        web: 'www.efhargentina.com'
    },
    Bolivia: {
        Country: 'Raúl Ramallo',
        Direccion:'Av. Sanchez Lima, Edificio Tango, piso 10, Oficina 1001. La Paz, Bolivia',
        tel: '+591 77556161',
        mail: 'info@efhbolivia.com',
        web: 'www.efhBolivia.com'
    },
    Chile: {
        Country: 'David Segovia ',
        Direccion:'Av. Nueva Providencia 1881, Oficina 520 Comuna Providencia Santiago de Chile, Chile.',
        tel: '+562 2753 3604 /+569 4245 1987',
        mail: 'info@efhchile.com',
        web: 'www.efhchile.com'
    },
    Colombia: {
        Country: 'Alejandro García',
        Direccion: 'Calle 20 No.82-52 Oficina 402, Centro Empresarial Hayuelos, Bogotá D.C.',
        tel: '+57 1 7041489, +57 1 7041487. Móvil:+ 57 31 64 73 89 81',
        mail: 'info@efhcolombia.com',
        web: 'www.efhcolombia.com'
    },
    CostaRica: {
        Country: 'Raúl Ramallo ',
        Direccion: '100 mts sur del Banco Nacional de Costa Rica, Curridabat, San José, Costa Rica',
        tel: '+506 4030-7764, +506 4034-3947. Móvil: +506 8751-7643',
        mail: 'info@efhcostarica.com',
        web: 'www.efhcostarica.com'
    },
    Ecuador: {
        Country: 'Xavier Verdesoto Vallejo',
        Direccion: 'Italia N31-54 y Vancouver, Quito, Ecuador.',
        tel: '+5932 6007500, 6007502, 6007503. Móvil: +593 099515200',
        mail: 'info@efhecuador.com',
        web: 'www.efhecuador.com'
    },
    Salvador: {
        Country: 'Lic. Angela G. Escobar',
        Direccion: '13 Calle Poniente No. 4344, Col. Escalón, San Salvador, El Salvador, C.A.',
        tel: '+503 2264 5961/62/63 ',
        mail: 'info@efhelsalvador.com',
        web: 'www.efhelsalvador.com'
    },
    Guatemala: {
        Country: 'Diana Altamirano',
        Direccion: 'Guatemala, Centroamérica',
        tel: '+502 5528 22 11. Móvil: +502 5179-8516 ',
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
        tel: '+00 507 293 6903. Móvil: +00 507 6680 711',
        mail: 'info@efhpanama.com',
        web: 'www.efhpanama.com'
    },
    Peru: {
        Country: 'Enrique A. Queija Siguas',
        Direccion: 'Calle Monte Rosa 255, Piso 4, Urbanización Chacarilla, Santiago de Surco. Lima, Perú.',
        tel: '+511 625 9747',
        mail: 'info@efhperu.com',
        web: 'www.efhperu.com'
    },
    Rdominicana: {
        Country: 'Luisa Maleno',
        Direccion: 'Calle Plaza de la Cultura No. 26, El Millón, Sto. Domingo, República Dominicana.',
        tel: '+809-482-2657',
        mail: 'lmaleno@efhcaribe.com',
        web: 'www.efhcaribe.com'
    },
};






$('.ventas .flag-wrapper div').click(function () {
    var pais = $(this).attr("id");
    $('.detalles').html("<p class='contacto'> <b>" +
            ventas.México.RFC + "</b>" +
           " Country Manager: "+ ventas[pais].Country +
           " Ventas: " + ventas[pais].tel +
           " Correo: " + ventas[pais].mail +
           " Web: " + ventas[pais].web +
            "</p>");
   
}); 