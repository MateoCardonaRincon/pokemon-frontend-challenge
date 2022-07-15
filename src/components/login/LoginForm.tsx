import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogged } from '../../context/slice/authSlice'
import { useAppDispatch } from '../../context/store'
import { getPokemonList } from '../../services/getPokemonList'
import GoogleAuthButton from './GoogleAuthButton'

type Props = {}

const LoginForm = (props: Props) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [userName, setUserName] = useState("")

    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (userName) {
            dispatch(setLogged({ logged: true, user: userName }))
            dispatch(getPokemonList())
            navigate("/pokemons")
            setUserName("")
        }
    }

    return (
        <div className="fluid-container custom-container my-5">
            <div className="row">
                <h3>Login</h3>
                <p className="my-3 fs-5">
                    Enjoy this Pokedex by loging in with Google
                </p>
                <GoogleAuthButton />
            </div>
        </div>
    )
}

export default LoginForm