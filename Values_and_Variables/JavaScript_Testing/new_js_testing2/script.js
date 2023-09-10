"use strict";
function containsUppercase(str) {
  return /[A-Z]/.test(str);
}
console.log(containsUppercase("H")); // true
console.log(containsUppercase("h")); // false
console.log(containsUppercase("He")); // true
console.log(containsUppercase("hE")); // true
console.log(containsUppercase("he")); // false
console.log(containsUppercase("HE")); // true
console.log(containsUppercase("$")); // false
console.log(containsUppercase("$H")); // true

function containsNumber(str) {
  return /\d/.test(str);
}
console.log(`containsNumber()`);
console.log(containsNumber("1")); // true
console.log(containsNumber("0")); // true
console.log(containsNumber("-1")); // true
console.log(containsNumber("!")); // false
console.log(containsNumber("a")); // false
console.log(containsNumber("a1")); // true
console.log(containsNumber("1a")); // true
console.log(containsNumber('aaaaaaaaaaaaaaaaaaaaaaa"1"')); // true
console.log(containsNumber("[1]")); // true
console.log(containsNumber("Nothing in here")); // false
console.log(containsNumber("Noth1ng 1n Here")); // true
console.log(containsNumber(1)); // true

function containsSpecialChars(str) {
  if (
    str.includes("&") ||
    str.includes("$") ||
    str.includes("%") ||
    str.includes("§") ||
    str.includes("-") ||
    str.includes("_")
  ) {
    return true;
  } else {
    return false;
  }
}
console.log("containsSpecialChars");
console.log(containsSpecialChars("$"));
console.log(containsSpecialChars("%"));
console.log(containsSpecialChars("&"));
console.log(containsSpecialChars("-"));
console.log(containsSpecialChars("_"));
console.log(containsSpecialChars("§")); // true
console.log(containsSpecialChars("JoF000000Loll4^^^")); //false
console.log(containsSpecialChars("epewrwrcepc&0&&&&&&wrepepppp")); //true
console.log(containsSpecialChars("%#%$^&*()")); //true
console.log(containsSpecialChars("")); //false

if (!1 < 2) {
  console.log("yay");
} else {
  console.log("nay");
}

let numberString = "12345";
let numberStringArray = numberString.split("");
console.log(numberStringArray);
console.log(
  (numberStringArray = numberStringArray.forEach(function (num) {
    return Number(num);
  }))
);
//console.log(2 * "2"); ---> 4

function dec2bin(dec) {
  // let valueOfMaxPlaceValue = 1;
  // let maxPlaceValue;
  // let reachedMaxPlaceValue = false;
  // for (let i = 0; !reachedMaxPlaceValue; i++) {
  //  // console.log(valueOfMaxPlaceValue, `Value Of Max Place Value`);
  //   if (valueOfMaxPlaceValue > dec) {
  //     reachedMaxPlaceValue = true;
  //     valueOfMaxPlaceValue /= 2;
  //     maxPlaceValue = i;
  //     break;
  //   }
  //   valueOfMaxPlaceValue *= 2;
  // }
  const binaryArray = [];
  const binaryArrayTranslation = 0;
  const originalDec = dec;
  const powerOfTwo = 1;

  let k = 1;
  while (binaryArrayTranslation > originalDec) {
    k++;
  }
  return binaryArray.join("");
}
console.log(dec2bin(50)); // "110010"
console.log(dec2bin(2)); // "10"
console.log(dec2bin(1)); // "1"
console.log(dec2bin(42)); // "101010"
console.log(dec2bin(51)); // "110011"

/////////////////////////////////////////////////////////////////////////////

const testVariable = console.log("Hello!"); // --> "Hello!"
console.log(testVariable); //--> undefined

console.log(Math.log(10), 10 / Math.E, Math.log(Math.E), Math.log(Math.PI));
console.log(origin);

const arr = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];

for (const [num1, num2 = 1] of arr) {
  console.log(num1, num2);
}

const sumAllNums = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum); // 15
};

/* You Also Could've Done This
const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args){
    sum += num
  }
  return sum
  
}

console.log(sumAllNums(1, 2, 3, 4, 5))
 */

sumAllNums(1, 2, 3, 4, 5);

console.log(64 >>> 7); // Pushes 0's to the left by the right value and the bits in the left number get pushed off

const num3 = -50;
const num4 = 50;
console.log((num3 >>> 0).toString(2));
console.log(num4.toString(2));

console.info(num3, ["Hello"]);
console.log("Hello");
console.log("Hello");
console.count(num4);
console.count(locationbar);
console.log(locationbar);
console.log(length);
console.log(Lock);

const num5 = 24;

console.log(String(num5)[String(num5).length - 1]);

function convertToString(a, b, c) {
  const strOfNums = [String(a), String(b), String(c)];
  return strOfNums;
}
console.log(convertToString(23, 244, 6));

function hasWon(move1, move2, move3) {
  if (move1 === move2 && move1 === move3) {
    return true;
  } else {
    return false;
  }
}
const moves = ["XXX"];
const moves2 = ["OXO"];
const moves3 = ["OOO"];

console.log(hasWon(...moves[0]), hasWon(...moves2[0]), hasWon(...moves3[0]));

console.log(
  "Hello".endsWith("o"),
  "Hello".endsWith("l"),
  "Hello".endsWith("lo"),
  "Hello".endsWith("ol")
);
console.log("Hello".slice(0, "Hello".indexOf("l") + 1));

const time = "12:10AM";

function convertTo24HrsFormat(time) {
  if (time.slice(0, 2) === "12") {
    time = `00${time.slice(2)}`;
  }
  if (time.endsWith("AM")) {
    if (time.length === 6) {
      return `0${time}`;
    } else {
      return time;
    }
  } else {
    const hour = time.slice(0, time.indexOf(":"));
    time = time.replace(hour, Number(hour) + 12);
    return time;
  }
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
// 24 hours format is hours many hours it has been since midnight

let str2 = "hello";
str2 = str2.charAt(0).toUpperCase() + str2.slice(1);
console.log(str2);

let str3 = "hello";
str3 = str3.charAt(0).toUpperCase();
console.log(str3);

const obj = {
  foo: 3,
};
console.log(`${obj}`, obj, obj.console);
// const attemptAtJsonObj = `${obj}`
// console.log(attemptAtJsonObj)

let str4 = "Hello!";
str4 = str4.replace("Hello", "Hi");

const arr2 = ["1", "2"];
arr2.unshift();

arr2.push("3", "4", "5", "6", "7");
console.log([...arr2.entries()]);
console.log(arr2.entries().next);
const arr2Entries = arr2.entries();
console.log([...arr2Entries]);

const a = ["a", "b", "c"];
console.log(Object.entries(a), [...a.entries()]/*Array.entries(a)*/)

for (const item of a.entries()) {
  console.log(item);
}
