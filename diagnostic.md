# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
number = 1
String = 'Andy'
boolean = true
null
undefined
Symbol = We haven't learned about this yet.

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After this code executes, c = 7.
'=' is the assignment operator, which evaluates the expression on the right hand side and then assigns the name 'c' on the left to the resulting value.  '+' is the binary operator for addition when it receives numbers.  It will return the sum of the two operands.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
let x = 4; x is 4 y doesn't exist
let y = 3; x is 4 y is 3
x = y; x is 3 y is 3
y = 10; x is 3 y is 10


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
let weather; returns undefined
weather = "sunny"; returns 'sunny'
weather === "sunny"; returns true

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
  } else if (answer < 1 || answer > 10) {
    console.log('Your guess needs to be between 1 and 10.')
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
