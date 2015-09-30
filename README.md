![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

<!-- Replace this comment with your answer -->
number ex: 5
string ex: 'Laurisa'
boolean ex: true
undefined ex: variable that has not been an undefined variable, a varianle called when it has not been defined first
null ex: a variableset to null


## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

<!-- Replace this comment with your answer -->
c = 7
operators: addition and assignment

## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- Replace this comment with your answer -->
var x = 4; x = 4
var y = 3; y = 3
x = y; // x = 3 - changed
y = 10; // y = 10 changed

values held by the variables change, variables themselves stay the same

## Question 4

```js
var weather;
weather = "sunny";  // the value of this variable is set to the string value "weather"
weather === "sunny"; // The value is operated apon to hold a strict value of exactly the string "sunny" in the strictest sense.
```

What are the values of these expressions?  Explain your answers.

<!-- Replace this comment with your answer -->
var weather;  //weather is undefined int his line, has no value yet
weather = "sunny";  //the variable = the string "sunny"
weather === "sunny"; // the variable is acted upon to equal precisely teh string "sunny" in the strictest sense.


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

