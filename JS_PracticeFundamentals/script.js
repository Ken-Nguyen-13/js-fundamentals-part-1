const country = "U.S.A";
let countryPopulation = 331000000;
const continent = "North America";
const continentPopulation = 367000000;
const isIsland = false;
const language = "English";

console.log(country)
console.log(continent)
console.log(isIsland)
console.log(language)
console.log("The population of the " + country + " is about " + countryPopulation + ".")
console.log("The population of " + continent + " is about " + continentPopulation + ".")

//Assigning values to x using assignment operators and mathematical operators!(And a lot of trial & error & confusion too!)
let y = 501;
let x = 10;
x **= 2;
x -= [x + (x / 2)] + x;
x *= -1;
x -= x / 2;
x -= 74498;
console.log("Y's value is: " + y + ".")
console.log("X's value is: " + x + ".")
console.log("Q: Is x greater than y? A: That is " + (x > y) + ".")

//Basic Operators Assignment
const finlandsPop = 6000000;
const averageCountryPopulation = 33000000;
const description = `The ${country} is in ${continent}, and its ${countryPopulation} people speak ${language} mostly.`;

console.log(description)
countryPopulation = countryPopulation / 2;
console.log("Half of the U.S.A's population is about " + countryPopulation + ".");
countryPopulation += 1;
console.log("Half of the U.S.A's population plus 1 is about " + countryPopulation + ".");
console.log("Finland's population is about " + finlandsPop + ".");
console.log("Q: Is Finland's population greater than the United States? A: That is " + (finlandsPop > countryPopulation) + ".")
console.log("The average population for a country is about " + averageCountryPopulation + "." + " Q: Is the population of the United States less than the average population of a country? A: That is " + (averageCountryPopulation > countryPopulation) + ".")
countryPopulation = 33100000;

if (countryPopulation > 33000000) {
    console.log(`The U.S.A's population is ${countryPopulation - 33000000} greater than average!`)
} else {
    console.log(`The U.S.A's population is ${33000000 - countryPopulation} below average.`)
}
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, '123' < 57, 5 + 6 + '4' + 9 - 4 - 2)

/*function myFunction() {
    alert("This is a function! Hooray!")
    alert(498483 % 8809)
}
myFunction(); */