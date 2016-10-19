# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
Number: 5
String: "This is a string!"
Boolean: true
Object: {key: value}
Array: ["an", "array", "of", "strings"]

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.
A single '=' is an operator that assings a value to whatever preceeds it. That value will be whatever follows the '='. A single '+' is an opperator which combines whatever immediately preceeds it with whatever immidiately follows it. The result of all this is that by the end of the code 'c' will be equal to 7.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

line 1: x = 4, y is not yet defined
line 2: x = 4, y = 3
line 3: x = y, y = 3, therefore x = 3
line 4: y is changed to 10, however x remains as 3 since 'numbers' do not automatically change with variables they have previously been set equal to as they merely gains that variable's value, rather than becoming a link to it.

<!-- solution below -->


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

expression on line 1: a dynamic variable 'weather' is created, but is not given a value
expression on line 2: the variable 'weather' is given the value "sunny"
expression on line 3: the opperator '===' is used, the function of which is to check if whatever preceeds it, in this case the variable 'weather', has the same type and value as whatever follows it; in this case the string "sunny". In this instance the two are of the same type and value and therefor the operator '===' will return a value of 'true'.


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
