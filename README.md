![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Diagnostic for JavaScript Fundamental

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this diagnostic.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
Number - 5
String - "Hello"
Boolean - true
null - null
undefined - undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

After the code executes, c = 7.

The + sign adds the two numbers together, and the = assigns them to c.
## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
At first, x = 4 and y = 3. Then, x is assigned to the value of y, and on line 45
becomes 3. Then y is reassigned to 10, so at the end of the code, x = 3 and y = 10.
Obviously the values change, but other than that, the variables don't really.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
Line 59 declares the variable weather. It doesn't immediately assign anything to
it, so at that time, weather is undefined.
In line 60, weather is assigned the string "sunny". So the value of weather is
"sunny".
At line 61, weather is compared with "sunny" with the precise equals sign, and
because weather's value matches "sunny" identically, that statement evaluates
to true.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === 'SeCrEt') {
   console.log("You guessed it!");
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and <= 10, use `console.log` to display a message saying that the guess needs to be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.  You can test the code with `node bin/diagnostic.js` in your Terminal.

---

Commit and push your changes.

Submit a pull request.
