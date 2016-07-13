'use strict';


//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 10;

while (answer < 10) {
  answer = ask("Guess my secret? ");
  if (answer !== 1 && answer <= 10) {
   console.log("Your guess needs to be between 1 and 10.");
   break;
  }
}
