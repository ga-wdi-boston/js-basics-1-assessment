'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

var answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '7') {
   console.log("You guessed it!");
   break;
 }
  else if (answer !=== >=1 && <=10) {
    console.log("Your guess needs to be between 1 and 10.");
  else (answer !=== '7')
    console.log("Wrong! Try again.");
  }
 }
