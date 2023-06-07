// for (let i = 1; i <= 100; i++) {
//   let isPrime = true;
//   for (let k = 2; k < Math.floor(Math.sqrt(i) + 1); k++) {
//     if (i % k === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     primes.push(i);
//   }
// }

let primes = [];
let numOfPrimes = 10;
let i = 1;
while (primes.length <= numOfPrimes) {
  let isPrime = true;
  for (let k = 2; k < Math.floor(Math.sqrt(i) + 1); k++) {
    if (i % k === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
  i++;
}
console.log(primes);

for (let i = 0; i <= numOfPrimes; i++) {
  console.log(i + primes[i]);
}
