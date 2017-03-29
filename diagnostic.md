# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

String: "Ross"
Number: 42
Boolean: true, false
Undefined: any variable that has been declared but not assigned a value
Null: is an assignment value, representing "no value"

## Question 2

```js
let c = 5
let d = 2
c = c + d
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

the new value of c will be 7.
first c + d evaluates ( 5 + 2), and then the assignment of the new value takes place, and the new value for c is 7.

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
The variables don't change, but their values do.
After the first two lines, x = 4 and y = 3
after the third line, with x = y, the value of x is assigned the current value of y (3)
On the last line, the value of y is assigned the new value, 10.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.
weather = "sunny" evaluates to 'sunny', because it is simply assigning the string value "sunny" to the variable "weather"

weather === "sunny" will return the boolean value "true", because === checks for equality.

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
