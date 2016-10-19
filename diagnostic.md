# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
Numbers - NaN
Strings - 'Hello world'
Boolean - true
Null - null
Undefined - undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.
The value of c is 7.  The operators in the last line are equals (=) and addition (+).  C is added to D and then C is set to the result of that equation.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
line 1: x is 4, y hasn't been declared yet
line 2: x is 4, y is 3
line 3: x is 3, y is 3
line 4: x is 3, y is 10

The variables don't change after they've been declared, but their values do.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
The first expression (weather = "sunny";) gives the variable weather the value
of "sunny".
The second expression (weather === "sunny";) evaluates to true because the value
of weather ("sunny") is equal to the string "sunny".

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
