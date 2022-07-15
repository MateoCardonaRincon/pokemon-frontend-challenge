import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setPokemonAsFavorite } from '../../context/slice/pokemonSlice'
import { useAppDispatch } from '../../context/store'
import { IPokemon } from '../../context/types/pokemonTypes'

type Props = {
    pokemon: IPokemon
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const capitalize = (str: string) => {
        let lowerCased = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lowerCased.slice(1)
    }

    const onAddToFavorites = () => {
        dispatch(setPokemonAsFavorite(pokemon))
    }

    const onGoToDetails = () => {
        navigate("/pokemon/" + pokemon.name)
    }

    return (
        <div className="card bg-card">
            <div className="position-relative">
                <img src={pokemon.sprite} className="card-img-top" />
                <div className="position-absolute top-0 end-0 badge">
                    <span className={"border-0 bg-transparent fs-2 " + (pokemon.isFavorite ? "text-warning" : "text-secondary")}
                        role="button"
                        onClick={onAddToFavorites}>{(pokemon.isFavorite ? "★" : "☆")}</span>
                </div>
            </div>
            <div className="card-body bg-warning bg-card-body">
                <h5 className="card-title fs-6 mb-3 fw-bold p-1 cursor-pointer" role="button" onClick={onGoToDetails}>
                    {capitalize(pokemon.name)}
                </h5>
                {pokemon.types.map(type =>
                    <div className="d-inline bg-success rounded mx-1 px-2 py-1 text-white fw-light" key={type}>
                        <b>{capitalize(type)}</b>
                    </div>
                )}
            </div>
        </div >
    )
}

export default PokemonCard