# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

String = "Jim"

Boolean = true

Number = 100

undefined = undefined

null = null

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

* After the code executes, c = 7.
* The first operator is = and that will assign the result of the expression to be the value of c.
* The second operator is + and that will add the values of c and d.


## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
x = 3

y = 10

The variables don't change but their values do.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

let weather: This will evaluate as undefined, because there is nothing to return. It is creating a variable called "weather" and that variable has no value yet.

weather = "sunny":  This will evaluate as "sunny", but it is actually assigning the value of "sunny" to the weather variable.

weather === "sunny": This will evaluate to true, because it is checking the equality of the value assigned to weather against the string "sunny".

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
