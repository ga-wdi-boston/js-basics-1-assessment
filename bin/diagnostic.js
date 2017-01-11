'use strict';
# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

The five primtives are:
boolean: true,
numbers: 1,
strings: "strings",
undefined: undefined,
null: null

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

 The value of c is 7. '+' is the operator in this last line and it adds the previously assigned values of c and d together to give us a new value for c.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
X = 3 and Y = 10. X is given the value 3 because the last assignment given to it is y, which was last given a value of 3. After that, y is given a new value of 10. The variables do not change, only their values.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

First weather is just declared. Then its assigned a value of "sunny". Then it is assigned a strict value of "sunny", "sunny" === "sunny", which is true.
## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';
while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer >= 1 && answer =< 10) {
   console.log("You guessed it!");
 } else {
   console.log("You guess must be between 1 and 10");
 }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
