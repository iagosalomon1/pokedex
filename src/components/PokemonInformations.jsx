import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function PokemonInformations(props) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    const [pokemonsDetails, setPokemonsDetails] = useState([]);
    const { id } = useParams();
    const [isShiny, setIsShiny] = useState(false);
    const [isFemale, setIsFemale] = useState(false)


    function handleShinyClick() {
        setIsShiny(!isShiny);
    };

    function handleGenderClick() {
        setIsFemale(!isFemale)
    }


    function goBack() {
        navigate('/')
    };

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
                    types: data.types,
                    stats: data.stats,
                    img: data.sprites.other.home.front_default,
                    shiny: data.sprites.other.home.front_shiny,
                    female: data.sprites.other.home.front_female ? data.sprites.other.home.front_female : data.sprites.other.home.front_default,
                    shinyFemale: data.sprites.other.home.front_shiny_female ? data.sprites.other.home.front_shiny_female : data.sprites.other.home.front_shiny,
                })
                setIsLoading(false);
            }).catch(err => alert(err));
    }, [])
    console.log('pokemonsDetails', pokemonsDetails)

    return (
        <>
            {
                isLoading ? "" :
                    <div>
                        <img src='/assets/img/pokedex.jpg' alt="pokemon img">
                        </img>
                        <div className='grid grid-cols-3'>
                            <div className='grid content-stretch items-start'>
                                <button className='self-baseline grid justify-items-end' onClick={() => goBack()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className='grid justify-items-center'>
                                    <span className='p-0.5 flex'>
                                        <h1 className='font-bold'>
                                            #ID:{' '}
                                        </h1>
                                        {pokemonsDetails.id}
                                    </span>
                                    <span className='p-0.5  flex'>
                                        <h1 className='font-bold'>
                                            Height:
                                        </h1>
                                        {(pokemonsDetails.height * 0.1).toString().slice(0, 4)}m
                                    </span>
                                    <span className='p-0.5 flex'>
                                        <h1 className='font-bold'>
                                            Weight:
                                        </h1>
                                        {(pokemonsDetails.weight * 0.1).toString().slice(0, 4)}kg
                                    </span>
                                    <span className='p-0.5 flex'>
                                        <h1 className='font-bold'>
                                            Abilities:
                                        </h1>
                                        {pokemonsDetails.abilities.map((abilities => {
                                            return `${abilities.ability.name} `
                                        }))}
                                    </span>
                                    <span className='flex p-0.5'>
                                        <h1 className='font-bold'>
                                            Type:
                                        </h1>
                                        {pokemonsDetails.types?.map((type) => {
                                            return (
                                                <ul>
                                                    <li className={`rounded bg-${type.type.name}`}>
                                                        {` ${type.type.name}`}
                                                    </li>
                                                </ul>
                                            )
                                        })}
                                    </span>
                                </div>
                            </div>


                            <div className='inline text-center'>
                                <h1 className='flex justify-center'>
                                    {pokemonsDetails.name}
                                </h1>

                                {
                                    isShiny ?
                                        isFemale ?
                                            <img className="w-100 h-auto" src={pokemonsDetails.shinyFemale} alt={pokemonsDetails.name} /> :
                                            <img className="w-100 h-auto" src={pokemonsDetails.shiny} alt={pokemonsDetails.name} /> :
                                        isFemale ?
                                            <img className="w-100 h-auto" src={pokemonsDetails.female} alt={pokemonsDetails.name} /> :
                                            <img className="w-100 h-auto" src={pokemonsDetails.img} alt={pokemonsDetails.name} />
                                }
                                <div className='mb-100 flex justify-evenly p-5'>
                                    <button className={`bg-${pokemonsDetails.types[0].type.name} 
                                    hover:brightness-75 text-white font-bold py-2 px-4 rounded-full`}
                                        onClick={() => handleShinyClick()}>
                                        Shiny
                                    </button>
                                    <button className={`hover:brightness-75 text-white font-bold py-2 px-4 rounded-full 
                                        bg-${pokemonsDetails.types[0]?.type.name}`}
                                        onClick={() => handleGenderClick()}>
                                        Gender
                                    </button>
                                </div>
                            </div>

                            <div className='grid content-center'>
                                {pokemonsDetails.stats.map((stats) => {
                                    return (
                                        <div className='grid justify-evenly'>
                                            <ul>
                                                <li>
                                                    {stats.stat.name} :
                                                    <div className="w-[300px] bg-gray-500 rounded-full">
                                                        <div className={
                                                            `rounded-fullbg-${pokemonsDetails?.types[0]?.type.name} 
                                                            text-xs font-medium text-center p-0.5 
                                                            bg-${pokemonsDetails.types[0]?.type.name} 
                                                            leading-none rounded-l-full`}
                                                            style={{ width: `${(stats.base_stat)}px` }} >
                                                            {stats.base_stat}
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>

                        </div >
                    </div>
            }
        </>
    )
}
