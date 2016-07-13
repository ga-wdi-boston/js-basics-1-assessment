'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '2') {
   console.log("You guessed it!");
   break;
  }
  if (answer > '10'||(answer < '1')){
    console.log("The number is between 1 to 10");
  }
}
