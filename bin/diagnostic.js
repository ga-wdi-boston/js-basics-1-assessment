'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask('Guess my secret?')
  if (answer > 0 && answer < 11) {
    console.log('You guessed it!')
    break
  } else {
    console.log('guess needs to be between 1 and 10')
  }
}
