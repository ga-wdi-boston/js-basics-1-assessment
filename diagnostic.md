# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.


Number: -0
String: ''
Boolean: true
null: null
undefined: undefined

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

After this code executes, the value of c is 7.  "c = c + d" is updating the value of c to represent the sum of c an d.  Since c was originally assigned a value of 5 and d was originally assigned a value of 2, the expression c + d translates to 5 + 2, which equals 7.  As a result, the new value of c is 7.


## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x = y
The value of x is is 3 and the value of y is 3.  The variables do not change, but the value of x is updated to be the same as the value of y.

y = 10
The value of x is 3 and the value of y is 10.  The variables do not change, but the value y is updated to 10.  The value of x is not updated by the line "y = 10" so its value remains 3.

<!-- solution below -->


## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

weather = "sunny"
This evaluates to "sunny".  The command = is assigning the value "sunny" to the weather variable.

weather === "sunny"
This evalues to true.  The command === is really the same as asking whether or not the value of the variable whether is "sunny".  Since "sunny" is the value of that variable, the expression evaluates to true.  If the value of weather was something other than "sunny" (ie "cloudy"), then the value of that expression would have evaluated to false.


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
