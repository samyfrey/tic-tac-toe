
const config = require('../config')
const store = require('../store')

// this file is our api requests

// the param formData is the data collected by

const signUp = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: formData
  })
}

// the signOut API is a DELETE request to the server to destroy the token created at sign in, that token is stored in the var 'store' and used here in the auth header so the request knows which user to sign out

const signOut = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      // here we attach the user.token return by the api to the store var
      Authorization: 'Bearer ' + store.user.token

    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}


