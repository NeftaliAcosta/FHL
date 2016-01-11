

$(document).ready(function () {

    /*Deteccion de país*/
    //$.getJSON('http://api.wipmania.com/jsonp?callback=?', function (data) {
    //    alert('País: ' + data.address.country + ' Código:' + data.address.country_code);
    //});
    /*=============================================*/

    function $_GET(param) {
        /* Obtener la url completa */
        url = document.URL;
        /* Buscar a partir del signo de interrogación ? */
        url = String(url.match(/\?+.+/));
        /* limpiar la cadena quitándole el signo ? */
        url = url.replace("?", "");
        /* Crear un array con parametro=valor */
        url = url.split("&");

        /* 
        Recorrer el array url
        obtener el valor y dividirlo en dos partes a través del signo = 
        0 = parametro
        1 = valor
        Si el parámetro existe devolver su valor
        */
        x = 0;
        while (x < url.length) {
            p = url[x].split("=");
            if (p[0] == param) {
                return decodeURIComponent(p[1]);
            }
            x++;
        }
    }

    
    //if (($_GET("flags") == 0)) {
    //    /*No invoco el modal de las banderas*/
    //}
    //else {
    //    /*Invoco el modal de cumplirse la condición*/
    //    $('#flags').modal({ visible: 'show', backdrop: 'static', keyboard: 'false' });
    //}

    /*=============================================*/
    /*Asignar URL a Bandera de modal*/
    $('.mflags a').mouseover(function () {
        param = '?flags=0'
        country = $(this).attr("id");
        $("a").prop("href", country + param)
    })
    /*=============================================*/
 
    /*crouseles*/
    /*Carga el efecto carousel al iniciar el sitio*/
    $('#carousel1').carousel({
        interval: 3999
    });
    $('#carousel2').carousel({
        interval: 4000
    });
    /*=============================================*/
});

/* Js Facebook*/
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=556541261138043";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


/*zopin*/
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
    $.src="//v2.zopim.com/?3anqSB90R9klm0u9AVGgMUkI8CmnDJ5X";z.t=+new Date;$.
    type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");


/*script img hover optimizado*/
$(function () {
    $('.cliente li img').mouseover(function () {
        tag = $(this).attr("id");
        var src = "img/fhl/" + tag + ".jpg";
        $(this).attr("src", src);
    })
        .mouseout(function () {
            var src = $(this).attr("src").replace("img/fhl/" + tag + ".jpg", "img/fhl/" + tag + "n.jpg");
            $(this).attr("src", src);
        
     });
});

