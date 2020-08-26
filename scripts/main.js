/* eslint-disable no-undef */
// $('.nav-link').click(function () {
//   var section = $('#courses').val
//   $('html, body').animate({
//     scrollTop: $(courses).offset().top
//   }, 2000)
// })

$('.navbar a').on('click', function (e) {
  var target = $(this)
  var element = target.attr('href')

  $('.navbar a').removeClass('active')
  target.addClass('active')

  $('body, html').animate({
    scrollTop: $(element).offset().top - 90
  }, 800)
})
