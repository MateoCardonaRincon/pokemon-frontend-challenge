import React from 'react'
import { useSelector } from 'react-redux'
import { selectPokemons } from '../../context/slice/pokemonSlice'
import { IPokemon } from '../../context/types/pokemonTypes'
import PokemonCard from './PokemonCard'

type Props = {
    pokemons: IPokemon[]
}

const PokemonList: React.FC<Props> = ({ pokemons }) => {

    return (
        <div className="container">
            <div className="row">
                {pokemons.map(pokemon =>
                    <div className="col-lg-3 col-md-4 col-sm-6 p-1 rounded" key={pokemon.name}>
                        <PokemonCard pokemon={pokemon} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PokemonList