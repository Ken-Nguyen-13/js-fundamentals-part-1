const myCountry = {
    country: "The U.S.A",
    capital: "Washington D.C",
    language: "English",
    population: 331,
    neighbors: ["Canada", "Mexico"],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital named ${this.capital}.`
    },

    checkIsland: function () {
        return this.isIsland = this.neighbors.length ? false : true;
    }
}
/*console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} 
neighboring countries, and and a capital named ${myCountry.capital}.`)

myCountry.population += 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} 
neighboring countries, and and a capital named ${myCountry.capital}.`)

myCountry['population'] -= 1;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} 
neighboring countries, and and a capital named ${myCountry.capital}.`)*/

console.log(myCountry.describe())
console.log(myCountry.checkIsland() ? `${myCountry.country} is an island!` : `${myCountry.country} is not an island.`)