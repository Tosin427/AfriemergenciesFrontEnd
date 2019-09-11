console.log('it works');

$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('clicked')


    var name = $('.name').val()
    var email = $('.email').val()
    var phone = $('.phone').val()
    var services = $('.services').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()


    if (service.length > 2) {
      statusElm.append('<div>name field filled</div>');
      console.log('valid email')
    } else {
      event.preventDefault()
      statusElm.append('<div><h4 style="font-family:nexa; color:red; text-align:center; margin-top: 15px; ">Please fill in to get accurate feedback<h4></div>');
    }

    if (name.length > 2) {
      statusElm.append('<div>name field filled</div>');
      console.log('valid email')
    } else {
      event.preventDefault()
      statusElm.append('<div><h4 style="font-family:nexa; color:red; text-align:center; margin-top: 15px; ">Please fill in to get accurate feedback<h4></div>');
    }

    if (phone.length > 5 && phone.includes('+')) {
      statusElm.append('<div>Phone Number is valid</div>');
      console.log('valid email')
    } else {
      event.preventDefault()
      statusElm.append('<div><h4 style="font-family:nexa; color:red; text-align:center; margin-top: 15px; ">Please fill in to get accurate feedback<h4></div>');
    }

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>email is valid</div>');
      console.log('valid email')
    } else {
      event.preventDefault()
      statusElm.append('<div><h4 style="font-family:nexa; color:red; text-align:center; margin-top: 15px; ">Please fill in to get accurate feedback<h4></div>');
    }

    if (message.length > 10) {
      statusElm.append('<div>email is valid</div>');
      console.log('valid email')
    } else {
      event.preventDefault()
      statusElm.append('<div><h4 style="font-family:nexa; color:red; text-align:center; margin-top: 15px; ">Please fill in to get accurate feedback<h4></div>');
    }

    // if (subject.length > 2) {
    //   statusElm.append('<div>Subject is Valid</div>')
    // } else {
    //   statusElm.append('<div>Subject is not Valid</div>')
    // }
  })
})