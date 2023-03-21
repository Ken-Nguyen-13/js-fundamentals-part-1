function describeCountry(country, population, capitalCity) {
    const countryDescription = `${country} has ${population} people and its capital city is ${capitalCity}.`;
    return countryDescription
}

const usaDescription = describeCountry('The U.S.A', 333000000, 'Washington D.C');
const vietnamDescription = describeCountry('Vietnam', 99000000, 'Hanoi')
const latviaDescription = describeCountry('Latvia', 1837562, 'Riga')
console.log(usaDescription, vietnamDescription, latviaDescription);

function helloWorld() {
    const helloWorld = `Hello World!`;
    return helloWorld;
}

const hello = helloWorld();
console.log(hello);

//Function Declaration
function percentageOfWorld1(population) {
    const percentOfWorldPopulation = `${population} million people is ${population / 7900 * 100}% of the world population!`;
    return percentOfWorldPopulation;
}
console.log(percentageOfWorld1(332), percentageOfWorld1(790), percentageOfWorld1(1441))

//Function Expression
const percentageOfWorld2 = function (population) {
    const percentOfWorldPopulation = `${population} million people is ${population / 7900 * 100}% of the world population!`;
    return percentOfWorldPopulation;
}
console.log(percentageOfWorld2(332), percentageOfWorld2(790), percentageOfWorld2(1441))

//Arrow Function
const calcPercentOfWorld = population => {
    const percentOfWorldPopulation = `${population} million people is ${population / 7900 * 100}% of the world population!`;
    return percentOfWorldPopulation;
}
console.log(calcPercentOfWorld(332), calcPercentOfWorld(790), calcPercentOfWorld(1441))

//Intro to Arrays
const populations = [333, 99, 1, 0];
const percentOfWorld = [percentageOfWorld2(populations[0]), percentageOfWorld2(populations[1]), percentageOfWorld2(populations[2]), percentageOfWorld2(populations[3])]
console.log(percentOfWorld)
console.log(populations.length === 4)

//Basic Array Methods
const neighbors = ["Canada", "Mexico"];
neighbors.push("Utopia");
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if(!neighbors.includes('Germany')) {
    console.log(`Probably not a central European country :D`);
}
neighbors[neighbors.indexOf(`Mexico`)] = "Denmark";
console.log(neighbors);

neighbors[neighbors.indexOf(`Denmark`)] = "Mexico";
console.log(neighbors)