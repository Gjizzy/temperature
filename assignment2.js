function convertToCelsiusToFahrenheit() {
    let celsius = prompt("Enter the temperature in Cesius");
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("results").innerHTML = (fahrenheit + " Fahrenheit");
}




