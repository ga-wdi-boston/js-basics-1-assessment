# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

integer are 1,2,3,4,5
strings are words like "bird", "car" "its all about the bejamins baby"
booleans are true and false
undefined
null


## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

tricky, the final value is 7. the equals sign in this context is assigned a value to c. The only actual operator is +.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
x = 3 on line 38
y = 10 on line 39
the variabes dont change but values change


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
undefined             -declared variable
weather = "sunny"     -assigned value to variable
true                  - compared weather value to "sunny"

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');
let answer = 1;

while (answer >= 1 || answer < 10) {
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
