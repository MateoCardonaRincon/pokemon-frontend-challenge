import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAuthUser, setLogged } from '../../context/slice/authSlice'
import { useAppDispatch } from '../../context/store'

type Props = {}

const NavigationBar = (props: Props) => {

    const user = useSelector(selectAuthUser())
    const dispatch = useAppDispatch()

    const onLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setLogged({ logged: false, user: "Mateo C.R." }))
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded mb-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/pokemons">
                    <img className="cursor-pointer" src="./src/assests/pokeball.png" width="42" height="42" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/search">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favorites</Link>
                        </li>
                    </ul>

                    <span className="text-white mx-3">Welcome, {user}</span>
                    <button className="btn btn-secondary me-2" onClick={(e) => onLogout(e)}>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar