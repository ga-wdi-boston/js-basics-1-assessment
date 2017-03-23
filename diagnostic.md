# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
Boolean: a true or false value, i.e. false
Number: 14
String: 'Hello!'
Null: No value, null
Undefined: A set variable with no content yet, i.e. let array [] will return undefined

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.
c = 5 + 2
c = 7
Operators: The = sign assings the value to the right to the variable on the left, i.e. c
The plus sign adds numbers or concatenates strings from left to right.  In this case it adds 5 + 7

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?
x = 4
y = 3
x = y - x = 3
x = 3
y = 10

<!-- solution below -->
The value of x is 3 and y is 10.  The variables don't change but their values do.  When assigning y to x, you are assigning the value of y to x

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.
weather = 'sunny' assigns the string 'sunny' to the variable weather.  It will evaluate to 'sunny' because the variable was instantiated on the previous line.
weather === 'sunny' will evalue to true.  The === compares weather and 'sunny' and returns true if they are identical, which they are.

## Question 5

```js
'use strict'
// We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer
let solution = 5

while (answer !== 5) {
  answer = ask("Enter a number between 1 and 10: ")
  console.log(answer)
  if (answer == 5) {
   console.log("You guessed it!")
   break
 } else if (answer < 1 || answer > 10) {
   console.log("The guess must be between one and ten")
 } else {
   console.log("Close but no cigar")
 }
}

```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
