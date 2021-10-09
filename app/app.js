// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events')

// this is our events listener file

$(() => {
  // 1 event when user click sign up btn to open sign up screen (#3)
  $('#sign-up-button').on('click', authEvents.onSignUpShow)
  // 1 event when user submit sign up forms when click on sign-up-submit
  $('#sign-up-form').on('submit', authEvents.onSignUpSubmit)
})
