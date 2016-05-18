'use strict';
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '6') {
   console.log("You guessed it!");
   else = ask("Guess my secret. Hint is 1-10.")
   break;
  }
}
