'use strict'
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask('Guess my secret?')
  if (answer >= 1  && answer >= 10) {
    console.log("guess needs to be between 1 and 10")
    break
  }
  else if( answer === '5' ) {
    console.log("You guessed the right answer was: "+ answer)
    break
  }
  else {
      console.log("Your answer was: "+ answer)
  }
}
