import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SetPokemonDetails(props) {
    const navigate = useNavigate();

    function goToPokemonInformations() {
        navigate(`/pokemonsInformation/${pokemonsDetails.id}`)
    }

    const [pokemonsDetails, setPokemonsDetails] = useState([]);


    useEffect(() => {
        fetch(props.url)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setPokemonsDetails({
                    id: data.id,
                    name: data.name,
                    type: data.types,
                    img: data.sprites.other.home.front_default
                })
            });
    }, [props.url])
    console.log('pokemonsDetails', pokemonsDetails)

    return (
        <div className='shadow-md text-center hover:brightness-50'>
            <h1 className='pt-5'>
                #{pokemonsDetails.id}{" "}

                {pokemonsDetails.name}
            </h1>
            <img className=" w-100 h-auto" src={pokemonsDetails.img} alt={pokemonsDetails.name}>
            </img>
            <div>
                <button className='p-1 text-white rounded-full bg-black hover:brightness-125' onClick={() => { goToPokemonInformations() }}>
                    Pokémon Information
                </button>
            </div>
        </div >
    )
}