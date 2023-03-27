//Function to say hello world!
const greeting = prompt(`Do you want a greeting? (Type something if yes, click cancel if no.)`)
function helloWorld() {
    console.log(`Hello World!`)
}
if(greeting) {
    helloWorld()
}
//Lucian's Luscious Lasagna 
const expectedMinutesInOven = 40;
const ovenBakeTime = Number(prompt(`How many minutes has it spent in the oven? (40 mins max)`))
const lasagnaLayers = Number(prompt(`How many layers of lasagna are there?`))

//Calcs the remaining minutes the lasagna has in the oven
function remainingMinutesInOven(minutesInOven) {
    return 40 - minutesInOven;
}
console.log(`The remaining minutes the lasagna has in the oven is ${remainingMinutesInOven(ovenBakeTime)}!`)

//Calcs the prep time of the lasagna based upon the amount to layers
function preparationTimeInLayers(layersOfLasagna) {
    return layersOfLasagna * 2;
}
console.log(`The amount of minutes spent prepping the lasagna layers was ${preparationTimeInLayers(lasagnaLayers)}.`)

//Calcs the total amount of minutes the lasagna has been spent baking
function totalTimeInMinutes(prepTime, bakingTime) {
    return prepTime + bakingTime;
}
console.log(`The total bake time of the lasagna was ${totalTimeInMinutes(preparationTimeInLayers(lasagnaLayers), ovenBakeTime)} minutes!`)