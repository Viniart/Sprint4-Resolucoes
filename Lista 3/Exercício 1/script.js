
let inputCep = document.getElementById("inputCep");

let listaCidades = document.getElementById("listaCidades")

buscarCidades = () => {

    let endpoint = `https://viacep.com.br/ws/${inputCep.value}/json/`

    fetch(endpoint, {
        method: 'GET',
        headers: {'Content-Type': "application/json"}
    })
    .then(response => response.json())
    .then(result => {

        listaCidades.innerHTML = `<p>Lista de Cidades:</p><p>${result.localidade}</p>`
        
        console.log(result);
    })
}


