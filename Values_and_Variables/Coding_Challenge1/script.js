let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;
let markHigherBMI = marksMass / (marksHeight ** 2) > johnsMass / johnsHeight ** 2;
console.log("For Test Data 1---Q: Is Mark's BMI higher than John's? A: That is " + markHigherBMI + ".");
marksMass = 95;
marksHeight = 1.88;
johnsMass = 85;
johnsHeight = 1.76;
markHigherBMI = marksMass / (marksHeight ** 2) > johnsMass / johnsHeight ** 2;
console.log("For Test Data 2---Q: Is Mark's BMI higher than John's? A: That is " + markHigherBMI + ".")