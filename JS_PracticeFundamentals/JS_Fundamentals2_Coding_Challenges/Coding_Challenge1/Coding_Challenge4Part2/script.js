// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip(bill) {
//     if (bill > 50) {
//       if (bill < 300) {
//         const tip = bill * 0.15;
//         tips.push(tip);
//       } else {
//         const tip = bill * 0.2;
//         tips.push(tip);
//       }
//     } else {
//       const tip = bill * 0.2;
//       tips.push(tip);
//     }
//   }
// for (let i = 0; i < bills.length; i++) {
//   calcTip(bills[i])
//   totals.push(bills[i] + tips[i])
// }
// console.log(bills)
// console.log(tips)
// console.log(totals)

// for (let i = 0; i < bills.length; i++) {
//     console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total was ${totals[i]}`)
// }

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([10, 20, 30]));
console.log(calcAverage([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]));

const i = 3;
const k = 3;
if (i / k !== 1) {
  console.log(`ekhfcsrkudfbherfgsreyufhsdouirc`);
}

const chapters = [5, 7, 25, 12, 3];

// for (let i = 0; i < chapters.length; i++) {
//   console.log(`Current Chapter: ${chapters[i]}.`);
//   for (let k = 1; k < chapters[i]; k++) {
//     console.log(k);
//   }
// }

// for (let i = 0; i < chapters.length; i++) {
//     console.log(chapters[i])
// }
let numOfPrimes = 0;

for (let i = 2; i < 100001; i++) {
    let isPrime = true;
  for (let k = 2; k < i; k++) {
    if (i % k === 0) {
        isPrime = false;
    }
  }
  if (isPrime) {
    console.log(i)
    numOfPrimes += 1;
  }
}
console.log(`There were ${numOfPrimes} prime numbers!`)