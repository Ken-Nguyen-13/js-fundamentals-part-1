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
let totalCandidateVotes = [candidate1, candidate2, candidate3]
console.log(totalCandidateVotes)

