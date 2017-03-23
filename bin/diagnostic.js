'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess a number between 1 and 10!")
  if (answer === 7) {
   console.log("You guessed it!")
 } else if (answer <= 1 || answer >= 10) {
   console.log("You're close, but please try again!")
 } else {
   console.log("You must guess a number between 1 and 10.")
   break
 }

}
