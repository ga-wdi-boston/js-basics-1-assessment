//Change the code from this question so that it tests for a number betwen 1 and 10 instead of a string.

var ask = require('./ask.js');
//Assign a string to the varible answer
var answer = 'not empty';
// while loop - while variable answer does not equal a string and the variable answer does not equal 5
while (answer !== '' && answer !== 5) { // 5 is the number
  answer = ask("Guess my secret! Pick a number between 1 and 10.");
  //prompt the user with ask to guess the sercret
}
