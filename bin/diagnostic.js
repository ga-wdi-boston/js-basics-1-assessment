'use strict'
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer !>= 1 && answer !<= 10) {
   console.log("Guess needs to be between 1 and 10")
   break
  }
}

//I ran out of time and know this doesn't work, but I think a ternary
//evaluation would work
