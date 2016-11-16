'use strict';
const ask = require('../lib/ask.js');

let count = 'not empty';

while (count !== '') {
  answer = ask("Guess my secret? ");
  if (answer !>= 1 && answer !<=10);
    console.log("Guess needs to be between 1 and 10");
  if (answer === count) {
   console.log("You guessed it!");
   break;
  }
}
//Change the code from this question so that it tests for a number of your choice
//between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
//<= 10, use `console.log` to display a message saying that the guess needs to
//be between 1 and 10.
