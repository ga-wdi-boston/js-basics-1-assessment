# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number: 1
String: 'Herb'
boolean: true, false
null: null
undefined: undefined
## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

7

The values of c and d are added together, then assigned to c.
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```
x is still 4.
y is 10.
x is only pointing to y.
After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```
The = operator assigns the String "sunny" to weather.
The === operator compares weather and the String "sunny" and returns a boolean value.
What are the values of these expressions?  Explain your answers.


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (1 >= answer >= 10) {
   console.log("You guessed it!");
   break;
  }
  else {
    console.log("The guess needs to be between 1 and 10. Sorry, try again!"");
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
