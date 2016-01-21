'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

var answer = 'not empty';

while (answer !== '') {
  answer = ask('Guess a number between 1 and 10.');
  if (answer < 1 || answer > 10) {
continue;
  }
  else {
    for (let i = 1; i <= 10; i++) {
      if (i === answer) {
        console.log('You guessed it!');
        break;
      }
    }
  }
}
