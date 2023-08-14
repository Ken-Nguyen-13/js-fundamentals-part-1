/////////////////////////////////////////---VERSION 1---///////////////////////////////////////////////////////

// function primesUpTo1(num = 100) {
//   console.time("calculationTime1")

//   let numOfPrimes = 0;
//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;
//     for (let k = 2; k < i; k++) {
//       if (i % k === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//       numOfPrimes += 1;
//     }
//   }
//   console.log(`There were ${numOfPrimes} prime numbers!`);
//   console.timeEnd("calculationTime1") // ~755 seconds or 12 minutes upon opening
//   return [(numOfPrimes / num) * 100, num];
// }
// let [percentOfPrimes1, foundPrimesUpTo1] = primesUpTo(1000000);
// console.log(`${percentOfPrimes1.toFixed(3)}% of numbers up to ${foundPrimesUpTo1}, are prime.`);

/////////////////////////////////////////---VERSION 2---///////////////////////////////////////////////////////

// function primesUpTo2(num = 100) {
//   console.time("calculationTime2")
//   let numOfPrimes = 0;
//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;
//     for (let k = 2; k < Math.floor(Math.sqrt(i) + 1); k++) {
//       if (i % k === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//       numOfPrimes++
//     }
//   }
//   console.log(`There were ${numOfPrimes} prime numbers!`); // 78498
//   console.timeEnd("calculationTime2") // ~ 2340 ms to calculate all
//   return [(numOfPrimes / num) * 100, num];
// }
// let [percentOfPrimes2, foundPrimesUpTo2] = primesUpTo2(1000000);
// console.log(`${percentOfPrimes2.toFixed(3)}% of numbers up to ${foundPrimesUpTo2}, are prime.`);

/////////////////////////////////////////---VERSION 3---///////////////////////////////////////////////////////

function primesUpTo3(num = 100) {
  console.time("calculationTime3")
  const numAbove2 = num >= 2;
  let primes = numAbove2 ? [2] : [];
  if (numAbove2) {
    console.log(primes[0])
  }
  for (let i = 3; i <= num; i++) {
    let isPrime = true;
    for (let k = 0; primes[k] < Math.floor(Math.sqrt(i) + 1); k++) {
      if (i % primes[k] === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primes.push(i);
      console.log(i);
    }
  }
  let numOfPrimes = primes.length;
  console.log(`There were ${numOfPrimes} prime numbers!`); // 78498
  console.timeEnd("calculationTime3") // ~ 1550 ms to calculate all
  return [(numOfPrimes / num) * 100, num];
}
let [percentOfPrimes3, foundPrimesUpTo3] = primesUpTo3(1000000);
console.log(`${percentOfPrimes3.toFixed(3)}% of numbers up to ${foundPrimesUpTo3}, are prime.`);

/////////////////////////////////////////---VERSION 3 TYPE 2---///////////////////////////////////////////////////////

// function calcNumOfPrimes(num = 100) {
//   console.time("calculationTime4");
//   const numAbove1 = num > 0;
//   let primes = numAbove1 ? [2] : [];
//   if (numAbove1) {
//     console.log(primes[0]);
//   }
//   for (let i = 3; primes.length < num; i++) {
//     let isPrime = true;
//     for (let k = 0; primes[k] < Math.floor(Math.sqrt(i) + 1); k++) {
//       if (i % primes[k] === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       primes.push(i);
//       console.log(i);
//     }
//   }
//   let numOfPrimes = 0;
//   if (numAbove1) {
//     numOfPrimes = primes.length;
//   }
//   console.log(numOfPrimes === 1 ? `This is the first prime number!` : `These are the first ${numOfPrimes} prime numbers!`);
//   console.timeEnd("calculationTime4"); // ~ 30 seconds to calculate all
//   return [primes[primes.length - 1], num];
// }
// let [finalPrime, amountOfPrimes] = calcNumOfPrimes(1000000);
// let amountOfPrimesSuffix = "";
// switch (amountOfPrimes) {
//   case 1:
//     amountOfPrimesSuffix = "st";
//     break;
//   case 2:
//     amountOfPrimesSuffix = "nd";
//     break;
//   case 3:
//     amountOfPrimesSuffix = "rd";
//     break;
//   default:
//     amountOfPrimesSuffix = "th";
//     break;
// }
// console.log(`${finalPrime} is the ${amountOfPrimes + amountOfPrimesSuffix} prime number!`);
