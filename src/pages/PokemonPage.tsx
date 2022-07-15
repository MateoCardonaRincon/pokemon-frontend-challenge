import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import PokemonCard from '../components/pokemon/PokemonCard'
import { selectPokemons } from '../context/slice/pokemonSlice'

type Props = {}

const PokemonPage: React.FC<Props> = (props: Props) => {

    const { pokemonName } = useParams()

    const pokemons = useSelector(selectPokemons())

    const navigate = useNavigate();

    const selectedPokemon = pokemons.find(pokemon => pokemon.name === pokemonName)

    useEffect(() => {
        if (pokemons.length === 0) {
            navigate("/pokemons")
        }
    }, [pokemons])

    return (
        <div className="container">
            <div className="d-flex row justify-content-center">
                {selectedPokemon ? <div className="col-lg-4 col-md-6 col-sm-8">
                    <PokemonCard pokemon={selectedPokemon} />
                </div> : <></>}
            </div>
            <div className="d-flex row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <button className="btn btn-primary w-100 mt-2" onClick={() => { navigate("/pokemons") }}>
                        Back to Pokemon List
                    </button>
                </div>
            </div>
        </div>

    )
}

export default PokemonPage