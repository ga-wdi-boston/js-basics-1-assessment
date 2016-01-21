'use strict';
//We'll learn about require later in the course

/* Change the code from this question so that it tests for a number of your choice
 between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and <= 10,
 use `console.log` to display a message saying that the guess needs to be between 1 and 10.
 Save your code in the file called `bin/diagnostic.js`.  You can test the code with
 `node bin/diagnostic.js` in your Terminal. */


const ask = require('../lib/ask.js');

var answer = 'not empty';
var number = Math.random(11)

while (answer !== number) {
  answer = ask("Guess my number between 1 and 10? ");

  if (answer > number){
      console.log ("too high")
  }
  else if (answer < number){
      console.log ("too low")
  }
  else {
      console.log("You need to guess between and 10! ")
  }
   console.log("You guessed it!");

};
