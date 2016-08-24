'use strict';

js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'SeCrEt';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === 'SeCrEt') {
   console.log("You guessed it!");
   break;
  }
}
