'use strict'
const ask = require('../lib/ask.js')

let answer = 'not empty'
const secretNum = '4'
//console.log(secretNum)

while (answer !== '') {
  answer = ask('Pick a number between 1 and 10: ')
  console.log(answer)
  if (answer <= 10 && answer >= 1) {
    if (answer === secretNum) {
      console.log('You gussed correctly')
      break
    } else (
      console.log('Wrong!')
  )
  }  else (
   console.log('Please choose a number between 1 and 10')
 )
}
