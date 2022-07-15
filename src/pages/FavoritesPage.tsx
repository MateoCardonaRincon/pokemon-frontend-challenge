import React from 'react'
import { useSelector } from 'react-redux'
import PokemonList from '../components/pokemon/PokemonList'
import { selectPokemons } from '../context/slice/pokemonSlice'

type Props = {}

const FavoritesPage = (props: Props) => {

    const pokemons = useSelector(selectPokemons())

    const favoritePokemons = pokemons.filter(pokemon => pokemon.isFavorite)

    return (favoritePokemons.length === 0 ?
        <div className="mt-3"><h4>You don't have favorite pokemons</h4></div> :
        <PokemonList pokemons={favoritePokemons} />
    )
}

export default FavoritesPage