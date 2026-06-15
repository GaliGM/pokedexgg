import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import QueteValidee from "./assets/QueteValidee.png";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
  {
    name: "Guillaumechu de la WCS",
    imgSrc: QueteValidee,
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (

    <div>
      <nav>
        {pokemonList.map((pokemon) => (
          <button
            key={pokemon.name}
            onClick={() => setPokemonName(pokemon.name)}
            className="button"
          >
            <figcaption className="name-pokemon">{pokemon.name}</figcaption>
          </button>
        ))}

      </nav>
      <PokemonCard pokemon={pokemon} />
    </div >
  );
}

export default App;