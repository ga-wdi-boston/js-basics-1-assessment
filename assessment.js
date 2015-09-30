//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = '';

while (answer !== '6' && answer !== 'SeCrEt') {
  answer = ask("Guess my secret? ");
  if (answer === '6') } {
    console.log ("that's the number")
  }
}
