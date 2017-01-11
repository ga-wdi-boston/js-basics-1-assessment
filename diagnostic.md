# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
-string: 'sup?';
-number: 5;
-BOOlean: did I scare you? TRUE
-null: null;
-undefined: undefined;

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c = 7
AKA: c = 5 + 2 because (5 (assigned TO c) + 2 (assigned to d)) is assigned to c on the 3rd line!

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
1st line: x=4 because the number 4 has been assigned to x by the operator '='
2nd line: y=3 because the number 3 has been assigned to y by the operator '='
3rd line: x=3 because the value of y is 3. ONLY Values are assigned.
4th line: the value assigned to y has changed to 10.
The name of the variables are the same but values assigned are changed.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
weather = "sunny"; value is a string (a word)

weather === "sunny"; 'sunny' is a value but this about truthy/falsy so True.
it's like sayin'sunny' === 'sunny' which is True.

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
