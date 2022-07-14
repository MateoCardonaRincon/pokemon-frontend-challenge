import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokemon/PokemonCard'
import { selectPokemons } from '../context/slice/pokemonSlice'

type Props = {}

const PokemonListPage = (props: Props) => {

    const pokemons = useSelector(selectPokemons())

    console.log(pokemons)

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

export default PokemonListPage