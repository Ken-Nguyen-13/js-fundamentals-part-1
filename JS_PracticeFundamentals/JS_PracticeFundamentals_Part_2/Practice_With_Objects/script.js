const myCountry = {
    country: "The U.S.A",
    capital: "Washington D.C",
    language: "English",
    population: 331,
    neighbors: ["Canada", "Mexico"]
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} 
neighboring countries, and and a capital named ${myCountry.capital}.`)

myCountry.population += 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} 
neighboring countries, and and a capital named ${myCountry.capital}.`)

myCountry['population'] -= 1;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} 
neighboring countries, and and a capital named ${myCountry.capital}.`)