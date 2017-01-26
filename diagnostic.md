# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

String - "example"
Number - 12
Boolean - True or false
Symbol - ([description])

source: MDN

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of C = 7. We read this code from right to left, meaning that 'c + d' assignes the value to 'c'. 5 + 2 equates to 7, thus c = 7.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
After x = y, x equates to 3 because 'y' assignes a new value to it. 'y' to equal to 10 in the final line of code, because we're reading from right to left. There is no carryover in variable values from line to line.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```
What are the values of these expressions?  Explain your answers.

'=' is simple assignment order, assigning values from right to left, thus "sunny" = weather
'===' indicates strict equality, thus weather can only === "sunny"


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
