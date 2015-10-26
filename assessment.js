//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 'not empty';

while (answer !== '' && answer !== '9') {
  answer = ask("Guess a number between 1 and 10 ");
}
