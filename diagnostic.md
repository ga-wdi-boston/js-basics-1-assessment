# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

-Boolean: 'true' and 'false'
-String: "Hello, world!"
-Null: 'null'
-Undefined: 'undefined'
-Number: '1'

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

-After this code executes, c will be 7. The operators in 'c = c + d;' are '=' and '+', and because it goes from right to left, it's adding c and d together, which will then change the value of c after it is executed.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

-After the code executes, x will be 3 and y will be 10. The variables don't change because the let command was already executed by js, but they're values change because of the code that follows.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

-The weather variable's value is "sunny", this doesn't change, but the next line asks whether weather is equal to "sunny" to be true or false; here it is true.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'n';

while (answer !== '5') {
  answer = ask("Guess my secret? ");
  if (answer === '5') {
   console.log("You guessed it!");
 } else {
   console.log('I will give you a hint. It is between 1 and 10');
 }
};
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
