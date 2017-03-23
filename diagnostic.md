# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

undefined:  variable has not been declared, or has not been given a value
null:  means no value
boolean:  true
string:  "Happy Birthday"
number:   7


## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

value of c = 7
perform operations on the right hand side of the equals sign and then assign that value to c on the left


## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

line 1 x = 4
line 2 y = 3
line 3 x = 3
line 4 y = 10

x = 3
y = 10

variables don't change but the values do


## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

weather = "sunny" means that you are assigning a value of "sunny" to the weather variable

weather === "sunny" means that weather is equal to the string "sunny" (which doesn't make sense to me yet)


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer !>= 1 && answer !<= 10) {
   console.log("Guess needs to be between 1 and 10")
   break
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
