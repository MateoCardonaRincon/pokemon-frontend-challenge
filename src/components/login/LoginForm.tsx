import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogged } from '../../context/slice/authSlice'
import { useAppDispatch } from '../../context/store'
import { getPokemonList } from '../../services/getPokemonList'
import GoogleAuthButton from './GoogleAuthButton'

type Props = {}

const LoginForm = (props: Props) => {

    return (
        <div className="fluid-container custom-container my-5">
            <div className="row">
                <h3>Login</h3>
                <p className="my-3 fs-5">
                    Enjoy this Pokedex by logging in
                </p>
                <GoogleAuthButton />
            </div>
        </div>
    )
}

export default LoginForm