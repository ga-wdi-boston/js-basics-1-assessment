'use strict';

const ask = require('../lib/ask.js');

let answer = '';

while (answer !== '3') {
  answer = ask("Guess my secret? ");
  if (answer < 1 || answer > 10) {
    console.log("Please guess a number that is between 1 and 10");
  } else if (answer === '3') {
   console.log("You guessed it!");
   break;
  }
}

//Is it OK to allow javascript to handle treating the string answer as a number
//for evaluations or would it be better practice to use parseInt(answer) for the
//answer evaluation? Thanks.
