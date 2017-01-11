# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number - 5
String - 'Hello'
Boolean - true
null - null
undefined - undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of c is 7.  the '+' operator adds the values stored in the variables c and d.  The '=' (assignment) operator assigns the value on the right side of the operator to c.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
The value of x is 3.  The value of y is 10.  The variables do not change, but their values do.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The first expression assigns the string "sunny" to the variable weather, so the value of weather is "sunny".
The second expression asks if the values on each side of the operator are the same.  The value of weather, "sunny", is the same as "sunny", so the expression evaluates to true.


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer < 1 || answer > 10) {
    console.log('The guess needs to be between 1 and 10');
    ask("Guess my secret? ");
  }
  else if (answer === '7') {
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
