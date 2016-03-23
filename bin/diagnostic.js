'use strict';
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer (!>=1 && !<=10)) {
    console.log("The guess needs to be between 1 and 10.");
  }
  else if (answer === 5) {
   console.log("You guessed it!");
   break;
  }
}
