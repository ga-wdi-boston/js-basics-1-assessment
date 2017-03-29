'use strict'

const ask = require('../lib/ask.js')

let number = ask("Guess a number!")
if (number >= 1 && number <= 10) {
  console.log('Great job!')
} else {
  console.log('Oops! The number needs to be 1 and 10.')
}
