![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number: any number or floating point num. 1 infinity NaN
String: a set of characters contained with '' or "". '' "non-empty string"
boolean: true false
undefined: variable with no starting value set. undefined
null: intentionally blank variable. null

## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of c is 7
"=" is an assignment operator, it sets the value of c to the result of the expression on the right.
"+" is addition, it adds the numbers stored in c and d together
Because addition is higher up in priority (assignment being one of the last things the computer does) c and d are added first, then the result of that is assigned to the variable c.

## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

line 1: x === 4
line 2: y === 3
line 3: x === 3
line 4: y === 10
The variables do not change, their values do.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The value of weather after the first line is undefined.
After line 2, the value of weather is "sunny"
The expression on line 3 results with true.

## Question 5

```js
//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 'not empty';

while (answer !== '' && answer !== 'SeCrEt') {
  answer = ask("Guess my secret? ");
}
```

Change the code from this question so that it tests for a number betwen 1 and 10 instead of a string.  Save it in the file called `assessment.js`.  You can test the code with `node assessment.js` in your Terminal.

---

Commit and push your changes.

Submit a pull request.

