const bob = {
    name: `Bob`,
    testFunc(num) {
        return this.name
    }
}
console.log(bob.testFunc())
console.log(`hello ${true === false ? `more ${bob.name}` : `bob is cheese`}`)