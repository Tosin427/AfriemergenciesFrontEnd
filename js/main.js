console.log('it works');

$(document).ready(function () {
  $('.submitId').click(function (event) {
    console.log('clicked')


    var emailId = $('#emailId').val()
    var statusElm = $('.status')
    statusElm.empty()


    if (emailId.length > 5 && emailId.includes('@') && emailId.includes('.')) {
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