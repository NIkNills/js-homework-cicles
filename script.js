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

const pinCode = "1234";
const pucCode = "1234567890";

let enterPinCode, enterPucCode;

pin: for (let i = 1; i <= 3; i++) {
  enterPinCode = prompt("Please enter PIN code", "");

  if (enterPinCode !== pinCode) {
    console.log(
      `PIN code entered incorrectly. You have ${3 - i} attempts left`
    );
  } else {
    console.log("PIN code entered correctly");
    break pin;
  }
}

puc: if (enterPinCode !== pinCode) {
  for (let i = 1; i <= 3; i++) {
    enterPucCode = prompt("Please enter PUC code", "");

    if (enterPucCode !== pucCode) {
      console.log(
        `PUC code entered incorrectly. You have ${3 - i} attempts left`
      );
    } else {
      console.log("PUC code entered correctly");
      break puc;
    }
  }
}
