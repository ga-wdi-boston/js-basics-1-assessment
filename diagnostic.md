# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number: 1
string: 'this is a string'
boolean: true
undefined: var a;
null: null;
symbol: Symbol();


## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.
c == 7;
The '=' sign assigns the value on the right hand side to the variable name on the left.
The '+' operator performs addition.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
let x = 4;
(x == 4, y == undefined)
let y = 3;
(x == 4, y == 3)
x = y;
(x == 3, y == 3)
y = 10;
(x == 3, y == 10)

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
'let weather' is undefined.  Variable declarations  do not
return a value.
'weather = "sunny"' is equal to "sunny".  Variable assignments return the
assigned value.
'weather === "sunny"' is true.  The '===' evaluates to a boolean expression.
It is true because we assigned the string value "sunny" to the variable 'weather'.
## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if(answer <= 1 || answer => 10){
    console.log('You guess needs to be between 1 and 10')
  }
  if (answer === 4) {
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
