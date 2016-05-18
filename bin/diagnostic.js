'use strict';

const ask = require('../lib/ask.js');

let answer = true;

while (answer !== undefined) {
  answer = ask("Pick a number between 1 to 10? ");
  if (answer < 1 && answer > 10) {
   console.log("Your number needs to be any number between 1 to 10!");
   break;
 }else{
  continue;
 }
}
