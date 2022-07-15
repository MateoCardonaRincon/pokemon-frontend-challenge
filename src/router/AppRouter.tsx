import React from 'react'
import { useSelector } from 'react-redux'
import { selectAuthLogged, selectAuthUser } from '../context/slice/authSlice'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import "../App.css"
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

type Props = {}

const AppRouter: React.FC<Props> = (props) => {

    const logged = useSelector(selectAuthLogged())

    return (
        <div className="App">
            {logged ?
                <>
                    <Header />
                    <PrivateRoutes />
                </> : <PublicRoutes />}
            <Footer />
        </div>
    )
}

export default AppRouter