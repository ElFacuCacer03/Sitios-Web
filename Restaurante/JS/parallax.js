$(document).ready(function(){

    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .Textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.Acerca-De article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    $(window).resize(function(){
        var windowWidth = $(window).width();

        if(windowWidth < 800){
            $('.Acerca-De article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });

});