import React, { useState, useEffect } from "react";
import "./styles.css";
import PokeCards from "./component/PokeCards";
import { mockPokemonsData } from "./mock/pokeData";

export default function App() {
  const [sortedPokemons, setSortedPokemons] = useState([]);

  useEffect(() => {
    const sortedData = [...mockPokemonsData].sort(
      (a, b) => a.name.length - b.name.length
    );
    setSortedPokemons(sortedData);
    console.log({ sortedPokemons });
  }, []);

  return (
    <div className="App">
      <h1>2. Challenge: Loops</h1>
      {sortedPokemons.map((pokemon) => (
        <PokeCards key={pokemon.name} pokemonData={pokemon} />
      ))}
    </div>
  );
}
