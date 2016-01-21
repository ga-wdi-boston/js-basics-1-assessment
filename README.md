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

let String = 'Jason'
let Integer = 2;
let Boolean =  true;
let undefined = undefined;
let null = '';

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

value of c is 7.
The operators in the program are + and =.  The + evaluates values or variables from left to right.  It can either be a unary or binary operator.  It can either add numbers together, or concatenate strings together or convert the other operator into a string.

The = operator evaluates from right to left and is an assignment operator.  It assigns values to objects or variables.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

At the end of the code, x's value will technically be equal to 10 because it is assigned to the variable y and y's value was changed to 10.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

`weather = "sunny";` is setting the variable weather to the string "sunny".
`weather === "sunny"` is strictly comparing the value of weather with the string "sunny".
the result will be true.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("I chose a number between 1 and 10, what is it? ");
  if (answer === 2) {
   console.log("You guessed it!");
   break;
  }

  else if (answer < 1 && answer > 10) {
    console.log("Sorry your answer is not between 1 and 10.")
    break;
  }
}
```

Change the code from this question so that it tests for a number of your choice between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and <= 10, use `console.log` to display a message saying that the guess needs to be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.  You can test the code with `node bin/diagnostic.js` in your Terminal.

---

Commit and push your changes.

Submit a pull request.
