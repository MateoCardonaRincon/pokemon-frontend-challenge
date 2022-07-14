import { fetchStateEnum } from "./sharedTypes"

export interface IRawPokemon {
    name: string,
    url: string
}

export interface IRawPokemonList {
    count: number,
    next: string,
    previous: null,
    results: IRawPokemon[]
}

export interface IPokemon {
    name: string,
    sprite: string,
    types: string[],
    isFavorite: boolean
}

export type pokemonStateType = {
    pokemons: IPokemon[],
    pokemon?: IPokemon,
    status: fetchStateEnum,
    error: string | null
}