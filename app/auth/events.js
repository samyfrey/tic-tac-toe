const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

// this file defines the function that are run when an event occurs on the page (click etc) if the connection to the api is successful or failed

// function onSignUp show
// this function above will show the screen to sign up
// this function above will show a message that failing to show the sign up screen 'please try again later'

const onSignUpSubmit = function (event) {
  event.preventDefault()
  const form = event.target
  // need to make sure that function is triggered by click on sign up button but formData is taken from the sign up submit field (in which the event target data is)
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
  // this function above will alert the user that the sign up was successful (POST request to server was success)
    .catch(ui.signUpFailure)
// this function above will alert the user that the sign up failed (unable to POST to server) 'Unable to Sign Up, Please Try Again'
}

const onSignInSubmit = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData is', formData)
  // formData is the data linked to the form (when we create credentials[email] etc)
  api
    .signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// function that will: show the game board screen, start player as X and make POST games API call to create game
const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// exporting our function so they can be called in the event listener app.js file
module.exports = {
  onSignUpSubmit,
  onSignInSubmit,
  onSignOut,
  onNewGame
}
