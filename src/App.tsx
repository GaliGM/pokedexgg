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
    name: "mew",
  },
  {
    name: "Guillaumechu de la WCS",
    imgSrc: QueteValidee,
  },
];



function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[2]} />
    </div>
  );
}

export default App;