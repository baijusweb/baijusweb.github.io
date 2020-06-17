$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('header').addClass('white-bg')
  } else {
    $('header').removeClass('white-bg')
  }
})
