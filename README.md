![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

number: 1, 2, 3, 4
string: "meng is my hero"
boolean: true, false
null: null
undefined: undefined

## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c evaluates 7 after execution. In the last line, js will execute the plus operation on the right side of the equal sign, and get the value 7 to assign back to the variable c.

## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x = 3, y = 10 after execution. variables dont change, only their values change. Line 3 assign the original value of y (3) to x, so x evaluates 3. Then 10 was assigned to y variable in line 4, so y = 10.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

"=" is the assign symbol, so line 2 assign string "sunny" to variable weather. "===" is the strictly equal symbol, it compares the type and value of both sides and returns boolean values true or false. In this case, line 3 evaluates TRUE.

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

