'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("What is your age ? ");
  if (answer >= 1 && answer >= 10) {
   console.log("You need to be between 1 and 10");
   break;
  }
}
