# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

String: The String global object is a constructor for strings, or a sequence
of characters.

Number: The Number JavaScript object is a wrapper object allowing you to work
with numerical values.

Boolean: The Boolean object is an object wrapper for a boolean value true or
false

Null: Means null.

Undefined: Means undefined.

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

7, `c = c + d;` take the values of c and d and add them together giving c a new
value
## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x = 3, y = 10, the variables do not change but there value does.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather = "sunny": returns weather as "sunny", weather was assigned "sunny"
with one equal sign.

weather === "sunny": returns a true statement because it is using three equal
signs asking if weather is actually equal to "sunny".

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
