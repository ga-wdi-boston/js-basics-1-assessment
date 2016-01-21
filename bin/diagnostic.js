'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

var answer = 0;

while (answer !== '') {
  answer = ask("Guess my secret?");
  if (answer <= 10) {
   console.log("You guessed it!");
   break;
 } else {
   console.log("Yor guess needs to be between 1 and 10!")
 }
}

/* Change the code from this question so that it tests for a number of your
choice between 1 and 10 instead of the string `'SeCrEt'`.
If `answer` isn't >= 1 and <= 10, use `console.log`
to display a message saying that the guess needs to be between 1 and 10. */
