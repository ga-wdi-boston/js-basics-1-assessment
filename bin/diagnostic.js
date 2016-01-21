'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';
answer = answer.toString();

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '9') {
   console.log("You guessed it!");
 } else if (answer < '1' || answer > '10') {
   console.log('Pick a number between 1 and 10');
   break;
}
}
