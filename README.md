![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

> Number (5)
> String ("Hello")
> Boolean (true)
> Null (null)
> Undefined (undefined)




## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

> the value of c is: 7
> The "=" is the assignment operator. It will first evaluate the expression to the right and assign the resulting value to the variable on the left.




## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

> The value of "y" is 10.
> The value of "x" is the variable "y", which evaluates to 10.
> The variables themselves do not change, but their values do.



## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

> var weather;
> This expression declares the variable weather, and weather's value is currently undefined.

> weather = "sunny";
> The value of this expression is "sunny". The assignment operator takes the value to the right and assigns it to the variable on the left.

> weather === "sunny";
> The value of this expression is the boolean value, true. The variable to the left of the "===" evaluates to the string "sunny" and is compared to the value on the right to see if they are exactly the same, in which case they are. Hence a result of true.





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

