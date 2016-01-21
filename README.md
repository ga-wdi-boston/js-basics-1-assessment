![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Diagnostic for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this diagnostic.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

numbers : 23
strings : 'this is my answer'
boolean : true
null
undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

<!--
c = 5;  // assigned c with a value of 5
d = 2;  // assigned d with a value of 2
c = c + d; //reassigned c with the sum of the value of c and d.
operators are + and =
addition goes from left to right but = goes from right to left
 ===> c = 2 + 5;
result in c = 7;
 -->

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!--
let x = 4;  // declare and assign x with a value of 4
let y = 3;  // declare and assign y with a value of 3
x = y;      // reassign x with the value of y (which is 3), so x will be 3
y = 10;
// reassign y with the value of 10, but x will still have the value of 3.
final : => x = 3; y = 10;
 -->

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

<!--
let weather;                // declare value weather
weather = "sunny";          // assigned weather with a value of "sunny"
weather === "sunny";        /* check is weather strictly equal to the
 string of "sunny", which would be true */
 -->

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

Change the code from this question so that it tests for a number of your choice between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and <= 10, use `console.log` to display a message saying that the guess needs to be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.  You can test the code with `node bin/diagnostic.js` in your Terminal.

---

Commit and push your changes.

Submit a pull request.
