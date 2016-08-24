# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

-->number- 20
string- 'this is a string'
boolean- false
null- null
undefined- undefined
## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

-->the value of c is 7. the operators are + and =. the + works from right to left to add d to c. the = assigns the value to c.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

-->first line- x = 4
second line y= 3
third line y = 3, x = 3
fourth line y = 10

the variables in the code are always x and y, but their values are being re assigned by the = operator.



## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

-->the values of the expressions are "sunny" and "sunny" because they are assigned to the variable weather

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'Guess the Number';

while (answer >= 4) {
  answer = ask("Guess the number between 1 and 10!");
  else while (answer <= 4) {
    answer = ask("Guess the number between 1 and 10!");
  if (answer === 4) {
   console.log("You guessed it!");
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
