![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Diagnostic for JavaScript Fundamental

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this diagnostic.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Undefined  Example: declaring "let variable" without assigning a value
Null  Example: let variable = null
Boolean  Example: let variable = true
String  Example: let variable = "Jenny was totally wasted at the family reunion"
Number  Example: let variable = 7

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of c will be 7.  The operators are "=", the assignment operator, which assigns a value and "+", the binary addition operator, which is adding the two variables.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?
After line 1 the value of x is 4.  After line 2 the value of y is 3.  After line 3 the value of both x and y are 3.  On the last line the value of y is 10.  When all the lines are done executing, the value of x is 3 and the value of y is 10.



## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather = "sunny" is assigning the variable weather the value of "sunny".
weather === "sunny" is comparing the value and type.  This will evaluate to false.


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = x;

while  {
  x = ask
  if (x !=> 1; x !<= 10; x++) {
   console.log("You need to submit a number between 1 and 10");
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and <= 10, use `console.log` to display a message saying that the guess needs to be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.  You can test the code with `node bin/diagnostic.js` in your Terminal.

---

Commit and push your changes.

Submit a pull request.
