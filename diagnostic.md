# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number = 1
boolean = true
string = 'hello world'
null = null (an empty set.  Falsey.  Not zero or NaN.  Just null)
undefined = undefined (declaring a variable without assigning it: let x;

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c === 7 by the end of the program.
+ is the addition operator which adds numbers in this case
= is the assignment operator which stores a value into a variable

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

let x = 4 (x is undefined)
x is 4

let y = 3 (y is undefined)
          (y is 3, x is 4)

x = y (x is 3, y is 3)

y = 10 (x is 3, y is 10)

The values of the variables change whenever we assign or reassign them.  The variables themselves do not change, but you can point them to another variable.
## Question 4

```js
let weather;          // weather is undefined
weather = "sunny";    //sunny is being assigned to the variable weather
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather === "sunny" evaluates to true.  "sunny" is stored into weather, and it is both equal in value and type to "sunny" on the other side of the expression. === is the strictly equals operator and returns a boolean true if both sides of the expression are equal in type and value.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer < 1 || answer > 10) {
    console.log("guess needs to be between 1 and 10 inclusive");
  }
  if (answer === '3') {
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
