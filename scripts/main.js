/* eslint-disable no-undef */
$('.navbar a').on('click', function (e) {
  var target = $(this)
  var element = target.attr('href')

  $('.navbar a').removeClass('active')
  target.addClass('active')

  $('body, html').animate({
    scrollTop: $(element).offset().top - 90
  }, 800)
})
