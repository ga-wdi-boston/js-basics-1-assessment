'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '' && (answer < 1 && answer > 10)) {
  //answer = ask ('Give me a number between 1 and 10' );
  answer = console.log("You need to guess a number between 1 and 10, nerd ");
  if (answer >= 1 && answer <= 10) {
   console.log("You guessed it!");
   break;
  }
}
