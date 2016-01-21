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

number - 5
string - 'I only have 30 minutes'
boolean - true
null - null
undefined - 0/0

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c = 7. This line evaluates right to left. The operator + adds c and d together. The operator = overwrites the value of v with the result of c + d.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

let x = 4; // x is 4, y is not yet declared
let y = 3; // x is 4, y is 3
x = y; // x is 3, y is still 3
y = 10; // x is 3, y is 10
The values of the variables change, but there is no lasting relationship between x and y.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

let weather; // weather is undefined. It's declared but hasn't been assigned a value yet
weather = "sunny"; //the value of weather is the string "sunny"
weather === "sunny"; //this line evaluates to true because it's asking if the value of sunny is "weather", and it is.

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
