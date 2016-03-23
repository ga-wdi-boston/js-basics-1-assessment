'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '7') {
  answer = ask("Guess a number between 1 and 10 ");
  if (answer === '7') {
   console.log("You guessed it! You should play the Powerball");
   break;
  }
}
