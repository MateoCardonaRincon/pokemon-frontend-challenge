import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { authStateType } from "../types/authTypes"

const initialState: authStateType = {
    logged: localStorage.getItem('email') ? true : false,
    userEmail: localStorage.getItem('email'),
    photo: localStorage.getItem('photo'),
    userName: localStorage.getItem('name')
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogged(state, action) {
            return {
                ...state, logged: action.payload.logged,
                userEmail: action.payload.userEmail,
                photo: action.payload.photo,
                userName: action.payload.userName
            }
        }
    }
})

export type { authStateType }
export default authSlice.reducer
export const { setLogged } = authSlice.actions

export const selectAuthState = () => (state: RootState) => state.auth
export const selectAuthLogged = () => (state: RootState) => state.auth.logged
export const selectAuthUser = () => (state: RootState) => state.auth.userName
export const selectAuthUserPhoto = () => (state: RootState) => state.auth.photo