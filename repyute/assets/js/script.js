$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('header').addClass('white-bg')
  } else {
    $('header').removeClass('white-bg')
  }
})

$("#start").click(function() {
  $('html, body').animate({
      scrollTop: $("#invite").offset().top -70
  }, 800);
});