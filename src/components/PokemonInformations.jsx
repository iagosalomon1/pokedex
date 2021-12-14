import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function PokemonInformations(props) {
    const navigate = useNavigate();

    function goBack() {
        navigate('/')
    }

    const [isLoading, setIsLoading] = useState(true)
    const [pokemonsDetails, setPokemonsDetails] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then((data) => {
                console.log('data', data)
                setPokemonsDetails({
                    id: data.id,
                    name: data.name.toUpperCase(),
                    abilities: data.abilities,
                    height: data.height,
                    weight: data.weight,
                    type: data.types,
                    img: data.sprites.other.home.front_default
                })
                setIsLoading(false);
            }).catch(err => alert(err));
    }, [])
    console.log('pokemonsDetails', pokemonsDetails)

    return (
        <>
            {

                isLoading ? '' :
                    <div>
                        <img src='/assets/img/pokedex.jpg'>
                        </img>
                        <div className='grid grid-cols-3'>
                            <div className='flex justify-center items-center'>
                                <button className='self-baseline' onClick={() => goBack()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>

                                #ID: {pokemonsDetails.id}{" "}
                                Height: {(pokemonsDetails.height * 0.1).toString().slice(0, 4)}m{" "}
                                Weight: {(pokemonsDetails.weight * 0.1).toString().slice(0, 4)}kg{" "} <br />
                                Abilities: {pokemonsDetails.abilities.map((abilities => {
                                    return `${abilities.ability.name} `
                                }))} <br />
                                Type: {pokemonsDetails.type?.map((types) => {
                                    return `${types.type.name} `
                                })}

                            </div>


                            <div className='inline text-center'>
                                <h1 className='flex justify-center'>
                                    {pokemonsDetails.name}
                                </h1>
                                <img className="w-100 h-auto" src={pokemonsDetails.img} alt={pokemonsDetails.name}>
                                </img>
                            </div>

                        </div >
                    </div>
            }
        </>
    )
}
