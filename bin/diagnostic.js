'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Type a number between 1 and 10.");
  if (answer >= 1 && answer <= 10) {
   console.log("Correct!");
   break;
  }
  else {
    console.log("Your number needs to be between 1 and 10!");
    break;
  }
}
