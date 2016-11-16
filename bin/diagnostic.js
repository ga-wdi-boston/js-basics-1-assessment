'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my number? ");
  if (Number(answer) > 10 || Number(answer) < 1) {console.log("Needs to be between 1 and 10");}
  if (Number(answer) === 5) {
   console.log("You guessed it!");
   break;
  }
}
