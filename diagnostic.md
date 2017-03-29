# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
the primitives are:
-strings | ex: "hi"
-numbers | ex: 8
-booleans| ex: true
-null    | ex: null
-undefined | ex: undefined

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.
c would equal 7. In the line c = c+d everything to the right of "c=" would first be
evaluated. Since we assigned a value to the variables c(which is 5) and d(which is 2)
it would now look like: c = 5 + 2. We would then add 5 and 2 to get 7 after which javascript would then assign to c

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
x would now equal 3, y would now equal 10

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.
This would evaluate to true. A single equal sign assigns the value to a variable.
In this case the string "sunny" was assigned to the variable weather. A triple equal
sign checks to see if the two are equal. In the line after it is checking to see
if the variable(which holds the string "sunny") equals "sunny" which is true

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer >= 1 && answer <= 10) {
   console.log("You guessed it!")
   break
  }
  else {
    console.log("The guess needs to be between 1 and 10")
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
