# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
Number -0
String 'the non-empty string'
Boolean only produces true or false
null null
undefined undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.
The final value of c is 7. The final line of the code is assigning a new value
for c based on two previously assigned varialbles.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
After line 35 each value is 3 since the code reads from right to left
After line 36 y is 10 and x is 4. Since x wasn't stated with it's new value of 3
it reverts back to 4.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
Line 50 is stating that the vairable weather is "sunny"
Line 51 weather is strictly equal to "sunny". "sunny" expressed any other
way will not affect the code. For example SUNNY or Sunny

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my number? ");
  for (let i => 1; i <= 10; i++)  {
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
