'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '7') {
   console.log("You guessed it!");
   if (answer <= 0 || answer>10) {
     console.log("A number between 1 and 10, please. Thank you.");
   }
   break;
}
  }
'use strict';
