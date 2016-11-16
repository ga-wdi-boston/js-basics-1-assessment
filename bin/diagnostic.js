'use strict';

let answer = prompt("What is your number?");

do {
  alert("Your number needed to be between 1 and 10");
  answer = prompt("What is your number?");

}
while (answer < 1 && answer > 10);
