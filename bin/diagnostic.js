'use strict'
// We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer
let solution = 5

while (answer !== 5) {
  answer = ask("Enter a number between 1 and 10: ")
  console.log(answer)
  if (answer == 5) {
   console.log("You guessed it!")
   break
 } else if (answer < 1 || answer > 10) {
   console.log("The guess must be between one and ten")
 } else {
   console.log("Close but no cigar")
 }
}
