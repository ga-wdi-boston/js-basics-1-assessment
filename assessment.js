//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 'not empty';

while (answer !== '' && answer !== 5 ) {
  answer = ask("Guess between 1 and 10 ") - 0;
}
