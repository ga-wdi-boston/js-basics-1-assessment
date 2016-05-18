'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== 5) {
  answer = ask("Guess my secret? ");
 if (answer < 1) {
   console.log("Your guess has to be a number between 1-10.")
 }
 if(answer > 10) {
   console.log("your guess has to be a number between 1-10.")
 }
 if (answer == 5) {
  console.log("You guessed it!");
  break;
}
}

//Change the code from this question so that it tests for a number of your
//choice between 1 and 10 instead of the string 'SeCrEt'. If answer isn't >= 1
//and <= 10, use console.log to display a message saying that the guess needs to
//be between 1 and 10. Save your code in the file called bin/diagnostic.js. You
//can test the code with node bin/diagnostic.js in your Terminal.
