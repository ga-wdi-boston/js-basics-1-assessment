//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 'a number 1 through 10';

while (answer !== '' && answer != 5) {
  answer = ask("Im thinking of a number between 1 and 10. What is it? ");
  if (answer == 5) {
    console.log('Good job! You guessed it!')
  }
}


