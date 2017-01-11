# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number(-0), String('name'), boolean(true), null(null), undefined(undefined).

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c = 7. Operator '=' assigns value. Operator '+', in this case, is addition.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

y=10

x=3

The variables do not change. The value of y is assigned to x, so x = 3. Value of y becomes 10.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

let weather;'s value is undefined becasue we did not assign the variable a value.

 The string "sunny" is assigned to the weather variable.

 weather === "sunny"(string) has a boolean value of true.


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = '5';

while (answer ) {
  answer = ask('Guess a number between 1 and 10');
  if (answer === 5) {
   console.log("You guessed it!");
   else if (answer <= 1 || answer >=10){
     console.log('Guess needs to be between 1 and 10');
   }
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
