# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

The JS primitives are:
  Numbers (1, -5, 0, infinity)
  String ('', "this is a string")
  Boolean (true, false)
  null (null)
  undefined (undefined)

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

  The value of c at the end will be 7.

  From right to left, the '+' operator is an addition operator and adds the values stored in c and d.
  If they were strings, it would concatenate them.
  The '=' operator is an assignment operator and assigns the result of the values on right (c + d)
  to the variable on the left (c).

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
  After line one, the value of x is 4. After line 2, the value of y is 3.
  After the third line, the value of x is 3, and y is still 3.
  After the fourth line, the value of y is 10, and x is still 3.

  The variables do not change, and their values only change when they have been explicitly
  reassigned using the assignment operator (=), so the reassignment of y to 10 on
  the last line does not affect the assignment of x to the previous y value (3) on the third line.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
  The value of the first line will be 'undefined,' as we have declared the variable but
  not yet assigned it to anything.

  The value of the second line will be 'sunny,' as we have assigned the string 'sunny'
  to the weather variable.

  The value of the third line will be true, since the value of weather is "sunny"
  and matches the string on the right hand side exactly.


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
