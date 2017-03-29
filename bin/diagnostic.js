'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask('Guess my secret? ')

  // If answer isn't >= 1 and <= 10, use console.log to display a message saying that the guess needs to be between 1 and 10.
  if (answer < 1 || answer > 10) {
    console.log('Your guess needs to be between 1 and 10.')

  // Change the code from this question so that it tests for a number of your choice between 1 and 10 instead of the string 'SeCrEt'.
  } else if (answer === '7') {
    console.log('You guessed it!')
    break
  }
}
