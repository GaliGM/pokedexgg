import QueteValidee from "../assets/QueteValidee.png";
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
        name: "Guillaumechu",
        imgSrc: QueteValidee,
    },
];

function PokemonCard() {
    const pokemon = pokemonList[2];
    return (
        <figure>
            {pokemon.imgSrc !== undefined ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
            < figcaption > {pokemon.name}</figcaption>
        </figure >);
}



export default PokemonCard;