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

boolean: true
string: "Shireen"
undefined:
  myArray = [1,2,3];
  myArray[5]=undefined
number: 23
null: null +1=1

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

(let c=5) stores the number 5 in variable c;
(let d=2) stores the number 2 in variable d;
(c=c+d) updates the value of c to be the sum of the value stored in c + value stored in d
the assignment statement ( = ) reads from right to left.

c = 7 at end

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
line 1: x = 4; y = undefined;
line 2: x = 4, y = 3;
line 3: x = y = 3
line 4: x= y = 10;

variables dont change but their valued do change

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather = "sunny" (value stored in weather is the string "sunny")
  assignment = used to assign value to weather
weather === "sunny" (true; ). === is checking to see if the value of "sunny" stored
  in weather is exactly equal to "sunny". which it is.

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
