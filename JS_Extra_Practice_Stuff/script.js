// Write a function which asks the user their age 
// if the user's age is above 16, log to the console "you are old enough get a driver's license"
// else log to the console "you are not old enough"

function ableToGetDriversLiscence() {
    const userAge = prompt(`What is your age?`);
    userAge >= 16 ? console.log(`You can get a drivers liscence! (Unlike me 😥)`) : console.log(`You cannot get a drivers liscence. (That makes the two of us 🤷)`);
}
ableToGetDriversLiscence();