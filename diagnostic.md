# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

undefined ['']
null [null]
boolean [true/ false]
string ['words']
number [-200]

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.
after code runs c is 7
operators are + and =
+ sign declares a value (the result of c+d), = sign assigns that value to c

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

the value of x=y (mutable)
the value of y=10 (immutable)


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";


What are the values of these expressions?  Explain your answers.
true
weather="sunny"; assigns the string 'sunny' as the value of weather.
weather ==="sunny"; asks is the value of weather is the same as the string "sunny"; which is true.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');


```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
