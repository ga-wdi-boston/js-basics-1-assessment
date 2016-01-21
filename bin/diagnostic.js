'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 0;

while (answer !== 8) {
  answer = ask("Guess my number: ");
  if (answer === 8) {
   console.log("You guessed it!");
   break;
  }
  else if (answer < 1 || answer > 10){
    console.log("Between 1 and 10, idiot!");
  }
  else{
    console.log("WRONG!");
  }
}
