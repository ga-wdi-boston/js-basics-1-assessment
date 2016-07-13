'use strict';

const ask = require('../lib/ask.js');

let answer = 2;

while (answer>=1&&(answer<=10)&&(answer !== 2)) {
  answer = ask("Guess my secret? ");
  if (answer === 2) {
   console.log("You guessed it!");
   break;
  }
  if (answer>10||(answer<1)){
    console.log('The number is between 1 and 10');
  }
}
