import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SetPokemonDetails(props) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonsDetails, setPokemonsDetails] = useState([]);


    function goToPokemonInformations() {
        navigate(`/pokemonsInformation/${pokemonsDetails.id}`)
    }

    useEffect(() => {
        fetch(props.url)
            .then(response => response.json())
            .then((data) => {
                setPokemonsDetails({
                    id: data.id,
                    name: data.name,
                    types: data.types,
                    img: data.sprites.other.home.front_default
                });
                setIsLoading(false);
            });
    }, [props.url])

    return (
        <>
            {
                isLoading ? '' :
                    <div className='shadow-md text-center hover:brightness-50'>
                        <h1 className='pt-5'>
                            <div className='flex p-3' >
                                <div className={`bg-${pokemonsDetails.types[0]?.type.name} rounded p-1`}>

                                    # {pokemonsDetails.id}
                                </div>
                            </div>
                        </h1>
                        <div>
                            <button className='p-1 rounded-full' onClick={() => { goToPokemonInformations() }}>
                                <img className=" w-100 h-auto" src={pokemonsDetails.img} alt={pokemonsDetails.name}>
                                </img>
                                <div>
                                    {pokemonsDetails.name}
                                </div>
                            </button>
                        </div>
                    </div >
            }
        </>
    )
}