'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask('Guess my secret? ')
  if (answer === '7') {
    console.log('You guessed it!')
    break
  }
  if (answer < 1 || answer > 10) {
    console.log('You need to guess a number from 1 to 10 (inclusive)')
  }
}
