# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number: 5
string: 'I am a string.'
boolean: true
null: null
undefined: undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of 'c' is 7. the two operators in the last line of code are the addition operator, +, and the assignment operator, =. Addition is a binary operator that performs mathematical addition if given two numbers, and concatenation if given anything else. The assignment operator evaluates the right side and finds a value which it then stores in memory and assigns the left side as a pointer to that value.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

The value of x is 3 and the value of y is 10. The variables change in the sense that the value they are assigned to different values than they were initialized with.

<!-- solution below -->


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
`
undefined
'sunny'
true
`

The first line will have a value of undefined because declaring a variable without assinging it a value will default to undefined. In the second line, the variable is assigned a value and thus returns that value, in this case 'sunny'. The third line uses a comparison operator, which returns true if the two sides are equal, which in this case they are.

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
