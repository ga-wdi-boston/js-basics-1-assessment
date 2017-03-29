'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask('Guess the number, it is between 1 - 10 inclusive: ')
  if (answer<1 || answer>10){
    console.log("Invalid, Please guess a number between 1 and 10.")
  } else if (answer === '3') {
   console.log("You guessed it! The number is 3")
   break
  }
}
