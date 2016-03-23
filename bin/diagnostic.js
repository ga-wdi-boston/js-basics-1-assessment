'use strict';



//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== undefined) {
  answer = ask("Guess my secret? ");
  if (answer == NaN || (answer < 1 && answer > 10) ){
    console.log("I'll give you a hint: it is a number between 1 and 10.");
    break;
  }
  else if (answer ==5 ) {
   console.log("You guessed it!");
   break;
  }
}
