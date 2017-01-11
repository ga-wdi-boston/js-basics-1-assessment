'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 1;
  answer = ask("Guess my number.");
while (answer !== 1) {

  if (answer<1 && answer>10){
  console.log("The number is within 1 to 10");
  }
}
