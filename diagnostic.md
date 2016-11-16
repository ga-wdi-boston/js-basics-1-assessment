# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
JavaScript primitives:

1. String -- ex) "Julie", "Huy", "Khun"
                  var name = ("Julie", "Huy", "Khun")
2. Number -- 1, 2.5
3. Boolean -- true || false
4. Null -- Null
5. Undefined -- Undefined


## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After this code executes that value of c is 7. We are adding the sum of the values of variables c and d.


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

After each line of code executes, the values of x and y are:
x = 3
y = 10

The variables do not change but the values do.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The value of weather = "sunny" is "sunny"
The value of weather === "sunny"; is false

The value is "sunny" because we are declaring that the variable "weather" is "sunny"
The value of weather === "sunny" is false because true === false therefore false


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
