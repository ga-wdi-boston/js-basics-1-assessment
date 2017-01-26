'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess a number between 1 and ten: ");
  if (answer <= 1 || answer >= 10) {
    console.log("The guess needs to be between 1 and 10");
  } else if (answer === '8') {
      console.log("You guessed it!");
      break;
  }
}
