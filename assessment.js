//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = NaN;

while (answer === NaN || (answer < 1 || answer > 10)) {
  answer = ask("Pick a number between 1 and 10: ");
  return console.log("You picked " + answer);
}

