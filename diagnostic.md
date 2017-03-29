# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
numbers: 5
string: 'maggie'
boolean: true
undefined: undefined
null: null

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

after the code executes c equals 7.  the = is an assignment operator and sets c equal to the sum of c and d.  it this case + is used to sum numbers, although it can also be used for concatenation.

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
first x equals 4
and y equals 3
then x equls 3(the value of y)
then y equals 10, and x still equals 3

The values of the variable change, the varibles themselves do not

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

first we declare a variable, weather.
Next we assignment the variable weather the string value of 'sunny'.
The last statement evalutes to true. It is an equivalency test and it is true that "sunny" is the same as "sunny"

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess the number, between 1 - 10 inclusive")
  if(answer<1 || answer>10){
    console.log("Invalid, Please guess a number between 1 and 10")
  }
  if (answer === '3') {
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
