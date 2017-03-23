# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number
Example is 5

string:
Example is "I will love WDI...eventually"

boolean:
This is either a true or a false.
Used in loop conditions. Enter a while loop while a condition is still true.

Undefined.
For example, when you declare a variable and don't assign
it a value.
let carModel

Null
This means nothing. The variable has no value. Again can be used for getting out of a loop condition. Exit loop when
variable is null (rather than equals 0 which is different)

Used Google for UNDEFINED.

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.
c = 5 + 2
c therefore equals 7
The right side is evaluated first and then assigned to left side of variable c.


## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
let x = 4  -- So x equals 4
let y = 3 -- now y equals 3
x = y -- now x = 3
y = 10 -- now y = 10

note: validated answer on node.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

the weather variable is assigned the string 'sunny' in line 1.
Then in line 2,  the value is true because 3 equals means "two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions."

Resource: Stack overflow for === and running in node.

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
NOTE: It didn't work when i put in a 6. Ran out of time on fixing...


Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
