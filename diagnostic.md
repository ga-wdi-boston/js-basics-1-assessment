# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

javascript primitives are Number, String, Boolean, Undefined, Null

numnber example: 5
String example: 'My name is Stanley'
Boolean: True or False
undefined: undefined
Null: Null


## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of c will now equal 7 because "let" indicates that the variable can
be changed as opposed to "const" which remains constant.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

Their variables change after being after given a value. x equals 3 and y equals
10

<!-- solution below -->


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

I tested them in my terminal and got "sunny" after entering the weather equals
but when I entered weather equals(3x) , I got "true"


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
