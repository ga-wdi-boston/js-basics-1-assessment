# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
- Number: 5
- String: 'Hello World'
- Boolean: `true`
- Null: `null`
- Undefined: `undefined`

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

`c` will return `7` after this code executes.
The operators are:
- `+` which adds two operands together
- `=` which assigns the value on the operand on the right of the operator to the operand on the left of the operator.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

- Line 1: `x` is equal to `4`; `y` is `undefined`
- Line 2: `x` is equal to `4`; `y` is equal to `3`
- Line 3: `x` is equal to `3`; `y` is equal to `3`
- Line 4: `x` is equal to `3`; `y` is equal to `10`

The variables do not change. Their values do.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

- `undefined` The variable `weather` has been declared but not defined.
- `'sunny'` The variable weather was reassigned to `'sunny'`
- `true` This expression uses a comparison operator which can only return a boolean value. Because `weather` has a value of `'sunny'` it is true that is equal to `'sunny'`.

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
