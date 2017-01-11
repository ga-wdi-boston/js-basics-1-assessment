# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

1. number, 1
2. string, "name"
3. undefined, let one; one is not defined since no values are assigned.
4. NaN, undefine+1
5. null, empty
6. boolean, true/false

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of c is 7. The addition operator, +, adds both side together, and the assignment operator, =, assigns a value to its left operand based on the value of its right operand

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
x becomes 3, and y becomes 10. Variables change, but their values which are primitives don't change.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
"sunny" because it assigns the string "sunny" to te variable weather.
true because the value that variable weather points to is "sunny" and with the comparison operator, ===, it results in true.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 1;

while (answer !== 1) {

  answer = ask("Guess my number.");
  if (answer<1 && answer>10){}
  console.log("The number is within 1 to 10");
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
