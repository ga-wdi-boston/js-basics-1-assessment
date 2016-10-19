'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== 5) {
  answer = ask("Guess my number? ");
  if (answer === 5) {
   console.log("You guessed it!");
   break;
  }
}
