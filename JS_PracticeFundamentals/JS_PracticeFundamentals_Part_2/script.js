function describeCountry(country, population, capitalCity) {
    const countryDescription = `${country} has ${population} people and its capital city is ${capitalCity}.`
    return countryDescription
}

const usaDescription = describeCountry('The U.S.A', 333000000, 'Washington D.C');
const vietnamDescription = describeCountry('Vietnam', 99000000, 'Hanoi')
const latviaDescription = describeCountry('Latvia', 1837562, 'Riga')
console.log(usaDescription, vietnamDescription, latviaDescription);