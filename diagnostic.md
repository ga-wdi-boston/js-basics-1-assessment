# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

- Number (7)
- String ('hello')
- Boolean (true)
- Null (null)
- Undefined (undefined)

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

The value of c is 7.

= is an operator. It will give the variable c a value of c + d.

The addition sign (+) is an operator. It will provide the sum of c and d.

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

let x = 4 --> variable x will hold a value of 4
let y = 3 --> variable y will hold a value of 3
x = y --> variable x now assumes the value of y, which is 3.
y = 10 --> variable y has been reassigned to a value of 10.

x will be 3 after all of the code executes. The variable's value changed when it was set equal to y.

y will be 10 after all of the code executes. The variable has not changed, but its value changed when it was reassigned to equal 10.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

weather = "sunny" --> evaluates to 'sunny'. Weather is now assigned a string value of "sunny".

weather === "sunny" --> the strict equality (===) evaluates to true. This happened because "sunny" is a truthy value.

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
