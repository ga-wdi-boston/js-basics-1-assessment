'use strict'
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== 8) {
  answer = ask('Guess my number')
  if (answer >= 1 && answer <= 10) {
    console.log('You guessed it!')
  } else {
    console.log('Guess needs to be between 1 and 10')
  }
}
