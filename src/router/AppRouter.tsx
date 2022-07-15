import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAuthLogged } from '../context/slice/authSlice'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import "../App.css"
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import { useAppDispatch } from '../context/store'
import { getPokemonList } from '../services/getPokemonList'

type Props = {}

const AppRouter: React.FC<Props> = (props) => {

    const logged = useSelector(selectAuthLogged())

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemonList())
    }, [])

    return (
        <div className="App">
            <Header />
            {logged ?
                <PrivateRoutes /> : <PublicRoutes />}
            <Footer />
        </div>
    )
}

export default AppRouter