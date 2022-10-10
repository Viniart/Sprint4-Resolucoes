let palavra, resultado;
palavra = document.getElementById("palavra");

let palavraInvertida;

resultado = document.getElementById("resultado")

inverterPalavra = () => {

    palavraInvertida = "";
    // Dentro do Javascript posso considerar uma palavra como um Vetor!
    // Cada letra é um elemento dentro do Vetor
    // Vetor é percorrido do final -> início
    for (let index = palavra.value.length - 1; index >= 0; index--) {
        console.log(palavra.value[index]);
        palavraInvertida += palavra.value[index]
    }

    resultado.innerHTML = palavraInvertida
}