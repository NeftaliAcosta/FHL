$(document).ready(function () {
    var URLdomain = window.location;
    dom = window.location.host;
    doma = 'http://' + dom + '/';
    if (URLdomain==doma){
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


    var URLsearch = window.location.search;
    alert(URLsearch);


    /*Carga el efecto carousel al iniciar el sitio
    de los div de twiiter embed*/
    $('#carousel1').carousel({
        interval: 3999
    });
    $('#carousel2').carousel({
        interval: 4000
    });


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


/*Pauso video al cerrar modal*/
$('.close').click(function () {
    document.getElementById('myvideo').pause();
});