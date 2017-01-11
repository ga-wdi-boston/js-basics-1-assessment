'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '5') { //shouldn't have to be a string but ok
   console.log("You guessed it!");
   break;
 } else if (answer > 10) {
   console.log('Answer is too high! Try a number between 1 and 10.');
 } else if (answer < 1) {
   console.log('Answer is too low! Try a number between 1 and 10.');
 // } else if (!(answer + 1)) { //should check if it is a number but doesn't
 //   console.log('Answer is not a number! Try a number between 1 and 10.');
 } else {
   console.log('Wrong answer! Please try again.');
 }
}
