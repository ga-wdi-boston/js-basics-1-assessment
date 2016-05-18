'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== 2) {
  answer = ask("Guess my secret? ");
  if (answer == 2) {
   console.log("You guessed it!");
   break;
 } else if (answer < 1 || answer > 10) {
   console.log('Guess must be between 1 and 10')
 }
}
