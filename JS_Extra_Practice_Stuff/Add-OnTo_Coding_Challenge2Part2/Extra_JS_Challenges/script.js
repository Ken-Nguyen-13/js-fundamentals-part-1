const jonas = {
  firstName: "Jonas",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}.`
);

// Returns 1st element from "arr"
const arr = [1, 2, 3, 4, 5, 6, 7];
function returnFirstElement(arr) {
  return arr[0];
}
console.log(returnFirstElement(arr));

// Takes age in years converts to age in days
function yearsToDays(years) {
  if (years > 0) {
    return years * 365;
  } else {
    return `${years} Is Not A Valid Number`;
  }
}
console.log(yearsToDays(-11));

// First name last name concatenation
function concatName(firstName, lastName) {
  return `${lastName}, ${firstName}.`;
}
console.log(concatName(`Joe`, `Joey`));
// Sum numbers until given number
function addUp(lastNum) {
  if (lastNum <= 1000) {
    let sum = 0;
    for (let i = 1; i <= lastNum; i++) {
      sum += i;
    }
    return sum;
  } else {
    return `Too High!`;
  }
}
console.log(addUp(100));

/*Checks if sentence is a pangram exercise*/
function checkPangram() {
  const result = document.getElementById('result');
  if (document.getElementById('pangramSubmission').value) {
    const submission = document.getElementById('pangramSubmission').value;
    let isPangram = true;
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    for (let i = 0; i <= 25; i++) {
      if (!submission.includes(letters[i])) {
        isPangram = false;
        console.log(submission)
        break;
      }
    }
    console.log(isPangram);
    result.textContent = `The answer is: ${isPangram}.`;
  } else {
    result.textContent = `There is no sentence :/`
  }
}
//console.log(submission.includes("a")) --> true
/*Compares people's ages*/
function Person(name, age) {
  this.name = name || "Someone";
  this.age = age || 0;
}
Person.prototype.compareAge = function (person) {
  let comparison;
    if (person.age > this.age) {
      comparison = `${person.name} is older than ${this.name}.`
    } else if (person.age === this.age) {
      comparison = `${person.name} is the same age as ${this.name}.`
    } else {
      comparison = `${person.name} is younger than ${this.name}.`
    }
    return comparison;
}
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1, p2, p3)

console.log(p1.compareAge(p2)) //➞ "Joel is older than me."
console.log(p1.compareAge(p3)) //➞ "Lily is the same age as me."
console.log(p2.compareAge(p1))//➞ "Samuel is younger than me."
console.log(p2.compareAge(p3))
console.log(p3.compareAge(p1))
console.log(p3.compareAge(p2))