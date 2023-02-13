//Test Data 1
let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;
let marksBMI = marksMass / (marksHeight ** 2);
let johnsBMI = johnsMass / johnsHeight ** 2;
if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`)
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`)
}
//Test Data 2
marksMass = 95;
marksHeight = 1.88;
johnsMass = 85;
johnsHeight = 1.76;
marksBMI = marksMass / (marksHeight ** 2);
johnsBMI = johnsMass / johnsHeight ** 2;
if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`)
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`)
}