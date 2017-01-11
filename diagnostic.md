# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
1. Number - 1999
2. String 'this is a string'
3. Boolean - true, false
4. null - empty
5. undefined - when a variable is undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

- c = 7.
- + is the operator in the last line. It adds the c and d values together to assing a new value for c.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?


let x = 4; - x is 4
let y = 3; - y is 3
x = y; - x is 3
y = 10; - y is 10

The variables don't change, the value of the variables change.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

let weather; - the value is undefined because we didn;t declare a value for it.
weather = "sunny"; - the value is "sunny"
weather === "sunny";- this a boolean value of true because the variable weather was assigned to the value of sunny, so its true.


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer !== 1 >= <= 10) {
   console.log("Guess between 1 and 10");
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
