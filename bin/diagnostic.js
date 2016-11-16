'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  answer = parseInt(answer);

  if(isNaN(answer) || (answer < 1 || answer > 10)) {
    console.log("Guess needs to be between 1 and 10!");
  } else {
    if (answer === 8) {
      console.log("You guessed it!");
      break;
    }
  }
}
