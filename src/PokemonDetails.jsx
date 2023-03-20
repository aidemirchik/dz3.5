import React, { useState, useEffect } from "react";

function PokemonDetails(props) {
const [pokemonData, setPokemonData] = useState("");

useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
    .then(response => response.json())
    .then(data => setPokemonData({
        image: data.sprites.front_default, //фото
        name: data.species.name, //имя
        color: data.sprites.color.name, //цвеt
        abilities: data.abilities.map(ability => ability.ability.name) //способности
    }));
}, [props.name]);

return (
    <div>
    <img src={pokemonData.image} alt={pokemonData.name} />
    <h2>{pokemonData.name}</h2>
    <p>Color: {pokemonData.color}</p>
    <p>Abilities: {pokemonData.abilities.join(" ")}</p>
    </div>
);
}

export default PokemonDetails;