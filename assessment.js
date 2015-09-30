//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = ask("I'm thinking of a number between 1 and 10");

while (answer !== 6) {
  if(answer > 10 || answer < 1) {
    answer = ask("I said between 1 and 10, try again!");
  }
  else if(answer > 6) {
    answer = ask("Too high, try again");
  }
  else if (answer < 6) {
    answer = ask("Too low, try again");
  }
  else {
    answer = ask("Please type a number! Thanks!!");
  }
}
