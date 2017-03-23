# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1
Please list the JavaScript primitives and give one example of each.

Number : 1
String: "Amanda is the best"
Boolen: true
null: null
undefined: undefined

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

The value of c is 7
The operators are the "+" and the =

The "+" adds c and d together and the "=" assigns c with that value.

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

let x = 4 --> 4
let y = 3 --> 3
x = y --> 3
y = 10 --> 10

The variables are change each time you assign them a different value.


## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

let weather --> undefined
weather = "sunny" --> "sunny"
weather === "sunny" --> true

In the first line we are declaring weather as a variable and we are not assigning a value,
so the expression.

In the second line we are assigning the value of weather to be sunny.

In the third line we are evaluating if the data we are passing in, "sunny", matches
the value of weather in both content and type. It does match so the third expression evalutes
to true.




## Question 5

```js
//We'll learn about require later in the course
'use strict'

const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer >= 1 || answer <= 10){
    console.log ("Chose a number between 1 and 10")
  } else {
    console.log("yay, you got it!")
  }

}

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
