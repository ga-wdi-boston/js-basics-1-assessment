'use strict'
//We'll learn about require later in the course
let ask = require('./ask.js');


// while (answer !== '' && answer !== 'SeCrEt') {
//   answer = ask("Guess my secret? ");
// }
let answer = 0;
while (answer !== "" && answer < 10 && answer !==2){
  answer = ask("Guess what number between 1 and 10 I'm thinking of!");
}
