'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret number between 1 and 10! ");
  if (+answer === 7) {
   console.log("You guessed it!");
   break;
 } else if (answer < 1 || answer > 10) {
   console.log("Try picking a number between 1 and 10.");
 } else {
   console.log("Guess again!");
 }
}
