'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

var answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === 9) {
   console.log("You guessed it!");
 }
   break;
 } else if (answer < 1 || answer > 10) {
   console.log('Please choose a number between 1 and 10');
 }
}
