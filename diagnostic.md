# JS Basics Diagnostic

You should save your answers in this README.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

boolean = true,number = 1string = 'Hi',Null = null,Undefined = y is 7

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c = 7. + sign adds the values of c and d, and the = sign stores value back into let c.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x = 3 and y = 10, x is set to y value, the y value changes to 10 after that expression.



## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

The first expression sets the weather variable to the sting value 'sunny'.  The second expression is asking to evaluate if weather is set to 'sunny', which it is, so the values of both

## Question 5

```js
//We'll learn about require later in the course

const ask = require('../lib/ask.js');

let answer = 0;

while (answer !== false) {
  answer = ask("Guess my secret? ");
  if (answer >= 1 && answer <= 10) {
   console.log("You guessed it!");
   break;
 }
 else {
   console.log("Answer must be between 1 and 10!");
 }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
