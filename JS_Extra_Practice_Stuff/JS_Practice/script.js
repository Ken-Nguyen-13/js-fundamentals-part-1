const recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};
console.log(recipe.title);
console.log(`Servings: ${recipe.servings}`);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);

//Second Exercise "The Reading List"
const books = [
  {
    title: "Spy School Goes North",
    author: "Stuart Gibbs",
    alreadyRead: false,
  },
  { title: "Spy School At Sea", author: "Stuart Gibbs", alreadyRead: true },
  { title: "Spy School Goes South", author: "Stuart Gibbs", alreadyRead: true },
];
const book1 = `"${books[0].title}" by ${books[0].author}`;
const book2 = `"${books[1].title}" by ${books[1].author}`;
const book3 = `"${books[2].title}" by ${books[2].author}`;
console.log(book1);
console.log(book2);
console.log(book3);

function haveReadYet(book, alreadyRead) {
  if (alreadyRead) {
    console.log(`I've already read ${book}.`);
  } else {
    console.log(`I haven't read ${book}.`);
  }
}
haveReadYet(book1, books[0].alreadyRead);
haveReadYet(book2, books[1].alreadyRead);
haveReadYet(book3, books[2].alreadyRead);

const randomNumbers = [1, 4, 101, -16, 3, 10];

for (let i = 0; i <= randomNumbers.length; i++) {
  if (randomNumbers[i] % 2 === 0) {
    console.log(randomNumbers[i]);
  }
}

function returnSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(returnSum([10, 100, 40]));
console.log(returnSum([5, 60, 75]));

function reverseName(firstName) {
  let reversedName = [];
  for (let i = firstName.length - 1; i >= 0; i--) {
    reversedName.push(firstName[i]);
  }
  return reversedName;
}
console.log(reverseName([`K`, `e`, `n`]));

//do candidates thing
let candidate1 = 0;
let candidate2 = 0;
let candidate3 = 0;

for (let i = 1; i < 51; i++) {
  let candidateVotes = Math.trunc(Math.random() * 3) + 1;
  switch (candidateVotes) {
    case 1:
      candidate1++;
      break;
    case 2:
      candidate2++;
      break;
    case 3:
      candidate3++;
      break;
  }
  console.log(`Voter ${i} is voting for Candidate ${candidateVotes}.`);
}

//Candidate Winner Calculator
let totalCandidateVotes = [candidate1, candidate2, candidate3];
console.log(totalCandidateVotes);

let arr1 = [
  1,
  2,
  3,
  "This is a string",
  7,
  "This is another string",
  1,
  2,
  3,
  7,
  8,
  "10",
  10,
  "Hello",
];

function removeStrings(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeStrings(arr1));

// Hangman Function
// Goal:
// The first character in a string is replaced with an underscore as well has every other letter following
function hangman(str) {
  let strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    if (i % 2 === 0) {
      strArray[i] = "_";
    }
  }
  return strArray.join("");
}
console.log(hangman("Foo"));
console.log(hangman("AnFanc"));
console.log(hangman("ThisIsAnFancyString"));
console.log(hangman("123456789123456789123456789"));
console.log(hangman("123456789123456789123456789123456789"));
console.log(hangman("123456789123456789123456789123456789123456789"));

// Palindrome Checker
function palindrome(pali) {
  const paliArray = pali.split("");
  const reversedPaliArray = pali.split("").reverse();
  console.log(paliArray, reversedPaliArray);
  if (paliArray.toString() === reversedPaliArray.toString()) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("racecar"));
console.log(palindrome("rotator"));
console.log(palindrome("202020"));
console.log(palindrome("12321"));
console.log(palindrome("%*&*(&*&(*&*%"));
console.log(palindrome("%*&*(&*&(*&*%*"));
console.log(
  palindrome(
    "12345678987654321234567898765432123456789876543212345678987654321"
  )
);

// Exercises
// Exercise 1
// Steps:
/*
create an empty set
Create a set containing 0 to 10 using loop
Remove an element from a set
Clear a set
Create a set of 5 string elements from array
Create a map of countries and number of characters of a country */
const countries = ["Finland", "Sweden", "Norway"];

const testSet = new Set();

for (let i = 0; i < 11; i++) testSet.add(i);
console.log(testSet, testSet.size);
const testSetSize = testSet.size;
testSet.delete(3);
console.log(testSet, testSet.size);
// testSet.clear();
console.log(testSet, testSet.size);
testSet.add(1);
console.log(testSet, testSet.size, testSetSize);

const arrOfStrs = ["a", "b", "c", "d", "e"];
const setOfStrs = new Set(arrOfStrs);
console.log(arrOfStrs, setOfStrs);

const mapOfCountries = new Map();
for (const country of countries) mapOfCountries.set(country, country.length);
console.log(mapOfCountries);

// Exercise 2
// Steps:
/*
Find a union b
Find a intersection b
Find a with b */
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a, ...b];
const union = new Set(c);
console.log(union);

// const setA = new Set(a);
// const setB = new Set(b);

const intersection = a.filter((num) => b.includes(num));
console.log(intersection);
const differenceA = a.filter((num) => !b.includes(num));
const differenceB = b.filter((num) => !a.includes(num));
const totalDifference = [...differenceA, ...differenceB];
console.log(differenceA, differenceB, totalDifference);
