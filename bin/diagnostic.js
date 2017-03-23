'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask('Guess my secret number between 1 and 10? ')
  if (answer < 1 || answer > 10) {
    console.log('Your answer was ' + answer + '. Your guess needs to be a number between 1 and 10')
    console.log('Guess a new number.')
  } else if (answer === '2') {
    console.log('You entered ' + answer + '. You guessed it!')
    break
  } else {
    console.log('Your answer was ' + answer + '. Its not my secret number. Try again.')
  }
}
