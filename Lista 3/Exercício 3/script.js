
let inputCep = document.getElementById("inputCep");
let inputEstado = document.getElementById("inputEstado");
let inputCidade = document.getElementById("inputCidade");
let inputBairro = document.getElementById("inputBairro");
let inputEndereco = document.getElementById("inputEndereco");

buscarCep = () => {

    // O endpoint pede tanto o Estado quando a Cidade para buscar o CEP
    // (Verificar documentação do ViaCep)
    let endpoint = `https://viacep.com.br/ws/${inputCep.value}/json/`

    fetch(endpoint, {
        method: 'GET',
        headers: {'Content-Type': "application/json"}
    })
    .then(response => response.json())
    .then(result => {

        inputEstado.value = result.uf
        inputCidade.value = result.localidade
        inputBairro.value = result.bairro
        inputEndereco.value = result.logradouro + ", " + result.complemento
        
        console.log(result);
    })
}

verificarInputCep = () => {
    if(inputCep.value.length > 7)
    {
        buscarCep();
    }
}

inputCep.addEventListener('input', verificarInputCep)