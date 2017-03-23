'use strict'
const ask = require('../lib/ask.js')

let answer

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer === 6 && (answer > 0 && answer <= 10)) {
   console.log("You guessed it!")
   break
  }
  else
  console.log("You need to guees between 1 and 10")
}
