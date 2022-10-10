// Variáveis para os resultados da conversão
let tempFahrenheit, tempCelsius;

// Variáveis para os inputs
let fahrenheit, celsius;
// Variáveis apra armazenar os resultados
let resultadoFahrenheit, resultadoCelsius;

resultadoFahrenheit = document.getElementById("resultadoFahrenheit");
resultadoCelsius = document.getElementById("resultadoCelsius");

fahrenheit = document.getElementById("fahrenheit");
celsius = document.getElementById("celsius");

// Temperatura Fahrenheit = Temperatura Celsius x 1,8 + 32
// Temperatura Celsius = Temperatura Fahrenheit - 32 / 1,8

converterCelsiusParaFahrenheit = () => {  
    tempFahrenheit = celsius.value * 1.8 + 32;

    resultadoFahrenheit.innerHTML = tempFahrenheit
}

converterFahrenheitParaCelsius = () => {  
    tempCelsius = (fahrenheit.value - 32) / 1.8;

    resultadoCelsius.innerHTML = tempCelsius
}