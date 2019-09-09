console.log('it works');

$(document).ready(function () {
  $('.submitId').click(function (event) {
    console.log('clicked')


    var email = $('#emailId').val()
    var statusElm = $('.status')
    statusElm.empty()


    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>email is valid</div>');
      console.log('valid email')
    } else {
      event.preventDefault()
      statusElm.append('<div>email is invalid</div>');
    }

    // if (subject.length > 2) {
    //   statusElm.append('<div>Subject is Valid</div>')
    // } else {
    //   statusElm.append('<div>Subject is not Valid</div>')
    // }
  })
})
