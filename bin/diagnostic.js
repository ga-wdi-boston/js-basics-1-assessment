'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

var answer = '8';
var guess = 0;

while (answer !== guess) {
  guess = ask("Guess my secret? "); 
   console.log("The answer needs to be between 1 and 10");
  }
  else if (guess === answer) {
    console.log("Well done! My secret = " + answer);
    break;
  }
  else {
    console.log("WRONG!!!");
  }
}
