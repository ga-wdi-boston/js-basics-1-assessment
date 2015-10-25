//We'll learn about require later in the course
var ask = require('./ask.js');

 var answer = 'Where a guess would go'; //I changed this

 while (answer !== '' && answer !== '8') {
   answer = ask("Guess a number between 1 and 10");
 }

