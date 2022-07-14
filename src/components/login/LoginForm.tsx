import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogged } from '../../context/slice/authSlice'
import { useAppDispatch } from '../../context/store'
import { getPokemonList } from '../../services/getPokemonList'

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
        <div className="fluid-container py-3 custom-container">
            <div className="row">
                <h3>Login</h3>
                <p className="text-start my-3">
                    Type your name and then click on <b>Go</b> to see all Pokemons
                </p>
                <div className="col-sm-9 my-2">
                    <input className="form-control" type="text" placeholder="Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="col-sm-3 my-2">
                    <button className="btn btn-primary w-100" onClick={(e) => onLogin(e)}>Go</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm