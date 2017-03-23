# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
Not a number
Number
String
Boolean
Null
Undefined

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

C=7. The operators are the equal sign (=) and the plus sign (+). The plus sign adds the values of c and d together. The equal sign assigns the result of that operation to the variable c.

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
x=3 and y=10. The values of x and y change. I'm not sure what the question "do the variables change" means.

## Question 4

```js
1. let weather
2. weather = "sunny"
3. weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

1. undefined - a. the expression "let weather" itself regardless of value assignment would evaluate to undefined by the console. b. no value was assigned to the variable weather.
2. 'sunny' - the equal sign is the operator that assigns value. This expression is assigning the value of "sunny" to the variable "weather". The console returns "sunny".
3. true - since the variable "weather" holds/represents the value "sunny" the variable "weather" is equal to the literal "sunny". === is the logical comparison operator that evaluates whether or not two arguments are equal to each other.


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
