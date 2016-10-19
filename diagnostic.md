# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number: 3
String: ‘Benjamin’
Boolean: true
null: null
undefined: undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

Value of c is 7.

The '=' operator assigns values to variables and the '+' operator adds them together.




## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->

Value of x is 3, value of y is 10. The variables themselves do not change, although their values are overridden because we are using the 'let' variable type where the value of variables corresponds to the last value assigned.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The second expression assigns the string of "sunny" to the variable weather, which returns the string "sunny".
The third expression is a logic expression that want to know if the exact value of the variable weather matches that of the string "sunny", which it does because of the second expression. This expression returns the value "true" since the equivalency "sunny" === "sunny" holds true.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '7') {
   console.log("You guessed it!");
   break;
 } else if (answer >= 10) {
   console.log("Guess a number between 1 and 10.")
 } else if (answer <= 1) {
   console.log("Guess a number between 1 and 10.")
 }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
