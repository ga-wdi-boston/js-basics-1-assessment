# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
number - 1
string - ''
boolean - true
null - null
undefined - undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.
The value of c after the code executes is 7. The two operators in the last line are an assignment variable (=) which is used to assign values to variables (e.g. c and d in this case) and the addition operator which can be used to add things together (such as two numbers or the concatenation of two strings)


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x is equal to 3 and y is equal to 10. After each initial assignment both the values of x and y change from 4 and 3 to 3 and 10 respectively.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The value of weather is 'sunny'. The value of the 'weather === 'sunny' expression is true.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== 10) {
  answer = ask("Guess my number? ");
  if (answer === 10) {
   console.log("You guessed it!");
   break;
 } else if (answer < 1 || answer > 10)  {
   console.log('answer needs to be between 1 and 10');
 }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
