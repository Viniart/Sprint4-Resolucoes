let cards = document.getElementById("cards")

{/* <div class="card">
            <p>Charmander</p>
            <div class="linha"></div>
            <div class="card-dados">
                <p>8.1 kg Peso</p>
                <p>0.59 m Altura</p>
            </div>
            <p>Fire Tipo</p>
        </div> */}
const gerarPokemons = () => {
    // Laço de repetição executado 3 vezes para pegar 3 pokemons
    for (let index = 1; index <= 3; index++) {

    var endpoint = `https://pokeapi.co/api/v2/pokemon/${index}`;
    fetch(endpoint, {
        method: 'GET',
        headers: { 'Content-Type': "application/json" },
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            cards.innerHTML += `<div class='card'>
                    <p>${result.name}</p>
                    <div class='linha'></div> 
                    <div class='card-dados'> 
                        <p>${result.weight} kg Peso</p>
                        <p>${result.height} m Altura</p>
                    </div> <p>${result.types[0].type.name} Tipo</p>
                </div>`
        })

    }

}

gerarPokemons()
