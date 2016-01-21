'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

var answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === (>1 || <10)) {
   console.log('Please guess a number between 1 and 10');
   break;
  }
}
