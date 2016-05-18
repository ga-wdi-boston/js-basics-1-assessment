'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let myAnswer = 5;

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === myAnswer) {
   console.log("You guessed it!");
   break;
  }
}
