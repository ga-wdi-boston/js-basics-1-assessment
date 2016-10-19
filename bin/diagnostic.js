'use strict';

const ask = require('../lib/ask.js');

let answer = NaN;

while (answer !== NaN) {
  answer = +(ask("Guess my number: "));
  if (answer < 1 || answer > 10) {
   console.log("Guess must be between 1 and 10");
 } else if (answer === 7) {
   console.log("You guessed it!");
   answer = NaN;
 }
}
