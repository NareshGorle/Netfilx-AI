import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Logo, SUPPORTED_LAGUAGES, userLogo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                navigate("/error")
            });

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // user signin
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: userLogo
                    })
                );
                navigate("/browser")
            } else {
                // User is signed out
                dispatch(removeUser())
                navigate("/")
            }
        });
        // unsubscribe when component unmouts
        return () => unSubscribe();
    }, [])

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
    }
    const handleLanguageChange = (e) => {
        // console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }
    return (
        <div className=" absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10  flex justify-between ">
            <img className=" w-44"
                src={Logo}
                alt="Logo" />
            {user && (
                <div className="flex p-2">
                    {showGptSearch &&
                        (<select className="py-1 px-2 rounded-2xl bg-gray-600 text-white" onChange={handleLanguageChange}>

                            {SUPPORTED_LAGUAGES.map(lang => (
                                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                            ))}

                        </select>)}
                    <button
                        className="py-2 px-4 mx-4 my-2 bg-purple-600 text-white rounded-lg"
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "Home Page" : "GEMINI Search"}
                    </button>
                    <img
                        className="w-16 h-16"
                        alt="user icon"
                        src={userLogo}
                    />
                    <button onClick={handleSignOut} className="font-bold  text-white cursor-pointer">Sign Out</button>
                </div>)}
        </div>
    )
}
export default Header