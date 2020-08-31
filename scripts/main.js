/* eslint-disable no-undef */
var template = Handlebars.compile(source)

var data = {
  title: 'Featured Content',
  courses: [
    {
      title: 'Understanding money',
      summary: 'The course applies two core techniques which Accelerates Time-to-Knowledge. Starting with a landscape view then introducing primary building blocks provides an...',
      buttonText: 'See Course',
      image:
        './assets/'
    },
    {
      title: 'Card title 2',
      summary: 'Summary text 2',
      buttonText: 'See Course',
      image:
        'https://images.unsplash.com/photo-1598821144367-db395349afa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'Card title 3',
      summary: 'Summary text 3',
      buttonText: 'See Course',
      image:
        'https://images.unsplash.com/photo-1598821144367-db395349afa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60'
    }
  ]
}

var result = template(data)
document.getElementById('courses').innerHTML = result

$('.navbar a').on('click', function (e) {
  var target = $(this)
  var element = target.attr('href')

  $('.navbar a').removeClass('active')
  target.addClass('active')

  $('body, html').animate({
    scrollTop: $(element).offset().top - 90
  }, 800)
})
