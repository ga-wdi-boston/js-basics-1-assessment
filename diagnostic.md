# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
1. boolean. eg: true and false
2. string. eg: ''
3. number. eg: 0
4. null
5. undefined
## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

7. opperation '=' is assign operation, we should execute the right expression first. '+' is a binary operation combining the value of c and d, which are 5 and 2 equal to 7. Then, assign to c. The variable c has a new value of 7.

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
After the first line of code executes, x=3 and y = 3.
After the second line of code executes, x=3 and y =10.
The variables do not change. They are still x and y. But the value of the variables change.

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.
The value of these expressions is true. The first line create variable weather, then the second line assign the value, 'sunny' to weather. The last line compare the value of the variable to the string, 'sunny'. They are the same, therefore it should return true.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '2' ) {
   console.log("You guessed it!");
   break;
 } else if (answer <1 || answer>10){
   console.log('Your guess needs to between 1 to 10!');
 }else{
   console.log('Try again!');
 }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
