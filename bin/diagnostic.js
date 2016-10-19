'use strict';

const ask = require('../lib/ask.js');

let answer = 7;

while (answer !== '') {
  answer = ask("Guess my secret? ");

  if (answer < 1 || answer > 10) {
    console.log('The guess needs to between 1 and 10!');
  }
  console.log(answer);

  if (answer == 8) {
   console.log("You guessed it!");
   break;
  }
}
