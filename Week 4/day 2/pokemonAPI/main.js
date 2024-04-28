console.log('running')

let pokeList = document.querySelector('.ten-poke-list');
//console.log(pokeList)
let pokeName = document.querySelector('#poke-of-the-day')
// console.log(pokeName)
let form = document.querySelector('form');
form.addEventListener('submit', searchPokemon);
let input = document.querySelector('input');
console.log(input)
let pokeImg = document.querySelector('.poke-img')
// console.log(poke-img)




async function searchPokemon(element) {
    element.preventDefault();
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`);
    let pokemon = await response.json();
    // console.log(poke.name)
    pokeName.innerText = pokemon.name
    pokeImg.src = pokemon.sprites.front_shiny;
    console.log(pokeImg.src)
}








async function getTenPoke() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    let pokemon = await response.json();
    // console.log(pokemon.result.name)

    for (let i = 0; i < pokemon.results.length; i++) {
        // console.log(pokemon.results[i].name)
        let listItem = document.createElement('li');
        //put the name of poke as the text for the list item
        listItem.innerText = pokemon.results[i].name;
        pokeList.appendChild(listItem);
    }

}

// await means just wait, but we only use it when we use async key word

getTenPoke();