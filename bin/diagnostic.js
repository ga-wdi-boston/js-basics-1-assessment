'use strict'

const ask = require('../lib/ask.js')

const answer = 5
let guess = 0

while (guess !== answer) {
  guess = parseInt(ask('Guess my secret?'))

  if (guess >= 1 && guess <= 10) {
    console.log('You guessed ' + guess + '...Guess Again')
  } else if (guess < 1 || guess > 10) {
    console.log('You guessed ' + guess + 'NUMBER BETWEE 1-10')
  } else { console.log('You guessed it!') }
}
