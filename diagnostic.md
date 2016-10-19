# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number: 1
String: 'my string'
Boolean: true
Null: null
Undefined: undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After the code executes c is equal to 5
= is an assignment operator; it will assign whatever is on the right hand side
  to what is on the left hand side (such as a variable)
+ is an addition operator; it will add whatever is on the right side to what
  is on the left side, sometimes doing type conversions to do so.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
The value of x is: 3
The value of y is: 10

The variables themselves do not 'change', but their values do as they are assigned
new values.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather = "sunny"; is setting weather's value to "sunny"
weather === "sunny"; would return true as it is comparing weather's value to "sunny"

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 7;

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer < 1 || answer > 10) {
    console.log('The guess needs to between 1 and 10!');
  } else if (answer === 7) {
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
