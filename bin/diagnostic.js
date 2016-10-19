'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my number: ");
  if (answer < 1 || answer > 10) {
   console.log("Guess must be between 1 and 10");
   break;
 } else if (answer === 7) {
   console.log("You guessed it!");
   break;
 }
}
