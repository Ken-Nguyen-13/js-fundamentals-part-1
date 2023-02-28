const country = "U.S.A";
let countryPopulation = 331000000;
const continent = "North America";
const continentPopulation = 367000000;
const isIsland = false;
const language = 'English';

switch(language) {
    case 'Mandarin':
    case 'Chinese':
        console.log(`${language} is the most common native langauge spoken on earth!`)
        break;
    case 'Spanish':
        console.log(`${language} is the 2nd most common native langauge spoken on earth!`)
        break;
    case 'English':
        console.log(`${language} is the 3rd most common native langauge spoken on earth!`)
        break;
    case 'Hindi':
        console.log(`${language} is the 4th most common native langauge spoken on earth!`)
        break;
    case 'Arabic':
        console.log(`${language} is the 5th most common native langauge spoken on earth!`)
        break;
    default:
        console.log(`${language} is an intresting language!`)
}

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
x -= [x + (x / 2)] + x;//
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

//My Method
/*const userCountry = prompt("What country do you live in?")
const numNeighbors = Number(prompt(`How many neighboring countries does ${userCountry} have?`))
if (numNeighbors === 1) {
    console.log(`${userCountry} has only one bordering country!`)
} else if (numNeighbors > 1) {
    console.log(`${userCountry} has more than one bordering country!`)
} else {
    console.log(`${userCountry} has no bordering countries.`)
}

//Alex's method
if (numNeighbors > 0) {
    if (numNeighbors == 1) {
        console.log("ONLY ONE!")
    } else if (numNeighbors > 1) {
        console.log("MORE THAN ONE!");
    }
} else {
    console.log("NO ONE!");
} */

const newCountry = "New Zealand"
const newCountryLanguage = "English";
const newCountryPopulation = 5288100;
const isCountryIsland = true;

    if(!isCountryIsland) {
        if(newCountryLanguage === "English" && newCountryPopulation > 50000000) {
            console.log(`You should live in ${newCountry} :D`)
        } else {
            console.log(`${newCountry} does not meet your criteria :c`)
        }
    } else {
        console.log(`${newCountry} does not meet your criteria :c`)
    } 

 let day = 'Jupiter'

    if (day === 'monday') {
        console.log(`On ${day} I get up and get ready for the school week.`)
    } else if(day === 'tuesday') {
        console.log(`On ${day} I do.. well something.`)
    } else if(day === 'wednesday' || day === 'thursday') {
        console.log(`On ${day} I do some stuff.`)
    } else if(day === 'friday') {
        console.log(`On ${day} I do stuff.`)
    } else if(day === 'sunday' || day === 'saturday') {
        console.log(`On ${day} I relax on the weekend.`)
    } else {
        console.log(`${day} is not a day of the week :/`)
    }







/*function myFunction() {
    alert("This is a function! Hooray!")
    alert(498483 % 8809)
}
myFunction(); */