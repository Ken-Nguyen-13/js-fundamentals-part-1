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

////////////////////////////////////////////////////////////////////////////////////////////////////////

//Calculates then average to "numOfSums" sums of randomly generated numbers

// let sumOfNums = 0;
// let sumOfSumOfNums = 0;
// let numOfSums = 100000;

// for (let i = 0; i <= numOfSums - 1; i++) {
//    for (let i = 0; i <= 99; i++) {
//       sumOfNums += Math.random()
//    }
//    sumOfSumOfNums += sumOfNums;
//    sumOfNums = 0;
// }

// console.log((sumOfSumOfNums / numOfSums).toFixed(4))

//Every time I said attribute, I meant property
function Animal(kg) {
  // Constructor Function called "Animal" is declared
  this.weight = kg || 0; // Unusable weight to zero
  // Has initial attribute of "weight"
}

Animal.prototype.eats = function (amount) {
  this.weight += amount; // "Eats" is added to "Animal" as a method and uses "weight" and "amount" to assign a value to it
};

Animal.prototype.usage = function (amount) {
  this.weight -= amount; // "Usage" is added to "Animal" as a method and uses "weight" and "amount" to assign a value to it
};

function Farmanimal(kg, liter) {
  // Constructor Function called "Farmanimal"
  Animal.call(this, kg); //Q: What does "kg" in the call() do? It's not a attribute; it's a parameter //Gets the all attributes from "Animal" including prototypes and copies them to Farmanimal
  this.produce = liter || 0; // Unusable produce to 0
  // Adds "Produce" to Farmanimal's attributes and given a value based on "liter" a parameter of Farmanimal
}

Farmanimal.prototype = new Animal(); // Declares "Animal" as parent of "Farmanimal" by declaring a prototype of "Farmanimal" with a value of an instance of "Animal"
Farmanimal.prototype.producing = // Adds "producing" to "Farmanimal" as an attribute returning the "produce", an attribute added when declaring the "Farmanimal" constructor function
  function () {
    return this.produce;
  };

function Cow(name, kg, liter) {
  Farmanimal.call(this, kg, liter); //Get all the attributes from "Farmanimal" including prototypesand copies them to "Cow"
  this.name = name || "noname"; // Unusable name as default
  // Adds "name" to the list of attributes of "Cow" and given a value based on "name" a parameter of "Cow"
}
Cow.prototype = new Farmanimal(); // Declares "Farmanimal" as parent of "Cow" by declaring a prototype of "Cow" with a value of an instance of "Farmanimal"
Cow.prototype.toString = // Adds a method to "Cow" which return a string using the "name", "weight" and "produce", attributes given to "Cow" through inheritance
  function () {
    return this.name + ": " + this.weight + " kg, " + this.produce + " liters";
  };

var m = new Cow("Rosey", 560, 12); // Instance of "Cow" assigned to "m"
console.log(m.toString()); // Rosey: 560 kg, 12 liters

/*------------------_Viope_7-2_-----------------------*/

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
Person.prototype.name = function () {
  return this.lastname + " " + this.firstname;
};

function Customer(firstname, lastname, id, spent) {
  Person.call(this, firstname, lastname);
  this.id = id;
  this.spent = spent || 0;
}
Customer.prototype.name = function () {
  return this.lastname + " " + this.firstname;
};
Customer.prototype.bonus = function () {
  if (this.spent > 1000) {
    if (this.spent > 5000) {
      return "gold";
    } else {
      return "silver";
    }
  } else {
    return "basic";
  }
};

var customer1 = new Customer("Cara", `Coder`, 2, 1500);

console.log(customer1.bonus());

//   const infinity = Infinity;
//   console.log(infinity)
//  const arr = [1, 2, 3, 4, 5, 0]
//  console.log(Math.min.apply(null, arr))
//  console.log(Math.min(arr))

// Escape characters
console.log('Hi! I\'m Ken!')

const infinity2 = Infinity;
console.log(typeof infinity2)
const bigIntTest = BigInt(10000000000000000000000000000)
console.log(typeof bigIntTest)
const testArr = [Infinity, 1];
const testObj = {
  n1: 1,
  n2: 2
}
console.log(typeof testArr)
console.log(typeof testObj)

const pi = Math.PI;

function circumferenceCalc() {
  const circumference = (Math.random() * 1000).toFixed(2);
  const radius = (circumference / (2 * pi)).toFixed(2)
  console.log(`A circle with a circumference of ${circumference}cm, has a radius of ${radius}cm.`)
}
const calcTimeout = setTimeout(circumferenceCalc, 2000)
const e = Math.E;
const gelfondsConstant = pi * e;
console.log(`Gelfond's constant is pi * e or ${gelfondsConstant}.`)

const testVariable = 2^10; // "^" takes the bigger number beside it and subtracts it from the smaller number besides it.
const testVariable2 = 2&7; // Bitwise "AND" operator.
const testVariable3 = !!0; //Converts values to boolean
const testVariable4 = !!!0; // If there's a odd number of "!", then it acts like just one "!". If an even amount, then they all cancel out
const testVariable5 = 19 ** 19 ** 19;
console.log(testVariable, testVariable2, testVariable3,testVariable4, testVariable5)

const arr = [2, 'Strawberries', 91, 6]
const add1 = arr.map(input => input += 1)

const testArrowFunc = (num) => {
  num++;
  return num; // Why doesn't return num++ work?
}
console.log(testArrowFunc(4))
console.log(arr, add1)
console.log(this)

function spreadSyntaxTest() {
 return [...arr.splice(1, 2)]
}
const spreadSyntaxTestResult = spreadSyntaxTest();
console.log(arr, spreadSyntaxTestResult)

const fakePi = 3;
console.log(Math.PI = fakePi)

// Scope Test
function f1() {
  f2();
}
function f2() {
  console.log(`This works`);
}
f1()

var x = `Str`; // Global Variable

function one() {
  two();
}
function two() {
  let x = 1; // Local Variable
  console.log(x)
}
one() // --> 1
console.log(x)

let testVariable6 = 'this is a string'

// function three() {
//   for (let i = 0; i < 3; i++) {
//     console.log(testVariable6)
//     let string = `str`
//   }
//   return string;
// }
// const testVariable7 = three();
// console.log(testVariable7)