const ask = require('../lib/ask.js');
'use strict'
let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret!");
  if (answer > 0 && answer < 11) {
   console.log("You guessed it!");
   else {
   console.log("Must be between 1 and 10")
   }

//I ran out of time with this answer, I know it's wrong!
