'use strict';
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");

  for (number = 1; number < 10; number++) {
    if (1 <= answer <= 10) {
      console.log("You are correct.");
    } else {
      console.log("Try again, your guess must be between 1 and 10 included.");
    }
}
