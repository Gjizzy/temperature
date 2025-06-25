function convertTemperature(startValue, scale) {
  
    if (scale === "C") {
    // Loop from startValue to endValue, including endValue
  for (let temperature = startValue; temperature <= endValue; temperature++) {
    // Temperature Converter
    console.log(`Temperature: ${temperature}°C`);
    // Fahrenheit = (Celsius * 9/5) + 32;
    // if (temperature > 30) {
    //   console.log("Temperature");
    // }
  }
}
   

if (scale === "C" || scale === "c") { // Check if the scale is Celsius
      convertedTemperature = (temperature * 9 / 5) + 32; // Convert Celsius to Fahrenheit
      console.log(`${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`); // Display the conversion result
    } else if (scale === "F" || scale === "f") { // Check if the scale is Fahrenheit
      convertedTemperature = (temperature - 32) * 5 / 9; // Convert Fahrenheit to Celsius
      console.log(`${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`); // Display the conversion result
    } else {
      console.log("Invalid scale entered. Please use 'C' or 'F'.");
      return; // Exit the function if the scale is invalid
    }
  }
}


// Convert and display temperatures from 0 to 50 Celsius in increments of 10
for (let celsius = 0; celsius <= 50; celsius += 10) {
  let fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
}

start_temp_str = input("Enter the starting temperature: ")
    end_temp_str = input("Enter the ending temperature: ")
    scale = input("Enter the scale (C or F): ")

// Call the function with user inputs
convertTemperatureRange(startCelsius, endCelsius, 'C', 'F');















