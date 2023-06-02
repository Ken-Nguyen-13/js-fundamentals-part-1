let fibonacci = [1, 2]

for (let i = 0; i <= 1473; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1])
}
console.log(fibonacci.toString())