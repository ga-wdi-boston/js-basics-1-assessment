'use strict'
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = '>= 1 || <= 10'

while (answer !== '3') {
  answer = ask("Guess my secret? ")
  if (answer === '5') {
   console.log("You guessed it!")
   break
  }
}
