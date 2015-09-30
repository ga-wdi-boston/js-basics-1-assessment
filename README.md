![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number: -0, NaN, Infinity, 12

## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c = 10, in the first two lines the "=" is used as an assignment operator, meaning it gives var c the value of 5 and var d the value of 2. In the 3rd line, the addition sign is used to add the values of var c and d together and after that has been done, the equal sign will assign c to the sum.

## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

After each line of code executes, the value of x will change to 3. This is because it is first given the value of 4, but then since it is set equal to y (which has the value of 3), it will change to that value. At the end, y is reassigned with the value of 10.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

In the first line, the variable weather is undefined. In the second line, there is one equal sign used, which means it has been assigned the value of "sunny". In the third line, it should evaluate to "true" because the use of three equal signs means that is a strict equality (meaning is it trying to see if the value of weather is equal to "sunny").

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

