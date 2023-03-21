// Write a function which asks the user their age 
// if the user's age is above 16, log to the console "you are old enough get a driver's license"
// else log to the console "you are not old enough"

function ableToGetDriversLiscence() {
    const userAge = prompt(`What is your age?`);
    userAge >= 16 ? console.log(`Because you're ${userAge}, you can get a drivers liscence! (Unlike me 😥)`) : console.log(`Because you are ${userAge}, you cannot get a drivers liscence. (That makes the two of us 🤷)`);
}
ableToGetDriversLiscence();

//8.5. Exercises: Arrays¶ 1
/*const practiceFile = [`273.15`]

practiceFile.push(42);
console.log(practiceFile);

practiceFile.push("Hello");
console.log(practiceFile);

practiceFile.push(false, -4.6, "87");
console.log(practiceFile);

//8.5. Exercises: Arrays¶ 2
const cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']
console.log(cargoHold);

cargoHold[cargoHold.indexOf('slinky')] = "space tether";
console.log(cargoHold);

const lastObjectInCargoHold = cargoHold.pop()
console.log(lastObjectInCargoHold);
console.log(cargoHold);

const firstObjectInCargoHold = cargoHold.shift()
console.log(firstObjectInCargoHold);
console.log(cargoHold);

cargoHold.unshift(1138);
cargoHold.push("20 meters");
console.log(cargoHold);

console.log(`Our cargo hold had ${cargoHold.length} objects in it. They were ${cargoHold}.`)

//8.5. Exercises: Arrays¶ 3
cargoHold.splice(3, 0, "keys")
console.log(cargoHold)

cargoHold.splice(cargoHold.indexOf("instruction manual"), 1);
console.log(cargoHold)

cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
console.log(cargoHold)*/

//8.5. Exercises: Arrays¶ 3
const holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
const holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
console.log(holdCabinet2);

console.log(holdCabinet1.slice(holdCabinet1.length -2));
console.log(holdCabinet1);

console.log(holdCabinet2.slice(1, 3));
console.log(holdCabinet2);

console.log(holdCabinet1.reverse());
console.log(`${holdCabinet1} so it does mutate the array.`);

console.log(holdCabinet2.sort());
console.log(holdCabinet2);