# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

string = "Boston"
number = 12
boolean = true
undefined = undefined  (like in an undefined variable)
null = null (like in a defined variable, that is assigned an empty value)

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

c = 7

Assign the new value of c to equal the old value of c (5) and add it with the value of d (2).  5+2 = 7 so c is now equal to 7.

= : Assigns a value you to c
+ : adds numbers or concatenates strings

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->
Initial state
x=4
y=3

after x=y
x=3
y=3

after y=10
x=3
y=10

The variables do not change.  The values do change.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

weather = "sunny"
- Assigns the value "sunny" to the variable weather
- No return

weather === "sunny"
- This statement checks to see if the weather variable is equal to "sunny"
- Since we assigned "sunny" to weather previously, this evaluates or returns true (boolean)


## Question 5

```js
//We'll learn about require later in the course
let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer < 1 || answer > 10) {
    console.log(" The guess needs to be between 1 and 10")
  } else if  (answer === 'SeCrEt') {
   console.log("You guessed it!")
   break
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
