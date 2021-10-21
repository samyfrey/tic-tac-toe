// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events')
const uiNav = require('./auth/ui')

// this is our events listener file

$(() => {
  // submit events are clicks that sends info to api (whats in the input fields)
  $('#sign-up-form').on('submit', authEvents.onSignUpSubmit)
  $('#sign-in-form').on('submit', authEvents.onSignInSubmit)
  // nav btns allows user to switch between screens
  $('#sign-up-nav').on('click', uiNav.signUp)
  $('#sign-in-nav').on('click', uiNav.signIn)

  // when New Game button is clicked (after user is signed in) calls the function that will: show the game board (screen #4), start player as X and make POST games API call to create game
  $('#new-game-btn').on('click', authEvents.onNewGame)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  // (should be renamed nav instead of btn) after signed out to bring me back to sign in screen
  $('#play-again-btn').on('click', uiNav.playAgain)
})
