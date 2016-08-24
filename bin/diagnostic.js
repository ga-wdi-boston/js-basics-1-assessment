'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer >= 4) {
  answer = ask("Guess the number between 1 and 10!");
  while (answer <= 4) {
    answer = ask("Guess the number between 1 and 10!");
  if (answer === 4) {
   console.log("You guessed it!");
   break;
  }
}
