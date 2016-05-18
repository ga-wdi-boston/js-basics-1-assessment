'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';
let myAnswer = '5';

while (answer != myAnswer) {

  let yourAnswer = ask("Guess my secret? ");
  let validGuess;

  // Validate input
  if(yourAnswer <= 10 && yourAnswer >= 1){
    validGuess = true;
  }else{
    validGuess = false;
  }

  // Give response
  if(validGuess){
    if (yourAnswer == myAnswer) {
     console.log("You guessed it!");
     break;
   }else{
     console.log("Try again!");
   }
 }else{
   console.log("You must guess between 1 and 10!");
 }
}
