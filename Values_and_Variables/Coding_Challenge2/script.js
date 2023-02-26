//Test Data 1
let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;
let marksBMI = marksMass / marksHeight ** 2;
let johnsBMI = johnsMass / johnsHeight ** 2;
if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}
//Test Data 2
marksMass = 95;
marksHeight = 1.88;
johnsMass = 85;
johnsHeight = 1.76;
marksBMI = marksMass / marksHeight ** 2;
johnsBMI = johnsMass / johnsHeight ** 2;
if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}
// Coding Challenge 2 Add-on:
/* 1. Check if a number is odd or even in JavaScript
Function `isEvenOrOdd()` checks if input number is even or odd by using “%” operator in JavaScript.

Print “Number is even” if the number is divisible by 2.
Else print “Number is odd” if the number returns a remainder when divided by 2.*/

let number = 103;
if (number % 2) {
  console.log(`${number} is an odd number.`);
} else {
  console.log(`${number} is an even number.`);
}
let height = NaN;
if (height) {
  console.log("Height is DEFINED!")
} else {
  console.log("Height is UNDEFINED.")
}