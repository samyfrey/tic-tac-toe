
const config = require('../config')

// the param formData is the data collected by

const signUp = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp
}

// notes
// don't forget 'store' var for signOut (which allows to use token # and delete it)
