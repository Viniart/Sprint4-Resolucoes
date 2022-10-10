let numero, resultado;

numero = document.getElementById("numero");
resultado = document.getElementById("resultado")

gerarTabuada = () => {
    let tabuada = "";

    // Não esquecer do .value para pegar o valor do input!
    for (let index = 0; index < numero.value; index++) {
        // Usando interpolação
        tabuada += `${numero.value} X ${index} = ${numero.value * index} <br>`;

        // Usando concatenação
        // tabuada += numero.value + " X " + index + " = " + (numero.value * index) + "<br>"
    }

    resultado.innerHTML = tabuada;
}