'use strict'
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("What is my favorite number? ")
  if (answer < 1 || answer >10) {
    console.log ("Please enter a number between 1 and 10")
  }
  else if (answer === 8) {
    console.log ("You guessed my favorite number!")
  }
  else{
    console.log("Wrong")
   break
  }
}

// change the code from this question so that it tests for a number of your choice
// between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
// <= 10, use `console.log` to display a message saying that the guess needs to
// be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
// You can test the code with `node bin/diagnostic.js` in your Terminal.
