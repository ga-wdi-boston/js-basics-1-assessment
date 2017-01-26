# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number(e.g. 3), String(e.g. "Hello"), Boolean(e.g. true),
null(e.g. null), undefined(e.g. undefined)

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

Value of c is 7. The operators are (+) and (=). (+) is an addition operator that adds the two number values together. (=) is an assignment operator that assigns a new value to the variable on the left.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

New values x = 3 and y = 10. The variables stay the same but their values change because of reassignment.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

undefined (A variable has been delared but no value as been assigned)
"sunny" (This is variable assignment)
true (Shows that equality is true)

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Type a number between 1 and 10.");
  if (answer >= 1 && answer <= 10) {
   console.log("Correct!");
   break;
  }
  else {
    console.log("Your number needs to be between 1 and 10!");
    break;
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
