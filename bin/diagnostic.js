'use strict';



//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = NaN;

while (answer !== NaN) {
  answer = +(ask("Guess the number? "));
  if (answer > 10 || answer < 1) {
   console.log('Please try a number between 1 and 10');
 } else if (answer === 7){
   console.log('You guessed it!');
   break;
 } else {
   console.log("You're getting close...");
 }
}
