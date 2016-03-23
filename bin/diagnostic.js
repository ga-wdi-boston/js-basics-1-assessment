'use strict';

const ask = require('../lib/ask.js');
let myNum = 6;
let answer = 3;

while (answer !== myNum) {
  answer = ask("Guess my number");
  if (answer > 10 || answer < 1 ) {
   console.log("Please Guess a number between 1 and 10!");
 }
 else if (answer === myNum) {
   console.log("You guess correct!")
   break;
 }
 else {
   console.log("Not my number! Guess again");
 }
  }
