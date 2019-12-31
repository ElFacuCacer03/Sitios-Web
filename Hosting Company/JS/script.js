$(document).ready(function() {

  $('.Menu-Icon').on("click", function() {
      $('nav').slideToggle();
  });

  $(window).resize(function(){
    if($(window).width() < 800){
      $('nav ul li a').on('click', function(){
        $('nav').slideUp();
      });
    }
  });

  $('.Popup').delay(4000).fadeIn(500);
  $('.Popup .Cerrar').click(function () {
    $('.Popup') .fadeOut(); 
  });

});
