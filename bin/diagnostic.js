'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer === 7) {
   console.log("You guessed it!")
  else if (answer >= 10 || answer <= 1) {
     console.log("The guess must be between 1 and 10!")
   } else (answer !== 7) {
     console.log("Nope! Try again.")
   }

   break
  }
}













// Change the code from this question so that it tests for a number of your choice
// between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
// <= 10, use `console.log` to display a message saying that the guess needs to
// be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
// You can test the code with `node bin/diagnostic.js` in your Terminal.
