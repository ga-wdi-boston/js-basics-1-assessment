# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number: 92
String: 'Ninety-Two'
Boolean: true
undefined: undefined
null: null

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After this code executes, the value of c will be 7. The + operator adds the two
operands on either side of it (c and d). The = operator assigns the value on the
righthand side (7) to the variable on the lefthand side (c).


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
  x   y
  4   not declared
  4   3
  3   3
  3   10

  I'm not entirely sure what "Do the variables change?" means because they are
  always x and y, but their values certainly change, as shown in the table
  above.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather is undefined. It has been declared, but it hasn't been assigned a value.
weather is "sunny". It has been defined the string "sunny".
weather is strictly equal to "sunny", which is true. This expression is a test
to check if the value on the lefthand side is strictly equal to the value on
the righthand side. In this case, the expression is true.

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
