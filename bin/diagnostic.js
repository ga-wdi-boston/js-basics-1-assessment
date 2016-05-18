'use strict';
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my number between one and ten? ");
  if (answer === '5') {
   console.log("You guessed it!");
   break;
  }
}
