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