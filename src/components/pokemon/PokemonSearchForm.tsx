import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPokemons } from '../../context/slice/pokemonSlice'
import { IPokemon } from '../../context/types/pokemonTypes'
import PokemonList from './PokemonList'

type Props = {}

const PokemonSearchForm = (props: Props) => {

    const pokemons = useSelector(selectPokemons())

    const [pokemonName, setPokemonName] = useState("")
    const [pokemonsFound, setPokemonsFound] = useState<IPokemon[]>([])

    useEffect(() => {
        setPokemonsFound([])
        if (pokemonName.trim()) {
            const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonName.trim().toLowerCase()))
            setPokemonsFound(filteredPokemons)
        }

    }, [pokemonName, pokemons])

    return (
        <>
            <div className="fluid-container py-3 custom-container">
                <h3>Search a Pokemon</h3>
                <div className="row">
                    <div className="col my-2">
                        <input className="form-control" type="text" placeholder="Type a pokemon name"
                            value={pokemonName}
                            onChange={(e) => setPokemonName(e.target.value)} />
                    </div>
                </div>
                {pokemonsFound.length > 0 ? <></> :
                    <div className="row m-3">
                        <div className="col">
                            <span className="text-primary">No search results</span>
                        </div>
                    </div>}

            </div>

            {pokemonsFound.length > 0 ? <PokemonList pokemons={pokemonsFound} /> : <></>}
        </>
    )
}

export default PokemonSearchForm