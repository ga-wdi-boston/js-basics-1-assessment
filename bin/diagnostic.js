'use strict';

const ask = require('../lib/ask.js');

let answer = 4;

while (answer !== 4) {
  answer = ask("Guess my secret? ");
  if (answer < 1 || answer > 10) {
   console.log("Your guess needs to be between 1 and 10.");
   break;
  }
}
