# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1
Please list the JavaScript primitives and give one example of each.

string "lemon"
 number 1
 boolean false
 null a value to represent no value
 undefined a variable that hasn't been assigned a value;
 symbol
## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

After the code evaluates c will equal 7.
= assigns what is on the left of it to the expression on the right.
+ adds the operands on either side to each other. With numbers it peforms basic
addition, with strings it performs concatenation. if the + operator is unary
it attempts to convert its operand into a number if it cannot be converted into
a number it willk return NaN. If it is binary and one operand is a string
the entire expression will evaluate to a string
## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
let x = 4 --> x = 4 y = undefined
let y = 3 --> x = 4 y = 3
x = y ----> x = 3 y =3
y = 10 ---> x = 3 y = 10

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

weather = "sunny" ---> "sunny", we assinged the variable weather to the string 'sunny'
weather === "sunny" ----> false, we checked to see if weather was equal to the string 'sunny' which it is not.

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
