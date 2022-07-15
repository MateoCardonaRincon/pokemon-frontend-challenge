import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavigationBar from '../components/shared/NavigationBar'
import FavoritesPage from '../pages/FavoritesPage'
import LoginPage from '../pages/LoginPage'
import PokemonListPage from '../pages/PokemonListPage'
import PokemonPage from '../pages/PokemonPage'
import SearchPage from '../pages/SearchPage'

type Props = {}

const PrivateRoutes: React.FC<Props> = (props) => {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/pokemons" element={<PokemonListPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/pokemon/:pokemonName" element={<PokemonPage />} />
                <Route path="*" element={<Navigate to="/pokemons" replace />} />
            </Routes>
        </>
    )
}

export default PrivateRoutes