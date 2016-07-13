# JS Basics Diagnostic

You should save your answers in this diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

String = 'This is a string'
Number = NaN
Boolean = false
Undefined = a variable that has been declared but not assigned a value
Null = a variable that has been assigned the value of Null

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After it executes c = 7

The last line assigns c a new value of c's current value plus d's current value


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
after line 1 x = 4
after line 2 y = 3
in line three x is assigned the current value of 7 so after this line x = 3
in the fourth line y is assigned a new value of 10 so now y = 10 but x still equals 3

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

let weather declares a variable leaving is as Undefined
the second line assignd the string value 'sunny' to the variable weather
the third line is comparing the value of weather to the string 'sunny' which would evaluate to true


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
