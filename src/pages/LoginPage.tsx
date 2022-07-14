import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAuthLogged, setLogged } from '../context/slice/authSlice'
import { useAppDispatch } from '../context/store'

type Props = {}

const LoginPage = (props: Props) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [userName, setUserName] = useState("")

    const logged = useSelector(selectAuthLogged())

    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setLogged({ logged: true, user: userName }))
        navigate("/pokemons")
        setUserName("")
    }

    return (
        <div>
            <div className="container border rounded-3 shadow p-5">
                <h3>Log In</h3>
                <div className="row my-3 p-2">
                    <input className="form-control" type="text" placeholder="Type your name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="row my-3 p-2">
                    <button className="btn btn-primary" onClick={(e) => onLogin(e)}>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage