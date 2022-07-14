import { IPokemon } from "../context/types/pokemonTypes"

export const getPokemon = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    const pokemon: IPokemon = {
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map((element: { type: { name: string } }) => element.type.name),
        isFavorite: false
    }
    return pokemon
}