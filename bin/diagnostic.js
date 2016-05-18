'use strict';

const ask = require('../lib/ask.js');

let answer = 7;

while (answer !== 7) {
  answer = ask("Guess my secret? ");
  if (answer === 7) {
   console.log("You guessed it!");
   break;
 } else if (answer !== 1 < answer < 10) {
   console.log("Needs to be between 1 and 10");
 }
}
