'use strict'
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess a number from 1 to 10.")
  if (answer < 1 || answer > 10) {
   console.log("Guess must be a number from 1 to 10!")
   break
  }
}
