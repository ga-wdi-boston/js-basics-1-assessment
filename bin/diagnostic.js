'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer >= 1 && answer <= 10) {
    if (answer == 6) {
     console.log("You guessed it!");
     break;
    }
  } else {
    console.log('Your guess must be a number between 1 and 10');
  }
}
