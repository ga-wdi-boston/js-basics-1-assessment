# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
Number:	-0
String:	''
Boolean:	true
null:	null
undefined:	undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After the code executes, the value of c is 7. The operators are = and +.
The = operator is for assignment and changes the value of a variable.
In this case, setting the value of the variable C.
The + operator is for addition and is used to add or concatenate.
In this case, this combines c + d or 5 + 2 to get 7.
Another use case would be to concatenate strings (e.g. "hello " + "world")

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

let x = 4; // x is set to 4 and x doesn't exist yet
let y = 3; // y is set to 3 and no change to x
x = y; // x is set to 3 (current value of y) and no change to y
y = 10; // y is set to 10 and no change to x

The assignment of y to 10 does not change the previous value.
This only took the current value of y at that point in time (e.g. 3).

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather is equal to "sunny"
weather === "sunny" evaluates as true

let weather; // declares the variable weather with value of undefined
weather = "sunny"; // assigns the string "sunny" to weather
weather === "sunny"; // evaluates if weather is equal to "sunny" (which is true)

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
