'use strict';


//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("I chose a number between 1 and 10, what is it? ");
  if (answer === 2) {
   console.log("You guessed it!");
   break;
  }

  else if (answer < 1 && answer > 10) {
    console.log("Sorry your answer is not between 1 and 10.")
  }
}
