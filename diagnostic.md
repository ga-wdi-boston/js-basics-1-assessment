# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
The JS primitive types are numbers, strings, boolean, null, and undefined.
## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.
First, the expression to the right of the assignment operator (the '=' sign) will execute: c + d which will be 5 + 2, resulting in 7
Next, the expression that was executed (5 + 2) will be assigned to c, resulting in c now being assigned the new value of 7:
  c + d
  5 + 2
  c = 5 + 7
  c = 7

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
variable x will newly have the value 3 assigned to it, and variable y will have the newly assigned value of 10 assigned to it. These values differ from what these variables were initially declared as because only the most recently assigned value will belong to that variable.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.
weather = "sunny" is assigning the value of the string "sunny" to the weather variable
weather === "sunny" will evaluate to TRUE, because the expression is comparing the value stored in it to the string/value that is following the ===, which would result to either true or false, and in this case it it true because the value stored in weather is equal to "sunny".

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess a number from 1 to 10! ")
  if (answer === '2') {
   console.log("You guessed it!")
   //break
 } else if (answer >= 1 || answer <= 10){
   console.log("The guess needs to be between 1 and 10!")
 }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
