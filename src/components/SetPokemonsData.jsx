import { useEffect, useState } from "react/cjs/react.development";
import { SetPokemonDetails } from "./SetPokemonsDetails";

export function SetPokemonsData() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => {
                setPokemons(response.results)
            })
    }, []);

    return (
        <>
            <img src='/assets/img/wallpaper_pokemon.jpg' alt="pokemon wallpaper">
            </img>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    {pokemons.map((pokemon) => {
                        return <SetPokemonDetails key={pokemon.name} url={pokemon.url} />
                    })}
                </div>
            </div>
        </>
    )
}
