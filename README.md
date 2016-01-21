![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Diagnostic for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this diagnostic.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

number - 18
boolean - true
string - "The quick brown fox jumped over the lazy dog"
null - null
undefined - undefined

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

the + will add variables c (which currently holds the value of 5) and d (which
currently holds the value of 2) together, and will store the sum in a variable
named c. since c already had a value, this will overwrite the original.
c will be equal to 7.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

after the first line, x is equal to 4 and y is undefined. after the second line,
y is equal to 3 and x is still equal to 4. after the third, since y is equal to
3, now x is equal to 3 as well. after the fourth, y is equal to 10, and x is
still equal to 3. the variables change as they're assigned new values.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather = "sunny" will return "sunny", since we're assigning that string value
to the weather variable. weather === "sunny" will return true because the value
and type of the variable 'weather' matches the value and type of the
string "sunny"


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
