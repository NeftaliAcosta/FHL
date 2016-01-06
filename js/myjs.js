
/*crouseles*/
/*Carga el efecto carousel al iniciar el sitio*/
$(document).ready(function () {
    $('#carousel1').carousel({
        interval: 3999
    });
    $('#carousel2').carousel({
        interval: 4000
    });
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