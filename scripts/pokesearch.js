let searchBar = document.getElementById("searchBar");
let pokeName = document.getElementById("pokeName");
let skin = document.getElementById("skin");
let changeSkinBtn = document.getElementById("changeSkinBtn");
let pokemonDisplay = document.getElementById("pokemonDisplay");
let favPokemon = document.getElementById("favPokemon");
let favList = document.getElementById("favList");
let favCol = document.getElementById("favCol");
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
let firstEvolution = document.getElementById("firstEvolution");
let firstEvoImg = document.getElementById("firstEvoImg");
let shiny = false;
let data;
let normalSrc;
let shinySrc;
let evoData;


async function apiCall(pokemon){


    evolutionChart.innerHTML = "";
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

    

    pokeName.textContent = `${pokeData.name.toUpperCase()} NO. ${pokeData.id}`;
    let currentPokemon = pokeData.name.toUpperCase();
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
                span.className = "bg-green-600 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "fire":
                span.textContent = "FIRE";
                span.className = "bg-red-600 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "water":
                span.textContent = "WATER";
                span.className = "rounded-lg py-2 px-4 my-auto ml-3 md:ml-5 bg-blue-500 text-white";
                type.appendChild(span);
                break;
            case "rock":
                span.textContent = "ROCK";
                span.className = "rounded-lg py-2 px-4 my-auto ml-3 md:ml-5 bg-amber-900 text-white";
                type.appendChild(span);
                break;
            case "electric":
                span.textContent = "ELECTRIC";
                span.className = "bg-yellow-500 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "dragon":
                span.textContent = "DRAGON";
                span.className = "bg-sky-950 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5 text-white";
                type.appendChild(span);
                break;
            case "bug":
                span.textContent = "BUG";
                span.className = "bg-green-900 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5 text-white";
                type.appendChild(span);
                break;
            case "dark": 
                span.textContent = "DARK";
                span.className = "bg-green-600 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "fighting":
                span.textContent = "FIGHTING";
                span.className = "bg-green-600 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "fairy":
                span.textContent = "FAIRY";
                span.className = "bg-green-600 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "flying":
                span.textContent = "FLYING";
                span.className = "bg-sky-300 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "ghost":
                span.textContent = "GHOST";
                span.className = "bg-violet-950 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5 text-white";
                type.appendChild(span);
                break;
            case "ice":
                span.textContent = "ICE";
                span.className = "bg-cyan-200 rounded-lg py-3 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "normal":
                span.textContent = "NORMAL";
                span.className = "bg-gray-300 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5 text-black";
                type.appendChild(span);
                break;
            case "poison":
                span.textContent = "POISON";
                span.className = "bg-violet-400 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "psychic":
                span.textContent = "PSYCHIC";
                span.className = "bg-fuchsia-500 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5";
                type.appendChild(span);
                break;
            case "steel":
                span.textContent = "STEEL";
                span.className = "bg-neutral-600 rounded-lg py-2 px-4 my-auto ml-3 md:ml-5 text-white";
                type.appendChild(span);
                break;
            default:
                span.textContent = "N/A";
                break;
        }

    }

    const specProm = await fetch(`${pokeData.species.url}`);
    const specResp = await specProm.json();
    console.log(specResp);

    const evoChain = await fetch(`${specResp.evolution_chain.url}`);
    const evoResp = await evoChain.json();
    console.log(evoResp);

    if (evoResp.chain.evolves_to.length === 0) {
        evolutionChart.textContent = "N/A";
      } else {
        const evoArr = [evoResp.chain.species.name];
        const evoIt = (chain) => {
          if (chain.evolves_to.length === 0) return;
          chain.evolves_to.forEach((evo) => {
            evoArr.push(evo.species.name);
            evoIt(evo);
          });
        };
        evoIt(evoResp.chain);
        console.log(evoArr);
        for(let i = 0; i < evoArr.length; i++){
            evoCall(evoArr[i]);
            console.log(evoArr[i]);
        }
      }

      

        async function evoCall(name){
            const evoProm = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const evoData = await evoProm.json();

            let evoImg = document.createElement("img");
            let evoDiv = document.createElement("div");
            let evoName = document.createElement("evoName");

            evoImg.src = evoData.sprites.other["showdown"].front_default;
            evoImg.className = "mx-auto w-28 h-28 pb-3";
            evoDiv.className = "mt-10";
            evoDiv.appendChild(evoImg);
            evoDiv.appendChild(evoName);
            evoName.textContent = evoData.name.toUpperCase();
            evolutionChart.appendChild(evoDiv);
    }



    favPokemon.addEventListener('click', (e) => {
        saveLocal(pokeData.name);
    });

    favList.addEventListener('click', () => {
        let favorites = getLocal();

        favCol.innerHTML = "";

        favorites.map(pokeNames => {

        let favDiv = document.createElement("div");
        let favName = document.createElement("p");
        let changeTo = document.createElement("button")
        let removeFav = document.createElement("button");
        let btnImg = document.createElement("img");

    
        favDiv.className = "flex bg-white rounded-xl py-5 px-3 relative";
        favName.className = "my-auto text-xl";
        favName.innerText = pokeNames.toUpperCase();
        removeFav.type = "button";
        removeFav.className = "absolute right-2 top-4";
        btnImg.src = "./assets/MinusCircle.png";
        btnImg.className = "w-8";

        removeFav.addEventListener('click', () => {
            removeLocal(pokeData.name);

            favDiv.remove();
        })

        removeFav.appendChild(btnImg);
        favDiv.appendChild(favName);
        favDiv.appendChild(removeFav);
        favCol.appendChild(favDiv);
        })
    })

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
        shiny = true;
        pokemonDisplay.src = shinySrc;
    }else{
        shiny = false;
        pokemonDisplay.src = normalSrc;
    }
});



// Favorite

const saveLocal = (pokemon) => {
    let favorites = getLocal();

    if(!favorites.includes(pokemon)){
        favorites.push(pokemon);
    }
    localStorage.setItem("Favorites", JSON.stringify(favorites));
}

const getLocal = () => {
    let localData = localStorage.getItem("Favorites");

    if(localData == null){
        return [];
    }
    return JSON.parse(localData);
}

const removeLocal = (pokemon) => {
        let favorites = getLocal();
        let index = favorites.indexOf(pokemon);
    
        favorites.splice(index, 1);
    
        localStorage.setItem("Favorites", JSON.stringify(favorites))
}


window.onload(apiCall(1));


