![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Diagnostic for JavaScript Fundamental

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.
You may use any resource, other than someone else in the classroom,
to help you complete this diagnostic.

You should save your answers in this README.md file,
except for your answer to question 5
which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

The JavaScript primitives are:
Number e.g. 2,
String e.g. 'hello',
Boolean e.g. true,
null e.g. null,
undefined e.g. undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?
Please identify the operators in the last line of this program `c = c + d;`
and explain what they do.

After this code executes the value of c is 7.

In the last line, we have the assignment operator `=`, which assigns the value
of the expression on the right to the variable on the left and returns that
value. Inside the expression on the right we just have `+` addition, which
adds the values of `c` and `d` before assigning that to the variable on the
left of the assignment operator.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes,
what are the values of x and y?
Do the variables change?
Do their values?

<!-- solution below -->
After the first line we have just `x` which is equal to 4.
After the second line we have `x` still equal to 4 and `y` equal to 3.
After the third line we have `x` and `y` both equal to 3.
After the fourth line we have `x` still equal to 3 and `y` now equal to 10.
The variables are the same throughout, but the values assigned to them change
as shown.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

`let weather;` returns an undefined variable "weather".
`weather = "sunny";` has the value 'sunny', a string, which now `weather` is
assigned to.
`weather === "sunny";` returns true because weather has the value 'sunny'.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === 'SeCrEt') {
   console.log("You guessed it!");
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice
 between 1 and 10 instead of the string `'SeCrEt'`.
 If `answer` isn't >= 1 and <= 10, use `console.log` to display a message
 saying that the guess needs to be between 1 and 10.
 Save your code in the file called `bin/diagnostic.js`.
 You can test the code with `node bin/diagnostic.js` in your Terminal.

---

Commit and push your changes.

Submit a pull request.
