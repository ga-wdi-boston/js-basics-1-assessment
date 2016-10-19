'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 0;

while (answer !== 5) {
  answer = ask("Guess my number? ");
  answer = Number(answer);
  if (!(answer >= 1 && answer <= 10)) {
   console.log("Needs to be between 1-10.");
  }
  else if (answer === 5){
   console.log("You got it!");
  }
  else {
   console.log("Wrong!");
  }
}
