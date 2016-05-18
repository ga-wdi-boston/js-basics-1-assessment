'use strict';

const ask = require('../lib/ask.js');

let answer = ask("Guess a number from 1 to 10: ");
if (answer === 8) {
 console.log("You guessed it!");
}

while (answer !== 8 ) {
  answer = ask("Guess a number from 1 to 10: ");
  if (answer === 8) {
   console.log("You guessed it!");
   break;
 }
  else if(!(answer >= 1 && answer <= 10)){
    console.log("Your guess needs to be between 1 and 10!!");
  }

}
