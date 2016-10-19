'use strict';
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer < 0 || answer > 10) {
    console.log('You guess needs to be between 1 and 10')
  }
  if (answer === '4') {
    console.log("You guessed it!");
    break;
  }
}
