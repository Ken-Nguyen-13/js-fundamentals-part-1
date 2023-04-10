//Annalyns Mission
const knightIsAwake = Boolean(prompt(`Is the knight awake? If yes, type something. If not, type nothing.`))
const archerIsAwake = Boolean(prompt(`Is the archer awake? If yes, type something. If not, type nothing.`))
const prisonerIsAwake = Boolean(prompt(`Is the Annalyns best friend awake? If yes, type something. If not, type nothing.`))
const petDogIsPresent = Boolean(prompt(`Is Annalyns dog present? If yes, type something. If not, type nothing.`));

//Checks if Annalyn can do fast attack 
function canFastAttack(knightIsAwake) {
    const canExecuteFastAttack = !knightIsAwake ? true : false;
    return canExecuteFastAttack;
}
console.log(`Can Annalyn execute fast attack? That's ${canFastAttack(knightIsAwake)}.`)

//Checks of Annalyn can spy
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if(knightIsAwake || archerIsAwake || prisonerIsAwake) {
        return true;
    } else {
        return false;
    }
}
console.log(`Can Annalyn spy on them? That's ${canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)}.`)

//Checks if Annalyn can signal to her friend
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if(!archerIsAwake && prisonerIsAwake) {
        return true;
    } else {
        return false;
    }
}
console.log(`Can Annalyn signal to her friend? That's ${canSignalPrisoner(archerIsAwake, prisonerIsAwake)}.`)

//Checks if Annalyn can free her friend
function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    if(petDogIsPresent) {
        if(!archerIsAwake) {
            return true;
        } else {
            return false;
        }
    } else if(!knightIsAwake && !archerIsAwake && prisonerIsAwake) {
        return true;
    } else {
        return false;
    }
}
console.log(`Can Annalyn free her friend? That's ${canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)}.`)