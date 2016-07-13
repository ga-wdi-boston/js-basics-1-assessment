# JS Basics Diagnostic

You should save your answers in this README.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
number- 91,2, 45, etc
string 'this is a string'
boolean x+5===true;
null: null
undefined: undefined


## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.
 c is 7 after the code executes

 the = operator does not mean equals. It is assigning a value by saying that c is the value of the varaiable declared as c plus the variable declared as d.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

Yes. they change
line 1: x=4
line 2: x=3
line 3: x = 3, y=3
line 4 y = 10
<!-- solution below -->


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

the value of weather= 'sunny'  is 'sunny'
the value of weather === 'sunny' is true.


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

for (answer = '') {
  answer = ask("Guess my number, it is between 1 and 10? ");
  if (answer<=10) {
     console.log("You guessed it!");
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
