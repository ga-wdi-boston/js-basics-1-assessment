'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 7;

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === 7) {
   console.log("You guessed it!");
   break;
 } else if (answer < 1 || answer > 10) {
   console.log('guess needs to be between 1 and 10');
 }
}
