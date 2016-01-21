'use strict';
//We'll learn about require later in the course

//Change the code from this question so that it tests for a number of your
//choice between 1 and 10 instead of the string `'SeCrEt'`.  If `answer`
//isn't >= 1 and <= 10, use `console.log` to display a message saying that the
//guess needs to be between 1 and 10.  Save your code in the file called
//`bin/diagnostic.js`.  You can test the code with `node bin/diagnostic.js`
//in your Terminal.

const ask = require('../lib/ask.js');

var answer = 5;
var prompt = 0;

while (prompt !== answer) {
  if (prompt == answer) {
    // for some reason, if i use if(prompt === answer), this never evaluates
    // to true. why is that? thanks!
   console.log("You guessed it!");
   break;
  } else if(prompt < 1 || prompt > 10){
   console.log("Pick a number between 1-10");
  } else {
   console.log("Guess again");
 }
 prompt = ask("Guess my number: ");
};
