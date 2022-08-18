"use strict";

let enterFirstNumber = +prompt(
  "Please enter the first number in the range",
  "0"
);
let enterSecondNumber = +prompt(
  "Please enter the second number in the range",
  "10"
);

if (enterSecondNumber - enterFirstNumber >= 4 || enterFirstNumber - enterSecondNumber >= 4) {
  if (enterFirstNumber < enterSecondNumber) {
    while (enterFirstNumber <= enterSecondNumber) {
      console.log(enterFirstNumber);
      enterFirstNumber++;
    }
  } else if (enterFirstNumber > enterSecondNumber) {
    while (enterFirstNumber >= enterSecondNumber) {
      console.log(enterFirstNumber);
      enterFirstNumber--;
    }
  }
}