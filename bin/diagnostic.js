'use strict';


const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my number? ");
  if (answer === 7) {
   console.log("You guessed it!");
   break;
  }
}
