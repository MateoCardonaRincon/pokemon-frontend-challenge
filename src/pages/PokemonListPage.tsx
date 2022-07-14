import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokemon/PokemonCard'
import PokemonList from '../components/pokemon/PokemonList'
import { selectPokemons } from '../context/slice/pokemonSlice'

type Props = {}

const PokemonListPage = (props: Props) => {

    const pokemons = useSelector(selectPokemons())

    return (
        <PokemonList pokemons={pokemons} />
    )
}

export default PokemonListPage