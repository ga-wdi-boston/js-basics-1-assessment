# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number:
  Example: 3

String:
  Example: 'This is a string.'

Boolean:
  Example: false

Null:
  Example: null

Undefined:
  Example: undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After this code executes, the value of c is 7.

The + operator on the last line performs arithmetic addition, adding the values of the numbers assigned to c and d.
The = operator on the last line assigns the value of the right-hand expression to c.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
         x     y
Line 1 | 4
Line 2 | 4     3
Line 3 | 3     3
Line 4 | 3     10

The variables do not change.
Their values change every time they appear on the left side of the '=' operator.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The value of the first expression is "undefined". We declare a new variable but do not assign it any value.

The value of the second expression is "sunny". When we assign a new value to a variable that has already been declared, JavaScript returns the new value.

The value of the third expression is true. weather evaluates to "sunny", which is strictly equal to "sunny", so the strict equality operator '===' returns a value of true.

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

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
