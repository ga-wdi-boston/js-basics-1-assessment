# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
integer: 5
string: "cat"
boolean: true
null
undefined

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.
C = 7. The operators are "=" and "+". = is setting a value, plus adds integers
or contatenates strings.

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
after line 1 x = 4
after line 2 y = 3
after line 3 x = 3
after line 4 y = 10
after line 4 x = 3

I'm not totally clear on the distinction between variables and their values.
I think the values change as I showed, the variables do not.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

The variable weather is set equal to 'sunny' in the first line.
Weather is compared to 'sunny' in the second line which would come back false.
## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer === 7) {
   console.log("You guessed it!")
 } else if (answer !>= 1 || answer !<=10 {
   console.log("The guess needs to be between 1 and 10.")
 }
   break
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
