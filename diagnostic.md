# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

- Number: -0, NaN, Infinity
- String: '' ,  "The non-empty string.", "nikki"
- Boolean: true, false
- null: Only value for this tiype
- undefined: Only value for this type

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

c = 5 + 2
c = 7
Here, we add c and d, and the answer gets reassigned to c. Therefore, instead of c = 5,
c has been reassigned to 7.

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
No, the variables do not change, as they stay x and y.
Yes, the values have changed - the variables have been reassigned new values.
x = 3 (Here, x is being reassigned to y, which equals 3)
y = 10 (Here, y is being reassigned to 10)

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

weather = "sunny"
  Here, the variable "weather" has been assigned to the string value, "sunny".

weather === "sunny"
  Here, the result of this expression results in true, because we are checking to see if
  the variable "weather" is equal to the string "sunny".

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer >= 1 && answer =< 10) {
   console.log("You guessed it!")
   break
 } else {
   console.log("The guess needs to be between 1 and 10")
 }
}
```


Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
