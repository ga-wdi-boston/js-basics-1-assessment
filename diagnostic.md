# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Number = 1;
String = 'Matt';
Null = is a value intentionally set to nothing;
Undefined = a valute that has yet to be defined;
Booleans = true, false;

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After the code executes, the value of c = 7.
Operators in the last line of code:
"+": adds the two variables, 'c' and 'd', together
"=": sets the value of 'c' to the result of the addition of 'c' and 'd', via the '+' operator

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
Both 'x' and 'y' are now set to the value of '10'.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The 1st 'weather' expression sets 'weather' equal to the value associated with "sunny"
The 2nd 'weather' experssion sets the absolute value of 'weather' to 'sunny' as a string



## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = '1';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '1') {
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
