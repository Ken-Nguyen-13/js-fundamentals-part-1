function convertCelcius() {
    let c = Number(document.querySelector("#celcius").value);
    document.querySelector("#fahrenheit").value = ((c * 1.8) + 32).toFixed(3);
    document.querySelector("#kelvin").value = (c + 273.15).toFixed(3);
}
function convertFahrenheit() {
    let f = Number(document.querySelector("#fahrenheit").value);
    document.querySelector("#celcius").value = ((f - 32) * (5 / 9)).toFixed(3)
    document.querySelector("#kelvin").value = (((f - 32) * (5 / 9)) + 273.15).toFixed(3);
}
function convertKelvin() {
    let k = Number(document.querySelector("#kelvin").value);
    document.querySelector("#celcius").value = (k - 273.15).toFixed(3);
    document.querySelector("#fahrenheit").value = (((k - 273.15) * 1.8) + 32).toFixed(3);
}