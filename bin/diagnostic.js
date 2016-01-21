'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer;

while (answer !== 5) {
  answer = ask("Guess my secret? ");
  if (answer <1 || >10) {
   console.log("Enter a number from 1-10:");

  }
  else(answer === 5) {
    console.log("You guess it!");
    break;
  }

  }
}
