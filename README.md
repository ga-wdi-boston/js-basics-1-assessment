![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.




<!--
 Number : 1
String : "Bunny" <not an empty string>
Boolean: True
Null: Null
Undefined: Undefined-->

## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

<!-- Answer 7   Operator '+' is a numeric conversion and '=' is the assignment operator '+' > '='-->

## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?


----made my answers more specific<!-- More specific answer:  On line 44, x = 4, On line 45, y = 3, On line 46 x = 3 because y = 3, line 47, y= 10 because values are assigned right to left.-->

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

----changed this<!-- In line 58, = creates a variable called weather =  In line 59, weather === sunny is an absolute value for the variable weather, and would either evaluate to true or false. -->

## Question 5

```js
//We'll learn about require later in the course
var ask = require('./ask.js');

--------var answer = 'not empty'; -------- //Not empty is confusing here because not empty is represented by!== '' on the next line.


 Maybe something like, var answer = 'no guesses yet', or 'where a guess will go" would make the problem clearer for a newbie.

//This is saying, when the string isn't empty, or no guesses have been made and the information in the string isn't the seCrEt answer, keep asking for a guess.
while (answer !== '' && answer !== 'SeCrEt') {
  answer = ask("Guess my secret? ");
}
```

Change the code from this question so that it tests for a number betwen 1 and 10 instead of a string,----you could also add a string called 'SeCrEt', because the var answer ='empty string' makes it hard to understand what to change.  It makes be think, 'oh, 'empty string' must be the part I need to change, because it has the word string in it.
------- Save it in the file called `assessment.js`.  You can test the code with `node assessment.js` in your Terminal.

---

Commit and push your changes.

Submit a pull request.

