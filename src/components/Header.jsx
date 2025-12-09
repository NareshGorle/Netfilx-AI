import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Logo, userLogo } from "../utils/constants";



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
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
    return (
        <div className=" absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10  flex justify-between ">
            <img className=" w-44"
                src={Logo}
                alt="Logo" />
            {user && (
                <div className="flex p-2">
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