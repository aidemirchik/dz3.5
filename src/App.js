import React from "react";
import PokemonDetails from "./PokemonDetails";

function App() {
  return (
    <div>
      <PokemonDetails name="pikachu" />
      <PokemonDetails name="charmander" />
      <PokemonDetails name="bulbasaur" />
    </div>
  );
}

export default App;