//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 0;

while (answer  < 1 || answer  > 10) {
  answer = ask("Guess my secret? ");
}
