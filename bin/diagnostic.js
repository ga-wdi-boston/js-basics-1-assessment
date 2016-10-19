'use strict';

## Question 5


//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '7') {
   console.log("You guessed it!");
   break;
 } else if (answer >= 10) {
   console.log("Guess a number between 1 and 10.");
 } else if (answer <= 1) {
   console.log("Guess a number between 1 and 10.");
 }
}
