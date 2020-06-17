$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('header').addClass('white-bg')
  } else {
    $('header').removeClass('white-bg')
  }
})

$('#start').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('#invite').offset().top - 95,
    },
    800
  )
})

function sendContact() {
  var valid
  valid = validateContact()
  if (valid) {
    jQuery.ajax({
      url: 'contact_mail.php',
      data:
        'userName=' +
        $('#userName').val() +
        '&userEmail=' +
        $('#userEmail').val() +
        '&subject=' +
        $('#subject').val() +
        '&content=' +
        $(content).val(),
      type: 'POST',
      success: function (data) {
        $('#mail-status').html(data)
      },
      error: function () {},
    })
  }
}

