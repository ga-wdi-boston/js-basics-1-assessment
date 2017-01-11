# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

The five primitive types are: number, string, boolean, null, and undefined.
number: 5;
string: 'Steve'
boolean: false
null: null
undefined: undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c = 5 + 2
c = 7

In this equation, you are reassigning the value of 7 to c.  The opertors in this example are + and =.  You complete the evaluation from right to left and first add 5 and 2.  Then the sum is assigned to the variable c.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x = 3
y = 10

The values change based on the order of execution.  Because x = y is below x = 4, it takes the value of 3.  Similarly, y takes on the value of 10 because it is reassigned after the intial let statement.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

First, the let statement tells us that weather is a variable.  In the next line, the string "sunny" is assigned to the variable 'sunny'.  The third line evaluates as true because the second line assigned weather the string "sunny".  Therefore, you are comparing two values to determine a boolean value.

weather === 'sunny'
'sunny' === 'sunny'
true

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
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
