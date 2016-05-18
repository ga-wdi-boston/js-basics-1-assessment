## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '7') {
   console.log("You guessed it!");
   break;
 } else if (answer !== >=1 && <=10){
   console.log("Pick a number between 1 and 10")

 }
}
```'use strict';
