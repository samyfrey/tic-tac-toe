// this file contains the functions that actually change the page and alert the user of changes (sign in, up, out etc) vs app and event.js which 1/ defines what happens when the user interact with the page (click on buttons for ex) - app.js 2/ actually send the request to the server (sign up, in , out) and call the functions contained in this file depending on the api request success/failure - event.js

const store = require('../store')
const game = require('../game')

// the param responseData is the data (email and pwd when signed up) that is passed by .then notation in event.js

// this function alerts in bodytext the user that the signUp (POST to server) was successful
const signUpSuccess = function (responseData) {
  $('#sign-up-display').text(
    'Sign Up was Successful! Sign In to Start a New Game!'
  )
  // once sign up is successful, the user needs to log in to play (advanced: could allow to play directly as if sign up success === sign in)

  $('#sign-up-display').removeClass()
  $('#sign-up-display').addClass('text-success')

  // clear our the form field
  $('form').trigger('reset')
  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#sign-up-display').text(
    'Unable to Sign Up . Please try again later. '
  )
  // if sign up failed, show error message
  // removeClass, removes every previous class assigned (like a green font when sign up success for ex)
  $('#sign-up-display').removeClass()
  $('#sign-up-display').addClass('text-danger')

  // clear our the form field
  $('form').trigger('reset')
  console.log('error is', error)
}

const signInSuccess = function (responseData) {
  $('#sign-in-display').text('Successfully signed in')
  $('#sign-in-display').removeClass()
  $('#sign-in-display').addClass('text-success')
  // this where we assign our token (thru responseData, what we get back from the api) to our var store.user (create an object) which is then used in our api.js (store.user.token). we are able to use responseData here as this is the data that is passed in by .then in the events.js (data obtained with getFormFields)
  // responseData corresponds to the data we get back when we do curl requests (token etc)
  store.user = responseData.user

  $('form').trigger('reset')
  console.log('responseData is', responseData)
  $('#new-game-btn').show()

  // show the game, to work as step 2 (css of the game section is now display:none)
  // $("#game").show();
}

const signInFailure = function (error) {
  $('#sign-in-display').text('Unable to sign in. Please check your credentials and try again.')
  $('#sign-in-display').removeClass()
  $('#sign-in-display').addClass('text-danger')
  $('form').trigger('reset')
  store.user = null
  console.log('responseData is', error)

  // show the game, to work as step 2 (css of the game section is now display:none)
  // $("#game").show();
}

const signOutSuccess = function (responseData) {
  $('#sign-out-display').text('Successfully signed out')
  $('#sign-out-display').removeClass()
  $('#sign-out-display').addClass('text-success')
  $('form').trigger('reset')
  console.log('signOutSuccess ran and nothing was returned!', responseData)
  // maybe show sign in again ? see screen #5
}

const signOutFailure = function (error) {
  $('#sign-out-display').text('Unable to sign out. Please try again.')
  $('#sign-out-display').removeClass()
  $('#sign-out-display').addClass('text-danger')
  $('form').trigger('reset')
  console.log('responseData is', error)
}

const newGameSuccess = function (responseData) {
  $('#game-screen').show()
  // const playerX = true
  store.user = responseData.user
  // this maybe the place where we code our game
  // when user clicks on a div, turns that div's img to XX and class to XX
  // maybe use responseData into startGame fuction for currentPLayer
  $('.cell').on('click', game.startGame())
}

const newGameFailure = function (error) {
  $('#sign-in-display').text('Unable to start a new game. Please try again later.')
  $('#sign-in-display').removeClass()
  $('#sign-in-display').addClass('text-danger')
  $('form').trigger('reset')
  console.log('responseData is', error)
}
// export function so they can be used in event.js
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure
}
