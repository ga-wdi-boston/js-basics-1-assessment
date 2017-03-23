'use strict'

// We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask('Enter a number between 1 and 10... ')
  if ((answer < 1) || (answer > 10)) {
    console.log('Incorrect:  Guess needs to be between 1 and 10')
    break
  }
}
