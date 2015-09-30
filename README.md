![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

The five JavaScript primitives are number, string, boolean, null, and undefined

Examples:

2 is a number
"mary" is a string
true is a boolean
null is... null!
undefined is undefined


## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of c after the code executes is 7.

In the last line, the operator "=" is an assignment operator. In this case, the "=" operator assigns to c the result of what the expression to the right of the "=" operator evaluates to.

the "+" operator (I believe) is the addition operator rather than the numeric conversion (unary?) operator because we are evaluating two variables that have been assigned number values. If the variable c was initialized with a string value, I think that '+' would be considered a numeric conversion operator. I'm a bit shaky on this concept---numeric conversions is a new concept!


## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

OK. So the variable x is assigned 4 in the first line and the variable y is assigned 3 in the second line. When these two lines run in the node REPL environment, they both return a value of undefined, but if I console.log(x) and console.log(y) they console prints out the values assigned to x and y, which are 3 and 4 respectively.
In the third line, x is assigned the value of y. Therefore, x results to 3.
In the fourth line, y is assigned the value of 10, to x results to 10.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

So we declare a variable weather in the first line, but don't assign a value yet (other than null?).
In the second line, weather is assigned the value of the string "sunny", so weather is sunny.
In the third line the variable weather is evaluated (compared for strict equality) against the string "sunny". This is a boolean evaluation. So the variable weather has already been set to "sunny" in the previous line, and "sunny" === "sunny", therefore that line evaluates to true.

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

