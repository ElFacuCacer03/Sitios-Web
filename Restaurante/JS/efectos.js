$(document).ready(function(){

    /* ANIMACION DEL MENU */
    $('.Menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': '0'
        }, 2000 + (index * 500));
    });

    /* ANIMACION TEXTOS */
    if( $(window).width() > 800 ){
        $('header .Textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .Textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    /* VARIABLES SECCIONES */
    var acercaDe = $('#Acerca-De').offset().top,
        menu = $('#Platillos').offset().top,
        galeria = $('#Galeria').offset().top,
        ubicacion = $('#Ubicacion').offset().top;


    /* SCROLL ACERCA DE */
    $('#btn-AcercaDe').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        }, 500);
    });

    /* SCROLL MENU */
    $('#btn-Menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    /* SCROLL GALERÍA */
    $('#btn-Galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });

    /* SCROLL UBICACIÓN */
    $('#btn-Ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });

});