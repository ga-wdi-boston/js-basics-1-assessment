'use strict'
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer === '5') {
   console.log("You guessed it!")
   break
 } else if (answer < 1 || answer > 10){
   console.log("Guess needs to be between 1 and 10")
   break
 }
}
