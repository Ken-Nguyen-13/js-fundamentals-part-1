// const bob = {
//     name: `Bob`,
//     testFunc(num) {
//         return this.name
//     }
// }
// console.log(bob.testFunc())
// console.log(`hello ${true === false ? `more ${bob.name}` : `bob is cheese`}`)

// function Person(firstName, lastName, fullName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = fullName;
// }

// const person1 = new Person(`Jake`, `Courier`, `Jake Courier`)
// console.log(person1)

function Animal(kg) {
  this.weight = kg || 0; // Unusable weight to zero
}

Animal.prototype.eats = function (amount) {
  this.weight += amount;
}; // Prototype "Eats" calcs weight upon "amount"
Animal.prototype.usage = function (amount) {
  this.weight -= amount;
}; // Prototype "Usage" calcs weight upon amount also

function Farmanimal(kg, liter) {
  Animal.call(this, kg); // Gets the attributes from "Animal" and copies them to Farmanimal
  this.produce = liter || 0; // Unusable produce to 0
}

Farmanimal.prototype = new Animal();
Farmanimal.prototype.producing = // Prototype to return the production value
  function () {
    return this.produce;
  };

function Cow(name, kg, liter) {
  Farmanimal.call(this, kg, liter); //Get all the attributes from "Farmanimal" and copies them to "Cow"
  this.name = name || "noname"; // Unusable name as default
}
Cow.prototype = new Farmanimal();
Cow.prototype.toString = // Converts the attributes to a readable string
  function () {
    return this.name + ": " + this.weight + " kg, " + this.produce + " liters";
  };

var m = new Cow("Rosey", 560, 12);
console.log(m.toString()); // Rosey: 500 kg, 12 liters

////////////////////////////////////////////////////////////////////////////////////////////////////////

//Calculates then average to "numOfSums" sums of randomly generated numbers

let sumOfNums = 0;
let sumOfSumOfNums = 0;
let numOfSums = 100000;

for (let i = 0; i <= numOfSums - 1; i++) {
   for (let i = 0; i <= 99; i++) {
      sumOfNums += Math.random()
   }
   sumOfSumOfNums += sumOfNums;
   sumOfNums = 0;
}

console.log((sumOfSumOfNums / numOfSums).toFixed(4))