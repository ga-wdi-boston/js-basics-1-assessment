# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number: 7
string: 'string'
boolean: true or false
null: null (its only value)
undefined: undefinined (its only value, a value that has not yet been assigned)

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

After the code executes, the value of c is 7
= (assignment operator) assigns the value
+ (addition operator) adds two numbers in this case, since we are dealing with numbers, not strings

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
let x = 4
//x = 4 at this point
let y = 3
//y = 3 at this point
x = y
//x = 3, y = 3 at this point
y = 10
y = 10 now, but x = 3 still

after x is assigned the value of y, it does not keep the same value of y if y is changed again.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

the = assigns <weather> with the value of <"sunny">
when <weather === "sunny"> is executed, it's comparing them and asking if weather is equal to sunny, which is true, so it will return true

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
