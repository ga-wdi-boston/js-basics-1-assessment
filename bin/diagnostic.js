'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';
let myAnswer = '5';

while (answer !== '') {
  let Youranswer = ask("Guess my secret? ");
  if (Youranswer === myAnswer) {
   console.log("You guessed it!");
   break;
 }else if(Youranswer > 10 || Youranswer < 1){
   console.log("You guessed it!");
 }
}
