# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

Number - 23
String - '23'
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

the value of c is 2
the operator '+' is the addition operator which adds c and d, so in this scenario 5 and 2
the operator '=' sets the new value of c


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

after 'x=y', x = 3
after 'y=10', y = 10
The variables themselves don't change but their values do


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

weather is a variable but since it only has one equal sign it takes on the value of the string, "sunny". This means when you type in weather into the console it will return sunny
In the next line it is saying that the variable weather is equal to sunny so this will return the value of true since weather does in fact equal sunny

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === '7') {
   console.log("You guessed it!");
   else if (answer <1 && >10){
     console.log('The answer needs to be between 1 and 10!');
   }
   else{
     console.log('Guess again.');
   }
   break;
  }
}
```

let newAnswer = 7;
let guessAnswer = function(answer){
  if(answer !== 7){
    return 'Guess again!'
  }

  else{
    return 'You guessed it!'
  }
}
Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
