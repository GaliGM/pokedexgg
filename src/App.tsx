import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import QueteValidee from "./assets/QueteValidee.png";
import Bulbasaur from "./assets/bulbasaur.png";

const pokemonList = [
  {
    id: 0,
    name: "Bulbasaur",
    imgSrc: Bulbasaur,
  },
  {
    id: 1,
    name: "Mew",
    imgSrc: undefined
  },
  {
    id: 2,
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
        <button onClick={() => setPokemonName("Bulbasaur")} className="button"> Bulbasaur</button>
        <button onClick={() => setPokemonName("Mew")} className="button"> Mew </button>
        <button onClick={() => setPokemonName("Guillaumechu de la WCS")} className="button"> Guillaumechu </button>
      </nav>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;