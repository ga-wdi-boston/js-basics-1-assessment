# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Primities are values with no properties (pretty booring but necessary)

number = 1
string = 'Hello, World!'
boolean = (True || False) {True and False are the only two values}
undefined =
  returns undefined as no value has been assigned
null is an object in Javascript and shouldn't really exist as it is an object that represents an object that does not exist {a bit of a contradiction}


## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c will become 7
  = is an assignment not an operator {== would be an operator}
  + is the operator that will add the assigned values of c and d; which are 5 and 2 and therefore 7 is assigned to c at the end
  +
## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

first line x is four
second line: x remains four and y becomes 3
third line: x becomes 3 and y remains 3
fourth line x remains 3 and y becomes 10


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

undefined
weather is assigned sunny {a string}
weather is assigned sunny that must be of the primitive vaue type string

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = '3';

while (answer !== '3') {
  answer = ask("Guess my secret? ");
  if !(10 >= answer >= 1) {
   console.log("The answer needs between 1 and 10.!");
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
