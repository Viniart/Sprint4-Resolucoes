let altura, peso, imc;

// Pegar o input altura
altura = document.getElementById("altura");
peso = document.getElementById("peso");

// Pegar a div para mostrar o resultado
div = document.getElementById("resultado");

calcularImc = () => {
    // Se necessário pode converter texto para número decimal (parseFloat)
    imc = peso.value / (altura.value * altura.value);

    div.innerHTML = imc;
}