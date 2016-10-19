'use strict';

//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '')
{
  answer = ask("Guess my secret? ");
  if(answer > 0 && answer <= 10)
  {
    if (answer === 8)
    {
     console.log("You guessed it!");
     break;
    }
    else
    {
      console.log("Nope! Try again!");
    }
  }
  if(answer < 1 || answer > 10)
  {
    console.log("You need to choose a number between 1 and 10.");
  }
}
