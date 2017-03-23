'use strict'
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my number? ")
  if ((answer >= 1) && (answer <= 10)){
    if (answer === 4) {
         console.log("You guessed it!")
    } else {
      console.log("Sorry!")
    }
   break
 } else {
   console.log("The guess needs to be between 1 and 10")
 }
}
