// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events')
const uiNav = require('./auth/ui')

// this is our events listener file

$(() => {
  // 1 event when user click sign up btn to open sign up screen (#3)
  // $('#sign-up-button').on('click', authEvents.onSignUpShow)
  // 1 event when user submit sign up forms when click on sign-up-submit
  $('#sign-up-form').on('submit', authEvents.onSignUpSubmit)
  $('#sign-in-form').on('submit', authEvents.onSignInSubmit)
  // sign out stretch - brings to screen #5 sign out (play again etc)
  // when New Game button is clicked (after user is signed in) calls the function that will: show the game board (screen #4), start player as X and make POST games API call to create game
  $('#sign-up-nav').on('click', uiNav.signUp)
  $('#sign-in-nav').on('click', uiNav.signIn)

  $('#new-game-btn').on('click', authEvents.onNewGame)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  // sign in btn after signed out to bring me back to sign in screen
  $('#play-again-btn').on('click', uiNav.playAgain)
})
