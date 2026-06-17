interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
}
function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
    return (
        <nav>{pokemonList.map((pokemon) => (
            <button key={pokemon.name} onClick={() => setPokemonName(pokemon.name)} className="button" >
                <figcaption className="name-pokemon">{pokemon.name}</figcaption>
            </button>))}
        </nav>
    )
}

export default NavBar;