'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== 10) {
  answer = ask('Guess my secret? ')
  if (answer / 1 === 10) {
    console.log('You guessed it!')
  } else if (answer < 1 || answer > 10) {
    console.log('answer must be between 1 and 10, bro.')
  } else if (isNaN(answer)) {
    console.log('answer must be a NUMBER between 1 and 10, bro.')
  }
}
