'use strict'

const ask = require('../lib/ask.js')

const answer = 5
let guess = 0


while (guess !== answer) {
  guess = parseInt(ask('Guess my secret?'))
  if (guess > 1 && guess < 10) {
    console.log('Number is supposed to be 1-10' + 'You guessed ' + guess)
  } else { console.log('You guessed it!') }
}
