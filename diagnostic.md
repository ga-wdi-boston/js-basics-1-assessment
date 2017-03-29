# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number ex, -0
String ex,"1,2,3,4"
Boolean ex, true
null, ex null
undefined, ex undefined

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.
c = 7
c is a variable
+ is an operator
c = c+d is an expression


## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->

line 1: x = 4
line 2: y = 3
line 3: x = 3
line 4: y = 10, variables do not change, but their values do
## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers. Both evaluate to "sunny". "Weather = sunny" defines the value of the variable, and "weather === sunny" compares the values


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer === < 1 && > 10) {
   console.log("You guessed it!")
   break
 } else {
   console.log ("Please enter a number between 1-10.")
 }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
