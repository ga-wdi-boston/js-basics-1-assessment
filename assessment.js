//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 'not empty';

while (answer !== 10) {
  answer = ask("Guess my secret number?");
}
