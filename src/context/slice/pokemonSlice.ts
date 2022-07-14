import { createSlice } from "@reduxjs/toolkit"
import { getPokemonList } from "../../services/getPokemonList"
import { RootState } from "../store"
import { pokemonStateType } from "../types/pokemonTypes"
import { fetchStateEnum } from "../types/sharedTypes"

const initialState: pokemonStateType = {
    pokemons: [],
    status: fetchStateEnum.IDLE,
    error: null
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all pokemons
        builder.addCase(getPokemonList.pending, (state) => {
            state.status = fetchStateEnum.PENDING;
        })
        builder.addCase(getPokemonList.fulfilled, (state, action) => {
            state.status = fetchStateEnum.COMPLETED;
            state.pokemons = action.payload
        })
        builder.addCase(getPokemonList.rejected, (state) => {
            state.status = fetchStateEnum.FAILED;
            state.error = "Something went wrong fetching the pokemons"
            state.pokemons = []
        })
    }
})

export default pokemonSlice.reducer

export const selectPokemonsState = () => (state: RootState) => state.pokemons
export const selectPokemons = () => (state: RootState) => state.pokemons.pokemons
export const selectPokemon = () => (state: RootState) => state.pokemons.pokemon