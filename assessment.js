//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 0;

while (answer <= 7 && answer >= 9) {
  answer = ask("Guess my secret? ");
}
