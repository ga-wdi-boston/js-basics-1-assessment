'use strict';

const ask = require('../lib/ask.js');

let answer = 'n';

while (answer !== '5') {
  answer = ask("Guess my secret? ");
  if (answer === '5') {
   console.log("You guessed it!");
 } else {
   console.log('I will give you a hint. It is between 1 and 10');
 }
}
