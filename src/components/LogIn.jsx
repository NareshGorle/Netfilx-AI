import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/vadidate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND, userLogo } from "../utils/constants";



const LogIn = () => {

    const dispatch = useDispatch
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errMessage, setErrMessage] = useState("")

    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleFormValidate = () => {
        const message = checkValidData(email?.current?.value, password?.current?.value, name?.current?.value)
        setErrMessage(message);
        if (message) return;

        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
                name.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://instagram.fvga12-1.fna.fbcdn.net/v/t51.2885-19/573611821_18344832736204132_2637390128169313029_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fvga12-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QESPKl2I3ChLui47H_f5TkmbGGrswXrogKI90uJCMQsE67GE30tkJ8z8aZ4yzUtcBGSBC2EukstbdPuVij2u3jp&_nc_ohc=4BfKQqyviS8Q7kNvwE6XXJj&_nc_gid=UBtsGvP7evdAm2grAWek4g&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afm6_3eIihVhVH3ttVY0dsAjoHrCtZW5sBfrny86X2EETg&oe=69386B7F&_nc_sid=7a9f4b"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: userLogo

                            })
                        );

                        //     navigate("/browser")
                    }).catch((error) => {
                        // An error occurred
                        setErrMessage(error.message)



                    });

                    // navigate("/browser")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + " -" + errorMessage)
                });


        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,

            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // navigate("/browser")


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + " -" + errorMessage)
                });
        }

    }

    const toggleSignTitle = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>

            <div className="absolute">
                <img className="bg-cover w-full"
                    src={BACKGROUND}
                    alt="bg-img" />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className="absolute w-3/12 p-12  my-36 mx-auto right-0 left-0 text-white bg-black/80">
                <h1 className="text-3xl font-bold py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && <input
                    type="text"
                    ref={name}
                    placeholder="Enter Name"
                    className="p-4 my-4 w-full bg-gray-600" />}
                <input
                    type="text"
                    placeholder="Email address"
                    ref={email}
                    className="p-4 my-4 w-full bg-gray-600" />

                <input
                    type="Password"
                    ref={password}
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-600" />
                <p className="text-red-600 font-bold text-lg py-2">{errMessage}</p>

                <button
                    className="bg-red-600 text-white p-4 my-4 w-full"
                    onClick={handleFormValidate}>
                    {isSignInForm ? "Sign In" : "Sign Up"}

                </button>

                <h5 className="p-5 cursor-pointer " onClick={toggleSignTitle}>
                    {isSignInForm ? " New to Netfilx? Singn up now" : "Already registered? Sign in Now."}
                    .</h5>
            </form>
        </div>
    )
}
export default LogIn
