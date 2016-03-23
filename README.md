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

string: 'car'
boolean: true
number: 1
null: null
undefined: undefined, e.g., results from declaring a variable and not assigning anything to it

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

c equals 7
'=' is the assignment operator that assigns a value on the right hand side of the synble to a variable on the left.
"+" is the addition operator that adds numbers or concatenates strings.
All of the operators are binary operators.

## Question 3

```js
let x = 4; //line 1
let y = 3; //line 2
x = y;     //line 3
y = 10;    //line 4
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

Please refer to line numbering system above.

line 1: x equals 4, y has not been declared
line 2: x equals 4, y equals 3
line 3: x equals 3, y equals 3
line 4: x equals 3, y equals 10

## Question 4

```js
let weather;          //line 1
weather = "sunny";    //line 2
weather === "sunny";  //line 3
```

What are the values of these expressions?  Explain your answers.

Please refer to above line numbers in code comments.

line 1: weather variable is declared and is undefined
line 2: weather variable is assigned value of "sunny", a string.
line 3: returns true since weather is a string and has a value of "sunny", which
        is equivalent to the string "sunny".

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
