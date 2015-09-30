//Change the code from this question so that it tests for a number betwen 1 and 10 instead of a string.  Save it in the file called `assessment.js`.  You can test the code with `node assessment.js` in your Terminal.


//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 'not empty';

while (answer '' && answer !== 7 ) {
  answer = ask('Guess my number! ') - 0;
}

//ran out of time
