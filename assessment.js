//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = null;

while (answer <= 1 && answer >= 10) {
  answer = ask("Enter a number between 1 to 10");
}
