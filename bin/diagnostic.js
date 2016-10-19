'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my number? Hint: It's between 1 and 10. ");
  if (answer < 1 || answer > 10) {
    console.log("Your guess needs to be between 1 and 10.");
  } else if (answer === 3) {
    console.log("You guessed it!");
    break;
  }
}
