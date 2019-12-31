$(document).ready(function () {
  $(".Icon-Menu").on("click", function () {
    $("nav").slideToggle()
  })

  $(window).resize(function(){
    if ($(window).width() <= 800){	
      $('nav ul li a').on('click', function(){
        $('nav').slideUp();
      })
    }	
  });
})