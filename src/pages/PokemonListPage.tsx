import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PokemonList from '../components/pokemon/PokemonList'
import Loader from '../components/shared/Loader'
import { selectPokemons } from '../context/slice/pokemonSlice'
import { useAppDispatch } from '../context/store'
import { getPokemonList } from '../services/getPokemonList'

type Props = {}

const PokemonListPage = (props: Props) => {

    const pokemons = useSelector(selectPokemons())

    return (
        <>
            {pokemons.length === 0 ? <Loader /> :

                <PokemonList pokemons={pokemons} />}
        </>
    )
}

export default PokemonListPage