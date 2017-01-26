# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number - 1
String - 'Hi'
Boolean - True
Null - null
Undefined - undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program
`c = c + d;` and explain what they do.

C equals 7 after the code executes. There are two operators in the last line, '=' and '+'.  = Assigns the result of
'c + d' to the variable, c.  The '+' adds the value of assigned to d to the value assigned to c.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

After the code executes, x = 3 and y = 10.  The variables don't change, they are still x and y, but their values both
have changed.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The value of the first line is undefined, it just establishes that the variable weather now exists.  After the second
line, the value of weather equals the string 'sunny'.  The value of the third line is true.  Weather = 'sunny' and the
expression 'sunny' === 'sunny' is true.


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Name a number between 1 and 10:  ");
  if (answer >= 1 && answer <= 10) {
   console.log("Thanks!");
   break;
 }
  else {
    console.log("Sorry, that is not a number between 1 and 10.  Try again.");
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
