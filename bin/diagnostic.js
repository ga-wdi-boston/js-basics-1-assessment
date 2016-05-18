'use strict';
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my number between one and ten? ");
  if (!(answer >= 1 && answer <=10)){
    console.log("You need to pick a number between one and ten!")
  }
  else if (answer === '5') {
   console.log("You guessed it!");
   break;
  }
}
