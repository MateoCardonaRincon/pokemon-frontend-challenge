import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import PokemonListPage from '../pages/PokemonListPage'
import PokemonPage from '../pages/PokemonPage'
import SearchPage from '../pages/SearchPage'

type Props = {}

const PrivateRoutes: React.FC<Props> = (props) => {
    return (
        <Routes>
            <Route path="/pokemons" element={<PokemonListPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/pokemon/:id" element={<PokemonPage />} />
            <Route path="*" element={<LoginPage />} />
        </Routes>
    )
}

export default PrivateRoutes