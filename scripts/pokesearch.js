let searchBar = document.getElementById("searchBar");
let pokeName = document.getElementById("pokeName");
let skin = document.getElementById("skin");
let changeSkinBtn = document.getElementById("changeSkinBtn");
let pokemonDisplay = document.getElementById("pokemonDisplay");
let favPokemon = document.getElementById("favPokemon");
let pickRandom = document.getElementById("pickRandom");
let type = document.getElementById("type");
let hp = document.getElementById("hp");
let atk = document.getElementById("atk");
let def = document.getElementById("def");
let spAtk = document.getElementById("spAtk");
let spDef = document.getElementById("spDef");
let spd = document.getElementById("spd");
let typeText = document.getElementById("typeText");
let habitat = document.getElementById("habitat");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let moves = document.getElementById("moves");
let ability1 = document.getElementById("ability1");
let ability2 = document.getElementById("ability2");
let hiddenAbility = document.getElementById("hiddenAbility");
let evolutionChart = document.getElementById("evolutionChart");
let shiny = false;
let data;
let normalSrc;
let shinySrc;

async function apiCall(pokemon){

    searchBar.value = "";

    const prom = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokeData = await prom.json();
    
    console.log(pokeData);

    if(pokeData.id >= 650){
        alert("Please enter Pokemon up to Generation 5.");
    }else{

    const locProm = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/encounters`);
    const loc = await locProm.json();
    
        if(loc.length > 0){
            let randomLocation = Math.floor(Math.random() * loc.length);
            habitat.textContent = `LOCATION: ${(loc[randomLocation].location_area.name.toUpperCase()).replaceAll("-", " ")}`;
        }else{
            habitat.textContent = "LOCATION: N/A";
        }

    // const evolProm = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`);
    // const evolResp = await evolProm.json();

    // let evoURL = evolResp.evolution_chain.url;

    
    
    

    pokeName.textContent = `${pokeData.name.toUpperCase()} NO. ${pokeData.id}`;
    pokemonDisplay.src = pokeData.sprites.other["official-artwork"].front_default;

    normalSrc = pokeData.sprites.other["official-artwork"].front_default;
    shinySrc = pokeData.sprites.other["official-artwork"].front_shiny;


    type.textContent = "TYPE: ";

    hp.textContent = `HP- ${pokeData.stats[0].base_stat}`;
    atk.textContent = `ATK- ${pokeData.stats[1].base_stat}`;
    def.textContent = `DEF- ${pokeData.stats[2].base_stat}`;
    spAtk.textContent = `SP. ATK- ${pokeData.stats[3].base_stat}`;
    spDef.textContent = `SP. DEF- ${pokeData.stats[4].base_stat}`;
    spd.textContent = `SPD- ${pokeData.stats[5].base_stat}`;

    ability1.textContent = `${pokeData.abilities[0].ability.name.toUpperCase()}`;

    if(pokeData.abilities.length > 2){
        ability2.textContent = `${pokeData.abilities[1].ability.name.toUpperCase()}`;
        hiddenAbility.innerHTML = `HIDDEN ABILITY:<br> ${pokeData.abilities[2].ability.name.toUpperCase()}`;
    }else if(pokeData.abilities.length == 2){
        if(pokeData.abilities[1].is_hidden === true){
            ability2.innerHTML = `HIDDEN ABILITY:<br> ${pokeData.abilities[1].ability.name.toUpperCase()}`;
            hiddenAbility.textContent = "";
        }else{
            ability2.textContent = `${pokeData.abilities[1].ability.name.toUpperCase()}`;
            hiddenAbility.textContent = " ";
        }
    }else{
        ability2.textContent = " ";
        hiddenAbility.textContent = " ";
    }

    weight.textContent = `WEIGHT: ${Math.round(pokeData.weight / 4.536)} LBS.`;
    height.textContent = `HEIGHT: ${Math.round(pokeData.height / 3.048)} FT.`;

    for(let i = 0; i < pokeData.moves.length; i++){
        let p = document.createElement("p");
        p.classList.add("ml-2");
        p.textContent = `${pokeData.moves[i].move.name.toUpperCase()}`;

        moves.appendChild(p);
    }

    for(let j = 0; j < pokeData.types.length; j++){
        let span = document.createElement("span");

        switch(pokeData.types[j].type.name){
            case "grass":
                span.textContent = "GRASS";
                span.className = "bg-green-600 rounded-lg py-2 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "fire":
                span.textContent = "FIRE";
                span.className = "bg-red-600 rounded-lg py-2 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "water":
                span.textContent = "WATER";
                span.className = "rounded-lg py-2 px-4 my-auto ml-5 bg-blue-500 text-white";
                type.appendChild(span);
                break;
            case "rock":
                span.textContent = "ROCK";
                span.className = "rounded-lg py-2 px-4 my-auto ml-5 bg-amber-900 text-white";
                type.appendChild(span);
                break;
            case "electric":
                span.textContent = "ELECTRIC";
                span.className = "bg-yellow-500 rounded-lg py-2 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "dragon":
                span.textContent = "DRAGON";
                span.className = "bg-sky-950 rounded-lg py-2 px-4 my-auto ml-5 text-white";
                type.appendChild(span);
                break;
            case "bug":
                span.textContent = "BUG";
                span.className = "bg-green-900 rounded-lg py-2 px-4 my-auto ml-5 text-white";
                type.appendChild(span);
                break;
            case "dark": 
                span.textContent = "DARK";
                span.className = "bg-green-600 rounded-lg py-2 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "fighting":
                span.textContent = "FIGHTING";
                span.className = "bg-green-600 rounded-lg py-2 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "fairy":
                span.textContent = "FAIRY";
                span.className = "bg-green-600 rounded-lg py-2 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "flying":
                span.textContent = "FLYING";
                span.className = "bg-sky-300 rounded-lg py-2 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "ghost":
                span.textContent = "GHOST";
                span.className = "bg-violet-950 rounded-lg py-2 px-4 my-auto ml-5 text-white";
                type.appendChild(span);
                break;
            case "ice":
                span.textContent = "ICE";
                span.className = "bg-cyan-200 rounded-lg py-3 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "normal":
                span.textContent = "NORMAL";
                span.className = "bg-gray-300 rounded-lg py-2 px-4 my-auto ml-5 text-black";
                type.appendChild(span);
                break;
            case "poison":
                span.textContent = "POISON";
                span.className = "bg-violet-400 rounded-lg py-2 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "psychic":
                span.textContent = "PSYCHIC";
                span.className = "bg-fuchsia-500 rounded-lg py-2 px-4 my-auto ml-5";
                type.appendChild(span);
                break;
            case "steel":
                span.textContent = "STEEL";
                span.className = "bg-neutral-600 rounded-lg py-2 px-4 my-auto ml-5 text-white";
                type.appendChild(span);
                break;
            default:
                span.textContent = "N/A";
                break;
        }

    }


}
}

searchBar.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        type.innerHTML = "";
        apiCall(searchBar.value.toLowerCase());
    }
});

pickRandom.addEventListener('click', (e) => {
    let random = Math.floor(Math.random() * 650);
    type.innerHTML = "";
    apiCall(random);
});

changeSkinBtn.addEventListener('click', () => {
    if(!shiny){
        console.log("im shiny")
        shiny = true;
        pokemonDisplay.src = shinySrc;
    }else{
        console.log('im not shiny');
        shiny = false;
        pokemonDisplay.src = normalSrc;
    }
});

window.onload(apiCall(1));


