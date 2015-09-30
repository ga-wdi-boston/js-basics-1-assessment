![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

The 4 primitives are
1) number - ex is 67
2) string - ex is "hello world"
3) boolean - ex true
4) null - ex is null
5) undefined - ex is undefinded

## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c = 7. the oporators are read in their order and since there are no higher priority operators such as *, (), /, you read this as c + d and the answer becomes the new value of c.

## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x = 3 and y = 10. The variables do not change as they are just the name of the value but their values change.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

I am unclear of what values are in this question. I know that the 1 = operator means that the varable weather is the string "sunny". the 3 ==== means that the variable weather is strictly eqaul to the string "sunny".

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

