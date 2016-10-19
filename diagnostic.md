# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

boolean: true
string: "word"
number: 3
null: null
undefined: undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

after this executes, the value of c is 7.

+ is the addition operator -- it adds the values before and after it.

= is the assignment operator -- it assigns the value on its right to the
variable on its left


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
40: x's value => 4, y's => undefined
41: x => 4, y => 3
42: x => 3, y => 3
43: x => 3, y => 10

the variables do not change, but their values do

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

line 59: weather => undefined. It has been declared, but not assigned a value
yet.
line 60: weather => "sunny". on this line, weather is assigned the string value
"sunny"
line 61: true. === is an equality evaluation. It tests to see if the values on
its left and right are the same. Since they are, this line will return the
boolean value true


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
