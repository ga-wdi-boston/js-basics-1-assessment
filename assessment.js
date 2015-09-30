//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 5;

while (answer < 10 && answer !== 5) {
  answer = ask("Im thinking of a number between 1 and 10. What is it? ");
}
