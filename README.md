![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

a)
1) Null (Null)
2) Undefined (Undefined)
3) String ("Hello, world!")
4) Boolean (true or false)
5) Number (0, -0)

## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

a) c=7, the operators are + (addition) and = (allowing c to get the new value returned by the operation).  We work right to left so we perform 5 + 2 and then assign it to c.

## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

a) The variables do not change, only their values which both are 10 by the end of the code.  Initially x started with a value of 4 and y with a value of three.  The third line assigned a value of 3 (since x now equaled y, which had a value of 3) and then, y was changed to 10, and since x=y, x and y were assigned a value of 10.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The second line of the code uses = and by doing that it assigns the value of sunny to the word weather.  So anytime you input weather into the REPL it will output sunny.  The third line is asking us to return a boolean value (true or false).  Since the phrase weather has been assigned a value of "sunny", that should return a true statement.

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

