# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
- number: 1.5
- string: 'hello, world'
- boolean: true
- null: null
- undefined: undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c = 7
+ is the addition operator; it adds values together from left to right
= is the assignment operator, it assigns the value of the righthand side of the expression to the lefthand side


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
line 1: x = 4
line 2: y = 3
line 3: x = 3, y = 3
line 4: x = 3, y = 10

The variables remain x and y. Their values change throughout the code.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
The first expression declares a variable but does not assign it a value; it returns undefined.
The second assigns the string "sunny" to the variable weather.
The third checks to see whether the value of the weather variable is strictly equal to "sunny" (which it is; this returns true).


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
