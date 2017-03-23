# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number: 23
string: 'Michael Jordan'
boolean: False
null: null
undefined: undefined

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

The value of c should be 7. In the last line, the equal sign reassigns c to equal the original c value plus the d value. The plus sign just adds c and d.

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
Once the code is executed, x equals 3 and y equals 10. The variables x and y themselves don't change but their values do.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.
The expressions evaluate to the follow:
    sunny
    true

You're creating a variable called weather and setting it equal to the string "sunny".
Then, you're checking to see whether the variable weather equals "sunny" and indeed it does, therefore it returns "true"


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess a number between 1 and 10!")
  if (answer === 7) {
   console.log("You guessed it!")
 } else if (answer <= 1 || answer >= 10) {
   console.log("You're close, but please try again!")
 } else {
   console.log("You must guess a number between 1 and 10.")
   break
 }

}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
