# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Primitive types are Boolean (true, false), Null(null), Undefined(has not been
assigned, undefined), Number(eg 23.123), String(eg 'Woot!'), and Symbol(used for debugging, don't have a good example).

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```


= sets the value of the variable to the content on the right, + does a check for
the item to the right to be a number then adds it to c. Value should be 12.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?
<!-- solution below -->
line 1: x is 4
line 2: x is 4, y is 3
line 3: x is y, y is 3 so x is 3
line 4: x is 3, y is 10

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
line 1: weather is created, is unassigned because it wasn't assigned a value
line 2: weather is 'sunny', expression updates the value
line 3: true, expression checks to see if the value matches


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
