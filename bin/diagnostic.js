'use strict'

const ask = require('../lib/ask.js')

let answer = 5

while (answer !== '') {
  answer = ask("Guess a number between 1 and 10 ")
  if (answer === 5) {
   console.log("You guessed it!")
   break
 } else if (answer >= 10 || <= 1){
 console.log('The number must be between 1 and 10')
 }
}
