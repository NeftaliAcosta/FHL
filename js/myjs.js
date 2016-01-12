

$(document).ready(function () {
    /*Evitar que cargue modal de banderas y ocultarlo*/
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
    if (($_GET("flags") == 0)) {
        //    /*No invoco el modal de las banderas*/
        $('#flags').modal('hide')
    }
    /*Fin*/


    /*=============================================*/
    /*Obtener banderas por dominio*/
    $(location).attr('href');
    var pathname = window.location.pathname;
    var localhost = 'http://localhost:52409/'
    var mx = 'http://www.efh.mx/'
    var corp = 'http://efhcorporativo.com/'
    //if ((localhost == window.location) || (mx == window.location) || (corp==windows.location)) {
    //    /*Invoco el modal siempre que se acceda a un dominio*/
    //    $('#flags').modal({ visible: 'show', backdrop: 'static', keyboard: 'false' })
    //}
    
    
    

    /*Asignar URL a Bandera de modal*/
    $('.mflags a').mouseover(function () {
        param = '?flags=0'
        country = $(this).attr("id");
        $("a").prop("href", country + param)
    })
    /*Carga el efecto carousel al iniciar el sitio
    de los div de twiiter embed*/
    $('#carousel1').carousel({
        interval: 3999
    });
    $('#carousel2').carousel({
        interval: 4000
    });

    /*Forzo a mostrar clientes*/
    $('.carousel clientes').carousel('show')
});/*Fin Document ready*//*=============================================*/

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


/*Pauso vieo al cerrar modal*/
$('.close').click(function () {
    document.getElementById('myvideo').pause();
});