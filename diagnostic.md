# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

'use strict'

Please list the JavaScript primitives and give one example of each.

five types: undefined, null, boolean (ex: true or false), string (ex: 'Lauren'), and number (ex: 37).

```js
let c = 5;
let d = 2;
7 = 5 + 2;

On the right side of equation, c evaluates to 5 and d evaluates to 2. Then they are added (wiht the addition operator), and c reeavaluates (or is it better to say: "is redefined as"?) to 7 and is now stored on the left side of the equation.
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
```js
let x = 4;
let y = 3;
x = y;  //now x reevalutes to y, which is 3
y = 10; //now y reavalutes to 10

I believe the second part of the answer is: the variables x and y do not change, but their values do.
```


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

In the first line, the value is the string "sunny".
In the second line, the value is the boolean "false", because weather is NOT exactly identical to "sunny".

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === 'SeCrEt') {
   console.log("You guessed it!");
   break;
  }
}
```

I ran out of time for this question! :(

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
