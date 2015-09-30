//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 0;

while (answer > 10 || answer < 1) {
  answer = ask("Guess within the range of my secret number. ");
}
