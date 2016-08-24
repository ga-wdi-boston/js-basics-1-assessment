![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number: 44
String: "hello"
Boolean: true
Null: null
Undefined: undefined


## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.
c === 7;
If c === 5 and d === 2, then c on the left side of the expression is being
reassigned after evaluating c + d. Thus, c + d === 7


## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?
x === 3
y === 10

x has been reassigned to y, which === 3. y is then reassigned to 10. x is
not reassigned again and remains === 3

.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
1) a variable called weather has been declared
2) the variable weather has been assigned to "sunny"
3) weather has been evaluated to "sunny" (strict equality)


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



Commit and push your changes.

Submit a pull request.
