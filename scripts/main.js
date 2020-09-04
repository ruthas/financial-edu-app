/* eslint-disable no-undef */
var source = `
<div class="row courses" id="courses">
<div class='col-12 row-title'>
  <h2> {{upper title1}} </h2>
  <img src="./assets/line.svg" class="line" />
  <p> {{subheading1}} </p>
</div>
  {{#courses}}
    {{>course-card}}
  {{/courses}}
</div>
<div class="row prerequesites" id="prerequesites">
      <div class='col-12 row-title'>
        <h2> {{upper title2}} </h2>
        <img src="./assets/line.svg" class="line" />
        <p> {{subheading2}} </p>
      </div>
      {{#prerequisites}}
        <div class="col-12 col-md-4 prequesite">
          <img src='{{image}}' alt='requirements' />
            <title>{{requirement}}</title>
            <p>{{requirement}}</p>
        </div> 
      {{/prerequisites}}
</div>
`
var template = Handlebars.compile(source)

var data = {
  title1: 'Featured Content',
  subheading1: 'Enjoy these online courses at your own time and own pace. Start when you want, finish when you want.',
  title2: 'Prerequisites',
  subheading2: 'Make sure you meet these requirements before starting our courses',
  courses: [
    {
      title: 'Understanding money',
      summary: 'The course applies two core techniques which Accelerates Time-to-Knowledge. Starting with a landscape view then introducing primary building blocks...',
      buttonText: 'See Course',
      image:
        './assets/UnderstandingMoney.png'
    },
    {
      title: 'choosing insurance',
      summary: 'Money sets limits on your dreams, hinders or magnifies your happiness, and dictates the quality of your life. budgets, racked up debts, defaulted on mortgages...',
      buttonText: 'See Course',
      image:
        './assets/MoMoney.png'
    },
    {
      title: 'Money saving tips',
      summary: 'Upon completion of this course, students will be able to save, protect and make much more so that their net worth is significantly higher in the long run and...',
      buttonText: 'See Course',
      image:
        './assets/Saving.png'
    },
    {
      title: 'Digital Currencies',
      summary: 'Digital currency is a form of currency that is available only in digital or electronic form, and not in physical form. It is also called digital money, electronic money...',
      buttonText: 'See Course',
      image:
        './assets/Currencies.png'
    },
    {
      title: 'How to budget',
      summary: 'Every great financial plan starts with a sound budget. If you’re trying to pay off bills or save for a dream vacation, a budget is your first step toward making your...',
      buttonText: 'See Course',
      image:
        './assets/Budget.png'
    },
    {
      title: 'Stokvel',
      summary: 'Traditionally, a stokvel is a pooled savings scheme, whereby members opt in to join a savings club or society, and each contribute a set amount of money every...',
      buttonText: 'See Course',
      image:
        './assets/Stokvel.png'
    }
  ],
  prerequisites: [
    {
      requirement: 'Laptop, tablet or mobile phone.',
      image:
        './assets/devices.svg'
    },
    {
      requirement: 'A reliable internet connection.',
      image:
        './assets/internet.svg'
    },
    {
      requirement: 'Proficient in written and spoken English.',
      image:
        './assets/document.svg'
    }
  ]
}

Handlebars.registerPartial(
  'course-card',
  `
  <div class="col-12 col-md-4 mt-2">
    <div class='card'>
      <img src='{{image}}' class='card-img-top' alt='course illustration' />
      <div class='card-body'>
        <h3 class='card-title'>
          {{upper title}}
        </h3>
        <p class='card-text'>
          {{summary}}
        </p>
        <a href='./pages/course.html' class='btn btn-purple-primary'>
          {{buttonText}} >
        </a>
      </div>
    </div>
  </div>
  `
)

Handlebars.registerHelper('upper', function (aString) {
  return aString.toUpperCase()
})

var result = template(data)
$('#homepage').empty().append(result)

// =========

$('.navbar a').on('click', function (e) {
  var target = $(this)
  var element = target.attr('href')

  $('.navbar a').removeClass('active')
  target.addClass('active')

  $('body, html').animate({
    scrollTop: $(element).offset().top - 90
  }, 800)
})
