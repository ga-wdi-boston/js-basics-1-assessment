//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 'not empty';

while (answer !== 0 && answer !== 4) { //0 is thate to escape program without typing number, much like the empty string
  answer = ask("Guess my secret? ");
  answer = +answer;   //changes answer from string to num
}
