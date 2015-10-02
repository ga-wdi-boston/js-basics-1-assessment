![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Assessment for JavaScript Fundamentals

You have 30 minutes

## Instructions

Fork, clone, branch (response), and npm install.

Follow the prompts below and complete each question.  You may use any resource, other than someone else in the classroom, to help you complete this assessment.

You should save your answers in this README.md file, except for your answer to question 5 which should be saved in the file `assessment.js`.

## Question 1

Please list the JavaScript primitives and give one example of each.

1) number : an example is the number 1
2) string : an example is "I am a string"
3) Boolean : these are true and false
4) null: an example of this is null
5) undefined : an example of this is undefined

## Question 2

```js
var c = 5;
var d = 2;
c = c + d;
```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

The value of c is 7 after this code executes. The operators in the final line are the = and the +. The + adds the operands c and d which have just had values assigned. As a result of precedence, the addition is done first. After the addition is done we have c = 7. This is what determines the value of c.

## Question 3

```js
var x = 4;
var y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

after the first line executes, the value of x is 4. After the second line, the value of y is 3. After the third line, the value of x is set to 3. This is a result of operator precedence and the rule that whatever is on the right of the equals sign is evaluated first. So the third line results in x = 3. After the fourth line is run, y now is 10. The variables do not change because x and y are still present. However, the values of the variables do change. x is changed from 4 to 3 and y is changed from 3 to 10 by the time the entire code runs.

## Question 4

```js
var weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

After the variable weather is established in the first line, it's value is set to "sunny" in line two. The single = indicates that the value of "sunny" is being assigned to var weather. When weather is called, it will evaluate to "sunny". If you run the third expression, it will evaluate to true. The three ='s doesn't mean that the variable is being reassigned. It stands for equality. Since weather is set to "sunny", the statement that says weather is equal to "sunny" will return true.

## Question 5

```js
//We'll learn about require later in the course
var ask = require('./ask.js');

var answer = 'not empty';

while (answer !== '' && answer !== 'SeCrEt') {
  answer = ask("Guess my secret? ");
}
```

Change the code from this question so that it tests for a number betwen 1 and 10 instead of a string.  Save it in the file called `assessment.js`.  You can test the code with `node assessment.js` in your Terminal.

---

Commit and push your changes.

Submit a pull request.

