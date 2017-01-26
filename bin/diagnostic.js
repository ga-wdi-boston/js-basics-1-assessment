'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

if (answer < 0 || answer < 11) {
  console.log('Booo, needs to be between 1 and 10');
}

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '6') {
   console.log("You guessed it!");
   break;
  }
}
