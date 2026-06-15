import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import QueteValidee from "./assets/QueteValidee.png";
import Bulbasaur from "./assets/bulbasaur.png";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: Bulbasaur,
  },
  {
    name: "Mew",
    imgSrc: undefined
  },
  {
    name: "Guillaumechu de la WCS",
    imgSrc: QueteValidee,
  },
];



function App() {
  const [pokemonName, setPokemonName] = useState("Bulbasaur");
  console.log(pokemonName)
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <nav>
        <button onClick={() => setPokemonName("Bulbasaur")} className="button">🔗 Bulbasaur</button>
        <button onClick={() => setPokemonName("Mew")} className="button">🔗 Mew</button>
      </nav>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;