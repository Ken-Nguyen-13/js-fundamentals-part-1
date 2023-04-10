function dayRate(hourlyRate) {
    return hourlyRate * 8;
}
console.log(dayRate(89))

function daysInBudget(budget, hourlyRate) {
   return Math.floor(budget / (hourlyRate * 8))
}
console.log(daysInBudget(20000, 89))
