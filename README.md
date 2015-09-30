![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

1. Number
2. String
3. Boolean
4. Undefined
5. Null

## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c will evaluate to 7.
= is equals, or in this equation specifically is more like 'get'. The right ride gets evaluated first (5 + 2). Once we evaluate the right side to 7, we assign the number 7 to the variable c, which will overwrite its previous value of 5.


## Question 3

```js
var x = 4;
var y = 3;
x = y; =====> This changes our value of x. So x is no longer 4, but is now 3.
y = 10; =====> same thing as above. y is no longer 3, it is 10.
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x = 3
y = 10
The variables do NOT change but their values do.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

var weather; ----> this line is just declaring that the variable weather exists.
weather = "sunny"; ----> above, weather was 'undefined'. However, now the value of weather is a string, "sunny"
weather === "sunny"; This line is testing. === this operator roughly means 'is equal to?'. In this case weather IS equal to sunny so this is TRUE.


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

