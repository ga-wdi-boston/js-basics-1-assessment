'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== 5) {
  answer = ask("Guess my secret number? ");
  if (answer === 5) {
   console.log("You guessed it!");
   break;
  }
  else if (answer >= 1 && answer <= 10) {
    console.log("Close but no cigar!");
    break;
  }
  else if (answer < 1 || answer > 10) {
    console.log("Hint: the number is between 1 and 10 inclusive.");
    break;
  }
};
