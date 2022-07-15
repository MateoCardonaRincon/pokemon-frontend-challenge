import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAuthUser, setLogged } from '../../context/slice/authSlice'
import { useAppDispatch } from '../../context/store'
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

type Props = {}

const NavigationBar = (props: Props) => {

    const user = useSelector(selectAuthUser())
    const dispatch = useAppDispatch()

    const onLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setLogged({ logged: false, user: "Mateo C.R." }))
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded mb-3 sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/pokemons">
                    <img className="cursor-pointer" src="./src/assests/pokeball.png" width="42" height="42" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mx-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/search">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favorites</Link>
                        </li>
                    </ul>
                    <div className="row align-items-center mx-2">
                        <div className="col-md-8 my-2">
                            <span className="text-white mx-3">Welcome, {user}</span>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-secondary text-nowrap m-0" onClick={(e) => onLogout(e)}>Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar