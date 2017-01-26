# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

The JavaScript primitives are: Strings, Numbers, Undefined, Null, and Booleans.
Strings: '53', 'Hello, Bob'
Numbers: 754, -122
Undefined: let x;
Null: let jack = null;
Boolean: true, false
## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The variable c will have a value of 7. In the last line of code, c is set to be the result of its original value, 5, plus the value of the variable d, 2.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
The values are x=3, y=10 The variables do not change, their values do. The variables always remain x, and y.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

-For the first line, its output would be the string of "sunny". This is because it is defined in the next line of code.
-The second lines output would be the string of "sunny" again. This time it is being defined, so it returns the value given to it.
-The third lines output would be the Boolean value of true because it's using the operator === which compares to see if it has the same value and type.

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
