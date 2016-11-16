# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number    --> 5.0
string    --> "hello"
boolean   --> true
null      --> null
undefined --> undefined


## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c = 7

there are two operators, = and +

+ is used to add c and d, while
= assigns a value to c (i.e. c+d)

so:

c = c+d --> 5 + 2 --> 7



## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->

1) x=4, y=undefined
2) x=4, y=3
3) x=y=3, y=3
4) x=3, y=10



## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.


weather = "sunny"  assigns the value "sunny" to the variable weather

weather === "sunny" is a comparison, does the variable strictly equal "sunny". This evaluates to true


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my number? ");
  if (answer > 10 || answer < 1) {console.log("Needs to be between 1 and 10");}
  if (answer === 5) {
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
