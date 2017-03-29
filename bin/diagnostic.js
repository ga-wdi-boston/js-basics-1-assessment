const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer === 7) {
   console.log("You guessed it!")
  } else if (answer < 1 || answer > 10 {
    console.log("The guess needs to be between 1 and 10.")
  }
   break
}
