function lessThan100() {
    const result = document.getElementById('result');
    const a = Number(document.getElementById('n1').value)
    const b = Number(document.getElementById('n2').value)
    console.log(a + b)
    if(a + b < 100) {
        result.textContent = "It is";
    } else {
        result.textContent = "It is not";
    }
}
//lessThan100(Number(document.getElementById('n1').textContent), Number(document.getElementById('n2').textContent))

/*Once lessThan100 is called, we need to set result to either true or false*/