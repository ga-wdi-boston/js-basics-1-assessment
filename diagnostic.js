let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === 'SeCrEt') {
   console.log("You guessed it!");
   break;
  }
}

let answer = 'null';

while (answer !>= 1 && answer <= 10) {
  answer = ask("Guess my secret? ");
  if (answer === 'SeCrEt') {
   console.log("the guess needs to be between 1 and 10");
   break;
  }
}







// Change the code from this question so that it tests for a number of your choice
// between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
// <= 10, use `console.log` to display a message saying that the guess needs to
// be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
// You can test the code with `node bin/diagnostic.js` in your Terminal.