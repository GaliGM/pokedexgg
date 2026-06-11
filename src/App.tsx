import "./App.css";
import PokemonCard from "./components/PokemonCard";
import QueteValidee from "./assets/QueteValidee.png";
import Bulbasaur from "./assets/bulbasaur.png";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: Bulbasaur,
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
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}

export default App;