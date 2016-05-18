'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess a number between one and ten");
  if (answer === '5') {
   console.log("You guessed it!");
   break;
   else if (answer < 1 || answer > 10) {
   ask("You need to guess a number between one and ten");
   } else {
    ask("Incorrect. Guess again");
   }
  };
}
