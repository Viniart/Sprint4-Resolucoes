
let inputRua = document.getElementById("inputRua");

let listaCep = document.getElementById("listaCep")

buscarCidades = () => {

    // O endpoint pede tanto o Estado quando a Cidade para buscar o CEP
    // (Verificar documentação do ViaCep)
    let endpoint = `https://viacep.com.br/ws/SP/Sao Paulo/${inputRua.value}/json/`

    fetch(endpoint, {
        method: 'GET',
        headers: {'Content-Type': "application/json"}
    })
    .then(response => response.json())
    .then(result => {
        listaCep.innerHTML = '<p>Lista de CEPs:</p>';

        for (let index = 0; index < result.length; index++) {
            listaCep.innerHTML += `<p>${result[index].cep}</p>`
        }
        
        console.log(result);
    })
}


