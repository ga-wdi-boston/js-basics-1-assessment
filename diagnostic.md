# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number: 4
string: 'toothpaste'
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

7.

The = sign is the assignment operator. It assigns the value to the right to
the value on the left, so c is assigned the value of (c + d).

The + operator is the addition operator. This simply adds the
left value to the right value, so c is added to d for a sum of (c + d).


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
The variable NAMES never change, but their values certainly do.
See below for line-by-line variable values.

line 1: x = 4; y is undefined;
line 2: x = 4; y = 3;
line 3: x = 3; y = 3;
line 4: x = 3; y = 10;



## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

let weather; will evaluate to undefined. The variable is declared but not
assigned a value

weather = "sunny"; assigns the string "sunny" to the weather variable so
it will evaluate to "sunny".

weather === "sunny" evaluates to true since the current value of weather
is indeed the string "sunny". For clarity: weather is not assigned the value
of true, weather is still "sunny", but this line as a whole will evaluate
to true.



## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my number: ");
  if (answer < 1 || answer > 10) {
   console.log("Guess must be between 1 and 10");
   break;
 } else if (answer === 7) {
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
