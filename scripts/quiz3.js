/* eslint-disable no-undef */
var score = 0
var total = 5
var points = 2
var highest = total * points

// initializer
function init () {
  // correct answers
  sessionStorage.setItem('a1', 'b')
  sessionStorage.setItem('a2', 'd')
  sessionStorage.setItem('a3', 'c')
  sessionStorage.setItem('a4', 'a')
  sessionStorage.setItem('a5', 'b')

  // using value as answer from html
}

$(document).ready(function () {
  // hide qs
  $('.questionForm').hide()

  // show first q
  $('#q1').show()

  $('.questionForm #submit').click(function () {
    // get data atribute
    current = $(this).parents('form:first').data('question')
    next = $(this).parents('form:first').data('question') + 1
    // hide all questins
    $('.questionForm').hide()
    // show next question
    $('#q' + next + '').fadeIn(300)
    process('' + current + '')
    return false
  })
})

// process the answer
function process (n) {
// get input value
  var submitted = $('input[name=q' + n + ']:checked').val()
  if (submitted == sessionStorage.getItem('a' + n + '')) {
    score = score + points
  }

  if (n == total) {
    $('#results').html('<h2>Your final score is: ' + score + ' out of ' + highest + '</h2><a href="course-start.html">Take Quiz again</a>')
    if (score == highest) {
      $('#results').append('<p> you are an html5 master!')
    }
  }
  return false
}

// event listener
window.addEventListener('load', init, false)
