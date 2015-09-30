//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = null;

while (answer !== '5') {
  answer = ask("Guess a number between 1 to 10");
}
