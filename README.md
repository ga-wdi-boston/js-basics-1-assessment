![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

1. Number: eg. 1234
2. String: eg. 'abcd'
3. Boolean: eg. true
4. null: eg. null
5. undefined: eg. undefined


## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After the code executes, c is 7. The first operator is '=' which assigns the variable c to the value of c + d. And the second operator is '+' which adds the values of the two variables on either side of it.

## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

var x = 4;
///// x is 4. y is undefined.
var y = 3;
/////x is 4. y is 3.
x = y;
/////x is 3. y is 3.
y = 10;
/////x is 3. y is 10.

The variables are not changing, however, their values are changing.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

var weather;
undefined. This expression is undefined because you have only declared a variable, but not defined its value yet.

weather = "sunny";
"sunny". Here we are assigning the value of "sunny" to the variable weather. Not sure why the console returns "sunny" though.

weather === "sunny";
true. This evaluates to true because the operator === is asking whether the var weather is exactly equal to "sunny", which it is.

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

