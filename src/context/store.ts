import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./slice/authSlice"
import pokemonReducer from "./slice/pokemonSlice"

export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            pokemons: pokemonReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()