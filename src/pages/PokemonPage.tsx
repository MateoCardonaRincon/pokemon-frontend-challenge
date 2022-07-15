import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PokemonCard from '../components/pokemon/PokemonCard'
import { selectPokemons } from '../context/slice/pokemonSlice'

type Props = {}

const PokemonPage: React.FC<Props> = (props: Props) => {

    const { pokemonName } = useParams()

    const pokemons = useSelector(selectPokemons())

    const selectedPokemon = pokemons.find(pokemon => pokemon.name === pokemonName)

    return (
        <div className="container">
            <div className="d-flex row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <PokemonCard pokemon={selectedPokemon} />
                </div>
            </div>
        </div>

    )
}

export default PokemonPage