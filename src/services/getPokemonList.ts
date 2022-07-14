import { createAsyncThunk } from "@reduxjs/toolkit"
import { IRawPokemonList } from "../context/types/pokemonTypes"
import { getPokemon } from "./getPokemonByName"
const PATH = "https://pokeapi.co/api/v2/pokemon/?limit=50"

export const getPokemonList = createAsyncThunk('getPokemonList', async () => {
    const response = await fetch(PATH)
    const data: IRawPokemonList = await response.json()

    const cleanedPokemonList = await Promise.all(
        data.results.map(async pokemon => await getPokemon(pokemon.url)))

    return cleanedPokemonList
})