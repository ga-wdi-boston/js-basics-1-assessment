'use strict';
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '2' ) {
   console.log("You guessed it!");
   break;
 } else if (answer <1 || answer>10){
   console.log('Your guess needs to between 1 to 10!');
 }else{
   console.log('Try again!');
 }
}
