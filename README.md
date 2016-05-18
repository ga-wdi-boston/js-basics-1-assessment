![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Diagnostic for JavaScript Fundamental

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this diagnostic.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

The five primitives are as follows: numbers {such as 5}, strings {such as 'example'}, Booleans {such as true}, undefined {which is simply an undefined value, such as calling x when no value of x has been given}, and null {which is simply a null response}.

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of c after this code executes is 7. The operators are '=' and '+'. The '+' evaluates first and adds the values on either side of it, in this case c and d. The '=' operator evaluates second and sets the value on the left to be the value on the right if/when called again.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

After 'x = y', x = 3 and y = 3. After 'y = 10', x = 3 and y = 10. The variables themselves do not change but their values do.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

Since a single '=' is an assignment, it just means the variable 'weather' has the value "sunny". Thus, the value of 'weather = "sunny"' is 'sunny'. However, the '===' operator is a strict equality and essentially is asking if the element on the left is equal to the element on the right, which can either be true or false. Thus, the value of 'weather === "sunny"' returns 'true' because of the previous expression setting 'weather' equal to "sunny". 

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

Change the code from this question so that it tests for a number of your choice between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and <= 10, use `console.log` to display a message saying that the guess needs to be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.  You can test the code with `node bin/diagnostic.js` in your Terminal.

---

Commit and push your changes.

Submit a pull request.
