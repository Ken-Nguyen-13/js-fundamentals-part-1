// function describeCountry(country, population, capitalCity) {
//   const countryDescription = `${country} has ${population} people and its capital city is ${capitalCity}.`;
//   return countryDescription;
// }

// const usaDescription = describeCountry(
//   "The U.S.A",
//   333000000,
//   "Washington D.C"
// );
// const vietnamDescription = describeCountry("Vietnam", 99000000, "Hanoi");
// const latviaDescription = describeCountry("Latvia", 1837562, "Riga");
// console.log(usaDescription, vietnamDescription, latviaDescription);

// function helloWorld() {
//   const helloWorld = `Hello World!`;
//   return helloWorld;
// }

// const hello = helloWorld();
// console.log(hello);

// //Function Declaration
// function percentageOfWorld1(population) {
//   const percentOfWorldPopulation = `${population} million people is ${
//     (population / 7900) * 100
//   }% of the world population!`;
//   return percentOfWorldPopulation;
// }
// console.log(
//   percentageOfWorld1(332),
//   percentageOfWorld1(790),
//   percentageOfWorld1(1441)
// );

// //Function Expression
// const percentageOfWorld2 = function (population) {
//   const percentOfWorldPopulation = `${population} million people is ${
//     (population / 7900) * 100
//   }% of the world population!`;
//   return percentOfWorldPopulation;
// };
// console.log(
//   percentageOfWorld2(332),
//   percentageOfWorld2(790),
//   percentageOfWorld2(1441)
// );

// //Arrow Function
// const calcPercentOfWorld = (population) => {
//   const percentOfWorldPopulation = `${population} million people is ${
//     (population / 7900) * 100
//   }% of the world population!`;
//   return percentOfWorldPopulation;
// };
// console.log(
//   calcPercentOfWorld(332),
//   calcPercentOfWorld(790),
//   calcPercentOfWorld(1441)
// );

// //Intro to Arrays
// const populations = [333, 99, 1, 0];
// const percentages = [
//   percentageOfWorld2(populations[0]),
//   percentageOfWorld2(populations[1]),
//   percentageOfWorld2(populations[2]),
//   percentageOfWorld2(populations[3]),
// ];
// console.log(percentages);
// console.log(populations.length === 4);

// //Basic Array Methods
// const neighbors = ["Canada", "Mexico"];
// neighbors.push("Utopia");
// console.log(neighbors);

// neighbors.pop();
// console.log(neighbors);

// if (!neighbors.includes("Germany")) {
//   console.log(`Probably not a central European country :D`);
// }
// neighbors[neighbors.indexOf(`Mexico`)] = "Denmark";
// console.log(neighbors);

// neighbors[neighbors.indexOf(`Denmark`)] = "Mexico";
// console.log(neighbors);

// for (let i = 1; i < 51; i++) {
//   console.log(
//     `Voter ${i} is voting for Candidate ${Math.trunc(Math.random() * 3) + 1}.`
//   );
// }

// const listOfNeighbors = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// //Attempt 1:
// // for(let i = listOfNeighbors.length - 1; i >= 0; i--) {
// //     for(let neighbors = listOfNeighbors[i].length; neighbors >= 0; neighbors--) {
// //         console.log(`Neighbors: ${listOfNeighbors[i][neighbors - 1]}.`)
// //     }
// // }
// //Flaws: Not readable, sometimes returns "undefined"

// //Attempt 2:
// for (let i = 0; i < listOfNeighbors.length; i++) {
//   for (let neighbors = 0; neighbors < listOfNeighbors[i].length; neighbors++) {
//     console.log(`Neighbor: ${listOfNeighbors[i][neighbors]}`);
//   }
// }

// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentages2);

// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//   percentages3.push(percentageOfWorld1(populations[i]));
//   i++;
// }
// console.log(percentages3);

function printForecast(temp) {
  let tempString = ``;
  for (let i = 0; i < temp.length; i++) {
    tempString += `${temp[i]}°C in ${i + 1} days, `
  }
  return tempString;
}

console.log(printForecast([17, 21, 23]))
console.log(printForecast([12, 5, -5, 0, 4]))