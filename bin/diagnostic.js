'use strict'
// Modify to guess the number
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask('Guess my number? ')
  if (answer === '7') {
    console.log('You guessed it!')
    break
  }
  if (answer < 1 || answer > 10) {
    console.log('Please enter a number between 1 and 10')
  }
}
