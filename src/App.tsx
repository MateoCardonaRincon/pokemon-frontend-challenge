import { Provider, useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "./context/store"
import AppRouter from "./router/AppRouter"

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </BrowserRouter>
    )
}

export default App
