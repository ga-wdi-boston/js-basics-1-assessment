'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

var answer = 'not empty';

while (answer !== '') {
  answer = ask("I'm thinking of a number between 1 and 10 (inclusive!)... ");
    if (answer < 1 || answer > 10)  {
      console.log("Please choose a number between 1 and 10 (inclusive) ");
    } else if (answer === '9') {
       console.log("You guessed it!");
       break;
  }  else {
    console.log("Guess again! ");
  }
}
