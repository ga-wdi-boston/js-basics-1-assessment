# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

undefined: child = undefined
null: empty object = null
boolean: var x = false;
string:  var x="John"+"Smith";
number: var x = 43;

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

-The value of c is 7. We add the first values of c+d, which is 7, new value assigned to c.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

- The new value of x=3; new value of y=10. When it comes to numbers, they can leave their last value and convert as the circumstances make them change the values. From right to left, x becomes 3 and only after that, y is 10, not affecting the past value of x.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

== means equal value and === means equal value and equal type. Therefore, === is more specific.
weather = "sunny" is true, but
weather=== "sunny" is false, they are not the same thing.

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
