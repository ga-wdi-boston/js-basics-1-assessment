# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

<!-- Q1 ANSWER:  Undefined, string, Boolean, number, NULL -->


## Question 2

```js
let c = 5
let d = 2
c = c + d

```

<!-- Q2 ANSWER:  After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

c = 7 when finished
operators in the last line are (1) the EQUAL SIGN (assignment to a variable or object) and
(2) the PLUS SIGN (adds the values stored in c and d since values stored are numbers)
 -->

## Question 3:

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- Q3 ANSWER:  value of x:  3, value of y:  10-->


## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

  //
<!-- Q4 ANSWER:  true, variable called weather IS EQUAL TO the string "sunny" (this returns true or false)-->

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer === 'SeCrEt') {
   console.log("You guessed it!")
   break
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
