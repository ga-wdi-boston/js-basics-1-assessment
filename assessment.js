//We'll learn about require later in the course
var ask = require('./ask.js');

var answer;

  while (answer != 5){
   if (answer >10 || answer <1){
    console.log("That's not between one and ten.");
    }
    answer = ask("Guess a number between 1 and 10. ")
  } console.log("You guessed it!");

// while (answer !== '' && answer !== ) {
//   answer = ask("Guess my secret? ");
// }
