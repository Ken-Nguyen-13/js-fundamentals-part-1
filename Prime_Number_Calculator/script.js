// let numOfPrimes = 0;

// for (let i = 1; i < 100001; i++) {
//   let isPrime = true;
// for (let k = 2; k < i; k++) {
//   if (i % k === 0) {
//       isPrime = false;
//   }
// }
// if (isPrime) {
//   console.log(i)
//   numOfPrimes += 1;
// }
// }
// console.log(`There were ${numOfPrimes} prime numbers!`)
let numOfPrimes = 0;

for (let i = 1; i < 1000001; i++) {
  let isPrime = true;
  for (let k = 2; k < Math.floor(Math.sqrt(i) + 1); k++) {
    if (i % k === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(i);
    numOfPrimes += 1;
  }
}
console.log(`There were ${numOfPrimes} prime numbers!`);