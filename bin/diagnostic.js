'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess a number from 1 to 10! ")
  if (answer === '2') {
   console.log("You guessed it!")
   //break
 } else if (answer >= 1 || answer <= 10){
   console.log("The guess needs to be between 1 and 10!")
 }
}
