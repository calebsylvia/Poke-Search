

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
    
        console.log(favorites)
        localStorage.setItem("Favorites", JSON.stringify(favorites))
}


export { saveLocal, getLocal, removeLocal }