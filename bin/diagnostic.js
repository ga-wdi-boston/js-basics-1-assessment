'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess a number between 1 and 10");
  if ()(answer < 1 )||(answer > 10 ))
   {
   console.log("The answer must be between 1 and 10")
   }
  else if (answer === 5)
  {
   console.log("You guessed it!");
   break;
  }
}
```
