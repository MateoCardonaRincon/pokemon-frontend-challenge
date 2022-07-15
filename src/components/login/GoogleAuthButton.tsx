import { signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { useAppDispatch } from "../../context/store";
import { setLogged } from "../../context/slice/authSlice";
import { getPokemonList } from "../../services/getPokemonList";

const googleAuthProvider = new GoogleAuthProvider();

type Props = {}

const GoogleAuthButton: React.FC<Props> = (props) => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const signInWithGoogleButton = () => {

        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const user = result.user;

                dispatch(setLogged({
                    logged: true,
                    userName: user.displayName,
                    userEmail: user.email,
                    photo: user.photoURL
                }))
                dispatch(getPokemonList())
                localStorage.setItem('email', `${user.email}`)
                localStorage.setItem('photo', `${user.photoURL}`)
                localStorage.setItem('name', `${user.displayName}`)

                navigate('/pokemons')
            }).catch((error) => {
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }


    return (
        <div className="d-flex justify-content-center">
            <button className="d-flex btn btn-outline-dark align-items-center" onClick={signInWithGoogleButton}>
                <img src="https://freepngimg.com/download/google/66274-school-google-pearl-button-up-sign-middle.png"
                    height="40" width="40" />
                <span className="ms-2 fs-5"> Login</span>
            </button>
        </div>
    );
};

export default GoogleAuthButton