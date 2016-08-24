# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number - 1
String - "Hello"
Boolean - true or false
Undefined - undefined
Null - null

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

C = 7 The last line is saying assign the value of c + d to c. The expression is read
right to left, so the c value on the left will be the final value of c, rather
than what it was initially assigned.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x = 3
y = 10
Yes the values change because the value on the right of the equal sign is being
assigned to the value on the left, so the inital declarations are overwritten by
these new assignments.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather = 'sunny' - this is stating that the value of this expression has to
match the string, but it is not a strict assignment like the one below. So this value
could be 'sunny' or 'Sunny'.

weather === 'sunny' - this is stating that the value HAS to match up exactly to
the string, so only 'sunny' will be correct, not 'Sunny'.


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer >=1; <=10) {
   console.log("Your guess needs to be between 1 and 10");
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
